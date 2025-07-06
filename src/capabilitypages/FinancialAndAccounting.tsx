import { useState, useEffect } from 'react';

interface FeatureSet {
  category: string;
  items: string[];
}

interface PricingPlan {
  name: string;
  price: string;
  description: string;
  entries: string;
  features: FeatureSet[];
}

const pricingPlans: PricingPlan[] = [
  {
    name: 'Enterprise',
    price: '₹ 14,999/-',
    description: 'Everything on Professional Package',
    entries: '<strong>No. of Entries Per Month</strong><br/>Turnover below 5 Crore',
    features: [
      {
        category: 'Accounting',
        items: ['Everything on Professional Package'],
      },
      {
        category: 'GST',
        items: ['Everything on Professional Package'],
      },
      {
        category: 'Financial Reporting',
        items: ['Everything on Professional Package', 'Cash Flow Statement (Quarterly)'],
      },
    ],
  },
  {
    name: 'Standard',
    price: '₹ 6,999/-',
    description: 'Ideal For Freelancers, consultants, small businesses, and startups seeking essential accounting and GST',
    entries: '<strong>No. of Entries Per Month</strong><br/>Turnover below 1.5 Crore',
    features: [
      {
        category: 'Accounting',
        items: ['Monthly recording of income & expenses', 'Bank and credit card reconciliation', 'Maintenance of general ledger'],
      },
      {
        category: 'GST',
        items: ['Monthly GST return filing (GSTR-1 & GSTR-3B)', 'Reconciliation of GSTR-2B with purchase register', 'Filing reminders and compliance alerts'],
      },
      {
        category: 'Financial Reporting',
        items: ['Outstanding Receivable/Payable', 'Balance Sheet and Profit and Loss (Quarterly)'],
      },
    ],
  },
  {
    name: 'Professional',
    price: '₹ 12,499/-',
    description: 'Everything on STANDARD Package',
    entries: '<strong>No. of Entries Per Month</strong><br/>Turnover below 3 Crore',
    features: [
      {
        category: 'Accounting',
        items: ['Everything on Standard Package'],
      },
      {
        category: 'GST',
        items: ['Everything on Standard Package'],
      },
      {
        category: 'Financial Reporting',
        items: ['Everything on Standard Package', 'Balance Sheet and Profit and Loss (Monthly)'],
      },
    ],
  },
];

const PricingCard = ({ plan }: { plan: PricingPlan }) => {
  return (
    <div
      className="group w-full max-w-md mx-auto shadow-2xl p-8 flex flex-col bg-white text-gray-800 transition-all duration-300 ease-in-out hover:-translate-y-4 hover:bg-[#4B1D92]"
    >
      <h3 className="text-3xl font-extrabold text-center text-black group-hover:text-white transition-colors">
        {plan.name.toUpperCase()}
      </h3>
      <p className="text-center mt-2 text-sm h-12 text-gray-500 group-hover:text-gray-200 transition-colors">
        {plan.description}
      </p>
      <div className="text-left my-6">
        <span className="text-5xl font-bold text-black group-hover:text-white transition-colors">
          {plan.price}
        </span>
      </div>
      <div className="text-center mb-6 p-3 bg-gray-100 text-gray-700 group-hover:bg-white/10 group-hover:text-white transition-colors">
        <span dangerouslySetInnerHTML={{ __html: plan.entries }} />
      </div>
      <div className="flex-grow space-y-5">
        {plan.features.map((featureSet) => (
          <div key={featureSet.category}>
            <h4 className="font-bold text-lg mb-2 text-gray-900 group-hover:text-gray-100 transition-colors">
              Includes {featureSet.category}
            </h4>
            <ul className="space-y-2">
              {featureSet.items.map((item) => (
                <li key={item} className="flex items-start">
                  <svg className="w-6 h-6 text-green-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                  <span className="text-gray-600 group-hover:text-gray-300 transition-colors">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

function FinancialAndAccounting() {
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
                  src="https://res.cloudinary.com/dzlxesyxg/image/upload/v1751534369/5_tkrtos.jpg"
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
              Financial and <span style={{ color: '#4B1D92' }}>Accounting Management</span>
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
                Effortless finances, empowered growth Financial & Accounting Management that blends accuracy, compliance, and clarity. From smart bookkeeping to insightful reporting, it's everything your business needs to stay ahead, without the hassle.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl font-bold text-black">
              Smarter Finance for <br></br>Smarter Business
            </h2>
          </div>
          <div>
            <p className="text-gray-800 leading-relaxed">
              EZYGRO provides end-to-end Financial and Accounting Management Services tailored to meet the dynamic needs of modern businesses. As regulations evolve, technology advances, and talent expectations shift, our expert led solutions ensure your financial operations remain compliant, efficient, and future ready. From streamlining processes and ensuring accurate reporting to optimizing financial strategies, we handle the critical functions so you can focus on innovation, scaling, and driving long-term success. With EZYGRO, finance becomes a catalyst for growth, not a burden.
            </p>
            <div className="mt-4 font-semibold text-black flex items-center cursor-pointer">
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-bold text-gray-900 pl-4">Price List</h2>
        </div>
        <div className="mt-16 lg:mt-24 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 justify-items-center items-stretch">
            {pricingPlans.map((plan) => (
              <div key={plan.name} className="w-full flex justify-center">
                  <PricingCard plan={plan} />
              </div>
            ))}
          </div>
        </div>
      </section>
      
    </>
  );
}

export default FinancialAndAccounting;