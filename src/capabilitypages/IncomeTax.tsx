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
                  src="https://res.cloudinary.com/dzlxesyxg/image/upload/v1751534368/2_smojod.jpg"
                  alt="Tax and Audit Services"
                  className="w-full h-full object-cover"
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
              Income Tax, GST and <span style={{ color: '#4B1D92' }}>Audits</span>
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
                Stay worry free with end-to-end support for Income Tax, GST, and Audits. From accurate filings to smooth assessments, we ensure your business stays compliant, efficient, and audit-ready at every step.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl font-bold text-black">
              Tax Made Simple
            </h2>
          </div>
          <div>
            <p className="text-gray-800 leading-relaxed">
              At EZYGRO, we provide expert Income Tax, GST, and Audit services to help individuals and businesses stay compliant, save money, and focus on growth. As your trusted finance and compliance partner, we serve clients across India with precision, reliability, and professionalism. From individual tax filings to corporate audits and GST compliance, our deep domain knowledge and personalized approach simplify complex processes and empower informed financial decisions. We believe in transparent advice, timely delivery, and building long-term financial health for every client we serve.
            </p>
          </div>
        </div>
      </section>
      
      <section className="bg-gray-50 py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-4xl font-bold text-gray-900">Our <span className="text-purple-900">Services</span></h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* --- Income Tax Services Card --- */}
            <div className="bg-white p-8 border border-gray-200 rounded-lg h-full">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Income Tax Services</h3>
              <p className="text-gray-600 mb-4">Stay ahead of deadlines and optimize your tax liability with our expert filing and advisory services.</p>
              <p className="text-gray-600 mb-3">We help with:</p>
              <ul className="space-y-4">
                <li className="flex items-start"><span className="text-purple-900 mr-3 mt-1 flex-shrink-0">■</span><span className="text-gray-800">ITR Filing for Individuals, Professionals, & Corporates.</span></li>
                <li className="flex items-start"><span className="text-purple-900 mr-3 mt-1 flex-shrink-0">■</span><span className="text-gray-800">Tax Planning & Advisory.</span></li>
                <li className="flex items-start"><span className="text-purple-900 mr-3 mt-1 flex-shrink-0">■</span><span className="text-gray-800">TDS Compliance & Returns.</span></li>
                <li className="flex items-start"><span className="text-purple-900 mr-3 mt-1 flex-shrink-0">■</span><span className="text-gray-800">Advance Tax Computation.</span></li>
                <li className="flex items-start"><span className="text-purple-900 mr-3 mt-1 flex-shrink-0">■</span><span className="text-gray-800">Representation before Tax Authorities.</span></li>
              </ul>
            </div>

            {/* --- GST Services Card --- */}
            <div className="bg-white p-8 border border-gray-200 rounded-lg h-full">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">GST Services</h3>
              <p className="text-gray-600 mb-4">From registration to return filing and advisory, we offer full spectrum GST support.</p>
              <p className="text-gray-600 mb-3">Our GST offerings include:</p>
              <ul className="space-y-4">
                <li className="flex items-start"><span className="text-purple-900 mr-3 mt-1 flex-shrink-0">■</span><span className="text-gray-800">GST Registration & Migration.</span></li>
                <li className="flex items-start"><span className="text-purple-900 mr-3 mt-1 flex-shrink-0">■</span><span className="text-gray-800">Monthly/Quarterly GST Return Filing (GSTR-1, GSTR-3B, GSTR-9).</span></li>
                <li className="flex items-start"><span className="text-purple-900 mr-3 mt-1 flex-shrink-0">■</span><span className="text-gray-800">GST Reconciliation & Input Credit Optimization.</span></li>
                <li className="flex items-start"><span className="text-purple-900 mr-3 mt-1 flex-shrink-0">■</span><span className="text-gray-800">E-Invoicing & E-Way Bill Compliance.</span></li>
                <li className="flex items-start"><span className="text-purple-900 mr-3 mt-1 flex-shrink-0">■</span><span className="text-gray-800">GST Audit & Departmental Representation.</span></li>
              </ul>
            </div>

            {/* --- Audit & Assurance Card --- */}
            <div className="bg-white p-8 border border-gray-200 rounded-lg h-full">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Audit & Assurance</h3>
              <p className="text-gray-600 mb-4">Our audit approach is risk-based, client-centric, and fully compliant with regulatory standards.</p>
              <p className="text-gray-600 mb-3">We conduct:</p>
              <ul className="space-y-4">
                <li className="flex items-start"><span className="text-purple-900 mr-3 mt-1 flex-shrink-0">■</span><span className="text-gray-800">Statutory Audits.</span></li>
                <li className="flex items-start"><span className="text-purple-900 mr-3 mt-1 flex-shrink-0">■</span><span className="text-gray-800">Tax Audits (u/s 44AB).</span></li>
                <li className="flex items-start"><span className="text-purple-900 mr-3 mt-1 flex-shrink-0">■</span><span className="text-gray-800">Internal Audits.</span></li>
                <li className="flex items-start"><span className="text-purple-900 mr-3 mt-1 flex-shrink-0">■</span><span className="text-gray-800">GST Audits.</span></li>
                <li className="flex items-start"><span className="text-purple-900 mr-3 mt-1 flex-shrink-0">■</span><span className="text-gray-800">Management & Process Audits.</span></li>
                <li className="flex items-start"><span className="text-purple-900 mr-3 mt-1 flex-shrink-0">■</span><span className="text-gray-800">Stock and Inventory Audits.</span></li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default IncomeTax;