
import React from 'react';
import { GraduationCap, BookOpen, Heart } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">About Me</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Get to know more about my background, education, and what drives my passion for technology.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <div className="w-64 h-64 mx-auto bg-gradient-to-br from-sky-400 to-blue-500 rounded-2xl flex items-center justify-center">
              <span className="text-6xl font-bold text-white">HK</span>
            </div>
          </div>
          
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-900">Hello, I'm Himanshu Kumar</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              I am a dedicated B.Tech student specializing in Electronics and Communication Engineering, 
              with a strong passion for software development and cutting-edge web technologies.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              My journey in technology is driven by curiosity and the desire to create meaningful solutions 
              that can make a difference. I believe in continuous learning and staying updated with the 
              latest industry trends and best practices.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
            <div className="w-12 h-12 bg-sky-100 rounded-lg flex items-center justify-center mb-6">
              <GraduationCap className="w-6 h-6 text-sky-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Education</h3>
            <p className="text-gray-600 mb-2 font-medium">B.Tech in Electronics & Communication Engineering</p>
            <p className="text-gray-500">Currently pursuing my degree with focus on both hardware and software aspects of technology.</p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
            <div className="w-12 h-12 bg-sky-100 rounded-lg flex items-center justify-center mb-6">
              <BookOpen className="w-6 h-6 text-sky-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Learning Focus</h3>
            <ul className="space-y-2 text-gray-600">
              <li>• Data Structures & Algorithms</li>
              <li>• Web Development Technologies</li>
              <li>• Software Engineering Principles</li>
              <li>• Modern Development Frameworks</li>
            </ul>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
            <div className="w-12 h-12 bg-sky-100 rounded-lg flex items-center justify-center mb-6">
              <Heart className="w-6 h-6 text-sky-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Interests</h3>
            <ul className="space-y-2 text-gray-600">
              <li>• Building scalable web applications</li>
              <li>• Solving algorithmic challenges</li>
              <li>• Open source contributions</li>
              <li>• Technology innovation</li>
            </ul>
          </div>
        </div>

        <div className="bg-gradient-to-r from-slate-800 to-slate-700 rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">My Mission</h3>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            To leverage my technical skills and passion for innovation to create impactful software solutions 
            that solve real-world problems and contribute to the advancement of technology.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
