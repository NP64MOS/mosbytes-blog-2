import { initDb } from '@/lib/db';
import { NextResponse } from 'next/server';
import { readFile } from 'fs/promises';
import { join } from 'path';

export async function GET(request: Request, { params }: { params: { slug: string } }) {
  try {
    // First try to get from the content directory for MDX files
    try {
      const content = await readFile(
        join(process.cwd(), 'content/posts', `${params.slug}.mdx`),
        'utf-8'
      );
      
      return NextResponse.json({
        slug: params.slug,
        title: params.slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' '),
        content,
        excerpt: '',
        published: true
      });
    } catch (err) {
      // If file doesn't exist, continue to check database
      console.log('MDX file not found, checking database...');
    }

    // If not in content directory, check database
    const db = await initDb();
    if (!db) {
      throw new Error('Database not initialized');
    }

    const post = await db.get(
      'SELECT * FROM posts WHERE slug = ?',
      [params.slug]
    );

    if (!post) {
      return new Response('Post not found', { status: 404 });
    }

    return NextResponse.json(post);
  } catch (error) {
    console.error('Error fetching post:', error);
    return new Response('Error fetching post', { status: 500 });
  }
}
