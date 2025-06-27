import React from 'react';

const VirtualCFO = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Image */}
          <div className="order-2 lg:order-1">
            <div className="bg-white rounded-3xl p-8 shadow-lg">
              <img
                src="https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
                alt="Virtual CFO Services - Financial charts and calculator"
                className="w-full h-80 object-cover rounded-2xl"
              />
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="order-1 lg:order-2">
            <h1 className="text-4xl lg:text-5xl font-bold text-black mb-6">
              Virtual CFO
            </h1>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              Grrowwide believes in offering the clients the optimal solutions help them grow their business effectively, so that they can focus on the core business strengths, versus getting tied down with operational duties. We handle all outsourced CFO responsibilities, from Financial Modeling, Cash Flow Management to Compliance Reporting, and more.
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
  );
};

export default VirtualCFO;