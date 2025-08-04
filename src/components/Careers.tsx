import React, { useState, useEffect, useRef } from 'react';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';

const sectionsData = [
  {
    id: 1,
    title: 'Why EZYGRO',
    description: 'Looking to elevate your career with purpose-driven work? At EZYGRO, we believe in transforming businesses through smart finance, compliance, and strategy. Join a team of passionate professionals, innovators, and problem-solvers shaping the future of financial growth. Let your journey grow with ours.',
    alt: 'A diverse team collaborating in a modern office meeting room.',
    imageUrl: 'https://res.cloudinary.com/daoju0r3c/image/upload/v1753712267/whyeszroc_ghbpij_ejujbc.jpg'
  },
  {
    id: 2,
    title: 'Empowering Through Finance',
    description: 'We are a purpose-led firm committed to creating meaningful growth journeys for our clients and team. At EZYGRO, we don’t just deliver financial solutions we empower businesses and people to thrive with clarity, confidence, and compliance. Let’s grow together the EZYGRO way.',
    alt: 'A creative team celebrating success with high-fives in a sunlit office.',
    imageUrl: 'https://res.cloudinary.com/daoju0r3c/image/upload/v1753712265/empoweringc_eazapv_tr8efr.jpg'
  },
  {
    id: 3,
    title: 'Diversity & Inclusion at EZYGRO',
    description: 'We value what makes each of us unique because it’s the differences that drive innovation. At EZYGRO, we’re proudly diverse and consciously inclusive, creating a workplace where every voice matters and every perspective adds value.',
    alt: 'A mentor guiding a colleague on a laptop in a bright, collaborative space.',
    imageUrl: 'https://res.cloudinary.com/daoju0r3c/image/upload/v1754236055/inclsuionc_aczfux_kzkg9f.jpg'
  },
  {
    id: 4,
    title: 'Reconnect. Rediscover. Rise Together',
    description: 'Revisit your journey with EZYGRO reconnect with former colleagues, rediscover new opportunities, and inspire the next wave of growth. Join the EZYGRO Alumni Network to stay updated through newsletters, share your story, and explore pathways to return or collaborate.There are countless reasons to be part of EZYConnect – the EZYGRO Alumni Portal. What’s yours?',
    alt: 'An engineer working on complex robotics in a high-tech laboratory.',
    imageUrl: 'https://res.cloudinary.com/daoju0r3c/image/upload/v1754235999/resetc_u7smca_ldersg.jpg'
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

const ContactForm = () => {
    const form = useRef<HTMLFormElement>(null);
    const [submissionStatus, setSubmissionStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
    const [statusMessage, setStatusMessage] = useState('');

    const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!form.current) return;

        setSubmissionStatus('sending');
        setStatusMessage('Sending...');

        const serviceID = 'service_63kr4cq';
        const templateID = 'template_1t4hvqp';
        const userID = '6dmBla4MNyWT-Y8gA';

        emailjs.sendForm(serviceID, templateID, form.current, userID)
            
            .then((result: EmailJSResponseStatus) => {
                console.log(result.text);
                setSubmissionStatus('success');
                setStatusMessage('Your message has been sent successfully!');
                form.current?.reset();
                setTimeout(() => setSubmissionStatus('idle'), 5000); 
            }, (error: EmailJSResponseStatus) => {
                console.log(error.text);
                setSubmissionStatus('error');
                setStatusMessage('Failed to send the message. Please try again.');
                setTimeout(() => setSubmissionStatus('idle'), 5000); 
            });
    };
    
    const FormInput = ({ id, label, type = "text", required = false, children, className, name }: { id: string, label: string, type?: string, required?: boolean, children?: React.ReactNode, className?: string, name: string }) => (
        <div className={`${type === 'textarea' ? 'md:col-span-2' : ''} ${className || ''}`}>
            <label htmlFor={id} className="block text-sm font-medium text-gray-400">
                {required && <span className="text-red-500 mr-1">*</span>}{label}
            </label>
            <div className="mt-1">
                {children ? (
                    children
                ) : (
                    <input
                        type={type}
                        name={name}
                        id={id}
                        required={required}
                        className="block w-full bg-transparent border-0 border-b border-gray-600 focus:ring-0 focus:border-white py-2 text-white"
                    />
                )}
            </div>
        </div>
    );

    return (
        <section className="bg-gray-900 text-white py-12 sm:py-16 md:py-20 lg:py-24 w-full">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 sm:gap-14 md:gap-16">
                    <div className="lg:col-span-1 text-left">
                        <h2 className="text-3xl sm:text-4xl md:text-4xl font-bold tracking-tight">Get In Touch</h2>
                        <p className="mt-3 sm:mt-4 text-base sm:text-lg text-gray-400">
                            Need more information? <br />
                            We will respond to your enquiry.
                        </p>
                    </div>
                    <div className="lg:col-span-2">
                        <form ref={form} onSubmit={sendEmail} className="grid grid-cols-1 md:grid-cols-2 gap-x-6 sm:gap-x-8 gap-y-4 sm:gap-y-6 text-left">
                            <FormInput id="enquiryType" name="enquiry_type" label="Type of Job" required>
                                <select id="enquiryType" name="enquiry_type" className="block w-full bg-transparent border-0 border-b border-gray-600 focus:ring-0 focus:border-white py-2 text-white">
                                    <option className="bg-gray-800">Select an enquiry type</option>
                                    <option className="bg-gray-800">Financial & Accounting</option>
                                    <option className="bg-gray-800">Income Tax</option>
                                    <option className="bg-gray-800">Virtual CFO</option>
                                    <option className="bg-gray-800">Innovative Dashboards</option>
                                    <option className="bg-gray-800">Loans & Insurance</option>
                                    <option className="bg-gray-800">Secretarial Compliances</option>
                                    <option className="bg-gray-800">Others</option>
                                </select>
                            </FormInput>
                            <div></div>
                            <FormInput id="firstName" name="first_name" label="First Name" required />
                            <FormInput id="lastName" name="last_name" label="Last Name" required />
                            <FormInput id="email" name="email" label="Email Address" type="email" required />
                            <FormInput id="phoneNumber" name="phone_number" label="Phone Number" required />
                            
                            <FormInput id="resume" name="resume" label="Upload Resume" required className="md:col-span-2">
                                <input
                                    id="resume"
                                    name="resume"
                                    type="file"
                                    required
                                    className="block w-full text-sm text-gray-400 cursor-pointer file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-white file:text-purple-900 hover:file:bg-gray-200 transition-colors"
                                />
                            </FormInput>

                            <FormInput id="message" name="message" label="Message" type="textarea" required>
                                <textarea id="message" name="message" rows={4} required className="block w-full bg-transparent border border-gray-600 focus:ring-0 focus:border-white p-2 text-white rounded-md"></textarea>
                            </FormInput>
                            <div className="md:col-span-2 space-y-5">
                                <div className="relative flex items-start">
                                    <div className="flex h-6 items-center">
                                        <input id="privacy" name="privacy" type="checkbox" required className="h-4 w-4 rounded border-gray-500 bg-gray-800 text-indigo-600 focus:ring-indigo-600" />
                                    </div>
                                    <div className="ml-3 text-sm leading-6">
                                        <p className="text-gray-400">By clicking on the submit button, you agree with the <a href="#" className="font-medium text-white hover:underline">Privacy Policy</a>.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="md:col-span-2 flex items-center gap-4">
                                <button type="submit" disabled={submissionStatus === 'sending'} className="inline-block rounded-md border border-white px-8 py-3 text-center font-medium text-white hover:bg-white hover:text-gray-900 transition-colors disabled:opacity-50 disabled:cursor-not-allowed">
                                    {submissionStatus === 'sending' ? 'Sending...' : 'Submit'}
                                </button>
                                {submissionStatus !== 'idle' && (
                                    <p className={`text-sm ${submissionStatus === 'success' ? 'text-green-400' : 'text-red-400'}`}>
                                        {statusMessage}
                                    </p>
                                )}
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
      <section ref={sectionRef} className="relative min-h-screen bg-white overflow-hidden -mt-16">
        <div className="absolute inset-0">
          <div className="absolute right-0 top-0 w-full h-full">
            <div
              className="w-full h-full bg-transparent"
              style={{
                clipPath: windowWidth < 640
                ? 'polygon(-375% 75%, 100% 20%, 100% 100%, 0% 100%)'
                : windowWidth < 1024
                ? 'polygon(-75% 85%, 110% 15%, 100% 100%, 0% 100%)'
                : 'polygon(-25% 90%, 130% 0%, 100% 100%, 0% 100%)'
              }}
            >
              <div className="absolute inset-0 overflow-hidden">
                <img
                  src="https://res.cloudinary.com/daoju0r3c/image/upload/v1753712261/carrer_dtd9ts_iq1nyx.jpg"
                  alt="Careers Background"
                  className="w-full h-full object-cover"
                  style={{ opacity: 1 }}
                />
              </div>
            </div>
          </div>
        </div>
        {/* Content */}
        <div className="relative z-10 min-h-screen max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-16 pt-16 sm:pt-20 md:pt-24 lg:pt-28 pb-8 sm:pb-12 md:pb-16">
          {/* MODIFIED: Added tablet-specific responsive classes */}
          <div className="absolute top-15 left-2 sm:top-16 sm:left-8 md:top-18 md:left-12 lg:top-20 lg:left-20 w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-2xl lg:w-3/5 pr-4 sm:pr-6 md:pr-8 lg:pr-6">
            <div className="overflow-hidden pb-2">
              <h1
                className={`text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold text-gray-900 transition-all duration-1000 ease-out ${
                  titleVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                }`}
                style={{
                  fontSize: windowWidth < 640 ? '26px' : windowWidth < 768 ? '32px' : windowWidth < 1024 ? '42px' : '54px',
                  lineHeight: windowWidth < 640 ? '32px' : windowWidth < 768 ? '38px' : windowWidth < 1024 ? '48px' : '52px',
                  transform: titleVisible ? 'translateY(0px)' : 'translateY(32px)'
                }}
              >
                Careers at <span style={{ color: '#4B1D92' }}>EZYGRO</span>
              </h1>
            </div>
            <div
              className={`mt-1 sm:mt-2 md:mt-3 lg:mt-3 transition-all duration-1200 ease-out delay-300 ${
                textVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
              }`}
              style={{
                transform: textVisible ? 'translateY(0px)' : 'translateY(24px)'
              }}
            >
              <p className="text-xs sm:text-sm md:text-base lg:text-base text-gray-800 leading-relaxed font-400"
                style={{
                  fontSize: windowWidth < 640 ? '14px' : windowWidth < 768 ? '15px' : windowWidth < 1024 ? '17px' : '18px',
                  lineHeight: windowWidth < 640 ? '16px' : windowWidth < 768 ? '18px' : windowWidth < 1024 ? '22px' : '24px'
                }}
              >
                Join a dynamic and growth-driven environment where your ideas matter. At EZYGRO, we nurture talent, encourage innovation, and offer opportunities to build a meaningful, future-ready career.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="bg-white py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8 lg:px-8">
          <div className="mx-auto flex flex-col gap-12 sm:gap-16 md:gap-20 lg:gap-24">
            {sectionsData.map((section, index) => {
              const isTextOnLeft = index % 2 === 0;
              const [ref, isInView] = useInView({ threshold: 0.1 });

              return (
                <div
                  ref={ref}
                  key={section.id}
                  className={`flex flex-col lg:flex-row items-center gap-6 sm:gap-8 md:gap-12 lg:gap-16 transition-opacity duration-500 ${
                    isInView ? 'opacity-100' : 'opacity-50'
                  }`}
                >
                  <div className={`lg:w-3/5 lg:py-6 sm:lg:py-8 ${isTextOnLeft ? 'lg:order-1' : 'lg:order-2'}`}>
                    <div
                      className={`transition-all duration-1000 ease-out ${
                        isInView
                          ? 'translate-x-0 opacity-100'
                          : isTextOnLeft
                          ? '-translate-x-10 opacity-0'
                          : 'translate-x-10 opacity-0'
                      }`}
                    >
                      <h2 className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl font-bold tracking-tight text-gray-900">
                        {section.title}
                      </h2>
                      <p className="mt-4 sm:mt-5 md:mt-6 text-base sm:text-lg md:text-lg leading-6 sm:leading-7 md:leading-8 text-gray-600">
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
