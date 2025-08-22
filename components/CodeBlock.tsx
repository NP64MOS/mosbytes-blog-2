import { ReactNode } from 'react';

interface CodeBlockProps {
  children: ReactNode;
  className?: string;
}

export function CodeBlock({ children, className }: CodeBlockProps) {
  // Extract language from className (e.g., "language-javascript")
  const language = className?.replace('language-', '') || '';
  
  return (
    <div className="relative">
      {language && (
        <div className="absolute right-4 top-2 text-xs text-neutral-400">
          {language}
        </div>
      )}
      <pre className={`${className} rounded-lg bg-gray-900  text-amber-50 p-4 overflow-x-auto`}>
        {children}
      </pre>
    </div>
  );
}
