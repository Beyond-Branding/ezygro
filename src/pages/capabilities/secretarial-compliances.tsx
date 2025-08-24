import LandingSection from "@/components/common/LandingSection";
import { useState, useEffect, useRef } from "react";

export default function SecretarialCompliancesPage() {
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 1024
  );

  const services = [
    {
      title: "Company Law Compliance",
      description:
        "Ensure your company is fully compliant with the Companies Act, 2013 and MCA requirements.",
      features: [
        "MCA Filings (MGT-7, AOC-4, etc.).",
        "Board & General Meeting Support.",
        "Maintenance of Statutory Registers.",
        "Director Disclosures & Resolutions.",
        "XBRL Filing.",
      ],
    },
    {
      title: "Incorporation & Entity Structuring",
      description: "Start your business on the right foot.",
      features: [
        "Private Limited / LLP / OPC Incorporation.",
        "Name Reservation (RUN & SPICe+).",
        "PAN, TAN, GST, and other statutory registrations.",
        "Shareholder Agreements & MoA/ AoA Drafting.",
      ],
    },
    {
      title: "Annual Filings and Returns",
      description: "Avoid penalties and non-compliance notices.",
      features: [
        "Timely MCA Filings.",
        "DIN KYC Compliance.",
        "Filing of MSME and Beneficial Ownership Returns.",
        "Event-based Compliance Monitoring.",
      ],
    },
    {
      title: "FEMA and RBI Compliance",
      description: "Simplify cross-border transactions and investments.",
      features: [
        "FDI Reporting (FC-GPR, FC-TRS, etc.).",
        "RBI Approvals and Compliance Filings.",
        "ODI Compliance.",
        "FEMA Advisory & Documentation.",
      ],
    },
    {
      title: "Corporate Governance & Advisory",
      description: "Promote transparency and ethical business practices.",
      features: [
        "Secretarial Audits.",
        "Corporate Governance Reports.",
        "Board PMCAess Improvements.",
        "Compliance Calendar Maintenance.",
      ],
    },
  ];

  // --- Carousel State and Logic ---
  const visibleCards = windowWidth < 1024 ? (windowWidth < 768 ? 1 : 2) : 3;
  const cloneCount = visibleCards;

  const [currentIndex, setCurrentIndex] = useState(cloneCount);
  const [isTransitioning, setIsTransitioning] = useState(true);

  const autoScrollRef = useRef<number | NodeJS.Timeout | null>(null);
  const transitionRef = useRef<number | null>(null);

  const extendedServices = [
    ...services.slice(-cloneCount),
    ...services,
    ...services.slice(0, cloneCount),
  ];

  const handleNext = () => {
    if (!isTransitioning) return;
    setCurrentIndex((prev) => prev + 1);
  };

  const handlePrev = () => {
    if (!isTransitioning) return;
    setCurrentIndex((prev) => prev - 1);
  };

  const pauseAutoScroll = () => {
    if (autoScrollRef.current) clearInterval(autoScrollRef.current);
    autoScrollRef.current = setTimeout(() => {
      autoScrollRef.current = setInterval(handleNext, 4000);
    }, 5000); // Resume after 5 seconds
  };

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (transitionRef.current) clearTimeout(transitionRef.current as number);
    // When reaching the end (right after last real card), jump to the first real card instantly
    if (currentIndex === extendedServices.length - cloneCount) {
      setIsTransitioning(false);
      setCurrentIndex(cloneCount);
    }
    // When reaching the start (left before first real card), jump to the last real card instantly
    else if (currentIndex === 0) {
      setIsTransitioning(false);
      setCurrentIndex(extendedServices.length - 2 * cloneCount);
    } else if (!isTransitioning) {
      setTimeout(() => {
        setIsTransitioning(true);
      }, 50);
    }
    return () => {
      if (transitionRef.current) clearTimeout(transitionRef.current as number);
    };
  }, [currentIndex, cloneCount, extendedServices.length, isTransitioning]);

  useEffect(() => {
    pauseAutoScroll();
    return () => {
      if (autoScrollRef.current) clearInterval(autoScrollRef.current);
    };
  }, [currentIndex]);

  return (
    <>
      <LandingSection
        title={() => (
          <>
            Secretarial <span className="text-[#4B1D92]">Compliances</span>
          </>
        )}
        subtitle="Ensure smooth governance with complete Secretarial Compliance services. From MCA filings to board meeting documentation, we help you stay legally sound and effortlesslycompliant."
        media="https://res.cloudinary.com/daoju0r3c/image/upload/v1753712255/6_c7rl1n_h4r5tf.jpg"
      />

      <section className="bg-white py-16 md:py-20">
        <div className="items-center gap-8 md:gap-12 grid grid-cols-1 md:grid-cols-2 mx-auto px-4 px-6 lg:px-12 container">
          <div>
            <h2 className="sm:ml-8 md:ml-16 lg:ml-12 font-bold text-black text-3xl md:text-4xl">
              Stay Compliant Stay Confident
            </h2>
          </div>
          <div>
            <p className="text-gray-800 md:text-lg leading-relaxed">
              At EZYGRO, we specialize in end-to-end Corporate Secretarial and
              Compliance Services tailored to meet the evolving needs of
              startups, SMEs, and large enterprises. We understand that staying
              compliant in today&apos;s dynamic regulatory environment is both
              critical and complex. That&apos;s why our solutions are designed
              not just for compliance, but to support your business in scaling
              responsibly and sustainably. With deep domain expertise and a
              constantly updated understanding of legal and regulatory
              frameworks, we ensure that your company remains legally sound,
              risk free, and fully compliant with all statutory requirements
              including the Companies Act, SEBI regulations, FEMA guidelines,
              and more. From incorporation, board governance, and statutory
              filings to complex corporate restructuring and due diligence, we
              provide strategic guidance at every step. At EZYGRO, we are more
              than just service providers we are your long term compliance
              partners, committed to aligning regulatory integrity with your
              growth ambitions.
            </p>
            <div className="flex items-center mt-4 font-semibold text-black cursor-pointer"></div>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-16 sm:py-24 md:py-28 overflow-hidden">
        <div className="mx-auto px-6 lg:px-12 container">
          <div className="flex justify-between items-center mb-12 md:mb-16 sm:ml-8 md:ml-16 lg:ml-12">
            <h2 className="font-bold text-gray-900 text-4xl md:text-5xl">
              Our <span className="text-purple-900">Services</span>
            </h2>
            <div className="flex gap-4">
              <button
                onClick={() => {
                  handlePrev();
                  pauseAutoScroll();
                }}
                className="flex justify-center items-center hover:bg-gray-100 border border-gray-400 rounded-full w-12 h-12 text-gray-800 text-2xl transition"
                aria-label="Previous"
              >
                &lt;
              </button>
              <button
                onClick={() => {
                  handleNext();
                  pauseAutoScroll();
                }}
                className="flex justify-center items-center hover:bg-gray-100 border border-gray-400 rounded-full w-12 h-12 text-gray-800 text-2xl transition"
                aria-label="Next"
              >
                &gt;
              </button>
            </div>
          </div>
          <div className="overflow-hidden">
            <div
              className="flex"
              style={{
                width: `${(extendedServices.length / visibleCards) * 100}%`,
                transform: `translateX(-${
                  currentIndex * (100 / extendedServices.length)
                }%)`,
                transition: isTransitioning
                  ? "transform 300ms cubic-bezier(0.4,0,0.2,1)"
                  : "none",
              }}
            >
              {extendedServices.map((service, index) => (
                <div
                  key={index}
                  className="px-4 md:px-6"
                  style={{ width: `${100 / extendedServices.length}%` }}
                >
                  <div className="flex flex-col bg-white p-8 md:p-10 border border-gray-200 rounded-lg h-full">
                    <h3 className="mb-4 md:mb-6 font-bold text-gray-900 text-2xl md:text-3xl">
                      {service.title}
                    </h3>
                    <p className="mb-2 md:mb-4 text-gray-600 md:text-lg">
                      {service.description}
                    </p>
                    <ul className="flex-grow space-y-4 md:space-y-5">
                      {service.features.map((feature, fIndex) => (
                        <li key={fIndex} className="flex items-start">
                          <span className="flex-shrink-0 mt-1 mr-3 text-purple-900">
                            ■
                          </span>
                          <span className="text-gray-800 md:text-lg">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white pb-16 md:pb-20">
        <div className="mx-auto px-4 sm:px-6 md:px-8 lg:px-8 max-w-7xl text-center">
          <p className="text-gray-800 text-lg md:text-xl">
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
