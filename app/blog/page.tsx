import Link from "next/link";
import { Card, Typography } from "@/components/ui-components";
import { getPosts } from "@/lib/getPosts";
import { format } from "date-fns";

export const revalidate = 3600; // Revalidate every hour

export default async function BlogListPage() {
  const posts = await getPosts({ published: true });

  return (
    <div className="max-w-4xl mx-auto p-8">
      <Typography variant="h2" className="font-bold mb-8">
        Blog Posts
      </Typography>
      <div className="grid gap-6">
        {posts.map((post) => (
          <Link key={post.slug} href={`/blog/${post.slug}`}>
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <Typography variant="h4" className="mb-2">
                {post.title}
              </Typography>
              {post.excerpt && (
                <Typography variant="paragraph" className="mb-4 text-gray-600">
                  {post.excerpt}
                </Typography>
              )}
              <Typography variant="small" className="text-gray-500">
                {format(new Date(post.published_at || post.created_at), 'MMMM d, yyyy')}
              </Typography>
            </Card>
          </Link>
        ))}
        {posts.length === 0 && (
          <Typography className="text-center text-gray-500">
            No posts published yet.
          </Typography>
        )}
      </div>
    </div>
  );
}
