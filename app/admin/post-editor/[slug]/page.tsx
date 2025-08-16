"use client";

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { Button, Input, Textarea, Card, Typography } from "@/components/ui-components";
import MDXPreview from '@/components/MDXPreview';
import { Alert } from '@/components/Alert';
import type { Post } from '@/lib/db';

export default function PostEditorPage() {
  const params = useParams();
  const [post, setPost] = useState<Post | null>(null);
  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [content, setContent] = useState("");
  const [excerpt, setExcerpt] = useState("");
  const [preview, setPreview] = useState(false);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  useEffect(() => {
    if (params.slug) {
      fetchPost(params.slug as string);
    }
  }, [params.slug]);

  async function fetchPost(slug: string) {
    try {
      const res = await fetch(`/api/posts/${slug}`);
      if (!res.ok) throw new Error('Failed to fetch post');
      const data = await res.json();
      setPost(data);
      setTitle(data.title);
      setSlug(data.slug);
      setContent(data.content);
      setExcerpt(data.excerpt || "");
    } catch (error) {
      console.error('Error fetching post:', error);
      setStatus("error");
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    const endpoint = post ? `/api/posts/${post.slug}` : '/api/posts/create';
    const method = post ? 'PUT' : 'POST';

    try {
      const res = await fetch(endpoint, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          title,
          slug,
          content,
          excerpt,
          published: false
        }),
      });

      if (!res.ok) throw new Error('Failed to save post');
      setStatus("success");
    } catch (error) {
      console.error('Error saving post:', error);
      setStatus("error");
    }
  };

  return (
    <div className="max-w-5xl mx-auto p-8">
      <div className="flex justify-between items-center mb-6">
        <Typography variant="h3" className="font-bold">
          {post ? 'Edit Post' : 'Create New Post'}
        </Typography>
        <Button
          variant="outlined"
          color={preview ? "gray" : "blue"}
          onClick={() => setPreview(!preview)}
        >
          {preview ? "Edit" : "Preview"}
        </Button>
      </div>

      {status === "error" && (
        <Alert color="red" className="mb-4">
          Failed to save post. Please try again.
        </Alert>
      )}

      {preview ? (
        <Card className="p-6">
          <Typography variant="h4" className="mb-4">{title}</Typography>
          <MDXPreview content={content} />
        </Card>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <Input
            label="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
          <Input
            label="Slug"
            value={slug}
            onChange={(e) => setSlug(e.target.value)}
            required
          />
          <Textarea
            label="Excerpt"
            value={excerpt}
            onChange={(e) => setExcerpt(e.target.value)}
            rows={3}
          />
          <Textarea
            label="Content (MDX)"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            rows={20}
            className="font-mono"
          />
          <div className="flex justify-end">
            <Button 
              type="submit"
              disabled={status === "loading"}
            >
              {status === "loading" ? "Saving..." : "Save Post"}
            </Button>
          </div>
        </form>
      )}
    </div>
  );
}
