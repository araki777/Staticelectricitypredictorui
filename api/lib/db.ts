import { DatabaseSync } from 'node:sqlite';
import { join } from 'path';

const dbPath = join(process.cwd(), 'data.db');
const db = new DatabaseSync(dbPath);

// Enable foreign keys
db.exec('PRAGMA foreign_keys = ON');

// Initialize schema
db.exec(`
  CREATE TABLE IF NOT EXISTS clothes (
    id TEXT PRIMARY KEY,
    userName TEXT DEFAULT 'Default',
    name TEXT NOT NULL,
    category TEXT,
    advice TEXT,
    imageUrl TEXT,
    createdAt TEXT
  );

  CREATE TABLE IF NOT EXISTS materials (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    clothingId TEXT NOT NULL,
    name TEXT NOT NULL,
    percent INTEGER NOT NULL,
    FOREIGN KEY (clothingId) REFERENCES clothes(id) ON DELETE CASCADE
  );

  CREATE TABLE IF NOT EXISTS incidents (
    id TEXT PRIMARY KEY,
    userName TEXT DEFAULT 'Default',
    date TEXT NOT NULL,
    time TEXT NOT NULL,
    humidity REAL,
    temperature REAL,
    clothing TEXT
  );
`);

// 既存のテーブルにカラムを追加（すでにある場合はエラーになるので try-catch）
try {
  db.exec("ALTER TABLE clothes ADD COLUMN userName TEXT DEFAULT 'Default'");
} catch (e) {
  // すでに存在する場合は無視
}
try {
  db.exec("ALTER TABLE incidents ADD COLUMN userName TEXT DEFAULT 'Default'");
} catch (e) {
  // すでに存在する場合は無視
}


export default db;
