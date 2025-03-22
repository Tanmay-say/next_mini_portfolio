import { notFound } from 'next/navigation';
import Image from 'next/image';
import { projects } from '@/data/projects';

export default function ProjectPage({ params }: { params: { id: string } }) {
  const project = projects.find(p => p.id === parseInt(params.id));
  
  if (!project) return notFound();

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">{project.title}</h1>
        
        <div className="mb-12 relative h-96 rounded-xl overflow-hidden shadow-lg">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
          />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="md:col-span-2">
            <h2 className="text-2xl font-bold mb-4">Project Overview</h2>
            <p className="text-gray-600 leading-relaxed">{project.description}</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-4">Project Details</h3>
            <div className="space-y-3">
              <div>
                <span className="font-medium">Category:</span>
                <div className="flex flex-wrap gap-2 mt-1">
                  {project.tags.map((tag) => (
                    <span key={tag} className="bg-indigo-100 text-indigo-600 px-3 py-1 rounded-full text-sm">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <span className="font-medium">Date:</span>
                <p className="mt-1 text-gray-600">January 2024</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}