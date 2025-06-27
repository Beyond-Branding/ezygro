import React from 'react';

const VirtualCFO = () => {
  return (
    <div className="container mx-auto px-6 py-16 text-gray-800">
      <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
        Virtual CFO & Business Growth Consultancy
      </h1>
      <p className="text-lg mb-8 leading-relaxed">
        Gain high-level financial expertise without the overhead of a full-time executive. Our Virtual CFO services provide strategic financial leadership to steer your business towards sustainable growth. We act as your strategic partner, focusing on financial planning, analysis, and operational efficiency to unlock your company's full potential.
      </p>

      <div className="bg-gray-50 p-8 rounded-lg shadow-md mb-12">
        <h2 className="text-3xl font-semibold text-gray-900 mb-4">Strategic Functions</h2>
        <ul className="list-disc list-inside space-y-3 text-lg">
          <li><strong>Financial Strategy & Forecasting:</strong> Building robust financial models, budgets, and cash flow forecasts.</li>
          <li><strong>Performance Analysis:</strong> In-depth analysis of financial statements and key performance indicators (KPIs).</li>
          <li><strong>Fundraising & Investor Relations:</strong> Assisting with securing capital and managing communications with investors.</li>
          <li><strong>Risk Management:</strong> Identifying financial risks and implementing effective mitigation strategies.</li>
        </ul>
      </div>

      <div>
        <h2 className="text-3xl font-semibold text-gray-900 mb-4">Your Growth Partner</h2>
        <p className="text-lg leading-relaxed">
          Whether you are a startup looking to scale or an established business aiming for the next level, our consultancy provides the insights you need. We help you make informed decisions, optimize resource allocation, and build a resilient financial foundation for long-term success.
        </p>
      </div>
    </div>
  );
};

export default VirtualCFO;