import React from 'react';
import { Heart, Github, Linkedin, Mail, ArrowUp } from 'lucide-react';
import { Button } from './ui/button';
import { personalInfo } from '../mockData';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' }
  ];

  const socialLinks = [
    {
      name: 'GitHub',
      icon: Github,
      href: personalInfo.contact.github,
      color: 'hover:text-gray-600 dark:hover:text-gray-400'
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      href: personalInfo.contact.linkedin,
      color: 'hover:text-blue-600 dark:hover:text-blue-400'
    },
    {
      name: 'Email',
      icon: Mail,
      href: `mailto:${personalInfo.contact.email}`,
      color: 'hover:text-red-600 dark:hover:text-red-400'
    }
  ];

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 dark:bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12 grid md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">RK</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">{personalInfo.name}</h3>
                <p className="text-gray-400 text-sm">{personalInfo.title}</p>
              </div>
            </div>
            
            <p className="text-gray-400 max-w-md leading-relaxed">
              Passionate about creating innovative solutions that make a difference. 
              Let's build something amazing together.
            </p>
            
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-2 bg-gray-800 rounded-lg ${social.color} transition-all duration-300 transform hover:scale-110 hover:shadow-lg`}
                  aria-label={social.name}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-400 hover:text-white transition-colors duration-200 text-left"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contact</h4>
            <div className="space-y-2 text-gray-400">
              <p className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span className="text-sm">{personalInfo.contact.email}</span>
              </p>
              <p>
                <span className="text-sm">{personalInfo.contact.phone}</span>
              </p>
              <p className="text-sm">
                Available for freelance projects and full-time opportunities
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-4 text-sm text-gray-400">
              <span>© {currentYear} {personalInfo.name}. All rights reserved.</span>
              <span className="hidden md:inline">•</span>
              <span className="flex items-center">
                Built with <Heart className="h-4 w-4 text-red-500 mx-1 animate-pulse" /> using React & Tailwind
              </span>
            </div>

            {/* Back to Top Button */}
            <Button
              variant="outline"
              size="sm"
              onClick={scrollToTop}
              className="bg-gray-800 border-gray-700 text-gray-300 hover:bg-gray-700 hover:text-white transition-all duration-300 transform hover:scale-105"
            >
              <ArrowUp className="h-4 w-4 mr-2" />
              Back to Top
            </Button>
          </div>
        </div>

        {/* Tech Stack Credits */}
        <div className="border-t border-gray-800 py-4">
          <div className="text-center">
            <p className="text-xs text-gray-500">
              Powered by React • Tailwind CSS • shadcn/ui • Supabase
            </p>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-0 w-40 h-40 bg-blue-600/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-40 h-40 bg-purple-600/5 rounded-full blur-3xl"></div>
      </div>
    </footer>
  );
};

export default Footer;