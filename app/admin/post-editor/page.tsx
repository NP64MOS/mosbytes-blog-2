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

  // Add custom styles for the editor layout
  const editorStyles = {
    container: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8",
    mainContent: "grid grid-cols-1 gap-6",
    editorSection: "w-full",
    previewSection: "w-full bg-white rounded-lg shadow",
    textareaBase: "w-full min-h-[500px] font-mono",
  };

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
    <div className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8">
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
        <Card className="p-6 bg-white rounded-lg shadow">
          <Typography variant="h4" className="mb-4">{title}</Typography>
          <MDXPreview content={content} />
        </Card>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="space-y-6">
              <Input
                type="text"
                label="Post Title"
                value={title}
                onChange={handleTitleChange}
                required
                size="lg"
                className="w-full"
              />
              <Input
                type="text"
                label="URL Slug"
                value={slug}
                onChange={(e) => setSlug(e.target.value)}
                required
                size="lg"
                className="w-full"
              />
              <Textarea
                label="Excerpt"
                value={excerpt}
                onChange={(e) => setExcerpt(e.target.value)}
                rows={3}
                className="w-full"
              />
            </div>
            <div>
              <Textarea
                label="Content (MDX)"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                rows={25}
                className="w-full font-mono bg-gray-50 p-4"
              />
            </div>
          </div>
          <div className="flex justify-end gap-4 mt-6">
            <Button
              type="submit"
              disabled={status === "loading"}
              className="px-6"
            >
              Save Draft
            </Button>
          </div>
        </form>
      )}
    </div>
  );
}
