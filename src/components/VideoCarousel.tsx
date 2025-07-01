import { useState, useEffect, useRef } from 'react';

const VideoCarousel = () => {
  const [currentVideo, setCurrentVideo] = useState(0);
  const [scaleAtSpeedVisible, setScaleAtSpeedVisible] = useState(false);
  const [promiseTextVisible, setPromiseTextVisible] = useState(false);
  const [progress, setProgress] = useState(0);
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1024);
  const sectionRef = useRef<HTMLElement>(null);

  const videos = [
    {
      id: 1,
      title: "Empowering Growth with Every Number We don’t just file and finish we plan, guide, and grow with you. EZYGRO turns boring numbers into bold moves.",
      videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
    },
    {
      id: 2,
      title: "Driven by Precision. Backed by Ethics. Sharp minds, honest hands. With EZYGRO, you get advice that’s smart, clear, and always has your back.",
      videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4"
    },
    {
      id: 3,
      title: "Simplifying Compliance, Amplifying Success Legal forms? Tax chaos? Leave that to us. EZYGRO makes the tough stuff simple, so you can focus on winning.",
      videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4"
    },
    {
      id: 4,
      title: "Your Partner in Professional Progress Every business needs a solid support system. EZYGRO walks with you through paperwork, plans, and big dreams.",
      videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4"
    },
    {
      id: 5,
      title: "Where Strategy Meets Service Smart ideas are nothing without action. At EZYGRO, we turn smart plans into smoother journeys no stress, just results.",
      videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4"
    }
  ];

  // Auto-advance carousel with progress tracking
  useEffect(() => {
    const videoDuration = 8000;
    const progressInterval = 50;
    
    const progressTimer = setInterval(() => {
      setProgress((prev) => {
        const newProgress = prev + (progressInterval / videoDuration) * 100;
        if (newProgress >= 100) {
          return 0;
        }
        return newProgress;
      });
    }, progressInterval);

    const videoTimer = setInterval(() => {
      setCurrentVideo((prev) => (prev + 1) % videos.length);
      setProgress(0);
    }, videoDuration);

    return () => {
      clearInterval(progressTimer);
      clearInterval(videoTimer);
    };
  }, [videos.length, currentVideo]);

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Intersection Observer for scroll-based animations
  useEffect(() => {
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
            }, 300);

            setTimeout(() => {
              setPromiseTextVisible(true);
            }, 600);
          } else {
            // Reset animations when not in view
            setScaleAtSpeedVisible(false);
            setPromiseTextVisible(false);
          }
        });
      },
      {
        threshold: 0.3, // Trigger when 30% of the section is visible
        rootMargin: '-10% 0px -10% 0px' // Add some margin to fine-tune trigger point
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

  // Initial text animations on component mount (removed old useEffect)
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
          }, 400);
        }
      }
    }, 300);

    return () => clearTimeout(initialTimer);
  }, []);

  const handleDotClick = (index: number) => {
    setCurrentVideo(index);
    setProgress(0);
    
    // Brief animation reset and restart for smooth transition
    setScaleAtSpeedVisible(false);
    setPromiseTextVisible(false);

    setTimeout(() => {
      setScaleAtSpeedVisible(true);
    }, 150);
    
    setTimeout(() => {
      setPromiseTextVisible(true);
    }, 350);
  };

  return (
    <section ref={sectionRef} className="relative min-h-screen bg-white overflow-hidden">
      {/* Background with diagonal section for video */}
      <div className="absolute inset-0">
        <div className="absolute right-0 top-0 w-full h-full">
          <div
            className="w-full h-full bg-transparent"
            style={{
              clipPath: windowWidth < 768 
                ? 'polygon(-375% 75%, 100% 20%, 100% 100%, 0% 100%)' 
                : 'polygon(-10% 90%, 130% 0%, 100% 100%, 0% 100%)'
            }}
          >
            <div className="absolute inset-0 overflow-hidden">
              <video
                key={videos[currentVideo].id}
                className="w-full h-full object-cover opacity-70"
                autoPlay
                muted
                loop
                playsInline
              >
                <source src={videos[currentVideo].videoUrl} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className="absolute inset-0 bg-black/30"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-screen max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 pt-24 sm:pt-32 lg:pt-40 pb-8 sm:pb-16">
        {/* Left content: Scale at Speed */}
        <div className="absolute top-4 sm:top-8 lg:top-16 left-8 sm:left-12 lg:left-20 w-full max-w-xs sm:max-w-lg lg:max-w-2xl lg:w-3/5 pr-4 sm:pr-6 lg:pr-6">
          <div className="overflow-hidden pb-2">
            <h1
              className={`text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold text-gray-900 transition-all duration-1000 ease-out ${
                scaleAtSpeedVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              }`}
              style={{ 
                fontSize: windowWidth < 640 ? '26px' : windowWidth < 1024 ? '38px' : '54px',
                lineHeight: windowWidth < 640 ? '32px' : windowWidth < 1024 ? '42px' : '52px',
                transform: scaleAtSpeedVisible ? 'translateY(0px)' : 'translateY(32px)'
              }}
            >
              Where Expertise<br />Meets Integrity
            </h1>
          </div>
          
          <div
            className={`mt-1 sm:mt-2 lg:mt-3 transition-all duration-1200 ease-out delay-300 ${
              promiseTextVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
            }`}
            style={{
              transform: promiseTextVisible ? 'translateY(0px)' : 'translateY(24px)'
            }}
          >
            <p className="text-xs sm:text-sm lg:text-base text-gray-800 leading-relaxed font-400"
                        style={{ 
                          fontSize: windowWidth < 640 ? '14px' : windowWidth < 1024 ? '16px' : '18px', 
                          lineHeight: windowWidth < 640 ? '16px' : windowWidth < 1024 ? '20px' : '24px'
                        }}
                        >
              Our promise to help enterprises across industries transform at speed, agility, resilience, and efficiency to their businesses.
            </p>
          </div>
        </div>

        {/* Right content: Video Title & Button */}
        <div className="absolute bottom-16 sm:bottom-10 lg:bottom-4 right-4 sm:right-6 lg:right-0 w-full max-w-xs sm:max-w-md lg:max-w-lg lg:w-1/2 pl-0 lg:pl-6 text-white text-left lg:text-right">
          <h2 className="font-bold leading-tight mb-3 sm:mb-4 lg:mb-6"
            style={{
              fontSize: windowWidth < 640 ? '15px' : windowWidth < 1024 ? '20px' : '28px',
              lineHeight: windowWidth < 640 ? '18px' : windowWidth < 1024 ? '26px' : '34px'
            }}
          >
            {videos[currentVideo].title}
          </h2>
        </div>
      </div>

      {/* Carousel Navigation Dots with Progress Bar */}
      <div className="absolute bottom-2 sm:bottom-4 lg:bottom-8 left-2 sm:left-4 lg:left-8 z-20 w-auto max-w-xs">
        {/* Navigation Dots */}
        <div className="flex space-x-1 sm:space-x-2 lg:space-x-3 mb-2">
          {videos.map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`w-6 sm:w-8 lg:w-12 h-1 transition-all duration-300 ${
                index === currentVideo
                  ? 'bg-white'
                  : 'bg-white/40 hover:bg-white/60'
              }`}
            />
          ))}
        </div>
        
        <div className="w-full bg-gray-600/30 h-0.5 rounded-full overflow-hidden">
          <div 
            className="h-full bg-red-600 transition-all duration-75 ease-linear rounded-full"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </section>
  );
};

export default VideoCarousel;