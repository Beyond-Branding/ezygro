import React, { useState, useEffect } from 'react';

function VirtualCFO() {
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

  return (
    <>
      {/* First Page Section */}
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
              <p
                className="mt-2 sm:mt-4 lg:mt-6 text-xs sm:text-xs lg:text-sm text-gray-800 leading-relaxed font-400"
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

      {/* Original Virtual CFO Content */}
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="bg-white rounded-3xl p-8 shadow-lg">
                <img
                  src="https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
                  alt="Virtual CFO Services - Financial charts and calculator"
                  className="w-full h-80 object-cover rounded-2xl"
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

          {/* Services Grid */}
        <div className="mt-20">
          {/* First row: 4 icons */}
          <div className="flex flex-wrap justify-between gap-x-8 gap-y-10 mb-10">
            {/* MIS */}
            <div className="flex items-center min-w-[220px] max-w-[260px] h-[72px] group">
              <div className="rounded-xl bg-white flex items-center justify-center mr-3 w-16 h-16 border border-gray-200">
                <svg className="w-12 h-12 text-black transition-transform duration-500 group-hover:scale-x-[-1]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-[1.15rem] font-semibold text-gray-800 text-left leading-tight">MIS</h3>
            </div>
            {/* Budgeting */}
            <div className="flex items-center min-w-[220px] max-w-[260px] h-[72px] group">
              <div className="rounded-xl bg-white flex items-center justify-center mr-3 w-16 h-16 border border-gray-200">
                <svg className="w-12 h-12 text-black transition-transform duration-500 group-hover:scale-x-[-1]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
              <h3 className="text-[1.15rem] font-semibold text-gray-800 text-left leading-tight">Budgeting</h3>
            </div>
            {/* Cash Flow Management */}
            <div className="flex items-center min-w-[220px] max-w-[260px] h-[72px] group">
              <div className="rounded-xl bg-white flex items-center justify-center mr-5 w-16 h-16 border border-gray-200">
                <svg className="w-12 h-12 text-black transition-transform duration-500 group-hover:scale-x-[-1]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="text-[1.15rem] font-semibold text-gray-800 text-left leading-tight">Cash Flow Management</h3>
            </div>
            {/* Compliance Reporting */}
            <div className="flex items-center min-w-[220px] max-w-[260px] h-[72px] group">
              <div className="rounded-xl bg-white flex items-center justify-center mr-5 w-16 h-16 border border-gray-200">
                <svg className="w-12 h-12 text-black transition-transform duration-500 group-hover:scale-x-[-1]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-[1.15rem] font-semibold text-gray-800 text-left leading-tight">Compliance Reporting</h3>
            </div>
          </div>
          {/* Second row: 3 icons centered */}
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-10">
            {/* SOP & Manuals Design */}
            <div className="flex items-center min-w-[220px] max-w-[260px] h-[72px] group">
              <div className="rounded-xl bg-white flex items-center justify-center mr-5 w-16 h-16 border border-gray-200">
                <svg className="w-12 h-12 text-black transition-transform duration-500 group-hover:scale-x-[-1]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-[1.15rem] font-semibold text-gray-800 text-left leading-tight">SOP & Manuals Design</h3>
            </div>
            {/* Business Planning */}
            <div className="flex items-center min-w-[220px] max-w-[260px] h-[72px] group">
              <div className="rounded-xl bg-white flex items-center justify-center mr-5 w-16 h-16 border border-gray-200">
                <svg className="w-12 h-12 text-black transition-transform duration-500 group-hover:scale-x-[-1]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-[1.15rem] font-semibold text-gray-800 text-left leading-tight">Business Planning</h3>
            </div>
            {/* Financial Modeling */}
            <div className="flex items-center min-w-[220px] max-w-[260px] h-[72px] group">
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
