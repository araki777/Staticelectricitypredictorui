import { OpenAPIHono, createRoute, z } from '@hono/zod-openapi';
import { getGeminiModel } from '../integration/gemini.js';

const app = new OpenAPIHono();

// スキーマ定義
const AdviceRequestSchema = z.object({
  humidity: z.number().openapi({ example: 45 }),
  temperature: z.number().openapi({ example: 20 }),
}).openapi('AdviceRequest');

const AdviceResponseSchema = z.object({
  advice: z.string().openapi({ example: '湿度が高いため、静電気のリスクは低いです。...' }),
}).openapi('AdviceResponse');

const ErrorSchema = z.object({
  error: z.string(),
  details: z.string().optional(),
}).openapi('Error');

// ルート定義
const adviceRoute = createRoute({
  method: 'post',
  path: '/advice',
  request: {
    body: {
      content: {
        'application/json': {
          schema: AdviceRequestSchema,
        },
      },
    },
  },
  responses: {
    200: {
      content: {
        'application/json': {
          schema: AdviceResponseSchema,
        },
      },
      description: 'AIによるアドバイスを返します',
    },
    400: {
      content: {
        'application/json': {
          schema: ErrorSchema,
        },
      },
      description: '不正なリクエスト',
    },
    500: {
      content: {
        'application/json': {
          schema: ErrorSchema,
        },
      },
      description: 'サーバーエラー',
    },
  },
});

// ハンドラー登録
app.openapi(adviceRoute, async (c) => {
  const { humidity, temperature } = await c.req.json();

  try {
    const model = getGeminiModel();
    if (!model) {
      return c.json({ 
        error: 'AI設定が未完了、またはAPIキーが設定されていません。' 
      }, 400);
    }

    const prompt = `あなたは気象と生活の知恵のエキスパートです。
以下の現在の気象データに基づき、静電気対策や快適に過ごすための短く実用的なアドバイスを日本語で1つの段落（100文字程度）で提供してください。
- 湿度: ${humidity}%
- 気温: ${temperature}℃

回答は、親しみやすく、かつ専門的な雰囲気を保ってください。`;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const advice = response.text();

    return c.json({ advice }, 200);
  } catch (error: any) {
    console.error('AI Advice generation error:', error);
    return c.json({ 
      error: 'アドバイスの生成中にエラーが発生しました。', 
      details: error instanceof Error ? error.message : String(error) 
    }, 500);
  }
});

export default app;
