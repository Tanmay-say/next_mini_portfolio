import { notFound } from 'next/navigation';
import { BlogPost } from '@/types';
import { blogPosts } from '@/data/blog-posts';

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogPosts.find(p => p.slug === params.slug);
  
  if (!post) return notFound();

  return (
    <div className="container mx-auto px-4 py-12">
      <article className="max-w-3xl mx-auto">
        <header className="mb-12">
          <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
          <div className="flex items-center space-x-4 text-gray-500">
            <time dateTime={post.date}>{new Date(post.date).toLocaleDateString()}</time>
            <span>•</span>
            <div className="flex space-x-2">
              {post.tags.map((tag) => (
                <span key={tag} className="bg-indigo-100 text-indigo-600 px-3 py-1 rounded-full text-sm">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </header>

        <div className="relative h-96 mb-12 rounded-xl overflow-hidden shadow-lg">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover"
          />
        </div>

        <div className="prose max-w-none">
          {post.content}
        </div>
      </article>
    </div>
  );
}