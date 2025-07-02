import React, { useState, useEffect } from 'react';

const LoansAndInsurance = () => {
  // State and Effects for animations and responsive design
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
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
                  alt="About Us"
                  className="w-full h-full object-cover opacity-70"
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
              Loans, Insurance and Investments
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
               Access the right financial tools with our expert support in Loans, Insurance, and Investments. Whether it’s securing capital, protecting assets, or growing wealth we help you make informed, confident choices.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl font-bold text-black">
              Your Trusted Partner in Loans, Insurance & Investments
            </h2>
          </div>
          <div>
            <p className="text-gray-800 leading-relaxed">
              At EZYGRO, we are your trusted partner in loans, insurance, and investments offering smart, tailored financial solutions for every stage of life. With decades of expertise, strategic partnerships, and a customer-first approach, we simplify your financial journey by ensuring quick and easy processing, transparent guidance, and secure transactions. Whether you're planning for the future, securing your present, or funding your goals, EZYGRO empowers your financial growth with clarity, trust, and innovation.
            </p>
            <div className="mt-4 font-semibold text-black flex items-center cursor-pointer">
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-4xl font-bold text-gray-900">Our Services</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Card 1: Loans */}
            <div className="bg-white p-8 border border-gray-200 rounded-lg h-full">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Loans</h3>
              <p className="text-gray-600 mb-8">
                Whether you're dreaming of a home, expanding your business, or consolidating debt—EZYGRO has you covered.
                <br></br>Loan Products We Offer:
              </p>
              <ul className="space-y-4">
                <li className="flex items-center"><span className="text-purple-900 mr-3 flex-shrink-0">■</span><span className="text-gray-800">Home Loans</span></li>
                <li className="flex items-center"><span className="text-purple-900 mr-3 flex-shrink-0">■</span><span className="text-gray-800">Personal Loans</span></li>
                <li className="flex items-center"><span className="text-purple-900 mr-3 flex-shrink-0">■</span><span className="text-gray-800">Business Loans</span></li>
                <li className="flex items-center"><span className="text-purple-900 mr-3 flex-shrink-0">■</span><span className="text-gray-800">Loan Against Property</span></li>
                <li className="flex items-center"><span className="text-purple-900 mr-3 flex-shrink-0">■</span><span className="text-gray-800">Working Capital Loans</span></li>
              </ul>
            </div>
            {/* Card 2: Insurance */}
            <div className="bg-white p-8 border border-gray-200 rounded-lg h-full">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Insurance</h3>
              <p className="text-gray-600 mb-8">
                Protect what matters most. Our insurance solutions offer financial security for you and your loved ones.
                <br></br>Insurance Plans We Provide:
              </p>
              <ul className="space-y-4">
                <li className="flex items-center"><span className="text-purple-900 mr-3 flex-shrink-0">■</span><span className="text-gray-800">Life Insurance</span></li>
                <li className="flex items-center"><span className="text-purple-900 mr-3 flex-shrink-0">■</span><span className="text-gray-800">Health Insurance</span></li>
                <li className="flex items-center"><span className="text-purple-900 mr-3 flex-shrink-0">■</span><span className="text-gray-800">Term Plans</span></li>
                <li className="flex items-center"><span className="text-purple-900 mr-3 flex-shrink-0">■</span><span className="text-gray-800">Motor Insurance</span></li>
                <li className="flex items-center"><span className="text-purple-900 mr-3 flex-shrink-0">■</span><span className="text-gray-800">Travel & Property Insurance: Trusted Insurers, Claim Assistance, Affordable Premiums</span></li>
              </ul>
            </div>
            {/* Card 3: Investments */}
            <div className="bg-white p-8 border border-gray-200 rounded-lg h-full">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Investments</h3>
              <p className="text-gray-600 mb-8">
                Grow your wealth with confidence. Our investment advisory and services are designed to help you reach your financial goals.<br></br>Investment Options:
              </p>
              <ul className="space-y-4">
                <li className="flex items-center"><span className="text-purple-900 mr-3 flex-shrink-0">■</span><span className="text-gray-800">Mutual Funds</span></li>
                <li className="flex items-center"><span className="text-purple-900 mr-3 flex-shrink-0">■</span><span className="text-gray-800">SIPs (Systematic Investment Plans)</span></li>
                <li className="flex items-center"><span className="text-purple-900 mr-3 flex-shrink-0">■</span><span className="text-gray-800">Fixed Deposits</span></li>
                <li className="flex items-center"><span className="text-purple-900 mr-3 flex-shrink-0">■</span><span className="text-gray-800">Bonds</span></li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default LoansAndInsurance;