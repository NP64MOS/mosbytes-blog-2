'use client';

import { useState, useEffect } from 'react';
import { MDXRemote } from 'next-mdx-remote';
import { components } from '@/lib/mdx';

export default function MDXPreview({ content }: { content: string }) {
  const [preview, setPreview] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPreview = async () => {
      try {
        setLoading(true);
        const res = await fetch('/api/preview', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ content }),
        });

        if (!res.ok) throw new Error('Failed to generate preview');
        
        const data = await res.json();
        setPreview(data);
        setError(null);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to generate preview');
      } finally {
        setLoading(false);
      }
    };

    if (content) {
      fetchPreview();
    }
  }, [content]);

  if (loading) {
    return <div className="animate-pulse">Loading preview...</div>;
  }

  if (error) {
    return <div className="text-red-500">Error: {error}</div>;
  }

  if (!preview) {
    return null;
  }

  return (
    <div className="prose max-w-none">
      <MDXRemote {...preview} components={components} />
    </div>
  );
}
