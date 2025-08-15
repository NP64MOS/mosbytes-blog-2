import fs from "fs";
import path from "path";
import Link from "next/link";

export default function BlogListPage() {
  const postsDir = path.join(process.cwd(), "content", "posts");
  let files: string[] = [];
  if (fs.existsSync(postsDir)) files = fs.readdirSync(postsDir);

  const posts = files
    .map((file) => {
      const mdx = fs.readFileSync(path.join(postsDir, file), "utf-8");
      const match = mdx.match(/---\s*title:\s*"(.*?)"\s*date:\s*"(.*?)"/s);
      if (!match) return null;
      const slug = file.replace(/\.mdx$/, "");
      return { title: match[1], date: match[2], slug };
    })
    .filter(Boolean)
    .sort((a, b) => (a!.date < b!.date ? 1 : -1));

  return (
    <div className="max-w-3xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6">All Blog Posts</h1>
      <div className="flex flex-col gap-4">
        {posts.map((post) => (
          <Link
            key={post!.slug}
            href={`/blog/${post!.slug}`}
            className="block p-4 bg-white rounded-lg shadow hover-lift transition"
          >
            <h2 className="text-xl font-bold">{post!.title}</h2>
            <p className="text-gray-500 text-sm">{post!.date}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
