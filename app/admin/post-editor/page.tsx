"use client";

import { useState, useCallback } from "react";
import { useRouter } from "next/navigation";
import { Button, Input, Textarea, Card, Typography } from "@/components/ui-components";
import MDXPreview from "@/components/MDXPreview";
import { Alert } from "@/components/Alert";

export default function PostEditorPage() {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [excerpt, setExcerpt] = useState("");
  const [content, setContent] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [preview, setPreview] = useState(false);

  const generateSlug = useCallback((title: string) => {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "");
  }, []);

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newTitle = e.target.value;
    setTitle(newTitle);
    setSlug(generateSlug(newTitle));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("/api/posts/create", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ 
          title, 
          slug,
          excerpt,
          content,
          published: false 
        }),
      });
      
      if (res.ok) {
        setStatus("success");
        router.push("/admin/posts");
      } else {
        const error = await res.json();
        throw new Error(error.message);
      }
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  };

  return (
    <div className="max-w-5xl mx-auto p-8">
      <div className="flex justify-between items-center mb-6">
        <Typography variant="h3" className="font-bold">Write a New Post</Typography>
        <Button
          variant="outlined"
          color={preview ? "gray" : "blue"}
          className="ml-4"
          onClick={() => setPreview(!preview)}
        >
          {preview ? "Edit" : "Preview"}
        </Button>
      </div>

      {status === "error" && (
        <Alert color="red" className="mb-4">
          Failed to create post. Please try again.
        </Alert>
      )}

      {preview ? (
        <Card className="p-6">
          <Typography variant="h4" className="mb-4">{title}</Typography>
          <MDXPreview content={content} />
        </Card>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <Input
            type="text"
            label="Post Title"
            value={title}
            onChange={handleTitleChange}
            required
            size="lg"
          />
          <Input
            type="text"
            label="URL Slug"
            value={slug}
            onChange={(e) => setSlug(e.target.value)}
            required
            size="lg"
          />
          <Textarea
            label="Excerpt"
            value={excerpt}
            onChange={(e) => setExcerpt(e.target.value)}
            rows={2}
          />
          <Textarea
            label="Content (MDX)"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            rows={20}
            className="font-mono"
          />
          <div className="flex justify-end gap-4">
            <Button
              type="submit"
              disabled={status === "loading"}
              className="mt-4"
            >
              {status === "loading" ? "Creating..." : "Create Post"}
            </Button>
          </div>
        </form>
      )}
    </div>
  );
}
