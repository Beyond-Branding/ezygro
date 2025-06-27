import React from 'react';

const InnovativeDashboards = () => {
  return (
    <div className="container mx-auto px-6 py-16 text-gray-800">
      <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
        Innovative Dashboards
      </h1>
      <p className="text-lg mb-8 leading-relaxed">
        Transform your raw data into actionable intelligence. We design and build custom, intuitive dashboards that provide a 360-degree view of your business operations. Monitor key metrics in real-time, uncover hidden trends, and empower your team to make data-driven decisions with confidence.
      </p>

      <div className="bg-gray-50 p-8 rounded-lg shadow-md mb-12">
        <h2 className="text-3xl font-semibold text-gray-900 mb-4">Features & Capabilities</h2>
        <ul className="list-disc list-inside space-y-3 text-lg">
          <li><strong>Real-Time Data Visualization:</strong> Connect to multiple data sources to see live updates on performance.</li>
          <li><strong>Custom KPI Tracking:</strong> Define and monitor the Key Performance Indicators that matter most to your business.</li>
          <li><strong>Interactive & User-Friendly:</strong> Drill down into details, apply filters, and explore your data with an intuitive interface.</li>
          <li><strong>Cross-Platform Accessibility:</strong> Access your dashboards on desktop, tablet, or mobile for insights on the go.</li>
        </ul>
      </div>

      <div>
        <h2 className="text-3xl font-semibold text-gray-900 mb-4">From Data to Decisions</h2>
        <p className="text-lg leading-relaxed">
          A dashboard is more than just charts and graphs; it's a narrative of your business performance. We work with you to understand your objectives and build a visual story that is clear, concise, and compelling. Stop guessing and start knowing where your business stands and where it's headed.
        </p>
      </div>
    </div>
  );
};

export default InnovativeDashboards;