import LandingSection from "@/components/common/LandingSection";
import { useState, useEffect } from "react";

export default function IncomeTaxPage() {
  const [scaleAtSpeedVisible, setScaleAtSpeedVisible] = useState(false);
  const [promiseTextVisible, setPromiseTextVisible] = useState(false);
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 1024
  );

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
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
      <LandingSection
        title={() => (
          <>
            Income Tax, GST and <span className="text-[#4B1D92]">Audits</span>
          </>
        )}
        subtitle="Stay worry free with end-to-end support for Income Tax, GST, and Audits. From accurate filings to smooth assessments, we ensure your business stays compliant, efficient, and audit-ready at every step."
        media="https://res.cloudinary.com/daoju0r3c/image/upload/v1753712251/2_smojod_md88lf.jpg"
      />

      <section className="bg-white px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-8 sm:py-12 md:py-16">
        <div className="items-center gap-4 sm:gap-6 md:gap-8 lg:gap-10 grid grid-cols-1 md:grid-cols-2 mx-auto px-6 lg:px-12 container">
          <div>
            <h2 className="font-bold text-black text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-tight">
              Tax Made Simple
            </h2>
          </div>
          <div>
            <p className="text-gray-800 text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed">
              At EZYGRO, we provide expert Income Tax, GST, and Audit services
              to help individuals and businesses stay compliant, save money, and
              focus on growth. As your trusted finance and compliance partner,
              we serve clients across India with precision, reliability, and
              professionalism. From individual tax filings to corporate audits
              and GST compliance, our deep domain knowledge and personalized
              approach simplify complex processes and empower informed financial
              decisions. We believe in transparent advice, timely delivery, and
              building long-term financial health for every client we serve.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-8 sm:py-12 md:py-16 lg:py-20">
        <div className="mx-auto px-6 lg:px-12 container">
          <div className="mb-6 sm:mb-8 md:mb-10 lg:mb-12">
            <h2 className="font-bold text-gray-900 text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
              Our <span className="text-purple-900">Services</span>
            </h2>
          </div>
          <div className="gap-4 sm:gap-6 md:gap-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {/* --- Income Tax Services Card --- */}
            <div className="bg-white p-4 sm:p-6 md:p-8 border border-gray-200 rounded-lg h-full">
              <h3 className="mb-2 sm:mb-3 md:mb-4 font-bold text-gray-900 text-lg sm:text-xl md:text-2xl">
                Income Tax Services
              </h3>
              <p className="mb-2 sm:mb-3 md:mb-4 text-gray-600 text-xs sm:text-sm md:text-base">
                Stay ahead of deadlines and optimize your tax liability with our
                expert filing and advisory services.
              </p>
              <p className="mb-2 sm:mb-3 text-gray-600 text-xs sm:text-sm md:text-base">
                We help with:
              </p>
              <ul className="space-y-2 sm:space-y-3 md:space-y-4">
                <li className="flex items-start">
                  <span className="flex-shrink-0 mt-1 mr-2 sm:mr-3 text-purple-900">
                    ■
                  </span>
                  <span className="text-gray-800 text-xs sm:text-sm md:text-base">
                    ITR Filing for Individuals, Professionals, & Corporates.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 mt-1 mr-2 sm:mr-3 text-purple-900">
                    ■
                  </span>
                  <span className="text-gray-800 text-xs sm:text-sm md:text-base">
                    Tax Planning & Advisory.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 mt-1 mr-2 sm:mr-3 text-purple-900">
                    ■
                  </span>
                  <span className="text-gray-800 text-xs sm:text-sm md:text-base">
                    TDS Compliance & Returns.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 mt-1 mr-2 sm:mr-3 text-purple-900">
                    ■
                  </span>
                  <span className="text-gray-800 text-xs sm:text-sm md:text-base">
                    Advance Tax Computation.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 mt-1 mr-2 sm:mr-3 text-purple-900">
                    ■
                  </span>
                  <span className="text-gray-800 text-xs sm:text-sm md:text-base">
                    Representation before Tax Authorities.
                  </span>
                </li>
              </ul>
            </div>

            {/* --- GST Services Card --- */}
            <div className="bg-white p-4 sm:p-6 md:p-8 border border-gray-200 rounded-lg h-full">
              <h3 className="mb-2 sm:mb-3 md:mb-4 font-bold text-gray-900 text-lg sm:text-xl md:text-2xl">
                GST Services
              </h3>
              <p className="mb-2 sm:mb-3 md:mb-4 text-gray-600 text-xs sm:text-sm md:text-base">
                From registration to return filing and advisory, we offer full
                spectrum GST support.
              </p>
              <p className="mb-2 sm:mb-3 text-gray-600 text-xs sm:text-sm md:text-base">
                Our GST offerings include:
              </p>
              <ul className="space-y-2 sm:space-y-3 md:space-y-4">
                <li className="flex items-start">
                  <span className="flex-shrink-0 mt-1 mr-2 sm:mr-3 text-purple-900">
                    ■
                  </span>
                  <span className="text-gray-800 text-xs sm:text-sm md:text-base">
                    GST Registration & Migration.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 mt-1 mr-2 sm:mr-3 text-purple-900">
                    ■
                  </span>
                  <span className="text-gray-800 text-xs sm:text-sm md:text-base">
                    Monthly/Quarterly GST Return Filing (GSTR-1, GSTR-3B,
                    GSTR-9).
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 mt-1 mr-2 sm:mr-3 text-purple-900">
                    ■
                  </span>
                  <span className="text-gray-800 text-xs sm:text-sm md:text-base">
                    GST Reconciliation & Input Credit Optimization.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 mt-1 mr-2 sm:mr-3 text-purple-900">
                    ■
                  </span>
                  <span className="text-gray-800 text-xs sm:text-sm md:text-base">
                    E-Invoicing & E-Way Bill Compliance.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 mt-1 mr-2 sm:mr-3 text-purple-900">
                    ■
                  </span>
                  <span className="text-gray-800 text-xs sm:text-sm md:text-base">
                    GST Audit & Departmental Representation.
                  </span>
                </li>
              </ul>
            </div>

            {/* --- Audit & Assurance Card --- */}
            <div className="bg-white p-4 sm:p-6 md:p-8 border border-gray-200 rounded-lg h-full">
              <h3 className="mb-2 sm:mb-3 md:mb-4 font-bold text-gray-900 text-lg sm:text-xl md:text-2xl">
                Audit & Assurance
              </h3>
              <p className="mb-2 sm:mb-3 md:mb-4 text-gray-600 text-xs sm:text-sm md:text-base">
                Our audit approach is risk-based, client-centric, and fully
                compliant with regulatory standards.
              </p>
              <p className="mb-2 sm:mb-3 text-gray-600 text-xs sm:text-sm md:text-base">
                We conduct:
              </p>
              <ul className="space-y-2 sm:space-y-3 md:space-y-4">
                <li className="flex items-start">
                  <span className="flex-shrink-0 mt-1 mr-2 sm:mr-3 text-purple-900">
                    ■
                  </span>
                  <span className="text-gray-800 text-xs sm:text-sm md:text-base">
                    Statutory Audits.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 mt-1 mr-2 sm:mr-3 text-purple-900">
                    ■
                  </span>
                  <span className="text-gray-800 text-xs sm:text-sm md:text-base">
                    Tax Audits (u/s 44AB).
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 mt-1 mr-2 sm:mr-3 text-purple-900">
                    ■
                  </span>
                  <span className="text-gray-800 text-xs sm:text-sm md:text-base">
                    Internal Audits.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 mt-1 mr-2 sm:mr-3 text-purple-900">
                    ■
                  </span>
                  <span className="text-gray-800 text-xs sm:text-sm md:text-base">
                    GST Audits.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 mt-1 mr-2 sm:mr-3 text-purple-900">
                    ■
                  </span>
                  <span className="text-gray-800 text-xs sm:text-sm md:text-base">
                    Management & Process Audits.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 mt-1 mr-2 sm:mr-3 text-purple-900">
                    ■
                  </span>
                  <span className="text-gray-800 text-xs sm:text-sm md:text-base">
                    Stock and Inventory Audits.
                  </span>
                </li>
              </ul>
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
