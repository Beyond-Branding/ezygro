import React, { useState, useEffect, useRef } from 'react';

const SecretarialCompliances = () => {
  const [scaleAtSpeedVisible, setScaleAtSpeedVisible] = useState(false);
  const [promiseTextVisible, setPromiseTextVisible] = useState(false);
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1024);

  const services = [
    {
      title: 'Company Law Compliance',
      description: "Ensure your company is fully compliant with the Companies Act, 2013 and MCA requirements.",
      features: [
        'ROC Filings (MGT-7, AOC-4, etc.)',
        'Board & General Meeting Support',
        'Maintenance of Statutory Registers',
        'Director Disclosures & Resolutions',
        'XBRL Filing',
      ],
    },
    {
      title: 'Incorporation & Entity Structuring',
      description: 'Start your business on the right foot.',
      features: [
        'Private Limited / LLP / OPC Incorporation',
        'Name Reservation (RUN & SPICe+)',
        'PAN, TAN, GST, and other statutory registrations',
        'Shareholder Agreements & MoA/ AoA Drafting',
      ],
    },
    {
      title: 'Annual Filings & Returns',
      description: 'Avoid penalties and non-compliance notices.',
      features: [
        'Timely MCA Filings',
        'DIN KYC Compliance',
        'Filing of MSME and Beneficial Ownership Returns',
        'Event-based Compliance Monitoring',
      ],
    },
    {
        title: 'FEMA & RBI Compliance',
        description: "Simplify cross-border transactions and investments.",
        features: [
          'FDI Reporting (FC-GPR, FC-TRS, etc.)',
          'RBI Approvals and Compliance Filings',
          'ODI Compliance',
          'FEMA Advisory & Documentation',
        ],
      },
      {
        title: 'Corporate Governance & Advisory',
        description: "Promote transparency and ethical business practices.",
        features: [
          'Secretarial Audits',
          'Corporate Governance Reports',
          'Board Process Improvements',
          'Compliance Calendar Maintenance',
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
    if (transitionRef.current) clearTimeout(transitionRef.current);
    if (currentIndex === services.length + cloneCount || currentIndex === cloneCount - 1) {
      // @ts-ignore
      transitionRef.current = setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(currentIndex === 0 ? services.length + (cloneCount -1) : cloneCount);
      }, 300); 
    } else if (!isTransitioning) {
        // A tiny timeout to re-enable transitions after the jump
        setTimeout(() => {
            setIsTransitioning(true);
        }, 50);
    }
    return () => { if (transitionRef.current) clearTimeout(transitionRef.current) };
  }, [currentIndex, services.length, cloneCount]);

  useEffect(() => {
    pauseAutoScroll(); // Start the auto-scroll cycle
    return () => { if (autoScrollRef.current) clearInterval(autoScrollRef.current) };
  }, [currentIndex]);


  return (
    <>
      <section className="relative min-h-screen bg-white overflow-hidden">
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
                  src="https://res.cloudinary.com/dzlxesyxg/image/upload/v1751535087/6_c7rl1n.jpg"
                  alt="About Us"
                  className="w-full h-full object-cover opacity-"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="relative z-10 min-h-screen max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-16">
            <div className="absolute top-4 sm:top-8 lg:top-16 left-8 sm:left-12 lg:left-20 w-full max-w-xs sm:max-w-lg lg:max-w-2xl lg:w-3/5 pr-4 sm:pr-6 lg:pr-6">
            <h1
              className={`text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 transition-all duration-700 ease-out ${
                scaleAtSpeedVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
              }`}
              style={{
                fontSize: windowWidth < 640 ? '22px' : windowWidth < 1024 ? '38px' : '54px',
                lineHeight: windowWidth < 640 ? '26px' : windowWidth < 1024 ? '40px' : '60px'
              }}
            >
              Secretarial Compliances
            </h1>
            <div
              className={`transition-all duration-700 ease-out ${
                promiseTextVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
              }`}
            >
              <p
                className="mt-2 sm:mt-4 lg:mt-6 text-xs sm:text-xs lg:text-sm text-gray-800 leading-relaxed font-400"
                style={{
                  fontSize: windowWidth < 640 ? '12px' : windowWidth < 1024 ? '14px' : '16px',
                  lineHeight: windowWidth < 640 ? '15px' : windowWidth < 1024 ? '18px' : '22px'
                }}
              >
                Ensure smooth governance with complete Secretarial Compliance services. From ROC filings to board meeting documentation, we help you stay legally sound and effortlessly compliant
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl font-bold text-black">
              Stay Compliant Stay Confident
            </h2>
          </div>
          <div>
            <p className="text-gray-800 leading-relaxed">
              At EZYGRO, we specialize in end-to-end Corporate Secretarial and Compliance Services tailored to meet the evolving needs of startups, SMEs, and large enterprises. We understand that staying compliant in today’s dynamic regulatory environment is both critical and complex. That’s why our solutions are designed not just for compliance, but to support your business in scaling responsibly and sustainably.
              With deep domain expertise and a constantly updated understanding of legal and regulatory frameworks, we ensure that your company remains legally sound, risk-free, and fully compliant with all statutory requirements including the Companies Act, SEBI regulations, FEMA guidelines, and more.
              From incorporation, board governance, and statutory filings to complex corporate restructuring and due diligence, we provide strategic guidance at every step. At EZYGRO, we are more than just service providers — we are your long-term compliance partners, committed to aligning regulatory integrity with your growth ambitions.
            </p>
            <div className="mt-4 font-semibold text-black flex items-center cursor-pointer">
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-16 sm:py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 flex justify-between items-center">
            <h2 className="text-4xl font-bold text-gray-900">Our Services</h2>
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
                transform: `translateX(-${(currentIndex / extendedServices.length) * 100}%)`,
                transition: isTransitioning ? 'transform 300ms ease-in-out' : 'none',
              }}
            >
              {extendedServices.map((service, index) => (
                <div key={index} className="px-4" style={{ width: `${100 / extendedServices.length}%` }}>
                  <div className="bg-white p-8 border border-gray-200 rounded-lg h-full flex flex-col">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                    <p className="text-gray-600 mb-2">{service.description}</p>
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
          </div>
        </div>
      </section>
    </>
  );
};

export default SecretarialCompliances;