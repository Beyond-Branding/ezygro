import React from 'react';

const CapabilitiesSection = () => {
  const capabilities = [
    {
      title: "Artificial Intelligence",
      description: "Amplify your business with TechM by infusing AI in every aspect of your business, democratizing AI responsibly.",
      link: "https://www.techmahindra.com/services/artificial-intelligence/",
      imageUrl: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1"
    },
    {
      title: "Business Process Services",
      description: "Streamline operations with intelligent automation and process optimization solutions.",
      link: "#",
      imageUrl: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1"
    },
    {
      title: "Cloud and Infrastructure Services",
      description: "Accelerate digital transformation with scalable cloud solutions and modern infrastructure.",
      link: "#",
      imageUrl: "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1"
    },
    {
      title: "Digital Enterprise Applications",
      description: "Transform business processes with next-generation enterprise applications and platforms.",
      link: "#",
      imageUrl: "https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1"
    },
    {
      title: "Engineering Services",
      description: "Drive innovation with comprehensive engineering solutions and product development expertise.",
      link: "#",
      imageUrl: "https://images.pexels.com/photos/3862132/pexels-photo-3862132.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1"
    },
    {
      title: "Experience Services",
      description: "Create exceptional customer experiences through design thinking and user-centric solutions.",
      link: "#",
      imageUrl: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1"
    },
    {
      title: "Network Services",
      description: "Enable seamless connectivity with advanced network solutions and 5G technologies.",
      link: "#",
      imageUrl: "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1"
    },
    {
      title: "Testing Services",
      description: "Ensure quality and reliability with comprehensive testing and quality assurance solutions.",
      link: "#",
      imageUrl: "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1"
    },
  ];

  return (
    <section className="pt-8 md:pt-12 pb-16 md:pb-24 bg-white">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between mb-8 sm:mb-10 lg:mb-12 gap-4 sm:gap-6 lg:gap-8">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 lg:w-1/3">
              Industries
            </h2>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
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
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-500"></div>
                </div>

                {/* Content */}
                <div className="relative z-10 p-3 sm:p-4 lg:p-6 h-full flex flex-col text-center">
                  {/* Title */}
                  <h3 className="text-sm sm:text-base lg:text-lg xl:text-xl font-bold leading-tight text-white mb-1 sm:mb-2">
                    {capability.title}
                  </h3>

                  {/* Description - Appears centered on hover */}
                  {capability.description && (
                    <div className="absolute inset-0 flex items-center justify-center p-3 sm:p-4 lg:p-6">
                      <p className="text-xs sm:text-sm text-gray-200 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200 text-center leading-relaxed">
                        {capability.description}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CapabilitiesSection;