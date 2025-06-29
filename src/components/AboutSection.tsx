
import React from 'react';
import { GraduationCap, BookOpen, Heart, Trophy } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Get to know more about my background, education, and what drives my passion for technology.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16 animate-fade-in">
          <div>
            <div className="w-64 h-64 mx-auto bg-gradient-to-br from-sky-400 to-blue-500 rounded-2xl flex items-center justify-center">
              <span className="text-6xl font-bold text-white">HK</span>
            </div>
          </div>
          
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-gray-900">Hello, I'm Himanshu Kumar</h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              I am Himanshu Kumar, a B.Tech student in Electronics and Communication Engineering (ECE), 
              currently in my 6th semester. I'm passionate about software development, web technologies, 
              and using data structures and algorithms to solve real-world problems.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              I actively work on technical projects and open-source contributions, and I enjoy combining 
              AI, education, and placement-focused solutions to create meaningful impact.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16 animate-fade-in">
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
            <div className="w-12 h-12 bg-sky-100 rounded-lg flex items-center justify-center mb-6">
              <GraduationCap className="w-6 h-6 text-sky-600" />
            </div>
            <h4 className="text-xl font-semibold text-gray-900 mb-4">Education</h4>
            <p className="text-gray-600 mb-2 font-medium">B.Tech in Electronics & Communication Engineering</p>
            <p className="text-gray-500">Currently in 6th semester, focusing on both hardware and software aspects.</p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
            <div className="w-12 h-12 bg-sky-100 rounded-lg flex items-center justify-center mb-6">
              <BookOpen className="w-6 h-6 text-sky-600" />
            </div>
            <h4 className="text-xl font-semibold text-gray-900 mb-4">Learning Focus</h4>
            <ul className="space-y-2 text-gray-600 text-sm">
              <li>• Data Structures & Algorithms</li>
              <li>• Web Development Technologies</li>
              <li>• Microcontrollers (8051, 8096)</li>
              <li>• Networking (TCP/IP, CRC)</li>
            </ul>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
            <div className="w-12 h-12 bg-sky-100 rounded-lg flex items-center justify-center mb-6">
              <Heart className="w-6 h-6 text-sky-600" />
            </div>
            <h4 className="text-xl font-semibold text-gray-900 mb-4">Interests</h4>
            <ul className="space-y-2 text-gray-600 text-sm">
              <li>• Building scalable web applications</li>
              <li>• AI & Education solutions</li>
              <li>• Open source contributions</li>
              <li>• Placement preparation tools</li>
            </ul>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
            <div className="w-12 h-12 bg-sky-100 rounded-lg flex items-center justify-center mb-6">
              <Trophy className="w-6 h-6 text-sky-600" />
            </div>
            <h4 className="text-xl font-semibold text-gray-900 mb-4">Achievements</h4>
            <ul className="space-y-2 text-gray-600 text-sm">
              <li>• SIH 2024 Finalist</li>
              <li>• GitHub Contributor</li>
              <li>• CCNA M2 Certified</li>
              <li>• Multiple Projects</li>
            </ul>
          </div>
        </div>

        <div className="bg-gradient-to-r from-slate-800 to-slate-700 rounded-2xl p-8 text-white text-center animate-fade-in">
          <h4 className="text-2xl font-bold mb-4">My Mission</h4>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            To leverage my technical skills and passion for innovation to create impactful software solutions 
            that solve real-world problems, particularly in education and placement preparation.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
