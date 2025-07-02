import React, { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react';

const EzygroHeroSection = () => {
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

  const headingFontSize = windowWidth < 640 ? '28px' : windowWidth < 1024 ? '48px' : '66px';
  const paraFontSize = windowWidth < 640 ? '14px' : windowWidth < 1024 ? '16px' : '18px';
  const paraLineHeight = windowWidth < 640 ? '20px' : windowWidth < 1024 ? '24px' : '28px';

  return (
    <section
      id="ezygro"
      className="relative min-h-[130vh] bg-gray-50 overflow-hidden pt-32 pb-20"
    >
      <div className="absolute inset-0">
        <div className="absolute right-0 top-0 w-full h-full">
          <div
            className="w-full h-full bg-transparent"
            style={{
              clipPath: windowWidth < 768
                ? 'polygon(-375% 75%, 100% 20%, 100% 100%, 0% 100%)' 
                : 'polygon(-10% 90%, 130% 0%, 100% 100%, 0% 100%)'
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
                  src="https://videos.pexels.com/video-files/3209828/3209828-hd_1920_1080_25fps.mp4"
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
              <div className="absolute inset-0 bg-gradient-to-br from-[#4B1D92]/60 via-[#4B1D92]/40 to-black/70"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Text Container */}
      {windowWidth < 1024 && (
        <div 
          className="absolute left-0 right-0 z-20 w-full max-w-7xl mx-auto px-4 sm:px-6 flex flex-col items-start"
          style={{ top: '0rem', pointerEvents: 'none' }}
        >
          {/* Mobile text content... */}
          <div className="space-y-2 sm:space-y-4 text-left w-full max-w-full sm:max-w-lg">
            <div
              className={`transition-all duration-1000 ease-out ${
                textVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              }`}
              style={{ pointerEvents: 'auto' }}
            >
              <h1 className="font-bold text-gray-900"
                style={{ fontSize: headingFontSize, lineHeight: 1.1, fontWeight: 600 }}>
                <span className="text-gray-900 block">Grow with Confidence</span>
                <span className="text-[#4B1D92] block mt-0.5">with EZYGRO</span>
              </h1>
            </div>
            <div
              className={`transition-all duration-1000 ease-out delay-300 ${
                textVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              }`}
              style={{ pointerEvents: 'auto' }}
            >
              <p className="text-gray-700 leading-snug mt-1 sm:mt-2 font-400 text-left"
                style={{ fontSize: paraFontSize, lineHeight: paraLineHeight, fontWeight: 400 }}
              >
                In today’s fast-paced business environment, success requires financial clarity and compliance you can count on. EZYGRO empowers you with smart solutions that drive sustainable growth, strategic decision-making, and operational excellence—all at the speed your business demands.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Desktop Text Container */}
      <div 
        className={`relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${windowWidth < 1024 ? 'hidden' : 'block'}`} 
        style={{
          paddingTop: '3rem', 
          marginTop: '-8rem' 
        }}
      >
        <div className="space-y-4 lg:space-y-8 text-left w-full max-w-2xl">
          <div
            className={`transition-all duration-1000 ease-out ${
              textVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}
          >
            <h1 className="font-bold text-gray-900"
              style={{ fontSize: 50, lineHeight: 1.1, fontWeight: 600 }}>
                <span className="text-gray-900 block">Grow with Confidence</span>
                <span className="text-[#4B1D92] block mt-0.5">with EZYGRO</span>
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
                In today’s fast-paced business environment, success requires financial clarity and compliance you can count on. EZYGRO empowers you with smart solutions that drive sustainable growth, strategic decision-making, and operational excellence—all at the speed your business demands.
              </p>
            </div>
        </div>
      </div>
    </section>
  );
};

export default EzygroHeroSection;