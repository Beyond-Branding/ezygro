import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react'; // Added ChevronDown for mobile dropdown indicator
import TechMahindraLogo from '../logo.png';
import '@fontsource/poppins/400.css';
import '@fontsource/poppins/500.css';
import '@fontsource/poppins/600.css';

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openMobileSubMenu, setOpenMobileSubMenu] = useState<string | null>(null);
  const location = useLocation();

  // Defined sub-items for the dropdown
  const capabilitiesItems = [
    { label: 'Financial & Accounting', path: '/financial-accounting' },
    { label: 'Income Tax', path: '/income-tax' },
    { label: 'Virtual CFO', path: '/virtual-cfo' },
    { label: 'Innovative Dashboards', path: '/innovative-dashboards' },
    { label: 'Loans & Insurance', path: '/loans-insurance' },
    { label: 'Secretarial Compliances', path: '/secretarial-compliances' },
  ];

  // Updated navItems to include the sub-menu structure
  const navItems = [
    { label: 'HOME', path: '/' },
    { label: 'ABOUT US', path: '/about' },
    {
      label: 'SERVICES',
      path: '/capabilities', // Main link for the capabilities overview page
      subItems: capabilitiesItems,
    },
    { label: 'CAREERS', path: '/careers' },
    { label: 'CONTACT US', path: '/contact' },
  ];

  const handleNavClick = () => {
    setIsMobileMenuOpen(false);
    setOpenMobileSubMenu(null); // Reset mobile submenu on any main navigation
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  
  const handleMobileSubMenuToggle = (label: string) => {
    setOpenMobileSubMenu(openMobileSubMenu === label ? null : label);
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
              <div key={item.label} className="relative group">
                <Link
                  to={item.path}
                  onClick={handleNavClick}
                  className={`text-sm font-semibold transition-colors duration-200 pb-1 flex items-center ${
                    location.pathname === item.path || (item.subItems && location.pathname.startsWith(item.path))
                      ? 'border-b-2 text-[#4B1D92] border-[#4B1D92]'
                      : 'text-black hover:text-[#4B1D92]'
                  }`}
                >
                  {item.label}
                  {item.subItems && <ChevronDown className="w-4 h-4 ml-1" />}
                </Link>
                {/* Desktop Dropdown Menu */}
                {item.subItems && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-64 bg-white rounded-lg shadow-lg p-2 hidden group-hover:block transition-all duration-300">
                    <div className="space-y-1">
                      {item.subItems.map((subItem) => (
                        <Link
                          key={subItem.label}
                          to={subItem.path}
                          onClick={handleNavClick}
                          className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-[#4B1D92] rounded-md"
                        >
                          {subItem.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
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
                <div key={item.label}>
                  {item.subItems ? (
                    <>
                      <button
                        onClick={() => handleMobileSubMenuToggle(item.label)}
                        className={`flex items-center justify-between w-full text-left text-sm font-semibold py-2 transition-colors duration-200 ${
                          location.pathname.startsWith(item.path)
                            ? 'text-[#4B1D92]'
                            : 'text-[#333] hover:text-[#4B1D92]'
                        }`}
                      >
                        <span>{item.label}</span>
                        <ChevronDown className={`w-5 h-5 transition-transform ${openMobileSubMenu === item.label ? 'rotate-180' : ''}`} />
                      </button>
                      {openMobileSubMenu === item.label && (
                        <div className="pl-4 mt-2 space-y-2 border-l-2 border-gray-200 ml-2">
                          {item.subItems.map((subItem) => (
                            <Link
                              key={subItem.label}
                              to={subItem.path}
                              onClick={handleNavClick}
                              className="block text-sm font-semibold text-[#333] hover:text-[#4B1D92] py-1"
                            >
                              {subItem.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <Link
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
                  )}
                </div>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;