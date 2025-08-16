"use client";

interface CodeBlockProps {
  children: string;
}

export default function CodeBlock({ children }: CodeBlockProps) {
  return (
    <pre className="bg-gray-200 text-gray-100 p-4 rounded-lg overflow-x-auto mb-4">
      <code className="text-sm">{children}</code>
    </pre>
  );
}
