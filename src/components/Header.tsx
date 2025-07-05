import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import TechMahindraLogo from '../logo.png'; 
import '@fontsource/poppins/400.css';
import '@fontsource/poppins/500.css';
import '@fontsource/poppins/600.css';

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { label: 'HOME', path: '/' },
    { label: 'ABOUT US', path: '/about' },
    { label: 'CAPABILITIES', path: '/capabilities' },
    { label: 'CAREERS', path: '/careers' },
    { label: 'CONTACT US', path: '/contact' }
  ];

  const handleNavClick = () => {
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="bg-white sticky top-0 z-50 shadow-sm font-poppins">
      <div className="max-w-[1280px] mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0 flex items-center h-full" onClick={handleNavClick}>
            <img
              src={TechMahindraLogo}
              alt="EZYGRO Logo"
              className="h-14 md:h-16 object-contain"
              style={{ maxHeight: '100%', maxWidth: '170px' }}
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex flex-1 justify-center space-x-10">
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.path}
                onClick={handleNavClick}
                className={`text-sm font-semibold transition-colors duration-200 pb-1 ${
                  location.pathname === item.path
                    ? 'border-b-2 text-[#4B1D92] border-[#4B1D92]'
                    : 'text-black hover:text-[#4B1D92]'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Mobile Toggle */}
          <div className="flex items-center">
            <button
              className="lg:hidden p-2 text-gray-600 hover:text-[#4B1D92]"
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
                <Link
                  key={item.label}
                  to={item.path}
                  onClick={handleNavClick}
                  className={`block text-sm font-semibold py-2 w-full text-left transition-colors duration-200 ${
                    location.pathname === item.path
                      ? 'text-[#4B1D92]'
                      : 'text-[#333] hover:text-[#4B1D92]'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;