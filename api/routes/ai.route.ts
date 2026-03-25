import { Hono } from 'hono';
import { getGeminiModel } from '../integration/gemini.js';

const aiRoute = new Hono();

/**
 * AIによる静電気対策アドバイスの生成
 */
aiRoute.post('/advice', async (c) => {
  const { humidity, temperature } = await c.req.json();

  try {
    const model = getGeminiModel();
    if (!model) {
      return c.json({ error: 'AI設定が未完了、またはAPIキーが設定されていません。' }, 400);
    }

    const prompt = `あなたは気象と生活の知恵のエキスパートです。
以下の現在の気象データに基づき、静電気対策や快適に過ごすための短く実用的なアドバイスを日本語で1つの段落（100文字程度）で提供してください。
- 湿度: ${humidity}%
- 気温: ${temperature}℃

回答は、親しみやすく、かつ専門的な雰囲気を保ってください。`;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const advice = response.text();

    return c.json({ advice });
  } catch (error: any) {
    console.error('AI Advice generation error:', error);
    return c.json({ error: 'アドバイスの生成中にエラーが発生しました。', details: error.message }, 500);
  }
});

export default aiRoute;
