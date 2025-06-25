import { useState, useEffect } from 'react';

const AboutUs = () => {
  const [scaleAtSpeedVisible, setScaleAtSpeedVisible] = useState(false);
  const [promiseTextVisible, setPromiseTextVisible] = useState(false);
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1024);

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Trigger text animations on component mount
  useEffect(() => {
    const scaleTimer = setTimeout(() => {
      setScaleAtSpeedVisible(true);
    }, 200);

    const promiseTimer = setTimeout(() => {
      setPromiseTextVisible(true);
    }, 400);

    return () => {
      clearTimeout(scaleTimer);
      clearTimeout(promiseTimer);
    };
  }, []);

  return (
    <section className="relative min-h-screen bg-white overflow-hidden">
      {/* Background with diagonal section for image */}
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
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
                alt="About Us"
                className="w-full h-full object-cover opacity-70"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-red-600/40 to-red-800/60"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-screen max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-16">
        {/* Left content: About Us */}
        <div className="absolute top-4 sm:top-8 lg:top-16 left-4 sm:left-6 lg:left-0 w-full max-w-xs sm:max-w-lg lg:max-w-2xl lg:w-3/5 pr-4 sm:pr-6 lg:pr-6">
          <h1
            className={`text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 transition-all duration-700 ease-out ${
              scaleAtSpeedVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
            }`}
            style={{ 
              fontSize: windowWidth < 640 ? '28px' : windowWidth < 1024 ? '48px' : '66px', 
              lineHeight: windowWidth < 640 ? '36px' : windowWidth < 1024 ? '56px' : '90px' 
            }}
          >
            About Us
          </h1>
          
          <div
            className={`transition-all duration-700 ease-out ${
              promiseTextVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
            }`}
          >
            <p className="mt-2 sm:mt-4 lg:mt-6 text-xs sm:text-sm lg:text-base text-gray-800 leading-relaxed font-400"
                        style={{ 
                          fontSize: windowWidth < 640 ? '14px' : windowWidth < 1024 ? '16px' : '18px', 
                          lineHeight: windowWidth < 640 ? '20px' : windowWidth < 1024 ? '24px' : '30px' 
                        }}
                        >
              We are digital changemakers – here to disrupt old ideas, blaze new trails, and help enterprises transform and scale at unparalleled speed.
            </p>
          </div>
        </div>


      </div>
    </section>
  );
};

export default AboutUs;