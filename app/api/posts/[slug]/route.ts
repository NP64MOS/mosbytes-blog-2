import { initDb } from '@/lib/db';
import { NextResponse } from 'next/server';
import { readFile } from 'fs/promises';
import { join } from 'path';
import { serialize } from 'next-mdx-remote/serialize';
import remarkGfm from 'remark-gfm';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';

export async function GET(
  request: Request, 
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    const { slug } = await params;
    
    // First try to get from the content directory for MDX files
    try {
      const content = await readFile(
        join(process.cwd(), 'content/posts', `${slug}.mdx`),
        'utf-8'
      );
      
      return NextResponse.json({
        slug: slug,
        title: slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' '),
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
      [slug]
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

export async function PUT(
  request: Request, 
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    const { slug } = await params;
    const { title, slug: newSlug, excerpt, content, published, published_at } = await request.json();

    // Validate minimal fields
    if (!title || !content) {
      return NextResponse.json({ message: 'Title and content are required' }, { status: 400 });
    }

    // Validate MDX
    try {
      await serialize(content, {
        mdxOptions: {
          remarkPlugins: [remarkGfm],
          rehypePlugins: [rehypeSlug, rehypeAutolinkHeadings],
        },
      });
    } catch (err) {
      return NextResponse.json({ message: 'Invalid MDX content' }, { status: 400 });
    }

    const db = await initDb();
    if (!db) throw new Error('Database not initialized');

    // Update by current slug param; allow changing slug too
    await db.run(
      `UPDATE posts
       SET title = ?, slug = ?, content = ?, excerpt = ?, published = ?,
           updated_at = datetime('now'),
           published_at = CASE WHEN ? = 1 AND published_at IS NULL THEN datetime('now')
                               WHEN ? = 0 THEN NULL
                               ELSE published_at END
       WHERE slug = ?`,
      [
        title,
        newSlug || slug,
        content,
        excerpt || null,
        published ? 1 : 0,
        published ? 1 : 0,
        published ? 0 : 1,
        slug,
      ]
    );

    return NextResponse.json({ message: 'Post updated', slug: newSlug || slug });
  } catch (error) {
    console.error('Error updating post:', error);
    return NextResponse.json({ message: 'Error updating post' }, { status: 500 });
  }
}
