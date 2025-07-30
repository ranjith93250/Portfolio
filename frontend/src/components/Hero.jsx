import React, { useState, useEffect } from 'react';
import { ChevronDown, Download, Mail, Github, Linkedin } from 'lucide-react';
import { Button } from './ui/button';
import { personalInfo } from '../mockData';

const Hero = () => {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  // Subtle typewriter effect
  useEffect(() => {
    const roles = personalInfo.roles;
    const currentRole = roles[currentRoleIndex];
    
    const typeSpeed = isDeleting ? 80 : 150; // Slower, more professional
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < currentRole.length) {
          setDisplayText(currentRole.slice(0, displayText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 3000); // Longer pause
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(displayText.slice(0, -1));
        } else {
          setIsDeleting(false);
          setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, typeSpeed);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentRoleIndex]);

  const scrollToContact = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen relative overflow-hidden flex items-center">
      {/* Subtle Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50/50 to-indigo-100/50 dark:from-gray-900 dark:via-blue-900/10 dark:to-indigo-900/20">
        {/* Subtle animated elements */}
        <div className="absolute top-20 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/10 to-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 -left-40 w-96 h-96 bg-gradient-to-tr from-indigo-400/8 to-cyan-400/8 rounded-full blur-3xl animate-subtle-float"></div>
        
        {/* Minimal floating particles */}
        <div className="absolute inset-0">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-blue-400/20 rounded-full animate-subtle-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 8}s`,
                animationDuration: `${8 + Math.random() * 4}s`
              }}
            ></div>
          ))}
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Text Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold">
                <span className="block text-gray-900 dark:text-white">Hi, I'm</span>
                <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                  {personalInfo.name.split(' ').slice(1).join(' ')}
                </span>
              </h1>
              
              <div className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 h-8">
                <span className="inline-block border-r-2 border-blue-600 pr-1 animate-subtle-blink">
                  {displayText}
                </span>
              </div>
              
              <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl leading-relaxed">
                {personalInfo.subtitle}
              </p>
            </div>

            {/* Professional CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
                onClick={() => window.open(personalInfo.resumeUrl, '_blank')}
              >
                <Download className="mr-2 h-5 w-5 group-hover:translate-y-0.5 transition-transform duration-200" />
                Download Resume
              </Button>
              
              <Button
                variant="outline"
                size="lg"
                className="px-8 py-3 rounded-lg border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-300"
                onClick={scrollToContact}
              >
                <Mail className="mr-2 h-5 w-5" />
                Contact Me
              </Button>
            </div>

            {/* Subtle Social Links */}
            <div className="flex space-x-4">
              <a
                href={personalInfo.contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-lg shadow-md hover:shadow-lg transition-all duration-300 group"
              >
                <Github className="h-6 w-6 text-gray-700 dark:text-gray-300 group-hover:text-blue-600 transition-colors duration-200" />
              </a>
              
              <a
                href={personalInfo.contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-lg shadow-md hover:shadow-lg transition-all duration-300 group"
              >
                <Linkedin className="h-6 w-6 text-gray-700 dark:text-gray-300 group-hover:text-blue-600 transition-colors duration-200" />
              </a>
            </div>
          </div>

          {/* Right Side - Professional Visual Element */}
          <div className="hidden lg:flex justify-center items-center">
            <div className="relative">
              {/* Professional Card */}
              <div className="w-80 h-80 bg-gradient-to-br from-white/90 to-blue-50/90 dark:from-gray-800/90 dark:to-blue-900/90 backdrop-blur-sm rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500">
                <div className="p-8 h-full flex flex-col justify-center items-center space-y-6">
                  <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                    <span className="text-3xl font-bold text-white">RK</span>
                  </div>
                  
                  <div className="text-center space-y-2">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                      {personalInfo.title}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Building Professional Solutions
                    </p>
                  </div>
                  
                  <div className="flex space-x-2">
                    {['AI', 'Web', 'Data'].map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400 rounded-full text-xs font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Subtle Accent Elements */}
              <div className="absolute -top-3 -right-3 w-12 h-12 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-lg shadow-md"></div>
              <div className="absolute -bottom-3 -left-3 w-10 h-10 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-lg shadow-md"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Subtle Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-subtle-bounce">
        <ChevronDown className="h-6 w-6 text-gray-400 dark:text-gray-600" />
      </div>

      {/* Professional animations CSS */}
      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes subtle-float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(1deg); }
        }
        
        @keyframes subtle-blink {
          0%, 70% { opacity: 1; }
          71%, 100% { opacity: 0; }
        }
        
        @keyframes subtle-bounce {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-5px); }
        }
        
        .animate-fade-in { animation: fade-in 0.8s ease-out; }
        .animate-subtle-float { animation: subtle-float 12s ease-in-out infinite; }
        .animate-subtle-blink { animation: subtle-blink 1.5s infinite; }
        .animate-subtle-bounce { animation: subtle-bounce 3s ease-in-out infinite; }
      `}</style>
    </section>
  );
};

export default Hero;