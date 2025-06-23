import React, { useState } from 'react';
import { Search, Menu, X } from 'lucide-react';
import TechMahindraLogo from '../logo.png'; // Adjust path as needed
import '@fontsource/poppins/400.css';
import '@fontsource/poppins/500.css';
import '@fontsource/poppins/600.css';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navItems = ['ABOUT US', 'CAPABILITIES', 'INDUSTRIES', 'INSIGHTS', 'CAREERS', 'CONTACT US'];

  return (
    <header className="bg-white sticky top-0 z-50 shadow-sm font-poppins">
      <div className="max-w-[1280px] mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img src={TechMahindraLogo} alt="Tech Mahindra Logo" className="h-10 md:h-12" />
          </div>

          {/* Desktop Nav */}                             
          <nav className="hidden lg:flex flex-1 justify-center space-x-10">
            {navItems.map((item) => (
              <a
                key={item}
                href="#"
                className="text-sm font-semibold text-black hover:text-red-600 transition"
              >
                {item}
              </a>
            ))}
          </nav>

          {/* Search + Mobile Toggle */}
          <div className="flex items-center space-x-2">
            <button className="p-2 text-gray-600 hover:text-red-600">
              <Search className="h-5 w-5" />
            </button>
            <button
              className="lg:hidden p-2 text-gray-600 hover:text-red-600"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        {isMobileMenuOpen && (
          <div className="lg:hidden border-t border-gray-200">
            <nav className="px-4 py-4 space-y-2">
              {navItems.map((item) => (
                <a
                  key={item}
                  href="#"
                  className="block text-sm font-semibold text-gray-800 hover:text-red-600 py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
