import ContactForm from "@/components/careers/ContactForm";
import SectionCard from "@/components/careers/SectionCard";
import { useState, useEffect, useRef } from "react";

const sectionsData = [
  {
    id: 1,
    title: "Why EZYGRO",
    description:
      "Looking to elevate your career with purpose-driven work? At EZYGRO, we believe in transforming businesses through smart finance, compliance, and strategy. Join a team of passionate professionals, innovators, and problem-solvers shaping the future of financial growth. Let your journey grow with ours.",
    alt: "A diverse team collaborating in a modern office meeting room.",
    imageUrl:
      "https://res.cloudinary.com/daoju0r3c/image/upload/v1753712267/whyeszroc_ghbpij_ejujbc.jpg",
  },
  {
    id: 2,
    title: "Empowering Through Finance",
    description:
      "We are a purpose-led firm committed to creating meaningful growth journeys for our clients and team. At EZYGRO, we don’t just deliver financial solutions we empower businesses and people to thrive with clarity, confidence, and compliance. Let’s grow together the EZYGRO way.",
    alt: "A creative team celebrating success with high-fives in a sunlit office.",
    imageUrl:
      "https://res.cloudinary.com/daoju0r3c/image/upload/v1753712265/empoweringc_eazapv_tr8efr.jpg",
  },
  {
    id: 3,
    title: "Diversity & Inclusion at EZYGRO",
    description:
      "We value what makes each of us unique because it’s the differences that drive innovation. At EZYGRO, we’re proudly diverse and consciously inclusive, creating a workplace where every voice matters and every perspective adds value.",
    alt: "A mentor guiding a colleague on a laptop in a bright, collaborative space.",
    imageUrl:
      "https://res.cloudinary.com/daoju0r3c/image/upload/v1754236055/inclsuionc_aczfux_kzkg9f.jpg",
  },
  {
    id: 4,
    title: "Reconnect. Rediscover. Rise Together",
    description:
      "Revisit your journey with EZYGRO reconnect with former colleagues, rediscover new opportunities, and inspire the next wave of growth. Join the EZYGRO Alumni Network to stay updated through newsletters, share your story, and explore pathways to return or collaborate.There are countless reasons to be part of EZYConnect – the EZYGRO Alumni Portal. What’s yours?",
    alt: "An engineer working on complex robotics in a high-tech laboratory.",
    imageUrl:
      "https://res.cloudinary.com/daoju0r3c/image/upload/v1754235999/resetc_u7smca_ldersg.jpg",
  },
];

export default function CareersPage() {
  const [titleVisible, setTitleVisible] = useState(false);
  const [textVisible, setTextVisible] = useState(false);
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 1024
  );
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTitleVisible(false);
            setTextVisible(false);

            setTimeout(() => {
              setTitleVisible(true);
            }, 200);

            setTimeout(() => {
              setTextVisible(true);
            }, 400);
          } else {
            setTitleVisible(false);
            setTextVisible(false);
          }
        });
      },
      {
        threshold: 0.3,
        rootMargin: "-10% 0px -10% 0px",
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const initialTimer = setTimeout(() => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight && rect.bottom > 0;

        if (isVisible) {
          setTitleVisible(true);
          setTimeout(() => {
            setTextVisible(true);
          }, 200);
        }
      }
    }, 300);

    return () => clearTimeout(initialTimer);
  }, []);

  return (
    <>
      <section
        ref={sectionRef}
        className="relative min-h-screen bg-white overflow-hidden -mt-16"
      >
        <div className="absolute inset-0">
          <div className="absolute right-0 top-0 w-full h-full">
            <div
              className="w-full h-full bg-transparent"
              style={{
                clipPath:
                  windowWidth < 640
                    ? "polygon(-375% 75%, 100% 20%, 100% 100%, 0% 100%)"
                    : windowWidth < 1024
                    ? "polygon(-75% 85%, 110% 15%, 100% 100%, 0% 100%)"
                    : "polygon(-25% 90%, 130% 0%, 100% 100%, 0% 100%)",
              }}
            >
              <div className="absolute inset-0 overflow-hidden">
                <img
                  src="https://res.cloudinary.com/daoju0r3c/image/upload/v1753712261/carrer_dtd9ts_iq1nyx.jpg"
                  alt="Careers Background"
                  className="w-full h-full object-cover"
                  style={{ opacity: 1 }}
                />
              </div>
            </div>
          </div>
        </div>
        {/* Content */}
        <div className="relative z-10 min-h-screen max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-16 pt-16 sm:pt-20 md:pt-24 lg:pt-28 pb-8 sm:pb-12 md:pb-16">
          {/* MODIFIED: Added tablet-specific responsive classes */}
          <div className="absolute top-15 left-2 sm:top-16 sm:left-8 md:top-18 md:left-12 lg:top-20 lg:left-20 w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-2xl lg:w-3/5 pr-4 sm:pr-6 md:pr-8 lg:pr-6">
            <div className="overflow-hidden pb-2">
              <h1
                className={`text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold text-gray-900 transition-all duration-1000 ease-out ${
                  titleVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-8 opacity-0"
                }`}
                style={{
                  fontSize:
                    windowWidth < 640
                      ? "26px"
                      : windowWidth < 768
                      ? "32px"
                      : windowWidth < 1024
                      ? "42px"
                      : "54px",
                  lineHeight:
                    windowWidth < 640
                      ? "32px"
                      : windowWidth < 768
                      ? "38px"
                      : windowWidth < 1024
                      ? "48px"
                      : "52px",
                  transform: titleVisible
                    ? "translateY(0px)"
                    : "translateY(32px)",
                }}
              >
                Careers at <span style={{ color: "#4B1D92" }}>EZYGRO</span>
              </h1>
            </div>
            <div
              className={`mt-1 sm:mt-2 md:mt-3 lg:mt-3 transition-all duration-1200 ease-out delay-300 ${
                textVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-6 opacity-0"
              }`}
              style={{
                transform: textVisible ? "translateY(0px)" : "translateY(24px)",
              }}
            >
              <p
                className="text-xs sm:text-sm md:text-base lg:text-base text-gray-800 leading-relaxed font-400"
                style={{
                  fontSize:
                    windowWidth < 640
                      ? "14px"
                      : windowWidth < 768
                      ? "15px"
                      : windowWidth < 1024
                      ? "17px"
                      : "18px",
                  lineHeight:
                    windowWidth < 640
                      ? "16px"
                      : windowWidth < 768
                      ? "18px"
                      : windowWidth < 1024
                      ? "22px"
                      : "24px",
                }}
              >
                Join a dynamic and growth-driven environment where your ideas
                matter. At EZYGRO, we nurture talent, encourage innovation, and
                offer opportunities to build a meaningful, future-ready career.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="bg-white py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8 lg:px-8">
          <div className="mx-auto flex flex-col gap-12 sm:gap-16 md:gap-20 lg:gap-24">
            {sectionsData.map((section, index) => (
              <SectionCard key={index} section={section} index={index} />
            ))}
          </div>
        </div>
      </div>

      <ContactForm />
    </>
  );
}
