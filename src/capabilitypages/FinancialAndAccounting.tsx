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
    name: 'Standard',
    price: '₹ 6,999/-',
    description: 'Ideal For Freelancers, consultants, small businesses, and startups seeking essential accounting and GST',
    entries: 'Turnover below 1.5 Crore',
    features: [
      {
        category: 'Includes Accounting',
        items: ['Monthly recording of income & expenses', 'Bank and credit card reconciliation', 'Maintenance of general ledger'],
      },
      {
        category: 'Includes GST',
        items: ['Monthly GST return filing (GSTR-1 & GSTR-3B)', 'Reconciliation of GSTR-2B with purchase register', 'Filing reminders and compliance alerts'],
      },
      {
        category: 'Includes Financial Reporting',
        items: ['Outstanding Receivable/Payable', 'Balance Sheet and Profit and Loss (Quarterly)'],
      },
      {
        category: 'Add on services :',
        items: ['With E-Way Bill: ₹3,000/month', 'With TDS Filing: ₹2,000/month'],
      },
    ],
  },
  {
    name: 'Professional',
    price: '₹ 12,499/-',
    description: 'Everything on STANDARD Package',
    entries: 'Turnover below 3 Crore',
    features: [
      {
        category: 'Includes Accounting',
        items: ['Everything on Standard Package'],
      },
      {
        category: 'Includes GST',
        items: ['Everything on Standard Package'],
      },
      {
        category: 'Includes Financial Reporting',
        items: ['Everything on Standard Package', 'Balance Sheet and Profit and Loss (Monthly)'],
      },
    ],
  },
  {
    name: 'Enterprise',
    price: '₹ 14,999/-',
    description: 'Everything on Professional Package',
    entries: 'Turnover below 5 Crore',
    features: [
      {
        category: 'Includes Accounting',
        items: ['Everything on Professional Package'],
      },
      {
        category: 'Includes GST',
        items: ['Everything on Professional Package'],
      },
      {
        category: 'Includes Financial Reporting',
        items: ['Everything on Professional Package', 'Cash Flow Statement (Quarterly)'],
      },
    ],
  },
];

const PricingCard = ({ plan }: { plan: PricingPlan }) => {
  return (
    <div
      className="group w-full max-w-md mx-auto shadow-2xl p-4 sm:p-6 md:p-8 flex flex-col bg-white text-gray-800 transition-all duration-300 ease-in-out hover:-translate-y-4 hover:bg-[#4B1D92]"
    >
      <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-center text-black group-hover:text-white transition-colors">
        {plan.name.toUpperCase()}
      </h3>
      <p className="text-center mt-2 text-xs sm:text-sm md:text-sm min-h-[2.5rem] sm:min-h-[3rem] text-gray-500 group-hover:text-gray-200 transition-colors leading-tight">
        {plan.description}
      </p>
      <div className="text-center my-4 sm:my-5 md:my-6">
        <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-black group-hover:text-white transition-colors">
          {plan.price}
        </span>
      </div>
      <div className="text-center mb-4 sm:mb-5 md:mb-6 p-2 sm:p-3 bg-gray-100 text-gray-700 group-hover:bg-white/10 group-hover:text-white transition-colors text-xs sm:text-sm">
        <span dangerouslySetInnerHTML={{ __html: plan.entries }} />
      </div>
      <div className="flex-grow space-y-3 sm:space-y-4 md:space-y-5">
        {plan.features.map((featureSet) => (
          <div key={featureSet.category}>
            <h4 className="font-bold text-sm sm:text-base md:text-lg mb-1 sm:mb-2 text-gray-900 group-hover:text-gray-100 transition-colors">
              {featureSet.category}
            </h4>
            <ul className="space-y-1 sm:space-y-2">
              {featureSet.items.map((item) => (
                <li key={item} className="flex items-start">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-green-500 mr-1 sm:mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                  <span className="text-xs sm:text-sm md:text-base text-gray-600 group-hover:text-gray-300 transition-colors leading-tight">
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
                  src="https://res.cloudinary.com/dzlxesyxg/image/upload/v1751534369/5_tkrtos.jpg"
                  alt="Financial and Accounting Management"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
        {/* Content */}
        <div className="relative z-10 min-h-screen max-w-7xl mx-auto px-2 sm:px-4 md:px-6 lg:px-16 pt-20 sm:pt-24 md:pt-28 lg:pt-32 pb-8 sm:pb-12 md:pb-16">
          {/* MODIFIED: Enhanced responsive design for all screen sizes with proper header spacing */}
          <div className="absolute top-16 left-1 sm:top-20 sm:left-4 md:top-22 md:left-8 lg:top-24 lg:left-16 xl:left-20 w-full max-w-[95%] sm:max-w-sm md:max-w-lg lg:max-w-2xl xl:max-w-3xl lg:w-3/5 pr-2 sm:pr-4 md:pr-6 lg:pr-8">
            <div className="overflow-hidden pb-2">
              <h1
                className={`text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-semibold text-gray-900 transition-all duration-1000 ease-out leading-tight ${
                  scaleAtSpeedVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                }`}
                style={{
                  fontSize: windowWidth < 480 ? '20px' : windowWidth < 640 ? '24px' : windowWidth < 768 ? '28px' : windowWidth < 1024 ? '36px' : windowWidth < 1280 ? '42px' : '48px',
                  lineHeight: windowWidth < 480 ? '24px' : windowWidth < 640 ? '28px' : windowWidth < 768 ? '32px' : windowWidth < 1024 ? '40px' : windowWidth < 1280 ? '46px' : '52px',
                  transform: scaleAtSpeedVisible ? 'translateY(0px)' : 'translateY(32px)'
                }}
              >
                Financial and <span style={{ color: '#4B1D92' }}>Accounting Management</span>
              </h1>
            </div>
            <div
              className={`mt-2 sm:mt-3 md:mt-4 lg:mt-5 transition-all duration-1200 ease-out delay-300 ${
                promiseTextVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
              }`}
              style={{
                transform: promiseTextVisible ? 'translateY(0px)' : 'translateY(24px)'
              }}
            >
              <p
                className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-800 leading-relaxed font-400"
                style={{
                  fontSize: windowWidth < 480 ? '12px' : windowWidth < 640 ? '13px' : windowWidth < 768 ? '14px' : windowWidth < 1024 ? '16px' : windowWidth < 1280 ? '17px' : '18px',
                  lineHeight: windowWidth < 480 ? '16px' : windowWidth < 640 ? '18px' : windowWidth < 768 ? '20px' : windowWidth < 1024 ? '24px' : windowWidth < 1280 ? '26px' : '28px'
                }}
              > 
                Effortless finances, empowered growth Financial & Accounting Management that blends accuracy, compliance, and clarity. From smart bookkeeping to insightful reporting, it's everything your business needs to stay ahead, <br />without the hassle.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-8 sm:py-12 md:py-16 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 lg:gap-10 items-center">
          <div>
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-black leading-tight">
              Smarter Finance for <br className="hidden sm:block" />Smarter Business
            </h2>
          </div>
          <div>
            <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-800 leading-relaxed">
              EZYGRO provides end-to-end Financial and Accounting Management Services tailored to meet the dynamic needs of modern businesses. As regulations evolve, technology advances, and talent expectations shift, our expert led solutions ensure your financial operations remain compliant, efficient, and future ready. From streamlining processes and ensuring accurate reporting to optimizing financial strategies, we handle the critical functions so you can focus on innovation, scaling, and driving long-term success. With EZYGRO, finance becomes a catalyst for growth, not a burden.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-purple-900 text-left mb-8 sm:mb-12 md:mb-16 lg:mb-20">
            Price List
          </h2>
        </div>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 justify-items-center items-stretch">
            {pricingPlans.map((plan) => (
              <div key={plan.name} className="w-full flex justify-center">
                  <PricingCard plan={plan} />
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* MODIFIED: Enhanced Payment Options section with better responsive design */}
      <section className="bg-white pt-6 sm:pt-8 md:pt-10 lg:pt-12 pb-8 sm:pb-12 md:pb-16 lg:pb-20 px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-center text-gray-900 mb-6 sm:mb-8 md:mb-10 lg:mb-12">
            Payment Options
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 lg:gap-10">
            {/* Monthly Plan Card */}
            <div className="group cursor-pointer bg-gray-50 p-4 sm:p-6 md:p-8 rounded-lg border border-gray-200 transition-all duration-300 ease-in-out hover:-translate-y-4 hover:bg-[#4B1D92]">
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-purple-900 mb-2 sm:mb-3 md:mb-4 transition-colors group-hover:text-white">
                Monthly Plan
              </h3>
              <p className="text-xs sm:text-sm md:text-base text-gray-800 leading-relaxed transition-colors group-hover:text-gray-200">
                Perfect for businesses that prefer flexibility. Pay only for the months you need, no long-term commitment.
              </p>
            </div>
            
            {/* Yearly Plan Card */}
            <div className="group cursor-pointer bg-gray-50 p-4 sm:p-6 md:p-8 rounded-lg border border-gray-200 transition-all duration-300 ease-in-out hover:-translate-y-4 hover:bg-[#4B1D92]">
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-purple-900 mb-2 sm:mb-3 md:mb-4 transition-colors group-hover:text-white">
                Yearly Plan
              </h3>
              <p className="text-xs sm:text-sm md:text-base text-gray-800 leading-relaxed transition-colors group-hover:text-gray-200">
                Get the same great features at a better price. Pay for the full year upfront and receive an instant 5% discount saving you money while staying compliant all year long.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact section with responsive design and clickable phone number */}
      <section className="bg-white pb-8 sm:pb-12 md:pb-16 lg:pb-20">
        <div className="max-w-7xl mx-auto text-center px-4 sm:px-6 md:px-8 lg:px-12">
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-800">
                For any queries, please contact us at:{" "}
                <a 
                    href="tel:+919372963906" 
                    className="text-purple-900 font-bold hover:underline transition-colors duration-200"
                >
                    +91 9372963906
                </a>
            </p>
        </div>
      </section>
    </>
  );
}

export default FinancialAndAccounting;