import VideoCarousel from "@/components/common/VideoCarousel";
import CapabilitiesSection from "@/components/home/CapabilitiesSection";
import Industries from "@/components/home/Industries";
import RiseSection from "@/components/home/RiseSection";
import TechMahindraSection from "@/components/home/TechMahindraSection";
import TestimonialSection, {
  Testimonial,
} from "@/components/home/TestimonialSection";
import { sanityClient, urlFor } from "@/lib/sanity";
import { GetStaticProps } from "next";

export const getStaticProps = (async () => {
  const SANITY_TESTIMONIAL_QUERY = `*[_type=="testimonial"] | order(_createdAt desc)`;

  try {
    const response = await sanityClient.fetch<Testimonial[]>(
      SANITY_TESTIMONIAL_QUERY
    );

    return {
      props: {
        testimonials: response.map((testimonial) => ({
          ...testimonial,
          image: urlFor(testimonial.image).url(),
        })),
      },
      revalidate: 10,
    };
  } catch (error) {
    console.log(error);
  }

  return {
    props: {
      testimonials: [] as Testimonial[],
    },
    revalidate: 10,
  };
}) satisfies GetStaticProps<{ testimonials: Testimonial[] }>;

export default function Home({
  testimonials,
}: {
  testimonials: Testimonial[];
}) {
  return (
    <>
      <VideoCarousel />
      <CapabilitiesSection />
      <Industries />
      <TechMahindraSection />
      <RiseSection />
      {testimonials.length > 0 && (
        <TestimonialSection testimonials={testimonials} />
      )}
    </>
  );
}
