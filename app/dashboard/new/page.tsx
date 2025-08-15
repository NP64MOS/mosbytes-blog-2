import { redirect } from 'next/navigation';
import PostEditor from '@/components/PostEditor';
import { createPost } from '@/lib/db';

export default function NewPostPage() {
  async function handleSave(data: {
    title: string;
    content: string;
    excerpt: string;
    slug: string;
    published: boolean;
  }) {
    'use server';
    
    createPost(data);
    redirect('/dashboard');
  }

  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">New Post</h1>
      <PostEditor onSave={handleSave} />
    </main>
  );
}
