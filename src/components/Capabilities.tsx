import { useState, useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';

const Capabilities = () => {
  const [capabilitiesVisible, setCapabilitiesVisible] = useState(false);
  const [descriptionVisible, setDescriptionVisible] = useState(false);
  const [cardsVisible, setCardsVisible] = useState(false);
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1024);
  const sectionRef = useRef<HTMLElement>(null);

  // Single background video for the diagonal section
  const backgroundVideo = "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4";

  const capabilities = [
    {
      id: 1,
      title: 'Financial and Accounting Management',
      image: 'https://res.cloudinary.com/dzlxesyxg/image/upload/v1751477559/financial_ggjj6g.jpg',
      link: '/financial-accounting',
    },
    {
      id: 2,
      title: (
        <>
          Income Tax, GST and <br /> Audits
        </>
      ),
      image: 'https://res.cloudinary.com/dzlxesyxg/image/upload/v1751478035/Incometax_vzg8fz.jpg',
      link: '/income-tax',
    },
    {
      id: 3,
      title: 'Virtual CFO and Business Growth Consultancy',
      image: 'https://res.cloudinary.com/dzlxesyxg/image/upload/v1751478055/Virtual_cfo_vup51w.jpg',
      link: '/virtual-cfo',
    },
    {
      id: 4,
      title: (
        <>
          Innovative <br /> Dashboards
        </>
      ),
      image: 'https://res.cloudinary.com/dzlxesyxg/image/upload/v1751478024/Dashboards_trcrbv.jpg',
      link: '/innovative-dashboards',
    },
    {
      id: 5,
      title: 'Loans, Insurance and Investments',
      image: 'https://res.cloudinary.com/dzlxesyxg/image/upload/v1751478036/Loans_x8mwb3.jpg',
      link: '/loans-insurance',
    },
    {
      id: 6,
      title: (
        <>
          Secretarial <br /> Compliances
        </>
      ),
      image: 'https://res.cloudinary.com/dzlxesyxg/image/upload/v1751478046/Secretorial_compliances_y3onhw.jpg',
      link: '/secretarial-compliances',
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

  // Intersection Observer for scroll-based animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Reset animations first
            setCapabilitiesVisible(false);
            setDescriptionVisible(false);
            
            // Trigger animations with delays
            setTimeout(() => {
              setCapabilitiesVisible(true);
            }, 200);

            setTimeout(() => {
              setDescriptionVisible(true);
            }, 400);
          } else {
            // Reset animations when not in view
            setCapabilitiesVisible(false);
            setDescriptionVisible(false);
          }
        });
      },
      {
        threshold: 0.3, // Trigger when 30% of the section is visible
        rootMargin: '-10% 0px -10% 0px' // Add some margin to fine-tune trigger point
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  // Initial text animations on component mount
  useEffect(() => {
    // Initial animation trigger for first load
    const initialTimer = setTimeout(() => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
        
        if (isVisible) {
          setCapabilitiesVisible(true);
          setTimeout(() => {
            setDescriptionVisible(true);
          }, 200);
        }
      }
    }, 300);

    return () => clearTimeout(initialTimer);
  }, []);

  // Separate animation for cards section (no scroll-based reset)
  useEffect(() => {
    const timer = setTimeout(() => {
      setCardsVisible(true);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <section ref={sectionRef} className="relative min-h-screen bg-white overflow-hidden">
        {/* Background with diagonal section for image */}
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
                <img
                  src="https://res.cloudinary.com/dzlxesyxg/image/upload/v1751476928/capabilities_kmmqcl.jpg"
                  alt="Capabilities Background"
                  className="w-full h-full object-cover"
                  style={{ opacity: 1 }}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="relative z-10 min-h-screen max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-16">
          <div className="absolute top-2 sm:top-4 lg:top-8 left-8 sm:left-12 lg:left-20 w-full max-w-xs sm:max-w-lg lg:max-w-2xl lg:w-3/5 pr-4 sm:pr-6 lg:pr-6">
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
              <a
                key={cap.id}
                href={cap.link}
                className={`group relative cursor-pointer transform transition-all duration-700 ease-out hover:scale-105 w-full ${
                  cardsVisible 
                    ? 'translate-y-0 opacity-100' 
                    : 'translate-y-8 opacity-0'
                }`}
                style={{
                  transitionDelay: `${index * 150}ms`
                }}
              >
                <div className="relative bg-white hover:bg-purple-900 p-8 transition-all duration-500 min-h-[470px] h-full flex flex-col justify-between shadow-md">
                  <div className="flex justify-center mb-6 pt-8">
                    <div className="w-52 h-52 rounded-full overflow-hidden">
                      <img
                        src={cap.image}
                        alt={typeof cap.title === 'string' ? cap.title : undefined}
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
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Capabilities;