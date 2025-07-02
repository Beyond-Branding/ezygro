import React, { useEffect, useRef, useState } from 'react';

const CapabilitiesSection = () => {
  const capabilities = [
    {
      title: "Pharma",
      link: "https://www.techmahindra.com/services/artificial-intelligence/",
      imageUrl: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1"
    },
    {
      title: "Retail",
      link: "#",
      imageUrl: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1"
    },
    {
      title: "Real Estate & Infrastructure",
      link: "#",
      imageUrl: "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1"
    },
    {
      title: "Information Technology",
      link: "#",
      imageUrl: "https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1"
    },
    {
      title: "Banking, Finance & Investment Insurance",
      link: "#",
      imageUrl: "https://images.pexels.com/photos/3862132/pexels-photo-3862132.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1"
    },
    {
      title: "Telecom",
      link: "#",
      imageUrl: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1"
    },
    {
      title: "Hospitality & Leisure",
      link: "#",
      imageUrl: "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1"
    },
    {
      title: "FMCG",
      link: "#",
      imageUrl: "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1"
    },
    {
      title: "Automotive",
      link: "#",
      imageUrl: "https://images.pexels.com/photos/3862132/pexels-photo-3862132.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1"
    },
    {
      title: "Food & Beverage",
      link: "#",
      imageUrl: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1"
    },
    {
      title: "Advertising",
      link: "#",
      imageUrl: "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1"
    },
    {
      title: "Health Care",
      link: "#",
      imageUrl: "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1"
    },
    {
      title: "Apparel & Accessories",
      link: "#",
      imageUrl: "https://images.pexels.com/photos/3862132/pexels-photo-3862132.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1"
    },
    {
      title: "Call Centers",
      link: "#",
      imageUrl: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1"
    },
    {
      title: "Consumer and Industrial Products",
      link: "#",
      imageUrl: "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1"
    },
    {
      title: "Educational Institutions",
      link: "#",
      imageUrl: "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1"
    }
  ];

  const progressRef = useRef<HTMLDivElement>(null);
  const tickerRef = useRef<HTMLDivElement>(null);
  const [progressKey, setProgressKey] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  
  const duration = 120000; // 120 seconds for slow scroll
  const pauseDuration = 1000; // 1 second pause at the end of a cycle

  useEffect(() => {
    const ticker = tickerRef.current;
    if (!ticker) return;
    
    let timeout: ReturnType<typeof setTimeout>;

    const handleIteration = () => {
      setIsPaused(true);
      timeout = setTimeout(() => {
        setIsPaused(false);
        setProgressKey(prev => prev + 1);
      }, pauseDuration);
    };

    ticker.addEventListener('animationiteration', handleIteration);

    return () => {
      ticker.removeEventListener('animationiteration', handleIteration);
      if (timeout) clearTimeout(timeout);
    };
  }, [pauseDuration]);

  useEffect(() => {
    let req: number;
    let start: number | null = null;

    function animateProgress(timestamp: number) {
      if (isPaused) {
        if (progressRef.current) progressRef.current.style.width = '100%';
        return;
      }

      if (start === null) start = timestamp;
      
      const elapsed = timestamp - start;
      const percent = Math.min((elapsed / duration) * 100, 100);

      if (progressRef.current) {
        progressRef.current.style.width = percent + '%';
      }

      if (elapsed < duration) {
        req = requestAnimationFrame(animateProgress);
      } else if (progressRef.current) {
        progressRef.current.style.width = '100%';
      }
    }

    if (progressRef.current) {
      progressRef.current.style.width = isPaused ? '100%' : '0%';
    }

    if (!isPaused) {
      req = requestAnimationFrame(animateProgress);
    }

    return () => cancelAnimationFrame(req);
  }, [progressKey, duration, isPaused]);

  return (
    <section className="pt-8 md:pt-12 pb-16 md:pb-24 bg-white">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between mb-8 sm:mb-10 lg:mb-12 gap-4 sm:gap-6 lg:gap-8">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 lg:w-1/3">
              Industries
            </h2>
          </div>
          <div className="relative overflow-hidden w-full">
            <div
              className={`ticker-track flex w-max${isPaused ? '' : ' animate-ticker'}`}
              ref={tickerRef}
              style={{
                animationPlayState: isPaused ? 'paused' : 'running',
                animationDuration: `${duration}ms`
              }}
            >
              {capabilities.concat(capabilities).map((capability, index) => (
                <div
                  key={index}
                  className="relative bg-white overflow-hidden group hover:shadow-xl transition-all duration-500 ease-in-out aspect-[3/4] cursor-pointer border border-gray-200 m-2 min-w-[320px] max-w-[360px] flex-shrink-0"
                  style={{ width: '340px' }}
                >
                  <div className="absolute inset-0">
                    <img
                      src={capability.imageUrl}
                      alt={`${capability.title} Visual`}
                      className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500 ease-in-out"
                    />
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-500"></div>
                  </div>
                  <div className="relative z-10 p-3 sm:p-4 lg:p-6 h-full flex flex-col text-center">
                    <h3 className="text-sm sm:text-base lg:text-lg xl:text-xl font-bold leading-tight text-white mb-1 sm:mb-2">
                      {capability.title}
                    </h3>
                    {capability && (
                      <div className="absolute inset-0 flex items-center justify-center p-3 sm:p-4 lg:p-6">
                        <p className="text-xs sm:text-sm text-gray-200 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200 text-center leading-relaxed">
                          
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
            
            <div className="w-full h-[1px] bg-gray-200 overflow-hidden mt-6">
              <div
                ref={progressRef}
                className="h-full bg-purple-900"
                style={{ width: '0%', transition: 'none' }}
              />
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default CapabilitiesSection;