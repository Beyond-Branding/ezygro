import { useState, useEffect } from 'react';

// OurServices component with left-aligned title
function OurServices() {
  const services = {
    discover: [
      "Strategy and Roadmap", "Discovery", "Process Mining and Task Mining", "AI Maturity Assessment",
      "CCF Setup", "Enterprise IA and AI Architecture evaluation", "Platform/Technology Evaluation",
      "Evangelize AI Pair Programming",
    ],
    experiment: [
      "Gen AI Experiment as a Service (XaaS)", "AI Labs", "Sandbox Setup", "PoT and Fast Experiment",
      "Partner/Client Co-innovation",
    ],
    scale: [
      "Model Factory", "AI Ops and ML Ops", "Digital Workforce Management", "AI and Bot Performance Management",
      "AI Store", "AI Enablement", "Data Annotation", "Enterprise AI Platform Build",
      "Responsible Adoption", "Enterprise Knowledge Search",
    ],
  };

  const ServiceCard = ({ title, description, items }) => (
    <div className="bg-white p-8 border border-gray-200 rounded-lg h-full">
      <h3 className="text-2xl font-bold text-gray-900 mb-4">{title}</h3>
      <p className="text-gray-600 mb-8">{description}</p>
      <ul className="space-y-4">
        {items.map((item, index) => (
          <li key={index} className="flex items-start">
            <span className="text-red-500 mr-3 mt-1 flex-shrink-0">■</span>
            <span className="text-gray-800">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <section className="bg-gray-50 py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title container updated from text-center to text-left (default) */}
        <div className="mb-12">
          <h2 className="text-4xl font-bold text-gray-900">Our Services</h2>
        </div>
        {/* Reverted to a responsive grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ServiceCard title="Discover" description="Tech Mahindra’s design thinking-led approach and frameworks help identify AI opportunities lurking in your organization. Our experts identify the right AI strategy and roadmap for your organization." items={services.discover} />
          <ServiceCard title="Experiment" description="Our principle of ‘fail fast to learn faster’ is enabled by an ecosystem of experimentation. Our AI Labs for innovative opportunities enable us, along with partners or clients, to co-innovate." items={services.experiment} />
          <ServiceCard title="Scale" description="We help you leverage your data and AI assets across the organization coupled with our AI solutions in order to scale up on your AI journey. Our AI enablement programs can help accelerate the democratization of AI." items={services.scale} />
        </div>
      </div>
    </section>
  );
}


function FinancialAndAccounting() {
  const [scaleAtSpeedVisible, setScaleAtSpeedVisible] = useState(false);
  const [promiseTextVisible, setPromiseTextVisible] = useState(false);
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1024);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const scaleTimer = setTimeout(() => {
      setScaleAtSpeedVisible(true);
    }, 200);
    const promiseTimer = setTimeout(() => {
      setPromiseTextVisible(true);
    }, 400);

    return () => {
      clearTimeout(scaleTimer);
      clearTimeout(promiseTimer);
    };
  }, []);

  return (
    <>
      <section className="relative min-h-screen bg-white overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute right-0 top-0 w-full h-full">
            <div
              className="w-full h-full bg-transparent"
              style={{
                clipPath: windowWidth < 768
                  ? 'polygon(-375% 75%, 100% 20%, 100% 100%, 0% 100%)'
                  : 'polygon(-40% 90%, 100% 0%, 100% 100%, 0% 100%)'
              }}
            >
              <div className="absolute inset-0 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
                  alt="About Us"
                  className="w-full h-full object-cover opacity-70"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="relative z-10 min-h-screen max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-16">
          <div className="absolute top-4 sm:top-8 lg:top-16 left-4 sm:left-6 lg:left-0 w-full max-w-xs sm:max-w-lg lg:max-w-2xl lg:w-3/5 pr-4 sm:pr-6 lg:pr-6">
            <h1
              className={`text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 transition-all duration-700 ease-out ${
                scaleAtSpeedVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
              }`}
              style={{
                fontSize: windowWidth < 640 ? '28px' : windowWidth < 1024 ? '48px' : '66px',
                lineHeight: windowWidth < 640 ? '30px' : windowWidth < 1024 ? '48px' : '70px'
              }}
            >
              Who We Are
            </h1>

            <div
              className={`transition-all duration-700 ease-out ${
                promiseTextVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
              }`}
            >
              <p
                className="mt-2 sm:mt-4 lg:mt-6 text-xs sm:text-xs lg:text-sm text-gray-800 leading-relaxed font-400"
                style={{
                  fontSize: windowWidth < 640 ? '12px' : windowWidth < 1024 ? '14px' : '16px',
                  lineHeight: windowWidth < 640 ? '15px' : windowWidth < 1024 ? '18px' : '22px'
                }}
              >
                Welcome to EZYGRO where expertise meets elegance in legal, tax, audit, and compliance.
                Led by Sushma B. Salunkhe, we simplify the complex with clarity and care.
                Empowering growth with purpose, precision, and trust.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl font-bold text-black">
              Financial and Accounting Management
            </h2>
          </div>
          <div>
            <p className="text-gray-800 leading-relaxed">
              EZYGRO provides end-to-end Financial and Accounting Management Services tailored to meet the dynamic needs of modern businesses. As regulations evolve, technology advances, and talent expectations shift, our expert-led solutions ensure your financial operations remain compliant, efficient, and future-ready. From streamlining processes and ensuring accurate reporting to optimizing financial strategies, we handle the critical functions so you can focus on innovation, scaling, and driving long-term success. With EZYGRO, finance becomes a catalyst for growth, not a burden.
            </p>
            <div className="mt-4 font-semibold text-black flex items-center cursor-pointer">
              MORE <span className="ml-2 text-xl">+</span>
            </div>
          </div>
        </div>
      </section>

      <OurServices />
    </>
  );
}

export default FinancialAndAccounting;