import { useState, useEffect } from "react";
import TechMahindraLogo from "@/assets/logo.png";
import Image from "next/image";
import LandingSection from "@/components/common/LandingSection";

// A helper component for the checkmark symbol
const CheckIcon = () => (
  <svg
    className="md:mx-auto ml-auto w-6 h-6 text-green-500"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M5 13l4 4L19 7"
    ></path>
  </svg>
);

interface PlanFeature {
  key: string;
  turnover: string;
  idealFor: string;
  periodicity: string;
  sales: boolean;
  bankReco: boolean;
  jv: boolean;
  returnFiling1: boolean;
  returnFiling2: boolean;
  reminders: boolean;
  outstandingRecievable: string;
  balanceSheetAndPC: string;
  cashflow: string;
}

interface Plan {
  name: string;
  price: string;
  headerBg: string;
  features: PlanFeature;
}

interface PlanRow {
  type: "data" | "category" | "check";
  key?: keyof PlanFeature;
  label: string;
  customHeight?: string;
  align?: string;
}

// Your responsive pricing table with alignment control
const PricingTable = () => {
  // --- Data for the table ---
  const plans: Plan[] = [
    {
      name: "Enterprise",
      price: "Rs 14,999/-",
      headerBg: "bg-purple-100",
      features: {
        key: "enterprise",
        turnover: "Turnover below 5 Crore",
        idealFor:
          "HNI or Midsize Business who wants to micro-analyse their Business",
        periodicity: "Monthly / Fortnightly / weekly",
        sales: true,
        bankReco: true,
        jv: true,
        returnFiling1: true,
        returnFiling2: true,
        reminders: true,
        outstandingRecievable: "Monthly",
        balanceSheetAndPC: "Monthly",
        cashflow: "Quarterly",
      },
    },
    {
      name: "Professional",
      price: "Rs 12,500/-",
      headerBg: "bg-purple-100",
      features: {
        key: "professional",
        turnover: "Turnover below 3 Crore",
        idealFor: "Ideal for Midsize Business fed-up with Accountant",
        periodicity: "Monthly / Fortnightly",
        sales: true,
        bankReco: true,
        jv: true,
        returnFiling1: true,
        returnFiling2: true,
        reminders: true,
        outstandingRecievable: "Monthly",
        balanceSheetAndPC: "Monthly",
        cashflow: "❌",
      },
    },
    {
      name: "Standard",
      price: "Rs 6,999/-",
      headerBg: "bg-purple-100",
      features: {
        key: "standard",
        turnover: "Turnover below 1.5 Crore",
        idealFor:
          "Freelancers, Consultants, Small Businesses and start ups seeking essential accounting and GST",
        periodicity: "Monthly",
        sales: true,
        bankReco: true,
        jv: true,
        returnFiling1: true,
        returnFiling2: true,
        reminders: true,
        outstandingRecievable: "Monthly",
        balanceSheetAndPC: "Monthly",
        cashflow: "❌",
      },
    },
  ];

  const allRows: PlanRow[] = [
    { type: "data", key: "turnover", label: "Ideal For turnover" },
    {
      type: "data",
      key: "idealFor",
      label: "Ideal For",
      customHeight: "h-28", // Set a height for this row
      align: "center", // Add this property to center the content
    },
    { type: "data", key: "periodicity", label: "Periodicity" },
    { type: "category", label: "Accounting" },
    { type: "check", key: "sales", label: "Sales and purchases" },
    { type: "check", key: "bankReco", label: "Bank Reco" },
    { type: "check", key: "jv", label: "JV" },
    { type: "category", label: "GST" },
    { type: "check", key: "returnFiling1", label: "Return Filling 1B 3B" },
    { type: "check", key: "returnFiling2", label: "Return Filling 1B 3B" },
    { type: "check", key: "reminders", label: "Reminder E-Compliance Alert" },
    { type: "category", label: "Financial Reporting" },
    {
      type: "data",
      key: "outstandingRecievable",
      label: "Outstanding Recievable and payable",
    },
    {
      type: "data",
      key: "balanceSheetAndPC",
      label: "Balance Sheet and P&C",
    },
    {
      type: "data",
      key: "cashflow",
      label: "Cashflow",
    },
  ];

  // --- RENDER LOGIC ---
  return (
    <div className="mx-auto w-full">
      <div className="grid grid-cols-1 lg:grid-cols-4 border-gray-200 lg:border-r lg:border-b">
        {/* Column 1: Feature Labels (Desktop view) */}
        <div className="hidden lg:block">
          <div className="flex justify-center items-center bg-white border-gray-200 border-t border-l h-24">
            <Image
              src={TechMahindraLogo}
              alt="Tech Mahindra Logo"
              className="h-18 object-contain"
            />
          </div>

          {allRows.map((row, index) => {
            if (row.type === "category") {
              return (
                <div
                  key={index}
                  className="flex items-center bg-purple-100 p-4 border-gray-100 border-t border-l h-[3.5rem]"
                >
                  <p className="font-bold text-purple-900 text-lg">
                    {row.label}
                  </p>
                </div>
              );
            }
            // Conditionally add flexbox classes for centering
            const alignmentClass =
              row.align === "center" ? "flex items-center" : "";
            return (
              <div
                key={index}
                className={`p-4 border-t border-l border-gray-200 ${
                  row.customHeight || ""
                } ${alignmentClass}`}
              >
                <p className="font-semibold text-gray-700">{row.label}</p>
              </div>
            );
          })}
        </div>

        {/* Columns 2, 3, 4: Plan Details */}
        {plans.map((plan) => (
          <div key={plan.name} className="border-gray-200 lg:border-l">
            {/* Plan Header */}
            <div
              className={`p-4 text-center sticky top-0 lg:static ${plan.headerBg} h-24 flex flex-col justify-center border-t lg:border-l border-gray-200`}
            >
              <h3 className="font-bold text-purple-900 text-2xl">
                {plan.name}
              </h3>
              <p className="mt-1 font-semibold text-purple-900 text-xl">
                {plan.price}
              </p>
            </div>

            {/* Plan Features */}
            <div>
              {allRows.map((row, index) => {
                if (row.type === "category") {
                  return (
                    <div key={index} className="border-gray-200 border-t">
                      <div className="lg:hidden bg-purple-100 p-4">
                        <p className="font-bold text-purple-900 text-lg">
                          {row.label}
                        </p>
                      </div>
                      <div className="hidden lg:block bg-white h-[3.5rem]"></div>
                    </div>
                  );
                }

                // Conditionally add flexbox classes for centering
                const alignmentClass =
                  row.align === "center"
                    ? "flex items-center justify-center"
                    : "";
                return (
                  <div
                    key={index}
                    className={`p-4 text-center border-t border-gray-200 ${
                      row.customHeight || ""
                    } ${alignmentClass}`}
                  >
                    <div className="w-full">
                      {/* Mobile View */}
                      <div
                        className={`lg:hidden text-left ${
                          row.type === "check" || row.type === "data"
                            ? "flex justify-between items-center"
                            : ""
                        }`}
                      >
                        <p className="font-semibold text-gray-600">
                          {row.label}
                        </p>
                        {row.type === "data" ? (
                          <p className="text-gray-700 text-right">
                            {plan.features[row.key as keyof PlanFeature]}
                          </p>
                        ) : plan.features[row.key as keyof PlanFeature] ? (
                          <CheckIcon />
                        ) : (
                          <span>-</span>
                        )}
                      </div>
                      {/* Desktop View */}
                      <div className="hidden lg:block">
                        {row.type === "data" ? (
                          <p className="text-gray-700">
                            {plan.features[row.key as keyof PlanFeature]}
                          </p>
                        ) : plan.features[row.key as keyof PlanFeature] ? (
                          <CheckIcon />
                        ) : (
                          <span>-</span>
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
      feature: "Outstanding Recievable and payable",
      enterprise: "Monthly",
      professional: "Monthly",
      standard: "Monthly",
    },
    {
      feature: "Balance Sheet and P&C",
      enterprise: "Monthly",
      professional: "Monthly",
      standard: "Quarterly",
    },
    {
      feature: "Cashflow",
      enterprise: "Quarterly",
      professional: false, // Using boolean for conditional rendering
      standard: false,
    },
  ];

  // Helper for the 'X' mark to match the image style
  const XMark = () => <span className="font-bold text-red-500 text-xl">X</span>;

  return (
    <div className="mx-auto w-full overflow-x-auto">
      <div className="grid grid-cols-4 border-gray-200 border-b min-w-[768px]">
        {/* Header Row 1: Plan Names */}
        <div className="flex justify-center items-center p-4 border-gray-200 border-t border-r border-b border-l h-16 text-center">
          <Image
            src={TechMahindraLogo}
            alt="Tech Mahindra Logo"
            className="h-12 object-contain"
          />
        </div>
        <div className="flex justify-center items-center bg-purple-100 p-4 border-gray-200 border-t border-r h-16 text-center">
          <h3 className="font-bold text-purple-900 text-xl">Enterprise</h3>
        </div>
        <div className="flex justify-center items-center bg-purple-100 p-4 border-gray-200 border-t border-r h-16 text-center">
          <h3 className="font-bold text-purple-900 text-xl">Professional</h3>
        </div>
        <div className="flex justify-center items-center bg-purple-100 p-4 border-gray-200 border-t border-r h-16 text-center">
          <h3 className="font-bold text-purple-900 text-xl">Standard</h3>
        </div>

        {/* Header Row 2: Category */}
        <div className="flex items-center col-span-1 bg-purple-100 p-4 border-gray-200 border-t border-r border-b border-l h-16">
          <p className="font-semibold text-purple-900">
            Include and Financial Reporting
          </p>
        </div>
        <div className="grid grid-cols-3 col-span-3 bg-white p-0 border-gray-200 border-t border-r border-b h-16">
          <div className="border-gray-200 border-r"></div>
          <div className="border-gray-200 border-r"></div>
          <div></div>
        </div>

        {/* Data Rows */}
        {data.map((row, index) => (
          <>
            <div
              key={`${row.feature}-${index}-feature`}
              className="flex items-center col-span-1 p-4 border-gray-200 border-t border-r border-l h-20"
            >
              <p className="font-semibold text-gray-700">{row.feature}</p>
            </div>
            <div
              key={`${row.feature}-${index}-ent`}
              className="flex justify-center items-center col-span-1 bg-white p-4 border-gray-200 border-t border-r h-20 text-center"
            >
              <p className="text-gray-700">{row.enterprise}</p>
            </div>
            <div
              key={`${row.feature}-${index}-pro`}
              className="flex justify-center items-center col-span-1 bg-white p-4 border-gray-200 border-t border-r h-20 text-center"
            >
              {row.professional ? (
                <p className="text-gray-700">{row.professional}</p>
              ) : (
                <XMark />
              )}
            </div>
            <div
              key={`${row.feature}-${index}-std`}
              className="flex justify-center items-center col-span-1 bg-white p-4 border-gray-200 border-t border-r h-20 text-center"
            >
              {row.standard ? (
                <p className="text-gray-700">{row.standard}</p>
              ) : (
                <XMark />
              )}
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

const AddOnTableSection = () => {
  const contactNumber = "+919372963906"; // <-- Replace with your real number
  const clickableTextClasses =
    "bg-purple-900 text-white px-3 py-1 rounded hover:bg-purple-800 block";

  const rows = [
    {
      id: 1,
      title: "E-way Bill compliance",
      price: (
        <a href={`tel:${contactNumber}`} className={clickableTextClasses}>
          Contact Us for the Pricing
        </a>
      ),
    },
    {
      id: 2,
      title: "E-Invoice Compliance",
      price: (
        <a href={`tel:${contactNumber}`} className={clickableTextClasses}>
          Contact Us for the Pricing
        </a>
      ),
    },
    {
      id: 3,
      title: "TDS Compliance",
      price: (
        <span className="block text-gray-800">
          Rs 2000/- per month will be added in your selected package
        </span>
      ),
    },
  ];

  return (
    <div className="mt-12 w-full overflow-x-auto">
      <table className="border border-gray-300 min-w-full text-center">
        <thead>
          <tr className="bg-purple-100">
            <th colSpan={3} className="p-4 font-semibold text-gray-800 text-lg">
              Add On&apos;s
            </th>
          </tr>
        </thead>
        <tbody>
          {rows.map((item) => (
            <tr key={item.id} className="even:bg-gray-50">
              <td className="bg-purple-100 p-4 border border-gray-300 font-medium">
                {item.id}
              </td>
              <td className="p-4 border border-gray-300 font-semibold">
                {item.title}
              </td>
              <td className="p-4 border border-gray-300">{item.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default function FinancialAndAccountingPage() {
  return (
    <>
      <LandingSection
        enlargeBackground
        title={() => (
          <>
            Financial and{" "}
            <span className="text-[#4b1d92]">
              Accounting <br />
              Management
            </span>
          </>
        )}
        subtitle="Effortless finances, empowered growth Financial & Accounting Management that blends accuracy, compliance, and clarity. From smart bookkeeping to insightful reporting, it's everything your business needs to stay ahead, without the hassle."
        media="https://res.cloudinary.com/daoju0r3c/image/upload/v1753712253/5_tkrtos_das1jy.jpg"
      />

      <section className="bg-white px-4 py-8 sm:py-12 md:py-16">
        <div className="items-center gap-4 sm:gap-6 md:gap-8 lg:gap-10 grid grid-cols-1 md:grid-cols-2 mx-auto px-6 lg:px-12 container">
          <div>
            <h2 className="font-bold text-black text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-tight">
              Smarter Finance for <br className="hidden sm:block" />
              Smarter Business
            </h2>
          </div>
          <div>
            <p className="text-gray-800 text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed">
              EZYGRO provides end-to-end Financial and Accounting Management
              Services tailored to meet the dynamic needs of modern businesses.
              As regulations evolve, technology advances, and talent
              expectations shift, our expert led solutions ensure your financial
              operations remain compliant, efficient, and future ready. From
              streamlining processes and ensuring accurate reporting to
              optimizing financial strategies, we handle the critical functions
              so you can focus on innovation, scaling, and driving long-term
              success. With EZYGRO, finance becomes a catalyst for growth, not a
              burden.
            </p>
          </div>
        </div>
      </section>

      {/* --- PRICE LIST SECTION --- */}
      <section className="bg-white px-4 sm:px-6 md:px-8 py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="mx-auto px-6 lg:px-12 container">
          <h2 className="mb-8 sm:mb-12 md:mb-16 font-bold text-purple-900 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-left">
            Price List
          </h2>
          <PricingTable />

          {/* Add-On Table */}
          <div className="mt-16">
            <AddOnTableSection />
          </div>
        </div>
      </section>
      {/* --- END OF PRICE LIST SECTION --- */}

      <section className="bg-white px-4 sm:px-6 md:px-8 lg:px-12 pt-6 sm:pt-8 md:pt-10 lg:pt-12 pb-8 sm:pb-12 md:pb-16 lg:pb-20">
        <div className="mx-auto px-6 lg:px-12 container">
          <h2 className="mb-6 sm:mb-8 md:mb-10 lg:mb-12 font-bold text-gray-900 text-xl sm:text-2xl md:text-3xl lg:text-4xl text-center">
            Payment Options
          </h2>
          <div className="gap-4 sm:gap-6 md:gap-8 lg:gap-10 grid grid-cols-1 md:grid-cols-2">
            <div className="group bg-gray-50 hover:bg-[#4B1D92] p-4 sm:p-6 md:p-8 border border-gray-200 rounded-lg transition-all hover:-translate-y-4 duration-300 ease-in-out cursor-pointer">
              <h3 className="mb-2 sm:mb-3 md:mb-4 font-bold text-purple-900 group-hover:text-white text-lg sm:text-xl md:text-2xl transition-colors">
                Monthly Plan
              </h3>
              <p className="text-gray-800 group-hover:text-gray-200 text-xs sm:text-sm md:text-base leading-relaxed transition-colors">
                Perfect for businesses that prefer flexibility. Pay only for the
                months you need, no long-term commitment.
              </p>
            </div>
            <div className="group bg-gray-50 hover:bg-[#4B1D92] p-4 sm:p-6 md:p-8 border border-gray-200 rounded-lg transition-all hover:-translate-y-4 duration-300 ease-in-out cursor-pointer">
              <h3 className="mb-2 sm:mb-3 md:mb-4 font-bold text-purple-900 group-hover:text-white text-lg sm:text-xl md:text-2xl transition-colors">
                Yearly Plan
              </h3>
              <p className="text-gray-800 group-hover:text-gray-200 text-xs sm:text-sm md:text-base leading-relaxed transition-colors">
                Get the same great features at a better price. Pay for the full
                year upfront and receive an instant 5% discount saving you money
                while staying compliant all year long.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white pb-8 sm:pb-12 md:pb-16 lg:pb-20">
        <div className="mx-auto px-4 sm:px-6 md:px-8 lg:px-12 max-w-7xl text-center">
          <p className="text-gray-800 text-sm sm:text-base md:text-lg lg:text-xl">
            For any queries, please contact us at:{" "}
            <a
              href="tel:+919372963906"
              className="font-bold text-purple-900 hover:underline transition-colors duration-200"
            >
              +91 9372963906
            </a>
          </p>
        </div>
      </section>
    </>
  );
}
