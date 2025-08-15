import db from '@/lib/db';

// Create tables if they don't exist
db.exec(`
  -- Create posts table
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

  -- Create newsletters table
  CREATE TABLE IF NOT EXISTS newsletters (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    email TEXT UNIQUE NOT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
  );

  -- Create initial post if none exist
  INSERT OR IGNORE INTO posts (
    title,
    slug,
    content,
    excerpt,
    published
  ) VALUES (
    'Welcome to MOSBytes Blog',
    'welcome-to-mosbytes-blog',
    '---\ntitle: Welcome to MOSBytes Blog\nexcerpt: An introduction to our modern minimal blog built with Next.js\n---\n\n# Welcome to MOSBytes Blog\n\nHello and welcome to MOSBytes, a modern minimal blog built with Next.js, TailwindCSS, and MDX. This blog aims to share practical insights and clear explanations about modern web development.\n\n## Features\n\n- Modern minimal design\n- Full MDX support\n- Real-time preview\n- Newsletter subscription\n- And much more!\n\nStay tuned for more content!',
    'An introduction to our modern minimal blog built with Next.js',
    true
  );
`);
