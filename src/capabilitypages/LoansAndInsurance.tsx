import React from 'react';

const LoansAndInsurance = () => {
  return (
    <div className="container mx-auto px-6 py-16 text-gray-800">
      <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
        Loans, Insurance, and Investments
      </h1>
      <p className="text-lg mb-8 leading-relaxed">
        Secure your financial future and fuel your growth with our expert advisory on capital management and risk mitigation. We assist businesses and individuals in navigating the complex landscape of loans, insurance policies, and investment opportunities to build a robust and resilient financial portfolio.
      </p>

      <div className="bg-gray-50 p-8 rounded-lg shadow-md mb-12">
        <h2 className="text-3xl font-semibold text-gray-900 mb-4">Our Expertise</h2>
        <ul className="list-disc list-inside space-y-3 text-lg">
          <li><strong>Debt Financing Advisory:</strong> Assisting in securing business loans, working capital, and project financing with favorable terms.</li>
          <li><strong>Insurance Portfolio Management:</strong> Analyzing your needs to recommend and manage the optimal set of insurance policies (life, health, property).</li>
          <li><strong>Investment Strategy & Guidance:</strong> Providing insights into various investment vehicles to help you achieve your financial goals.</li>
          <li><strong>Risk Assessment:</strong> Evaluating personal and business risks to ensure comprehensive coverage and protection.</li>
        </ul>
      </div>

      <div>
        <h2 className="text-3xl font-semibold text-gray-900 mb-4">A Holistic Financial Plan</h2>
        <p className="text-lg leading-relaxed">
          We believe that borrowing, insuring, and investing are interconnected pillars of financial health. Our holistic approach ensures that each decision aligns with your overarching financial strategy, creating a balanced and secure plan for wealth creation and protection.
        </p>
      </div>
    </div>
  );
};

export default LoansAndInsurance;