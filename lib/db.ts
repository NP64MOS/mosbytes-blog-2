import Database from 'better-sqlite3';
import path from 'path';
import { Post, Newsletter } from '@/types/blog';

const db = new Database(path.join(process.cwd(), 'blog.db'));

// Initialize database tables
db.exec(`
  CREATE TABLE IF NOT EXISTS posts (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT NOT NULL,
    slug TEXT UNIQUE NOT NULL,
    content TEXT NOT NULL,
    excerpt TEXT NOT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    published BOOLEAN DEFAULT false
  );

  CREATE TABLE IF NOT EXISTS newsletters (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    email TEXT UNIQUE NOT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
  );
`);

export const getPosts = (includeUnpublished = false): Post[] => {
  const query = includeUnpublished 
    ? 'SELECT * FROM posts ORDER BY created_at DESC'
    : 'SELECT * FROM posts WHERE published = 1 ORDER BY created_at DESC';
  return db.prepare(query).all() as Post[];
};

export const getPostBySlug = (slug: string): Post | undefined => {
  return db.prepare('SELECT * FROM posts WHERE slug = ?').get(slug) as Post | undefined;
};

export const createPost = (post: Omit<Post, 'id' | 'createdAt' | 'updatedAt'>) => {
  const { title, slug, content, excerpt, published } = post;
  return db.prepare(`
    INSERT INTO posts (title, slug, content, excerpt, published)
    VALUES (?, ?, ?, ?, ?)
  `).run(title, slug, content, excerpt, published);
};

export const updatePost = (slug: string, post: Partial<Post>) => {
  const fields = Object.keys(post).map(key => `${key} = ?`).join(', ');
  const values = Object.values(post);
  return db.prepare(`
    UPDATE posts 
    SET ${fields}, updated_at = CURRENT_TIMESTAMP 
    WHERE slug = ?
  `).run(...values, slug);
};

export const deletePost = (slug: string) => {
  return db.prepare('DELETE FROM posts WHERE slug = ?').run(slug);
};

export const addNewsletter = (email: string) => {
  return db.prepare('INSERT INTO newsletters (email) VALUES (?)').run(email);
};

export default db;
