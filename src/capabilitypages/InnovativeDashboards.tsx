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
                  src="https://res.cloudinary.com/dzlxesyxg/image/upload/v1751534822/1_yr05vn.jpg"
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
              Innovative Dashboards
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
                Make smarter decisions, faster with Innovative Dashboards that turn complex data into clear, visual insights. Track performance, monitor KPIs, and stay in control with real-time analytics tailored to your business.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl font-bold text-black">
              Visualize Success
            </h2>
          </div>
          <div>
            <p className="text-gray-800 leading-relaxed">
              At EZYGRO, we turn data into decisions fast. Our custom-built, interactive dashboards are designed to align with your unique business goals, seamlessly integrating your data sources to deliver real-time insights. With secure, scalable solutions and AI-powered analytics, we help you move beyond just reporting—towards predictive and prescriptive outcomes that drive smarter, faster decision-making for growing businesses.
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
            <div className="bg-white p-8 border border-gray-200 rounded-lg h-full">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Sales & Marketing Dashboards</h3>
              <p className="text-gray-600 mb-8">Who it's for: Marketing Managers, Sales Heads, Growth Teams
<br></br>Purpose: Optimize sales processes and measure marketing effectiveness
<br></br>Key Features:</p>
              <ul className="space-y-4">
                <li className="flex items-start"><span className="text-purple-900 mr-3 mt-1 flex-shrink-0">■</span><span className="text-gray-800">Lead Tracking: Visual pipeline of leads by stage, source, and owner</span></li>
                <li className="flex items-start"><span className="text-purple-900 mr-3 mt-1 flex-shrink-0">■</span><span className="text-gray-800">Conversion Metrics: Analyze conversion rates across campaigns and channels</span></li>
                <li className="flex items-start"><span className="text-purple-900 mr-3 mt-1 flex-shrink-0">■</span><span className="text-gray-800">Campaign Performance: Measure ROI, CTR, impressions, and engagement</span></li>
                <li className="flex items-start"><span className="text-purple-900 mr-3 mt-1 flex-shrink-0">■</span><span className="text-gray-800">Customer Journey Mapping: Track user behavior from first touchpoint to sale</span></li>
                <li className="flex items-start"><span className="text-purple-900 mr-3 mt-1 flex-shrink-0">■</span><span className="text-gray-800">Sales Forecasting: Use historical data to predict future performance</span></li>
                <li className="flex items-start"><span className="text-purple-900 mr-3 mt-1 flex-shrink-0">■</span><span className="text-gray-800">Segmentation & Targeting: Visualize demographics, geographics, and user profiles</span></li>
              </ul>
            </div>
            <div className="bg-white p-8 border border-gray-200 rounded-lg h-full">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Operational <br></br>Dashboards</h3>
              <p className="text-gray-600 mb-8">Who it's for: Operations Heads, Department Managers, Project Leads
<br></br>Purpose: Enhance organizational efficiency and decision-making
<br></br>Key Features:</p>
              <ul className="space-y-4">
                <li className="flex items-start"><span className="text-purple-900 mr-3 mt-1 flex-shrink-0">■</span><span className="text-gray-800">Real-Time KPI Monitoring: Track productivity, turnaround time, and output across teams</span></li>
                <li className="flex items-start"><span className="text-purple-900 mr-3 mt-1 flex-shrink-0">■</span><span className="text-gray-800">Performance Analytics: Identify bottlenecks and areas of improvement</span></li>
                <li className="flex items-start"><span className="text-purple-900 mr-3 mt-1 flex-shrink-0">■</span><span className="text-gray-800">Resource Utilization: View how manpower and assets are allocated and used</span></li>
                <li className="flex items-start"><span className="text-purple-900 mr-3 mt-1 flex-shrink-0">■</span><span className="text-gray-800">Project Progress Tracking: Monitor milestones, deliverables, and deadlines</span></li>
                <li className="flex items-start"><span className="text-purple-900 mr-3 mt-1 flex-shrink-0">■</span><span className="text-gray-800">Custom Alerts & Notifications: Set triggers for abnormal performance or delays</span></li>
                <li className="flex items-start"><span className="text-purple-900 mr-3 mt-1 flex-shrink-0">■</span><span className="text-gray-800">Cross-Departmental Insights: Unified view of performance across HR, logistics, IT, etc.</span></li>
              </ul>
            </div>
            <div className="bg-white p-8 border border-gray-200 rounded-lg h-full">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Financial <br></br>Dashboards</h3>
              <p className="text-gray-600 mb-8">Who it's for: CFOs, Finance Managers, Accountants, Startup Founders
<br></br>Purpose: Real-time visibility into financial health
<br></br>Key Features:</p>
              <ul className="space-y-4">
                <li className="flex items-start"><span className="text-purple-900 mr-3 mt-1 flex-shrink-0">■</span><span className="text-gray-800">Revenue & Expense Tracking: Monitor monthly, quarterly, and annual financial performance</span></li>
                <li className="flex items-start"><span className="text-purple-900 mr-3 mt-1 flex-shrink-0">■</span><span className="text-gray-800">Profitability Analysis: Understand margins by product, service, or business unit</span></li>
                <li className="flex items-start"><span className="text-purple-900 mr-3 mt-1 flex-shrink-0">■</span><span className="text-gray-800">Cash Flow Monitoring: Visualize inflows and outflows to manage liquidity</span></li>
                <li className="flex items-start"><span className="text-purple-900 mr-3 mt-1 flex-shrink-0">■</span><span className="text-gray-800">Budget vs Actual Comparison: Track financial performance against forecasts</span></li>
                <li className="flex items-start"><span className="text-purple-900 mr-3 mt-1 flex-shrink-0">■</span><span className="text-gray-800">Ratio Analysis: Automated display of key financial ratios (ROI, ROE, Current Ratio, etc.)</span></li>
                <li className="flex items-start"><span className="text-purple-900 mr-3 mt-1 flex-shrink-0">■</span><span className="text-gray-800">Drill-Down Functionality: Explore data by region, category, or time frame for detailed insights</span></li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default InnovativeDashboards;
