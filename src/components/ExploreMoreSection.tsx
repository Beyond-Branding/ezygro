import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const ExploreMoreSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [titleVisible, setTitleVisible] = useState(false);

  const exploreItems = [
    { title: 'Why TechM', image: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', link: '#' },
    { title: 'Recognition', image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', link: '#' },
    { title: 'Our Brand', image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', link: '#' },
    { title: 'Innovation', image: 'https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', link: '#' },
    { title: 'Careers', image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', link: '#' },
    { title: 'Investors', image: 'https://images.pexels.com/photos/7567443/pexels-photo-7567443.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', link: '#'},
    { title: 'Partners', image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', link: '#'},
    { title: 'Media', image: 'https://images.pexels.com/photos/261662/pexels-photo-261662.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', link: '#'},
  ];

  const prev = () => {
    setCurrentSlide(current => (current === 0 ? exploreItems.length - 1 : current - 1));
  };

  const next = () => {
    setCurrentSlide(current => (current === exploreItems.length - 1 ? 0 : current + 1));
  };
  
  const progress = ((currentSlide + 1) / exploreItems.length) * 100;
  
  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById('explore-more-section');
      if (section) {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.8) {
          setTitleVisible(true);
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="explore-more-section" className="bg-black text-white py-12 sm:py-16 lg:py-20 xl:py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 sm:mb-10 lg:mb-12 gap-4 sm:gap-0">
          <h2 className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold transition-all duration-1000 ease-out transform ${titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            Explore More
          </h2>
          <div className="flex items-center gap-3 sm:gap-4">
            <button 
              onClick={prev} 
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-gray-600 flex items-center justify-center hover:border-white transition-colors"
            >
              <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
            <button 
              onClick={next} 
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-gray-600 flex items-center justify-center hover:border-white transition-colors"
            >
              <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
          </div>
        </div>

        {/* Carousel */}
        <div className="relative h-64 sm:h-80 lg:h-96">
          {exploreItems.map((item, index) => {
            const offset = (index - currentSlide + exploreItems.length) % exploreItems.length;
            let displayIndex;
            if (offset === 0) {
              displayIndex = 0;
            } else if (offset === 1) {
              displayIndex = 1;
            } else if (offset === 2) {
              displayIndex = 2;
            } else {
              displayIndex = -1;
            }

            let transform, width, zIndex, opacity;

            if (window.innerWidth < 640) {
              // Mobile: Show only main item
              if (displayIndex === 0) {
                transform = 'translateX(0%) scale(1)';
                width = '100%';
                zIndex = 30;
                opacity = 1;
              } else {
                transform = 'translateX(-100%) scale(0.8)';
                width = '100%';
                zIndex = 0;
                opacity = 0;
              }
            } else if (window.innerWidth < 1024) {
              // Tablet: Show main + 1 side
              if (displayIndex === 0) {
                transform = 'translateX(0%) scale(1)';
                width = '60%';
                zIndex = 30;
                opacity = 1;
              } else if (displayIndex === 1) {
                transform = 'translateX(110%) scale(0.9)';
                width = '50%';
                zIndex = 20;
                opacity = 1;
              } else {
                transform = 'translateX(-100%) scale(0.8)';
                width = '50%';
                zIndex = 0;
                opacity = 0;
              }
            } else {
              // Desktop: Show main + 2 sides
              if (displayIndex === 0) {
                transform = 'translateX(0%) scale(1)';
                width = '50%';
                zIndex = 30;
                opacity = 1;
              } else if (displayIndex === 1) {
                transform = 'translateX(110%) scale(0.9)';
                width = '40%';
                zIndex = 20;
                opacity = 1;
              } else if (displayIndex === 2) {
                transform = 'translateX(220%) scale(0.8)';
                width = '30%';
                zIndex = 10;
                opacity = 1;
              } else {
                transform = 'translateX(-100%) scale(0.8)';
                width = '40%';
                zIndex = 0;
                opacity = 0;
              }
            }
             
            return (
              <a href={item.link} key={index} 
                className="group absolute h-full transition-all duration-500 ease-in-out"
                style={{ width, zIndex, opacity, transform }}
              >
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="absolute inset-0 w-full h-full object-cover filter grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500 ease-in-out rounded-lg"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-20 transition-all duration-300 rounded-lg"></div>
                <div className="absolute bottom-0 left-0 p-3 sm:p-4 lg:p-6">
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white">{item.title}</h3>
                </div>
              </a>
            );
          })}
        </div>

        {/* Progress Bar */}
        <div className="mt-8 sm:mt-12 lg:mt-16">
          <div className="w-full bg-gray-700 h-0.5">
            <div className="bg-purple-900 h-0.5" style={{ width: `${progress}%`, transition: 'width 0.5s ease-in-out' }}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExploreMoreSection;