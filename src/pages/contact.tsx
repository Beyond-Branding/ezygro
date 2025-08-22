import dynamic from "next/dynamic";
import { MapPin, PhoneIcon, EmailIcon } from "@/components/common/Icons";
import ContactForm from "@/components/contact/ContactForm";
import { GetStaticProps } from "next";
import { sanityClient } from "@/lib/sanity";

interface ContactDetails {
  _createdAt: string;
  _id: string;
  _rev: string;
  _type: string;
  _updatedAt: string;
  name: string;
  address: string;
  email: string;
  phone: string;
}

export const getStaticProps = (async () => {
  const SANITY_CONTACT_DETAILS_QUERY = `*[_type=="contactDetails"][0]`;

  try {
    const response = await sanityClient.fetch<ContactDetails>(
      SANITY_CONTACT_DETAILS_QUERY
    );

    return {
      props: {
        contactDetails: response,
      },
      revalidate: 10,
    };
  } catch (error) {
    console.log(error);
  }

  return {
    props: {
      contactDetails: {} as ContactDetails,
    },
    revalidate: 10,
  };
}) satisfies GetStaticProps<{ contactDetails: ContactDetails }>;

const Map = dynamic(() => import("@/components/common/Map"), { ssr: false });

export default function ContactUsPage({
  contactDetails,
}: {
  contactDetails: ContactDetails;
}) {
  return (
    <div className="bg-white text-gray-800 min-h-screen flex flex-col items-center font-sans">
      <div className="w-full max-w-6xl mx-auto flex flex-col p-4 sm:p-6 md:p-8">
        <div className="mb-12 w-full text-left">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-gray-900 mb-4">
            Let&apos;s <span style={{ color: "#4B1D92" }}>Connect</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600">
            We would love to hear from you!
          </p>
        </div>

        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-16">
          <div className="w-full h-[50vh] md:h-full min-h-[500px] bg-gray-200 rounded-lg overflow-hidden shadow-lg">
            <Map />
          </div>

          <div className="flex flex-col space-y-8 text-left">
            <div className="flex items-start space-x-4">
              <div className="shrink-0 pt-1">
                <MapPin />
              </div>
              <div>
                <p className="text-lg font-semibold text-gray-800">Address:</p>
                <p className="text-base text-gray-600 break-words">
                  {contactDetails.address}
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="shrink-0">
                <PhoneIcon />
              </div>
              <div>
                <p className="text-lg font-semibold text-gray-800">Phone:</p>
                <a
                  href={`tel:${contactDetails.phone}`}
                  className="text-base text-gray-600 hover:text-indigo-600 break-all"
                >
                  {contactDetails.phone}
                </a>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="shrink-0">
                <EmailIcon />
              </div>
              <div>
                <p className="text-lg font-semibold text-gray-800">Email:</p>
                <a
                  href={`mailto:${contactDetails.email}`}
                  className="text-base text-gray-600 hover:text-indigo-600 break-all"
                >
                  {contactDetails.email}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full">
        <ContactForm />
      </div>
    </div>
  );
}
