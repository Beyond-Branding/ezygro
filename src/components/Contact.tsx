function EmailIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-5 w-5 mr-2"
    >
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <polyline points="3 7 12 13 21 7" />
    </svg>
  );
}
import React from 'react';

function MapPin() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-5 w-5 mr-2"
    >
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-5 w-5 mr-2"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.86 19.86 0 0 1-8.63-3.07A19.5 19.5 0 0 1 3.16 9.81 19.86 19.86 0 0 1 .11 1.64 2 2 0 0 1 2.11-.36h3a2 2 0 0 1 2 1.72c.13 1.13.37 2.24.72 3.32a2 2 0 0 1-.45 2.11l-1.27 1.27a16 16 0 0 0 6.29 6.29l1.27-1.27a2 2 0 0 1 2.11-.45c1.08.35 2.19.59 3.32.72a2 2 0 0 1 1.72 2z" />
    </svg>
  );
}

const ContactForm = () => {
    const FormInput = ({ id, label, type = "text", required = false, children }: { id: string, label: string, type?: string, required?: boolean, children?: React.ReactNode }) => (
        <div className={type === 'textarea' ? 'md:col-span-2' : ''}>
            <label htmlFor={id} className="block text-sm font-medium text-gray-400">
                {required && <span className="text-red-500 mr-1">*</span>}{label}
            </label>
            <div className="mt-1">
                {children ? (
                    children
                ) : (
                    <input
                        type={type}
                        name={id}
                        id={id}
                        className="block w-full bg-transparent border-0 border-b border-gray-600 focus:ring-0 focus:border-white py-2 text-white"
                    />
                )}
            </div>
        </div>
    );

    return (
        <section className="bg-gray-900 text-white py-16 sm:py-24 w-full">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
                    <div className="lg:col-span-1 text-left">
                        <h2 className="text-4xl font-bold tracking-tight">Get In Touch</h2>
                        <p className="mt-4 text-lg text-gray-400">
                            Need more information? <br />
                            We will take approximately 3-5 working days to respond to your enquiry.
                        </p>
                    </div>
                    <div className="lg:col-span-2">
                        <form action="#" method="POST" className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6 text-left">
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
                                <textarea id="message" name="message" rows={4} className="block w-full bg-transparent border border-gray-600 focus:ring-0 focus:border-white p-2 text-white rounded-md"></textarea>
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


export default function App() {
  return (
    <div className="bg-white text-gray-800 min-h-screen flex flex-col items-center font-sans">
      
      <div className="w-full max-w-6xl mx-auto flex flex-col items-center p-4 sm:p-6 md:p-8">

        <div className="mb-8 md:mb-12 w-full text-left">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-gray-900 mb-4">
            Let's Connect
          </h1>
          <p className="text-lg md:text-xl text-gray-600">
            We would love to hear from you!
          </p>
        </div>

        <div className="w-full h-[50vh] md:h-[65vh] bg-gray-200 overflow-hidden">
          <iframe
            src="https://www.google.com/maps?q=19.18614098702759,72.86450207519531&z=17&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Map of Mumbai Office"
          ></iframe>
        </div>
        
        <div className="my-8 md:my-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-gray-500 items-start break-words">
                {/* Left side - Address */}
                <div className="flex flex-col items-center text-center justify-center w-full">
                    <div className="flex flex-col items-start w-full">
                        <div className="flex flex-row items-center w-full">
                            <span className="mt-1 mr-2 shrink-0 flex items-center justify-center"><MapPin /></span>
                            <span className="text-sm md:text-base text-left w-full">12, Ground Floor, Dadi Building,</span>
                        </div>
                        <div className="text-sm md:text-base text-left w-full ml-7">Rani Sati Marg, Kathiyawadi Chowk, near Union Bank, Malad East, Mumbai, Maharashtra 400097</div>
                    </div>
                </div>
                
                {/* Center - Phone */}
                <div className="flex flex-col items-center text-center justify-center">
                    <div className="flex items-center w-full mt-4 ml-8 md:ml-16">
                        <span className="mt-1 mr-2 shrink-0"><PhoneIcon /></span>
                        <span className="font-semibold mr-2">Phone:</span> 
                        <span className="break-words">+91-9372963906</span>
                    </div>
                </div>
                
                {/* Right side - Email */}
                <div className="flex flex-col items-end text-right justify-center">
                    <div className="flex items-center w-full mt-4 ml-8 md:ml-16">
                        <span className="mt-1 mr-2 shrink-0"><EmailIcon /></span>
                        <span className="font-semibold mr-2">Email:</span>
                        <span className="break-words">ezygrofin@gmail.com</span>
                    </div>
                </div>
            </div>
        </div>

      </div>

      {/* --- Black Section for Contact Form --- */}
      <div className="w-full">
        <ContactForm />
      </div>

    </div>
  );
}
