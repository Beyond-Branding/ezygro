import React, { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react';

const VideoCarousel = () => {
  const [currentVideo, setCurrentVideo] = useState(0);
  const [scaleAtSpeedVisible, setScaleAtSpeedVisible] = useState(false);
  const [promiseTextVisible, setPromiseTextVisible] = useState(false);

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

  // Auto-advance carousel every 8 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentVideo((prev) => (prev + 1) % videos.length);
    }, 8000);

    return () => clearInterval(interval);
  }, [videos.length]);

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
        <div className="absolute top-16 left-0 w-full lg:w-1/2 pr-6">
          {/* Animated Scale at Speed Text */}
          <h1
            className={`text-5xl lg:text-6xl font-bold text-gray-900 leading-tight transition-all duration-700 ease-out ${
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
            <p className="mt-6 text-lg text-gray-800 leading-relaxed">
              Our promise to help enterprises across industries transform at speed,
            </p>
            <p className="mt-2 text-lg text-gray-800 leading-relaxed max-w-lg">
              agility, resilience, and efficiency to their businesses.
            </p>
          </div>
        </div>

        {/* Right content: Video Title & Button (positioned directly on video) */}
        <div className="absolute bottom-16 right-0 lg:right-16 w-full lg:w-1/2 pl-6 text-white text-right">
          <h2 className="text-2xl lg:text-3xl font-bold leading-tight mb-6">
            {videos[currentVideo].title}
          </h2>
          <button className="group inline-flex items-center px-6 py-3 border-2 border-white text-white font-medium hover:bg-white hover:text-gray-900 transition-all duration-300">
            <span>KNOW MORE</span>
            <svg
              className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
      </div>

      {/* Carousel Navigation Dots */}
      <div className="absolute bottom-8 left-8 flex space-x-3 z-20">
        {videos.map((_, index) => (
          <button
            key={index}
            onClick={() => handleDotClick(index)}
            className={`w-12 h-1 transition-all duration-300 ${
              index === currentVideo
                ? 'bg-white'
                : 'bg-white/40 hover:bg-white/60'
            }`}
          />
        ))}
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
    <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Capabilities Header - Adjusted for side-by-side layout */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between mb-12 gap-8">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 lg:w-1/3">
            Capabilities
          </h2>
          <p className="text-lg text-gray-700 lg:w-2/3 lg:text-right leading-relaxed">
            We offer a wide range of digital solutions and best-in-class platforms to deliver meaningful outcomes, enhance
            customer experiences, and transform industries at scale and with unparalleled speed.
          </p>
        </div>

        {/* Capabilities Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
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
              <div className="relative z-10 p-6 h-full flex flex-col text-center">
                {/* Title - Always at the top */}
                <h3 className="text-xl font-bold leading-tight text-white mb-2">
                  {capability.title}
                </h3>

                {/* Description - Appears centered on hover */}
                {capability.description && (
                  <div className="absolute inset-0 flex items-center justify-center p-6">
                    <p className="text-sm text-gray-200 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
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

  useEffect(() => {
    const timer = setTimeout(() => {
      setTextVisible(true);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative min-h-screen bg-gray-50 overflow-hidden">
      {/* Background with diagonal video section */}
      <div className="absolute inset-0">
        {/* Diagonal video background */}
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

        {/* Red accent diagonal line */}
        
      </div>

      {/* Content Container */}
      <div className="relative z-10 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Content - Text */}
            <div className="space-y-8">
              <div
                className={`transition-all duration-1000 ease-out ${
                  textVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                }`}
              >
                <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
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
                <p className="text-lg lg:text-xl text-gray-700 leading-relaxed max-w-lg">
                  Thriving in the current dynamic landscape demands technological solutions that enable 
                  both transformative scale and unparalleled speed.
                </p>
              </div>
            </div>

            {/* Right Content - Video Overlay Content */}
            <div className="relative lg:pl-12">
              <div className="bg-black/80 backdrop-blur-sm p-8 lg:p-12 rounded-lg text-white">
                <div className="space-y-6">
                  <div>
                    <p className="text-sm uppercase tracking-wider text-gray-300 mb-2">Scale at Speed</p>
                    <h2 className="text-3xl lg:text-4xl font-bold leading-tight">
                      True Scalability,<br />
                      Agility, and<br />
                      Responsiveness
                    </h2>
                  </div>
                  
                  <button className="group inline-flex items-center px-8 py-3 border-2 border-white text-white font-medium hover:bg-white hover:text-black transition-all duration-300">
                    <span>KNOW MORE</span>
                    <svg
                      className="ml-3 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300"
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
      <div className="absolute bottom-8 right-8 z-20">
        <div className="w-12 h-12 rounded-full bg-gray-600/80 backdrop-blur-sm flex items-center justify-center">
          <ChevronUp className="w-6 h-6 text-white rotate-180" />
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
      <VideoCarousel />
      <CapabilitiesSection />
      <TechMahindraSection />

      {/* Global Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-12 h-12 bg-gray-600 hover:bg-gray-700 text-white rounded-full flex items-center justify-center transition-all duration-300 shadow-lg hover:shadow-xl z-30"
      >
        <ChevronUp className="w-6 h-6" />
      </button>
    </div>
  );
}

export default App;