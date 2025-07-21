import { useEffect, useRef, useState, useCallback } from 'react';

const Industries = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  
  const industries = [
    {
      title: "Pharma",
      link: "#",
      imageUrl: "https://res.cloudinary.com/dzlxesyxg/image/upload/v1751531424/pexels-karolina-grabowska-4021811_fydijx.jpg"
    },
    {
      title: "Retail",
      link: "#",
      imageUrl: "https://res.cloudinary.com/dzlxesyxg/image/upload/v1751531527/pexels-asphotograpy-230544_i77lpd.jpg"
    },
    {
      title: "Real Estate & Infrastructure",
      link: "#",
      imageUrl: "https://res.cloudinary.com/dzlxesyxg/image/upload/v1751531756/pexels-brett-sayles-2881224_m6w7rj.jpg"
    },
    {
      title: "Information Technology",
      link: "#",
      imageUrl: "https://res.cloudinary.com/dzlxesyxg/image/upload/v1751531878/pexels-cytonn-955402_ioqecu.jpg"
    },
    {
      title: "Banking, Finance & Investment Insurance",
      link: "#",
      imageUrl: "https://res.cloudinary.com/dzlxesyxg/image/upload/v1751532018/pexels-artempodrez-5716032_hwbayc.jpg"
    },
    {
      title: "Telecom",
      link: "#",
      imageUrl: "https://res.cloudinary.com/dzlxesyxg/image/upload/v1751532125/pexels-tuichupanh-32779161_dwefsm.jpg"
    },
    {
      title: "Hospitality & Leisure",
      link: "#",
      imageUrl: "https://res.cloudinary.com/dzlxesyxg/image/upload/v1751532257/pexels-nubikini-386009_lrntht.jpg"
    },
    {
      title: "FMCG",
      link: "#",
      imageUrl: "https://res.cloudinary.com/dzlxesyxg/image/upload/v1751532407/pexels-freestocks-1366594_byxpvw.jpg"
    },
    {
      title: "Automotive",
      link: "#",
      imageUrl: "https://res.cloudinary.com/dzlxesyxg/image/upload/v1751532529/pexels-pixabay-417018_bllqjy.jpg"
    },
    {
      title: "Food & Beverage",
      link: "#",
      imageUrl: "https://res.cloudinary.com/dzlxesyxg/image/upload/v1751532589/pexels-miff-ibra-387362143-32824086_wckbad.jpg"
    },
    {
      title: "Advertising",
      link: "#",
      imageUrl: "https://res.cloudinary.com/dzlxesyxg/image/upload/v1751532728/pexels-meganbucknall-2448522_etgfdh.jpg"
    },
    {
      title: "Health Care",
      link: "#",
      imageUrl: "https://res.cloudinary.com/dzlxesyxg/image/upload/v1751532797/pexels-pixabay-356040_mke2cx.jpg"
    },
    {
      title: "Apparel & Accessories",
      link: "#",
      imageUrl: "https://res.cloudinary.com/dzlxesyxg/image/upload/v1751532868/pexels-arina-krasnikova-5418889_dtyvzu.jpg"
    },
    {
      title: "Call Centers",
      link: "#",
      imageUrl: "https://res.cloudinary.com/dzlxesyxg/image/upload/v1751532916/pexels-shkrabaanthony-7971724_q7qzz4.jpg"
    },
    {
      title: "Consumer and Industrial Products",
      link: "#",
      imageUrl: "https://res.cloudinary.com/dzlxesyxg/image/upload/v1751532966/pexels-shkrabaanthony-5486124_hlyjhp.jpg"
    },
    {
      title: "Educational Institutions",
      link: "#",
      imageUrl: "https://res.cloudinary.com/dzlxesyxg/image/upload/v1751533011/pexels-ivan-samkov-5676736_yheiaz.jpg"
    }
  ];

  const tickerRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardWidth, setCardWidth] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // Intersection Observer to detect when section is visible
  useEffect(() => {
    if (sectionRef.current) {
      observerRef.current = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            // Use requestIdleCallback for non-critical updates
            if ('requestIdleCallback' in window) {
              window.requestIdleCallback(() => {
                setIsVisible(entry.isIntersecting);
              });
            } else {
              setIsVisible(entry.isIntersecting);
            }
          });
        },
        {
          threshold: 0.2, // Increased threshold to reduce false triggers
          rootMargin: '100px 0px' // Larger margin for better performance
        }
      );

      observerRef.current.observe(sectionRef.current);
    }

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  // Debounced resize calculation with passive listeners
  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    let rafId: number;
    
    const calculateCardWidth = () => {
      if (cardRef.current) {
        const cardElement = cardRef.current;
        const style = window.getComputedStyle(cardElement);
        const margin = parseFloat(style.marginLeft) + parseFloat(style.marginRight);
        setCardWidth(cardElement.offsetWidth + margin);
      }
    };

    const debouncedCalculate = () => {
      clearTimeout(timeoutId);
      cancelAnimationFrame(rafId);
      timeoutId = setTimeout(() => {
        rafId = requestAnimationFrame(calculateCardWidth);
      }, 150); // Increased debounce time for better performance
    };

    // Initial calculation with RAF
    rafId = requestAnimationFrame(calculateCardWidth);

    // Use passive listeners for better scroll performance
    window.addEventListener('resize', debouncedCalculate, { passive: true });

    return () => {
      window.removeEventListener('resize', debouncedCalculate);
      clearTimeout(timeoutId);
      cancelAnimationFrame(rafId);
    };
  }, []);

  const resetAutoScroll = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    
    // Only start auto-scroll if section is visible and not hovered
    if (isVisible && !isHovered) {
      intervalRef.current = setInterval(() => {
        setCurrentIndex(prev => prev + 1);
      }, 3000); // Auto-scroll every 3 seconds
    }
  }, [isVisible, isHovered]);

  // Auto-scroll effect - only when visible
  useEffect(() => {
    if (cardWidth > 0) {
      resetAutoScroll();
    }
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [cardWidth, resetAutoScroll, isVisible, isHovered]);

  // Optimized transform effect - now using inline styles instead of manual DOM manipulation
  useEffect(() => {
    if (currentIndex < 0) {
      // Reset to last item without transition
      setCurrentIndex(industries.length - 1);
    } else if (currentIndex >= industries.length) {
      // Reset to first item after animation completes
      const timeoutId = setTimeout(() => {
        setCurrentIndex(0);
      }, 500);
      return () => clearTimeout(timeoutId);
    }
  }, [currentIndex, industries.length]);

  const handleMouseEnter = useCallback(() => {
    setIsHovered(true);
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  }, []);

  const handleMouseLeave = useCallback(() => {
    setIsHovered(false);
    resetAutoScroll();
  }, [resetAutoScroll]);

  return (
    <section 
      ref={sectionRef}
      className="pt-8 md:pt-12 pb-16 md:pb-24 bg-white ml-0 sm:ml-4 md:ml-8 lg:ml-12"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
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
              className="ticker-track flex w-max will-change-transform" 
              ref={tickerRef}
              style={{ 
                transform: cardWidth > 0 ? `translateX(-${currentIndex * cardWidth}px)` : 'translateX(0px)',
                transition: 'transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)'
              }}
            >
              {[...industries, ...industries].map((industry, index) => (
                <div
                  ref={index === 0 ? cardRef : null}
                  key={index}
                  className="relative bg-white overflow-hidden group hover:shadow-xl transition-all duration-500 ease-in-out aspect-[3/4] cursor-pointer border border-gray-200 m-2 flex-shrink-0"
                  style={{ width: '340px' }}
                >
                  <div className="absolute inset-0">
                    {/* ## CHANGE 1: Removed grayscale classes ## */}
                    <img
                      src={industry.imageUrl}
                      alt={`${industry.title} Visual`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500 ease-in-out will-change-transform"
                      loading="lazy"
                      decoding="async"
                    />
                    {/* ## CHANGE 2: Adjusted overlay ## */}
                    <div className="absolute inset-0 bg-black/20 transition-all duration-500"></div>
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