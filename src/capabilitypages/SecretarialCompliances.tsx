import React, { useState, useEffect, useRef } from 'react';

const styles = `
  .pre-line-text {
    white-space: pre-line;
  }
`;

const SecretarialCompliances = () => {
  const [scaleAtSpeedVisible, setScaleAtSpeedVisible] = useState(false);
  const [promiseTextVisible, setPromiseTextVisible] = useState(false);
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1024);

  const services = [
    {
      title: 'Company Law Compliance',
      description: "Ensure your company is fully compliant with the Companies Act, 2013 and MCA requirements.",
      features: [
        'MCA Filings (MGT-7, AOC-4, etc.).',
        'Board & General Meeting Support.',
        'Maintenance of Statutory Registers.',
        'Director Disclosures & Resolutions.',
        'XBRL Filing.',
      ],
    },
    {
      title: 'Incorporation & Entity Structuring',
      description: 'Start your business on the right foot.',
      features: [
        'Private Limited / LLP / OPC Incorporation.',
        'Name Reservation (RUN & SPICe+).',
        'PAN, TAN, GST, and other statutory registrations.',
        'Shareholder Agreements & MoA/ AoA Drafting.',
      ],
    },
    {
      title: 'Annual Filings and Returns',
      description: 'Avoid penalties and non-compliance notices.',
      features: [
        'Timely MCA Filings.',
        'DIN KYC Compliance.',
        'Filing of MSME and Beneficial Ownership Returns.',
        'Event-based Compliance Monitoring.',
      ],
    },
    {
        title: 'FEMA and RBI Compliance',
        description: "Simplify cross-border transactions and investments.",
        features: [
          'FDI Reporting (FC-GPR, FC-TRS, etc.).',
          'RBI Approvals and Compliance Filings.',
          'ODI Compliance.',
          'FEMA Advisory & Documentation.',
        ],
      },
      {
        title: 'Corporate Governance & Advisory',
        description: "Promote transparency and ethical business practices.",
        features: [
          'Secretarial Audits.',
          'Corporate Governance Reports.',
          'Board PMCAess Improvements.',
          'Compliance Calendar Maintenance.',
        ],
      },
  ];

  // --- Carousel State and Logic ---
  const visibleCards = windowWidth < 1024 ? (windowWidth < 768 ? 1 : 2) : 3;
  const cloneCount = visibleCards;

  const [currentIndex, setCurrentIndex] = useState(cloneCount);
  const [isTransitioning, setIsTransitioning] = useState(true);

  const autoScrollRef = useRef<number | null>(null);
  const transitionRef = useRef<number | null>(null);

  const extendedServices = [
    ...services.slice(-cloneCount),
    ...services,
    ...services.slice(0, cloneCount)
  ];

  const handleNext = () => {
    if (!isTransitioning) return;
    setCurrentIndex((prev) => prev + 1);
  };

  const handlePrev = () => {
    if (!isTransitioning) return;
    setCurrentIndex((prev) => prev - 1);
  };
  
  const pauseAutoScroll = () => {
    if (autoScrollRef.current) clearInterval(autoScrollRef.current);
    // @ts-ignore
    autoScrollRef.current = setTimeout(() => {
        // @ts-ignore
        autoScrollRef.current = setInterval(handleNext, 4000);
    }, 5000); // Resume after 5 seconds
  };
  
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const scaleTimer = setTimeout(() => setScaleAtSpeedVisible(true), 200);
    const promiseTimer = setTimeout(() => setPromiseTextVisible(true), 400);
    return () => { clearTimeout(scaleTimer); clearTimeout(promiseTimer); };
  }, []);

  useEffect(() => {
    if (transitionRef.current) clearTimeout(transitionRef.current as number);
    // When reaching the end (right after last real card), jump to the first real card instantly
    if (currentIndex === extendedServices.length - cloneCount) {
      setIsTransitioning(false);
      setCurrentIndex(cloneCount);
    }
    // When reaching the start (left before first real card), jump to the last real card instantly
    else if (currentIndex === 0) {
      setIsTransitioning(false);
      setCurrentIndex(extendedServices.length - 2 * cloneCount);
    }
    else if (!isTransitioning) {
      setTimeout(() => {
        setIsTransitioning(true);
      }, 50);
    }
    return () => { if (transitionRef.current) clearTimeout(transitionRef.current as number) };
  }, [currentIndex, cloneCount, extendedServices.length, isTransitioning]);

  useEffect(() => {
    pauseAutoScroll(); 
    return () => { if (autoScrollRef.current) clearInterval(autoScrollRef.current) };
  }, [currentIndex]);


  return (
    <>
      <section className="relative min-h-screen bg-white overflow-hidden -mt-16">
        <div className="absolute inset-0">
          <div className="absolute right-0 top-0 w-full h-full">
            <div
              className="w-full h-full bg-transparent"
              style={{
                clipPath: windowWidth < 1024
                ? 'polygon(-375% 75%, 100% 35%, 100% 100%, 0% 100%)'
                : 'polygon(-25% 90%, 130% 0%, 100% 100%, 0% 100%)'
              }}
            >
              <div className="absolute inset-0 overflow-hidden">
                <img
                  src="https://res.cloudinary.com/dzlxesyxg/image/upload/v1751535087/6_c7rl1n.jpg"
                  alt="About Us"
                  className="w-full h-full object-cover opacity-"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="relative z-10 min-h-screen max-w-7xl mx-auto px-4 sm:px-8 md:px-8 lg:px-16 pt-16 sm:pt-24 md:pt-24 lg:pt-28 pb-8 sm:pb-16">
          {/* MODIFIED: Changed top and left classes for better mobile layout */}
          <div className="absolute top-15 left-2 sm:top-20 sm:left-12 md:top-20 md:left-12 lg:top-20 lg:left-20 w-full max-w-xs sm:max-w-lg md:max-w-lg lg:max-w-2xl lg:w-3/5 pr-4 sm:pr-6 md:pr-6 lg:pr-6">
            <div className="overflow-hidden pb-2">
              <h1
                className={`text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold text-gray-900 transition-all duration-1000 ease-out ${
                  scaleAtSpeedVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                }`}
                style={{
                  fontSize: windowWidth < 640 ? '26px' : windowWidth < 768 ? '32px' : windowWidth < 1024 ? '38px' : '54px',
                  lineHeight: windowWidth < 640 ? '32px' : windowWidth < 768 ? '36px' : windowWidth < 1024 ? '42px' : '52px',
                  transform: scaleAtSpeedVisible ? 'translateY(0px)' : 'translateY(32px)'
                }}
              >
                Secretarial <span style={{ color: '#4B1D92' }}>Compliances</span>
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
              <p
                className="text-xs sm:text-sm lg:text-base text-gray-800 leading-relaxed font-400"
                style={{
                  fontSize: windowWidth < 640 ? '14px' : windowWidth < 768 ? '15px' : windowWidth < 1024 ? '16px' : '18px',
                  lineHeight: windowWidth < 640 ? '16px' : windowWidth < 768 ? '18px' : windowWidth < 1024 ? '20px' : '24px'
                }}
              >
                Ensure smooth governance with complete Secretarial Compliance services. From MCA filings to board meeting documentation, we help you stay legally sound and effortlessly compliant.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-black">
              Stay Compliant Stay Confident
            </h2>
          </div>
          <div>
            <p className="text-gray-800 leading-relaxed md:text-lg">
              At EZYGRO, we specialize in end-to-end Corporate Secretarial and Compliance Services tailored to meet the evolving needs of startups, SMEs, and large enterprises. We understand that staying compliant in today's dynamic regulatory environment is both critical and complex. That's why our solutions are designed not just for compliance, but to support your business in scaling responsibly and sustainably.
              With deep domain expertise and a constantly updated understanding of legal and regulatory frameworks, we ensure that your company remains legally sound, risk free, and fully compliant with all statutory requirements including the Companies Act, SEBI regulations, FEMA guidelines, and more.
              From incorporation, board governance, and statutory filings to complex corporate restructuring and due diligence, we provide strategic guidance at every step. At EZYGRO, we are more than just service providers we are your long term compliance partners, committed to aligning regulatory integrity with your growth ambitions.
            </p>
            <div className="mt-4 font-semibold text-black flex items-center cursor-pointer">
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-16 sm:py-24 md:py-28 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-8">
          <div className="mb-12 md:mb-16 flex justify-between items-center">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">Our <span className="text-purple-900">Services</span></h2>
            <div className="flex gap-4">
              <button
                onClick={()=>{handlePrev();pauseAutoScroll()}}
                className="w-12 h-12 flex items-center justify-center rounded-full border border-gray-400 text-2xl text-gray-800 hover:bg-gray-100 transition"
                aria-label="Previous"
              >
                &lt;
              </button>
              <button
                onClick={()=>{handleNext();pauseAutoScroll()}}
                className="w-12 h-12 flex items-center justify-center rounded-full border border-gray-400 text-2xl text-gray-800 hover:bg-gray-100 transition"
                aria-label="Next"
              >
                &gt;
              </button>
            </div>
          </div>
          <div className="overflow-hidden">
            <div
              className="flex"
              style={{
                width: `${(extendedServices.length / visibleCards) * 100}%`,
                transform: `translateX(-${(currentIndex * (100 / extendedServices.length))}%)`,
                transition: isTransitioning ? 'transform 300ms cubic-bezier(0.4,0,0.2,1)' : 'none',
              }}
            >
              {extendedServices.map((service, index) => (
                <div key={index} className="px-4 md:px-6" style={{ width: `${100 / extendedServices.length}%` }}>
                  <div className="bg-white p-8 md:p-10 border border-gray-200 rounded-lg h-full flex flex-col">
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">{service.title}</h3>
                    <p className="text-gray-600 mb-2 md:mb-4 md:text-lg">{service.description}</p>
                    <ul className="space-y-4 md:space-y-5 flex-grow">
                      {service.features.map((feature, fIndex) => (
                        <li key={fIndex} className="flex items-start">
                          <span className="text-purple-900 mr-3 mt-1 flex-shrink-0">■</span>
                          <span className="text-gray-800 md:text-lg">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white pb-16 md:pb-20">
        <div className="max-w-7xl mx-auto text-center px-4 sm:px-6 md:px-8 lg:px-8">
            <p className="text-lg md:text-xl text-gray-800">
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

export default SecretarialCompliances;