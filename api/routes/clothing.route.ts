import { OpenAPIHono, createRoute, z } from '@hono/zod-openapi';
import { analyzeImage } from '../integration/gemini.js';
import db from '../lib/db.js';

const app = new OpenAPIHono();

// スキーマ定義
const MaterialSchema = z.object({
  name: z.string().openapi({ example: 'ポリエステル' }),
  percent: z.number().openapi({ example: 100 }),
}).openapi('Material');

const ClothingSchema = z.object({
  id: z.string().openapi({ example: 'uuid-1234' }),
  userName: z.string().openapi({ example: 'Default' }),
  name: z.string().openapi({ example: 'セーター' }),
  category: z.string().nullable().openapi({ example: 'セーター' }),
  advice: z.string().nullable().openapi({ example: '冬場に活躍します' }),
  imageUrl: z.string().nullable(),
  createdAt: z.date().or(z.string()),
  materials: z.array(MaterialSchema),
}).openapi('Clothing');

const AnalysisResponseSchema = z.object({
  materials: z.array(MaterialSchema),
  category: z.string().openapi({ example: 'セーター' }),
  advice: z.string().openapi({ example: '静電気が発生しやすい素材です' }),
}).openapi('AnalysisResponse');

const ErrorSchema = z.object({
  error: z.string(),
  details: z.string().optional(),
}).openapi('Error');

// ルート定義
const listRoute = createRoute({
  method: 'get',
  path: '/',
  request: {
    query: z.object({
      userName: z.string().optional().openapi({ example: 'Default' }),
    }),
  },
  responses: {
    200: {
      content: {
        'application/json': {
          schema: z.array(ClothingSchema),
        },
      },
      description: '服装一覧を返します',
    },
  },
});

const createRouteDef = createRoute({
  method: 'post',
  path: '/',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z.object({
            id: z.string(),
            userName: z.string().optional(),
            name: z.string(),
            category: z.string().optional(),
            advice: z.string().optional(),
            imageUrl: z.string().optional(),
            createdAt: z.string(),
            materials: z.array(MaterialSchema),
          }),
        },
      },
    },
  },
  responses: {
    200: {
      content: {
        'application/json': {
          schema: z.object({
            success: z.boolean(),
            item: ClothingSchema,
          }),
        },
      },
      description: '服装を登録しました',
    },
    500: {
      content: {
        'application/json': {
          schema: ErrorSchema,
        },
      },
      description: '登録エラー',
    },
  },
});

const deleteRoute = createRoute({
  method: 'delete',
  path: '/{id}',
  request: {
    params: z.object({
      id: z.string(),
    }),
  },
  responses: {
    200: {
      content: {
        'application/json': {
          schema: z.object({ success: z.boolean() }),
        },
      },
      description: '削除成功',
    },
    500: {
      content: {
        'application/json': {
          schema: ErrorSchema,
        },
      },
      description: '削除エラー',
    },
  },
});

const analyzeRoute = createRoute({
  method: 'post',
  path: '/analyze',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z.object({
            image: z.string(),
            mimeType: z.string(),
          }),
        },
      },
    },
  },
  responses: {
    200: {
      content: {
        'application/json': {
          schema: AnalysisResponseSchema,
        },
      },
      description: '画像を解析して素材情報を返します',
    },
    400: {
      content: {
        'application/json': {
          schema: ErrorSchema,
        },
      },
      description: 'リクエスト不正',
    },
    500: {
      content: {
        'application/json': {
          schema: ErrorSchema,
        },
      },
      description: '解析エラー',
    },
  },
});

// ハンドラー登録
app.openapi(listRoute, async (c) => {
  const userName = c.req.query('userName') || 'Default';
  try {
    const items = await db.clothes.findMany({
      where: { userName },
      orderBy: { createdAt: 'desc' },
      include: { materials: true }
    });
    return c.json(items, 200) as any;
  } catch (error: any) {
    return c.json({ error: 'Failed to fetch clothes' }, 500) as any;
  }
});

app.openapi(createRouteDef, async (c) => {
  const item = await c.req.json();
  const userName = item.userName || 'Default';
  
  try {
    const savedItem = await db.clothes.create({
      data: {
        id: item.id,
        userName,
        name: item.name,
        category: item.category ?? null,
        advice: item.advice ?? null,
        imageUrl: item.imageUrl ?? null,
        createdAt: item.createdAt,
        materials: {
          create: (item.materials || []).map((m: any) => ({
            name: m.name,
            percent: m.percent
          }))
        }
      },
      include: { materials: true }
    });
    return c.json({ success: true, item: savedItem }, 200) as any;
  } catch (e: any) {
    console.error('Save failed:', e);
    return c.json({ error: 'Failed to save clothing', details: e.message }, 500) as any;
  }
});

app.openapi(deleteRoute, async (c) => {
  const id = c.req.param('id');
  try {
    await db.clothes.delete({
      where: { id }
    });
    return c.json({ success: true }, 200) as any;
  } catch (e: any) {
    console.error('Delete failed:', e);
    return c.json({ error: 'Failed to delete clothing' }, 500) as any;
  }
});

app.openapi(analyzeRoute, async (c) => {
  try {
    const { image, mimeType } = await c.req.json();
    
    if (!image || !mimeType) {
      return c.json({ error: 'Image and mimeType are required' }, 400) as any;
    }

    const prompt = `この衣服のタグの写真から、素材（材質）情報を抽出してください。
以下のJSON形式のみで回答を返してください。それ以外のテキストは一切含めないでください。

{
  "materials": [
    { "name": "素材名(例: ポリエステル, ウール等)", "percent": 数値(例: 100) }
  ],
  "category": "服の種類(例: セーター, シャツ等)",
  "advice": "その素材に関する短い一言メモ"
}

素材名が不明な場合は、推測される情報を入れてください。`;

    const resultText = await analyzeImage(image, mimeType, prompt);
    const jsonMatch = resultText.match(/\{[\s\S]*\}/);
    if (!jsonMatch) {
      throw new Error('Failed to parse AI response as JSON');
    }
    
    const analysis = JSON.parse(jsonMatch[0]);
    return c.json(analysis, 200) as any;

  } catch (error: any) {
    console.error('Clothing analysis error:', error);
    return c.json({ error: 'Failed to analyze clothing image', details: error.message }, 500) as any;
  }
});

export default app;
