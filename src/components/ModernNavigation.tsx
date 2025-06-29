import React, { useState, useEffect } from 'react';
import { Menu, X, Code2 } from 'lucide-react';

const ModernNavigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  const navItems = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Projects', id: 'projects' },
    { name: 'Skills', id: 'skills' },
    { name: 'Resume', id: 'resume' },
    { name: 'Contact', id: 'contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      const sections = navItems.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 w-screen z-50 transition-all duration-500 ease-in-out ${
      scrolled 
        ? 'bg-white/90 backdrop-blur-xl shadow-2xl border-b border-white/20' 
        : 'bg-transparent'
    }`}>
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-cyan-600/10 opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex justify-between items-center h-20">
          {/* Enhanced Logo */}
          <button 
            onClick={() => scrollToSection('home')}
            className="group flex items-center space-x-3 text-gray-900 hover:text-blue-600 transition-all duration-300 transform hover:scale-105"
          >
            <div className="relative">
              <Code2 className="w-10 h-10 transition-all duration-300 group-hover:rotate-12 group-hover:text-blue-500" />
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full blur opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-blue-600 bg-clip-text text-transparent group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300">
              HK
            </span>
          </button>

          {/* Enhanced Desktop Navigation */}
          <div className="hidden md:flex space-x-2">
            {navItems.map((item, index) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.id)}
                className={`relative px-6 py-3 rounded-xl text-sm font-medium transition-all duration-300 transform hover:scale-105 group ${
                  activeSection === item.id
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-500/25'
                    : 'text-gray-700 hover:bg-white/80 hover:text-blue-600 hover:shadow-md'
                }`}
                style={{ 
                  animationDelay: `${index * 100}ms`,
                  animation: 'fade-in 0.6s ease-out forwards'
                }}
              >
                <span className="relative z-10">{item.name}</span>
                {activeSection === item.id && (
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl blur-sm opacity-50 animate-pulse"></div>
                )}
                {/* Hover effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
            ))}
          </div>

          {/* Enhanced Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="relative p-2 text-gray-700 hover:text-blue-600 transition-all duration-300 transform hover:scale-110 group"
            >
              <div className="w-8 h-8 flex items-center justify-center">
                {isMenuOpen ? (
                  <X size={24} className="transform rotate-0 group-hover:rotate-90 transition-transform duration-300" />
                ) : (
                  <Menu size={24} className="transform rotate-0 group-hover:rotate-180 transition-transform duration-300" />
                )}
              </div>
              <div className="absolute inset-0 bg-blue-500/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 scale-0 group-hover:scale-150"></div>
            </button>
          </div>
        </div>

        {/* Enhanced Mobile Navigation */}
        <div className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
          isMenuOpen 
            ? 'max-h-96 opacity-100 transform translate-y-0' 
            : 'max-h-0 opacity-0 transform -translate-y-4'
        }`}>
          <div className="absolute top-full left-0 right-0 bg-white/95 backdrop-blur-xl shadow-2xl border border-white/20 rounded-b-2xl">
            <div className="px-6 py-4 space-y-2">
              {navItems.map((item, index) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.id)}
                  className={`block w-full text-left px-6 py-4 rounded-xl text-sm font-medium transition-all duration-300 transform hover:scale-105 group ${
                    activeSection === item.id
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                      : 'text-gray-700 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 hover:text-blue-600'
                  }`}
                  style={{ 
                    animationDelay: `${index * 100}ms`,
                    animation: isMenuOpen ? 'slide-in-right 0.4s ease-out forwards' : 'none'
                  }}
                >
                  <span className="relative z-10">{item.name}</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Animated border */}
      <div className={`absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent transition-opacity duration-500 ${
        scrolled ? 'opacity-100' : 'opacity-0'
      }`}></div>
    </nav>
  );
};

export default ModernNavigation;
