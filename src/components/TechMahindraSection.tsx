import React, { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react';

const TechMahindraSection = () => {
  const [textVisible, setTextVisible] = useState(false);
  const [boxTranslateY, setBoxTranslateY] = useState(0);

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

  return (
    <section id="techmahindra" className="relative min-h-screen bg-gray-50 overflow-hidden">
      {/* Background with diagonal video section */}
      <div className="absolute inset-0">
        <div className="absolute right-0 top-0 w-full h-full">
          <div
            className="w-full h-full"
            style={{
              clipPath: window.innerWidth < 768 
                ? 'polygon(0% 85%, 100% 0%, 100% 100%, 0% 100%)'
                : 'polygon(0% 90%, 100% 0%, 100% 100%, 0% 100%)'
            }}
          >
            <div className="absolute inset-0 overflow-hidden">
              <video
                className="w-full h-full object-cover"
                autoPlay
                muted
                loop
                playsInline
              >
                <source src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className="absolute inset-0 bg-gradient-to-br from-red-600/60 via-red-800/40 to-black/70"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 min-h-screen flex items-start py-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-0">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">

            {/* Left Content - Text */}
            <div className="space-y-3 sm:space-y-4 lg:space-y-8 -mt-8 sm:-mt-16 lg:-mt-48 px-2 sm:px-0">
              <div
                className={`transition-all duration-1000 ease-out ${
                  textVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                }`}
              >
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                  <span className="text-gray-900">Scale at Speed</span>
                  <br />
                  <span className="text-red-600">with Tech Mahindra</span>
                </h1>
              </div>

              <div
                className={`transition-all duration-1000 ease-out delay-300 ${
                  textVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                }`}
              >
                <p className="text-sm sm:text-base lg:text-lg xl:text-xl text-gray-700 leading-relaxed max-w-lg">
                  Thriving in the current dynamic landscape demands technological solutions that enable
                  both transformative scale and unparalleled speed.
                </p>
              </div>
            </div>

            {/* Right Content - Video Overlay Content */}
            <div
              className="relative lg:pl-12 mt-16 sm:mt-24 lg:mt-52"
              style={{ transform: `translateY(${boxTranslateY}px)`, transition: 'transform 0.1s linear' }}
            >
              <div className="bg-black px-4 py-8 sm:px-6 sm:py-12 lg:px-16 lg:py-28 text-white">
                <div className="space-y-3 sm:space-y-4 lg:space-y-6">
                  <div>
                    <p className="text-xs sm:text-sm uppercase tracking-wider text-gray-300 mb-1 sm:mb-2">Scale at Speed</p>
                    <h2 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold leading-tight">
                      True Scalability,<br />
                      Agility, and<br />
                      Responsiveness
                    </h2>
                  </div>

                  <button className="group inline-flex items-center px-4 py-2 sm:px-6 sm:py-3 lg:px-8 lg:py-3 border-2 border-white text-white font-medium hover:bg-white hover:text-black transition-all duration-300 text-sm sm:text-base">
                    <span>KNOW MORE</span>
                    <svg
                      className="ml-2 sm:ml-3 w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform duration-300"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </button>
                </div>
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