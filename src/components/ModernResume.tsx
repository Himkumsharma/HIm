import React from 'react';
import { Download } from 'lucide-react';

const ModernResume = () => {
  const handleResumeDownload = () => {
    // Create a sample resume download link
    // In a real application, you would link to your actual resume file
    const resumeUrl = '/path-to-your-resume.pdf'; // Replace with actual resume path
    
    // For now, we'll create a mock download
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.download = 'Himanshu_Kumar_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          {/* Header */}
          <div className="mb-12 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent">
                Resume
              </span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Download my resume to learn more about my experience, skills, and achievements.
            </p>
          </div>

          {/* Resume Preview Card */}
          <div className="bg-white rounded-3xl shadow-2xl p-8 mb-12 animate-fade-in delay-300 hover:shadow-3xl transition-shadow duration-500">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              {/* Resume Info */}
              <div className="flex-1 text-left">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Himanshu Kumar - Software Developer
                </h3>
                <div className="space-y-3 text-gray-600">
                  <p className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                    B.Tech Electronics & Communication Engineering
                  </p>
                  <p className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                    CGPA: 8.15 • 7th Semester
                  </p>
                  <p className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-cyan-500 rounded-full"></span>
                    Coding Expert • SIH 2023 Finalist
                  </p>
                </div>
              </div>

              {/* Download Button */}
              <div className="flex-shrink-0">
                <button
                  onClick={handleResumeDownload}
                  className="group relative bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/25"
                >
                  <div className="flex items-center gap-3">
                    <Download className="w-6 h-6 group-hover:animate-bounce" />
                    <span>Download Resume</span>
                  </div>
                  
                  {/* Animated background */}
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
                  
                  {/* Glow effect */}
                  <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur opacity-30 group-hover:opacity-60 transition-opacity duration-300 -z-20"></div>
                </button>
              </div>
            </div>
          </div>

          {/* Additional Info */}
          <div className="grid md:grid-cols-3 gap-6 animate-fade-in delay-500">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 hover:bg-white transition-colors duration-300">
              <div className="text-2xl font-bold text-blue-600 mb-2">PDF Format</div>
              <p className="text-gray-600">Professional format, ATS-friendly</p>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 hover:bg-white transition-colors duration-300">
              <div className="text-2xl font-bold text-purple-600 mb-2">Updated</div>
              <p className="text-gray-600">Latest achievements & projects</p>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 hover:bg-white transition-colors duration-300">
              <div className="text-2xl font-bold text-cyan-600 mb-2">Complete</div>
              <p className="text-gray-600">All skills & experience included</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ModernResume;
