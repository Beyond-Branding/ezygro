import React, { useState } from 'react';
import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import TermsOfUseModal from './TermsOfUseModal';

import logo from '../logo.png';

interface FooterProps {
  showCareersContact?: boolean;
}


const Footer: React.FC<FooterProps> = ({ showCareersContact = true }) => {
  const [showCookieModal, setShowCookieModal] = useState(false);

  return (
    <footer className="bg-gray-900 text-gray-400">
      {/* Main Footer Content - Careers and Contact Us Section */}
      {showCareersContact && (
        <div className="" style={{ backgroundColor: '#1e1e1e' }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
              {/* Careers Section */}
              <div className="text-left">
                <h2 className="text-3xl lg:text-4xl font-light text-white mb-4">Careers</h2>
                <p className="mb-8 text-lg text-gray-300">Gain a heritage. Leave a legacy.</p>
                <button className="px-8 py-3 border border-gray-400 text-white hover:bg-white hover:text-black transition-colors duration-300 text-sm font-medium tracking-wide">
                  JOIN US
                </button>
              </div>
              {/* Contact Us Section */}
              <div className="text-left">
                <h2 className="text-3xl lg:text-4xl font-light text-white mb-4">Contact Us</h2>
                <p className="mb-8 text-lg text-gray-300">What can we help you achieve?</p>
                <button className="px-8 py-3 border border-gray-400 text-white hover:bg-white hover:text-black transition-colors duration-300 text-sm font-medium tracking-wide">
                  SPEAK WITH US
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      {/* Bottom Footer - Black Section */}
      <div className="bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Tech Mahindra Logo */}
            <div className="lg:col-span-1 flex items-center" style={{ alignItems: 'flex-start' }}>
              <img src={logo} alt="Tech Mahindra Logo" className="h-24 w-auto rounded mt-0" style={{ marginTop: '-0.75rem' }} />
            </div>
            {/* Our Brand */}
            <div>
              <h3 className="font-semibold text-white mb-6 text-base">Our Brand</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Sustainability</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Corporate Citizenship</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Investor Relations</a></li>
              </ul>
            </div>
            {/* News */}
            <div>
              <h3 className="font-semibold text-white mb-6 text-base">News</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Events</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Alumni</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Sitemap</a></li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white text-sm transition-colors"
                  >
                    Cookie Preferences
                  </a>
                </li>
      {/* Terms of Use Modal */}
      <TermsOfUseModal show={showCookieModal} onClose={() => setShowCookieModal(false)} />
              </ul>
            </div>
            {/* Follow Us */}
            <div>
              <h3 className="font-semibold text-white mb-6 text-base">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Facebook size={20} />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Twitter size={20} />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Linkedin size={20} />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Instagram size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Copyright Section */}
      <div className="bg-black border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col lg:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 lg:mb-0">© 2025 Tech Mahindra Limited</p>
            <div className="flex items-center space-x-6">
              <button
                className="text-gray-400 hover:text-white text-sm transition-colors focus:outline-none"
                onClick={() => setShowCookieModal(true)}
              >
                Terms of Use
              </button>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Cookie</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;