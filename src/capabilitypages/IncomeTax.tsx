import { useState, useEffect } from 'react';

const IncomeTax = () => {
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
                  src="https://res.cloudinary.com/dzlxesyxg/image/upload/v1751534368/2_smojod.jpg"
                  alt="Tax and Audit Services"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="relative z-10 min-h-screen max-w-7xl mx-auto px-2 sm:px-4 md:px-6 lg:px-16 pt-20 sm:pt-24 md:pt-28 lg:pt-32 pb-8 sm:pb-12 md:pb-16">
          {/* MODIFIED: Enhanced responsive design for all screen sizes with proper header spacing */}
          <div className="absolute top-16 left-1 sm:top-20 sm:left-4 md:top-22 md:left-8 lg:top-24 lg:left-16 xl:left-20 w-full max-w-[95%] sm:max-w-sm md:max-w-lg lg:max-w-2xl xl:max-w-3xl lg:w-3/5 pr-2 sm:pr-4 md:pr-6 lg:pr-8">
            <div className="overflow-hidden pb-2">
              <h1
                className={`text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-semibold text-gray-900 transition-all duration-1000 ease-out leading-tight ${
                  scaleAtSpeedVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                }`}
                style={{
                  fontSize: windowWidth < 480 ? '20px' : windowWidth < 640 ? '24px' : windowWidth < 768 ? '28px' : windowWidth < 1024 ? '36px' : windowWidth < 1280 ? '42px' : '48px',
                  lineHeight: windowWidth < 480 ? '24px' : windowWidth < 640 ? '28px' : windowWidth < 768 ? '32px' : windowWidth < 1024 ? '40px' : windowWidth < 1280 ? '46px' : '52px',
                  transform: scaleAtSpeedVisible ? 'translateY(0px)' : 'translateY(32px)'
                }}
              >
                Income Tax, GST and <span style={{ color: '#4B1D92' }}>Audits</span>
              </h1>
            </div>

            <div
              className={`mt-2 sm:mt-3 md:mt-4 lg:mt-5 transition-all duration-1200 ease-out delay-300 ${
                promiseTextVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
              }`}
              style={{
                transform: promiseTextVisible ? 'translateY(0px)' : 'translateY(24px)'
              }}
            >
              <p
                className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-800 leading-relaxed font-400"
                style={{
                  fontSize: windowWidth < 480 ? '12px' : windowWidth < 640 ? '13px' : windowWidth < 768 ? '14px' : windowWidth < 1024 ? '16px' : windowWidth < 1280 ? '17px' : '18px',
                  lineHeight: windowWidth < 480 ? '16px' : windowWidth < 640 ? '18px' : windowWidth < 768 ? '20px' : windowWidth < 1024 ? '24px' : windowWidth < 1280 ? '26px' : '28px'
                }}
              >
                Stay worry free with end-to-end support for Income Tax, GST, and Audits. From accurate filings to smooth assessments, we ensure your business stays compliant, efficient, and audit-ready at every step.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-8 sm:py-12 md:py-16 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 lg:gap-10 items-center">
          <div>
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-black leading-tight">
              Tax Made Simple
            </h2>
          </div>
          <div>
            <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-800 leading-relaxed">
              At EZYGRO, we provide expert Income Tax, GST, and Audit services to help individuals and businesses stay compliant, save money, and focus on growth. As your trusted finance and compliance partner, we serve clients across India with precision, reliability, and professionalism. From individual tax filings to corporate audits and GST compliance, our deep domain knowledge and personalized approach simplify complex processes and empower informed financial decisions. We believe in transparent advice, timely delivery, and building long-term financial health for every client we serve.
            </p>
          </div>
        </div>
      </section>
      
      <section className="bg-gray-50 py-8 sm:py-12 md:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
          <div className="mb-6 sm:mb-8 md:mb-10 lg:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">Our <span className="text-purple-900">Services</span></h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            
            {/* --- Income Tax Services Card --- */}
            <div className="bg-white p-4 sm:p-6 md:p-8 border border-gray-200 rounded-lg h-full">
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-2 sm:mb-3 md:mb-4">Income Tax Services</h3>
              <p className="text-xs sm:text-sm md:text-base text-gray-600 mb-2 sm:mb-3 md:mb-4">Stay ahead of deadlines and optimize your tax liability with our expert filing and advisory services.</p>
              <p className="text-xs sm:text-sm md:text-base text-gray-600 mb-2 sm:mb-3">We help with:</p>
              <ul className="space-y-2 sm:space-y-3 md:space-y-4">
                <li className="flex items-start"><span className="text-purple-900 mr-2 sm:mr-3 mt-1 flex-shrink-0">■</span><span className="text-xs sm:text-sm md:text-base text-gray-800">ITR Filing for Individuals, Professionals, & Corporates.</span></li>
                <li className="flex items-start"><span className="text-purple-900 mr-2 sm:mr-3 mt-1 flex-shrink-0">■</span><span className="text-xs sm:text-sm md:text-base text-gray-800">Tax Planning & Advisory.</span></li>
                <li className="flex items-start"><span className="text-purple-900 mr-2 sm:mr-3 mt-1 flex-shrink-0">■</span><span className="text-xs sm:text-sm md:text-base text-gray-800">TDS Compliance & Returns.</span></li>
                <li className="flex items-start"><span className="text-purple-900 mr-2 sm:mr-3 mt-1 flex-shrink-0">■</span><span className="text-xs sm:text-sm md:text-base text-gray-800">Advance Tax Computation.</span></li>
                <li className="flex items-start"><span className="text-purple-900 mr-2 sm:mr-3 mt-1 flex-shrink-0">■</span><span className="text-xs sm:text-sm md:text-base text-gray-800">Representation before Tax Authorities.</span></li>
              </ul>
            </div>

            {/* --- GST Services Card --- */}
            <div className="bg-white p-4 sm:p-6 md:p-8 border border-gray-200 rounded-lg h-full">
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-2 sm:mb-3 md:mb-4">GST Services</h3>
              <p className="text-xs sm:text-sm md:text-base text-gray-600 mb-2 sm:mb-3 md:mb-4">From registration to return filing and advisory, we offer full spectrum GST support.</p>
              <p className="text-xs sm:text-sm md:text-base text-gray-600 mb-2 sm:mb-3">Our GST offerings include:</p>
              <ul className="space-y-2 sm:space-y-3 md:space-y-4">
                <li className="flex items-start"><span className="text-purple-900 mr-2 sm:mr-3 mt-1 flex-shrink-0">■</span><span className="text-xs sm:text-sm md:text-base text-gray-800">GST Registration & Migration.</span></li>
                <li className="flex items-start"><span className="text-purple-900 mr-2 sm:mr-3 mt-1 flex-shrink-0">■</span><span className="text-xs sm:text-sm md:text-base text-gray-800">Monthly/Quarterly GST Return Filing (GSTR-1, GSTR-3B, GSTR-9).</span></li>
                <li className="flex items-start"><span className="text-purple-900 mr-2 sm:mr-3 mt-1 flex-shrink-0">■</span><span className="text-xs sm:text-sm md:text-base text-gray-800">GST Reconciliation & Input Credit Optimization.</span></li>
                <li className="flex items-start"><span className="text-purple-900 mr-2 sm:mr-3 mt-1 flex-shrink-0">■</span><span className="text-xs sm:text-sm md:text-base text-gray-800">E-Invoicing & E-Way Bill Compliance.</span></li>
                <li className="flex items-start"><span className="text-purple-900 mr-2 sm:mr-3 mt-1 flex-shrink-0">■</span><span className="text-xs sm:text-sm md:text-base text-gray-800">GST Audit & Departmental Representation.</span></li>
              </ul>
            </div>

            {/* --- Audit & Assurance Card --- */}
            <div className="bg-white p-4 sm:p-6 md:p-8 border border-gray-200 rounded-lg h-full">
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-2 sm:mb-3 md:mb-4">Audit & Assurance</h3>
              <p className="text-xs sm:text-sm md:text-base text-gray-600 mb-2 sm:mb-3 md:mb-4">Our audit approach is risk-based, client-centric, and fully compliant with regulatory standards.</p>
              <p className="text-xs sm:text-sm md:text-base text-gray-600 mb-2 sm:mb-3">We conduct:</p>
              <ul className="space-y-2 sm:space-y-3 md:space-y-4">
                <li className="flex items-start"><span className="text-purple-900 mr-2 sm:mr-3 mt-1 flex-shrink-0">■</span><span className="text-xs sm:text-sm md:text-base text-gray-800">Statutory Audits.</span></li>
                <li className="flex items-start"><span className="text-purple-900 mr-2 sm:mr-3 mt-1 flex-shrink-0">■</span><span className="text-xs sm:text-sm md:text-base text-gray-800">Tax Audits (u/s 44AB).</span></li>
                <li className="flex items-start"><span className="text-purple-900 mr-2 sm:mr-3 mt-1 flex-shrink-0">■</span><span className="text-xs sm:text-sm md:text-base text-gray-800">Internal Audits.</span></li>
                <li className="flex items-start"><span className="text-purple-900 mr-2 sm:mr-3 mt-1 flex-shrink-0">■</span><span className="text-xs sm:text-sm md:text-base text-gray-800">GST Audits.</span></li>
                <li className="flex items-start"><span className="text-purple-900 mr-2 sm:mr-3 mt-1 flex-shrink-0">■</span><span className="text-xs sm:text-sm md:text-base text-gray-800">Management & Process Audits.</span></li>
                <li className="flex items-start"><span className="text-purple-900 mr-2 sm:mr-3 mt-1 flex-shrink-0">■</span><span className="text-xs sm:text-sm md:text-base text-gray-800">Stock and Inventory Audits.</span></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white pb-8 sm:pb-12 md:pb-16 lg:pb-20">
        <div className="max-w-7xl mx-auto text-center px-4 sm:px-6 md:px-8 lg:px-12">
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-800">
                For any queries, please contact us at:{" "}
                <a 
                    href="tel:+919372963906" 
                    className="text-purple-900 font-bold hover:underline transition-colors duration-200"
                >
                    +91 9372963906
                </a>
            </p>
        </div>
      </section>
    </>
  );
};

export default IncomeTax;