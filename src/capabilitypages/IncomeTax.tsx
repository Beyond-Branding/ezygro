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
                Income Tax, GST and <span style={{ color: '#4B1D92' }}>Audits</span>
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
                Stay worry free with end-to-end support for Income Tax, GST, and Audits. From accurate filings to smooth assessments, we ensure your business stays compliant, efficient, and audit-ready at every step.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 items-center">
          <div>
            <h2 className="text-2xl sm:text-3xl md:text-3xl font-bold text-black ml-0 sm:ml-8 md:ml-16 lg:ml-12">
              Tax Made Simple
            </h2>
          </div>
          <div>
            <p className="text-sm sm:text-base md:text-base text-gray-800 leading-relaxed">
              At EZYGRO, we provide expert Income Tax, GST, and Audit services to help individuals and businesses stay compliant, save money, and focus on growth. As your trusted finance and compliance partner, we serve clients across India with precision, reliability, and professionalism. From individual tax filings to corporate audits and GST compliance, our deep domain knowledge and personalized approach simplify complex processes and empower informed financial decisions. We believe in transparent advice, timely delivery, and building long-term financial health for every client we serve.
            </p>
          </div>
        </div>
      </section>
      
      <section className="bg-gray-50 py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-8">
          <div className="mb-8 sm:mb-10 md:mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-4xl font-bold text-gray-900 ml-0 sm:ml-8 md:ml-16 lg:ml-12">Our <span className="text-purple-900">Services</span></h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            
            {/* --- Income Tax Services Card --- */}
            <div className="bg-white p-6 sm:p-8 border border-gray-200 rounded-lg h-full">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">Income Tax Services</h3>
              <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4">Stay ahead of deadlines and optimize your tax liability with our expert filing and advisory services.</p>
              <p className="text-sm sm:text-base text-gray-600 mb-2 sm:mb-3">We help with:</p>
              <ul className="space-y-3 sm:space-y-4">
                <li className="flex items-start"><span className="text-purple-900 mr-3 mt-1 flex-shrink-0">■</span><span className="text-sm sm:text-base text-gray-800">ITR Filing for Individuals, Professionals, & Corporates.</span></li>
                <li className="flex items-start"><span className="text-purple-900 mr-3 mt-1 flex-shrink-0">■</span><span className="text-sm sm:text-base text-gray-800">Tax Planning & Advisory.</span></li>
                <li className="flex items-start"><span className="text-purple-900 mr-3 mt-1 flex-shrink-0">■</span><span className="text-sm sm:text-base text-gray-800">TDS Compliance & Returns.</span></li>
                <li className="flex items-start"><span className="text-purple-900 mr-3 mt-1 flex-shrink-0">■</span><span className="text-sm sm:text-base text-gray-800">Advance Tax Computation.</span></li>
                <li className="flex items-start"><span className="text-purple-900 mr-3 mt-1 flex-shrink-0">■</span><span className="text-sm sm:text-base text-gray-800">Representation before Tax Authorities.</span></li>
              </ul>
            </div>

            {/* --- GST Services Card --- */}
            <div className="bg-white p-6 sm:p-8 border border-gray-200 rounded-lg h-full">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">GST Services</h3>
              <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4">From registration to return filing and advisory, we offer full spectrum GST support.</p>
              <p className="text-sm sm:text-base text-gray-600 mb-2 sm:mb-3">Our GST offerings include:</p>
              <ul className="space-y-3 sm:space-y-4">
                <li className="flex items-start"><span className="text-purple-900 mr-3 mt-1 flex-shrink-0">■</span><span className="text-sm sm:text-base text-gray-800">GST Registration & Migration.</span></li>
                <li className="flex items-start"><span className="text-purple-900 mr-3 mt-1 flex-shrink-0">■</span><span className="text-sm sm:text-base text-gray-800">Monthly/Quarterly GST Return Filing (GSTR-1, GSTR-3B, GSTR-9).</span></li>
                <li className="flex items-start"><span className="text-purple-900 mr-3 mt-1 flex-shrink-0">■</span><span className="text-sm sm:text-base text-gray-800">GST Reconciliation & Input Credit Optimization.</span></li>
                <li className="flex items-start"><span className="text-purple-900 mr-3 mt-1 flex-shrink-0">■</span><span className="text-sm sm:text-base text-gray-800">E-Invoicing & E-Way Bill Compliance.</span></li>
                <li className="flex items-start"><span className="text-purple-900 mr-3 mt-1 flex-shrink-0">■</span><span className="text-sm sm:text-base text-gray-800">GST Audit & Departmental Representation.</span></li>
              </ul>
            </div>

            {/* --- Audit & Assurance Card --- */}
            <div className="bg-white p-6 sm:p-8 border border-gray-200 rounded-lg h-full">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">Audit & Assurance</h3>
              <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4">Our audit approach is risk-based, client-centric, and fully compliant with regulatory standards.</p>
              <p className="text-sm sm:text-base text-gray-600 mb-2 sm:mb-3">We conduct:</p>
              <ul className="space-y-3 sm:space-y-4">
                <li className="flex items-start"><span className="text-purple-900 mr-3 mt-1 flex-shrink-0">■</span><span className="text-sm sm:text-base text-gray-800">Statutory Audits.</span></li>
                <li className="flex items-start"><span className="text-purple-900 mr-3 mt-1 flex-shrink-0">■</span><span className="text-sm sm:text-base text-gray-800">Tax Audits (u/s 44AB).</span></li>
                <li className="flex items-start"><span className="text-purple-900 mr-3 mt-1 flex-shrink-0">■</span><span className="text-sm sm:text-base text-gray-800">Internal Audits.</span></li>
                <li className="flex items-start"><span className="text-purple-900 mr-3 mt-1 flex-shrink-0">■</span><span className="text-sm sm:text-base text-gray-800">GST Audits.</span></li>
                <li className="flex items-start"><span className="text-purple-900 mr-3 mt-1 flex-shrink-0">■</span><span className="text-sm sm:text-base text-gray-800">Management & Process Audits.</span></li>
                <li className="flex items-start"><span className="text-purple-900 mr-3 mt-1 flex-shrink-0">■</span><span className="text-sm sm:text-base text-gray-800">Stock and Inventory Audits.</span></li>
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

export default IncomeTax;