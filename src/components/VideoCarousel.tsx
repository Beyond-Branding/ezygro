import React, { useState, useEffect } from 'react';
import { ChevronUp, ChevronLeft, ChevronRight } from 'lucide-react';


const VideoCarousel = () => {
  const [currentVideo, setCurrentVideo] = useState(0);
  const [scaleAtSpeedVisible, setScaleAtSpeedVisible] = useState(false);
  const [promiseTextVisible, setPromiseTextVisible] = useState(false);
  const [progress, setProgress] = useState(0); // Add progress state

  // Sample video data - replace with your actual video URLs
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
    const videoDuration = 8000; // 8 seconds
    const progressInterval = 50; // Update every 50ms for smooth animation
    
    const progressTimer = setInterval(() => {
      setProgress((prev) => {
        const newProgress = prev + (progressInterval / videoDuration) * 100;
        if (newProgress >= 100) {
          return 0; // Reset progress when complete
        }
        return newProgress;
      });
    }, progressInterval);

    const videoTimer = setInterval(() => {
      setCurrentVideo((prev) => (prev + 1) % videos.length);
      setProgress(0); // Reset progress when video changes
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

  const handleDotClick = (index) => {
    setCurrentVideo(index);
    setProgress(0); // Reset progress when manually changing video
    // Reset and re-trigger animations for both texts on dot click
    setScaleAtSpeedVisible(false);
    setPromiseTextVisible(false);

    // Short delay to allow state to update before re-triggering
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
              clipPath: 'polygon(0% 90%, 100% 0%, 100% 100%, 0% 100%)'
            }}
          >
            {/* Video Background within the clipped diagonal area */}
            <div className="absolute inset-0 overflow-hidden">
              <video
                key={videos[currentVideo].id}
                className="w-full h-full object-cover opacity-70" // Video opacity for brightness
                autoPlay
                muted
                loop
                playsInline
              >
                <source src={videos[currentVideo].videoUrl} type="video/mp4" />
                Your browser does not support the video tag.
              </video>

              {/* Overlay for better text readability on top of the video within the diagonal */}
              <div className="absolute inset-0 bg-black/30"></div> {/* Overlay opacity reduced */}
            </div>
          </div>
        </div>
      </div>

      {/* Content (All content positioned absolutely within this relative container) */}
      <div className="relative z-10 min-h-screen max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

        {/* Left content: Scale at Speed */}
        {/* Adjusted top positioning for smaller screens, and width to span full width on small screens */}
        <div className="absolute top-8 sm:top-16 left-0 w-full lg:w-1/2 pr-0 lg:pr-6">
          {/* Animated Scale at Speed Text */}
          {/* Responsive font sizes */}
          <h1
            className={`text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight transition-all duration-700 ease-out ${
              scaleAtSpeedVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
            }`}
          >
            Scale at Speed
            <span className="text-lg align-super text-gray-600">™</span>
          </h1>
          {/* Animated Promise Text Container */}
          <div
            className={`transition-all duration-700 ease-out ${
              promiseTextVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
            }`}
          >
            {/* Responsive text sizes */}
            <p className="mt-4 sm:mt-6 text-base sm:text-lg text-gray-800 leading-relaxed">
              Our promise to help enterprises across industries transform at speed,
            </p>
            <p className="mt-1 sm:mt-2 text-base sm:text-lg text-gray-800 leading-relaxed max-w-lg">
              agility, resilience, and efficiency to their businesses.
            </p>
          </div>
        </div>

        {/* Right content: Video Title & Button (positioned directly on video) */}
        {/* Adjusted bottom positioning for smaller screens, and width to span full width on small screens */}
        <div className="absolute bottom-8 sm:bottom-16 right-0 w-full lg:w-1/2 pl-0 lg:pl-6 text-white text-left sm:text-right"> {/* Changed text-right to text-left on small screens */}
          {/* Responsive font sizes */}
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold leading-tight mb-4 sm:mb-6">
            {videos[currentVideo].title}
          </h2>
          <button className="group inline-flex items-center px-4 py-2 sm:px-6 sm:py-3 border-2 border-white text-white font-medium hover:bg-white hover:text-gray-900 transition-all duration-300">
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
      <div className="absolute bottom-4 sm:bottom-8 left-4 sm:left-8 z-20">
        {/* Navigation Dots */}
        <div className="flex space-x-2 sm:space-x-3 mb-2">
          {videos.map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`w-8 sm:w-12 h-1 transition-all duration-300 ${
                index === currentVideo
                  ? 'bg-white'
                  : 'bg-white/40 hover:bg-white/60'
              }`}
            />
          ))}
        </div>
        
        {/* Red Progress Bar */}
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

const CapabilitiesSection = () => {
  const capabilities = [
    {
      title: "Artificial Intelligence",
      description: "Amplify your business with TechM by infusing AI in every aspect of your business, democratizing AI responsibly.",
      link: "https://www.techmahindra.com/services/artificial-intelligence/",
      imageUrl: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1" // AI/Robot face
    },
    {
      title: "Business Process Services",
      description: null,
      link: "#",
      imageUrl: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1" // Business meeting
    },
    {
      title: "Cloud and Infrastructure Services",
      description: null,
      link: "#",
      imageUrl: "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1" // Cloud computing
    },
    {
      title: "Digital Enterprise Applications",
      description: null,
      link: "#",
      imageUrl: "https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1" // Digital applications
    },
    {
      title: "Engineering Services",
      description: null,
      link: "#",
      imageUrl: "https://images.pexels.com/photos/3862132/pexels-photo-3862132.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1" // Engineering/machinery
    },
    {
      title: "Experience Services",
      description: null,
      link: "#",
      imageUrl: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1" // User experience
    },
    {
      title: "Network Services",
      description: null,
      link: "#",
      imageUrl: "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1" // Network connections
    },
    {
      title: "Testing Services",
      description: null,
      link: "#",
      imageUrl: "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1" // Software testing
    },
  ];

  return (
    <section className="bg-white py-10 sm:py-16 px-4 sm:px-6 lg:px-8"> {/* Adjusted vertical padding */}
      <div className="max-w-7xl mx-auto">
        {/* Capabilities Header - Adjusted for side-by-side layout */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between mb-8 sm:mb-12 gap-4 sm:gap-8"> {/* Adjusted margin-bottom and gap */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 lg:w-1/3"> {/* Responsive font sizes */}
            Capabilities
          </h2>
          <p className="text-base sm:text-lg text-gray-700 lg:w-2/3 lg:text-right leading-relaxed"> {/* Responsive font sizes */}
            We offer a wide range of digital solutions and best-in-class platforms to deliver meaningful outcomes, enhance
            customer experiences, and transform industries at scale and with unparalleled speed.
          </p>
        </div>

        {/* Capabilities Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6"> {/* Adjusted gap */}
          {capabilities.map((capability, index) => (
            <div
              key={index}
              className="relative bg-white overflow-hidden group hover:shadow-xl transition-all duration-500 ease-in-out aspect-[3/4] rounded-lg cursor-pointer border border-gray-200"
            >
              {/* Background Image */}
              <div className="absolute inset-0">
                <img
                  src={capability.imageUrl}
                  alt={`${capability.title} Visual`}
                  className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500 ease-in-out"
                />
                {/* Dark overlay for better text readability */}
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-500"></div>
              </div>

              {/* Content - Title at top, Description centered on hover */}
              <div className="relative z-10 p-4 sm:p-6 h-full flex flex-col text-center"> {/* Adjusted padding */}
                {/* Title - Always at the top */}
                <h3 className="text-lg sm:text-xl font-bold leading-tight text-white mb-1 sm:mb-2"> {/* Responsive font sizes */}
                  {capability.title}
                </h3>

                {/* Description - Appears centered on hover */}
                {capability.description && (
                  <div className="absolute inset-0 flex items-center justify-center p-4 sm:p-6"> {/* Adjusted padding */}
                    <p className="text-xs sm:text-sm text-gray-200 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200"> {/* Responsive font sizes */}
                      {capability.description}
                    </p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// New Tech Mahindra Brand Section
const TechMahindraSection = () => {
  const [textVisible, setTextVisible] = useState(false);
  const [boxTranslateY, setBoxTranslateY] = useState(0); // Renamed scrollY to boxTranslateY for clarity

  useEffect(() => {
    const timer = setTimeout(() => {
      setTextVisible(true);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sectionElement = document.getElementById('techmahindra');
      if (!sectionElement) return;

      const sectionRect = sectionElement.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      const startScrollY = sectionElement.offsetTop - viewportHeight * 0.8;
      const endScrollY = sectionElement.offsetTop + sectionElement.offsetHeight - viewportHeight * 0.2;


      const currentScrollY = window.scrollY;

      const maxUpwardTranslate = -200; // Adjust this value to control how much it moves up

      if (currentScrollY > startScrollY && currentScrollY < endScrollY) {
        const scrollProgress = (currentScrollY - startScrollY) / (endScrollY - startScrollY);
        setBoxTranslateY(scrollProgress * maxUpwardTranslate);
      } else if (currentScrollY <= startScrollY) {
        setBoxTranslateY(0);
      } else if (currentScrollY >= endScrollY) {
        setBoxTranslateY(maxUpwardTranslate);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section id="techmahindra" className="relative min-h-screen bg-gray-50 overflow-hidden">
      {/* Background with diagonal video section */}
      <div className="absolute inset-0">
        <div className="absolute right-0 top-0 w-full h-full">
          <div
            className="w-full h-full"
            style={{
              clipPath: 'polygon(0% 90%, 100% 0%, 100% 100%, 0% 100%)'
            }}
          >
            {/* Video Background */}
            <div className="absolute inset-0 overflow-hidden">
              <video
                className="w-full h-full object-cover"
                autoPlay
                muted
                loop
                playsInline
              >
                <source src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>

              {/* Red gradient overlay matching the design */}
              <div className="absolute inset-0 bg-gradient-to-br from-red-600/60 via-red-800/40 to-black/70"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 min-h-screen flex items-start py-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-0">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">

            {/* Left Content - Text */}
            <div className="space-y-4 sm:space-y-8 -mt-16 sm:-mt-32 lg:-mt-48">
              <div
                className={`transition-all duration-1000 ease-out ${
                  textVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                }`}
              >
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
                  <span className="text-gray-900">Scale at Speed</span>
                  <br />
                  <span className="text-red-600">with Tech Mahindra</span>
                </h1>
              </div>

              <div
                className={`transition-all duration-1000 ease-out delay-300 ${
                  textVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                }`}
              >
                <p className="text-base sm:text-lg lg:text-xl text-gray-700 leading-relaxed max-w-lg">
                  Thriving in the current dynamic landscape demands technological solutions that enable
                  both transformative scale and unparalleled speed.
                </p>
              </div>
            </div>

            {/* Right Content - Video Overlay Content */}
            <div
              className="relative lg:pl-12 mt-32 lg:mt-52"
              style={{ transform: `translateY(${boxTranslateY}px)`, transition: 'transform 0.1s linear' }}
            >
              <div className="bg-black px-8 py-16 sm:px-12 sm:py-20 lg:px-16 lg:py-28 text-white">
                <div className="space-y-4 sm:space-y-6">
                  <div>
                    <p className="text-xs sm:text-sm uppercase tracking-wider text-gray-300 mb-1 sm:mb-2">Scale at Speed</p>
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight">
                      True Scalability,<br />
                      Agility, and<br />
                      Responsiveness
                    </h2>
                  </div>

                  <button className="group inline-flex items-center px-6 py-2 sm:px-8 sm:py-3 border-2 border-white text-white font-medium hover:bg-white hover:hover:text-black transition-all duration-300">
                    <span>KNOW MORE</span>
                    <svg
                      className="ml-2 sm:ml-3 w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform duration-300"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-4 right-4 sm:bottom-8 sm:right-8 z-20">
        <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gray-600/80 backdrop-blur-sm flex items-center justify-center">
          <ChevronUp className="w-5 h-5 sm:w-6 sm:h-6 rotate-180 text-white" />
        </div>
      </div>
    </section>
  );
};

const IndustriesSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const industries = [
    {
      id: 1,
      title: "Banking & Financial Services",
      icon: (
        <svg className="w-16 h-16 text-gray-800 group-hover:text-red-500 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
        </svg>
      ),
      description: "Enabling financial institutions with digital banking solutions and innovative fintech capabilities for the future of finance.",
      link: "/industries/banking-financial-services/",
      backgroundImage: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    },
    {
      id: 2,
      title: "Healthcare & Life Sciences",
      icon: (
        <svg className="w-16 h-16 text-gray-800 group-hover:text-red-500 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
      description: "Revolutionizing healthcare delivery through digital health solutions and advanced life sciences technologies.",
      link: "/industries/healthcare-life-sciences/",
      backgroundImage: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    },
    {
      id: 3,
      title: "Hi Tech",
      icon: (
        <svg className="w-16 h-16 text-gray-800 group-hover:text-red-500 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
        </svg>
      ),
      description: "Empowering technology companies with cutting-edge solutions for product development and market expansion.",
      link: "/industries/hi-tech/",
      backgroundImage: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    },
    {
      id: 4,
      title: "Communications",
      icon: (
        <svg className="w-16 h-16 text-gray-800 group-hover:text-red-500 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
        </svg>
      ),
      description: "Driving 5G transformation and network modernization for telecommunications providers worldwide.",
      link: "/industries/communications/",
      backgroundImage: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    },
    {
      id: 5,
      title: "Energy & Utilities",
      icon: (
        <svg className="w-16 h-16 text-gray-800 group-hover:text-red-500 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      description: "Driving digital transformation in energy sector with smart grid solutions and renewable energy technologies.",
      link: "/industries/energy-and-utilities/",
      backgroundImage: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    },
    {
      id: 6,
      title: "Insurance",
      icon: (
        <svg className="w-16 h-16 text-gray-800 group-hover:text-red-500 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      description: "Transforming insurance operations with digital solutions for improved customer experience and risk management.",
      link: "/industries/insurance/",
      backgroundImage: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    },
    {
      id: 7,
      title: "Manufacturing",
      icon: (
        <svg className="w-16 h-16 text-gray-800 group-hover:text-red-500 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      description: "Enabling smart manufacturing with Industry 4.0 solutions and IoT-driven production optimization.",
      link: "/industries/manufacturing/",
      backgroundImage: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    },
    {
      id: 8,
      title: "Media & Entertainment",
      icon: (
        <svg className="w-16 h-16 text-gray-800 group-hover:text-red-500 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
        </svg>
      ),
      description: "Transforming content creation and distribution with cutting-edge media technologies and digital platforms.",
      link: "/industries/media-and-entertainment/",
      backgroundImage: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    },
    {
      id: 9,
      title: "Oil & Gas",
      icon: (
        <svg className="w-16 h-16 text-gray-800 group-hover:text-red-500 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      ),
      description: "Optimizing energy operations with digital solutions for exploration, production, and distribution efficiency.",
      link: "/industries/oil-and-gas/",
      backgroundImage: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    },
    {
      id: 10,
      title: "Private Equity",
      icon: (
        <svg className="w-16 h-16 text-gray-800 group-hover:text-red-500 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
      description: "Supporting private equity firms with technology solutions for portfolio optimization and value creation.",
      link: "/industries/private-equity/",
      backgroundImage: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    },
    {
      id: 11,
      title: "Professional Services",
      icon: (
        <svg className="w-16 h-16 text-gray-800 group-hover:text-red-500 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H8a2 2 0 01-2-2V8a2 2 0 012-2V6" />
        </svg>
      ),
      description: "Empowering professional service firms with digital solutions for enhanced client engagement and operational efficiency.",
      link: "/industries/professional-services/",
      backgroundImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    },
    {
      id: 12,
      title: "Retail & Consumer Goods",
      icon: (
        <svg className="w-16 h-16 text-gray-800 group-hover:text-red-500 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l-1 12H6L5 9z" />
        </svg>
      ),
      description: "Enhancing customer experiences through digital retail solutions and omnichannel commerce platforms.",
      link: "/industries/retail-consumer-goods/",
      backgroundImage: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    },
    {
      id: 13,
      title: "Travel, Transportation, Logistics & Hospitality",
      icon: (
        <svg className="w-16 h-16 text-gray-800 group-hover:text-red-500 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2" />
        </svg>
      ),
      description: "Revolutionizing travel and logistics with digital solutions for seamless customer journeys and operational excellence.",
      link: "/industries/travel-transportation-logistics-hospitality/",
      backgroundImage: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    }
  ];

  const itemsPerSlide = 4;
  const totalSlides = Math.ceil(industries.length / itemsPerSlide);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const goToSlide = (slideIndex) => {
    setCurrentSlide(slideIndex);
  };

  const getCurrentIndustries = () => {
    const startIndex = currentSlide * itemsPerSlide;
    return industries.slice(startIndex, startIndex + itemsPerSlide);
  };

  // Calculate progress percentage
  const progressPercentage = ((currentSlide + 1) / totalSlides) * 100;

  return (
    <section className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between mb-12 gap-8">
          {/* Left side - Title and Navigation */}
          <div className="flex items-center gap-8">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
              Industries
            </h2>
            
            {/* Navigation Arrows */}
            <div className="flex items-center gap-4">
              <button
                onClick={prevSlide}
                className="w-12 h-12 rounded-full border-2 border-gray-300 flex items-center justify-center hover:border-red-500 hover:text-red-500 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                aria-label="Previous industries"
                disabled={currentSlide === 0}
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={nextSlide}
                className="w-12 h-12 rounded-full border-2 border-gray-300 flex items-center justify-center hover:border-red-500 hover:text-red-500 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                aria-label="Next industries"
                disabled={currentSlide === totalSlides - 1}
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>

          {/* Right side - Description */}
          <div className="lg:w-1/2">
            <p className="text-lg text-gray-700 leading-relaxed lg:text-right">
              Our expertise spans 13 industries from banking, insurance,
              telecommunications, media, entertainment, distribution,
              retail, to many more.
            </p>
          </div>
        </div>

        {/* Industries Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 min-h-[600px]">
          {getCurrentIndustries().map((industry) => (
            <div
              key={industry.id}
              className="relative bg-white overflow-hidden cursor-pointer group transform hover:-translate-y-2 transition-all duration-300 border border-gray-200"
              onClick={() => window.open(industry.link, '_blank')}
            >
              {/* Top Half - White background with icon and title */}
              <div className="relative z-10 p-12 text-center bg-white h-72 flex flex-col justify-center">
                {/* Icon */}
                <div className="flex justify-center mb-6">
                  {industry.icon}
                </div>
                
                {/* Title */}
                <h3 className="text-xl font-semibold text-gray-900 group-hover:text-red-500 transition-colors duration-300">
                  {industry.title}
                </h3>
              </div>

              {/* Bottom Half - Background Image with grayscale effect */}
              <div
                className="h-72 bg-cover bg-center bg-no-repeat relative filter grayscale group-hover:grayscale-0 transition-all duration-500"
                style={{
                  backgroundImage: `url(${industry.backgroundImage})`,
                }}
              >
                {/* No overlay or text content */}
              </div>
            </div>
          ))}
        </div>

        {/* Progress Bar */}
        <div className="mt-8">
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-red-500 h-2 rounded-full transition-all duration-300 ease-out"
              style={{ width: `${progressPercentage}%` }}
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
};

// MODIFIED: Sustainability Section 
const SustainabilitySection = () => {
    const [contentVisible, setContentVisible] = useState(false);
    const [translateY, setTranslateY] = useState(0);

    useEffect(() => {
        const timer = setTimeout(() => {
            setContentVisible(true);
        }, 300);

        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            const sectionElement = document.getElementById('sustainability');
            if (!sectionElement) return;

            const rect = sectionElement.getBoundingClientRect();
            const viewportHeight = window.innerHeight;

            if (rect.top < viewportHeight && rect.bottom > 0) {
                const scrollProgress = (viewportHeight - rect.top) / (viewportHeight + rect.height);
                const maxMove = 60; 
                const newTranslateY = scrollProgress * maxMove;
                setTranslateY(Math.min(maxMove, Math.max(0, newTranslateY)));
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll(); 

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <section id="sustainability" className="relative min-h-screen bg-gray-50 overflow-hidden">
            {/* Background container with updated clipPath */}
            <div className="absolute inset-0">
                <div className="absolute right-0 top-0 w-full h-full">
                    <div
                        className="w-full h-full"
                        style={{
                            // Updated clipPath as per your request
                            clipPath: 'polygon(10% 90%, 100% 0%, 100% 100%, 0% 100%)'
                        }}
                    >
                        <img
                            // Updated image source and position
                            src="https://insights.techmahindra.com/styles/de2e/s3/images/sustainabilityhompage.jpg"
                            alt="Sustainability - green leaves"
                            className="w-full h-full object-cover"
                            style={{ objectPosition: '100% 65%' }}
                        />
                        {/* A subtle overlay to make text more readable if needed */}
                        <div className="absolute inset-0 bg-black/10"></div>
                    </div>
                </div>
            </div>

            {/* Content Container */}
            <div className="relative z-10 min-h-screen flex items-center py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">

                        {/* Left Content - Animated Black Box (Made smaller) */}
                        <div
                            className="relative"
                            style={{
                                transform: `translateY(${translateY}px)`,
                                transition: 'transform 0.2s linear'
                            }}
                        >
                            <div className="bg-black px-8 py-10 sm:px-10 sm:py-12 lg:px-12 lg:py-16 text-white max-w-md">
                                <div
                                    className={`space-y-5 transition-all duration-1000 ease-out ${
                                        contentVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                                    }`}
                                >
                                    <div>
                                        <h1 className="text-3xl sm:text-4xl font-bold leading-tight mb-4">
                                            Towards a<br />
                                            Sustainable Future
                                        </h1>
                                        
                                        <p className="text-base sm:text-lg text-gray-300 leading-relaxed mb-6">
                                            Learn how we maintain a balance between sustainability and overall business profitability.
                                        </p>
                                    </div>

                                    <button className="group inline-flex items-center px-5 py-2.5 border-2 border-white text-white font-medium hover:bg-white hover:text-black transition-all duration-300">
                                        <span className="tracking-wider">OUR SUSTAINABILITY EFFORTS</span>
                                        <svg
                                            className="ml-2.5 w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-300"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                        >
                                            <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Right side - Empty space */}
                        <div className="hidden lg:block"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};


// Main App component to render all sections
function App() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="App">
      {/* Existing Sections */}
      <VideoCarousel />
      <CapabilitiesSection />
      <TechMahindraSection />
      
      {/* "Joy Matters" Section */}
      <section className="relative w-full h-[462.14px] bg-black overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/1036808/pexels-photo-1036808.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Background"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent"></div>
        </div>

        {/* Main Content Area */}
        <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between h-full px-4 sm:px-6 lg:px-8 py-8 sm:py-16 mx-auto max-w-7xl">
          {/* Left Text Content */}
          <div className="flex-1 text-center lg:text-left mb-8 lg:mb-0 lg:mr-8 text-white">
            <div className="mb-4">
              <img
                src="https://insights.techmahindra.com/images/thebig-thinkerslogo.webp"
                alt="The Big Thinkers Logo"
                className="h-8 sm:h-10 mx-auto lg:mx-0"
              />
            </div>
            <div className="h-0.5 w-16 bg-white mb-4 mx-auto lg:mx-0"></div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold leading-tight mb-4">
              'Joy Matters': How One Company Brings Delight to Digital Transformation
            </h1>
            
            <p className="text-md sm:text-lg mb-2">
              Kellie Romack
            </p>
            <div className="h-0.5 w-16 bg-white mb-4 mx-auto lg:mx-0"></div>
            <p className="text-sm sm:text-base text-gray-300 mb-8">
              Chief Digital Information Officer, ServiceNow
            </p>
            <button className="px-6 py-3 border-2 border-white text-white font-medium hover:bg-red-500 hover:border-red-500 transition-all duration-300">
              LEARN MORE
            </button>
          </div>

          {/* Right Image */}
          <div className="flex-1 flex justify-center lg:justify-end">
            <img
              src="https://insights.techmahindra.com/images/kellieromack-gbg.webp"
              alt="Kellie Romack"
              className="w-full max-w-sm sm:max-w-md lg:max-w-lg h-auto object-cover rounded-lg shadow-lg"
              style={{ minWidth: '280px', maxWidth: '500px' }}
            />
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <IndustriesSection />

      {/* Sustainability Section */}
      <SustainabilitySection />

      {/* Global Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-4 right-4 sm:bottom-8 sm:right-8 w-10 h-10 sm:w-12 sm:h-12 bg-gray-600 hover:bg-gray-700 text-white rounded-full flex items-center justify-center transition-all duration-300 shadow-lg hover:shadow-xl z-30"
      >
        <ChevronUp className="w-5 h-5 sm:w-6 sm:h-6" />
      </button>
    </div>
  );
}

export default App;
