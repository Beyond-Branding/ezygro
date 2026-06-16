import LandingSection from "@/components/common/LandingSection";
import { useState, useEffect } from "react";

export default function LoansAndInsurancePage() {
  // State and Effects for animations and responsive design
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
            Loans, Insurance and{" "}
            <span className="text-[#4B1D92]">Investments</span>
          </>
        )}
        subtitle="Access the right financial tools with our expert support in Loans, Insurance, and Investments. Whether it’s securing capital, protecting assets, or growing wealth we help you make informed, confident choices."
        media="https://res.cloudinary.com/dt6hlbtfo/image/upload/v1781603502/jtm2lygywd8l99wrkyks.jpg"
      />

      <section className="bg-white py-12 sm:py-16">
        <div className="items-center gap-6 sm:gap-8 grid grid-cols-1 md:grid-cols-2 mx-auto px-6 lg:px-12 container">
          <div>
            <h2 className="sm:ml-8 md:ml-16 lg:ml-12 font-bold text-black text-2xl sm:text-3xl md:text-3xl">
              Your Trusted Partner in Loans, Insurance & Investments
            </h2>
          </div>
          <div>
            <p className="text-gray-800 text-sm sm:text-base md:text-base leading-relaxed">
              At EZYGRO, we are your trusted partner in loans, insurance, and
              investments offering smart, tailored financial solutions for every
              stage of life. With decades of expertise, strategic partnerships,
              and a customer first approach, we simplify your financial journey
              by ensuring quick and easy processing, transparent guidance, and
              secure transactions. Whether you&apos;re planning for the future,
              securing your present, or funding your goals, EZYGRO empowers your
              financial growth with clarity, trust, and innovation.
            </p>
            <div className="flex items-center mt-4 font-semibold text-black cursor-pointer"></div>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="mx-auto px-4 px-6 lg:px-12 container">
          <div className="mb-8 sm:mb-10 md:mb-12 sm:ml-8 md:ml-16 lg:ml-12">
            <h2 className="font-bold text-gray-900 text-3xl sm:text-4xl md:text-4xl">
              Our <span className="text-purple-900">Services</span>
            </h2>
          </div>
          <div className="gap-6 sm:gap-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {/* Card 1: Loans */}
            <div className="bg-white p-6 sm:p-8 border border-gray-200 rounded-lg h-full">
              <h3 className="mb-3 sm:mb-4 font-bold text-gray-900 text-xl sm:text-2xl">
                Loans
              </h3>
              <p className="mb-6 sm:mb-8 text-gray-600 text-sm sm:text-base">
                Whether you&apos;re dreaming of a home, expanding your business,
                or consolidating debt EZYGRO has you covered.
                <br />
                <span className="block h-4" />
                Loan Products We Offer:
              </p>
              <ul className="space-y-3 sm:space-y-4">
                <li className="flex items-center">
                  <span className="flex-shrink-0 mr-3 text-purple-900">■</span>
                  <span className="text-gray-800 text-sm sm:text-base">
                    Home Loans.
                  </span>
                </li>
                <li className="flex items-center">
                  <span className="flex-shrink-0 mr-3 text-purple-900">■</span>
                  <span className="text-gray-800 text-sm sm:text-base">
                    Personal Loans.
                  </span>
                </li>
                <li className="flex items-center">
                  <span className="flex-shrink-0 mr-3 text-purple-900">■</span>
                  <span className="text-gray-800 text-sm sm:text-base">
                    Business Loans.
                  </span>
                </li>
                <li className="flex items-center">
                  <span className="flex-shrink-0 mr-3 text-purple-900">■</span>
                  <span className="text-gray-800 text-sm sm:text-base">
                    Loan Against Property.
                  </span>
                </li>
                <li className="flex items-center">
                  <span className="flex-shrink-0 mr-3 text-purple-900">■</span>
                  <span className="text-gray-800 text-sm sm:text-base">
                    Working Capital Loans.
                  </span>
                </li>
              </ul>
            </div>
            {/* Card 2: Insurance */}
            <div className="bg-white p-6 sm:p-8 border border-gray-200 rounded-lg h-full">
              <h3 className="mb-3 sm:mb-4 font-bold text-gray-900 text-xl sm:text-2xl">
                Insurance
              </h3>
              <p className="mb-6 sm:mb-8 text-gray-600 text-sm sm:text-base">
                Protect what matters most. Our insurance solutions offer
                financial security for you and your loved ones.
                <br />
                <span className="block h-10" />
                Insurance Plans We Provide:
              </p>
              <ul className="space-y-3 sm:space-y-4">
                <li className="flex items-center">
                  <span className="flex-shrink-0 mr-3 text-purple-900">■</span>
                  <span className="text-gray-800 text-sm sm:text-base">
                    Life Insurance.
                  </span>
                </li>
                <li className="flex items-center">
                  <span className="flex-shrink-0 mr-3 text-purple-900">■</span>
                  <span className="text-gray-800 text-sm sm:text-base">
                    Health Insurance.
                  </span>
                </li>
                <li className="flex items-center">
                  <span className="flex-shrink-0 mr-3 text-purple-900">■</span>
                  <span className="text-gray-800 text-sm sm:text-base">
                    Term Plans.
                  </span>
                </li>
                <li className="flex items-center">
                  <span className="flex-shrink-0 mr-3 text-purple-900">■</span>
                  <span className="text-gray-800 text-sm sm:text-base">
                    Motor Insurance.
                  </span>
                </li>
                <li className="flex items-center">
                  <span className="flex-shrink-0 mr-3 text-purple-900">■</span>
                  <span className="text-gray-800 text-sm sm:text-base">
                    Travel & Property Insurance: Trusted Insurers, Claim
                    Assistance, Affordable Premiums.
                  </span>
                </li>
              </ul>
            </div>
            {/* Card 3: Investments */}
            <div className="bg-white p-6 sm:p-8 border border-gray-200 rounded-lg h-full">
              <h3 className="mb-3 sm:mb-4 font-bold text-gray-900 text-xl sm:text-2xl">
                Investments
              </h3>
              <p className="mb-6 sm:mb-8 text-gray-600 text-sm sm:text-base">
                Grow your wealth with confidence. Our investment advisory and
                services are designed to help you reach your financial goals.
                <br />
                <span className="block h-4" />
                Investment Options:
              </p>
              <ul className="space-y-3 sm:space-y-4">
                <li className="flex items-center">
                  <span className="flex-shrink-0 mr-3 text-purple-900">■</span>
                  <span className="text-gray-800 text-sm sm:text-base">
                    Mutual Funds.
                  </span>
                </li>
                <li className="flex items-center">
                  <span className="flex-shrink-0 mr-3 text-purple-900">■</span>
                  <span className="text-gray-800 text-sm sm:text-base">
                    SIPs (Systematic Investment Plans).
                  </span>
                </li>
                <li className="flex items-center">
                  <span className="flex-shrink-0 mr-3 text-purple-900">■</span>
                  <span className="text-gray-800 text-sm sm:text-base">
                    Fixed Deposits.
                  </span>
                </li>
                <li className="flex items-center">
                  <span className="flex-shrink-0 mr-3 text-purple-900">■</span>
                  <span className="text-gray-800 text-sm sm:text-base">
                    Bonds.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white pb-12 sm:pb-16">
        <div className="mx-auto px-4 sm:px-6 md:px-8 lg:px-8 max-w-7xl text-center">
          <p className="text-gray-800 text-base sm:text-lg">
            For any queries, please contact us at:{" "}
            <a
              href="tel:+91 9372963906"
              className="font-bold text-purple-900 hover:underline"
            >
              +91 9372963906
            </a>
          </p>
        </div>
      </section>
    </>
  );
}
