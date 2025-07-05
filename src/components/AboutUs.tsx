import { useState, useEffect, useRef } from 'react';
import VisionPurposeValues from './VisionPurposeValues'; 

const AboutUs = () => {
  const [scaleAtSpeedVisible, setScaleAtSpeedVisible] = useState(false);
  const [promiseTextVisible, setPromiseTextVisible] = useState(false);
  const [secondSectionVisible, setSecondSectionVisible] = useState(false);
  const [secondSectionTextVisible, setSecondSectionTextVisible] = useState(false);
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1024);
  const sectionRef = useRef<HTMLElement>(null);

  // Data for the Corporate Citizenship section
  const citizenshipData = [
    {
      title: ' Our Belief',
      description: 'At EZYGRO, we believe true impact comes from creating value that goes beyond business transactions. We’re not just here to offer professional services  we’re here to stand for something greater. Rooted in integrity, trust, and purpose, our belief is that every solution we provide should also contribute to the betterment of society.',
    },
    {
      title: 'Our Approach',
      description: 'We integrate ethical practices into every step of our process from client consultation to community outreach. Our commitment to fairness, clarity, and accessibility ensures that our services remain transparent and people-centered. Through active engagement with our community and a focus on honest business, we strive to lead with both heart and expertise.',
    }, 
    {
      title: 'Our Purpose',
      description: 'Knowledge is power and at EZYGRO, we share it freely. Whether through workshops, awareness initiatives, or simplified financial education, our goal is to help people make informed choices. We aim to build an inclusive environment where every individual, entrepreneur, or enterprise feels supported, valued, and empowered to grow.',
    },
  ];

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
            setScaleAtSpeedVisible(false);
            setPromiseTextVisible(false);
            
            // Trigger animations with delays
            setTimeout(() => {
              setScaleAtSpeedVisible(true);
            }, 200);

            setTimeout(() => {
              setPromiseTextVisible(true);
            }, 400);
          } else {
            // Reset animations when not in view
            setScaleAtSpeedVisible(false);
            setPromiseTextVisible(false);
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
          setScaleAtSpeedVisible(true);
          setTimeout(() => {
            setPromiseTextVisible(true);
          }, 200);
        }
      }
    }, 300);

    return () => clearTimeout(initialTimer);
  }, []);

  // Separate animation for second section (no scroll-based reset)
  useEffect(() => {
    const timer = setTimeout(() => {
      setSecondSectionVisible(true);
      setTimeout(() => {
        setSecondSectionTextVisible(true);
      }, 200);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <section ref={sectionRef} className="relative min-h-screen bg-white overflow-hidden">
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
                  src="https://res.cloudinary.com/dzlxesyxg/image/upload/v1751476223/aboutus_uqobbt.jpg"
                  alt="About Us"
                  className="w-full h-full object-cover"
                  style={{ opacity: 1 }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="relative z-10 min-h-screen max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-16">
          <div className="absolute top-4 sm:top-8 lg:top-16 left-4 sm:left-6 lg:left-0 w-full max-w-xs sm:max-w-lg lg:max-w-2xl lg:w-3/5 pr-4 sm:pr-6 lg:pr-6">
            <h1
              className={`text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 transition-all duration-700 ease-out ${
                scaleAtSpeedVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
              }`}
              style={{
                fontSize: windowWidth < 640 ? '28px' : windowWidth < 1024 ? '48px' : '66px',
                lineHeight: windowWidth < 640 ? '30px' : windowWidth < 1024 ? '48px' : '70px' // decreased line height
              }}
            >
              Who <span style={{ color: '#4B1D92' }}>We Are</span>
            </h1>

            <div
              className={`transition-all duration-700 ease-out ${
                promiseTextVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
              }`}
            >
              <p className="mt-2 sm:mt-4 lg:mt-6 text-xs sm:text-xs lg:text-sm text-gray-800 leading-relaxed font-400"
                style={{
                  fontSize: windowWidth < 640 ? '12px' : windowWidth < 1024 ? '14px' : '16px',
                  lineHeight: windowWidth < 640 ? '15px' : windowWidth < 1024 ? '18px' : '22px' // decreased line height
                }}
              >
                Welcome to EZYGRO where expertise meets elegance in legal, tax, audit, and compliance. We simplify the complex with clarity and care.
Empowering growth with purpose, precision, and trust.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-8 sm:py-12 md:py-16 lg:py-24 xl:py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 xl:gap-16 items-center">
            <div className="relative">
              <h2 className={`text-xl sm:text-2xl md:text-3xl font-medium text-gray-900 tracking-tight transition-all ease-in-out duration-1000 transform ${secondSectionVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
                Grow Smart with EzyGro
              </h2>
              <p className={`mt-4 sm:mt-6 text-sm sm:text-base lg:text-lg text-gray-600 leading-relaxed transition-all ease-in-out duration-1000 delay-200 transform ${secondSectionTextVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
                EZYGRO is a visionary initiative founded by Sushma B. Salunkhe and Dhanashree B. Salunkhe, designed to offer comprehensive, end-to-end solutions across the domains of legal, tax, audit, and corporate advisory. Born from a shared passion for simplifying the intricate challenges faced by businesses and individuals alike, EZYGRO stands as a one-stop destination for navigating the evolving regulatory and financial landscape with confidence. With a foundation built on trust, ethics, and deep industry knowledge, we are committed to delivering more than just services we deliver clarity, confidence, and long-term value. Whether it's guiding a startup through its legal framework, helping businesses stay compliant, or offering tailored financial advice, we combine precision with a personal touch to ensure every client receives support that’s both strategic and sincere.
              </p>
            </div>
            <div className="w-full h-64 sm:h-80 md:h-96 lg:h-full overflow-hidden rounded-lg">
              <img
                src="https://res.cloudinary.com/dzlxesyxg/image/upload/v1751476463/aboutus2_xazpd2.jpg"
                alt="Mahindra Group - Modern office building representing innovation and growth"
                className="w-full h-full object-cover transition-transform duration-300 ease-out"
                style={{ transform: `scale(1.05)` }}
              />
            </div>
          </div>
        </div>
      </section>

      <VisionPurposeValues />

      <section className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-left mb-12">
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-gray-900">
              EZYGRO for YOU
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600 max-w-4xl">
              We believe We have the power to revolutionize financial services and <br></br>uplift communities across the globe.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {citizenshipData.map((item, index) => (
              <div key={index} className="group relative bg-gray-50 p-8 border border-gray-200 transition-shadow duration-300 hover:shadow-lg">
                <h3 className="text-xl font-semibold text-gray-900">{item.title}</h3>
                <p className="mt-4 text-gray-600">{item.description}</p>
                <div className="absolute bottom-0 left-0 h-1 bg-purple-900 w-full scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer Line */}
      <div className="bg-black border-t border-gray-800"></div>
    </>
  );
};

export default AboutUs;
