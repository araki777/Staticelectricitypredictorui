import { OpenAPIHono, createRoute, z } from '@hono/zod-openapi';
import db from '../lib/db.js';

const app = new OpenAPIHono();

// スキーマ定義
const IncidentSchema = z.object({
  id: z.string().openapi({ example: 'uuid-1234' }),
  userName: z.string().openapi({ example: 'Default' }),
  date: z.string().openapi({ example: '2025-03-25' }),
  time: z.string().openapi({ example: '15:30' }),
  humidity: z.number().nullable().openapi({ example: 45 }),
  temperature: z.number().nullable().openapi({ example: 20 }),
  clothing: z.string().nullable().openapi({ example: 'polyester shirt' }),
}).openapi('Incident');

const SuccessResponseSchema = z.object({
  success: z.boolean().openapi({ example: true }),
  incident: IncidentSchema,
}).openapi('SuccessResponse');

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
          schema: z.array(IncidentSchema),
        },
      },
      description: 'インシデント一覧を返します',
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
          schema: IncidentSchema,
        },
      },
    },
  },
  responses: {
    200: {
      content: {
        'application/json': {
          schema: SuccessResponseSchema,
        },
      },
      description: 'インシデントを登録しました',
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

// ハンドラー登録
app.openapi(listRoute, async (c) => {
  const userName = c.req.query('userName') || 'Default';
  const prisma = await db();
  const incidents = await prisma.incidents.findMany({
    where: { userName },
    orderBy: [
      { date: 'desc' },
      { time: 'desc' }
    ]
  });
  return c.json(incidents, 200);
});

app.openapi(createRouteDef, async (c) => {
  const incident = await c.req.json();
  const userName = incident.userName || 'Default';
  
  try {
    const prisma = await db();
    const savedIncident = await prisma.incidents.create({
      data: {
        id: incident.id,
        userName,
        date: incident.date,
        time: incident.time,
        humidity: incident.humidity ?? null,
        temperature: incident.temperature ?? null,
        clothing: incident.clothing ?? null
      }
    });

    return c.json({ success: true, incident: savedIncident }, 200);
  } catch (e: any) {
    console.error('Incident save failed:', e);
    return c.json({ 
      error: 'Failed to save incident', 
      details: e instanceof Error ? e.message : String(e) 
    }, 500);
  }
});

export default app;
