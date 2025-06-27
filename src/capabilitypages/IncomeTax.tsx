import React from 'react';

const IncomeTax: React.FC = () => {
  return (
    <div className="container mx-auto px-6 py-16 text-gray-800">
      <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
        Income Tax, GST, and Audits
      </h1>
      <p className="text-lg mb-8 leading-relaxed">
        Navigating the complexities of tax regulations and audits requires expertise and meticulous attention to detail. Our dedicated team provides comprehensive solutions for income tax planning, GST compliance, and statutory audits, ensuring your business stays compliant while optimizing its tax position.
      </p>

      <div className="bg-gray-50 p-8 rounded-lg shadow-md mb-12">
        <h2 className="text-3xl font-semibold text-gray-900 mb-4">Key Offerings</h2>
        <ul className="list-disc list-inside space-y-3 text-lg">
          <li><strong>Strategic Tax Planning:</strong> Proactive advice to minimize tax liabilities and maximize savings legally.</li>
          <li><strong>GST Compliance & Advisory:</strong> End-to-end GST services, from registration and filing to advisory on complex transactions.</li>
          <li><strong>Audit & Assurance:</strong> Conducting thorough internal and statutory audits to ensure financial accuracy and regulatory adherence.</li>
          <li><strong>Representation Services:</strong> Acting on your behalf before tax authorities for assessments and appeals.</li>
        </ul>
      </div>

      <div>
        <h2 className="text-3xl font-semibold text-gray-900 mb-4">Why Choose Us?</h2>
        <p className="text-lg leading-relaxed">
          We stay ahead of the curve, constantly monitoring changes in tax laws and regulations. Our proactive approach means we don't just solve problems—we anticipate them. We leverage technology to make compliance seamless and provide you with the peace of mind to focus on what you do best: growing your business.
        </p>
      </div>
    </div>
  );
};

export default IncomeTax;
