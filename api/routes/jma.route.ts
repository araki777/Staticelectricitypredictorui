import { OpenAPIHono, createRoute, z } from '@hono/zod-openapi';
import { JmaApi } from '../integration/jma.js';
import { calculateStaticRisk } from '../lib/weather.js';

const app = new OpenAPIHono();

// スキーマ定義
const StationSchema = z.object({
  code: z.string().openapi({ example: '44132' }),
  name: z.string().openapi({ example: '東京' }),
  enName: z.string().optional(),
}).openapi('Station');

const WeatherResponseSchema = z.object({
  humidity: z.number().openapi({ example: 45 }),
  temperature: z.number().openapi({ example: 20 }),
  riskLevel: z.enum(['LOW', 'MEDIUM', 'HIGH']).openapi({ example: 'MEDIUM' }),
}).openapi('WeatherResponse');

const ErrorSchema = z.object({
  error: z.string(),
  details: z.string().optional(),
}).openapi('Error');

// ルート定義: 会場リスト
const stationsRoute = createRoute({
  method: 'get',
  path: '/stations',
  responses: {
    200: {
      content: {
        'application/json': {
          schema: z.array(StationSchema),
        },
      },
      description: '観測地点リストを取得します',
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

// ルート定義: 天気とリスク
const weatherRoute = createRoute({
  method: 'get',
  path: '/weather/{code}',
  request: {
    params: z.object({
      code: z.string().openapi({ example: '44132' }),
    }),
    query: z.object({
      material: z.string().optional().openapi({ example: 'polyester' }),
    }),
  },
  responses: {
    200: {
      content: {
        'application/json': {
          schema: WeatherResponseSchema,
        },
      },
      description: '指定地点の天気データと静電気リスクを取得します',
    },
    404: {
      content: {
        'application/json': {
          schema: ErrorSchema,
        },
      },
      description: '地点が見つかりません',
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
app.openapi(stationsRoute, async (c) => {
  try {
    const stations = await JmaApi.getMajorStations();
    return c.json(stations, 200) as any;
  } catch (error: any) {
    return c.json({ error: 'Failed to fetch stations' }, 500) as any;
  }
});

app.openapi(weatherRoute, async (c) => {
  const code = c.req.param('code');
  const material = c.req.query('material');
  
  try {
    const data = await JmaApi.getLatestPointData(code);
    if (!data) return c.json({ error: 'Weather data not found' }, 404) as any;

    const humidity = data.humidity?.[0] ?? null;
    const temperature = data.temp?.[0] ?? null;

    if (humidity === null || temperature === null) {
      return c.json({ error: 'Incomplete weather data' }, 500) as any;
    }

    const riskLevel = calculateStaticRisk(humidity, temperature, material);
    
    return c.json({
      humidity,
      temperature,
      riskLevel
    }, 200) as any;
  } catch (error) {
    return c.json({ error: 'Failed to fetch weather data' }, 500) as any;
  }
});

export default app;
