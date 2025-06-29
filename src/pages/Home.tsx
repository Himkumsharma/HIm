
import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Code, Zap, Target } from 'lucide-react';

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-800 via-slate-700 to-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="text-center">
            <div className="mb-8">
              <div className="w-32 h-32 mx-auto bg-gradient-to-r from-sky-400 to-blue-500 rounded-full flex items-center justify-center mb-6">
                <span className="text-4xl font-bold text-white">HK</span>
              </div>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-sky-400 to-blue-400 bg-clip-text text-transparent">
              Himanshu Kumar
            </h1>
            
            <p className="text-xl sm:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              B.Tech Student in Electronics & Communication Engineering
            </p>
            
            <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto">
              Passionate about software development, web technologies, and creating innovative solutions through data structures and algorithms.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/projects"
                className="inline-flex items-center px-8 py-3 bg-sky-500 hover:bg-sky-600 text-white font-medium rounded-lg transition-colors group"
              >
                View My Projects
                <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </Link>
              
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-3 border-2 border-sky-400 text-sky-400 hover:bg-sky-400 hover:text-white font-medium rounded-lg transition-colors"
              >
                Get In Touch
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Highlights */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">What I Do</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Focused on building efficient, scalable solutions and continuously learning new technologies.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-xl bg-slate-50 hover:bg-slate-100 transition-colors">
              <div className="w-16 h-16 bg-sky-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Code className="w-8 h-8 text-sky-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Software Development</h3>
              <p className="text-gray-600">
                Building web applications and solving complex problems with clean, efficient code.
              </p>
            </div>

            <div className="text-center p-6 rounded-xl bg-slate-50 hover:bg-slate-100 transition-colors">
              <div className="w-16 h-16 bg-sky-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-sky-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Web Technologies</h3>
              <p className="text-gray-600">
                Creating responsive, user-friendly interfaces with modern web frameworks and tools.
              </p>
            </div>

            <div className="text-center p-6 rounded-xl bg-slate-50 hover:bg-slate-100 transition-colors">
              <div className="w-16 h-16 bg-sky-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-sky-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">DSA Solutions</h3>
              <p className="text-gray-600">
                Applying data structures and algorithms to create optimized project solutions.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
