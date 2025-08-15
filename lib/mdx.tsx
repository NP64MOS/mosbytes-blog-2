import { serialize } from 'next-mdx-remote/serialize';
import matter from 'gray-matter';
import { MDXRemoteSerializeResult } from 'next-mdx-remote';

export async function serializeMDX(source: string): Promise<MDXRemoteSerializeResult> {
  const { content, data } = matter(source);
  const mdxSource = await serialize(content, {
    parseFrontmatter: true,
    mdxOptions: {
      development: process.env.NODE_ENV === 'development',
    },
  });

  return {
    ...mdxSource,
    frontmatter: data,
  };
}

export const components = {
  Alert: ({ children, type = 'info' }: { children: React.ReactNode; type?: 'info' | 'warning' | 'error' }) => (
    <div className={`p-4 rounded-lg mb-4 ${
      type === 'info' ? 'bg-blue-50 text-blue-900' :
      type === 'warning' ? 'bg-yellow-50 text-yellow-900' :
      'bg-red-50 text-red-900'
    }`}>
      {children}
    </div>
  ),
  
  Button: ({ children, onClick, variant = 'primary' }: { 
    children: React.ReactNode;
    onClick?: () => void;
    variant?: 'primary' | 'secondary';
  }) => (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded-lg transition-all duration-200 hover:translate-y-[-2px] hover:shadow-lg ${
        variant === 'primary' 
          ? 'bg-blue-600 text-white hover:bg-blue-700'
          : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
      }`}
    >
      {children}
    </button>
  ),

  CodeBlock: ({ children, language }: { children: string; language?: string }) => (
    <pre className="p-4 rounded-lg bg-gray-900 text-white overflow-x-auto">
      <code className={language ? `language-${language}` : ''}>
        {children}
      </code>
    </pre>
  ),
};
