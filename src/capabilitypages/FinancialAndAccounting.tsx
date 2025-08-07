import { useState, useEffect } from 'react';
import TechMahindraLogo from '../logo.png';

// A helper component for the checkmark symbol
const CheckIcon = () => (
  <svg
    className="w-6 h-6 text-green-500 mx-auto"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
  </svg>
);

// Your responsive pricing table with alignment control
const PricingTable = () => {
  // --- Data for the table ---
  const plans = [
    {
      name: 'Enterprise',
      price: 'Rs 14,999/-',
      headerBg: 'bg-purple-100',
      features: {
        turnover: 'Turnover below 5 Crore',
        idealFor: 'HNI or Midsize Business who wants to micro-analyse their Business',
        periodicity: 'Monthly / Fortnightly / weekly',
        sales: true,
        bankReco: true,
        jv: true,
        returnFiling1: true,
        returnFiling2: true,
        reminders: true,
      }
    },
    {
      name: 'Professional',
      price: 'Rs 12,500/-',
      headerBg: 'bg-purple-100',
      features: {
        turnover: 'Turnover below 3 Crore',
        idealFor: 'Ideal for Midsize Business fed-up with Accountant',
        periodicity: 'Monthly / Fortnightly',
        sales: true,
        bankReco: true,
        jv: true,
        returnFiling1: true,
        returnFiling2: true,
        reminders: true,
      }
    },
    {
      name: 'Standard',
      price: 'Rs 6,999/-',
      headerBg: 'bg-purple-100',
      features: {
        turnover: 'Turnover below 1.5 Crore',
        idealFor: 'Freelancers, Consultants, Small Businesses and start ups seeking essential accounting and GST',
        periodicity: 'Monthly',
        sales: true,
        bankReco: true,
        jv: true,
        returnFiling1: true,
        returnFiling2: true,
        reminders: true,
      }
    },
  ];

  const allRows = [
    { type: 'data', key: 'turnover', label: 'Ideal For turnover' },
    {
      type: 'data',
      key: 'idealFor',
      label: 'Ideal For',
      customHeight: 'h-28', // Set a height for this row
      align: 'center'      // Add this property to center the content
    },
    { type: 'data', key: 'periodicity', label: 'Periodicity' },
    { type: 'category', label: 'Accounting' },
    { type: 'check', key: 'sales', label: 'Sales and purchases' },
    { type: 'check', key: 'bankReco', label: 'Bank Reco' },
    { type: 'check', key: 'jv', label: 'JV' },
    { type: 'category', label: 'GST' },
    { type: 'check', key: 'returnFiling1', label: 'Return Filling 1B 3B' },
    { type: 'check', key: 'returnFiling2', label: 'Return Filling 1B 3B' },
    { type: 'check', key: 'reminders', label: 'Reminder E-Compliance Alert' },
  ];

  // --- RENDER LOGIC ---
  return (
    <div className="w-full mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-4 lg:border-r lg:border-b border-gray-200">
        {/* Column 1: Feature Labels (Desktop view) */}
        <div className="hidden lg:block">
          <div className="h-24 border-t border-l border-gray-200 flex items-center justify-center bg-white">
            <img src={TechMahindraLogo} alt="Tech Mahindra Logo" className="h-18 object-contain" />
          </div>

          {allRows.map((row, index) => {
            if (row.type === 'category') {
              return (
                <div key={index} className="p-4 border-t border-l bg-purple-100 border-gray-100 h-[3.5rem] flex items-center">
                  <p className="font-bold text-lg text-purple-900">{row.label}</p>
                </div>
              );
            }
            // Conditionally add flexbox classes for centering
            const alignmentClass = row.align === 'center' ? 'flex items-center' : '';
            return (
              <div key={index} className={`p-4 border-t border-l border-gray-200 ${row.customHeight || ''} ${alignmentClass}`}>
                <p className="font-semibold text-gray-700">{row.label}</p>
              </div>
            );
          })}
        </div>

        {/* Columns 2, 3, 4: Plan Details */}
        {plans.map(plan => (
          <div key={plan.name} className="lg:border-l border-gray-200">
            {/* Plan Header */}
            <div className={`p-4 text-center sticky top-0 lg:static ${plan.headerBg} h-24 flex flex-col justify-center border-t lg:border-l border-gray-200`}>
              <h3 className="text-2xl font-bold text-purple-900">{plan.name}</h3>
              <p className="text-xl font-semibold text-purple-900 mt-1">{plan.price}</p>
            </div>

            {/* Plan Features */}
            <div>
              {allRows.map((row, index) => {
                if (row.type === 'category') {
                  return (
                    <div key={index} className="border-t border-gray-200">
                      <div className="p-4 bg-purple-100 lg:hidden">
                        <p className="font-bold text-lg text-purple-900">{row.label}</p>
                      </div>
                      <div className="hidden lg:block h-[3.5rem] bg-white"></div>
                    </div>
                  );
                }

                // Conditionally add flexbox classes for centering
                const alignmentClass = row.align === 'center' ? 'flex items-center justify-center' : '';
                return (
                  <div key={index} className={`p-4 text-center border-t border-gray-200 ${row.customHeight || ''} ${alignmentClass}`}>
                    <div className="w-full">
                      {/* Mobile View */}
                      <div className={`lg:hidden text-left ${row.type === 'check' ? 'flex justify-between items-center' : ''}`}>
                        <p className="font-semibold text-gray-600">{row.label}</p>
                        {row.type === 'data' ? (
                          <p className="text-gray-700 text-right">{plan.features[row.key]}</p>
                        ) : (
                          plan.features[row.key] ? <CheckIcon /> : <span>-</span>
                        )}
                      </div>
                      {/* Desktop View */}
                      <div className="hidden lg:block">
                        {row.type === 'data' ? (
                          <p className="text-gray-700">{plan.features[row.key]}</p>
                        ) : (
                          plan.features[row.key] ? <CheckIcon /> : <span>-</span>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// --- UPDATED TABLE COMPONENT BASED ON NEW IMAGE ---
const FinancialReportingTable = () => {
  const data = [
    {
      feature: 'Outstanding Recievable and payable',
      enterprise: 'Monthly',
      professional: 'Monthly',
      standard: 'Monthly',
    },
    {
      feature: 'Balance Sheet and P&C',
      enterprise: 'Monthly',
      professional: 'Monthly',
      standard: 'Quarterly',
    },
    {
      feature: 'Cashflow',
      enterprise: 'Quarterly',
      professional: false, // Using boolean for conditional rendering
      standard: false,
    },
  ];

  // Helper for the 'X' mark to match the image style
  const XMark = () => <span className="text-red-500 font-bold text-xl">X</span>;

  return (
    <div className="w-full mx-auto overflow-x-auto">
      <div className="grid grid-cols-4 min-w-[768px] border-b border-gray-200">

        {/* Header Row 1: Plan Names */}
        <div className="p-4 border-t border-b border-l border-r border-gray-200 text-center flex items-center justify-center h-16">
          <img src={TechMahindraLogo} alt="Tech Mahindra Logo" className="h-12 object-contain" />
        </div>
        <div className="p-4 bg-purple-100 border-t border-r border-gray-200 text-center flex items-center justify-center h-16">
          <h3 className="text-xl font-bold text-purple-900">Enterprise</h3>
        </div>
        <div className="p-4 bg-purple-100 border-t border-r border-gray-200 text-center flex items-center justify-center h-16">
          <h3 className="text-xl font-bold text-purple-900">Professional</h3>
        </div>
        <div className="p-4 bg-purple-100 border-t border-r border-gray-200 text-center flex items-center justify-center h-16">
          <h3 className="text-xl font-bold text-purple-900">Standard</h3>
        </div>

        {/* Header Row 2: Category */}
        <div className="col-span-1 p-4 bg-purple-100 border-t border-b border-l border-r border-gray-200 flex items-center h-16">
          <p className="font-semibold text-purple-900">Include and Financial Reporting</p>
        </div>
        <div className="col-span-3 p-0 border-t border-b border-r border-gray-200 h-16 bg-white grid grid-cols-3">
          <div className="border-r border-gray-200"></div>
          <div className="border-r border-gray-200"></div>
          <div></div>
        </div>

        {/* Data Rows */}
        {data.map((row, index) => (
          <>
            <div key={`${row.feature}-${index}-feature`} className="col-span-1 p-4 border-t border-l border-r border-gray-200 flex items-center h-20">
              <p className="font-semibold text-gray-700">{row.feature}</p>
            </div>
            <div key={`${row.feature}-${index}-ent`} className="col-span-1 p-4 bg-white border-t border-r border-gray-200 text-center flex items-center justify-center h-20">
              <p className="text-gray-700">{row.enterprise}</p>
            </div>
            <div key={`${row.feature}-${index}-pro`} className="col-span-1 p-4 bg-white border-t border-r border-gray-200 text-center flex items-center justify-center h-20">
              {row.professional ? <p className="text-gray-700">{row.professional}</p> : <XMark />}
            </div>
            <div key={`${row.feature}-${index}-std`} className="col-span-1 p-4 bg-white border-t border-r border-gray-200 text-center flex items-center justify-center h-20">
              {row.standard ? <p className="text-gray-700">{row.standard}</p> : <XMark />}
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

const AddOnTableSection = () => {

  const contactNumber = '+919372963906';
  
  const whatsappNumber = contactNumber.replace('+', '');

  const prefilledMessage = encodeURIComponent("Hello! I'm interested in your Add-On services and would like to know the pricing.");

  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${prefilledMessage}`;

  const clickableTextClasses = "bg-purple-900 text-white px-3 py-1 rounded hover:bg-purple-800";

  const contactUsButton = (
    <a 
      href={whatsappLink} 
      className={clickableTextClasses}
      target="_blank" 
      rel="noopener noreferrer" 
    >
      Contact Us for the Pricing
    </a>
  );

  const rows = [
    {
      id: 1,
      title: "E-way Bill compliance",
      price: contactUsButton,
    },
    {
      id: 2,
      title: "E-Invoice Compliance",
      price: contactUsButton,
    },
    {
      id: 3,
      title: "TDS Compliance",
      price: (
        <span className="text-gray-800">
          Rs 2000/- per month will be added in your selected package
        </span>
      ),
    },
  ];

  return (
    <div className="w-full mt-12 overflow-x-auto">
      <table className="min-w-full border border-gray-300 text-center">
        <thead>
          <tr className="bg-purple-100">
            <th colSpan={3} className="p-4 text-lg font-semibold text-gray-800">
              Add On&apos;s
            </th>
          </tr>
        </thead>
        <tbody>
          {rows.map((item) => (
            <tr key={item.id} className="even:bg-gray-50">
              <td className="p-4 border border-gray-300 bg-purple-100 font-medium">{item.id}</td>
              <td className="p-4 border border-gray-300 font-semibold">{item.title}</td>
              <td className="p-4 border border-gray-300">{item.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
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
                  src="https://res.cloudinary.com/daoju0r3c/image/upload/v1753712253/5_tkrtos_das1jy.jpg"
                  alt="Financial and Accounting Management"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
        {/* Content */}
        <div className="relative z-10 min-h-screen max-w-7xl mx-auto px-2 sm:px-4 md:px-6 lg:px-16 pt-20 sm:pt-24 md:pt-28 lg:pt-32 pb-8 sm:pb-12 md:pb-16">
          <div className="absolute top-16 left-1 sm:top-20 sm:left-4 md:top-22 md:left-8 lg:top-24 lg:left-16 xl:left-20 w-full max-w-[95%] sm:max-w-sm md:max-w-lg lg:max-w-2xl xl:max-w-3xl lg:w-3/5 pr-2 sm:pr-4 md:pr-6 lg:pr-8">
            <div className="overflow-hidden pb-2">
              <h1
                className={`text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-semibold text-gray-900 transition-all duration-1000 ease-out leading-tight ${scaleAtSpeedVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
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
              className={`mt-2 sm:mt-3 md:mt-4 lg:mt-5 transition-all duration-1200 ease-out delay-300 ${promiseTextVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
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
                Effortless finances, empowered growth Financial & Accounting Management that blends accuracy, compliance, and clarity. From smart bookkeeping to insightful reporting, it&apos;s everything your business needs to stay ahead, <br />without the hassle.
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

      {/* --- PRICE LIST SECTION --- */}
      <section className="bg-white py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 md:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-purple-900 text-left mb-8 sm:mb-12 md:mb-16">
            Price List
          </h2>
          <PricingTable />
          
          {/* Financial Reporting Table */}
          <div className="mt-16">
            <FinancialReportingTable />
          </div>

          {/* Add-On Table */}
          <div className="mt-16">
             <AddOnTableSection />
          </div>
          
        </div>
      </section>
      {/* --- END OF PRICE LIST SECTION --- */}

      <section className="bg-white pt-6 sm:pt-8 md:pt-10 lg:pt-12 pb-8 sm:pb-12 md:pb-16 lg:pb-20 px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-center text-gray-900 mb-6 sm:mb-8 md:mb-10 lg:mb-12">
            Payment Options
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 lg:gap-10">
            <div className="group cursor-pointer bg-gray-50 p-4 sm:p-6 md:p-8 rounded-lg border border-gray-200 transition-all duration-300 ease-in-out hover:-translate-y-4 hover:bg-[#4B1D92]">
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-purple-900 mb-2 sm:mb-3 md:mb-4 transition-colors group-hover:text-white">
                Monthly Plan
              </h3>
              <p className="text-xs sm:text-sm md:text-base text-gray-800 leading-relaxed transition-colors group-hover:text-gray-200">
                Perfect for businesses that prefer flexibility. Pay only for the months you need, no long-term commitment.
              </p>
            </div>
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