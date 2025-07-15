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
              clipPath: windowWidth < 768
                ? 'polygon(-375% 75%, 100% 35%, 100% 100%, 0% 100%)'
                : 'polygon(-10% 90%, 130% 0%, 100% 100%, 0% 100%)'
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
      <div className="relative z-10 min-h-screen max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 pt-16 sm:pt-24 lg:pt-28 pb-8 sm:pb-16">
        {/* MODIFIED: Changed top and left classes for better mobile layout */}
        <div className="absolute top-15 left-2 sm:top-20 sm:left-12 lg:top-20 lg:left-20 w-full max-w-xs sm:max-w-lg lg:max-w-2xl lg:w-3/5 pr-4 sm:pr-6 lg:pr-6">
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
              Where Expertise<br />
              <span style={{ color: '#4B1D92' }}>Meets Integrity</span>
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
              fontSize: windowWidth < 640 ? '13px' : windowWidth < 1024 ? '18px' : '24px',
              lineHeight: windowWidth < 640 ? '16px' : windowWidth < 1024 ? '24px' : '30px'
            }}
          >
            {videos[currentVideo].title}
          </h2>
        </div>
      </div>

      {/* Carousel Navigation Dots */}
      <div className="absolute bottom-2 sm:bottom-4 lg:bottom-8 left-2 sm:left-4 lg:left-8 z-20 w-auto max-w-xs">
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
      </div>
    </section>
  );
};

export default VideoCarousel;