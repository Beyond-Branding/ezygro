import { useEffect, useRef, useState, useCallback } from 'react';

const Industries = () => {
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

  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardWidth, setCardWidth] = useState(0);

  useEffect(() => {
    if (cardRef.current) {
      const cardElement = cardRef.current;
      const style = window.getComputedStyle(cardElement);
      const margin = parseFloat(style.marginLeft) + parseFloat(style.marginRight);
      setCardWidth(cardElement.offsetWidth + margin);
    }
  }, []);

  const resetAutoScroll = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    intervalRef.current = setInterval(() => {
      setCurrentIndex(prev => prev + 1);
    }, 3000); // Auto-scroll every 3 seconds
  }, []);

  const handlePrev = () => {
    setCurrentIndex(prev => prev - 1);
    resetAutoScroll();
  };

  const handleNext = () => {
    setCurrentIndex(prev => prev + 1);
    resetAutoScroll();
  };

  useEffect(() => {
    if (cardWidth > 0) {
      resetAutoScroll();
    }
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [cardWidth, resetAutoScroll]);

  useEffect(() => {
    if (tickerRef.current && cardWidth > 0) {
      if (currentIndex < 0) {
        const newIndex = industries.length - 1;
        tickerRef.current.style.transition = 'none';
        tickerRef.current.style.transform = `translateX(-${newIndex * cardWidth}px)`;
        setCurrentIndex(newIndex);
      } else if (currentIndex >= industries.length) {
        tickerRef.current.style.transition = 'transform 0.5s ease-in-out';
        tickerRef.current.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
        setTimeout(() => {
          if (tickerRef.current) {
            tickerRef.current.style.transition = 'none';
            tickerRef.current.style.transform = `translateX(0px)`;
            setCurrentIndex(0);
          }
        }, 500);
      } else {
        tickerRef.current.style.transition = 'transform 0.5s ease-in-out';
        tickerRef.current.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
      }
    }
  }, [currentIndex, cardWidth, industries.length]);

  return (
    <section 
      className="pt-8 md:pt-12 pb-16 md:pb-24 bg-white"
      onMouseEnter={() => intervalRef.current && clearInterval(intervalRef.current)}
      onMouseLeave={resetAutoScroll}
    >
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-row items-center justify-between mb-8 sm:mb-10 lg:mb-12 gap-4">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Industries
            </h2>
            <div className="flex items-center gap-5">
              <button
                onClick={handlePrev}
                aria-label="Previous Item"
                className="p-3 border-2 border-gray-400 rounded-full hover:bg-gray-200 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-600"
              >
                <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
              </button>
              <button
                onClick={handleNext}
                aria-label="Next Item"
                className="p-3 border-2 border-gray-400 rounded-full hover:bg-gray-200 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-600"
              >
                <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
              </button>
            </div>
          </div>

          <div className="relative overflow-hidden w-full">
            <div className="ticker-track flex w-max" ref={tickerRef}>
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
                      className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500 ease-in-out"
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