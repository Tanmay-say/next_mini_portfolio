export type Project = {
    id: number;
    title: string;
    description: string;
    image: string;
    tags: string[];
    content?: string;
    demoUrl?: string;
    sourceUrl?: string;
  };
  
  export type BlogPost = {
    slug: string;
    title: string;
    excerpt: string;
    content: string;
    image: string;
    tags: string[];
    date: string;
    readTime?: number;
  };