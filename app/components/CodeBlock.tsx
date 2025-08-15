"use client";

interface CodeBlockProps {
  children: string;
}

export default function CodeBlock({ children }: CodeBlockProps) {
  return (
    <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto mb-4">
      <code>{children}</code>
    </pre>
  );
}
