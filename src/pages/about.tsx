import { useState, useEffect, useRef } from "react";
import VisionPurposeValues from "@/components/about/VisionPurposeValues";
import LandingSection from "@/components/common/LandingSection";

const AboutUs = () => {
  const [scaleAtSpeedVisible, setScaleAtSpeedVisible] = useState(false);
  const [promiseTextVisible, setPromiseTextVisible] = useState(false);
  const [secondSectionVisible, setSecondSectionVisible] = useState(false);
  const [secondSectionTextVisible, setSecondSectionTextVisible] =
    useState(false);
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 1024
  );
  const sectionRef = useRef<HTMLElement>(null);

  // Data for the Corporate Citizenship section
  const citizenshipData = [
    {
      title: " Our Belief",
      description:
        "At EZYGRO, we believe true impact comes from creating value that goes beyond business transactions. We’re not just here to offer professional services  we’re here to stand for something greater. Rooted in integrity, trust, and purpose, our belief is that every solution we provide should also contribute to the betterment of society.",
    },
    {
      title: "Our Approach",
      description:
        "We integrate ethical practices into every step of our process from client consultation to community outreach. Our commitment to fairness, clarity, and accessibility ensures that our services remain transparent and people-centered. Through active engagement with our community and a focus on honest business, we strive to lead with both heart and expertise.",
    },
    {
      title: "Our Purpose",
      description:
        "Knowledge is power and at EZYGRO, we share it freely. Whether through workshops, awareness initiatives, or simplified financial education, our goal is to help people make informed choices. We aim to build an inclusive environment where every individual, entrepreneur, or enterprise feels supported, valued, and empowered to grow.",
    },
  ];

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
            setScaleAtSpeedVisible(false);
            setPromiseTextVisible(false);

            // Trigger animations with delays
            setTimeout(() => {
              setScaleAtSpeedVisible(true);
            }, 200);

            setTimeout(() => {
              setPromiseTextVisible(true);
            }, 400);
          } else {
            // Reset animations when not in view
            setScaleAtSpeedVisible(false);
            setPromiseTextVisible(false);
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
          setScaleAtSpeedVisible(true);
          setTimeout(() => {
            setPromiseTextVisible(true);
          }, 200);
        }
      }
    }, 300);

    return () => clearTimeout(initialTimer);
  }, []);

  // Separate animation for second section (no scroll-based reset)
  useEffect(() => {
    const timer = setTimeout(() => {
      setSecondSectionVisible(true);
      setTimeout(() => {
        setSecondSectionTextVisible(true);
      }, 200);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <LandingSection
        title={() => (
          <>
            Who <span className="text-[#4B1D92]">We Are</span>
          </>
        )}
        subtitle="We believe We have the power to revolutionize financial services and uplift communities across the globe."
        media="https://res.cloudinary.com/dt6hlbtfo/image/upload/v1781603504/ouqateooqfpxlruw7wyv.jpg"
      />

      <section className="bg-white py-8 sm:py-10 md:py-12 lg:py-16 xl:py-24 overflow-hidden">
        <div className="mx-auto px-6 lg:px-12 container">
          <div className="items-center gap-6 sm:gap-8 md:gap-10 lg:gap-12 xl:gap-16 grid grid-cols-1 lg:grid-cols-2">
            <div className="relative pl-2 sm:pl-4 md:pl-6 lg:pl-4">
              <h2
                className={`text-xl sm:text-2xl md:text-3xl lg:text-3xl font-medium text-gray-900 tracking-tight transition-all ease-in-out duration-1000 transform ${
                  secondSectionVisible
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 translate-x-10"
                }`}
              >
                Grow Smart with EzyGro
              </h2>
              <p
                className={`mt-4 sm:mt-5 md:mt-6 text-sm sm:text-base md:text-lg lg:text-lg text-gray-600 leading-relaxed transition-all ease-in-out duration-1000 delay-200 transform ${
                  secondSectionTextVisible
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 translate-x-10"
                }`}
              >
                EZYGRO is a visionary initiative founded by Sushma B. Salunkhe
                and Dhanashree B. Salunkhe, designed to offer comprehensive,
                end-to-end solutions across the domains of legal, tax, audit,
                and corporate advisory. Born from a shared passion for
                simplifying the intricate challenges faced by businesses and
                individuals alike, EZYGRO stands as a one-stop destination for
                navigating the evolving regulatory and financial landscape with
                confidence. With a foundation built on trust, ethics, and deep
                industry knowledge, we are committed to delivering more than
                just services we deliver clarity, confidence, and long-term
                value. Whether it&apos;s guiding a startup through its legal
                framework, helping businesses stay compliant, or offering
                tailored financial advice, we combine precision with a personal
                touch to ensure every client receives support that&apos;s both
                strategic and sincere.
              </p>
            </div>
            <div className="rounded-lg w-full h-64 sm:h-72 md:h-80 lg:h-96 xl:h-full overflow-hidden">
              <img
                src="https://res.cloudinary.com/dt6hlbtfo/image/upload/v1781603480/odaoitsz9rx39jlucm7k.jpg"
                alt="Mahindra Group - Modern office building representing innovation and growth"
                className="w-full h-full object-cover transition-transform duration-300 ease-out"
                style={{ transform: `scale(1.05)` }}
              />
            </div>
          </div>
        </div>
      </section>

      <VisionPurposeValues />

      <section className="bg-white py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="mx-auto px-6 lg:px-12 container">
          <div className="mb-8 sm:mb-10 md:mb-12 pl-2 sm:pl-4 md:pl-6 lg:pl-4 text-left">
            <h2 className="font-bold text-gray-900 text-3xl sm:text-4xl md:text-4xl lg:text-5xl tracking-tight">
              EZYGRO for YOU
            </h2>
            <p className="mt-4 sm:mt-5 md:mt-6 max-w-4xl text-gray-600 text-base sm:text-lg md:text-lg lg:text-lg leading-7 sm:leading-8">
              We believe We have the power to revolutionize financial services
              and <br></br>uplift communities across the globe.
            </p>
          </div>
          <div className="gap-6 sm:gap-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {citizenshipData.map((item, index) => (
              <div
                key={index}
                className="group relative bg-gray-50 hover:shadow-lg p-6 sm:p-8 border border-gray-200 transition-shadow duration-300"
              >
                <h3 className="font-semibold text-gray-900 text-lg sm:text-xl">
                  {item.title}
                </h3>
                <p className="mt-3 sm:mt-4 text-gray-600 text-sm sm:text-base">
                  {item.description}
                </p>
                <div className="bottom-0 left-0 absolute bg-purple-900 w-full h-1 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer Line */}
      <div className="bg-black border-gray-800 border-t"></div>
    </>
  );
};

export default AboutUs;
