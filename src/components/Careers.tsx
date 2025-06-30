// src/components/Careers.tsx

import React, { useState, useEffect, useRef } from 'react';

// --- Data for the alternating sections ---
const sectionsData = [
  {
    id: 1,
    title: 'Why EZYGRO',
    description: 'Looking to elevate your career with purpose-driven work? At EZYGRO, we believe in transforming businesses through smart finance, compliance, and strategy. Join a team of passionate professionals, innovators, and problem-solvers shaping the future of financial growth. Let your journey grow with ours.',
    alt: 'A diverse team collaborating in a modern office meeting room.'
  },
  {
    id: 2,
    title: 'Empowering Through Finance',
    description: 'We are a purpose-led firm committed to creating meaningful growth journeys for our clients and team. At EZYGRO, we don’t just deliver financial solutions we empower businesses and people to thrive with clarity, confidence, and compliance. Let’s grow together the EZYGRO way.',
    alt: 'A creative team celebrating success with high-fives in a sunlit office.'
  },
  {
    id: 3,
    title: 'Diversity & Inclusion at EZYGRO',
    description: 'We value what makes each of us unique because it’s the differences that drive innovation. At EZYGRO, we’re proudly diverse and consciously inclusive, creating a workplace where every voice matters and every perspective adds value.',
    alt: 'A mentor guiding a colleague on a laptop in a bright, collaborative space.'
  },
  {
    id: 4,
    title: 'Reconnect. Rediscover. Rise Together',
    description: 'Revisit your journey with EZYGRO reconnect with former colleagues, rediscover new opportunities, and inspire the next wave of growth. Join the EZYGRO Alumni Network to stay updated through newsletters, share your story, and explore pathways to return or collaborate.There are countless reasons to be part of EZYConnect – the EZYGRO Alumni Portal. What’s yours?',
    alt: 'An engineer working on complex robotics in a high-tech laboratory.'
  },
];

// --- The two images to be alternated ---
const imageOneUrl = 'https://insights.techmahindra.com/styles/text_and_image_desktop/s3/images/intheoffice.jpg.webp';
const imageTwoUrl = 'https://insights.techmahindra.com/styles/text_and_image_desktop/s3/images/techmway.jpg.webp';


// --- Custom Hook for Intersection Observer ---
const useInView = (options: IntersectionObserverInit) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsInView(entry.isIntersecting);
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
  }, [ref, options]);

  return [ref, isInView] as const;
};

// --- Form Component ---
const ContactForm = () => {
    // A reusable input component for the form for cleaner code
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
                                <div className="relative flex items-start">
                                    <div className="flex h-6 items-center">
                                        <input id="subscribe" name="subscribe" type="checkbox" className="h-4 w-4 rounded border-gray-500 bg-gray-800 text-indigo-600 focus:ring-indigo-600" />
                                    </div>
                                    <div className="ml-3 text-sm leading-6">
                                        <p className="text-gray-400">Subscribe me to the latest updates on events, news and thought leadership from Tech Mahindra.</p>
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


// --- The Main Page Component ---
const Careers = () => {
  // State for the hero section
  const [titleVisible, setTitleVisible] = useState(false);
  const [textVisible, setTextVisible] = useState(false);
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1024);

  // Background video for the hero section
  const backgroundVideo = "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4";

  // Effect for handling window resize (for hero section)
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Effect for hero section animations
  useEffect(() => {
    const titleTimer = setTimeout(() => {
      setTitleVisible(true);
    }, 200);

    const textTimer = setTimeout(() => {
      setTextVisible(true);
    }, 400);

    return () => {
      clearTimeout(titleTimer);
      clearTimeout(textTimer);
    };
  }, []);

  return (
    <>
      {/* HERO SECTION */}
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
                <video
                  className="w-full h-full object-cover opacity-70"
                  autoPlay
                  muted
                  loop
                  playsInline
                >
                  <source src={backgroundVideo} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </div>
        </div>
        <div className="relative z-10 min-h-screen max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-16">
          <div className="absolute top-2 sm:top-4 lg:top-8 left-4 sm:left-6 lg:left-0 w-full max-w-xs sm:max-w-lg lg:max-w-2xl lg:w-3/5 pr-4 sm:pr-6 lg:pr-6">
            <h1
              className={`text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold text-gray-900 transition-all duration-700 ease-out ${
                titleVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
              }`}
              style={{ 
                fontSize: windowWidth < 640 ? '28px' : windowWidth < 1024 ? '48px' : '66px', 
                lineHeight: windowWidth < 640 ? '36px' : windowWidth < 1024 ? '56px' : '90px' 
              }}
            >
              Careers at EZYGRO
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

      {/* ALTERNATING ANIMATED SECTIONS */}
      <div className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto flex flex-col gap-16 sm:gap-24">
            {sectionsData.map((section, index) => {
              const isTextOnLeft = index % 2 === 0;
              const [ref, isInView] = useInView({ threshold: 0.1 });
              const imageUrl = index % 2 === 0 ? imageOneUrl : imageTwoUrl;

              return (
                <div
                  ref={ref}
                  key={section.id}
                  className={`flex flex-col lg:flex-row items-center gap-8 lg:gap-16 transition-opacity duration-500 ${
                    isInView ? 'opacity-100' : 'opacity-50'
                  }`}
                >
                  {/* Text Container */}
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
                      <div className="mt-8">
                        <a
                          href="#"
                          className="inline-block rounded-md border border-gray-900 px-6 py-3 text-center font-medium text-gray-900 hover:bg-gray-900 hover:text-white transition-colors"
                        >
                          Learn more
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Image Container */}
                  <div className={`lg:w-2/5 ${isTextOnLeft ? 'lg:order-2' : 'lg:order-1'}`}>
                    <div
                      className={`overflow-hidden transition-all duration-1000 ease-out ${
                        isInView ? 'scale-100 opacity-100' : 'scale-90 opacity-0'
                      }`}
                    >
                      <img
                        src={imageUrl}
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
      
      {/* NEWLY ADDED CONTACT FORM */}
      <ContactForm />
    </>
  );
};

export default Careers;