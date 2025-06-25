import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, Menu, X } from 'lucide-react';
import TechMahindraLogo from '../logo.png'; // Adjust path as needed
import '@fontsource/poppins/400.css';
import '@fontsource/poppins/500.css';
import '@fontsource/poppins/600.css';

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  
  const navItems = [
    { label: 'ABOUT US', path: '/about' },
    { label: 'CAPABILITIES', path: '/capabilities' },
    { label: 'INDUSTRIES', path: '/industries' },
    { label: 'INSIGHTS', path: '/insights' },
    { label: 'CAREERS', path: '/careers' },
    { label: 'CONTACT US', path: '/contact' }
  ];

  const handleNavClick = () => {
    setIsMobileMenuOpen(false);
    // Scroll to top when navigating
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="bg-white sticky top-0 z-50 shadow-sm font-poppins">
      <div className="max-w-[1280px] mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0" onClick={handleNavClick}>
            <img src={TechMahindraLogo} alt="Tech Mahindra Logo" className="h-10 md:h-12" />
          </Link>

          {/* Desktop Nav */}                             
          <nav className="hidden lg:flex flex-1 justify-center space-x-10">
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.path}
                onClick={handleNavClick}
                className={`text-sm font-semibold transition ${
                  location.pathname === item.path 
                    ? 'text-red-600 border-b-2 border-red-600 pb-1' 
                    : 'text-black hover:text-red-600'
                }`}
              >
                {item.label}
              </Link>
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
                <Link
                  key={item.label}
                  to={item.path}
                  onClick={handleNavClick}
                  className={`block text-sm font-semibold py-2 w-full text-left transition ${
                    location.pathname === item.path 
                      ? 'text-red-600' 
                      : 'text-gray-800 hover:text-red-600'
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