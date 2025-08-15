'use client';

import { useState, ChangeEvent } from 'react';
import type { ButtonProps, InputProps, TextareaProps } from '@material-tailwind/react';
import { Button, Input, Textarea } from '@material-tailwind/react';
import MDXPreview from './MDXPreview';

interface PostEditorProps {
  initialData?: {
    title: string;
    content: string;
    excerpt: string;
    slug: string;
  };
  onSave: (data: {
    title: string;
    content: string;
    excerpt: string;
    slug: string;
    published: boolean;
  }) => Promise<void>;
}

export default function PostEditor({ initialData, onSave }: PostEditorProps) {
  const [title, setTitle] = useState(initialData?.title || '');
  const [content, setContent] = useState(initialData?.content || '');
  const [excerpt, setExcerpt] = useState(initialData?.excerpt || '');
  const [slug, setSlug] = useState(initialData?.slug || '');
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const generateSlug = (text: string) => {
    return text
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '');
  };

  const handleTitleChange = (value: string) => {
    setTitle(value);
    if (!initialData?.slug) {
      setSlug(generateSlug(value));
    }
  };

  const handleSave = async (published: boolean) => {
    try {
      setSaving(true);
      setError(null);
      await onSave({ title, content, excerpt, slug, published });
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to save post');
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <div className="space-y-6">
        <div>
          <Input
            label="Title"
            value={title}
            onChange={(e) => handleTitleChange(e.target.value)}
            className="w-full"
          />
        </div>
        
        <div>
          <Input
            label="Slug"
            value={slug}
            onChange={(e) => setSlug(generateSlug(e.target.value))}
            className="w-full"
          />
        </div>

        <div>
          <Textarea
            label="Excerpt"
            value={excerpt}
            onChange={(e) => setExcerpt(e.target.value)}
            className="w-full"
            rows={3}
          />
        </div>

        <div>
          <Textarea
            label="Content (MDX)"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="w-full font-mono"
            rows={20}
          />
        </div>

        <div className="flex gap-4">
          <Button
            onClick={() => handleSave(false)}
            disabled={saving}
            color="blue"
            variant="outlined"
          >
            Save Draft
          </Button>
          <Button
            onClick={() => handleSave(true)}
            disabled={saving}
            color="blue"
          >
            Publish
          </Button>
        </div>

        {error && (
          <div className="text-red-500 mt-4">{error}</div>
        )}
      </div>

      <div className="border rounded-lg p-6 bg-white">
        <h3 className="text-lg font-semibold mb-4">Preview</h3>
        <MDXPreview content={content} />
      </div>
    </div>
  );
}
