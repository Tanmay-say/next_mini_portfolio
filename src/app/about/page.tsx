import Image from 'next/image';

export default function About() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8 text-center">About Me</h1>
      
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow-md overflow-hidden mb-12">
          <div className="md:flex">
            <div className="md:w-1/3 relative">
              <div className="h-80 md:h-full relative">
                <Image
                  src="/images/profile.jpg"
                  alt="My Name"
                  fill
                  style={{objectFit: "cover"}}
                  priority
                />
              </div>
            </div>
            <div className="md:w-2/3 p-8">
              <h2 className="text-2xl font-bold mb-4">My Name</h2>
              <p className="text-gray-700 mb-4">Web Developer & Designer</p>
              <p className="text-gray-600 mb-6">
                I'm a passionate web developer with a focus on creating beautiful, functional, 
                and responsive websites. With expertise in modern frontend technologies like React, 
                Next.js, and TypeScript, I build seamless web experiences that users love.
              </p>
              <div className="space-y-2">
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-indigo-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span>contact@yourname.com</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-indigo-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>San Francisco, CA</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-lg shadow-md p-8">
            <h3 className="text-xl font-bold mb-4">My Skills</h3>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between mb-1">
                  <span className="font-medium">Frontend Development</span>
                  <span>90%</span>
                </div>
                <div className="w-full bg-gray-200 h-2 rounded-full">
                  <div className="bg-indigo-600 h-2 rounded-full" style={{ width: '90%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-1">
                  <span className="font-medium">React & Next.js</span>
                  <span>85%</span>
                </div>
                <div className="w-full bg-gray-200 h-2 rounded-full">
                  <div className="bg-indigo-600 h-2 rounded-full" style={{ width: '85%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-1">
                  <span className="font-medium">TypeScript</span>
                  <span>80%</span>
                </div>
                <div className="w-full bg-gray-200 h-2 rounded-full">
                  <div className="bg-indigo-600 h-2 rounded-full" style={{ width: '80%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-1">
                  <span className="font-medium">UI/UX Design</span>
                  <span>75%</span>
                </div>
                <div className="w-full bg-gray-200 h-2 rounded-full">
                  <div className="bg-indigo-600 h-2 rounded-full" style={{ width: '75%' }}></div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-8">
            <h3 className="text-xl font-bold mb-4">Education & Experience</h3>
            <div className="space-y-6">
              <div>
                <h4 className="font-medium">Senior Frontend Developer</h4>
                <p className="text-sm text-gray-500">Tech Company • 2022 - Present</p>
                <p className="text-gray-600 mt-2">Leading frontend development for web applications with React and Next.js.</p>
              </div>
              <div>
                <h4 className="font-medium">Web Developer</h4>
                <p className="text-sm text-gray-500">Agency Studio • 2019 - 2022</p>
                <p className="text-gray-600 mt-2">Developed responsive websites for various clients using modern web technologies.</p>
              </div>
              <div>
                <h4 className="font-medium">Computer Science, B.S.</h4>
                <p className="text-sm text-gray-500">University Name • 2015 - 2019</p>
                <p className="text-gray-600 mt-2">Focused on web development, algorithms, and software engineering.</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h3 className="text-xl font-bold mb-4">About Me</h3>
          <div className="space-y-4 text-gray-600">
            <p>
              I've always been passionate about technology and design. My journey into web development 
              started when I was in college, where I discovered my love for creating beautiful digital experiences.
            </p>
            <p>
              After graduating with a degree in Computer Science, I've spent the last few years honing my skills 
              in modern web technologies. I'm particularly interested in the intersection of design and 
              development, creating web experiences that are both aesthetically pleasing and functionally robust.
            </p>
            <p>
              When I'm not coding, you can find me hiking in the mountains, reading science fiction, or 
              experimenting with new recipes in the kitchen.
            </p>
            <p>
              I'm always open to new opportunities and collaborations. If you have a project in mind or 
              just want to connect, feel free to reach out!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}