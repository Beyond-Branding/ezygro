import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import TermsOfUseModal from './TermsOfUseModal';

import logo from '../logo.png';

interface FooterProps {
  showCareersContact?: boolean;
}


const Footer: React.FC<FooterProps> = ({ showCareersContact = true }) => {
  const [showCookieModal, setShowCookieModal] = useState(false);
  const navigate = useNavigate();

  return (
    <footer className="bg-gray-900 text-gray-400">
      {showCareersContact && (
        <div className="" style={{ backgroundColor: '#1e1e1e' }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
              {/* Careers Section */}
              <div className="text-left">
                <h2 className="text-3xl lg:text-4xl font-light text-white mb-4">Careers</h2>
                <p className="mb-8 text-lg text-gray-300">Gain a heritage. Leave a legacy.</p>
                <button
                  className="px-8 py-3 border border-gray-400 text-white hover:bg-white hover:text-black transition-colors duration-300 text-sm font-medium tracking-wide"
                  onClick={() => navigate('/careers')}
                >
                  JOIN US
                </button>
              </div>
              {/* Contact Us Section */}
              <div className="text-left">
                <h2 className="text-3xl lg:text-4xl font-light text-white mb-4">Contact Us</h2>
                <p className="mb-8 text-lg text-gray-300">What can we help you achieve?</p>
                <button
                  className="px-8 py-3 border border-gray-400 text-white hover:bg-white hover:text-black transition-colors duration-300 text-sm font-medium tracking-wide"
                  onClick={() => navigate('/contact')}
                >
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
          <img src={logo} alt="Tech Mahindra Logo" className="h-24 w-auto rounded mt-0" style={{ marginTop: '-0.75rem', filter: 'brightness(0) invert(1)' }} />
        </div>
        {/* Our Brand */}
        <div>
          <h3 className="font-semibold text-white mb-6 text-base">Our Brand</h3>
          <ul className="space-y-3">
            <li>
              <a href="/about" className="text-gray-400 hover:text-white text-sm transition-colors">About Us</a>
            </li>
            <li>
              <a href="/capabilities" className="text-gray-400 hover:text-white text-sm transition-colors">Capabilities</a>
            </li>
            <li>
              <a href="/careers" className="text-gray-400 hover:text-white text-sm transition-colors">Careers</a>
            </li>
            <li>
              <a href="/contact" className="text-gray-400 hover:text-white text-sm transition-colors">Contact Us</a>
            </li>
          </ul>
        </div>
        {/* Our Services */}
        <div>
          <h3 className="font-semibold text-white mb-6 text-base">Our Services</h3>
          <ul className="space-y-3">
            <li>
              <a href="/financial-accounting" className="text-gray-400 hover:text-white text-sm transition-colors">Financial &amp; Accounting</a>
            </li>
            <li>
              <a href="/income-tax" className="text-gray-400 hover:text-white text-sm transition-colors">Income Tax</a>
            </li>
            <li>
              <a href="/virtual-cfo" className="text-gray-400 hover:text-white text-sm transition-colors">Virtual CFO</a>
            </li>
            <li>
              <a href="/innovative-dashboards" className="text-gray-400 hover:text-white text-sm transition-colors">Innovative Dashboards</a>
            </li>
            <li>
              <a href="/loans-insurance" className="text-gray-400 hover:text-white text-sm transition-colors">Loans &amp; Insurance</a>
            </li>
            <li>
              <a href="/secretarial-compliances" className="text-gray-400 hover:text-white text-sm transition-colors">Secretarial Compliances</a>
            </li>
          </ul>
          {/* ...existing code... */}
        </div>
        {/* Terms of Use Modal */}
        <TermsOfUseModal show={showCookieModal} onClose={() => setShowCookieModal(false)} />
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
            <a href="https://www.instagram.com/ezygro/" className="text-gray-400 hover:text-white transition-colors">
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
            <p className="text-gray-400 text-sm mb-4 lg:mb-0">© 2025 EZYGRO Limited</p>
            <div className="flex items-center space-x-6">
              <button
                className="text-gray-400 hover:text-white text-sm transition-colors focus:outline-none"
                onClick={() => setShowCookieModal(true)}
              >
                Terms of Use
              </button>
              <button
                className="text-gray-400 hover:text-white text-sm transition-colors focus:outline-none"
                onClick={() => setShowCookieModal(true)}
              >
                Cookie Preferences
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;