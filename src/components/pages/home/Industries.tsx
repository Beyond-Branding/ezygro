import { useEffect, useRef, useState, useMemo } from 'react';

const INDUSTRIES_DATA = [
  {
    id: "pharma",
    title: "Pharma",
    link: "#",
    imageUrl: "https://res.cloudinary.com/daoju0r3c/image/upload/v1754237011/pexels-karolina-grabowska-4021811_monxhi.jpg"
  },
  {
    id: "retail",
    title: "Retail",
    link: "#",
    imageUrl: "https://res.cloudinary.com/daoju0r3c/image/upload/v1754236479/pexels-asphotograpy-230544_ns9kr7.jpg"
  },
  {
    id: "real-estate",
    title: "Real Estate & Infrastructure",
    link: "#",
    imageUrl: "https://res.cloudinary.com/daoju0r3c/image/upload/v1754236808/pexels-field-engineer-147254-442150_r9zsru.jpg"
  },
  {
    id: "it",
    title: "Information Technology",
    link: "#",
    imageUrl: "https://res.cloudinary.com/daoju0r3c/image/upload/v1754236647/pexels-cytonn-955402_hfgkbw.jpg"
  },
  {
    id: "banking",
    title: "Banking, Finance & Investment Insurance",
    link: "#",
    imageUrl: "https://res.cloudinary.com/daoju0r3c/image/upload/v1754236946/pexels-artempodrez-5716032_k5s94h.jpg"
  },
  {
    id: "telecom",
    title: "Telecom",
    link: "#",
    imageUrl: "https://res.cloudinary.com/daoju0r3c/image/upload/v1753712273/pexels-tuichupanh-32779161_dwefsm_nk1ev6.jpg"
  },
  {
    id: "hospitality",
    title: "Hospitality & Leisure",
    link: "#",
    imageUrl: "https://res.cloudinary.com/daoju0r3c/image/upload/v1753712270/pexels-nubikini-386009_lrntht_ezoyyd.jpg"
  },
  {
    id: "fmcg",
    title: "FMCG",
    link: "#",
    imageUrl: "https://res.cloudinary.com/daoju0r3c/image/upload/v1753712268/pexels-freestocks-1366594_byxpvw_u8vbpg.jpg"
  },
  {
    id: "automotive",
    title: "Automotive",
    link: "#",
    imageUrl: "https://res.cloudinary.com/daoju0r3c/image/upload/v1753712270/pexels-pixabay-417018_bllqjy_zg6z66.jpg"
  },
  {
    id: "food-beverage",
    title: "Food & Beverage",
    link: "#",
    imageUrl: "https://res.cloudinary.com/daoju0r3c/image/upload/v1753712268/pexels-miff-ibra-387362143-32824086_wckbad_mdcv6f.jpg"
  },
  {
    id: "advertising",
    title: "Advertising",
    link: "#",
    imageUrl: "https://res.cloudinary.com/daoju0r3c/image/upload/v1753712256/pexels-meganbucknall-2448522_etgfdh_uodptf.jpg"
  },
  {
    id: "healthcare",
    title: "Health Care",
    link: "#",
    imageUrl: "https://res.cloudinary.com/daoju0r3c/image/upload/v1753712257/pexels-pixabay-356040_mke2cx_uw4yhh.jpg"
  },
  {
    id: "apparel",
    title: "Apparel & Accessories",
    link: "#",
    imageUrl: "https://res.cloudinary.com/daoju0r3c/image/upload/v1753712256/pexels-arina-krasnikova-5418889_dtyvzu_rn7ymt.jpg"
  },
  {
    id: "call-centers",
    title: "Call Centers",
    link: "#",
    imageUrl: "https://res.cloudinary.com/daoju0r3c/image/upload/v1753712251/pexels-shkrabaanthony-7971724_q7qzz4_bcqzft.jpg"
  },
  {
    id: "consumer-industrial",
    title: "Consumer and Industrial Products",
    link: "#",
    imageUrl: "https://res.cloudinary.com/daoju0r3c/image/upload/v1753712251/pexels-shkrabaanthony-5486124_hlyjhp_l4vppj.jpg"
  },
  {
    id: "educational",
    title: "Educational Institutions",
    link: "#",
    imageUrl: "https://res.cloudinary.com/daoju0r3c/image/upload/v1753712251/pexels-ivan-samkov-5676736_yheiaz_tg30uc.jpg"
  }
];

const Industries = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  
  const sectionRef = useRef<HTMLElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number | null>(null);
  const startTimeRef = useRef<number | null>(null);
  const pausedTimeRef = useRef<number>(0);

  // Create extended array for seamless infinite scroll - only double for better performance
  const displayIndustries = useMemo(() => {
    return [...INDUSTRIES_DATA, ...INDUSTRIES_DATA];
  }, []);

  // Simplified intersection observer
  useEffect(() => {
    if (!sectionRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  // Optimized continuous scroll animation using CSS transforms directly
  useEffect(() => {
    if (!isVisible || !containerRef.current || isPaused) {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
        animationRef.current = null;
      }
      return;
    }

    const container = containerRef.current;
    const cardWidth = 340 + 24; // 340px width + 24px margin
    const totalWidth = INDUSTRIES_DATA.length * cardWidth;
    const scrollSpeed = 80; // Reduced speed for smoother performance

    const animate = (currentTime: number) => {
      if (startTimeRef.current === null) {
        startTimeRef.current = currentTime - pausedTimeRef.current;
      }

      const elapsed = (currentTime - startTimeRef.current) / 1000;
      const translateX = (elapsed * scrollSpeed) % totalWidth;

      // Direct DOM manipulation for better performance
      container.style.transform = `translateX(-${translateX}px)`;
      
      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
        animationRef.current = null;
      }
    };
  }, [isVisible, isPaused]);

  // Handle mouse enter/leave for pausing animation
  const handleMouseEnter = () => {
    if (startTimeRef.current !== null) {
      pausedTimeRef.current = performance.now() - startTimeRef.current;
    }
    setIsPaused(true);
  };

  const handleMouseLeave = () => {
    startTimeRef.current = null;
    setIsPaused(false);
  };

  return (
    <section 
      ref={sectionRef}
      className="pt-8 md:pt-12 pb-16 md:pb-24 bg-white ml-0 sm:ml-4 md:ml-8 lg:ml-12"
    >
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-row items-center justify-between mb-8 sm:mb-10 lg:mb-12 gap-4">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Industries
            </h2>
          </div>

          <div className="relative overflow-hidden w-full">
            <div 
              ref={containerRef}
              className="flex will-change-transform" 
              style={{ 
                transform: 'translateX(0px)', // Initial position
                transition: 'none'
              }}
            >
              {displayIndustries.map((industry, index) => (
                <div
                  key={`${industry.id}-${index}`}
                  className="relative bg-white overflow-hidden group hover:shadow-xl transition-shadow duration-300 ease-in-out aspect-[3/4] cursor-pointer border border-gray-200 mx-3 flex-shrink-0"
                  style={{ width: '340px' }}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                  onClick={handleMouseEnter} // Also pause on click
                >
                  <div className="absolute inset-0">
                    <img
                      src={industry.imageUrl}
                      alt={`${industry.title} Visual`}
                      className="w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
                      loading="lazy"
                      decoding="async"
                      style={{ 
                        willChange: 'transform',
                        backfaceVisibility: 'hidden',
                        perspective: '1000px'
                      }}
                    />
                    <div className="absolute inset-0 bg-black/20"></div>
                  </div>
                  <div className="relative z-10 p-3 sm:p-4 lg:p-6 h-full flex flex-col text-center">
                    <h3 className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-bold leading-tight text-white mb-1 sm:mb-2">
                      {industry.title}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Industries;