import React, { useState, useEffect, useRef } from 'react';

const sectionsData = [
  {
    id: 1,
    title: 'Why EZYGRO',
    description: 'Looking to elevate your career with purpose-driven work? At EZYGRO, we believe in transforming businesses through smart finance, compliance, and strategy. Join a team of passionate professionals, innovators, and problem-solvers shaping the future of financial growth. Let your journey grow with ours.',
    alt: 'A diverse team collaborating in a modern office meeting room.',
    imageUrl: 'https://res.cloudinary.com/dzlxesyxg/image/upload/v1751518279/whyeszroc_ghbpij.jpg'
  },
  {
    id: 2,
    title: 'Empowering Through Finance',
    description: 'We are a purpose-led firm committed to creating meaningful growth journeys for our clients and team. At EZYGRO, we don’t just deliver financial solutions we empower businesses and people to thrive with clarity, confidence, and compliance. Let’s grow together the EZYGRO way.',
    alt: 'A creative team celebrating success with high-fives in a sunlit office.',
    imageUrl: 'https://res.cloudinary.com/dzlxesyxg/image/upload/v1751518787/empoweringc_eazapv.jpg'
  },
  {
    id: 3,
    title: 'Diversity & Inclusion at EZYGRO',
    description: 'We value what makes each of us unique because it’s the differences that drive innovation. At EZYGRO, we’re proudly diverse and consciously inclusive, creating a workplace where every voice matters and every perspective adds value.',
    alt: 'A mentor guiding a colleague on a laptop in a bright, collaborative space.',
    imageUrl: 'https://res.cloudinary.com/dzlxesyxg/image/upload/v1751518835/inclsuionc_aczfux.jpg'
  },
  {
    id: 4,
    title: 'Reconnect. Rediscover. Rise Together',
    description: 'Revisit your journey with EZYGRO reconnect with former colleagues, rediscover new opportunities, and inspire the next wave of growth. Join the EZYGRO Alumni Network to stay updated through newsletters, share your story, and explore pathways to return or collaborate.There are countless reasons to be part of EZYConnect – the EZYGRO Alumni Portal. What’s yours?',
    alt: 'An engineer working on complex robotics in a high-tech laboratory.',
    imageUrl: 'https://res.cloudinary.com/dzlxesyxg/image/upload/v1751518914/resetc_u7smca.jpg'
  },
];

const useInView = (options: IntersectionObserverInit) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !hasAnimated) {
        setIsInView(true);
        setHasAnimated(true);
      }
    }, options);

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [ref, options, hasAnimated]);

  return [ref, isInView] as const;
};

// --- Form Component ---
const ContactForm = () => {
    const FormInput = ({ id, label, type = "text", required = false, children }: { id: string, label: string, type?: string, required?: boolean, children?: React.ReactNode }) => (
        <div className={type === 'textarea' ? 'md:col-span-2' : ''}>
            <label htmlFor={id} className="block text-sm font-medium text-gray-400">
                {required && <span className="text-red-500">*</span>} {label}
            </label>
            {children ? (
                 <div className="mt-1">{children}</div>
            ) : (
                <input
                    type={type}
                    name={id}
                    id={id}
                    className="block w-full bg-transparent border-0 border-b border-gray-600 focus:ring-0 focus:border-white py-2 text-white"
                />
            )}
        </div>
    );

    return (
        <section className="bg-gray-900 text-white py-16 sm:py-24">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
                    <div className="lg:col-span-1">
                        <h2 className="text-4xl font-bold tracking-tight">Get In Touch</h2>
                        <p className="mt-4 text-lg text-gray-400">
                            Need more information? <br />
                            We will take approximately 3-5 working days to respond to your enquiry.
                        </p>
                    </div>
                    <div className="lg:col-span-2">
                        <form action="#" method="POST" className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-8">
                            <FormInput id="enquiryType" label="Type of enquiry" required>
                                <select id="enquiryType" name="enquiryType" className="block w-full bg-transparent border-0 border-b border-gray-600 focus:ring-0 focus:border-white py-2 text-white">
                                    <option className="bg-gray-800">Select an enquiry type</option>
                                    <option className="bg-gray-800">General</option>
                                    <option className="bg-gray-800">Careers</option>
                                    <option className="bg-gray-800">Partnership</option>
                                </select>
                            </FormInput>
                            <div></div> {/* Spacer */}
                            <FormInput id="firstName" label="First Name" required />
                            <FormInput id="lastName" label="Last Name" required />
                            <FormInput id="email" label="Email Address" type="email" required />
                            <FormInput id="organisation" label="Organisation" />
                            <FormInput id="jobTitle" label="Job Title" />
                            <FormInput id="phoneNumber" label="Phone Number" />
                            <FormInput id="country" label="Country" required>
                                 <select id="country" name="country" className="block w-full bg-transparent border-0 border-b border-gray-600 focus:ring-0 focus:border-white py-2 text-white">
                                    <option className="bg-gray-800">-Select-</option>
                                    <option className="bg-gray-800">United States</option>
                                    <option className="bg-gray-800">Canada</option>
                                    <option className="bg-gray-800">India</option>
                                    <option className="bg-gray-800">United Kingdom</option>
                                </select>
                            </FormInput>
                             <FormInput id="message" label="Message" type="textarea" required>
                                <textarea id="message" name="message" rows={4} className="block w-full bg-transparent border border-gray-600 focus:ring-0 focus:border-white p-2 text-white"></textarea>
                            </FormInput>
                            <div className="md:col-span-2 space-y-5">
                                <div className="relative flex items-start">
                                    <div className="flex h-6 items-center">
                                        <input id="privacy" name="privacy" type="checkbox" className="h-4 w-4 rounded border-gray-500 bg-gray-800 text-indigo-600 focus:ring-indigo-600" />
                                    </div>
                                    <div className="ml-3 text-sm leading-6">
                                        <p className="text-gray-400">By clicking on the submit button, you agree with the <a href="#" className="font-medium text-white hover:underline">Privacy Policy</a>.</p>
                                    </div>
                                </div>
                                
                            </div>
                            <div>
                                <button type="submit" className="inline-block rounded-md border border-white px-8 py-3 text-center font-medium text-white hover:bg-white hover:text-gray-900 transition-colors">
                                    Submit
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};


const Careers = () => {
  const [titleVisible, setTitleVisible] = useState(false);
  const [textVisible, setTextVisible] = useState(false);
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1024);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTitleVisible(false);
            setTextVisible(false);
            
            setTimeout(() => {
              setTitleVisible(true);
            }, 200);

            setTimeout(() => {
              setTextVisible(true);
            }, 400);
          } else {
            
            setTitleVisible(false);
            setTextVisible(false);
          }
        });
      },
      {
        threshold: 0.3, 
        rootMargin: '-10% 0px -10% 0px' 
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const initialTimer = setTimeout(() => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
        
        if (isVisible) {
          setTitleVisible(true);
          setTimeout(() => {
            setTextVisible(true);
          }, 200);
        }
      }
    }, 300);

    return () => clearTimeout(initialTimer);
  }, []);

  return (
    <>
      <section ref={sectionRef} className="relative min-h-screen bg-white overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute right-0 top-0 w-full h-full">
            <div
              className="w-full h-full bg-transparent"
              style={{
                clipPath: windowWidth < 768 
                ? 'polygon(-375% 75%, 100% 20%, 100% 100%, 0% 100%)' 
                : 'polygon(-10% 90%, 130% 0%, 100% 100%, 0% 100%)'
              }}
            >
              <div className="absolute inset-0 overflow-hidden">
                <img
                  src="https://res.cloudinary.com/dzlxesyxg/image/upload/v1751476929/carrer_dtd9ts.jpg"
                  alt="Careers Background"
                  className="w-full h-full object-cover"
                  style={{ opacity: 1 }}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="relative z-10 min-h-screen max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-16">
          <div className="absolute top-2 sm:top-4 lg:top-8 left-8 sm:left-12 lg:left-20 w-full max-w-xs sm:max-w-lg lg:max-w-2xl lg:w-3/5 pr-4 sm:pr-6 lg:pr-6">
            <h1
              className={`text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold text-gray-900 transition-all duration-700 ease-out ${
                titleVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
              }`}
              style={{ 
                fontSize: windowWidth < 640 ? '28px' : windowWidth < 1024 ? '48px' : '66px', 
                lineHeight: windowWidth < 640 ? '36px' : windowWidth < 1024 ? '56px' : '90px' 
              }}
            >
              Careers at <span style={{ color: '#4B1D92' }}>EZYGRO</span>
            </h1>
            <div
              className={`transition-all duration-700 ease-out ${
                textVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
              }`}
            >
              <p className="mt-2 sm:mt-4 lg:mt-6 text-xs sm:text-sm lg:text-base text-gray-800 leading-relaxed font-400"
                 style={{ 
                   fontSize: windowWidth < 640 ? '14px' : windowWidth < 1024 ? '16px' : '18px', 
                   lineHeight: windowWidth < 640 ? '20px' : windowWidth < 1024 ? '24px' : '30px' 
                 }}
              >
                Join a dynamic and growth-driven environment where your ideas matter. At EZYGRO, we nurture talent, encourage innovation, and offer opportunities to build a meaningful, future-ready career.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto flex flex-col gap-16 sm:gap-24">
            {sectionsData.map((section, index) => {
              const isTextOnLeft = index % 2 === 0;
              const [ref, isInView] = useInView({ threshold: 0.1 });

              return (
                <div
                  ref={ref}
                  key={section.id}
                  className={`flex flex-col lg:flex-row items-center gap-8 lg:gap-16 transition-opacity duration-500 ${
                    isInView ? 'opacity-100' : 'opacity-50'
                  }`}
                >
                  <div className={`lg:w-3/5 lg:py-8 ${isTextOnLeft ? 'lg:order-1' : 'lg:order-2'}`}>
                    <div
                      className={`transition-all duration-1000 ease-out ${
                        isInView
                          ? 'translate-x-0 opacity-100'
                          : isTextOnLeft
                          ? '-translate-x-10 opacity-0'
                          : 'translate-x-10 opacity-0'
                      }`}
                    >
                      <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                        {section.title}
                      </h2>
                      <p className="mt-6 text-lg leading-8 text-gray-600">
                        {section.description}
                      </p>
                      
                    </div>
                  </div>

                  <div className={`lg:w-2/5 ${isTextOnLeft ? 'lg:order-2' : 'lg:order-1'}`}>
                    <div
                      className={`overflow-hidden transition-all duration-1000 ease-out ${
                        isInView ? 'scale-100 opacity-100' : 'scale-90 opacity-0'
                      }`}
                    >
                      <img
                        src={section.imageUrl}
                        alt={section.alt}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      
      <ContactForm />
    </>
  );
};

export default Careers;