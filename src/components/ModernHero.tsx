
import React from 'react';
import { Github, Linkedin, Mail, ArrowDown, Code, Database, Globe } from 'lucide-react';

const ModernHero = () => {
  const scrollToNext = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 text-white relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {/* Profile Image - Made smaller and positioned lower */}
        <div className="mb-6 mt-24">
          <div className="w-36 h-36 mx-auto mb-4 relative">
            <div className="w-full h-full rounded-full overflow-hidden border-4 border-white/20 shadow-2xl">
              <img 
                src="/lovable-uploads/15e7621c-a6a8-4408-bd67-a949f6dad8b3.png" 
                alt="Himanshu Kumar" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/30 to-purple-600/30 rounded-full blur-lg animate-pulse"></div>
          </div>
        </div>

        {/* Name and Title */}
        <div className="mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
            Himanshu Kumar
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-6 font-light">
            B.Tech Electronics & Communication Engineering
          </p>
          <div className="flex items-center justify-center gap-6 text-base mb-6">
            <span className="flex items-center gap-2 text-green-400">
              <span className="w-2 h-2 bg-green-400 rounded-full"></span>
              CGPA: 8.15
            </span>
            <span className="w-1 h-1 bg-gray-500 rounded-full"></span>
            <span className="text-blue-400">Software Developer</span>
            <span className="w-1 h-1 bg-gray-500 rounded-full"></span>
            <span className="text-purple-400">Problem Solver</span>
          </div>
          <div className="flex items-center justify-center gap-6 text-sm text-gray-400">
            <span className="flex items-center gap-2">
              📞 +91-7461008757
            </span>
            <span className="w-1 h-1 bg-gray-500 rounded-full"></span>
            <span className="flex items-center gap-2">
              📧 himkumsharma@gmail.com
            </span>
          </div>
        </div>

        {/* Tech Skills Icons */}
        <div className="flex justify-center space-x-12 mb-16">
          <div className="text-center group cursor-pointer">
            <div className="w-20 h-20 bg-blue-500/20 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-blue-500/30 transition-all duration-300 group-hover:scale-110">
              <Code className="w-12 h-12 text-blue-400" />
            </div>
            <p className="text-sm text-gray-300 group-hover:text-white transition-colors">Development</p>
          </div>
          <div className="text-center group cursor-pointer">
            <div className="w-20 h-20 bg-purple-500/20 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-purple-500/30 transition-all duration-300 group-hover:scale-110">
              <Database className="w-12 h-12 text-purple-400" />
            </div>
            <p className="text-sm text-gray-300 group-hover:text-white transition-colors">Data Structures</p>
          </div>
          <div className="text-center group cursor-pointer">
            <div className="w-20 h-20 bg-cyan-500/20 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-cyan-500/30 transition-all duration-300 group-hover:scale-110">
              <Globe className="w-12 h-12 text-cyan-400" />
            </div>
            <p className="text-sm text-gray-300 group-hover:text-white transition-colors">Web Tech</p>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex justify-center space-x-8 mb-16">
          <a
            href="https://github.com/Himkumsharma"
            target="_blank"
            rel="noopener noreferrer"
            className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center hover:bg-white/20 transition-all duration-300 hover:scale-110 group"
          >
            <Github className="w-8 h-8 group-hover:text-blue-400 transition-colors" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center hover:bg-white/20 transition-all duration-300 hover:scale-110 group"
          >
            <Linkedin className="w-8 h-8 group-hover:text-blue-400 transition-colors" />
          </a>
          <a
            href="mailto:himkumsharma@gmail.com"
            className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center hover:bg-white/20 transition-all duration-300 hover:scale-110 group"
          >
            <Mail className="w-8 h-8 group-hover:text-blue-400 transition-colors" />
          </a>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 hover:scale-105">
            <div className="text-5xl font-bold text-blue-400 mb-3">200+</div>
            <div className="text-gray-300">Coding Challenges</div>
          </div>
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 hover:scale-105">
            <div className="text-5xl font-bold text-purple-400 mb-3">SIH</div>
            <div className="text-gray-300">2023 Finalist</div>
          </div>
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 hover:scale-105">
            <div className="text-5xl font-bold text-cyan-400 mb-3">8.15</div>
            <div className="text-gray-300">CGPA</div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <button
          onClick={scrollToNext}
          className="animate-bounce group"
        >
          <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center group-hover:bg-white/20 transition-all duration-300">
            <ArrowDown className="w-6 h-6 text-gray-400 group-hover:text-white transition-colors" />
          </div>
        </button>
      </div>
    </section>
  );
};

export default ModernHero;
