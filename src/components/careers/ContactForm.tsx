import { useRef, useState } from "react";
import emailjs, { EmailJSResponseStatus } from "@emailjs/browser";

export default function ContactForm() {
  const form = useRef<HTMLFormElement>(null);
  const [submissionStatus, setSubmissionStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");
  const [statusMessage, setStatusMessage] = useState("");

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.current) return;

    setSubmissionStatus("sending");
    setStatusMessage("Sending...");

    const serviceID = "service_63kr4cq";
    const templateID = "template_1t4hvqp";
    const userID = "6dmBla4MNyWT-Y8gA";

    emailjs
      .sendForm(serviceID, templateID, form.current, userID)

      .then(
        (result: EmailJSResponseStatus) => {
          console.log(result.text);
          setSubmissionStatus("success");
          setStatusMessage("Your message has been sent successfully!");
          form.current?.reset();
          setTimeout(() => setSubmissionStatus("idle"), 5000);
        },
        (error: EmailJSResponseStatus) => {
          console.log(error.text);
          setSubmissionStatus("error");
          setStatusMessage("Failed to send the message. Please try again.");
          setTimeout(() => setSubmissionStatus("idle"), 5000);
        }
      );
  };

  const FormInput = ({
    id,
    label,
    type = "text",
    required = false,
    children,
    className,
    name,
  }: {
    id: string;
    label: string;
    type?: string;
    required?: boolean;
    children?: React.ReactNode;
    className?: string;
    name: string;
  }) => (
    <div
      className={`${type === "textarea" ? "md:col-span-2" : ""} ${
        className || ""
      }`}
    >
      <label htmlFor={id} className="block text-sm font-medium text-gray-400">
        {required && <span className="text-red-500 mr-1">*</span>}
        {label}
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
            <h2 className="text-3xl sm:text-4xl md:text-4xl font-bold tracking-tight">
              Get In Touch
            </h2>
            <p className="mt-3 sm:mt-4 text-base sm:text-lg text-gray-400">
              Need more information? <br />
              We will respond to your enquiry.
            </p>
          </div>
          <div className="lg:col-span-2">
            <form
              ref={form}
              onSubmit={sendEmail}
              className="grid grid-cols-1 md:grid-cols-2 gap-x-6 sm:gap-x-8 gap-y-4 sm:gap-y-6 text-left"
            >
              <FormInput
                id="enquiryType"
                name="enquiry_type"
                label="Type of Job"
                required
              >
                <select
                  id="enquiryType"
                  name="enquiry_type"
                  className="block w-full bg-transparent border-0 border-b border-gray-600 focus:ring-0 focus:border-white py-2 text-white"
                >
                  <option className="bg-gray-800">
                    Select an enquiry type
                  </option>
                  <option className="bg-gray-800">
                    Financial & Accounting
                  </option>
                  <option className="bg-gray-800">Income Tax</option>
                  <option className="bg-gray-800">Virtual CFO</option>
                  <option className="bg-gray-800">Innovative Dashboards</option>
                  <option className="bg-gray-800">Loans & Insurance</option>
                  <option className="bg-gray-800">
                    Secretarial Compliances
                  </option>
                  <option className="bg-gray-800">Others</option>
                </select>
              </FormInput>
              <div></div>
              <FormInput
                id="firstName"
                name="first_name"
                label="First Name"
                required
              />
              <FormInput
                id="lastName"
                name="last_name"
                label="Last Name"
                required
              />
              <FormInput
                id="email"
                name="email"
                label="Email Address"
                type="email"
                required
              />
              <FormInput
                id="phoneNumber"
                name="phone_number"
                label="Phone Number"
                required
              />

              <FormInput
                id="resume"
                name="resume"
                label="Upload Resume"
                required
                className="md:col-span-2"
              >
                <input
                  id="resume"
                  name="resume"
                  type="file"
                  required
                  className="block w-full text-sm text-gray-400 cursor-pointer file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-white file:text-purple-900 hover:file:bg-gray-200 transition-colors"
                />
              </FormInput>

              <FormInput
                id="message"
                name="message"
                label="Message"
                type="textarea"
                required
              >
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  className="block w-full bg-transparent border border-gray-600 focus:ring-0 focus:border-white p-2 text-white rounded-md"
                ></textarea>
              </FormInput>
              <div className="md:col-span-2 space-y-5">
                <div className="relative flex items-start">
                  <div className="flex h-6 items-center">
                    <input
                      id="privacy"
                      name="privacy"
                      type="checkbox"
                      required
                      className="h-4 w-4 rounded border-gray-500 bg-gray-800 text-indigo-600 focus:ring-indigo-600"
                    />
                  </div>
                  <div className="ml-3 text-sm leading-6">
                    <p className="text-gray-400">
                      By clicking on the submit button, you agree with the{" "}
                      <a
                        href="#"
                        className="font-medium text-white hover:underline"
                      >
                        Privacy Policy
                      </a>
                      .
                    </p>
                  </div>
                </div>
              </div>
              <div className="md:col-span-2 flex items-center gap-4">
                <button
                  type="submit"
                  disabled={submissionStatus === "sending"}
                  className="inline-block rounded-md border border-white px-8 py-3 text-center font-medium text-white hover:bg-white hover:text-gray-900 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {submissionStatus === "sending" ? "Sending..." : "Submit"}
                </button>
                {submissionStatus !== "idle" && (
                  <p
                    className={`text-sm ${
                      submissionStatus === "success"
                        ? "text-green-400"
                        : "text-red-400"
                    }`}
                  >
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
}
