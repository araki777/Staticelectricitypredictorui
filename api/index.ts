import { serve } from '@hono/node-server';
import { Hono } from 'hono';
import { cors } from 'hono/cors';
import jmaRoute from './routes/jma.route.js';
import aiRoute from './routes/ai.route.js';
import clothingRoute from './routes/clothing.route.js';
import zapRoute from './routes/zap.route.js';

const app = new Hono();

// CORSの設定
app.use('/*', cors());

// JMA関連のルートを追加
app.route('/api/jma', jmaRoute);
app.route('/api/ai', aiRoute);
app.route('/api/clothing', clothingRoute);
app.route('/api/zap', zapRoute);


// ルートエンドポイント
app.get('/', (c) => {
  return c.text('JMA AMeDAS Proxy API with Hono');
});

// ポート設定
const port = 3001;
console.log(`Server is running on http://localhost:${port}`);

serve({
  fetch: app.fetch,
  port,
});

export default app;
