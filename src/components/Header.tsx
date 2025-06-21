import React, { useState } from 'react';
import { Search, Menu, X } from 'lucide-react';
import TechMahindraLogo from 'C:/Users/abin/OneDrive/Desktop/Techmahindra/project/src/logo.png'; // Assuming the image is in the same folder or adjust path

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navItems = ['ABOUT US', 'CAPABILITIES', 'INDUSTRIES', 'INSIGHTS', 'CAREERS', 'CONTACT US'];

  return (
    <header className="bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Increased height of the header's inner div */}
        <div className="flex items-center justify-between h-20"> {/* Changed h-16 to h-20 */}
          {/* Logo */}
          <div className="flex-shrink-0">
            <img 
              src={TechMahindraLogo} 
              alt="Tech Mahindra Logo" 
              className="h-8 md:h-10" // Adjust height as needed for proper display
            />
          </div>

          {/* Desktop Navigation */}
          {/* Increased font size and spacing */}
          <nav className="hidden lg:flex items-center space-x-10"> {/* Changed space-x-8 to space-x-10 */}
            {navItems.map((item) => (
              <a
                key={item}
                href="#"
                className="text-base font-medium text-gray-700 hover:text-red-600 transition-colors duration-200" // Changed text-sm to text-base
              >
                {item}
              </a>
            ))}
          </nav>

          {/* Search and Mobile Menu */}
          <div className="flex items-center space-x-2">
            <button className="p-2 text-gray-600 hover:text-red-600 transition-colors duration-200">
              <Search className="h-5 w-5" />
            </button>
            
            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-gray-600 hover:text-red-600 transition-colors duration-200"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu (font size kept as original, but can be changed if desired) */}
        {isMobileMenuOpen && (
          <div className="lg:hidden border-t border-gray-200">
            <nav className="px-4 py-4 space-y-4">
              {navItems.map((item) => (
                <a
                  key={item}
                  href="#"
                  className="block text-sm font-medium text-gray-700 hover:text-red-600 transition-colors duration-200 py-2"
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