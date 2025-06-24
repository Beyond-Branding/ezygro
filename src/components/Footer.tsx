import React from 'react';
import { ChevronUp, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-gray-400">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-12 lg:pt-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 pb-8 sm:pb-12 lg:pb-16">
          {/* Careers Section */}
          <div className="text-center md:text-left md:border-r border-gray-800 md:pr-6 lg:pr-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">Careers</h2>
            <p className="mb-4 sm:mb-6 text-sm sm:text-base">Gain a heritage. Leave a legacy.</p>
            <a href="#" className="inline-block px-6 py-2 sm:px-8 sm:py-3 border border-gray-600 text-white hover:bg-white hover:text-black transition-colors duration-300 text-sm sm:text-base">
              JOIN US
            </a>
          </div>
          
          {/* Contact Us Section */}
          <div className="text-center md:text-left md:pl-6 lg:pl-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">Contact Us</h2>
            <p className="mb-4 sm:mb-6 text-sm sm:text-base">What can we help you achieve?</p>
            <a href="#" className="inline-block px-6 py-2 sm:px-8 sm:py-3 border border-gray-600 text-white hover:bg-white hover:text-black transition-colors duration-300 text-sm sm:text-base">
              SPEAK WITH US
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-8 sm:py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-8 border-t border-gray-800">
            {/* Logo */}
            <div className="col-span-1 sm:col-span-2 md:col-span-1">
              <div className="h-8 sm:h-10 w-32 sm:w-40 bg-white rounded flex items-center justify-center">
                <span className="text-black font-bold text-sm sm:text-base">Tech Mahindra</span>
              </div>
            </div>
            
            {/* Our Brand */}
            <div>
              <h3 className="font-bold text-white mb-3 sm:mb-4 text-sm sm:text-base">Our Brand</h3>
              <ul className="space-y-1 sm:space-y-2">
                <li><a href="#" className="hover:text-white text-xs sm:text-sm">Sustainability</a></li>
                <li><a href="#" className="hover:text-white text-xs sm:text-sm">Corporate Citizenship</a></li>
                <li><a href="#" className="hover:text-white text-xs sm:text-sm">Investor Relations</a></li>
                <li><a href="#" className="hover:text-white text-xs sm:text-sm">Contact Us</a></li>
              </ul>
            </div>
            
            {/* News */}
            <div>
              <h3 className="font-bold text-white mb-3 sm:mb-4 text-sm sm:text-base">News</h3>
              <ul className="space-y-1 sm:space-y-2">
                <li><a href="#" className="hover:text-white text-xs sm:text-sm">Events</a></li>
                <li><a href="#" className="hover:text-white text-xs sm:text-sm">Careers</a></li>
                <li><a href="#" className="hover:text-white text-xs sm:text-sm">Alumni</a></li>
                <li><a href="#" className="hover:text-white text-xs sm:text-sm">Sitemap</a></li>
                <li><a href="#" className="hover:text-white text-xs sm:text-sm">Cookie Preferences</a></li>
              </ul>
            </div>
            
            {/* Follow Us */}
            <div className="col-span-1 sm:col-span-2 lg:col-span-1">
              <h3 className="font-bold text-white mb-3 sm:mb-4 text-sm sm:text-base">Follow Us</h3>
              <div className="flex space-x-3 sm:space-x-4">
                <a href="#" className="hover:text-white"><Facebook size={18} className="sm:w-5 sm:h-5" /></a>
                <a href="#" className="hover:text-white"><Twitter size={18} className="sm:w-5 sm:h-5" /></a>
                <a href="#" className="hover:text-white"><Linkedin size={18} className="sm:w-5 sm:h-5" /></a>
                <a href="#" className="hover:text-white"><Instagram size={18} className="sm:w-5 sm:h-5" /></a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="bg-black border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 flex flex-col sm:flex-row justify-between items-center text-xs sm:text-sm">
          <p>&copy; {new Date().getFullYear()} Tech Mahindra Limited</p>
          <div className="flex items-center space-x-3 sm:space-x-4 mt-3 sm:mt-0">
            <a href="#" className="hover:text-white">Terms of Use</a>
            <a href="#" className="hover:text-white">Accessibility</a>
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Cookie</a>
            <button onClick={scrollToTop} className="hover:text-white">
              <ChevronUp size={18} className="sm:w-5 sm:h-5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;