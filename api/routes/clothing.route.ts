import { Hono } from 'hono';
import { analyzeImage } from '../integration/gemini.js';
import db from '../lib/db.js';

const app = new Hono();

/**
 * 登録済みの服装一覧を取得します
 */
app.get('/', (c) => {
  const userName = c.req.query('userName') || 'Default';
  const clothes = db.prepare('SELECT * FROM clothes WHERE userName = ? ORDER BY createdAt DESC').all(userName) as any[];
  
  // 各アイテムの素材情報を取得
  const items = clothes.map(item => {
    const materials = db.prepare('SELECT name, percent FROM materials WHERE clothingId = ?').all(item.id);
    return { ...item, materials };
  });

  return c.json(items);
});

/**
 * 服装を登録します
 */
app.post('/', async (c) => {
  const item = await c.req.json();
  const userName = item.userName || 'Default';
  
  const insertClothing = db.prepare(`
    INSERT INTO clothes (id, userName, name, category, advice, imageUrl, createdAt)
    VALUES (?, ?, ?, ?, ?, ?, ?)
  `);

  const insertMaterial = db.prepare(`
    INSERT INTO materials (clothingId, name, percent)
    VALUES (?, ?, ?)
  `);

  // node:sqlite (DatabaseSync) does not have a high-level transaction() method like better-sqlite3
  db.exec('BEGIN');
  try {
    insertClothing.run(
      item.id, 
      userName,
      item.name, 
      item.category ?? null, 
      item.advice ?? null, 
      item.imageUrl ?? null, 
      item.createdAt
    );
    for (const m of item.materials) {
      insertMaterial.run(item.id, m.name, m.percent);
    }
    db.exec('COMMIT');
  } catch (e) {
    db.exec('ROLLBACK');
    console.error('Transaction failed:', e);
    return c.json({ error: 'Failed to save clothing', details: (e as any).message }, 500);
  }

  return c.json({ success: true, item });
});



/**
 * 服装を削除します
 */
app.delete('/:id', (c) => {
  const id = c.req.param('id');
  db.prepare('DELETE FROM clothes WHERE id = ?').run(id);
  return c.json({ success: true });
});

/**
 * 写真（衣服のタグ等）を解析して素材情報を抽出します。
 */
app.post('/analyze', async (c) => {
// ...

  try {
    const { image, mimeType } = await c.req.json();
    
    if (!image || !mimeType) {
      return c.json({ error: 'Image and mimeType are required' }, 400);
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
    
    // AIの回答からJSON部分を抽出 (稀にMarkdownが含まれる場合への対策)
    const jsonMatch = resultText.match(/\{[\s\S]*\}/);
    if (!jsonMatch) {
      throw new Error('Failed to parse AI response as JSON');
    }
    
    const analysis = JSON.parse(jsonMatch[0]);
    return c.json(analysis);

  } catch (error: any) {
    console.error('Clothing analysis error:', error);
    return c.json({ error: 'Failed to analyze clothing image', details: error.message }, 500);
  }
});

export default app;
