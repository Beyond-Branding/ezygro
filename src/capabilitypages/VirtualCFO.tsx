import React, { useState, useEffect, useRef } from 'react';

const VirtualCFO = () => {
  const services = [
    {
      title: 'MIS',
      description: 'MIS is a system for creating structured, timely reports that give insights into a company’s operations and finances. It helps management make informed, data driven decisions.',
      features: [
        'Reports cover sales trends, expenses, customer behavior, and profit margins.',
        'Assists in identifying underperforming products or regions.',
        'Enables proactive rather than reactive decision-making.',
        'Strengthens strategic planning through real-time insights.',
      ]
    },
    {
      title: 'Budgeting',
      description: 'Budgeting is the process of planning how financial resources will be allocated to meet business objectives. It sets limits and helps control spending.',
      features: [
        'Allows comparison between projected and actual performance.',
        'Promotes financial discipline and efficient resource use.',
        'Highlights areas of overspending or underfunding.',
        'Ensures projects stay within financial boundaries.',
      ]
    },
    {
      title: 'Cash Flow Management',
      description: 'Cash flow management ensures the business has enough liquid funds to meet daily obligations. It focuses on balancing cash inflows and outflows.',
      features: [
        'Prevents liquidity crises even if the business is profitable.',
        'Tracks receivables, payables, and due dates.',
        'Avoids funding gaps that can disrupt operations.',
        'Ensures smooth payment of salaries, rent, and bills.',
      ]
    },
    {
      title: 'Compliance Reporting',
      description: 'Compliance reporting involves submitting timely and accurate reports to regulatory bodies. It keeps the business legally sound and avoids penalties.',
      features: [
        'Covers GST, TDS, income tax, ROC filings, and audits.',
        'Protects from legal action and heavy fines.',
        'Maintains reputation and credibility with stakeholders.',
        'Ensures seamless functioning with no legal interruptions.',
      ]
    },
    {
      title: 'SOP & Manuals Design',
      description: 'SOPs (Standard Operating Procedures) provide step-by-step instructions for business processes. They enhance consistency, training, and efficiency.',
      features: [
        'Reduces errors by defining clear procedures.',
        'Helps new staff quickly adapt to roles.',
        'Improves quality control and service standards.',
        'Promotes uniformity across locations or departments.',
      ]
    },
    {
      title: 'Business Planning',
      description: 'Business planning involves setting long term goals and creating strategies to achieve them. It includes research, forecasting, and risk management.',
      features: [
        'Acts as a blueprint for expansion and operations.',
        'Essential for attracting investors or loans.',
        'Details resources, timelines, and expected returns.',
        'Helps manage risks and measure progress.',
      ]
    },
    {
      title: 'Financial Marketing',
      description: 'Financial marketing presents the company’s financial story in a clear, appealing way to attract investors or partners. It builds confidence in the business’s future.',
      features: [
        'Includes investor decks, valuation reports, and projections.',
        'Showcases financial stability and growth potential.',
        'Helps secure funding and partnerships.',
        'Builds stakeholder trust and enhances brand image.'
      ]
    }
  ];

  // --- State for Carousel, Window, and Animations ---
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1024);
  const visibleCards = windowWidth < 768 ? 1 : 3;
  const cloneCount = visibleCards;

  const [currentIndex, setCurrentIndex] = useState(cloneCount);
  const [isTransitioning, setIsTransitioning] = useState(true);

  const autoScrollRef = useRef<number | null>(null);
  const resumeTimeoutRef = useRef<number | null>(null);

  const [scaleAtSpeedVisible, setScaleAtSpeedVisible] = useState(false);
  const [promiseTextVisible, setPromiseTextVisible] = useState(false);

  // Create the extended list with clones
  const extendedServices = [
    ...services.slice(-cloneCount),
    ...services,
    ...services.slice(0, cloneCount)
  ];

  // --- Handlers for Carousel Navigation ---
  const handleNext = () => {
    if (!isTransitioning) return;
    setCurrentIndex((prev) => prev + 1);
  };

  const handlePrev = () => {
    if (!isTransitioning) return;
    setCurrentIndex((prev) => prev - 1);
  };
  
  // --- Effects ---
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const scaleTimer = setTimeout(() => setScaleAtSpeedVisible(true), 200);
    const promiseTimer = setTimeout(() => setPromiseTextVisible(true), 400);
    return () => {
      clearTimeout(scaleTimer);
      clearTimeout(promiseTimer);
    };
  }, []);
  
  // Effect to handle the "infinite" loop jump
  useEffect(() => {
    if (currentIndex === services.length + cloneCount || currentIndex === 0) {
      const timer = setTimeout(() => {
        setIsTransitioning(false);
        const newIndex = currentIndex === 0 ? services.length : cloneCount;
        setCurrentIndex(newIndex);
      }, 500); // Must match the CSS transition duration
      return () => clearTimeout(timer);
    }
    if (!isTransitioning) {
        // A tiny timeout to allow the jump to happen before re-enabling the transition
        setTimeout(() => {
            setIsTransitioning(true);
        }, 50);
    }
  }, [currentIndex, services.length, cloneCount]);

  // Autoscroll logic
  const pauseAutoScroll = () => {
    if (autoScrollRef.current) clearInterval(autoScrollRef.current);
    if (resumeTimeoutRef.current) clearTimeout(resumeTimeoutRef.current);
// @ts-ignore
    resumeTimeoutRef.current = setTimeout(() => {
// @ts-ignore
      autoScrollRef.current = setInterval(handleNext, 4000);
    }, 5000); // Resume after 5 seconds
  };
  
  useEffect(() => {
// @ts-ignore
    autoScrollRef.current = setInterval(handleNext, 4000);
    return () => {
      if (autoScrollRef.current) clearInterval(autoScrollRef.current);
      if (resumeTimeoutRef.current) clearTimeout(resumeTimeoutRef.current);
    };
  }, [isTransitioning]); 

  return (
    <>
      <section className="relative min-h-screen bg-white overflow-hidden -mt-16">
        <div className="absolute inset-0">
          <div className="absolute right-0 top-0 w-full h-full">
            <div
              className="w-full h-full bg-transparent"
              style={{
                clipPath: windowWidth < 640
                ? 'polygon(-375% 75%, 100% 35%, 100% 100%, 0% 100%)'
                : windowWidth < 1024
                ? 'polygon(-75% 85%, 110% 15%, 100% 100%, 0% 100%)'
                : 'polygon(-25% 90%, 130% 0%, 100% 100%, 0% 100%)'
              }}
            >
              <div className="absolute inset-0 overflow-hidden">
                <img
                  src="https://res.cloudinary.com/dzlxesyxg/image/upload/v1751534368/4_zxvwta.jpg"
                  alt="About Us"
                  className="w-full h-full object-cover opacity-"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="relative z-10 min-h-screen max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 pt-16 sm:pt-24 lg:pt-28 pb-8 sm:pb-16">
          {/* MODIFIED: Changed top and left classes for better mobile layout */}
          <div className="absolute top-15 left-2 sm:top-20 sm:left-12 lg:top-20 lg:left-20 w-full max-w-xs sm:max-w-lg lg:max-w-2xl lg:w-3/5 pr-4 sm:pr-6 lg:pr-6">
            <div className="overflow-hidden pb-2">
              <h1
                className={`text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold text-gray-900 transition-all duration-1000 ease-out ${
                  scaleAtSpeedVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                }`}
                style={{
                  fontSize: windowWidth < 640 ? '26px' : windowWidth < 1024 ? '38px' : '54px',
                  lineHeight: windowWidth < 640 ? '32px' : windowWidth < 1024 ? '42px' : '52px',
                  transform: scaleAtSpeedVisible ? 'translateY(0px)' : 'translateY(32px)'
                }}
              >
                Virtual CFO and Business Growth <span style={{ color: '#4B1D92' }}>Consultancy</span>
              </h1>
            </div>
            <div
              className={`mt-1 sm:mt-2 lg:mt-3 transition-all duration-1200 ease-out delay-300 ${
                promiseTextVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
              }`}
              style={{
                transform: promiseTextVisible ? 'translateY(0px)' : 'translateY(24px)'
              }}
            >
              <p className="text-xs sm:text-sm lg:text-base text-gray-800 leading-relaxed font-400"
                style={{
                  fontSize: windowWidth < 640 ? '14px' : windowWidth < 1024 ? '16px' : '18px',
                  lineHeight: windowWidth < 640 ? '16px' : windowWidth < 1024 ? '20px' : '24px'
                }}
              >
                Gain strategic direction with our Virtual CFO and Business Growth Consultancy services. From financial planning and cash flow management to performance insights and growth strategies, get<br />
                expert guidance without the cost of a full time CFO.
              </p>
            </div>
          </div>
        </div>
      </section>      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl font-bold text-black sm:ml-8 md:ml-16 lg:ml-12">
              Your Growth Partner
            </h2>
          </div>
          <div>
            <p className="text-gray-800 leading-relaxed">
              At EZYGRO, we deliver smart, scalable solutions that empower clients to focus on their core strengths while we handle the rest. From outsourced CFO services to financial modeling, cash flow management, and compliance reporting. We take care of the numbers, so you can drive growth without the operational clutter.
            </p>
            <div className="mt-4 font-semibold text-black flex items-center cursor-pointer">
            </div>
          </div>
        </div>      </section>

      {/* Our Services Section (Carousel) */}
      <section className="bg-gray-50 pt-8 pb-24 sm:pt-12 sm:pb-32">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="mb-12 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 sm:ml-8 md:ml-16 lg:ml-12">
                <h2 className="text-4xl font-bold text-gray-900">Our <span className="text-purple-900">Services</span></h2>
                <div className="flex gap-4 mt-4 sm:mt-0">
                  <button
                    onClick={() => { handlePrev(); pauseAutoScroll(); }}
                    className="w-12 h-12 flex items-center justify-center rounded-full border border-gray-400 text-2xl text-gray-800 hover:bg-gray-100 transition"
                    aria-label="Previous"
                  >
                    <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18l-6-6 6-6" /></svg>
                  </button>
                  <button
                    onClick={() => { handleNext(); pauseAutoScroll(); }}
                    className="w-12 h-12 flex items-center justify-center rounded-full border border-gray-400 text-2xl text-gray-800 hover:bg-gray-100 transition"
                    aria-label="Next"
                  >
                    <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 6l6 6-6 6" /></svg>
                  </button>
                </div>
              </div>

              <div className="overflow-hidden w-full">
                <div
                  className="flex"
                  style={{
                    width: `${extendedServices.length * (100 / visibleCards)}%`,
                    transform: `translateX(-${currentIndex * (100 / extendedServices.length)}%)`,
                    transition: isTransitioning ? 'transform 500ms ease-in-out' : 'none',
                  }}
                >
                  {extendedServices.map((service, index) => (
                    <div
                      key={index}
                      style={{ width: `calc(100% / ${extendedServices.length})`, padding: '0 1rem' }}
                    >
                      <div className="bg-white p-8 border border-gray-200 rounded-lg h-full flex flex-col">
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                        <p className="text-gray-600 mb-6">{service.description}</p>
                        <ul className="space-y-4 flex-grow">
                          {service.features.map((feature, fIndex) => (
                            <li key={fIndex} className="flex items-start">
                              <span className="text-purple-900 mr-3 mt-1 flex-shrink-0">■</span>
                              <span className="text-gray-800">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
              </div>            </div>
          </section>

          <section className="bg-white pb-16">
        <div className="max-w-7xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <p className="text-lg text-gray-800">
                For any queries, please contact us at:{" "}
                <a 
                    href="tel:+91 9372963906" 
                    className="text-purple-900 font-bold hover:underline"
                >
                    +91 9372963906
                </a>
            </p>
        </div>
      </section>
      
    </>
  );
};

export default VirtualCFO;