import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const TestimonialSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [titleVisible, setTitleVisible] = useState(false);
  const [windowWidth, setWindowWidth] = useState(0);

  const testimonials = [
    { quote: "Working with them was a game-changer. Their expertise and dedication are unparalleled.", author: 'Jane Doe', role: 'CEO, Innovate Inc.', image: 'https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
    { quote: "The results exceeded our expectations. We saw a 200% increase in engagement within months.", author: 'John Smith', role: 'Marketing Director, Growth Co.', image: 'https://images.pexels.com/photos/837358/pexels-photo-837358.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
    { quote: "A truly collaborative partner. They listened to our needs and delivered a flawless product.", author: 'Emily White', role: 'CTO, Tech Solutions', image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
    { quote: "Their platform streamlined our entire workflow, saving us countless hours and resources.", author: 'Michael Brown', role: 'COO, Efficiency Ops', image: 'https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
    { quote: "Professional, responsive, and incredibly talented. I highly recommend their services.", author: 'Sarah Green', role: 'Founder, Creative Minds', image: 'https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
    { quote: "They have a deep understanding of the market and provided invaluable strategic insights.", author: 'David Chen', role: 'Lead Strategist, Visionary Ltd.', image: 'https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
  ];

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    handleResize(); 
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById('testimonial-section');
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
  
  const prev = () => {
    setCurrentSlide(current => (current === 0 ? testimonials.length - 1 : current - 1));
  };

  const next = () => {
    setCurrentSlide(current => (current === testimonials.length - 1 ? 0 : current + 1));
  };

  const progress = ((currentSlide + 1) / testimonials.length) * 100;

  return (
    <section id="testimonial-section" className="bg-black text-white py-12 sm:py-16 lg:py-20 xl:py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 sm:mb-10 lg:mb-12 gap-4 sm:gap-0">
          <h2 className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold transition-all duration-1000 ease-out transform ${titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            What Our Clients Say
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

        <div className="relative h-[22rem] sm:h-80 lg:h-96">
          {testimonials.map((item, index) => {
            const offset = (index - currentSlide + testimonials.length) % testimonials.length;
            let displayIndex = (offset < 3) ? offset : -1;

            let transform, width, zIndex, opacity;

            if (windowWidth < 640) { 
              transform = displayIndex === 0 ? 'translateX(0%) scale(1)' : 'translateX(-100%) scale(0.8)';
              width = '100%';
              zIndex = displayIndex === 0 ? 30 : 0;
              opacity = displayIndex === 0 ? 1 : 0;
            } else if (windowWidth < 1024) { 
              if (displayIndex === 0) { transform = 'translateX(0%) scale(1)'; width = '60%'; zIndex = 30; } 
              else if (displayIndex === 1) { transform = 'translateX(110%) scale(0.9)'; width = '50%'; zIndex = 20; } 
              else { transform = 'translateX(-100%) scale(0.8)'; width = '50%'; zIndex = 0; }
              opacity = displayIndex < 2 ? 1 : 0;
            } else { 
              if (displayIndex === 0) { transform = 'translateX(0%) scale(1)'; width = '50%'; zIndex = 30; } 
              else if (displayIndex === 1) { transform = 'translateX(110%) scale(0.9)'; width = '40%'; zIndex = 20; } 
              else if (displayIndex === 2) { transform = 'translateX(220%) scale(0.8)'; width = '30%'; zIndex = 10; } 
              else { transform = 'translateX(-100%) scale(0.8)'; width = '40%'; zIndex = 0; }
              opacity = displayIndex < 3 ? 1 : 0;
            }

            return (
              <div key={index}
                className="group absolute h-full transition-all duration-500 ease-in-out p-6 sm:p-8 lg:p-10 flex flex-col justify-between"
                style={{ width, zIndex, opacity, transform }}
              >
                <img
                  src={item.image}
                  alt={item.author}
                  className="absolute inset-0 w-full h-full object-cover filter brightness-50 group-hover:brightness-75 transition-all duration-500 ease-in-out rounded-lg"
                />
                <div className="relative z-10">
                  <p className="text-lg sm:text-xl lg:text-2xl font-medium text-white italic">"{item.quote}"</p>
                </div>
                <div className="relative z-10 text-right">
                  <p className="text-md sm:text-lg font-bold text-white">{item.author}</p>
                  <p className="text-sm sm:text-base text-gray-300">{item.role}</p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-8 sm:mt-12 lg:mt-16">
          <div className="w-full bg-gray-700 h-0.5">
            <div className="bg-purple-900 h-0.5" style={{ width: `${progress}%`, transition: 'width 0.5s ease-in-out' }}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;