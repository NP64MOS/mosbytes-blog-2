"use client";

import { Alert } from "@/components/ui-components";
import dynamic from 'next/dynamic';
import { MDXRemoteSerializeResult } from 'next-mdx-remote';

const MDXRemote = dynamic(() => import('next-mdx-remote').then(mod => mod.MDXRemote), {
  ssr: false
});

interface MDXContentProps {
  serialized: MDXRemoteSerializeResult;
}

export default function MDXContentClient({ serialized }: MDXContentProps) {
  return (
    <div className="prose max-w-none">
      <MDXRemote {...serialized} components={{ Alert }} />
    </div>
  );
}
