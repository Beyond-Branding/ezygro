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
  geoPoint: {
    _type: "geopoint";
    lat: 19.184862538093636;
    lng: 72.85655142425968;
  };
}

export const getStaticProps = (async () => {
  const SANITY_CONTACT_DETAILS_QUERY = `*[_type=="contactDetails"][0]`;

  try {
    const response = await sanityClient.fetch<ContactDetails>(
      SANITY_CONTACT_DETAILS_QUERY
    );

    console.log(response);

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
    <div className="flex flex-col items-center bg-white min-h-screen font-sans text-gray-800">
      <div className="flex flex-col mx-auto p-6 lg:p-12 container">
        <div className="mb-12 w-full text-left">
          <h1 className="mb-4 font-bold text-gray-900 text-5xl md:text-7xl tracking-tight">
            Let&apos;s <span style={{ color: "#4B1D92" }}>Connect</span>
          </h1>
          <p className="text-gray-600 text-lg md:text-xl">
            We would love to hear from you!
          </p>
        </div>

        <div className="items-center gap-16 grid grid-cols-1 md:grid-cols-2 mb-16 w-full">
          <div className="bg-gray-200 shadow-lg rounded-lg w-full h-[50vh] md:h-full min-h-[500px] overflow-hidden">
            <Map
              position={[
                contactDetails.geoPoint.lat,
                contactDetails.geoPoint.lng,
              ]}
            />
          </div>

          <div className="flex flex-col space-y-8 text-left">
            <div className="flex items-start space-x-4">
              <div className="pt-1 shrink-0">
                <MapPin />
              </div>
              <div>
                <p className="font-semibold text-gray-800 text-lg">Address:</p>
                <p className="text-gray-600 text-base break-words">
                  {contactDetails.address}
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="shrink-0">
                <PhoneIcon />
              </div>
              <div>
                <p className="font-semibold text-gray-800 text-lg">Phone:</p>
                <a
                  href={`tel:${contactDetails.phone}`}
                  className="text-gray-600 hover:text-indigo-600 text-base break-all"
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
                <p className="font-semibold text-gray-800 text-lg">Email:</p>
                <a
                  href={`mailto:${contactDetails.email}`}
                  className="text-gray-600 hover:text-indigo-600 text-base break-all"
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
