import { NextResponse } from 'next/server';
import { openDB } from '@/lib/db';
import { serialize } from 'next-mdx-remote/serialize';
import remarkGfm from 'remark-gfm';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';

export async function POST(request: Request) {
  try {
    const { title, slug, excerpt, content, published } = await request.json();

    // Validate required fields
    if (!title || !content) {
      return NextResponse.json(
        { message: 'Title and content are required' },
        { status: 400 }
      );
    }

    // Generate slug if not provided
    const postSlug = slug || title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

    // Validate and serialize MDX content
    try {
      await serialize(content, {
        mdxOptions: {
          remarkPlugins: [remarkGfm],
          rehypePlugins: [rehypeSlug, rehypeAutolinkHeadings],
        },
      });
    } catch (err) {
      return NextResponse.json(
        { message: 'Invalid MDX content' },
        { status: 400 }
      );
    }

    const db = await openDB();

    // Check if slug is already taken
    const existingPost = await db.get(
      'SELECT id FROM posts WHERE slug = ?',
      [postSlug]
    );

    if (existingPost) {
      return NextResponse.json(
        { message: 'A post with this slug already exists' },
        { status: 409 }
      );
    }

    // Insert new post
    await db.run(
      `INSERT INTO posts (
        title, slug, content, excerpt, published, 
        created_at, updated_at, published_at
      ) VALUES (?, ?, ?, ?, ?, datetime('now'), datetime('now'), ?)`,
      [
        title,
        postSlug,
        content,
        excerpt || null,
        published ? 1 : 0,
        published ? "datetime('now')" : null,
      ]
    );

    return NextResponse.json({ 
      message: 'Post created successfully',
      slug: postSlug
    });
  } catch (error) {
    console.error('Error creating post:', error);
    return NextResponse.json(
      { message: 'Error creating post' },
      { status: 500 }
    );
  }
}
