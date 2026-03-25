import { serve } from '@hono/node-server';
import { OpenAPIHono } from '@hono/zod-openapi';
import { swaggerUI } from '@hono/swagger-ui';
import { cors } from 'hono/cors';
import jmaRoute from './routes/jma.route.js';
import aiRoute from './routes/ai.route.js';
import clothingRoute from './routes/clothing.route.js';
import zapRoute from './routes/zap.route.js';

const app = new OpenAPIHono();

// CORSの設定
app.use('/*', cors());

// JMA関連のルートを追加
app.route('/api/jma', jmaRoute);
app.route('/api/ai', aiRoute);
app.route('/api/clothing', clothingRoute);
app.route('/api/zap', zapRoute);


// ルートエンドポイント
app.get('/', (c) => {
  return c.text('JMA AMeDAS Proxy API with Hono - OpenAPI and Swagger UI enabled');
});

// OpenAPI ドキュメント設定 (ルート登録の後に配置)
app.doc('/openapi.json', {
  openapi: '3.0.0',
  info: {
    title: 'Static Electricity Predictor API',
    version: '1.0.0',
  },
});

// Swagger UI
app.get('/docs', swaggerUI({ url: '/openapi.json' }));

// ポート設定
const port = 3001;

if (process.env.NODE_ENV !== 'production' && !process.env.AZURE_FUNCTIONS_ENVIRONMENT) {
  console.log(`Server is running on http://localhost:${port}`);
  serve({
    fetch: app.fetch,
    port,
  });
}

export default app;

