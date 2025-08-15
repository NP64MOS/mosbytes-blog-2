import { getPostBySlug } from "@/app/lib/getPosts";
import BlogPostPageClient from "./page.client";


export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = await getPostBySlug(params.slug);

  if (!post) return <p className="text-center py-10">Post not found</p>;

  return <BlogPostPageClient content={post.content} meta={post.meta} />;