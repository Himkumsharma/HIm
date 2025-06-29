
import React from 'react';
import { Code, Database, Globe, Cpu, Wrench, BookOpen } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code className="w-6 h-6" />,
      skills: [
        { name: "JavaScript", level: 85 },
        { name: "Python", level: 80 },
        { name: "Java", level: 75 },
        { name: "C++", level: 70 },
        { name: "TypeScript", level: 75 }
      ]
    },
    {
      title: "Web Technologies",
      icon: <Globe className="w-6 h-6" />,
      skills: [
        { name: "React.js", level: 85 },
        { name: "HTML5/CSS3", level: 90 },
        { name: "Node.js", level: 75 },
        { name: "Express.js", level: 70 },
        { name: "Tailwind CSS", level: 80 }
      ]
    },
    {
      title: "Databases & Backend",
      icon: <Database className="w-6 h-6" />,
      skills: [
        { name: "MongoDB", level: 75 },
        { name: "MySQL", level: 70 },
        { name: "RESTful APIs", level: 80 },
        { name: "Firebase", level: 65 }
      ]
    },
    {
      title: "Core CS Concepts",
      icon: <Cpu className="w-6 h-6" />,
      skills: [
        { name: "Data Structures", level: 85 },
        { name: "Algorithms", level: 80 },
        { name: "System Design", level: 65 },
        { name: "Computer Networks", level: 70 }
      ]
    },
    {
      title: "Tools & Platforms",
      icon: <Wrench className="w-6 h-6" />,
      skills: [
        { name: "Git & GitHub", level: 85 },
        { name: "VS Code", level: 90 },
        { name: "Linux", level: 70 },
        { name: "Docker", level: 60 }
      ]
    },
    {
      title: "Learning & Development",
      icon: <BookOpen className="w-6 h-6" />,
      skills: [
        { name: "Problem Solving", level: 90 },
        { name: "Code Optimization", level: 80 },
        { name: "Team Collaboration", level: 85 },
        { name: "Technical Documentation", level: 75 }
      ]
    }
  ];

  const getSkillColor = (level: number) => {
    if (level >= 80) return "bg-green-500";
    if (level >= 70) return "bg-sky-500";
    if (level >= 60) return "bg-yellow-500";
    return "bg-gray-400";
  };

  return (
    <div className="min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Technical Skills</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise and proficiency levels across different domains.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
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

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-green-600">80+%</span>
            </div>
            <h4 className="text-lg font-semibold text-gray-900 mb-2">Advanced</h4>
            <p className="text-gray-600 text-sm">Highly proficient with extensive experience</p>
          </div>

          <div className="text-center p-6">
            <div className="w-16 h-16 bg-sky-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-sky-600">70+%</span>
            </div>
            <h4 className="text-lg font-semibold text-gray-900 mb-2">Intermediate</h4>
            <p className="text-gray-600 text-sm">Comfortable with good understanding</p>
          </div>

          <div className="text-center p-6">
            <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-yellow-600">60+%</span>
            </div>
            <h4 className="text-lg font-semibold text-gray-900 mb-2">Learning</h4>
            <p className="text-gray-600 text-sm">Currently developing and improving</p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-slate-800 to-slate-700 rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Continuous Learning</h3>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Technology evolves rapidly, and I'm committed to staying current with the latest trends, 
            frameworks, and best practices in software development. I regularly engage in coding challenges, 
            online courses, and personal projects to enhance my skills.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Skills;
