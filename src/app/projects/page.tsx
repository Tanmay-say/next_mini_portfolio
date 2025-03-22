// src/app/projects/page.tsx
import Link from 'next/link';
import Image from 'next/image';

export default function Projects() {
  // Completed projects array
  const projects = [
    {
      id: 1,
      title: 'E-commerce Website',
      description: 'A full-featured online store built with Next.js and Stripe integration.',
      image: '/images/projects/project1.jpg',
      tags: ['Next.js', 'TypeScript', 'Stripe'],
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'A responsive task manager with drag-and-drop functionality.',
      image: '/images/projects/project2.jpg',
      tags: ['React', 'Redux', 'Tailwind CSS'],
    },
    {
      id: 3,
      title: 'Portfolio Website',
      description: 'A modern portfolio website showcasing projects and skills.',
      image: '/images/projects/project3.jpg',
      tags: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    },
    {
      id: 4,
      title: 'Blog Platform',
      description: 'A content management system for publishing articles.',
      image: '/images/projects/project1.jpg',
      tags: ['Next.js', 'MongoDB', 'AWS'],
    },
    {
      id: 5,
      title: 'Social Media Dashboard',
      description: 'Analytics dashboard for social media metrics with real-time updates.',
      image: '/images/projects/project2.jpg',
      tags: ['React', 'Chart.js', 'Firebase'],
    },
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8 text-center">My Projects</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div key={project.id} className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:-translate-y-1 hover:shadow-lg">
            <div className="h-48 relative">
              <Image
                src={project.image}
                alt={project.title}
                fill
                style={{ objectFit: "cover" }}
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
        ))}
      </div>
    </div>
  );
}