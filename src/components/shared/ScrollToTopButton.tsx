import React from 'react';
import { ChevronUp } from 'lucide-react';

const ScrollToTopButton = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-3 right-3 sm:bottom-4 sm:right-4 lg:bottom-8 lg:right-8 w-10 h-10 sm:w-12 sm:h-12 bg-gray-600 hover:bg-gray-700 text-white rounded-full flex items-center justify-center transition-all duration-300 shadow-lg hover:shadow-xl z-30"
    >
      <ChevronUp className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />
    </button>
  );
};

export default ScrollToTopButton;