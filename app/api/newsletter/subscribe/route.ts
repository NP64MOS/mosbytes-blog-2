import { NextRequest, NextResponse } from "next/server";
import { openDB } from "@/lib/db";

export async function POST(req: NextRequest) {
  try {
    const { email } = await req.json();
    if (!email) return NextResponse.json({ error: "Email required" }, { status: 400 });

    const db = await openDB();
    await db.run("INSERT OR IGNORE INTO newsletter_subscribers(email) VALUES (?)", email);

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Newsletter subscribe error:", err);
    return NextResponse.json({ error: "Failed to subscribe" }, { status: 500 });
  }
}
