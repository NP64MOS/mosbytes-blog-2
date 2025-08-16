"use client";

import { useEffect, useState } from "react";
import { MDXRemote } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import { MDXComponents } from "./MDXComponents";

interface MDXPreviewProps {
  content: string;
}

export default function MDXPreview({ content }: MDXPreviewProps) {
  type MDXSource = Awaited<ReturnType<typeof serialize>>;
  const [mdxSource, setMdxSource] = useState<MDXSource | null>(null);

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
    return <div className="animate-pulse">Loading preview...</div>;
  }

  return (
    <div className="prose prose-blue max-w-none">
      <MDXRemote {...mdxSource} components={MDXComponents} />
    </div>
  );
}
