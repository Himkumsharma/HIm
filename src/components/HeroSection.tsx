
import React from 'react';
import { ChevronRight, Code, Zap, Target } from 'lucide-react';

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative bg-gradient-to-br from-slate-800 via-slate-700 to-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="text-center animate-fade-in">
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto bg-gradient-to-r from-sky-400 to-blue-500 rounded-full flex items-center justify-center mb-6">
              <span className="text-4xl font-bold text-white">HK</span>
            </div>
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-sky-400 to-blue-400 bg-clip-text text-transparent">
            Himanshu Kumar
          </h1>
          
          <p className="text-xl sm:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            B.Tech Student in Electronics & Communication Engineering (6th Semester)
          </p>
          
          <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto">
            Passionate about software development, web technologies, and using data structures and algorithms to solve real-world problems.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <button
              onClick={() => scrollToSection('projects')}
              className="inline-flex items-center px-8 py-3 bg-sky-500 hover:bg-sky-600 text-white font-medium rounded-lg transition-colors group"
            >
              View My Projects
              <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </button>
            
            <button
              onClick={() => scrollToSection('contact')}
              className="inline-flex items-center px-8 py-3 border-2 border-sky-400 text-sky-400 hover:bg-sky-400 hover:text-white font-medium rounded-lg transition-colors"
            >
              Get In Touch
            </button>
          </div>
        </div>

        {/* Quick Highlights */}
        <div className="grid md:grid-cols-3 gap-8 animate-fade-in">
          <div className="text-center p-6 rounded-xl bg-slate-800/50 hover:bg-slate-700/50 transition-colors">
            <div className="w-16 h-16 bg-sky-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Code className="w-8 h-8 text-sky-600" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">Software Development</h3>
            <p className="text-gray-300">
              Building web applications and solving complex problems with clean, efficient code.
            </p>
          </div>

          <div className="text-center p-6 rounded-xl bg-slate-800/50 hover:bg-slate-700/50 transition-colors">
            <div className="w-16 h-16 bg-sky-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Zap className="w-8 h-8 text-sky-600" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">Web Technologies</h3>
            <p className="text-gray-300">
              Creating responsive, user-friendly interfaces with modern web frameworks and tools.
            </p>
          </div>

          <div className="text-center p-6 rounded-xl bg-slate-800/50 hover:bg-slate-700/50 transition-colors">
            <div className="w-16 h-16 bg-sky-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Target className="w-8 h-8 text-sky-600" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">DSA Solutions</h3>
            <p className="text-gray-300">
              Applying data structures and algorithms to create optimized project solutions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
