import { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';

const Capabilities = () => {
  const [capabilitiesVisible, setCapabilitiesVisible] = useState(false);
  const [descriptionVisible, setDescriptionVisible] = useState(false);
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1024);

  // Single background video for the diagonal section
  const backgroundVideo = "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4";

  // Capabilities data (similar to Industries)
  const capabilities = [
    {
      id: 1,
      title: 'Artificial Intelligence',
      image: 'https://images.pexels.com/photos/110854/pexels-photo-110854.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
      link: '/capabilities/artificial-intelligence',
    },
    {
      id: 2,
      title: 'Business Process Services',
      image: 'https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
      link: '/capabilities/business-process-services',
    },
    {
      id: 3,
      title: 'Cloud and Infrastructure Services',
      image: 'https://images.pexels.com/photos/325185/pexels-photo-325185.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
      link: '/capabilities/cloud-infrastructure',
    },
    // New cards from screenshot
    {
      id: 4,
      title: 'Digital Enterprise Applications',
      image: 'https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
      link: '/capabilities/digital-enterprise-applications',
    },
    {
      id: 5,
      title: 'Engineering Services',
      image: 'https://images.pexels.com/photos/1145434/pexels-photo-1145434.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
      link: '/capabilities/engineering-services',
    },
    {
      id: 6,
      title: 'Experience Services',
      image: 'https://images.pexels.com/photos/459225/pexels-photo-459225.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
      link: '/capabilities/experience-services',
    },
  ];

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
    const capabilitiesTimer = setTimeout(() => {
      setCapabilitiesVisible(true);
    }, 200);

    const descriptionTimer = setTimeout(() => {
      setDescriptionVisible(true);
    }, 400);

    return () => {
      clearTimeout(capabilitiesTimer);
      clearTimeout(descriptionTimer);
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
                <video
                  className="w-full h-full object-cover opacity-70"
                  autoPlay
                  muted
                  loop
                  playsInline
                >
                  <source src={backgroundVideo} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="relative z-10 min-h-screen max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-16">
          {/* Left content: Capabilities */}
          <div className="absolute top-2 sm:top-4 lg:top-8 left-4 sm:left-6 lg:left-0 w-full max-w-xs sm:max-w-lg lg:max-w-2xl lg:w-3/5 pr-4 sm:pr-6 lg:pr-6">
            <h1
              className={`text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold text-gray-900 transition-all duration-700 ease-out ${
                capabilitiesVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
              }`}
              style={{ 
                fontSize: windowWidth < 640 ? '28px' : windowWidth < 1024 ? '48px' : '66px', 
                lineHeight: windowWidth < 640 ? '36px' : windowWidth < 1024 ? '56px' : '90px' 
              }}
            >
              Our Capabilities
            </h1>
            
            <div
              className={`transition-all duration-700 ease-out ${
                descriptionVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
              }`}
            >
              <p className="mt-2 sm:mt-4 lg:mt-6 text-xs sm:text-sm lg:text-base text-gray-800 leading-relaxed font-400"
                          style={{ 
                            fontSize: windowWidth < 640 ? '14px' : windowWidth < 1024 ? '16px' : '18px', 
                            lineHeight: windowWidth < 640 ? '20px' : windowWidth < 1024 ? '24px' : '30px' 
                          }}
                          >
                Our portfolio of offerings spans competencies, specialisms, and application services that align with our customers' changing worlds.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Capabilities Cards Section - now outside and below the first section */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-left mb-12 mt-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What We Do
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {capabilities.map((cap, index) => (
              <div
                key={cap.id}
                className={`group relative cursor-pointer transform transition-all duration-700 ease-out hover:scale-105 w-full ${
                  capabilitiesVisible 
                    ? 'translate-y-0 opacity-100' 
                    : 'translate-y-8 opacity-0'
                }`}
                style={{
                  transitionDelay: `${index * 150}ms`
                }}
              >
                <div className="relative bg-white hover:bg-gray-900 p-8 transition-all duration-500 min-h-[340px] h-full flex flex-col justify-between shadow-md">
                  <div className="flex justify-center mb-6 pt-8">
                    <div className="w-32 h-32 rounded-full overflow-hidden">
                      <img
                        src={cap.image}
                        alt={cap.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                  </div>
                  <div className="flex-1 flex flex-col justify-end">
                    <h3 className="text-lg font-semibold text-gray-900 group-hover:text-white transition-colors duration-500 mb-4 text-center">
                      {cap.title}
                    </h3>
                    <div className="flex justify-end">
                      <ArrowRight className="w-5 h-5 text-gray-600 group-hover:text-white transition-colors duration-500" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Capabilities;
