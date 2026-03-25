import { Hono } from 'hono';
import { JmaApi } from '../integration/jma.js';
import { calculateStaticRisk } from '../lib/weather.js';

const app = new Hono();

/**
 * 主要な観測地点リストの取得
 */
app.get('/stations', async (c) => {
  try {
    const stations = await JmaApi.getMajorStations();
    return c.json(stations);
  } catch (error: any) {
    return c.json({ error: 'Failed to fetch stations' }, 500);
  }
});

/**
 * 指定地点の最新気象データとリスクレベルをセットで取得
 */
app.get('/weather/:code', async (c) => {
  const code = c.req.param('code');
  const material = c.req.query('material');
  
  try {
    const data = await JmaApi.getLatestPointData(code);
    if (!data) return c.json({ error: 'Weather data not found' }, 404);

    const humidity = data.humidity?.[0] ?? null;
    const temperature = data.temp?.[0] ?? null;

    if (humidity === null || temperature === null) {
      return c.json({ error: 'Incomplete weather data' }, 500);
    }

    const riskLevel = calculateStaticRisk(humidity, temperature, material);
    
    return c.json({
      humidity,
      temperature,
      riskLevel
    });
  } catch (error) {
    return c.json({ error: 'Failed to fetch weather data' }, 500);
  }
});

// 互換性のために古いエンドポイントも維持（必要に応じて削除可）
app.get('/table', async (c) => {
  const table = await JmaApi.getAmedasTable();
  return c.json(table);
});

app.get('/point/:code', async (c) => {
  const code = c.req.param('code');
  const data = await JmaApi.getLatestPointData(code);
  return c.json(data);
});

export default app;
