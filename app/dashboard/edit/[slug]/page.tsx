import { notFound, redirect } from 'next/navigation';
import PostEditor from '@/components/PostEditor';
import { getPostBySlug, updatePost } from '@/lib/db';

interface Props {
  params: {
    slug: string;
  };
}

export default function EditPostPage({ params }: Props) {
  const post = getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  async function handleSave(data: {
    title: string;
    content: string;
    excerpt: string;
    slug: string;
    published: boolean;
  }) {
    'use server';
    
    updatePost(params.slug, data);
    redirect('/dashboard');
  }

  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Edit Post: {post.title}</h1>
      <PostEditor
        initialData={{
          title: post.title,
          content: post.content,
          excerpt: post.excerpt,
          slug: post.slug,
        }}
        onSave={handleSave}
      />
    </main>
  );
}
