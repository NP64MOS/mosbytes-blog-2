import { getPostBySlug } from '@/lib/db';
import { serializeMDX } from '@/lib/mdx';
import { notFound } from 'next/navigation';
import MDXContent from '@/components/MDXContent';

interface Props {
  params: {
    slug: string;
  };
}

export default async function BlogPost({ params }: Props) {
  const post = getPostBySlug(params.slug);

  if (!post || !post.published) {
    notFound();
  }

  const mdxSource = await serializeMDX(post.content);

  return (
    <main className="container mx-auto px-4 py-8">
      <article className="max-w-3xl mx-auto">
        <header className="mb-8">
          <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
          <div className="text-gray-600">
            {new Date(post.createdAt).toLocaleDateString()}
          </div>
        </header>
        
        <div className="prose max-w-none">
          <MDXContent source={mdxSource} />
        </div>
      </article>
    </main>
  );
}
