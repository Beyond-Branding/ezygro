import VideoCarousel from "@/components/common/VideoCarousel";
import CapabilitiesSection from "@/components/home/CapabilitiesSection";
import Industries from "@/components/home/Industries";
import RiseSection from "@/components/home/RiseSection";
import TechMahindraSection from "@/components/home/TechMahindraSection";
import TestimonialSection from "@/components/home/TestimonialSection";


export default function Home() {
  return (
    <>
      <VideoCarousel />
      <CapabilitiesSection />
      <Industries />
      <TechMahindraSection />
      <RiseSection />
      <TestimonialSection />

    </>
  );
}
