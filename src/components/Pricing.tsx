import { useState, useEffect } from 'react';

// --- Data for the Pricing Cards section, matching the image content ---
const pricingPlans = [
  {
    name: 'Enterprise',
    price: '₹ 14,999/-',
    description: 'Everything on Professional Package',
    entries: '400 Transactions a month',
    features: [
      {
        category: 'Accounting',
        items: ['Everything on Bronze Package'],
      },
      {
        category: 'GST',
        items: ['Everything on Bronze Package'],
      },
      {
        category: 'Financial Reporting',
        items: ['Everything on Bronze Package', 'Cash Flow Statement (Quarterly)'],
      },
    ],
  },
  {
    name: 'Standard',
    price: '₹ 6,999/-',
    description: 'Ideal For Freelancers, consultants, small businesses, and startups seeking essential accounting and GST',
    entries: '150 Transactions a month',
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
    entries: '300 Transactions a month',
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

// --- Sub-component for individual pricing cards with a professional theme ---
const PricingCard = ({ plan }) => {

  return (
    // Added a subtle gradient to the card background.
    <div
      className="w-full max-w-md mx-auto shadow-2xl p-8 flex flex-col bg-gradient-to-br from-black to-gray-900 text-white transform transition-transform duration-300 ease-in-out hover:-translate-y-4"
    >
      <h3 className="text-3xl font-extrabold text-center">{plan.name.toUpperCase()}</h3>
      <p className="text-center mt-2 text-sm h-12 text-gray-400">{plan.description}</p>
      
      <div className="text-left my-6">
        <span className="text-5xl font-bold">{plan.price}</span>
      </div>

      <div className="text-center mb-6 p-3 font-semibold bg-gray-800 text-gray-200">
        {plan.entries}
      </div>

      <div className="flex-grow space-y-5">
        {plan.features.map((featureSet) => (
          <div key={featureSet.category}>
            <h4 className="font-bold text-lg mb-2 text-gray-300">
              Includes {featureSet.category}
            </h4>
            <ul className="space-y-2">
              {featureSet.items.map((item) => (
                <li key={item} className="flex items-start">
                  <svg className="w-6 h-6 text-green-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                  <span className={'text-gray-400'}>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};


const Pricing = () => {
  const [pricingVisible, setPricingVisible] = useState(false);
  const [descriptionVisible, setDescriptionVisible] = useState(false);
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1024);
  
  const backgroundVideo = "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4";

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Trigger text animations on component mount
  useEffect(() => {
    const pricingTimer = setTimeout(() => {
      setPricingVisible(true);
    }, 200);

    const descriptionTimer = setTimeout(() => {
      setDescriptionVisible(true);
    }, 400);

    return () => {
      clearTimeout(pricingTimer);
      clearTimeout(descriptionTimer);
    };
  }, []);

  return (
    <>
      <section className="relative min-h-screen bg-white overflow-hidden">
        {/* Background with diagonal section for video */}
        <div className="absolute inset-0">
          <div className="absolute right-0 top-0 w-full h-full">
            <div
              className="w-full h-full bg-transparent"
              style={{
                clipPath: windowWidth < 768 
                  ? 'polygon(-375% 75%, 100% 20%, 100% 100%, 0% 100%)' 
                  : 'polygon(-40% 90%, 100% 0%, 100% 100%, 0% 100%)'
              }}
            >
              <div className="absolute inset-0 overflow-hidden">
                <video
                  className="w-full h-full object-cover opacity-70"
                  autoPlay
                  muted
                  loop
                  playsInline
                >
                  <source src={backgroundVideo} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </div>
        </div>

        {/* Text Content */}
        <div className="relative z-10 min-h-screen max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-16">
          <div className="absolute top-2 sm:top-4 lg:top-8 left-4 sm:left-6 lg:left-0 w-full max-w-xs sm:max-w-lg lg:max-w-2xl lg:w-3/5 pr-4 sm:pr-6 lg:pr-6">
            <h1
              className={`text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold text-gray-900 transition-all duration-700 ease-out ${
                pricingVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
              }`}
              style={{ 
                fontSize: windowWidth < 640 ? '28px' : windowWidth < 1024 ? '48px' : '66px', 
                lineHeight: windowWidth < 640 ? '36px' : windowWidth < 1024 ? '56px' : '90px' 
              }}
            >
              Our Pricing
            </h1>

            <div
              className={`transition-all duration-700 ease-out ${
                descriptionVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
              }`}
            >
              <p className="mt-2 sm:mt-4 lg:mt-6 text-xs sm:text-sm lg:text-base text-gray-800 leading-relaxed font-400"
                style={{ 
                  fontSize: windowWidth < 640 ? '14px' : windowWidth < 1024 ? '16px' : '18px', 
                  lineHeight: windowWidth < 640 ? '20px' : windowWidth < 1024 ? '24px' : '30px' 
                }}
              >
                Explore our flexible and transparent pricing plans tailored to meet your unique business needs with value-driven solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- START: Inverted and Elevated Pricing Section --- */}
      <section className="relative bg-white py-24 px-4 sm:px-6 lg:px-8 -mt-40 z-20">
        {/* Title is now aligned to the left */}
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-extrabold text-black sm:text-6xl tracking-tight">
            PRICE LIST
          </h2>
        </div>

        <div className="mt-16 lg:mt-24 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 justify-items-center items-start">
            {pricingPlans.map((plan) => (
                <div key={plan.name} className="w-full flex justify-center">
                    <PricingCard plan={plan} />
                </div>
            ))}
          </div>
        </div>
        
      </section>
      {/* --- END: Inverted and Elevated Pricing Section --- */}

    </>
  );
};

export default Pricing;
