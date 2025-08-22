"use client";


import { MDXRemote } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import { MDXComponents } from "@/components/MDXComponents";
import { useEffect, useState } from "react";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";

interface BlogPostContentProps {
  content: string;
}

export default function BlogPostContent({ content }: BlogPostContentProps) {
  const [mdxSource, setMdxSource] = useState<Awaited<ReturnType<typeof serialize>> | null>(null);

  useEffect(() => {
    const renderContent = async () => {
      try {
        const mdxSource = await serialize(content, {
          mdxOptions: {
            remarkPlugins: [remarkGfm],
            rehypePlugins: [rehypeSlug, rehypeAutolinkHeadings],
          },
        });
        setMdxSource(mdxSource);
      } catch (err) {
        console.error("Error rendering MDX:", err);
      }
    };

    renderContent();
  }, [content]);

  if (!mdxSource) {
    return (
              <div className="animate-pulse text-neutral-500">
        Loading...
      </div>
    );
  }

  return (
    <div className="prose prose-blue max-w-none">
      <MDXRemote {...mdxSource} components={MDXComponents} />
    </div>
  );
}
