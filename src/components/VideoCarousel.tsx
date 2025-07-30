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
      videoUrl: "https://res.cloudinary.com/dzlxesyxg/video/upload/v1751475664/1_bhjviq.mp4"
    },
    {
      id: 2,
      title: "Driven by Precision. Backed by Ethics. Sharp minds, honest hands. With EZYGRO, you get advice that’s smart, clear, and always has your back.",
      videoUrl: "https://res.cloudinary.com/dzlxesyxg/video/upload/v1751475708/2_sv5b42.mp4"
    },
    {
      id: 3,
      title: "Simplifying Compliance, Amplifying Success Legal forms? Tax chaos? Leave that to us. EZYGRO makes the tough stuff simple, so you can focus on winning.",
      videoUrl: "https://res.cloudinary.com/dzlxesyxg/video/upload/v1751475745/3_zlm6td.mp4"
    },
    {
      id: 4,
      title: "Your Partner in Professional Progress Every business needs a solid support system. EZYGRO walks with you through paperwork, plans, and big dreams.",
      videoUrl: "https://res.cloudinary.com/dzlxesyxg/video/upload/v1751475778/4_xdzdvi.mp4"
    },
    {
      id: 5,
      title: "Where Strategy Meets Service Smart ideas are nothing without action. At EZYGRO, we turn smart plans into smoother journeys no stress, just results.",
      videoUrl: "https://res.cloudinary.com/dzlxesyxg/video/upload/v1751692184/6_ycd4gn.mp4"
    }
  ];

  // Auto-advance carousel with progress tracking
  useEffect(() => {
    const videoDuration = 3000;
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
            setScaleAtSpeedVisible(false);
            setPromiseTextVisible(false);
            setTimeout(() => setScaleAtSpeedVisible(true), 300);
            setTimeout(() => setPromiseTextVisible(true), 600);
          } else {
            setScaleAtSpeedVisible(false);
            setPromiseTextVisible(false);
          }
        });
      },
      { threshold: 0.3, rootMargin: '-10% 0px -10% 0px' }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  // Initial text animations
  useEffect(() => {
    const initialTimer = setTimeout(() => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          setScaleAtSpeedVisible(true);
          setTimeout(() => setPromiseTextVisible(true), 400);
        }
      }
    }, 300);
    return () => clearTimeout(initialTimer);
  }, []);

  const handleDotClick = (index: number) => {
    setCurrentVideo(index);
    setProgress(0);
    setScaleAtSpeedVisible(false);
    setPromiseTextVisible(false);
    setTimeout(() => setScaleAtSpeedVisible(true), 150);
    setTimeout(() => setPromiseTextVisible(true), 350);
  };

  return (
    <section ref={sectionRef} className="relative min-h-screen bg-white overflow-hidden -mt-16">
      {/* Background with diagonal section for video */}
      <div className="absolute inset-0">
        <div className="absolute right-0 top-0 w-full h-full">
          <div
            className="w-full h-full bg-transparent"
            style={{
              clipPath: windowWidth < 640
                ? 'polygon(-375% 75%, 100% 35%, 100% 100%, 0% 100%)'
                : windowWidth < 1024
                ? 'polygon(-75% 85%, 110% 15%, 100% 100%, 0% 100%)'
                : 'polygon(-25% 90%, 130% 0%, 100% 100%, 0% 100%)'
            }}
          >
            <div className="absolute inset-0 overflow-hidden">
              <video
                key={videos[currentVideo].id}
                className="w-full h-full object-cover opacity-100"
                autoPlay
                muted
                loop
                playsInline
              >
                <source src={videos[currentVideo].videoUrl} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-screen max-w-7xl mx-auto px-2 sm:px-4 md:px-6 lg:px-16 pt-20 sm:pt-24 md:pt-28 lg:pt-32 pb-8 sm:pb-12 md:pb-16">
        {/* MODIFIED: Enhanced responsive design for all screen sizes */}
        <div className="absolute top-16 left-1 sm:top-20 sm:left-4 md:top-22 md:left-8 lg:top-24 lg:left-16 xl:left-20 w-full max-w-[95%] sm:max-w-sm md:max-w-lg lg:max-w-2xl xl:max-w-3xl lg:w-3/5 pr-2 sm:pr-4 md:pr-6 lg:pr-8">
          <div className="overflow-hidden pb-2">
            <h1
              className={`text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-semibold text-gray-900 transition-all duration-1000 ease-out leading-tight ${
                scaleAtSpeedVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              }`}
              style={{
                fontSize: windowWidth < 480 ? '20px' : windowWidth < 640 ? '24px' : windowWidth < 768 ? '28px' : windowWidth < 1024 ? '36px' : windowWidth < 1280 ? '42px' : '48px',
                lineHeight: windowWidth < 480 ? '24px' : windowWidth < 640 ? '28px' : windowWidth < 768 ? '32px' : windowWidth < 1024 ? '40px' : windowWidth < 1280 ? '46px' : '52px',
                transform: scaleAtSpeedVisible ? 'translateY(0px)' : 'translateY(32px)'
              }}
            >
              Where Expertise<br />
              <span style={{ color: '#4B1D92' }}>Meets Integrity</span>
            </h1>
          </div>
          
          <div
            className={`mt-2 sm:mt-3 md:mt-4 lg:mt-5 transition-all duration-1200 ease-out delay-300 ${
              promiseTextVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
            }`}
            style={{
              transform: promiseTextVisible ? 'translateY(0px)' : 'translateY(24px)'
            }}
          >
            <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-800 leading-relaxed font-400"
                       style={{
                         fontSize: windowWidth < 480 ? '12px' : windowWidth < 640 ? '13px' : windowWidth < 768 ? '14px' : windowWidth < 1024 ? '16px' : windowWidth < 1280 ? '17px' : '18px',
                         lineHeight: windowWidth < 480 ? '16px' : windowWidth < 640 ? '18px' : windowWidth < 768 ? '20px' : windowWidth < 1024 ? '24px' : windowWidth < 1280 ? '26px' : '28px'
                       }}
                      >
              Our promise to help enterprises across industries transform at speed, agility, resilience, and efficiency to their businesses.
            </p>
          </div>
        </div>

        {/* Right content: Video Title & Button - Enhanced responsive design */}
        <div className="absolute bottom-12 sm:bottom-10 md:bottom-8 lg:bottom-6 right-2 sm:right-4 md:right-6 lg:right-4 xl:right-8 w-full max-w-[90%] sm:max-w-xs md:max-w-sm lg:max-w-md xl:max-w-lg lg:w-1/2 pl-0 lg:pl-6 text-white text-left lg:text-right">
          <h2 className="font-bold leading-tight mb-2 sm:mb-3 md:mb-4 lg:mb-5 xl:mb-6"
            style={{
              fontSize: windowWidth < 480 ? '11px' : windowWidth < 640 ? '12px' : windowWidth < 768 ? '14px' : windowWidth < 1024 ? '18px' : windowWidth < 1280 ? '20px' : '22px',
              lineHeight: windowWidth < 480 ? '14px' : windowWidth < 640 ? '15px' : windowWidth < 768 ? '17px' : windowWidth < 1024 ? '22px' : windowWidth < 1280 ? '26px' : '28px'
            }}
          >
            {videos[currentVideo].title}
          </h2>
        </div>
      </div>

      {/* Carousel Navigation Dots - Enhanced responsive design */}
      <div className="absolute bottom-2 sm:bottom-3 md:bottom-4 lg:bottom-6 xl:bottom-8 left-2 sm:left-3 md:left-4 lg:left-6 xl:left-8 z-20 w-auto max-w-xs">
        <div className="flex space-x-1 sm:space-x-1.5 md:space-x-2 lg:space-x-2.5 xl:space-x-3 mb-2">
          {videos.map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`w-4 h-1 sm:w-5 sm:h-1 md:w-6 md:h-1 lg:w-8 lg:h-1.5 xl:w-10 xl:h-1.5 2xl:w-12 2xl:h-2 transition-all duration-300 ${
                index === currentVideo
                  ? 'bg-white'
                  : 'bg-white/40 hover:bg-white/60'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideoCarousel;