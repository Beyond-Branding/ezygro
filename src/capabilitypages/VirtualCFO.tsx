import React, { useState, useEffect, useRef } from 'react';

const VirtualCFO = () => {
  const services = [
    {
      title: 'MIS (Management Information System)',
      description: 'MIS refers to the systematic preparation of detailed, timely, and structured reports that give business owners a clear overview of their operational and financial performance. These reports can include sales trends, expense summaries, customer behaviors, and profit margins, enabling top management to take data-backed decisions. For example, a business might use MIS reports to identify underperforming product lines or geographical areas and realign marketing strategies accordingly. A good MIS framework ensures that decisions are proactive rather than reactive.'
    },
    {
      title: 'Budgeting',
      description: 'Budgeting is the process of forecasting future financial performance by planning the allocation of resources across different departments and activities. It helps businesses set spending limits, prioritize investments, and keep financial discipline. Through effective budgeting, a company can compare actual results with projections and quickly identify deviations. For instance, a company planning a new product launch may allocate ₹10 lakhs for R&D, marketing, and distribution; tracking this budget helps ensure the project remains financially viable and avoids overspending.'
    },
    {
      title: 'Cash Flow Management',
      description: 'Cash flow management focuses on ensuring that the business has enough cash available at all times to meet its obligations. It includes monitoring incoming receipts and outgoing payments to manage liquidity effectively. Poor cash flow is one of the leading causes of business failure, even in profitable companies. For example, a business that issues invoices on 60-day credit terms might struggle to pay salaries or rent unless it plans its inflows and outflows properly. Good cash flow management helps avoid funding gaps, maintain smooth operations, and build financial resilience.'
    },
    {
      title: 'Compliance Reporting',
      description: 'Compliance reporting involves the timely preparation and submission of statutory documents required by regulatory authorities such as the MCA, GST Department, Income Tax Department, etc. This includes GST filings, TDS returns, income tax filings, company law compliance, and audit documentation. Failure to comply can lead to penalties, legal issues, and a damaged business reputation. For instance, a company that misses ROC filing deadlines could face heavy late fees or even strike-off proceedings, affecting credibility with banks and investors. A robust compliance system ensures the business remains legally sound.'
    },
    {
      title: 'SOP & Manuals Design',
      description: 'Designing SOPs (Standard Operating Procedures) and Manuals is crucial for defining structured workflows, ensuring quality control, and reducing process ambiguity. SOPs outline every step of a business process — from how to onboard a new employee to handling customer complaints or processing invoices. This not only improves operational efficiency but also helps in training new staff and maintaining consistency across departments. For example, a retail chain can use SOPs to ensure uniformity in store operations across locations, leading to better customer experiences and fewer errors.'
    },
    {
      title: 'Business Planning',
      description: 'Business planning is the strategic process of setting goals, identifying resources, and outlining the steps needed to grow and sustain the organization. It involves market research, competitor analysis, financial forecasting, risk management, and implementation timelines. A well-structured business plan acts as a guide for internal management and is often crucial when seeking funding or partnerships. For instance, a small enterprise planning to scale into new regions will benefit from a comprehensive business plan that includes expansion costs, expected ROI, and a risk mitigation strategy.'
    },
    {
      title: 'Financial Marketing',
      description: 'Financial marketing involves presenting the financial health and potential of a business in a compelling and transparent manner to attract investors, lenders, or strategic partners. It includes preparing investor decks, financial highlights, valuation reports, and projections that tell a story of business growth and stability. For example, a startup seeking venture capital funding will need to communicate its unit economics, customer acquisition cost, profitability timelines, and future revenue potential in a clear and convincing format. Strong financial marketing can significantly enhance a company’s ability to raise funds and build stakeholder trust.'
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
    resumeTimeoutRef.current = setTimeout(() => {
      autoScrollRef.current = setInterval(handleNext, 4000);
    }, 5000); // Resume after 5 seconds
  };
  
  useEffect(() => {
    autoScrollRef.current = setInterval(handleNext, 4000);
    return () => {
      if (autoScrollRef.current) clearInterval(autoScrollRef.current);
      if (resumeTimeoutRef.current) clearTimeout(resumeTimeoutRef.current);
    };
  }, [isTransitioning]); // Reset interval if transitioning state changes

  return (
    <>
      {/* AboutUs Top Section */}
      <section className="relative min-h-screen bg-white overflow-hidden">
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
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
                  alt="About Us"
                  className="w-full h-full object-cover opacity-70"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="relative z-10 min-h-screen max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-16">
          <div className="absolute top-4 sm:top-8 lg:top-16 left-4 sm:left-6 lg:left-0 w-full max-w-xs sm:max-w-lg lg:max-w-2xl lg:w-3/5 pr-4 sm:pr-6 lg:pr-6">
            <h1
              className={`text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 transition-all duration-700 ease-out ${
                scaleAtSpeedVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
              }`}
              style={{
                fontSize: windowWidth < 640 ? '28px' : windowWidth < 1024 ? '48px' : '66px',
                lineHeight: windowWidth < 640 ? '30px' : windowWidth < 1024 ? '48px' : '70px'
              }}
            >
              Who We Are
            </h1>
            <div
              className={`transition-all duration-700 ease-out ${
                promiseTextVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
              }`}
            >
              <p className="mt-2 sm:mt-4 lg:mt-6 text-xs sm:text-xs lg:text-sm text-gray-800 leading-relaxed font-400"
                style={{
                  fontSize: windowWidth < 640 ? '12px' : windowWidth < 1024 ? '14px' : '16px',
                  lineHeight: windowWidth < 640 ? '15px' : windowWidth < 1024 ? '18px' : '22px'
                }}
              >
                Welcome to EZYGRO where expertise meets elegance in legal, tax, audit, and compliance.
                Led by Sushma B. Salunkhe, we simplify the complex with clarity and care.
                Empowering growth with purpose, precision, and trust.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Virtual CFO Section */}
      <div className="bg-gray-50">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="bg-white rounded-3xl p-7 shadow-lg max-w-lg mx-auto">
                <img
                  src="https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
                  alt="Virtual CFO Services - Financial charts and calculator"
                  className="w-full h-64 object-cover rounded-2xl"
                />
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h1 className="text-4xl lg:text-5xl font-bold text-black mb-6">
                Virtual CFO
              </h1>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                At EZYGRO, we deliver smart, scalable solutions that empower clients to focus on their core strengths while we handle the rest. From outsourced CFO services to financial modeling, cash flow management, and compliance reporting — we take care of the numbers, so you can drive growth without the operational clutter.
              </p>
            </div>
          </div>

          {/* Our Services Section (Carousel) */}
          <section className="bg-gray-50 pt-16 pb-24 sm:pt-24 sm:pb-32">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="mb-12 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
                <h2 className="text-4xl font-bold text-gray-900">Our Services</h2>
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
                        <p className="text-gray-600 mb-8 text-justify flex-grow">{service.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      
    </>
  );
};

export default VirtualCFO;