import { useState, useEffect, useRef } from "react";
import { ArrowRight } from "lucide-react";
import LandingSection from "@/components/common/LandingSection";

export default function CapabilitiesPage() {
  const [capabilitiesVisible, setCapabilitiesVisible] = useState(false);
  const [descriptionVisible, setDescriptionVisible] = useState(false);
  const [cardsVisible, setCardsVisible] = useState(false);
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 1024
  );
  const sectionRef = useRef<HTMLElement>(null);

  const capabilities = [
    {
      id: 1,
      title: "Financial and Accounting Management",
      image:
        "https://res.cloudinary.com/dt6hlbtfo/image/upload/v1781603485/xczmtrbe2pkolzu9wjhl.jpg",
      link: "/financial-accounting",
    },
    {
      id: 2,
      title: (
        <>
          Income Tax, GST and <br /> Audits
        </>
      ),
      image:
        "https://res.cloudinary.com/dt6hlbtfo/image/upload/v1781603487/ddzdn2zskynkjzuwgmoq.jpg",
      link: "/income-tax",
    },
    {
      id: 3,
      title: "Virtual CFO and Business Growth Consultancy",
      image:
        "https://res.cloudinary.com/dt6hlbtfo/image/upload/v1781603499/tsifig2rnu5n0s5lsjgf.jpg",
      link: "/virtual-cfo",
    },
    {
      id: 4,
      title: (
        <>
          Innovative <br /> Dashboards
        </>
      ),
      image:
        "https://res.cloudinary.com/dt6hlbtfo/image/upload/v1781603483/kdlecoghxrl8rs5jhjc4.jpg",
      link: "/innovative-dashboards",
    },
    {
      id: 5,
      title: "Loans, Insurance and Investments",
      image:
        "https://res.cloudinary.com/dt6hlbtfo/image/upload/v1781603489/u5rrxcsqyan2mggjn8sa.jpg",
      link: "/loans-insurance",
    },
    {
      id: 6,
      title: (
        <>
          Secretarial <br /> Compliances
        </>
      ),
      image:
        "https://res.cloudinary.com/dt6hlbtfo/image/upload/v1781603497/pmivnnigs7s29jsquuem.jpg",
      link: "/secretarial-compliances",
    },
  ];

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Intersection Observer for scroll-based animations
  useEffect(() => {
    const node = sectionRef.current;

    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Reset animations first
            setCapabilitiesVisible(false);
            setDescriptionVisible(false);

            // Trigger animations with delays
            setTimeout(() => {
              setCapabilitiesVisible(true);
            }, 200);

            setTimeout(() => {
              setDescriptionVisible(true);
            }, 400);
          } else {
            // Reset animations when not in view
            setCapabilitiesVisible(false);
            setDescriptionVisible(false);
          }
        });
      },
      {
        threshold: 0.3, // Trigger when 30% of the section is visible
        rootMargin: "-10% 0px -10% 0px", // Add some margin to fine-tune trigger point
      }
    );

    observer.observe(node);

    return () => {
      observer.unobserve(node);
    };
  }, []);

  // Initial text animations on component mount
  useEffect(() => {
    // Initial animation trigger for first load
    const initialTimer = setTimeout(() => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight && rect.bottom > 0;

        if (isVisible) {
          setCapabilitiesVisible(true);
          setTimeout(() => {
            setDescriptionVisible(true);
          }, 200);
        }
      }
    }, 300);

    return () => clearTimeout(initialTimer);
  }, []);

  // Separate animation for cards section (no scroll-based reset)
  useEffect(() => {
    const timer = setTimeout(() => {
      setCardsVisible(true);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <LandingSection
        title={() => (
          <>
            Grow <span className="text-[#4B1D92]">Smart</span>
          </>
        )}
        subtitle="At EZYGRO, we turn smart plans into smoother journeys no stress, just results."
        media="https://res.cloudinary.com/dt6hlbtfo/image/upload/v1781603481/esukyeooi7lkwq6fiddq.jpg"
      />

      {/* Capabilities Cards Section - now outside and below the first section */}
      <div className="z-10 relative mx-auto px-4 sm:px-6 md:px-8 lg:px-8 pb-12 sm:pb-16">
        <div className="mx-auto px-6 lg:px-12 container">
          <div className="mt-6 sm:mt-8 mb-8 sm:mb-10 md:mb-12 text-left">
            <h2 className="mb-3 sm:mb-4 font-bold text-gray-900 text-2xl sm:text-3xl md:text-4xl lg:text-4xl">
              What We Do
            </h2>
          </div>
          <div className="gap-4 sm:gap-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((cap, index) => (
              <a
                key={cap.id}
                href={cap.link}
                className={`group relative cursor-pointer transform transition-all duration-700 ease-out hover:scale-105 w-full ${
                  cardsVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-8 opacity-0"
                }`}
                style={{
                  transitionDelay: `${index * 150}ms`,
                }}
              >
                <div className="relative flex flex-col justify-between bg-white hover:bg-purple-900 shadow-md p-6 sm:p-8 h-full min-h-[420px] sm:min-h-[470px] transition-all duration-500">
                  <div className="flex justify-center mb-4 sm:mb-6 pt-6 sm:pt-8">
                    <div className="rounded-full w-48 sm:w-60 h-48 sm:h-60 overflow-hidden">
                      <img
                        src={cap.image}
                        alt={"Image for capability"}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col flex-1 justify-end">
                    <h3 className="mb-3 sm:mb-4 font-semibold text-gray-900 group-hover:text-white text-lg sm:text-xl text-center transition-colors duration-500">
                      {cap.title}
                    </h3>
                    <div className="flex justify-end">
                      <ArrowRight className="w-5 h-5 text-gray-600 group-hover:text-white transition-colors duration-500" />
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
