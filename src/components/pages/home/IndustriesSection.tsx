import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const IndustriesSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const industries = [
    {
      id: 1,
      title: "Banking & Financial Services",
      icon: (
        <svg className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 text-gray-800 group-hover:text-red-500 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
        </svg>
      ),
      description: "Enabling financial institutions with digital banking solutions and innovative fintech capabilities for the future of finance.",
      link: "/industries/banking-financial-services/",
      backgroundImage: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    },
    {
      id: 2,
      title: "Healthcare & Life Sciences",
      icon: (
        <svg className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 text-gray-800 group-hover:text-red-500 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
      description: "Revolutionizing healthcare delivery through digital health solutions and advanced life sciences technologies.",
      link: "/industries/healthcare-life-sciences/",
      backgroundImage: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    },
    {
      id: 3,
      title: "Hi Tech",
      icon: (
        <svg className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 text-gray-800 group-hover:text-red-500 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
        </svg>
      ),
      description: "Empowering technology companies with cutting-edge solutions for product development and market expansion.",
      link: "/industries/hi-tech/",
      backgroundImage: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    },
    {
      id: 4,
      title: "Communications",
      icon: (
        <svg className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 text-gray-800 group-hover:text-red-500 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
        </svg>
      ),
      description: "Driving 5G transformation and network modernization for telecommunications providers worldwide.",
      link: "/industries/communications/",
      backgroundImage: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    },
    {
      id: 5,
      title: "Energy & Utilities",
      icon: (
        <svg className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 text-gray-800 group-hover:text-red-500 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      description: "Driving digital transformation in energy sector with smart grid solutions and renewable energy technologies.",
      link: "/industries/energy-and-utilities/",
      backgroundImage: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    },
    {
      id: 6,
      title: "Insurance",
      icon: (
        <svg className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 text-gray-800 group-hover:text-red-500 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      description: "Transforming insurance operations with digital solutions for improved customer experience and risk management.",
      link: "/industries/insurance/",
      backgroundImage: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    },
    {
      id: 7,
      title: "Manufacturing",
      icon: (
        <svg className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 text-gray-800 group-hover:text-red-500 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      description: "Enabling smart manufacturing with Industry 4.0 solutions and IoT-driven production optimization.",
      link: "/industries/manufacturing/",
      backgroundImage: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    },
    {
      id: 8,
      title: "Media & Entertainment",
      icon: (
        <svg className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 text-gray-800 group-hover:text-red-500 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
        </svg>
      ),
      description: "Transforming content creation and distribution with cutting-edge media technologies and digital platforms.",
      link: "/industries/media-and-entertainment/",
      backgroundImage: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    }
  ];

  const itemsPerSlide = window.innerWidth < 640 ? 1 : window.innerWidth < 1024 ? 2 : 4;
  const totalSlides = Math.ceil(industries.length / itemsPerSlide);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const getCurrentIndustries = () => {
    const startIndex = currentSlide * itemsPerSlide;
    return industries.slice(startIndex, startIndex + itemsPerSlide);
  };

  const progressPercentage = ((currentSlide + 1) / totalSlides) * 100;

  return (
    <section className="bg-gray-50 py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between mb-8 sm:mb-10 lg:mb-12 gap-4 sm:gap-6 lg:gap-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 lg:gap-8">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
              Industries
            </h2>
            
            <div className="flex items-center gap-3 sm:gap-4">
              <button
                onClick={prevSlide}
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-gray-300 flex items-center justify-center hover:border-red-500 hover:text-red-500 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                aria-label="Previous industries"
                disabled={currentSlide === 0}
              >
                <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>
              <button
                onClick={nextSlide}
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-gray-300 flex items-center justify-center hover:border-red-500 hover:text-red-500 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                aria-label="Next industries"
                disabled={currentSlide === totalSlides - 1}
              >
                <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>
            </div>
          </div>

          <div className="lg:w-1/2">
            <p className="text-sm sm:text-base lg:text-lg text-gray-700 leading-relaxed lg:text-right">
              Our expertise spans 13 industries from banking, insurance,
              telecommunications, media, entertainment, distribution,
              retail, to many more.
            </p>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 min-h-[400px] sm:min-h-[500px] lg:min-h-[600px]">
          {getCurrentIndustries().map((industry) => (
            <div
              key={industry.id}
              className="relative bg-white overflow-hidden cursor-pointer group transform hover:-translate-y-2 transition-all duration-300 border border-gray-200"
              onClick={() => window.open(industry.link, '_blank')}
            >
              {/* Icon Section */}
              <div className="relative z-10 p-6 sm:p-8 lg:p-12 text-center bg-white h-48 sm:h-56 lg:h-72 flex flex-col justify-center">
                <div className="flex justify-center mb-4 sm:mb-6">
                  {industry.icon}
                </div>
                
                <h3 className="text-base sm:text-lg lg:text-xl font-semibold text-gray-900 group-hover:text-red-500 transition-colors duration-300 leading-tight">
                  {industry.title}
                </h3>
              </div>

              {/* Background Image Section */}
              <div
                className="h-48 sm:h-56 lg:h-72 bg-cover bg-center bg-no-repeat relative filter grayscale group-hover:grayscale-0 transition-all duration-500"
                style={{
                  backgroundImage: `url(${industry.backgroundImage})`,
                }}
              >
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-500"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Progress Bar */}
        <div className="mt-6 sm:mt-8">
          <div className="w-full bg-gray-200 rounded-full h-1.5 sm:h-2">
            <div
              className="bg-red-500 h-1.5 sm:h-2 rounded-full transition-all duration-300 ease-out"
              style={{ width: `${progressPercentage}%` }}
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;