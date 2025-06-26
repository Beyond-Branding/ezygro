import { useState, useEffect } from 'react';

// --- Data for the new Case Studies section ---
const caseStudies = [
  {
    title: 'Accelerating Property Risk Assessment with Digital Tools for a Global Insurer',
    href: '#', // Replace with actual link
    backgroundPosition: 'left center',
  },
  {
    title: 'Unified DevSecOps Platform Cuts Downtime by 60% and Offers 8x Deployment Speed',
    href: '#', // Replace with actual link
    backgroundPosition: 'center center',
  },
  {
    title: '30% Decrease in Attrition Due to Targeted Wellness Interventions for an Online Shopping Firm',
    href: '#', // Replace with actual link
    backgroundPosition: 'right center',
  },
];

const Pricing = () => {
  const [pricingVisible, setPricingVisible] = useState(false);
  const [descriptionVisible, setDescriptionVisible] = useState(false);
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1024);

  const backgroundVideo = "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4";
  const caseStudiesImageUrl = "/image_b834fe.jpg"; // IMPORTANT: Place your image in the /public folder

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
    const pricingTimer = setTimeout(() => {
      setPricingVisible(true);
    }, 200);

    const descriptionTimer = setTimeout(() => {
      setDescriptionVisible(true);
    }, 400);

    return () => {
      clearTimeout(pricingTimer);
      clearTimeout(descriptionTimer);
    };
  }, []);

  return (
    <>
      <section className="relative min-h-screen bg-white overflow-hidden">
        {/* Background with diagonal section for video */}
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

        {/* Text Content */}
        <div className="relative z-10 min-h-screen max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-16">
          <div className="absolute top-2 sm:top-4 lg:top-8 left-4 sm:left-6 lg:left-0 w-full max-w-xs sm:max-w-lg lg:max-w-2xl lg:w-3/5 pr-4 sm:pr-6 lg:pr-6">
            <h1
              className={`text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold text-gray-900 transition-all duration-700 ease-out ${
                pricingVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
              }`}
              style={{ 
                fontSize: windowWidth < 640 ? '28px' : windowWidth < 1024 ? '48px' : '66px', 
                lineHeight: windowWidth < 640 ? '36px' : windowWidth < 1024 ? '56px' : '90px' 
              }}
            >
              Our Pricing
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
                Explore our flexible and transparent pricing plans tailored to meet your unique business needs with value-driven solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- START: New Case Studies Section --- */}
      <section className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Case Studies
            </h2>
          </div>
          <div className="mx-auto mt-12 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-12 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {caseStudies.map((study) => (
              <a 
                key={study.title} 
                href={study.href} 
                className="group flex max-w-xl flex-col items-start justify-between"
              >
                <div className="relative w-full">
                  <div 
                    className="aspect-[16/9] w-full rounded-2xl bg-gray-100 group-hover:grayscale-0 filter grayscale transition-all duration-500 ease-in-out"
                    style={{
                      backgroundImage: `url(${caseStudiesImageUrl})`,
                      backgroundSize: '300% 100%',
                      backgroundPosition: study.backgroundPosition,
                    }}
                  >
                    <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
                  </div>
                </div>
                <div className="mt-6">
                  <div className="group relative">
                    <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                        <span className="absolute inset-0" />
                        {study.title}
                    </h3>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
      {/* --- END: New Case Studies Section --- */}

      {/* Footer Line */}
      <div className="bg-black border-t border-gray-800"></div>
    </>
  );
};

export default Pricing;