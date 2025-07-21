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
                  src="https://res.cloudinary.com/dzlxesyxg/image/upload/v1751534821/3_xsrqe2.jpg"
                  alt="About Us"
                  className="w-full h-full object-cover opacity-"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="relative z-10 min-h-screen max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-16 pt-16 sm:pt-20 md:pt-24 lg:pt-28 pb-8 sm:pb-12 md:pb-16">
          {/* MODIFIED: Added tablet-specific responsive classes */}
          <div className="absolute top-15 left-2 sm:top-16 sm:left-8 md:top-18 md:left-12 lg:top-20 lg:left-20 w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-2xl lg:w-3/5 pr-4 sm:pr-6 md:pr-8 lg:pr-6">
            <div className="overflow-hidden pb-2">
              <h1
                className={`text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold text-gray-900 transition-all duration-1000 ease-out ${
                  scaleAtSpeedVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                }`}
                style={{
                  fontSize: windowWidth < 640 ? '26px' : windowWidth < 768 ? '32px' : windowWidth < 1024 ? '42px' : '54px',
                  lineHeight: windowWidth < 640 ? '32px' : windowWidth < 768 ? '38px' : windowWidth < 1024 ? '48px' : '52px',
                  transform: scaleAtSpeedVisible ? 'translateY(0px)' : 'translateY(32px)'
                }}
              >
                Loans, Insurance and <span style={{ color: '#4B1D92' }}>Investments</span>
              </h1>
            </div>

            <div
              className={`mt-1 sm:mt-2 md:mt-3 lg:mt-3 transition-all duration-1200 ease-out delay-300 ${
                promiseTextVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
              }`}
              style={{
                transform: promiseTextVisible ? 'translateY(0px)' : 'translateY(24px)'
              }}
            >
              <p
                className="text-xs sm:text-sm md:text-base lg:text-base text-gray-800 leading-relaxed font-400"
                style={{
                  fontSize: windowWidth < 640 ? '14px' : windowWidth < 768 ? '15px' : windowWidth < 1024 ? '17px' : '18px',
                  lineHeight: windowWidth < 640 ? '16px' : windowWidth < 768 ? '18px' : windowWidth < 1024 ? '22px' : '24px'
                }}
              >
               Access the right financial tools with our expert support in Loans, Insurance, and Investments. Whether it’s securing capital, protecting assets, or growing wealth we help you make informed, confident choices.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 items-center">
          <div>
            <h2 className="text-2xl sm:text-3xl md:text-3xl font-bold text-black">
              Your Trusted Partner in Loans, Insurance & Investments
            </h2>
          </div>
          <div>
            <p className="text-sm sm:text-base md:text-base text-gray-800 leading-relaxed">
              At EZYGRO, we are your trusted partner in loans, insurance, and investments offering smart, tailored financial solutions for every stage of life. With decades of expertise, strategic partnerships, and a customer first approach, we simplify your financial journey by ensuring quick and easy processing, transparent guidance, and secure transactions. Whether you're planning for the future, securing your present, or funding your goals, EZYGRO empowers your financial growth with clarity, trust, and innovation.
            </p>
            <div className="mt-4 font-semibold text-black flex items-center cursor-pointer">
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-8">
          <div className="mb-8 sm:mb-10 md:mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-4xl font-bold text-gray-900">Our <span className="text-purple-900">Services</span></h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {/* Card 1: Loans */}
            <div className="bg-white p-6 sm:p-8 border border-gray-200 rounded-lg h-full">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">Loans</h3>
              <p className="text-sm sm:text-base text-gray-600 mb-6 sm:mb-8">
                Whether you're dreaming of a home, expanding your business, or consolidating debt EZYGRO has you covered.
                <br />
                <span className="block h-4" />
                Loan Products We Offer:
              </p>
              <ul className="space-y-3 sm:space-y-4">
                <li className="flex items-center"><span className="text-purple-900 mr-3 flex-shrink-0">■</span><span className="text-sm sm:text-base text-gray-800">Home Loans.</span></li>
                <li className="flex items-center"><span className="text-purple-900 mr-3 flex-shrink-0">■</span><span className="text-sm sm:text-base text-gray-800">Personal Loans.</span></li>
                <li className="flex items-center"><span className="text-purple-900 mr-3 flex-shrink-0">■</span><span className="text-sm sm:text-base text-gray-800">Business Loans.</span></li>
                <li className="flex items-center"><span className="text-purple-900 mr-3 flex-shrink-0">■</span><span className="text-sm sm:text-base text-gray-800">Loan Against Property.</span></li>
                <li className="flex items-center"><span className="text-purple-900 mr-3 flex-shrink-0">■</span><span className="text-sm sm:text-base text-gray-800">Working Capital Loans.</span></li>
              </ul>
            </div>
            {/* Card 2: Insurance */}
            <div className="bg-white p-6 sm:p-8 border border-gray-200 rounded-lg h-full">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">Insurance</h3>
              <p className="text-sm sm:text-base text-gray-600 mb-6 sm:mb-8">
                Protect what matters most. Our insurance solutions offer financial security for you and your loved ones.
                <br />
                <span className="block h-10" />
                Insurance Plans We Provide:
              </p>
              <ul className="space-y-3 sm:space-y-4">
                <li className="flex items-center"><span className="text-purple-900 mr-3 flex-shrink-0">■</span><span className="text-sm sm:text-base text-gray-800">Life Insurance.</span></li>
                <li className="flex items-center"><span className="text-purple-900 mr-3 flex-shrink-0">■</span><span className="text-sm sm:text-base text-gray-800">Health Insurance.</span></li>
                <li className="flex items-center"><span className="text-purple-900 mr-3 flex-shrink-0">■</span><span className="text-sm sm:text-base text-gray-800">Term Plans.</span></li>
                <li className="flex items-center"><span className="text-purple-900 mr-3 flex-shrink-0">■</span><span className="text-sm sm:text-base text-gray-800">Motor Insurance.</span></li>
                <li className="flex items-center"><span className="text-purple-900 mr-3 flex-shrink-0">■</span><span className="text-sm sm:text-base text-gray-800">Travel & Property Insurance: Trusted Insurers, Claim Assistance, Affordable Premiums.</span></li>
              </ul>
            </div>
            {/* Card 3: Investments */}
            <div className="bg-white p-6 sm:p-8 border border-gray-200 rounded-lg h-full">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">Investments</h3>
              <p className="text-sm sm:text-base text-gray-600 mb-6 sm:mb-8">
                Grow your wealth with confidence. Our investment advisory and services are designed to help you reach your financial goals.
                <br />
                <span className="block h-4" />
                Investment Options:
              </p>
              <ul className="space-y-3 sm:space-y-4">
                <li className="flex items-center"><span className="text-purple-900 mr-3 flex-shrink-0">■</span><span className="text-sm sm:text-base text-gray-800">Mutual Funds.</span></li>
                <li className="flex items-center"><span className="text-purple-900 mr-3 flex-shrink-0">■</span><span className="text-sm sm:text-base text-gray-800">SIPs (Systematic Investment Plans).</span></li>
                <li className="flex items-center"><span className="text-purple-900 mr-3 flex-shrink-0">■</span><span className="text-sm sm:text-base text-gray-800">Fixed Deposits.</span></li>
                <li className="flex items-center"><span className="text-purple-900 mr-3 flex-shrink-0">■</span><span className="text-sm sm:text-base text-gray-800">Bonds.</span></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white pb-12 sm:pb-16">
        <div className="max-w-7xl mx-auto text-center px-4 sm:px-6 md:px-8 lg:px-8">
            <p className="text-base sm:text-lg text-gray-800">
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

export default LoansAndInsurance;