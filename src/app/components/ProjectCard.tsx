import Link from 'next/link';
import Image from 'next/image';
import { Project } from '@/types';

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:-translate-y-1 hover:shadow-lg">
      <div className="h-48 relative">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-6">
        <h2 className="text-xl font-bold mb-2">{project.title}</h2>
        <p className="text-gray-600 mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag) => (
            <span 
              key={tag}
              className="bg-indigo-100 text-indigo-600 px-3 py-1 rounded-full text-sm"
            >
              {tag}
            </span>
          ))}
        </div>
        <Link
          href={`/projects/${project.id}`}
          className="text-indigo-600 font-medium hover:text-indigo-800"
        >
          View Details →
        </Link>
      </div>
    </div>
  );
}