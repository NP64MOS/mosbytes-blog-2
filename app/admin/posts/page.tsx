import Link from "next/link";
import { Button, Typography, Card } from "@/components/ui-components";
import { format } from "date-fns";
import { getPosts } from "@/lib/getPosts";

export const revalidate = 10; // Revalidate every 10 seconds for admin

export default async function AdminPostsPage() {
  const posts = await getPosts();

  return (
    <div className="max-w-4xl mx-auto p-8">
      <div className="flex justify-between items-center mb-8">
        <Typography variant="h2" color="blue-gray">Manage Posts</Typography>
        <Link href="/admin/post-editor">
          <Button>New Post</Button>
        </Link>
      </div>

      <div className="grid gap-6">
        {posts.map((post) => (
          <Card key={post.slug} className="p-6">
            <div className="flex justify-between items-start gap-4">
              <div>
                <Typography variant="h5" className="mb-1">
                  {post.title}
                </Typography>
                {post.excerpt && (
                  <Typography variant="small" color="gray" className="mb-2">
                    {post.excerpt}
                  </Typography>
                )}
                <div className="flex gap-4 text-sm text-gray-500">
                  <time>
                    Created: {format(new Date(post.created_at), 'MMM d, yyyy')}
                  </time>
                  <span>•</span>
                  <div className={post.published ? 'text-green-500' : 'text-amber-500'}>
                    {post.published ? 'Published' : 'Draft'}
                  </div>
                </div>
              </div>
              <div className="flex gap-2 shrink-0">
                <Link href={`/admin/post-editor/${post.slug}`}>
                  <Button variant="outlined" size="sm">Edit</Button>
                </Link>
                <Link href={`/blog/${post.slug}`} target="_blank">
                  <Button variant="text" size="sm">View</Button>
                </Link>
              </div>
            </div>
          </Card>
        ))}

        {posts.length === 0 && (
          <Typography className="text-center text-gray-500">
            No posts yet. Create your first post to get started!
          </Typography>
        )}
      </div>
    </div>
  );
}
