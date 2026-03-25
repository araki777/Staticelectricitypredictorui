import { Hono } from 'hono';
import db from '../lib/db.js';

const app = new Hono();

/**
 * 過去の静電気インシデント一覧を取得します
 */
app.get('/', (c) => {
  const userName = c.req.query('userName') || 'Default';
  const incidents = db.prepare('SELECT * FROM incidents WHERE userName = ? ORDER BY date DESC, time DESC').all(userName);
  return c.json(incidents);
});

/**
 * 静電気インシデントを登録します
 */
app.post('/', async (c) => {
  const incident = await c.req.json();
  const userName = incident.userName || 'Default';
  
  db.prepare(`
    INSERT INTO incidents (id, userName, date, time, humidity, temperature, clothing)
    VALUES (?, ?, ?, ?, ?, ?, ?)
  `).run(
    incident.id,
    userName,
    incident.date,
    incident.time,
    incident.humidity ?? null,
    incident.temperature ?? null,
    incident.clothing ?? null
  );

  return c.json({ success: true, incident });
});


export default app;
