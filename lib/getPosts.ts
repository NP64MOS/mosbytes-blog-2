import { readFile, readdir } from 'fs/promises';
import { join } from 'path';
import { initDb } from './db';
import { existsSync } from 'fs';

export interface PostMetadata {
  title: string;
  slug: string;
  content: string;
  excerpt?: string;
  published: boolean;
  created_at?: string;
  updated_at?: string;
  published_at?: string;
}

export async function getPostBySlug(slug: string): Promise<PostMetadata | null> {
  // First try to get from MDX files
  const mdxPath = join(process.cwd(), 'content/posts', `${slug}.mdx`);
  
  if (existsSync(mdxPath)) {
    try {
      const content = await readFile(mdxPath, 'utf-8');
      const title = slug
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');

      return {
        slug,
        title,
        content,
        excerpt: '',
        published: true,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
        published_at: new Date().toISOString(),
      };
    } catch (error) {
      console.error('Error reading MDX file:', error);
    }
  }

  // If not found in MDX, try database
  try {
    const db = await initDb();
    if (!db) throw new Error('Database not initialized');

    const post = await db.get(
      'SELECT * FROM posts WHERE slug = ? AND published = 1',
      [slug]
    );

    return post;
  } catch (error) {
    console.error('Error fetching from database:', error);
    return null;
  }
}

export async function getPosts(filter?: { published?: boolean }): Promise<PostMetadata[]> {
  const posts: PostMetadata[] = [];

  // Get MDX files first
  try {
    const mdxFiles = await readdir(join(process.cwd(), 'content/posts'));
    
    for (const file of mdxFiles) {
      if (file.endsWith('.mdx')) {
        const slug = file.replace('.mdx', '');
        const content = await readFile(join(process.cwd(), 'content/posts', file), 'utf-8');
        const title = slug
          .split('-')
          .map((word: string) => word.charAt(0).toUpperCase() + word.slice(1))
          .join(' ');

        posts.push({
          slug,
          title,
          content,
          excerpt: '',
          published: true,
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString(),
          published_at: new Date().toISOString(),
        });
      }
    }
  } catch (error) {
    console.error('Error reading MDX files:', error);
  }

  // Then get from database
  try {
    const db = await initDb();
    if (!db) throw new Error('Database not initialized');

    const where = typeof filter?.published === 'boolean' ? 'WHERE published = ?' : '';
    const params = typeof filter?.published === 'boolean' ? [filter.published ? 1 : 0] : [];
    const dbPosts = await db.all<PostMetadata[]>(
      `SELECT * FROM posts ${where} ORDER BY COALESCE(published_at, updated_at) DESC`,
      params
    );

    if (dbPosts) {
      posts.push(...dbPosts);
    }
  } catch (error) {
    console.error('Error fetching from database:', error);
  }

  return posts;
}
