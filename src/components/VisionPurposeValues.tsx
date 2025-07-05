import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const VisionPurposeValues = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [hoveredTab, setHoveredTab] = useState<number | null>(null);
  const [isExpanding, setIsExpanding] = useState(false);
  const [hoveredNavButton, setHoveredNavButton] = useState<'prev' | 'next' | null>(null);
  const navigate = useNavigate();

  const content = [
    {
      key: 'vision',
      title: 'Vision',
      text: 'At EZYGRO, our vision is to become a trusted partner in simplifying compliance and empowering growth.',
      image: 'https://res.cloudinary.com/dzlxesyxg/image/upload/v1751477132/vission_c61zwo.jpg'
    },
    {
      key: 'purpose',
      title: 'Purpose',
      text: 'Our purpose is to deliver transparent, reliable, and client-focused solutions.',
      image: 'https://res.cloudinary.com/dzlxesyxg/image/upload/v1751477131/mission_bbmkfq.jpg'
    },
    {
      key: 'values',
      title: 'Value',
      text: 'Guided by our core values integrity, accountability, and excellence we build lasting relationships and drive meaningful impact.',
      image: 'https://res.cloudinary.com/dzlxesyxg/image/upload/v1751477132/values_clz3jp.jpg'
    }
  ];

  const handleTabClick = (index: number) => {
    if (index === activeTab || isAnimating) return;

    setIsAnimating(true);
    setHoveredTab(index);
    
    setTimeout(() => {
      setIsExpanding(true);
      
      setTimeout(() => {
        setActiveTab(index);
        setHoveredTab(null);
        setIsExpanding(false);
        setIsAnimating(false);
      }, 800);
    }, 100);
  };
  
  const nextTab = () => {
    const nextIndex = (activeTab + 1) % content.length;
    
    if (isAnimating) return;
    
    setIsAnimating(true);
    setHoveredNavButton('next');
    
    setTimeout(() => {
      setIsExpanding(true);
      
      setTimeout(() => {
        setActiveTab(nextIndex);
        setHoveredNavButton(null);
        setIsExpanding(false);
        setIsAnimating(false);
      }, 800);
    }, 100);
  };

  const prevTab = () => {
    const prevIndex = (activeTab - 1 + content.length) % content.length;
    
    if (isAnimating) return;
    
    setIsAnimating(true);
    setHoveredNavButton('prev');
    
    setTimeout(() => {
      setIsExpanding(true);
      
      setTimeout(() => {
        setActiveTab(prevIndex);
        setHoveredNavButton(null);
        setIsExpanding(false);
        setIsAnimating(false);
      }, 800);
    }, 100);
  };

  const currentContent = content[activeTab];

  return (
    <section className="bg-black text-white min-h-screen flex flex-col py-4 sm:py-8 lg:py-20 px-4 relative">
      {/* Inline styles for slide animations */}
      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes slideInFromRight {
            from { transform: translateX(100%); }
            to { transform: translateX(0); }
          }
          @keyframes slideOutToLeft {
            from { transform: translateX(0); }
            to { transform: translateX(-100%); }
          }
          @keyframes slideInHalfway {
            from { 
              transform: translateX(100%) translateY(-20%);
              clip-path: circle(0% at 75% 55%);
            }
            to { 
              transform: translateX(50%) translateY(-10%);
              clip-path: circle(50% at 75% 55%);
            }
          }
          @keyframes slideInHalfwayFromTopLeft {
            from { 
              transform: translateX(-100%) translateY(-100%);
              clip-path: circle(0% at 25% 50%);
            }
            to { 
              transform: translateX(-50%) translateY(0%);
              clip-path: circle(50% at 25% 50%);
            }
          }
          @keyframes slideOutHalfway {
            from { transform: translateX(50%) translateY(-10%); }
            to { transform: translateX(100%) translateY(-20%); }
          }
          @keyframes expandToFull {
            from { 
              transform: translateX(50%) translateY(-10%);
              clip-path: circle(50% at 75% 55%);
            }
            to { 
              transform: translateX(0%) translateY(0%);
              clip-path: circle(100% at 50% 50%);
            }
          }
          @keyframes expandToFullFromTopLeft {
            from { 
              transform: translateX(-50%) translateY(0%);
              clip-path: circle(50% at 25% 50%);
            }
            to { 
              transform: translateX(0%) translateY(0%);
              clip-path: circle(100% at 50% 50%);
            }
          }
          
          /* Mobile responsive animations */
          @media (max-width: 768px) {
            @keyframes slideInHalfway {
              from { 
                transform: translateX(100%) translateY(-15%);
                clip-path: circle(0% at 70% 54%);
              }
              to { 
                transform: translateX(40%) translateY(-8%);
                clip-path: circle(50% at 70% 54%);
              }
            }
            @keyframes slideInHalfwayFromTopLeft {
              from { 
                transform: translateX(-100%) translateY(-80%);
                clip-path: circle(0% at 30% 50%);
              }
              to { 
                transform: translateX(-40%) translateY(0%);
                clip-path: circle(50% at 30% 50%);
              }
            }
            @keyframes expandToFull {
              from { 
                transform: translateX(40%) translateY(-8%);
                clip-path: circle(50% at 70% 54%);
              }
              to { 
                transform: translateX(0%) translateY(0%);
                clip-path: circle(100% at 50% 50%);
              }
            }
            @keyframes expandToFullFromTopLeft {
              from { 
                transform: translateX(-40%) translateY(0%);
                clip-path: circle(50% at 30% 50%);
              }
              to { 
                transform: translateX(0%) translateY(0%);
                clip-path: circle(100% at 50% 50%);
              }
            }
          }
          
          .slide-in-animation {
            animation: slideInFromRight 0.4s ease-in-out forwards;
          }
          .slide-out-animation {
            animation: slideOutToLeft 0.4s ease-in-out forwards;
          }
          .slide-in-halfway {
            animation: slideInHalfway 0.8s ease-out forwards;
          }
          .slide-in-halfway-top-left {
            animation: slideInHalfwayFromTopLeft 0.8s ease-out forwards;
          }
          .slide-out-halfway {
            animation: slideOutHalfway 0.6s ease-in forwards;
          }
          .expand-to-full {
            animation: expandToFull 1.0s ease-out forwards;
          }
          .expand-to-full-from-top-left {
            animation: expandToFullFromTopLeft 1.0s ease-out forwards;
          }
        `
      }} />
      
      {/* Navigation buttons */}
      <div className="flex justify-center md:absolute md:top-4 md:right-4 lg:top-8 lg:right-8 mb-6 md:mb-0 gap-3 lg:gap-4">
        <button
          onClick={prevTab}
          onMouseEnter={() => !isAnimating && setHoveredNavButton('prev')}
          onMouseLeave={() => !isAnimating && setHoveredNavButton(null)}
          disabled={isAnimating}
          className="w-10 h-10 sm:w-12 sm:h-12 lg:w-12 lg:h-12 rounded-full border-2 border-gray-600 flex items-center justify-center hover:border-white transition-colors disabled:opacity-50"
        >
          <ArrowLeft className="w-5 h-5 sm:w-6 sm:h-6 lg:w-6 lg:h-6" />
        </button>
        <button
          onClick={nextTab}
          onMouseEnter={() => !isAnimating && setHoveredNavButton('next')}
          onMouseLeave={() => !isAnimating && setHoveredNavButton(null)}
          disabled={isAnimating}
          className="w-10 h-10 sm:w-12 sm:h-12 lg:w-12 lg:h-12 rounded-full border-2 border-gray-600 flex items-center justify-center hover:border-white transition-colors disabled:opacity-50"
        >
          <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 lg:w-6 lg:h-6" />
        </button>
      </div>

      {/* Main content container */}
      <div className="flex-1 flex flex-col md:block">
        {/* Desktop layout */}
        <div className="hidden md:block max-w-7xl w-full mx-auto">
          <div className="grid md:grid-cols-3 gap-8 items-center min-h-[70vh]">
            {/* Left side navigation */}
            <div className="space-y-10">
              {content.map((item, index) => (
                <h2
                  key={item.key}
                  // UPDATED: Increased text size for desktop
                  className={`text-5xl lg:text-6xl font-bold cursor-pointer transition-all duration-300 ${
                    activeTab === index ? 'opacity-100' : 'opacity-40 hover:opacity-70'
                  } ${isAnimating ? 'pointer-events-none' : ''}`}
                  onClick={() => handleTabClick(index)}
                  onMouseEnter={() => !isAnimating && setHoveredTab(index)}
                  onMouseLeave={() => !isAnimating && setHoveredTab(null)}
                >
                  {item.title}
                </h2>
              ))}
            </div>

            {/* Center circular image */}
            <div className="flex justify-center items-center relative">
              <div className="relative w-80 h-80 lg:w-80 lg:h-80 rounded-full overflow-hidden shadow-2xl">
                <div className="absolute inset-0">
                  <img
                    src={currentContent.image}
                    alt={currentContent.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                {((hoveredTab !== null && hoveredTab !== activeTab) || hoveredNavButton !== null) && (
                  <div 
                    className={`absolute inset-0 overflow-hidden rounded-full ${
                      isExpanding ? 'expand-to-full' : ''
                    }`}
                    style={{
                      zIndex: 10,
                      transform: (() => {
                        let targetIndex;
                        let isVision = false;
                        if (hoveredTab !== null) {
                          targetIndex = hoveredTab;
                          isVision = hoveredTab === 0;
                        } else if (hoveredNavButton === 'next') {
                          targetIndex = (activeTab + 1) % content.length;
                          isVision = targetIndex === 0;
                        } else if (hoveredNavButton === 'prev') {
                          targetIndex = (activeTab - 1 + content.length) % content.length;
                          isVision = targetIndex === 0;
                        }
                        if (isVision) {
                          return isExpanding 
                            ? 'translateX(-50%) translateY(0%)'
                            : 'translateX(-100%) translateY(-100%)';
                        } else {
                          return isExpanding 
                            ? 'translateX(50%) translateY(-10%)'
                            : 'translateX(100%) translateY(-20%)';
                        }
                      })(),
                      animation: (() => {
                        let targetIndex;
                        let isVision = false;
                        if (hoveredTab !== null) {
                          targetIndex = hoveredTab;
                          isVision = hoveredTab === 0;
                        } else if (hoveredNavButton === 'next') {
                          targetIndex = (activeTab + 1) % content.length;
                          isVision = targetIndex === 0;
                        } else if (hoveredNavButton === 'prev') {
                          targetIndex = (activeTab - 1 + content.length) % content.length;
                          isVision = targetIndex === 0;
                        }
                        return isVision
                          ? (isExpanding 
                              ? 'expandToFullFromTopLeft 1.0s ease-out forwards' 
                              : 'slideInHalfwayFromTopLeft 0.8s ease-out forwards')
                          : (isExpanding 
                              ? 'expandToFull 1.0s ease-out forwards' 
                              : 'slideInHalfway 0.8s ease-out forwards');
                      })()
                    }}
                  >
                    <img
                      src={(() => {
                        if (hoveredTab !== null) {
                          return content[hoveredTab].image;
                        } else if (hoveredNavButton === 'next') {
                          return content[(activeTab + 1) % content.length].image;
                        } else if (hoveredNavButton === 'prev') {
                          return content[(activeTab - 1 + content.length) % content.length].image;
                        }
                        return '';
                      })()}
                      alt={(() => {
                        if (hoveredTab !== null) {
                          return content[hoveredTab].title;
                        } else if (hoveredNavButton === 'next') {
                          return content[(activeTab + 1) % content.length].title;
                        } else if (hoveredNavButton === 'prev') {
                          return content[(activeTab - 1 + content.length) % content.length].title;
                        }
                        return '';
                      })()}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
                {isExpanding && (hoveredTab !== null || hoveredNavButton !== null) && (
                  <div 
                    className={`absolute inset-0 overflow-hidden rounded-full ${
                      (() => {
                        let isVision = false;
                        if (hoveredTab !== null) {
                          isVision = hoveredTab === 0;
                        } else if (hoveredNavButton === 'next') {
                          isVision = ((activeTab + 1) % content.length) === 0;
                        } else if (hoveredNavButton === 'prev') {
                          isVision = ((activeTab - 1 + content.length) % content.length) === 0;
                        }
                        return isVision ? 'expand-to-full-from-top-left' : 'expand-to-full';
                      })()
                    }`}
                    style={{
                      zIndex: 15,
                      transform: (() => {
                        let isVision = false;
                        if (hoveredTab !== null) {
                          isVision = hoveredTab === 0;
                        } else if (hoveredNavButton === 'next') {
                          isVision = ((activeTab + 1) % content.length) === 0;
                        } else if (hoveredNavButton === 'prev') {
                          isVision = ((activeTab - 1 + content.length) % content.length) === 0;
                        }
                        return isVision 
                          ? 'translateX(-50%) translateY(0%)'
                          : 'translateX(50%) translateY(-10%)';
                      })()
                    }}
                  >
                    <img
                      src={(() => {
                        if (hoveredTab !== null) {
                          return content[hoveredTab].image;
                        } else if (hoveredNavButton === 'next') {
                          return content[(activeTab + 1) % content.length].image;
                        } else if (hoveredNavButton === 'prev') {
                          return content[(activeTab - 1 + content.length) % content.length].image;
                        }
                        return '';
                      })()}
                      alt={(() => {
                        if (hoveredTab !== null) {
                          return content[hoveredTab].title;
                        } else if (hoveredNavButton === 'next') {
                          return content[(activeTab + 1) % content.length].title;
                        } else if (hoveredNavButton === 'prev') {
                          return content[(activeTab - 1 + content.length) % content.length].title;
                        }
                        return '';
                      })()}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
              </div>
              <div 
                className={`absolute inset-0 rounded-full border-2 transition-all duration-800 ease-out pointer-events-none ${
                  (hoveredTab !== null || hoveredNavButton !== null)
                    ? 'border-white/50 scale-105 shadow-lg shadow-white/10'
                    : 'border-white/20 scale-100'
                }`}
                style={{
                  width: '320px',
                  height: '320px',
                  left: '50%',
                  top: '50%',
                  transform: 'translate(-50%, -50%)',
                }}
              />
            </div>

            {/* Right side content */}
            <div className="flex items-center justify-start">
              <div
                className={`transition-all duration-300 ease-in-out ${
                  isAnimating ? 'opacity-0 transform scale-95' : 'opacity-100 transform scale-100'
                }`}
              >
                {currentContent.text ? (
                  <p className="text-xl leading-relaxed whitespace-pre-line max-w-lg">{currentContent.text}</p>
                ) : (
                  <ul className="text-lg space-y-3 max-w-lg">
                  </ul>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Mobile layout */}
        <div className="md:hidden flex flex-col h-full">
          <div className="flex justify-center space-x-8 mb-6">
            {content.map((item, index) => (
              <h2
                key={item.key}
                // UPDATED: Increased text size for mobile
                className={`text-xl font-bold cursor-pointer transition-all duration-300 ${
                  activeTab === index ? 'opacity-100' : 'opacity-40 hover:opacity-70'
                } ${isAnimating ? 'pointer-events-none' : ''}`}
                onClick={() => handleTabClick(index)}
                onMouseEnter={() => !isAnimating && setHoveredTab(index)}
                onMouseLeave={() => !isAnimating && setHoveredTab(null)}
              >
                {item.title}
              </h2>
            ))}
          </div>

          <div className="flex justify-center items-center flex-1 min-h-[40vh] mb-6">
            <div className="relative w-72 h-72 rounded-full overflow-hidden shadow-2xl">
              <div className="absolute inset-0">
                <img
                  src={currentContent.image}
                  alt={currentContent.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {((hoveredTab !== null && hoveredTab !== activeTab) || hoveredNavButton !== null) && (
                <div 
                  className={`absolute inset-0 overflow-hidden rounded-full ${
                    isExpanding
                      ? (() => {
                          let isVision = false;
                          if (hoveredTab !== null) {
                            isVision = hoveredTab === 0;
                          } else if (hoveredNavButton === 'next') {
                            isVision = ((activeTab + 1) % content.length) === 0;
                          } else if (hoveredNavButton === 'prev') {
                            isVision = ((activeTab - 1 + content.length) % content.length) === 0;
                          }
                          return isVision ? 'expand-to-full-from-top-left' : 'expand-to-full';
                        })()
                      : (() => {
                          let isVision = false;
                          if (hoveredTab !== null) {
                            isVision = hoveredTab === 0;
                          } else if (hoveredNavButton === 'next') {
                            isVision = ((activeTab + 1) % content.length) === 0;
                          } else if (hoveredNavButton === 'prev') {
                            isVision = ((activeTab - 1 + content.length) % content.length) === 0;
                          }
                          return isVision ? 'slide-in-halfway-top-left' : 'slide-in-halfway';
                        })()
                  }`}
                  style={{
                    zIndex: 10,
                  }}
                >
                  <img
                    src={(() => {
                      if (hoveredTab !== null) {
                        return content[hoveredTab].image;
                      } else if (hoveredNavButton === 'next') {
                        return content[(activeTab + 1) % content.length].image;
                      } else if (hoveredNavButton === 'prev') {
                        return content[(activeTab - 1 + content.length) % content.length].image;
                      }
                      return '';
                    })()}
                    alt={(() => {
                      if (hoveredTab !== null) {
                        return content[hoveredTab].title;
                      } else if (hoveredNavButton === 'next') {
                        return content[(activeTab + 1) % content.length].title;
                      } else if (hoveredNavButton === 'prev') {
                        return content[(activeTab - 1 + content.length) % content.length].title;
                      }
                      return '';
                    })()}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}

              <div 
                className={`absolute inset-0 rounded-full border-2 transition-all duration-800 ease-out pointer-events-none ${
                  (hoveredTab !== null || hoveredNavButton !== null)
                    ? 'border-white/50 scale-105 shadow-lg shadow-white/10'
                    : 'border-white/20 scale-100'
                }`}
                style={{
                  width: '300px',
                  height: '300px',
                  left: '50%',
                  top: '50%',
                  transform: 'translate(-50%, -50%)',
                }}
              />
            </div>
          </div>

          <div className="text-center px-4 mb-6">
            <div
              className={`transition-all duration-300 ease-in-out ${
                isAnimating ? 'opacity-0 transform scale-95' : 'opacity-100 transform scale-100'
              }`}
            >
              {currentContent.text ? (
                <p className="text-base leading-relaxed whitespace-pre-line max-w-md mx-auto">{currentContent.text}</p>
              ) : (
                <ul className="text-sm space-y-2 max-w-md mx-auto text-left">
                </ul>
              )}
            </div>
          </div>

          {/* Progress bar */}
          <div className="px-4 pb-4">
            <div className="w-full bg-gray-700 h-1 rounded-full">
              <div 
                className="bg-purple-900 h-1 rounded-full transition-all duration-500 ease-out" 
                style={{ width: `${((activeTab + 1) / content.length) * 100}%` }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionPurposeValues;