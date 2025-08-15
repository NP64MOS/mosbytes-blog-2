import Link from 'next/link';
import { getPosts } from '@/lib/db';
import { formatDate } from '@/lib/utils';

export default async function BlogPage() {
  const posts = getPosts();

  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-secondary-900">Blog</h1>
      <div className="grid gap-8">
        {posts.map((post) => (
          <article
            key={post.id}
            className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg hover:translate-y-[-2px] transition-all duration-200"
          >
            <Link href={`/blog/${post.slug}`}>
              <h2 className="text-2xl font-semibold mb-2 text-secondary-800 hover:text-primary-600 transition-colors">
                {post.title}
              </h2>
            </Link>
            <p className="text-secondary-700 mb-4">{post.excerpt}</p>
            <div className="text-sm text-secondary-600">
              {formatDate(post.createdAt)}
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}
