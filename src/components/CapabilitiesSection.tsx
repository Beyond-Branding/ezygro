import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Building2, Zap, Phone, Shield, Factory, Plane } from 'lucide-react';

interface CapabilityCard {
  id: number;
  title: React.ReactNode;
  icon: React.ReactNode;
  image: string;
  description: string;
  link: string;
}

const CapabilitiesSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  const capabilities: CapabilityCard[] = [
    {
      id: 1,
      title: 'Financial and Accounting Management',
      icon: <Building2 className="w-8 h-8" />,
      image: 'https://res.cloudinary.com/daoju0r3c/image/upload/v1753712263/financial_ggjj6g_wrcnjb.jpg',
      description: 'Digital transformation solutions for financial institutions',
      link: '/financial-accounting'
    },
    {
      id: 2,
      title: (
        <>
          Income Tax, GST and <br /> Audits
        </>
      ),
      icon: <Phone className="w-8 h-8" />,
      image: 'https://res.cloudinary.com/daoju0r3c/image/upload/v1753712266/Incometax_vzg8fz_z4zq0v.jpg',
      description: 'Next-generation communication technologies and solutions',
      link: '/income-tax'
    },
    {
      id: 3,
      title: 'Virtual CFO and Business Growth Consultancy',
      icon: <Zap className="w-8 h-8" />,
      image: 'https://res.cloudinary.com/daoju0r3c/image/upload/v1753712267/Virtual_cfo_vup51w_yewvcl.jpg',
      description: 'Smart grid and renewable energy solutions',
      link: '/virtual-cfo'
    },
    {
      id: 4,
      title: (
        <>
          Innovative <br /> Dashboards
        </>
      ),
      icon: <Shield className="w-8 h-8" />,
      image: 'https://res.cloudinary.com/daoju0r3c/image/upload/v1753712262/Dashboards_trcrbv_lduln5.jpg',
      description: 'Healthcare technology and digital health solutions',
      link: '/innovative-dashboards'
    },
    {
      id: 5,
      title: 'Loans, Insurance and Investments',
      icon: <Factory className="w-8 h-8" />,
      image: 'https://res.cloudinary.com/daoju0r3c/image/upload/v1753712266/Loans_x8mwb3_olsmcz.jpg',
      description: 'Industry 4.0 and smart manufacturing solutions',
      link: '/loans-insurance'
    },
    {
      id: 6,
      title: (
        <>
          Secretarial <br /> Compliances
        </>
      ),
      icon: <Plane className="w-8 h-8" />,
      image: 'https://res.cloudinary.com/daoju0r3c/image/upload/v1753712266/Secretorial_compliances_y3onhw_d2irdk.jpg',
      description: 'Digital transformation for travel and logistics',
      link: '/secretarial-compliances'
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-white ml-0 sm:ml-4 md:ml-8 lg:ml-12">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between mb-12 gap-4 sm:gap-6 lg:gap-8">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 lg:w-1/3">
              Services
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-gray-700 lg:w-2/3 lg:text-right leading-relaxed text-left lg:text-justify lg:leading-7" style={{ maxWidth: '700px', marginLeft: 'auto', marginRight: '0' }}>
              We don't believe in one-size-fits-all. Your business is unique and your legal, tax, audit, and compliance solutions should be too.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {capabilities.map((capability, index) => (
              <a
                href={capability.link}
                key={capability.id}
                className={`group relative transform transition-all duration-700 ease-out hover:scale-105 w-full ${
                  isVisible
                    ? 'translate-y-0 opacity-100'
                    : 'translate-y-8 opacity-0'
                }`}
                style={{
                  transitionDelay: `${index * 150}ms`
                }}
              >
                <div className="relative bg-white hover:bg-[#4B1D92] p-4 transition-all duration-500 min-h-[470px] h-full flex flex-col justify-between shadow-md">
                  <div className="flex justify-center pt-4">
                    <div className="w-60 h-60 rounded-full overflow-hidden mx-auto mb-6">
                      <img
                        src={capability.image}
                        alt={typeof capability.title === 'string' ? capability.title : ''}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.onerror = null;
                          target.src = 'https://placehold.co/300x300/e2e8f0/64748b?text=Image';
                        }}
                      />
                    </div>
                  </div>

                  <div className="flex-1 flex flex-col justify-end">
                    <h3 className="text-xl font-semibold text-gray-900 group-hover:text-white transition-colors duration-500 mb-4 text-center">
                      {capability.title}
                    </h3>

                    <div className="flex justify-end">
                      <ArrowRight className="w-5 h-5 text-gray-600 group-hover:text-white transition-colors duration-500" />
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CapabilitiesSection;
