import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-600 to-purple-600 py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 text-white mb-10 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Hi, I'm <span className="text-yellow-300">My Name</span>
              </h1>
              <p className="text-xl md:text-2xl mb-6">
                A passionate web developer specialized in creating beautiful and functional websites
              </p>
              <div className="flex flex-wrap gap-4">
                <Link 
                  href="/projects" 
                  className="bg-white text-indigo-600 px-6 py-3 rounded-md font-medium hover:bg-opacity-90 transition-colors"
                >
                  View My Work
                </Link>
                <Link 
                  href="/contact" 
                  className="border border-white text-white px-6 py-3 rounded-md font-medium hover:bg-white hover:bg-opacity-10 transition-colors"
                >
                  Contact Me
                </Link>
              </div>
            </div>
            <div className="md:w-1/2 md:pl-10">
              <div className="bg-white p-3 rounded-lg shadow-xl transform rotate-3 md:ml-auto md:w-4/5">
                <div className="aspect-w-1 aspect-h-1 bg-gray-200 rounded-md overflow-hidden relative">
                  <Image
                    src="/images/profile.jpg"
                    alt="Profile"
                    fill
                    style={{objectFit: "cover"}}
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Featured Projects</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Check out some of my latest work. These projects showcase my skills in web development and design.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project cards would go here - simplified for brevity */}
            {[1, 2, 3].map((project) => (
              <div key={project} className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:-translate-y-1 hover:shadow-lg">
                <div className="h-48 bg-gray-200 relative">
                  <Image
                    src={`/images/projects/project${project}.jpg`}
                    alt={`Project ${project}`}
                    fill
                    style={{objectFit: "cover"}}
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Project Title {project}</h3>
                  <p className="text-gray-600 mb-4">A brief description of the project and the technologies used.</p>
                  <Link href={`/projects/${project}`} className="text-indigo-600 font-medium hover:text-indigo-800">
                    View Details
                  </Link>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link 
              href="/projects" 
              className="inline-block bg-indigo-600 text-white px-6 py-3 rounded-md font-medium hover:bg-indigo-700 transition-colors"
            >
              View All Projects
            </Link>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">My Skills</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              I've worked with a variety of technologies and frameworks to build modern web applications.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 text-center">
            {['JavaScript', 'TypeScript', 'React', 'Next.js', 'Node.js', 'Tailwind CSS', 'GraphQL', 'MongoDB'].map((skill) => (
              <div key={skill} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-medium text-indigo-600">{skill}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-indigo-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Let's Work Together</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            I'm currently available for freelance work. Get in touch if you have a project in mind or just want to say hello.
          </p>
          <Link 
            href="/contact" 
            className="bg-white text-indigo-600 px-8 py-4 rounded-md font-bold text-lg hover:bg-opacity-90 transition-colors"
          >
            Contact Me
          </Link>
        </div>
      </section>
    </>
  );
}