import React from 'react';

const JoyMattersSection = () => {
  return (
    <section className="relative w-full min-h-[300px] sm:min-h-[400px] lg:h-[462.14px] bg-black overflow-hidden">
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
      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between h-full px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-16 mx-auto max-w-7xl">
        {/* Left Text Content */}
        <div className="flex-1 text-center lg:text-left mb-6 sm:mb-8 lg:mb-0 lg:mr-8 text-white">
          {/* Logo */}
          <div className="mb-3 sm:mb-4">
            <img
              src="https://insights.techmahindra.com/images/thebig-thinkerslogo.webp"
              alt="The Big Thinkers Logo"
              className="h-6 sm:h-8 lg:h-10 mx-auto lg:mx-0"
            />
          </div>
          
          {/* Horizontal Line 1 */}
          <div className="h-0.5 w-12 sm:w-16 bg-white mb-3 sm:mb-4 mx-auto lg:mx-0"></div>

          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight mb-3 sm:mb-4">
            'Joy Matters': How One Company Brings Delight to Digital Transformation
          </h1>
          
          <p className="text-sm sm:text-base lg:text-lg mb-1 sm:mb-2">
            Kellie Romack
          </p>
          
          {/* Horizontal Line 2 */}
          <div className="h-0.5 w-12 sm:w-16 bg-white mb-3 sm:mb-4 mx-auto lg:mx-0"></div>
          
          <p className="text-xs sm:text-sm lg:text-base text-gray-300 mb-6 sm:mb-8">
            Chief Digital Information Officer, ServiceNow
          </p>
          
          <button className="px-4 py-2 sm:px-6 sm:py-3 border-2 border-white text-white font-medium hover:bg-red-500 hover:border-red-500 transition-all duration-300 text-sm sm:text-base">
            LEARN MORE
          </button>
        </div>

        {/* Right Image */}
        <div className="flex-1 flex justify-center lg:justify-end">
          <img
            src="https://insights.techmahindra.com/images/kellieromack-gbg.webp"
            alt="Kellie Romack"
            className="w-full max-w-xs sm:max-w-sm lg:max-w-md xl:max-w-lg h-auto object-cover rounded-lg shadow-lg"
            style={{ minWidth: '200px', maxWidth: '500px' }}
          />
        </div>
      </div>
    </section>
  );
};

export default JoyMattersSection;