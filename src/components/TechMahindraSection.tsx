import React, { useState, useEffect } from "react";
import { ChevronUp } from "lucide-react";

const EzygroHeroSection = () => {
  const [textVisible, setTextVisible] = useState(false);
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
    const timer = setTimeout(() => {
      setTextVisible(true);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  const headingFontSize =
    windowWidth < 640 ? "26px" : windowWidth < 1024 ? "38px" : "54px";
  const paraFontSize =
    windowWidth < 640 ? "14px" : windowWidth < 1024 ? "16px" : "18px";
  const paraLineHeight =
    windowWidth < 640 ? "16px" : windowWidth < 1024 ? "20px" : "24px";

  return (
    <section
      id="ezygro"
      className="relative min-h-screen bg-white overflow-hidden -mt-16"
    >
      <div className="absolute inset-0">
        <div className="absolute right-0 top-0 w-full h-full">
          <div
            className="w-full h-full bg-transparent"
            style={{
              clipPath:
                windowWidth < 768
                ? 'polygon(-375% 75%, 100% 35%, 100% 100%, 0% 100%)'
                : 'polygon(-25% 90%, 130% 0%, 100% 100%, 0% 100%)'
            }}
          >
            <div className="absolute inset-0 overflow-hidden">
              <video
                className="w-full h-full object-cover opacity-"
                autoPlay
                muted
                loop
                playsInline
              >
                <source
                  src="https://res.cloudinary.com/dzlxesyxg/video/upload/v1751692183/7_unfk2r.mp4"
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
              <div className="absolute inset-0 bg-gradient-to-br from-[#4B1D92]/60 via-[#4B1D92]/40 to-black/70"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Text Container */}
      <div
        className="absolute left-0 right-0 z-20 w-full max-w-7xl mx-auto px-4 sm:px-6 flex md:hidden flex-col items-start"
        style={{ top: "4rem", pointerEvents: "none" }}
      >
        {/* Mobile text content... */}
        <div className="space-y-2 sm:space-y-4 text-left w-full max-w-full sm:max-w-lg">
          <div
            className={`transition-all duration-1000 ease-out ${
              textVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0"
            }`}
            style={{ pointerEvents: "auto" }}
          >
            <h1
              className="font-bold text-gray-900"
              style={{
                fontSize: headingFontSize,
                lineHeight: 1.1,
                fontWeight: 600,
              }}
            >
              <span className="text-gray-900 block">Grow Easily</span>
              <span className="text-[#4B1D92] block mt-0.5">with EZYGRO</span>
            </h1>
          </div>
          <div
            className={`transition-all duration-1000 ease-out delay-300 ${
              textVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0"
            }`}
            style={{ pointerEvents: "auto" }}
          >
            <p
              className="text-gray-700 leading-snug mt-1 sm:mt-2 font-400 text-left"
              style={{
                fontSize: paraFontSize,
                lineHeight: paraLineHeight,
                fontWeight: 400,
              }}
            >
              In today’s fast-paced business environment, success requires
              financial clarity and compliance you can count on. EZYGRO empowers
              you with smart solutions that drive sustainable growth, strategic
              decision-making, and operational excellence—all at the speed your
              business demands.
            </p>
          </div>
        </div>
      </div>

      {/* Desktop Text Container */}
      <div
        className={`relative z-10 min-h-screen max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 pt-16 sm:pt-24 lg:pt-28 pb-8 sm:pb-16 hidden md:flex`}
      >
                <div
          className="absolute top-15 left-2 sm:top-20 sm:left-12 lg:top-20 lg:left-20 w-full max-w-xs sm:max-w-lg lg:max-w-2xl lg:w-3/5 pr-4 sm:pr-6 lg:pr-6"
        >
          <div className="space-y-2 sm:space-y-4 text-left w-full max-w-full sm:max-w-lg">
            <div className="overflow-hidden pb-2">
              <h1
                className={`font-semibold text-gray-900 transition-all duration-1000 ease-out ${
                  textVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-8 opacity-0"
                }`}
                style={{
                  fontSize: headingFontSize,
                  lineHeight: windowWidth < 640 ? '32px' : windowWidth < 1024 ? '42px' : '52px',
                  fontWeight: 600,
                  transform: textVisible ? 'translateY(0px)' : 'translateY(32px)'
                }}
              >
                <span className="text-gray-900 block">Grow Easily</span>
                <span className="text-[#4B1D92] block mt-0.5">with EZYGRO</span>
              </h1>
            </div>

            <div
              className={`mt-1 sm:mt-2 lg:mt-3 transition-all duration-1200 ease-out delay-300 ${
                textVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-6 opacity-0"
              }`}
              style={{
                transform: textVisible ? 'translateY(0px)' : 'translateY(24px)'
              }}
            >
              <p 
                className="text-gray-800 leading-relaxed font-400 text-left"
                style={{
                  fontSize: paraFontSize,
                  lineHeight: paraLineHeight,
                  fontWeight: 400,
                }}
              >
                In today's fast paced business environment, success requires
                financial clarity and compliance you can rely on. EZYGRO empowers
                you with smart solutions that drive sustainable growth, strategic
                decision making, and operational excellence all at the speed your
                business demands.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EzygroHeroSection;
