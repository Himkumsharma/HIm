
import React from 'react';
import { ExternalLink, Github, Globe, Search, Users, Calculator } from 'lucide-react';

const ProjectsSection = () => {
  const projects = [
    {
      title: "CampusCrack",
      description: "A multi-page web platform designed for pan-India students to prepare for campus placements with categorized insights into Service-Based, Product-Based, and Consulting companies.",
      tech: ["React.js", "Node.js", "Firebase", "Swiper.js"],
      category: "National Placement Platform",
      icon: <Users className="w-6 h-6" />,
      highlights: [
        "PYQs and interview experiences",
        "Company notes and insights", 
        "AI chatbot integration",
        "Secure student login system"
      ]
    },
    {
      title: "Algo Google",
      description: "Reimagining Google services through data structures - analyzed 33+ Google business use cases to optimize operations with real-world DSA applications.",
      tech: ["C++", "Python", "Flowcharts", "Visual DSA Mapping"],
      category: "Data Structure Analysis",
      icon: <Search className="w-6 h-6" />,
      highlights: [
        "33+ Google use cases analyzed",
        "Real-world DSA applications",
        "Visual mapping of algorithms",
        "Performance optimization insights"
      ]
    },
    {
      title: "Attendance Recognition System",
      description: "Built using web technologies with local storage to avoid backend dependency, providing a seamless attendance tracking solution.",
      tech: ["HTML", "CSS", "JavaScript", "LocalStorage"],
      category: "Web Application",
      icon: <Globe className="w-6 h-6" />,
      highlights: [
        "No backend dependency",
        "Local storage implementation",
        "User-friendly interface",
        "Real-time tracking"
      ]
    },
    {
      title: "Exam Seat Arrangement System",
      description: "Automated seating allocation for institutional exams with user-friendly interface, streamlining the exam management process.",
      tech: ["C++", "JavaScript"],
      category: "Automation Tool",
      icon: <Calculator className="w-6 h-6" />,
      highlights: [
        "Automated seating allocation",
        "Institutional exam support",
        "User-friendly interface",
        "Efficient management system"
      ]
    }
  ];

  return (
    <section id="projects" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Key Projects</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A showcase of my work in software development, web technologies, and algorithmic solutions.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 animate-fade-in hover-scale">
              <div className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-sky-100 rounded-lg flex items-center justify-center mr-4 text-sky-600">
                    {project.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">{project.title}</h3>
                    <span className="text-sm text-sky-600 font-medium">{project.category}</span>
                  </div>
                </div>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  {project.description}
                </p>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-900 mb-3">Key Features:</h4>
                  <ul className="space-y-1">
                    {project.highlights.map((highlight, idx) => (
                      <li key={idx} className="text-gray-600 text-sm flex items-center">
                        <span className="w-1.5 h-1.5 bg-sky-500 rounded-full mr-3"></span>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-900 mb-3">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-4">
                  <button className="flex items-center px-4 py-2 bg-slate-800 text-white rounded-lg hover:bg-slate-700 transition-colors">
                    <Github className="w-4 h-4 mr-2" />
                    View Code
                  </button>
                  <button className="flex items-center px-4 py-2 border border-slate-300 text-slate-700 rounded-lg hover:bg-slate-50 transition-colors">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Live Demo
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-slate-800 to-slate-700 rounded-2xl p-8 text-white text-center animate-fade-in">
          <h3 className="text-2xl font-bold mb-4">More Projects Coming Soon</h3>
          <p className="text-lg text-gray-300 mb-6">
            I'm constantly working on new projects and exploring innovative technologies. 
            Stay tuned for more exciting developments in AI, education, and placement solutions!
          </p>
          <button className="inline-flex items-center px-6 py-3 bg-sky-500 hover:bg-sky-600 text-white font-medium rounded-lg transition-colors">
            <Github className="w-5 h-5 mr-2" />
            Follow on GitHub
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
