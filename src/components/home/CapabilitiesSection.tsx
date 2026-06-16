import React, { useEffect, useState } from "react";
import {
  ArrowRight,
  Building2,
  Zap,
  Phone,
  Shield,
  Factory,
  Plane,
} from "lucide-react";

interface CapabilityCard {
  id: number;
  title: () => React.ReactNode;
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
      title: () => <>Financial and Accounting Management</>,
      icon: <Building2 className="w-8 h-8" />,
      image:
        "https://res.cloudinary.com/dt6hlbtfo/image/upload/v1781603485/xczmtrbe2pkolzu9wjhl.jpg",
      description:
        "Digital transformation solutions for financial institutions",
      link: "/capabilities/financial-accounting",
    },
    {
      id: 2,
      title: () => (
        <>
          Income Tax, GST and <br /> Audits
        </>
      ),
      icon: <Phone className="w-8 h-8" />,
      image:
        "https://res.cloudinary.com/dt6hlbtfo/image/upload/v1781603487/ddzdn2zskynkjzuwgmoq.jpg",
      description: "Next-generation communication technologies and solutions",
      link: "/capabilities/income-tax",
    },
    {
      id: 3,
      title: () => "Virtual CFO and Business Growth Consultancy",
      icon: <Zap className="w-8 h-8" />,
      image:
        "https://res.cloudinary.com/dt6hlbtfo/image/upload/v1781603499/tsifig2rnu5n0s5lsjgf.jpg",
      description: "Smart grid and renewable energy solutions",
      link: "/capabilities/virtual-cfo",
    },
    {
      id: 4,
      title: () => (
        <>
          Innovative <br /> Dashboards
        </>
      ),
      icon: <Shield className="w-8 h-8" />,
      image:
        "https://res.cloudinary.com/dt6hlbtfo/image/upload/v1781603483/kdlecoghxrl8rs5jhjc4.jpg",
      description: "Healthcare technology and digital health solutions",
      link: "/capabilities/innovative-dashboards",
    },
    {
      id: 5,
      title: () => "Loans, Insurance and Investments",
      icon: <Factory className="w-8 h-8" />,
      image:
        "https://res.cloudinary.com/dt6hlbtfo/image/upload/v1781603489/u5rrxcsqyan2mggjn8sa.jpg",
      description: "Industry 4.0 and smart manufacturing solutions",
      link: "/capabilities/loans-and-insurance",
    },
    {
      id: 6,
      title: () => (
        <>
          Secretarial <br /> Compliances
        </>
      ),
      icon: <Plane className="w-8 h-8" />,
      image:
        "https://res.cloudinary.com/dt6hlbtfo/image/upload/v1781603497/pmivnnigs7s29jsquuem.jpg",
      description: "Digital transformation for travel and logistics",
      link: "/capabilities/secretarial-compliances",
    },
  ];

  return (
    <section className="bg-white ml-0 py-16 md:py-24">
      <div className="mx-auto">
        <div className="mx-auto px-6 lg:px-12 container">
          <div className="flex lg:flex-row flex-col justify-between items-start lg:items-center gap-4 sm:gap-6 lg:gap-8 mb-12">
            <h2 className="lg:w-1/3 font-bold text-gray-900 text-4xl md:text-5xl">
              Services
            </h2>

            <p
              className="lg:w-2/3 text-gray-700 text-sm sm:text-base lg:text-lg text-left leading-relaxed lg:leading-7"
              style={{
                maxWidth: "700px",
                marginLeft: "auto",
                marginRight: "0",
              }}
            >
              We don&apos;t believe in one-size-fits-all. Your business is
              unique and your legal, tax, audit, and compliance solutions should
              be too.
            </p>
          </div>

          <div className="gap-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((capability, index) => (
              <a
                href={capability.link}
                key={capability.id}
                className={`group relative transform transition-all duration-700 ease-out hover:scale-105 w-full ${
                  isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-8 opacity-0"
                }`}
                style={{
                  transitionDelay: `${index * 150}ms`,
                }}
              >
                <div className="relative flex flex-col justify-between bg-white hover:bg-[#4B1D92] shadow-md p-4 h-full min-h-[470px] transition-all duration-500">
                  <div className="flex justify-center pt-4">
                    <div className="mx-auto mb-6 rounded-full w-60 h-60 overflow-hidden">
                      <img
                        src={capability.image}
                        alt={
                          typeof capability.title === "string"
                            ? capability.title
                            : ""
                        }
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.onerror = null;
                          target.src =
                            "https://placehold.co/300x300/e2e8f0/64748b?text=Image";
                        }}
                      />
                    </div>
                  </div>

                  <div className="flex flex-col flex-1 justify-end">
                    <h3 className="mb-4 font-semibold text-gray-900 group-hover:text-white text-xl text-center transition-colors duration-500">
                      {capability.title()}
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
