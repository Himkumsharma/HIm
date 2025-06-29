
import React from 'react';
import { Code, Database, Globe, Cpu, Wrench, BookOpen } from 'lucide-react';

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code className="w-6 h-6" />,
      skills: [
        { name: "C", level: 85 },
        { name: "C++", level: 90 },
        { name: "Python", level: 80 },
        { name: "JavaScript", level: 85 }
      ]
    },
    {
      title: "Web Technologies",
      icon: <Globe className="w-6 h-6" />,
      skills: [
        { name: "HTML", level: 90 },
        { name: "CSS", level: 85 },
        { name: "React.js", level: 85 },
        { name: "Node.js", level: 75 }
      ]
    },
    {
      title: "Tools & Platforms",
      icon: <Wrench className="w-6 h-6" />,
      skills: [
        { name: "GitHub", level: 90 },
        { name: "Firebase", level: 80 },
        { name: "Netlify", level: 75 },
        { name: "Swiper.js", level: 70 }
      ]
    },
    {
      title: "Core CS Concepts",
      icon: <Cpu className="w-6 h-6" />,
      skills: [
        { name: "Data Structures", level: 90 },
        { name: "Algorithms", level: 85 },
        { name: "Microcontrollers", level: 75 },
        { name: "Networking", level: 70 }
      ]
    },
    {
      title: "Specialized Knowledge",
      icon: <Database className="w-6 h-6" />,
      skills: [
        { name: "8051 Microcontroller", level: 80 },
        { name: "8096 Microcontroller", level: 75 },
        { name: "TCP/IP", level: 70 },
        { name: "CRC & Token Ring", level: 65 }
      ]
    },
    {
      title: "Development Skills",
      icon: <BookOpen className="w-6 h-6" />,
      skills: [
        { name: "Problem Solving", level: 95 },
        { name: "Open Source Contribution", level: 85 },
        { name: "Project Management", level: 80 },
        { name: "Team Collaboration", level: 85 }
      ]
    }
  ];

  const getSkillColor = (level: number) => {
    if (level >= 85) return "bg-green-500";
    if (level >= 75) return "bg-sky-500";
    if (level >= 65) return "bg-yellow-500";
    return "bg-gray-400";
  };

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Technical Skills</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise and proficiency levels across different domains.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 animate-fade-in hover-scale">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-sky-100 rounded-lg flex items-center justify-center mr-4 text-sky-600">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900">{category.title}</h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, idx) => (
                  <div key={idx}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-700 font-medium">{skill.name}</span>
                      <span className="text-gray-500 text-sm">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className={`h-2 rounded-full transition-all duration-500 ${getSkillColor(skill.level)}`}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16 animate-fade-in">
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-green-600">85+%</span>
            </div>
            <h4 className="text-lg font-semibold text-gray-900 mb-2">Expert</h4>
            <p className="text-gray-600 text-sm">Highly proficient with extensive experience</p>
          </div>

          <div className="text-center p-6">
            <div className="w-16 h-16 bg-sky-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-sky-600">75+%</span>
            </div>
            <h4 className="text-lg font-semibold text-gray-900 mb-2">Advanced</h4>
            <p className="text-gray-600 text-sm">Comfortable with solid understanding</p>
          </div>

          <div className="text-center p-6">
            <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-yellow-600">65+%</span>
            </div>
            <h4 className="text-lg font-semibold text-gray-900 mb-2">Intermediate</h4>
            <p className="text-gray-600 text-sm">Growing proficiency and understanding</p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-slate-800 to-slate-700 rounded-2xl p-8 text-white text-center animate-fade-in">
          <h3 className="text-2xl font-bold mb-4">Continuous Learning</h3>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Technology evolves rapidly, and I'm committed to staying current with the latest trends, 
            frameworks, and best practices. I regularly engage in coding challenges, hackathons like SIH 2024, 
            and contribute to open-source projects to enhance my skills.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
