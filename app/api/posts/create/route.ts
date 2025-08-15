import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function POST(req: NextRequest) {
  try {
    const { title, date, content } = await req.json();
    if (!title || !content) {
      return NextResponse.json({ error: "Title and content are required" }, { status: 400 });
    }

    const slug = title.toLowerCase().replace(/\s+/g, "-");
    const postsDir = path.join(process.cwd(), "content", "posts");

    if (!fs.existsSync(postsDir)) fs.mkdirSync(postsDir, { recursive: true });

    const filePath = path.join(postsDir, `${slug}.mdx`);
    const fileContent = `---
title: "${title}"
date: "${date}"
---

${content}
`;

    fs.writeFileSync(filePath, fileContent);

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Failed to create post" }, { status: 500 });
  }
}
