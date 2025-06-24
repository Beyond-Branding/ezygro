import React, { useState, useEffect } from 'react';

const RiseSection = () => {
  const [scale, setScale] = useState(1.15);
  const [contentVisible, setContentVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById('rise-section');
      if (section) {
        const rect = section.getBoundingClientRect();
        const viewportHeight = window.innerHeight;

        if (rect.top < viewportHeight * 0.75) {
          setContentVisible(true);
        }

        if (rect.top < viewportHeight && rect.bottom > 0) {
          const scrollProgress = Math.max(0, Math.min(1, rect.top / viewportHeight));
          const scaleAmount = window.innerWidth < 768 ? 0.1 : 0.15;
          const newScale = 1 + (scrollProgress * scaleAmount);
          setScale(newScale);
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="rise-section" className="bg-white py-8 sm:py-12 md:py-16 lg:py-24 xl:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 xl:gap-16 items-center">
          {/* Image */}
          <div className="w-full h-64 sm:h-80 md:h-96 lg:h-full overflow-hidden rounded-lg">
            <img
              src="https://insights.techmahindra.com/styles/text_and_image_desktop/s3/images/adobestock_619698910.jpeg.webp"
              alt="Misty mountains at sunrise, representing the 'RISE' philosophy"
              className="w-full h-full object-cover transition-transform duration-300 ease-out"
              style={{ transform: `scale(${scale})` }}
            />
          </div>

          {/* Content */}
          <div className="relative">
            <h2 className={`text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 tracking-tight transition-all ease-in-out duration-1000 transform ${contentVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
              RISE
            </h2>
            <p className={`mt-4 sm:mt-6 text-sm sm:text-base lg:text-lg text-gray-600 leading-relaxed transition-all ease-in-out duration-1000 delay-200 transform ${contentVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
              At Tech Mahindra, 'Rise' is our core brand pillar that goes beyond business. It underscores our entire organization's culture and how we inspire our employees, stakeholders, and communities to uphold the three core tenets of this philosophy – Rise for an equal world, to be future-ready, and to create value.
            </p>
            <div className={`mt-6 sm:mt-8 transition-all ease-in-out duration-1000 delay-400 transform ${contentVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
              <a
                href="#"
                className="text-sm sm:text-base font-semibold text-red-600 hover:text-red-700 group"
              >
                LEARN MORE
                <span aria-hidden="true" className="inline-block transition-transform group-hover:translate-x-1 ml-1">
                  →
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RiseSection;