import React, { useState, useEffect } from 'react';

const VideoCarousel = () => {
  const [currentVideo, setCurrentVideo] = useState(0);
  const [scaleAtSpeedVisible, setScaleAtSpeedVisible] = useState(false);
  const [promiseTextVisible, setPromiseTextVisible] = useState(false);
  const [progress, setProgress] = useState(0);

  const videos = [
    {
      id: 1,
      title: "Tech Mahindra and Fable Partner to Launch the 'Mind Master' Book Club Featuring Chess Grandmaster Viswanathan Anand",
      videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
    },
    {
      id: 2,
      title: "Digital Transformation Solutions for Modern Enterprises",
      videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4"
    },
    {
      id: 3,
      title: "Innovation in Cloud Computing and AI Technologies",
      videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4"
    },
    {
      id: 4,
      title: "Sustainable Technology Solutions for Future Growth",
      videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4"
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

  // Trigger text animations on component mount
  useEffect(() => {
    const scaleTimer = setTimeout(() => {
      setScaleAtSpeedVisible(true);
    }, 200);

    const promiseTimer = setTimeout(() => {
      setPromiseTextVisible(true);
    }, 200);

    return () => {
      clearTimeout(scaleTimer);
      clearTimeout(promiseTimer);
    };
  }, []);

  const handleDotClick = (index: number) => {
    setCurrentVideo(index);
    setProgress(0);
    setScaleAtSpeedVisible(false);
    setPromiseTextVisible(false);

    setTimeout(() => {
      setScaleAtSpeedVisible(true);
      setPromiseTextVisible(true);
    }, 100);
  };

  return (
    <section className="relative min-h-screen bg-white overflow-hidden">
      {/* Background with diagonal section for video */}
      <div className="absolute inset-0">
        <div className="absolute right-0 top-0 w-full h-full">
          <div
            className="w-full h-full bg-transparent"
            style={{
              clipPath: window.innerWidth < 768 
                ? 'polygon(-375% 85%, 100% 20%, 100% 100%, 0% 100%)' 
                : 'polygon(0% 90%, 100% 0%, 100% 100%, 0% 100%)'
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
      <div className="relative z-10 min-h-screen max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-16">
        {/* Left content: Scale at Speed */}
        <div className="absolute top-4 sm:top-8 lg:top-16 left-4 sm:left-6 lg:left-0 w-full max-w-xs sm:max-w-md lg:max-w-lg lg:w-1/2 pr-0 lg:pr-6">
          <h1
            className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight transition-all duration-700 ease-out ${
              scaleAtSpeedVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
            }`}
          >
            Scale at Speed
            <span className="text-sm sm:text-base lg:text-lg align-super text-gray-600">™</span>
          </h1>
          
          <div
            className={`transition-all duration-700 ease-out ${
              promiseTextVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
            }`}
          >
            <p className="mt-2 sm:mt-4 lg:mt-6 text-sm sm:text-base lg:text-lg text-gray-800 leading-relaxed">
              Our promise to help enterprises across industries transform at speed,
            </p>
            <p className="mt-1 sm:mt-2 text-sm sm:text-base lg:text-lg text-gray-800 leading-relaxed max-w-lg">
              agility, resilience, and efficiency to their businesses.
            </p>
          </div>
        </div>

        {/* Right content: Video Title & Button */}
        <div className="absolute bottom-4 sm:bottom-8 lg:bottom-16 right-4 sm:right-6 lg:right-0 w-full max-w-xs sm:max-w-md lg:max-w-lg lg:w-1/2 pl-0 lg:pl-6 text-white text-left lg:text-right">
          <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold leading-tight mb-3 sm:mb-4 lg:mb-6">
            {videos[currentVideo].title}
          </h2>
          <button className="group inline-flex items-center px-3 py-2 sm:px-4 sm:py-2 lg:px-6 lg:py-3 border-2 border-white text-white font-medium hover:bg-white hover:text-gray-900 transition-all duration-300 text-sm sm:text-base">
            <span>KNOW MORE</span>
            <svg
              className="ml-1 sm:ml-2 w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform duration-300"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>
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