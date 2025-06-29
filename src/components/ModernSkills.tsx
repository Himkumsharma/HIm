
import React from 'react';
import { Code, Database, Globe, Cpu, Network, Award, Cloud } from 'lucide-react';

const ModernSkills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code className="w-6 h-6" />,
      gradient: "from-blue-500 to-cyan-500",
      skills: ["C/C++ (Proficient)", "Java", "Python", "JavaScript"]
    },
    {
      title: "Technologies & Frameworks",
      icon: <Globe className="w-6 h-6" />,
      gradient: "from-purple-500 to-pink-500",
      skills: ["HTML", "CSS", "React.js", "Node.js"]
    },
    {
      title: "Developer Tools",
      icon: <Database className="w-6 h-6" />,
      gradient: "from-green-500 to-teal-500",
      skills: ["VS Code", "Eclipse", "IntelliJ IDEA", "PyCharm", "GitHub", "Postman"]
    },
    {
      title: "Cloud & Database",
      icon: <Cloud className="w-6 h-6" />,
      gradient: "from-orange-500 to-red-500",
      skills: ["AWS (Basic)", "MySQL", "MongoDB", "Firebase"]
    },
    {
      title: "Operating Systems",
      icon: <Cpu className="w-6 h-6" />,
      gradient: "from-indigo-500 to-purple-500",
      skills: ["Windows", "Linux (Ubuntu)", "macOS"]
    },
    {
      title: "Coursework",
      icon: <Network className="w-6 h-6" />,
      gradient: "from-rose-500 to-pink-500",
      skills: ["Operating Systems", "Computer Networks", "OOPS", "DBMS"]
    }
  ];

  const certifications = [
    {
      title: "Programming Using C++",
      provider: "Infosys SpringBoard",
      icon: <Code className="w-5 h-5" />
    },
    {
      title: "Data Structures & Algorithms with Java",
      provider: "Infosys SpringBoard",
      icon: <Database className="w-5 h-5" />
    },
    {
      title: "AWS Certified Cloud Practitioner",
      provider: "Amazon Web Services",
      icon: <Cloud className="w-5 h-5" />
    },
    {
      title: "Microsoft Azure AI Fundamental",
      provider: "Microsoft Learn",
      icon: <Network className="w-5 h-5" />
    }
  ];

  const achievements = [
    {
      title: "Smart India Hackathon 2023 Finalist",
      description: "First position shortlisted for Grand Finale",
      icon: <Award className="w-5 h-5" />
    },
    {
      title: "Tata Imagination Challenge",
      description: "Awarded certificate by Tata Brand Assessment",
      icon: <Award className="w-5 h-5" />
    },
    {
      title: "Flipkart Grid 5.0",
      description: "Selected for prestigious coding competition",
      icon: <Code className="w-5 h-5" />
    }
  ];

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Technical Skills</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A comprehensive toolkit spanning programming languages, cloud technologies, 
            and development tools for full-stack development.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-fade-in group"
            >
              <div className={`w-14 h-14 bg-gradient-to-r ${category.gradient} rounded-xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform`}>
                {category.icon}
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-4">{category.title}</h3>
              
              <div className="space-y-2">
                {category.skills.map((skill, idx) => (
                  <div
                    key={idx}
                    className="bg-white px-3 py-2 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-100 transition-colors"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-16 animate-fade-in">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Certifications</h3>
            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 flex-shrink-0">
                      {cert.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">{cert.title}</h4>
                      <p className="text-gray-600 text-sm">{cert.provider}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Achievements</h3>
            <div className="space-y-4">
              {achievements.map((achievement, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-6 hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-yellow-100 rounded-lg flex items-center justify-center text-yellow-600 flex-shrink-0">
                      {achievement.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">{achievement.title}</h4>
                      <p className="text-gray-600 text-sm">{achievement.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="text-center animate-fade-in">
          <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Competitive Programming Profiles</h3>
            <p className="text-lg text-blue-100 max-w-2xl mx-auto mb-6">
              Active across multiple platforms with 200+ problems solved, demonstrating strong 
              algorithmic thinking and problem-solving capabilities.
            </p>
            <div className="flex justify-center space-x-8 text-sm">
              <div className="text-center">
                <div className="text-2xl font-bold">LeetCode</div>
                <div className="text-blue-200">Active Profile</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">GeeksforGeeks</div>
                <div className="text-blue-200">Regular Contributor</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">GitHub</div>
                <div className="text-blue-200">Open Source</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">HackerRank</div>
                <div className="text-blue-200">Problem Solver</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ModernSkills;
