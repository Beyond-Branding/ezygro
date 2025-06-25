import { useState, useEffect } from 'react';
import VisionPurposeValues from './VisionPurposeValues'; // Make sure to import the new component

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
    <>
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
                {/* Removed the red tint overlay */}
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
              <p className="mt-2 sm:mt-4 lg:mt-6 text-xs sm:text-xs lg:text-sm text-gray-800 leading-relaxed font-400"
                          style={{
                            fontSize: windowWidth < 640 ? '12px' : windowWidth < 1024 ? '14px' : '16px',
                            lineHeight: windowWidth < 640 ? '18px' : windowWidth < 1024 ? '22px' : '26px'
                          }}
                          >
                We are digital changemakers – here to disrupt old ideas, blaze new trails, and help enterprises transform and scale at unparalleled speed.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Part of Mahindra Group section */}
      <section className="bg-white py-8 sm:py-12 md:py-16 lg:py-24 xl:py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 xl:gap-16 items-center">
            {/* Content */}
            <div className="relative">
              <h2 className={`text-xl sm:text-2xl md:text-3xl font-medium text-gray-900 tracking-tight transition-all ease-in-out duration-1000 transform ${scaleAtSpeedVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
                Part of Mahindra Group
              </h2>
              <p className={`mt-4 sm:mt-6 text-sm sm:text-base lg:text-lg text-gray-600 leading-relaxed transition-all ease-in-out duration-1000 delay-200 transform ${promiseTextVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
                We are part of the Mahindra Group, founded in 1945, one of the largest and most admired multinational federation of companies with 260,000 employees in over 100 countries. The Group has a strong foothold in farm equipment, utility vehicles, information technology, and financial services in India and is the world's largest tractor company by volume. It also has a leading presence in renewable energy, agriculture, logistics, hospitality, and real estate. The Mahindra Group has a clear focus on leading ESG globally, enabling rural prosperity and enhancing urban living, with a goal to drive positive change in the lives of communities and stakeholders to enable them to Rise.
              </p>
            </div>

            {/* Image on the right */}
            <div className="w-full h-64 sm:h-80 md:h-96 lg:h-full overflow-hidden rounded-lg">
              <img
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
                alt="Mahindra Group - Modern office building representing innovation and growth"
                className="w-full h-full object-cover transition-transform duration-300 ease-out"
                style={{ transform: `scale(1.05)` }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Vision Purpose Values section */}
      <VisionPurposeValues />
      <div className="bg-black border-t border-gray-800"></div>
    </>
  );
};

export default AboutUs;