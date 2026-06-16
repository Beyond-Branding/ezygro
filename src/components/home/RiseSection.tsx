import React, { useState, useEffect } from "react";

export default function RiseSection() {
  const [scale, setScale] = useState(1.15);
  const [contentVisible, setContentVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("rise-section");
      if (section) {
        const rect = section.getBoundingClientRect();
        const viewportHeight = window.innerHeight;

        if (rect.top < viewportHeight * 0.75) {
          setContentVisible(true);
        }

        if (rect.top < viewportHeight && rect.bottom > 0) {
          const scrollProgress = Math.max(
            0,
            Math.min(1, rect.top / viewportHeight)
          );
          const scaleAmount = window.innerWidth < 768 ? 0.1 : 0.15;
          const newScale = 1 + scrollProgress * scaleAmount;
          setScale(newScale);
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      id="rise-section"
      className="bg-white py-8 sm:py-12 md:py-16 lg:py-24 xl:py-32 overflow-hidden"
    >
      <div className="mx-auto px-4 sm:px-6 lg:px-8 container">
        <div className="items-center gap-6 sm:gap-8 lg:gap-12 xl:gap-16 grid grid-cols-1 lg:grid-cols-2">
          {/* Image */}
          <div className="rounded-lg w-full h-64 sm:h-80 md:h-96 lg:h-full overflow-hidden">
            <img
              src="https://res.cloudinary.com/dt6hlbtfo/image/upload/v1781603485/eixwtaq3tqptrm3cdcz8.jpg"
              alt="Misty mountains at sunrise, representing the 'RISE' philosophy"
              className="w-full h-full object-cover transition-transform duration-300 ease-out"
              style={{ transform: `scale(${scale})` }}
            />
          </div>

          {/* Content */}
          <div className="relative">
            <h2
              className={`text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 tracking-tight transition-all ease-in-out duration-1000 transform ${
                contentVisible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-10"
              }`}
            >
              GROW
            </h2>
            <p
              className={`mt-4 sm:mt-6 text-sm sm:text-base lg:text-lg text-gray-600 leading-relaxed transition-all ease-in-out duration-1000 delay-200 transform ${
                contentVisible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-10"
              }`}
            >
              At EZYGRO, &lsquo;GROW&rsquo; is more than just a word it&apos;s a
              mindset thatshapes everything we do. It defines how we empower
              businesses,support our people, and contribute to society. We grow
              withintegrity by building relationships rooted in trust,
              transparency,and ethical practices. We grow for the future by
              embracinginnovation, continuous learning, and adaptability in a
              changingworld. And we grow by creating impact delivering real,
              measurablevalue to our clients, teams, and the communities we
              serve. AtEZYGRO, growth is not just a goal; it&apos;s a shared
              journey.
            </p>
            <div
              className={`mt-6 sm:mt-8 transition-all ease-in-out duration-1000 delay-400 transform ${
                contentVisible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-10"
              }`}
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
}
