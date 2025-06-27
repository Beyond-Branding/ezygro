import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import { ArrowRight, Building2, Zap, Phone, Shield, Factory, Plane } from 'lucide-react';

interface IndustryCard {
  id: number;
  title: React.ReactNode;
  icon: React.ReactNode;
  image: string;
  description: string;
  link: string;
}

const Industries: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  const industries: IndustryCard[] = [
    {
      id: 1,
      title: 'Financial and Accounting Management',
      icon: <Building2 className="w-8 h-8" />,
      image: 'https://images.pexels.com/photos/259027/pexels-photo-259027.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
      description: 'Digital transformation solutions for financial institutions',
      link: '/industries/banking-financial-services'
    },
    {
      id: 2,
      title: (
        <>
          Income Tax, GST and <br /> Audits
        </>
      ),
      icon: <Phone className="w-8 h-8" />,
      image: 'https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
      description: 'Next-generation communication technologies and solutions',
      link: '/industries/communications'
    },
    {
      id: 3,
      title: 'Virtual CFO and Business Growth Consultancy',
      icon: <Zap className="w-8 h-8" />,
      image: 'https://images.pexels.com/photos/433308/pexels-photo-433308.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
      description: 'Smart grid and renewable energy solutions',
      link: '/industries/energy-utilities'
    },
    {
      id: 4,
      title: (
        <>
          Innovative <br /> Dashboards
        </>
      ),
      icon: <Shield className="w-8 h-8" />,
      image: 'https://images.pexels.com/photos/356040/pexels-photo-356040.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
      description: 'Healthcare technology and digital health solutions',
      link: '/industries/healthcare-life-sciences'
    },
    {
      id: 5,
      title: 'Loans, Insurance and Investments',
      icon: <Factory className="w-8 h-8" />,
      image: 'https://images.pexels.com/photos/2882552/pexels-photo-2882552.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
      description: 'Industry 4.0 and smart manufacturing solutions',
      link: '/industries/manufacturing'
    },
    {
      id: 6,
      title: (
        <>
          Secretarial <br /> Compliances
        </>
      ),
      icon: <Plane className="w-8 h-8" />,
      image: 'https://images.pexels.com/photos/358319/pexels-photo-358319.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
      description: 'Digital transformation for travel and logistics',
      link: '/industries/travel-transportation'
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header with title and description, styled like CapabilitiesSection */}
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between mb-12 gap-4 sm:gap-6 lg:gap-8">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 lg:w-1/3">
              Capabilities
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-gray-700 lg:w-2/3 lg:text-right leading-relaxed">
              We don’t believe in one-size-fits-all. Your business is unique and your legal, tax, audit, and compliance solutions should be too.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {industries.map((industry, index) => (
              // Each card is now wrapped in a Link component for navigation
              <Link
                to={industry.link}
                key={industry.id}
                className={`group relative transform transition-all duration-700 ease-out hover:scale-105 w-full ${
                  isVisible 
                    ? 'translate-y-0 opacity-100' 
                    : 'translate-y-8 opacity-0'
                }`}
                style={{
                  transitionDelay: `${index * 150}ms`
                }}
              >
                <div className="relative bg-white hover:bg-gray-900 p-8 transition-all duration-500 min-h-[420px] h-full flex flex-col justify-between shadow-md">
                  
                  <div className="flex justify-center mb-6 pt-8">
                    <div className="w-32 h-32 rounded-full overflow-hidden">
                      <img
                        src={industry.image}
                        alt={typeof industry.title === 'string' ? industry.title : ''} // Alt text handled for JSX title
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.onerror = null; 
                          target.src='https://placehold.co/300x300/e2e8f0/64748b?text=Image';
                        }}
                      />
                    </div>
                  </div>

                  <div className="flex-1 flex flex-col justify-end">
                    <h3 className="text-lg font-semibold text-gray-900 group-hover:text-white transition-colors duration-500 mb-4 text-center">
                      {industry.title}
                    </h3>
                    
                    <div className="flex justify-end">
                      <ArrowRight className="w-5 h-5 text-gray-600 group-hover:text-white transition-colors duration-500" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Industries;
