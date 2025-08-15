import sqlite3 from "sqlite3";
import { open } from "sqlite";
import path from "path";
import fs from "fs";

let db: any;

export async function openDB() {
  if (db) return db;

  const dbPath = path.join(process.cwd(), "data", "db.sqlite");
  const dir = path.dirname(dbPath);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

  db = await open({
    filename: dbPath,
    driver: sqlite3.Database,
  });

  // สร้าง table newsletter_subscribers ถ้ายังไม่มี
  await db.exec(`
    CREATE TABLE IF NOT EXISTS newsletter_subscribers (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      email TEXT UNIQUE,
      created_at TEXT DEFAULT CURRENT_TIMESTAMP
    )
  `);

  return db;
}
