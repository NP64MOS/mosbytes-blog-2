import sqlite3 from 'sqlite3';
import { Database, open } from 'sqlite';
import { join, dirname } from 'path';
import { existsSync, mkdirSync } from 'fs';

export let db: Database | null = null;

export async function initDb() {
  if (!db) {
    const dbPath = join(process.cwd(), 'data/db.sqlite');
    
    // Ensure the data directory exists
    const dataDir = dirname(dbPath);
    if (!existsSync(dataDir)) {
      mkdirSync(dataDir, { recursive: true });
    }

    db = await open({
      filename: dbPath,
      driver: sqlite3.Database,
    });

    // Create tables if they don't exist
    await db.exec(`
      CREATE TABLE IF NOT EXISTS posts (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        slug TEXT UNIQUE NOT NULL,
        title TEXT NOT NULL,
        content TEXT NOT NULL,
        excerpt TEXT,
        published BOOLEAN DEFAULT FALSE,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
        updated_at DATETIME DEFAULT CURRENT_TIMESTAMP,
        published_at DATETIME
      );
    `);
  }
  return db;
}

export function sql(strings: TemplateStringsArray, ...values: unknown[]) {
  return { strings, values };
}

export interface Post {
  id: number;
  slug: string;
  title: string;
  content: string;
  excerpt?: string;
  published: boolean;
  created_at: string;
  updated_at: string;
  published_at?: string;
}

export interface NewsletterSubscriber {
  id: number;
  email: string;
  created_at: string;
}

export async function openDB() {
  if (db) return db;

  const dbPath = join(process.cwd(), "data", "db.sqlite");
  const dir = dirname(dbPath);
  if (!existsSync(dir)) mkdirSync(dir, { recursive: true });

  db = await open({
    filename: dbPath,
    driver: sqlite3.Database,
  });

  // Create tables if they don't exist
  await db.exec(`
    CREATE TABLE IF NOT EXISTS newsletter_subscribers (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      email TEXT UNIQUE NOT NULL,
      created_at TEXT DEFAULT CURRENT_TIMESTAMP
    );

    CREATE TABLE IF NOT EXISTS posts (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      slug TEXT UNIQUE NOT NULL,
      title TEXT NOT NULL,
      content TEXT NOT NULL,
      excerpt TEXT,
      published BOOLEAN DEFAULT false,
      created_at TEXT DEFAULT CURRENT_TIMESTAMP,
      updated_at TEXT DEFAULT CURRENT_TIMESTAMP,
      published_at TEXT
    );

    CREATE INDEX IF NOT EXISTS idx_posts_slug ON posts(slug);
    CREATE INDEX IF NOT EXISTS idx_posts_published ON posts(published);
  `);

  return db;
}
