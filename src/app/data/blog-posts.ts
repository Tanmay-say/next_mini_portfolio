import { BlogPost } from '@/types';

export const blogPosts: BlogPost[] = [
  {
    slug: 'nextjs-best-practices',
    title: 'Next.js Best Practices for Production Apps',
    excerpt: 'Learn essential practices for building scalable Next.js applications',
    content: '# Article content in markdown format...',
    image: '/images/blog/nextjs.jpg',
    tags: ['Next.js', 'React', 'Best Practices'],
    date: '2024-03-15'
  },
  {
    slug: 'typescript-advanced',
    title: 'Advanced TypeScript Patterns',
    excerpt: 'Master advanced TypeScript concepts for better type safety',
    content: '# Article content in markdown format...',
    image: '/images/blog/typescript.jpg',
    tags: ['TypeScript', 'Programming'],
    date: '2024-03-10'
  }
];