import { useState, useEffect } from 'react';

const InnovativeDashboards = () => {
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
                  src="https://res.cloudinary.com/dzlxesyxg/image/upload/v1752587840/dashboard_gw6bbd.jpg"
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
                Innovative <span style={{ color: '#4B1D92' }}>Dashboards</span>
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
                Make smarter decisions, faster with Innovative Dashboards that turn complex data into clear, visual insights. Track performance, monitor Key Performing Indicators, and stay in control with real time analytics tailored to your business.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 items-center">
          <div>
            <h2 className="text-2xl sm:text-3xl md:text-3xl font-bold text-black">
              Visualize Success
            </h2>
          </div>
          <div>
            <p className="text-sm sm:text-base md:text-base text-gray-800 leading-relaxed">
              At EZYGRO, we turn data into decisions fast. Our custom built, interactive dashboards are designed to align with your unique business goals, seamlessly integrating your data sources to deliver real time insights. With secure, scalable solutions and AI-powered analytics, we help you move beyond just reporting towards predictive and prescriptive outcomes that drive smarter, faster decision making for growing businesses.
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
            <div className="bg-white p-6 sm:p-8 border border-gray-200 rounded-lg h-full">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">Sales & Marketing Dashboards</h3>
              <p className="text-sm sm:text-base text-gray-600 mb-6 sm:mb-8">
                Who it's for: Marketing Managers, Sales Heads, Growth Teams.
                <br />
                <span className="block h-4" />
                Purpose: Optimize sales processes and measure marketing effectiveness.
                <br />
                <span className="block h-4" />
                <span className="font-semibold">Key Features:</span>
              </p>
              <ul className="space-y-3 sm:space-y-4">
                <li className="flex items-start"><span className="text-purple-900 mr-3 mt-1 flex-shrink-0">■</span><span className="text-sm sm:text-base text-gray-800">Lead Tracking: Visual pipeline of leads by stage, source, and owner.</span></li>
                <li className="flex items-start"><span className="text-purple-900 mr-3 mt-1 flex-shrink-0">■</span><span className="text-sm sm:text-base text-gray-800">Conversion Metrics: Analyze conversion rates across campaigns and channels.</span></li>
                <li className="flex items-start"><span className="text-purple-900 mr-3 mt-1 flex-shrink-0">■</span><span className="text-sm sm:text-base text-gray-800">Campaign Performance: Measure ROI, CTR, impressions, and engagement.</span></li>
                <li className="flex items-start"><span className="text-purple-900 mr-3 mt-1 flex-shrink-0">■</span><span className="text-sm sm:text-base text-gray-800">Customer Journey Mapping: Track user behavior from first touchpoint to sale.</span></li>
                <li className="flex items-start"><span className="text-purple-900 mr-3 mt-1 flex-shrink-0">■</span><span className="text-sm sm:text-base text-gray-800">Sales Forecasting: Use historical data to predict future performance.</span></li>
                <li className="flex items-start"><span className="text-purple-900 mr-3 mt-1 flex-shrink-0">■</span><span className="text-sm sm:text-base text-gray-800">Segmentation & Targeting: Visualize demographics, geographics, and user profiles.</span></li>
              </ul>
            </div>
            <div className="bg-white p-6 sm:p-8 border border-gray-200 rounded-lg h-full">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">Operational <br />Dashboards</h3>
              <p className="text-sm sm:text-base text-gray-600 mb-6 sm:mb-8">
                Who it's for: Operations Heads, Department Managers, Project Leads.
                <br />
                <span className="block h-4" />
                Purpose: Enhance organizational efficiency and decision-making.
                <br />
                <span className="block h-4" />
                <span className="font-semibold">Key Features:</span>
              </p>
              <ul className="space-y-3 sm:space-y-4">
                <li className="flex items-start"><span className="text-purple-900 mr-3 mt-1 flex-shrink-0">■</span><span className="text-sm sm:text-base text-gray-800">Real-Time Key Performing Indicator Monitoring: Track productivity, turnaround time, and output across teams.</span></li>
                <li className="flex items-start"><span className="text-purple-900 mr-3 mt-1 flex-shrink-0">■</span><span className="text-sm sm:text-base text-gray-800">Performance Analytics: Identify bottlenecks and areas of improvement.</span></li>
                <li className="flex items-start"><span className="text-purple-900 mr-3 mt-1 flex-shrink-0">■</span><span className="text-sm sm:text-base text-gray-800">Resource Utilization: View how manpower and assets are allocated and used.</span></li>
                <li className="flex items-start"><span className="text-purple-900 mr-3 mt-1 flex-shrink-0">■</span><span className="text-sm sm:text-base text-gray-800">Project Progress Tracking: Monitor milestones, deliverables, and deadlines.</span></li>
                <li className="flex items-start"><span className="text-purple-900 mr-3 mt-1 flex-shrink-0">■</span><span className="text-sm sm:text-base text-gray-800">Custom Alerts & Notifications: Set triggers for abnormal performance or delays.</span></li>
                <li className="flex items-start"><span className="text-purple-900 mr-3 mt-1 flex-shrink-0">■</span><span className="text-sm sm:text-base text-gray-800">Cross-Departmental Insights: Unified view of performance across HR, logistics, IT, etc.</span></li>
              </ul>
            </div>
            <div className="bg-white p-6 sm:p-8 border border-gray-200 rounded-lg h-full">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">Financial <br />Dashboards</h3>
              <p className="text-sm sm:text-base text-gray-600 mb-6 sm:mb-8">
                Who it's for: CFOs, Finance Managers, Accountants, Startup Founders.
                <br />
                <span className="block h-4" />
                Purpose: Real-time visibility into financial health.
                <br />
                <span className="block h-4" />
                <span className="font-semibold">Key Features:</span>
              </p>
              <ul className="space-y-3 sm:space-y-4">
                <li className="flex items-start"><span className="text-purple-900 mr-3 mt-1 flex-shrink-0">■</span><span className="text-sm sm:text-base text-gray-800">Revenue & Expense Tracking: Monitor monthly, quarterly, and annual financial performance.</span></li>
                <li className="flex items-start"><span className="text-purple-900 mr-3 mt-1 flex-shrink-0">■</span><span className="text-sm sm:text-base text-gray-800">Profitability Analysis: Understand margins by product, service, or business unit.</span></li>
                <li className="flex items-start"><span className="text-purple-900 mr-3 mt-1 flex-shrink-0">■</span><span className="text-sm sm:text-base text-gray-800">Cash Flow Monitoring: Visualize inflows and outflows to manage liquidity.</span></li>
                <li className="flex items-start"><span className="text-purple-900 mr-3 mt-1 flex-shrink-0">■</span><span className="text-sm sm:text-base text-gray-800">Budget vs Actual Comparison: Track financial performance against forecasts.</span></li>
                <li className="flex items-start"><span className="text-purple-900 mr-3 mt-1 flex-shrink-0">■</span><span className="text-sm sm:text-base text-gray-800">Ratio Analysis: Automated display of key financial ratios (ROI, ROE, Current Ratio, etc.).</span></li>
                <li className="flex items-start"><span className="text-purple-900 mr-3 mt-1 flex-shrink-0">■</span><span className="text-sm sm:text-base text-gray-800">Drill-Down Functionality: Explore data by region, category, or time frame for detailed insights.</span></li>
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

export default InnovativeDashboards;
