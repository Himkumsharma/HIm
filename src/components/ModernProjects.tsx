import React from 'react';
import { ExternalLink, Github, Code, Users, Award, Database, Lightbulb, GraduationCap, Settings } from 'lucide-react';

const ModernProjects = () => {
  const projects = [
    {
      title: "Algo Google",
      subtitle: "Reimagining Services Through Data Structures",
      description: "Bringing real-world Google use cases to life with data structures and algorithms. Examined 33+ business use cases across Google's platforms to tackle real-world challenges and enhance service optimization.",
      tech: ["Data Structures", "Algorithms", "System Design", "Performance Analysis"],
      features: [
        "33+ Google business use case analysis",
        "Real-world DSA implementation challenges",
        "Performance metrics evaluation",
        "Theory-to-practice gap bridging"
      ],
      icon: <Database className="w-6 h-6" />,
      gradient: "from-blue-500 to-cyan-500",
      links: {
        live: "https://github.com/Himkumsharma",
        github: "https://github.com/Himkumsharma"
      }
    },
    {
      title: "CampusCrack",
      subtitle: "National Placement Preparation Platform",
      description: "A multi-page web platform designed for pan-India students to prepare for campus placements with categorized company insights and comprehensive preparation resources.",
      tech: ["React.js", "Node.js", "Firebase", "Swiper.js"],
      features: [
        "Service-Based, Product-Based, and Consulting company categorization",
        "Previous Year Questions (PYQs) and interview experiences",
        "Company notes and preparation materials",
        "AI chatbot integration for assistance",
        "Secure student login and content management"
      ],
      icon: <GraduationCap className="w-6 h-6" />,
      gradient: "from-green-500 to-teal-500",
      links: {
        live: "https://github.com/Himkumsharma",
        github: "https://github.com/Himkumsharma"
      }
    },
    {
      title: "Smart Street Light Monitoring System",
      subtitle: "IoT-Based Fault Detection & Location Tracking",
      description: "Centralized monitoring system for street light fault detection and location tracking. Developed for Smart India Hackathon 2023 targeting municipal authorities and infrastructure managers.",
      tech: ["IoT", "Monitoring Systems", "Location Tracking", "Fault Detection"],
      features: [
        "Centralized monitoring dashboard",
        "Real-time fault detection",
        "GPS-based location tracking",
        "Energy consumption optimization"
      ],
      icon: <Lightbulb className="w-6 h-6" />,
      gradient: "from-yellow-500 to-orange-500",
      certificate: "SIH Certificate Available",
      links: {
        github: "https://github.com/Himkumsharma"
      }
    },
    {
      title: "Exam Seat Arrangement System",
      subtitle: "Automated Seating Allocation System",
      description: "Automated seating allocation system for institutional exams with user-friendly interface, designed to streamline the examination process and optimize seat distribution.",
      tech: ["C++", "JavaScript", "Algorithm Design", "System Optimization"],
      features: [
        "Automated seating allocation algorithm",
        "User-friendly interface design",
        "Institutional exam management",
        "Optimized seat distribution logic"
      ],
      icon: <Settings className="w-6 h-6" />,
      gradient: "from-purple-500 to-pink-500",
      links: {
        github: "https://github.com/Himkumsharma"
      }
    }
  ];

  const achievements = [
    {
      title: "Smart India Hackathon 2023",
      description: "First position shortlisted for Grand Finale",
      detail: "PSID – SIH1512",
      icon: <Award className="w-6 h-6" />
    },
    {
      title: "Tata Imagination Challenge",
      description: "Awarded certificate by Tata Brand Assessment",
      detail: "Innovation in technology solutions",
      icon: <Award className="w-6 h-6" />
    },
    {
      title: "Flipkart Grid 5.0",
      description: "Selected for prestigious coding competition",
      detail: "Among top performers nationwide",
      icon: <Code className="w-6 h-6" />
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Innovative solutions combining software development, data structures, 
            and real-world problem-solving approaches.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group hover:-translate-y-2 animate-fade-in"
            >
              <div className="p-8">
                <div className="flex items-start justify-between mb-6">
                  <div className={`w-14 h-14 bg-gradient-to-r ${project.gradient} rounded-xl flex items-center justify-center text-white mb-4`}>
                    {project.icon}
                  </div>
                  <div className="flex space-x-2">
                    {project.links?.github && (
                      <a 
                        href={project.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-lg flex items-center justify-center transition-colors"
                      >
                        <Github className="w-5 h-5 text-gray-600" />
                      </a>
                    )}
                    {project.links?.live && (
                      <a 
                        href={project.links.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-lg flex items-center justify-center transition-colors"
                      >
                        <ExternalLink className="w-5 h-5 text-gray-600" />
                      </a>
                    )}
                  </div>
                </div>

                
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{project.title}</h3>
                <p className="text-blue-600 font-medium mb-4">{project.subtitle}</p>
                <p className="text-gray-600 mb-6 leading-relaxed">{project.description}</p>

                {project.certificate && (
                  <div className="mb-4">
                    <span className="inline-flex items-center px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">
                      🏆 {project.certificate}
                    </span>
                  </div>
                )}

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {project.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start text-gray-600 text-sm">
                        <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        

        <div className="animate-fade-in">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">Major Achievements</h3>
          
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center text-yellow-600 flex-shrink-0">
                    {achievement.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">{achievement.title}</h4>
                    <p className="text-gray-600 text-sm mb-1">{achievement.description}</p>
                    <p className="text-gray-500 text-xs">{achievement.detail}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        
        <div className="text-center animate-fade-in">
          <div className="bg-white rounded-2xl shadow-lg p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Algorithmic Excellence</h3>
            <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <Code className="w-8 h-8 text-white" />
            </div>
            <p className="text-lg text-gray-600 mb-6">
              Mastered 200+ coding challenges across multiple competitive programming platforms, 
              demonstrating exceptional algorithmic thinking and advanced problem-solving expertise.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a 
                href="https://leetcode.com/u/Himkumsharma" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full font-medium hover:bg-blue-200 transition-colors"
              >
                LeetCode
              </a>
              <a 
                href="https://www.geeksforgeeks.org/user/himkum" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-4 py-2 bg-green-100 text-green-700 rounded-full font-medium hover:bg-green-200 transition-colors"
              >
                GeeksforGeeks
              </a>
              <a 
                href="https://www.hackerrank.com/profile/himkumsharma" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-4 py-2 bg-purple-100 text-purple-700 rounded-full font-medium hover:bg-purple-200 transition-colors"
              >
                HackerRank
              </a>
              <a 
                href="https://github.com/Himkumsharma" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-4 py-2 bg-orange-100 text-orange-700 rounded-full font-medium hover:bg-orange-200 transition-colors"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ModernProjects;
