import { NextRequest } from 'next/server';
import { serializeMDX } from '@/lib/mdx';

export async function POST(req: NextRequest) {
  try {
    const { content } = await req.json();
    
    if (!content) {
      return new Response(JSON.stringify({ error: 'Content is required' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const mdxSource = await serializeMDX(content);

    return new Response(JSON.stringify(mdxSource), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Failed to process MDX content' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
