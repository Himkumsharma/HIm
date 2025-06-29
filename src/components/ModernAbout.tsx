
import React from 'react';
import { GraduationCap, Award, Code2, Target, MapPin, Calendar, Book } from 'lucide-react';

const ModernAbout = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Dedicated professional with a passion for technology and a keen interest in the software industry. 
            Proven in driving real-world solutions, optimizing processes, and solving complex problems using cutting-edge technologies.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          <div className="animate-fade-in">
            <div className="relative">
              <div className="w-80 h-80 mx-auto rounded-2xl overflow-hidden shadow-2xl relative">
                <img 
                  src="/lovable-uploads/15e7621c-a6a8-4408-bd67-a949f6dad8b3.png" 
                  alt="Himanshu Kumar" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-transparent"></div>
              </div>
              <div className="absolute -inset-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl blur opacity-20"></div>
            </div>
          </div>

          <div className="space-y-8 animate-fade-in">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">My Journey</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">From Patna to Bhopal</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Born and raised in Patna, Bihar, I completed my foundational education at Kiddy Convent High School 
                      and Shemford Futuristic School before pursuing my engineering dreams in Bhopal.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Book className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Academic Excellence</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Maintaining a CGPA of 8.00 in Electronics & Communication Engineering at Lakshmi Narain College of Technology, 
                      while actively engaging in competitive programming and software development.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Target className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Tech Passion</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Passionate about bridging the gap between theory and practice, I focus on creating real-world solutions 
                      that make a difference in people's lives, especially in education and placement preparation.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Education Timeline */}
        <div className="mb-16 animate-fade-in">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-12">Educational Journey</h3>
          <div className="space-y-8">
            <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-2xl p-8 hover:shadow-lg transition-all duration-300">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center">
                    <GraduationCap className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900">B.Tech Electronics & Communication Engineering</h4>
                    <p className="text-gray-600">Lakshmi Narain College of Technology, Bhopal</p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-lg font-semibold text-blue-600">CGPA: 8.15</div>
                  <div className="text-gray-500">2022 - 2026</div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-purple-50 to-purple-100 rounded-2xl p-8 hover:shadow-lg transition-all duration-300">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center">
                    <Book className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900">10+2 - PCM</h4>
                    <p className="text-gray-600">Shemford Futuristic School, Patna</p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-lg font-semibold text-purple-600">63.6%</div>
                  <div className="text-gray-500">2020 - 2022</div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-green-50 to-green-100 rounded-2xl p-8 hover:shadow-lg transition-all duration-300">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center">
                    <Calendar className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900">10th - PCM</h4>
                    <p className="text-gray-600">Kiddy Convent High School, Patna</p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-lg font-semibold text-green-600">75%</div>
                  <div className="text-gray-500">2019 - 2020</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Statistics */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 animate-fade-in">
          <div className="text-center p-8 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
            <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <Code2 className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">200+</h3>
            <p className="text-gray-600">Problems Solved Across Platforms</p>
          </div>

          <div className="text-center p-8 bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
            <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <Award className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">SIH 2023</h3>
            <p className="text-gray-600">Grand Finale Finalist</p>
          </div>

          <div className="text-center p-8 bg-gradient-to-br from-green-50 to-green-100 rounded-2xl hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
            <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <Award className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">IEEE</h3>
            <p className="text-gray-600">Committee Member</p>
          </div>

          <div className="text-center p-8 bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
            <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <GraduationCap className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">CGPA 8.15</h3>
            <p className="text-gray-600">Academic Excellence</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ModernAbout;
