import React, { useState, useEffect } from 'react';

const SustainabilitySection = () => {
  const [contentVisible, setContentVisible] = useState(false);
  const [translateY, setTranslateY] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setContentVisible(true);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sectionElement = document.getElementById('sustainability');
      if (!sectionElement) return;

      const rect = sectionElement.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      if (rect.top < viewportHeight && rect.bottom > 0) {
        const scrollProgress = (viewportHeight - rect.top) / (viewportHeight + rect.height);
        const maxMove = window.innerWidth < 768 ? 30 : 60;
        const newTranslateY = scrollProgress * maxMove;
        setTranslateY(Math.min(maxMove, Math.max(0, newTranslateY)));
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section id="sustainability" className="relative min-h-screen bg-gray-50 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute right-0 top-0 w-full h-full">
          <div
            className="w-full h-full"
            style={{
              clipPath: window.innerWidth < 768 
                ? 'polygon(5% 85%, 100% 0%, 100% 100%, 0% 100%)'
                : 'polygon(10% 90%, 100% 0%, 100% 100%, 0% 100%)'
            }}
          >
            <img
              src="https://insights.techmahindra.com/styles/de2e/s3/images/sustainabilityhompage.jpg"
              alt="Sustainability - green leaves"
              className="w-full h-full object-cover"
              style={{ objectPosition: '100% 65%' }}
            />
            <div className="absolute inset-0 bg-black/10"></div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-screen flex items-center py-8 sm:py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-16 items-center">

            <div
              className="relative"
              style={{
                transform: `translateY(${translateY}px)`,
                transition: 'transform 0.2s linear'
              }}
            >
              <div className="bg-black px-4 py-6 sm:px-6 sm:py-8 lg:px-12 lg:py-16 text-white max-w-sm sm:max-w-md">
                <div
                  className={`space-y-3 sm:space-y-4 lg:space-y-5 transition-all duration-1000 ease-out ${
                    contentVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                  }`}
                >
                  <div>
                    <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold leading-tight mb-3 sm:mb-4">
                      Towards a<br />
                      Sustainable Future
                    </h1>
                    
                    <p className="text-sm sm:text-base lg:text-lg text-gray-300 leading-relaxed mb-4 sm:mb-6">
                      Learn how we maintain a balance between sustainability and overall business profitability.
                    </p>
                  </div>

                  <button className="group inline-flex items-center px-3 py-2 sm:px-4 sm:py-2.5 lg:px-5 lg:py-2.5 border-2 border-white text-white font-medium hover:bg-white hover:text-black transition-all duration-300 text-xs sm:text-sm">
                    <span className="tracking-wider">OUR SUSTAINABILITY EFFORTS</span>
                    <svg
                      className="ml-2 sm:ml-2.5 w-3 h-3 sm:w-3.5 sm:h-3.5 group-hover:translate-x-1 transition-transform duration-300"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            <div className="hidden lg:block"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SustainabilitySection;