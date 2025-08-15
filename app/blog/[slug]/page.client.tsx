"use client";

import { MDXRemote } from "next-mdx-remote";
import { MDXComponents } from "@/app/components/MDXComponents";

interface BlogPostProps {
  content: any;
  meta: { title: string; date: string };
}

export default function BlogPostPageClient({ content, meta }: BlogPostProps) {
  if (!meta) return <p>Post metadata missing</p>;

  return (
    <article className="prose lg:prose-xl max-w-3xl mx-auto bg-white p-8 rounded-2xl shadow hover-lift transition">
      <h1>{meta.title}</h1>
      <p className="text-gray-500">{meta.date}</p>
      <MDXRemote {...content} components={MDXComponents} />
    </article>
  );
}
