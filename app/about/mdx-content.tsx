import { serialize } from 'next-mdx-remote/serialize';
import { Suspense } from 'react';
import MDXContentClient from './mdx-content.client';

const content = `
# Welcome to MOSBytes 🚀

Hi, I’m Mos. This is my little corner of the internet where I explore, experiment, and share how technology—especially **AI** 🤖—can make life and work smarter. MOSBytes is for developers, creators, and lifelong learners who want to:

- Build better projects  
- Solve real problems  
- Stay ahead in the fast-moving world of tech

<Alert color="blue">
💡 Focus: Modern web development, React.js, Next.js, TypeScript, AI tools, and productivity hacks.
</Alert>

## What I Believe

- **Smart Work > Hard Work** – Use tools and tech to make your life easier ⚡  
- **Hands-On Learning** – Experiment, build, and share knowledge that works in the real world 🛠️  
- **Code & AI Together** – Combine programming with AI to solve complex problems efficiently 🤹‍♂️  
- **Community & Growth** – Learning is better when shared 🌱  

## Why MOSBytes

Here, you’ll find tutorials, tips, and experiments built to help you:

- Write cleaner, maintainable code 🧹  
- Learn modern frameworks and libraries effectively 📚  
- Apply AI in everyday coding and productivity 🧠  
- Stay curious, learn faster, and create more ✨  

<Alert color="green">
📬 Join the newsletter to get practical tutorials and AI-powered tips straight to your inbox!
</Alert>

## Fun Fact 🤓

- I drink **way too much coffee ☕** while coding  
- I experiment with **AI prompts daily**  
- Sometimes I write code just for the joy of it! 🎉  

## Let’s Connect

Got ideas, questions, or cool projects to share? Reach out via:

- GitHub 🐱  
- Twitter 🐦  
- Email newsletter ✉️  

Let’s learn, build, and innovate together! 🌟

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
