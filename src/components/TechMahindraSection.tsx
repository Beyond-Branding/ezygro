import React, { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react';

const TechMahindraSection = () => {
  const [textVisible, setTextVisible] = useState(false);
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1024);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setTextVisible(true);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  // Responsive font sizes and line heights (desktop: original, mobile: like Capabilities)
  const headingFontSize = windowWidth < 640 ? '28px' : windowWidth < 1024 ? '48px' : '66px';
  const paraFontSize = windowWidth < 640 ? '14px' : windowWidth < 1024 ? '16px' : '18px';
  const paraLineHeight = windowWidth < 640 ? '20px' : windowWidth < 1024 ? '24px' : '28px'; // desktop: 28px

  return (
    <section
      id="techmahindra"
      className="relative min-h-screen bg-gray-50 overflow-hidden"
    >
      {/* Background with diagonal video section */}
      <div className="absolute inset-0">
        <div className="absolute right-0 top-0 w-full h-full">
          <div
            className="w-full h-full bg-transparent"
            style={{
              clipPath: windowWidth < 768
                ? 'polygon(-375% 75%, 100% 20%, 100% 100%, 0% 100%)'
                : 'polygon(-40% 90%, 100% 0%, 100% 100%, 0% 100%)'
            }}
          >
            <div className="absolute inset-0 overflow-hidden">
              <video
                className="w-full h-full object-cover opacity-70"
                autoPlay
                muted
                loop
                playsInline
              >
                <source
                  src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4"
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
              <div className="absolute inset-0 bg-gradient-to-br from-red-600/60 via-red-800/40 to-black/70"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Top Texts absolutely at the top, above diagonal (mobile only) */}
      {windowWidth < 1024 && (
        <div className="absolute left-0 right-0 top-0 z-20 w-full max-w-7xl mx-auto px-4 sm:px-6 pt-2 sm:pt-4 flex flex-col items-start"
          style={{ pointerEvents: 'none' }}>
          <div className="space-y-2 sm:space-y-4 text-left w-full max-w-full sm:max-w-lg">
            <div
              className={`transition-all duration-1000 ease-out ${
                textVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              }`}
              style={{ pointerEvents: 'auto' }}
            >
              <h1 className="font-bold text-gray-900"
                style={{ fontSize: headingFontSize, lineHeight: 1.1, fontWeight: 600 }}>
                <span className="text-gray-900 block">Scale at Speed</span>
                <span className="text-red-600 block mt-0.5">with Tech Mahindra</span>
              </h1>
            </div>
            <div
              className={`transition-all duration-1000 ease-out delay-300 ${
                textVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              }`}
              style={{ pointerEvents: 'auto' }}
            >
              <p className="text-gray-700 leading-snug mt-2 sm:mt-4 font-400 text-left"
                style={{ fontSize: paraFontSize, lineHeight: paraLineHeight, fontWeight: 400 }}
              >
                <span className="block">Thriving in the current dynamic landscape</span>
                <span className="block">demands technological solutions that enable</span>
                <span className="block">both transformative scale and unparalleled speed.</span>
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Top Texts in grid for desktop */}
      <div className={`relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${windowWidth < 1024 ? 'hidden' : 'block'}`} style={{paddingTop: windowWidth >= 1024 ? '2rem' : undefined}}>
        <div className="space-y-4 lg:space-y-8 text-left w-full max-w-2xl">
          <div
            className={`transition-all duration-1000 ease-out ${
              textVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}
          >
            <h1 className="font-bold text-gray-900"
              style={{ fontSize: 50, lineHeight: 1.1, fontWeight: 600 }}>
              <span className="text-gray-900 block">Scale at Speed</span>
              <span className="text-red-600 block mt-0.5">with Tech Mahindra</span>
            </h1>
          </div>
          <div
            className={`transition-all duration-1000 ease-out delay-300 ${
              textVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}
          >
            <p className="text-gray-700 leading-snug mt-4 font-400 text-left"
              style={{ fontSize: paraFontSize, lineHeight: paraLineHeight, fontWeight: 400 }}
            >
              <span className="block">Thriving in the current dynamic landscape</span>
              <span className="block">demands technological solutions that enable</span>
              <span className="block">both transformative scale and unparalleled speed.</span>
            </p>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-2 right-2 sm:bottom-4 sm:right-4 lg:bottom-8 lg:right-8 z-20">
        <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 rounded-full bg-gray-600/80 backdrop-blur-sm flex items-center justify-center">
          <ChevronUp className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 rotate-180 text-white" />
        </div>
      </div>
    </section>
  );
};

export default TechMahindraSection;