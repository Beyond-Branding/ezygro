
import React, { useState, useEffect, useRef } from 'react';


const VirtualCFO = () => {
  // --- Our Services Carousel State (single source of truth) ---
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
  const [serviceIndex, setServiceIndex] = useState(0);
  const autoScrollRef = useRef<number | null>(null);
  const resumeTimeoutRef = useRef<number | null>(null);

  // Carousel auto-advance logic with pause on user interaction
  useEffect(() => {
    // Clear any previous interval
    if (autoScrollRef.current) clearInterval(autoScrollRef.current);
    autoScrollRef.current = setInterval(() => {
      setServiceIndex((prev) => (prev + 1) % services.length);
    }, 4000);
    return () => {
      if (autoScrollRef.current) clearInterval(autoScrollRef.current);
      if (resumeTimeoutRef.current) clearTimeout(resumeTimeoutRef.current);
    };
  }, [services.length]);

  // Helper to pause auto-scroll and resume after delay
  const pauseAutoScroll = () => {
    if (autoScrollRef.current) clearInterval(autoScrollRef.current);
    if (resumeTimeoutRef.current) clearTimeout(resumeTimeoutRef.current);
    resumeTimeoutRef.current = setTimeout(() => {
      autoScrollRef.current = setInterval(() => {
        setServiceIndex((prev) => (prev + 1) % services.length);
      }, 4000);
    }, 5000); // Resume after 5 seconds
  };

  // AboutUs top section logic
  const [scaleAtSpeedVisible, setScaleAtSpeedVisible] = useState(false);
  const [promiseTextVisible, setPromiseTextVisible] = useState(false);
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1024);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const scaleTimer = setTimeout(() => {
      setScaleAtSpeedVisible(true);
    }, 200);
    const promiseTimer = setTimeout(() => {
      setPromiseTextVisible(true);
    }, 400);
    return () => {
      clearTimeout(scaleTimer);
      clearTimeout(promiseTimer);
    };
  }, []);

  // (Removed duplicate services and serviceIndex declarations)

  return (
    <>
      {/* AboutUs Top Section */}
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
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
                  alt="About Us"
                  className="w-full h-full object-cover opacity-70"
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

      {/* Existing Virtual CFO Section */}
      <div className="min-h-screen bg-gray-50">
      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Image */}
          <div className="order-2 lg:order-1">
            <div className="bg-white rounded-3xl p-7 shadow-lg max-w-lg mx-auto">
              <img
                src="https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
                alt="Virtual CFO Services - Financial charts and calculator"
                className="w-full h-64 object-cover rounded-2xl"
              />
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="order-1 lg:order-2">
            <h1 className="text-4xl lg:text-5xl font-bold text-black mb-6">
              Virtual CFO
            </h1>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              At EZYGRO, we deliver smart, scalable solutions that empower clients to focus on their core strengths while we handle the rest. From outsourced CFO services to financial modeling, cash flow management, and compliance reporting — we take care of the numbers, so you can drive growth without the operational clutter.
            </p>
          </div>
        </div>

        {/* Our Services Section (carousel of 3 cards at a time) */}
        <section className="bg-gray-50 py-16 sm:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-12 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
              <h2 className="text-4xl font-bold text-gray-900">Our Services</h2>
              <div className="flex gap-4 mt-4 sm:mt-0">
                <button
                  onClick={() => {
                    setServiceIndex((prev) => (prev - 1 + services.length) % services.length);
                    pauseAutoScroll();
                  }}
                  className="w-12 h-12 flex items-center justify-center rounded-full border border-gray-400 text-2xl text-gray-800 hover:bg-gray-100 transition"
                  aria-label="Previous"
                >
                  <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18l-6-6 6-6"/></svg>
                </button>
                <button
                  onClick={() => {
                    setServiceIndex((prev) => (prev + 1) % services.length);
                    pauseAutoScroll();
                  }}
                  className="w-12 h-12 flex items-center justify-center rounded-full border border-gray-400 text-2xl text-gray-800 hover:bg-gray-100 transition"
                  aria-label="Next"
                >
                  <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 6l6 6-6 6"/></svg>
                </button>
              </div>
            </div>
            {/* Animated Carousel (no card style change) */}
            <div className="overflow-hidden w-full">
              <div
                className="flex gap-8 transition-transform duration-500 ease-in-out"
                style={{
                  width: `${services.length * (100/3)}%`,
                  transform: `translateX(-${serviceIndex * (100 / services.length)}%)`,
                }}
              >
                {services.map((service) => (
                  <div
                    key={service.title}
                    className="bg-white p-8 border border-gray-200 rounded-lg h-full"
                    style={{ width: 'calc(100% / 3)' }}
                  >
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                    <p className="text-gray-600 mb-8">{service.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid - 4 icons in first row, 3 in second row (desktop), all centered */}
        <div className="mt-20">
          {/* First row: 4 icons */}
          <div className="hidden lg:flex justify-center items-stretch gap-x-8 max-w-5xl mx-auto">
            {/* MIS */}
            <div className="flex items-center w-[200px] h-[72px] group">
              <div className="rounded-xl bg-white flex items-center justify-center mr-5 w-16 h-16 border border-gray-200">
                <svg className="w-12 h-12 text-black transition-transform duration-500 group-hover:scale-x-[-1]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-[1.15rem] font-semibold text-gray-800 text-left leading-tight">MIS</h3>
            </div>
            {/* Budgeting */}
            <div className="flex items-center w-[200px] h-[72px] group">
              <div className="rounded-xl bg-white flex items-center justify-center mr-5 w-16 h-16 border border-gray-200">
                <svg className="w-12 h-12 text-black transition-transform duration-500 group-hover:scale-x-[-1]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
              <h3 className="text-[1.15rem] font-semibold text-gray-800 text-left leading-tight">Budgeting</h3>
            </div>
            {/* Cash Flow Management */}
            <div className="flex items-center w-[200px] h-[72px] group">
              <div className="rounded-xl bg-white flex items-center justify-center mr-5 w-16 h-16 border border-gray-200">
                <svg className="w-12 h-12 text-black transition-transform duration-500 group-hover:scale-x-[-1]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="text-[1.15rem] font-semibold text-gray-800 text-left leading-tight">Cash Flow Management</h3>
            </div>
            {/* Compliance Reporting */}
            <div className="flex items-center w-[200px] h-[72px] group">
              <div className="rounded-xl bg-white flex items-center justify-center mr-5 w-16 h-16 border border-gray-200">
                <svg className="w-12 h-12 text-black transition-transform duration-500 group-hover:scale-x-[-1]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-[1.15rem] font-semibold text-gray-800 text-left leading-tight">Compliance Reporting</h3>
            </div>
          </div>
          {/* Second row: 3 icons centered */}
          <div className="hidden lg:flex justify-center items-stretch gap-x-8 mt-8 max-w-3xl mx-auto">
            {/* SOP & Manuals Design */}
            <div className="flex items-center w-[200px] h-[72px] group">
              <div className="rounded-xl bg-white flex items-center justify-center mr-5 w-16 h-16 border border-gray-200">
                <svg className="w-12 h-12 text-black transition-transform duration-500 group-hover:scale-x-[-1]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-[1.15rem] font-semibold text-gray-800 text-left leading-tight">SOP & Manuals Design</h3>
            </div>
            {/* Business Planning */}
            <div className="flex items-center w-[200px] h-[72px] group">
              <div className="rounded-xl bg-white flex items-center justify-center mr-5 w-16 h-16 border border-gray-200">
                <svg className="w-12 h-12 text-black transition-transform duration-500 group-hover:scale-x-[-1]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-[1.15rem] font-semibold text-gray-800 text-left leading-tight">Business Planning</h3>
            </div>
            {/* Financial Modeling */}
            <div className="flex items-center w-[200px] h-[72px] group">
              <div className="rounded-xl bg-white flex items-center justify-center mr-5 w-16 h-16 border border-gray-200">
                <svg className="w-12 h-12 text-black transition-transform duration-500 group-hover:scale-x-[-1]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-[1.15rem] font-semibold text-gray-800 text-left leading-tight">Financial Modeling</h3>
            </div>
          </div>
          {/* Mobile/Tablet: Stack all icons in two rows */}
          <div className="flex flex-wrap justify-center items-stretch gap-x-8 gap-y-10 lg:hidden">
            {/* MIS */}
            <div className="flex items-center w-[200px] h-[72px] group">
              <div className="rounded-xl bg-white flex items-center justify-center mr-5 w-16 h-16 border border-gray-200">
                <svg className="w-12 h-12 text-black transition-transform duration-500 group-hover:scale-x-[-1]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-[1.15rem] font-semibold text-gray-800 text-left leading-tight">MIS</h3>
            </div>
            {/* Budgeting */}
            <div className="flex items-center w-[200px] h-[72px] group">
              <div className="rounded-xl bg-white flex items-center justify-center mr-5 w-16 h-16 border border-gray-200">
                <svg className="w-12 h-12 text-black transition-transform duration-500 group-hover:scale-x-[-1]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
              <h3 className="text-[1.15rem] font-semibold text-gray-800 text-left leading-tight">Budgeting</h3>
            </div>
            {/* Cash Flow Management */}
            <div className="flex items-center w-[200px] h-[72px] group">
              <div className="rounded-xl bg-white flex items-center justify-center mr-5 w-16 h-16 border border-gray-200">
                <svg className="w-12 h-12 text-black transition-transform duration-500 group-hover:scale-x-[-1]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="text-[1.15rem] font-semibold text-gray-800 text-left leading-tight">Cash Flow Management</h3>
            </div>
            {/* Compliance Reporting */}
            <div className="flex items-center w-[200px] h-[72px] group">
              <div className="rounded-xl bg-white flex items-center justify-center mr-5 w-16 h-16 border border-gray-200">
                <svg className="w-12 h-12 text-black transition-transform duration-500 group-hover:scale-x-[-1]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-[1.15rem] font-semibold text-gray-800 text-left leading-tight">Compliance Reporting</h3>
            </div>
            {/* SOP & Manuals Design */}
            <div className="flex items-center w-[200px] h-[72px] group">
              <div className="rounded-xl bg-white flex items-center justify-center mr-5 w-16 h-16 border border-gray-200">
                <svg className="w-12 h-12 text-black transition-transform duration-500 group-hover:scale-x-[-1]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-[1.15rem] font-semibold text-gray-800 text-left leading-tight">SOP & Manuals Design</h3>
            </div>
            {/* Business Planning */}
            <div className="flex items-center w-[200px] h-[72px] group">
              <div className="rounded-xl bg-white flex items-center justify-center mr-5 w-16 h-16 border border-gray-200">
                <svg className="w-12 h-12 text-black transition-transform duration-500 group-hover:scale-x-[-1]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-[1.15rem] font-semibold text-gray-800 text-left leading-tight">Business Planning</h3>
            </div>
            {/* Financial Modeling */}
            <div className="flex items-center w-[200px] h-[72px] group">
              <div className="rounded-xl bg-white flex items-center justify-center mr-5 w-16 h-16 border border-gray-200">
                <svg className="w-12 h-12 text-black transition-transform duration-500 group-hover:scale-x-[-1]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-[1.15rem] font-semibold text-gray-800 text-left leading-tight">Financial Modeling</h3>
            </div>
          </div>
        </div>
      </div>
    </div>

    </>
  );
};

export default VirtualCFO;