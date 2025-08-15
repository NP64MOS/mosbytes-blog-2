"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function PostEditorPage() {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [date, setDate] = useState(new Date().toISOString().slice(0, 10));
  const [content, setContent] = useState("");
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("idle");

    try {
      const res = await fetch("/api/posts/create", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title, date, content }),
      });
      if (res.ok) {
        setStatus("success");
        router.push("/blog"); // redirect ไปหน้า blog
      } else {
        setStatus("error");
      }
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6">Write a New Post</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Post Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="p-3 border rounded-lg"
          required
        />
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="p-3 border rounded-lg"
          required
        />
        <textarea
          placeholder="Write your post in MDX..."
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="p-3 border rounded-lg h-80 font-mono"
          required
        />
        <button
          type="submit"
          className="bg-blue-600 text-white p-3 rounded-lg hover-lift transition"
        >
          Publish Post
        </button>
        {status === "success" && <p className="text-green-600">Post published!</p>}
        {status === "error" && <p className="text-red-600">Failed to publish post.</p>}
      </form>
    </div>
  );
}
