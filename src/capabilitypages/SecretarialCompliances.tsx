import React from 'react';

const SecretarialCompliances = () => {
  return (
    <div className="container mx-auto px-6 py-16 text-gray-800">
      <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
        Secretarial Compliances
      </h1>
      <p className="text-lg mb-8 leading-relaxed">
        Maintaining good corporate governance is fundamental to long-term business success and stakeholder confidence. We offer comprehensive secretarial services to ensure your company adheres to all statutory and regulatory requirements under the Companies Act and other applicable laws, allowing you to focus on your core business.
      </p>

      <div className="bg-gray-50 p-8 rounded-lg shadow-md mb-12">
        <h2 className="text-3xl font-semibold text-gray-900 mb-4">Services Include</h2>
        <ul className="list-disc list-inside space-y-3 text-lg">
          <li><strong>Company Formation & Registration:</strong> Guiding you through the entire process of incorporating a new company.</li>
          <li><strong>Statutory Filings:</strong> Ensuring timely filing of annual returns, financial statements, and other documents with the Registrar of Companies (ROC).</li>
          <li><strong>Board & General Meetings:</strong> Assisting with the convening of meetings, drafting of notices, agendas, and minutes.</li>
          <li><strong>Maintenance of Statutory Records:</strong> Managing and maintaining all statutory registers and records as required by law.</li>
        </ul>
      </div>
      
      <div>
        <h2 className="text-3xl font-semibold text-gray-900 mb-4">Ensuring Good Governance</h2>
        <p className="text-lg leading-relaxed">
          Our team of experts acts as your compliance partner, keeping you updated on legislative changes and ensuring that your corporate governance framework is robust and effective. We handle the complexities of compliance so you can operate with integrity and transparency.
        </p>
      </div>
    </div>
  );
};

export default SecretarialCompliances;