import React, { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react';

const TechMahindraSection = () => {
  const [textVisible, setTextVisible] = useState(false);
  const [boxTranslateY, setBoxTranslateY] = useState(0);
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

  useEffect(() => {
    const handleScroll = () => {
      const sectionElement = document.getElementById('techmahindra');
      if (!sectionElement) return;
      const viewportHeight = window.innerHeight;
      const startScrollY = sectionElement.offsetTop - viewportHeight * 0.8;
      const endScrollY = sectionElement.offsetTop + sectionElement.offsetHeight - viewportHeight * 0.2;
      const currentScrollY = window.scrollY;
      const maxUpwardTranslate = window.innerWidth < 768 ? -100 : -200;
      if (currentScrollY > startScrollY && currentScrollY < endScrollY) {
        const scrollProgress = (currentScrollY - startScrollY) / (endScrollY - startScrollY);
        setBoxTranslateY(scrollProgress * maxUpwardTranslate);
      } else if (currentScrollY <= startScrollY) {
        setBoxTranslateY(0);
      } else if (currentScrollY >= endScrollY) {
        setBoxTranslateY(maxUpwardTranslate);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Responsive font sizes and line heights (desktop: original, mobile: like Capabilities)
  const headingFontSize = windowWidth < 640 ? '28px' : windowWidth < 1024 ? '48px' : '66px';
  const headingLineHeight = windowWidth < 640 ? '36px' : windowWidth < 1024 ? '56px' : '90px';
  const paraFontSize = windowWidth < 640 ? '14px' : windowWidth < 1024 ? '16px' : '18px';
  const paraLineHeight = windowWidth < 640 ? '20px' : windowWidth < 1024 ? '24px' : '28px'; // desktop: 28px
  const overlayHeadingFontSize = windowWidth < 640 ? '18px' : windowWidth < 1024 ? '28px' : '36px';
  const overlayHeadingLineHeight = windowWidth < 640 ? '24px' : windowWidth < 1024 ? '36px' : '44px';

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
        <div className="absolute left-0 right-0 top-0 z-20 w-full max-w-7xl mx-auto px-4 sm:px-6 pt-6 sm:pt-10 flex flex-col items-start"
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
      <div className={`relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${windowWidth < 1024 ? 'hidden' : 'block'}`} style={{paddingTop: windowWidth >= 1024 ? '6rem' : undefined}}>
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

      {/* Content Container (only right card in grid now) */}
      <div className="relative z-10 min-h-screen max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 pt-40 sm:pt-48 pb-8 sm:pb-16 flex flex-col justify-start items-center">
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-8 lg:gap-12 items-start">
          <div className="hidden lg:block" /> {/* Empty left for grid alignment */}
          {/* Right Content - Video Overlay Content */}
          <div
            className={`relative ${windowWidth >= 1024 ? 'mt-52 pl-12' : 'mt-8 sm:mt-16 w-full max-w-xs sm:max-w-md lg:max-w-none mx-auto'}`}
            style={{ transform: `translateY(${boxTranslateY}px)`, transition: 'transform 0.1s linear' }}
          >
            <div className={`bg-black text-white rounded-lg shadow-lg w-full ${windowWidth >= 1024 ? 'px-16 py-28' : 'px-4 py-8 sm:px-6 sm:py-12'}`}>
              <div className="space-y-2 sm:space-y-4 lg:space-y-6">
                <div>
                  <p className="text-xs sm:text-sm uppercase tracking-wider text-gray-300 mb-1 sm:mb-2 font-semibold">
                    Scale at Speed
                  </p>
                  <h2 className="font-bold leading-tight"
                    style={{ fontSize: windowWidth >= 1024 ? '36px' : overlayHeadingFontSize, lineHeight: overlayHeadingLineHeight, fontWeight: 700 }}>
                    True Scalability,<br />
                    Agility, and<br />
                    Responsiveness
                  </h2>
                </div>
                <button className="group inline-flex items-center px-4 py-2 sm:px-6 sm:py-3 lg:px-8 lg:py-3 border-2 border-white text-white font-medium hover:bg-white hover:text-black transition-all duration-300 text-xs sm:text-base rounded-md">
                  <span>KNOW MORE</span>
                  <svg
                    className="ml-2 sm:ml-3 w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform duration-300"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </div>
            </div>
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