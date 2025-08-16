import { notFound } from "next/navigation";
import { format } from "date-fns";
import { Typography } from "@/components/ui-components";
import { getPostBySlug } from "@/lib/getPosts";
import BlogPostContent from "./BlogPostContent";

export const revalidate = 3600; // Revalidate every hour

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = await getPostBySlug(params.slug);

  if (!post || !post.published) {
    notFound();
  }

  return (
    <article className="max-w-4xl mx-auto p-8">
      <header className="mb-8">
        <Typography variant="h1" className="text-4xl font-bold mb-4">
          {post.title}
        </Typography>
        <time className="text-gray-500 text-sm">
          {format(new Date(post.published_at || post.created_at), 'MMMM d, yyyy')}
        </time>
      </header>
      
      <BlogPostContent content={post.content} />
    </article>
  );