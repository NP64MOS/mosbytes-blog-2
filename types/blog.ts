export interface Post {
  id: number;
  title: string;
  slug: string;
  content: string;
  excerpt: string;
  createdAt: string;
  updatedAt: string;
  published: boolean;
}

export interface Newsletter {
  id: number;
  email: string;
  createdAt: string;
}

export interface MDXPost extends Post {
  code: string; // Serialized MDX content
}

export interface PreviewData {
  code: string;
  frontmatter: {
    title: string;
    excerpt: string;
    [key: string]: any;
  };
}
