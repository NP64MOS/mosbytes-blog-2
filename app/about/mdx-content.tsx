import { serialize } from 'next-mdx-remote/serialize';
import { Suspense } from 'react';
import MDXContentClient from './mdx-content.client';

const content = `
# Welcome to MOSBytes 🚀

I'm passionate about creating high-quality content that helps developers build better software. This blog focuses on:

<Alert color="blue">
  Modern web development, React.js, Next.js, and TypeScript best practices.
</Alert>

## Our Mission

We believe in:

- **Clean Code**: Writing maintainable, well-documented code
- **Best Practices**: Following industry standards and patterns
- **Modern Tools**: Leveraging the latest technologies effectively
- **Community**: Sharing knowledge and learning together

## Features

This blog is built with:

- ⚡️ Next.js App Router
- 📝 MDX for rich content
- 🎨 Material Tailwind UI
- 🗃️ SQLite database
- 📨 Newsletter integration

<Alert color="green">
  Join our newsletter to stay updated with the latest articles and tutorials!
</Alert>

## Get in Touch

Have questions or suggestions? Feel free to reach out through:

- GitHub Issues
- Twitter DMs
- Email newsletter

Let's build something amazing together! 🌟
`;

export default async function MDXContent() {
  const serializedContent = await serialize(content, {
    mdxOptions: {
      development: process.env.NODE_ENV === 'development'
    }
  });
  
  return (
    <div className="container mx-auto px-4 py-8">
      <Suspense fallback={<div>Loading content...</div>}>
        <MDXContentClient serialized={serializedContent} />
      </Suspense>
    </div>
  );
}
