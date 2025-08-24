import ContactForm from "@/components/careers/ContactForm";
import SectionCard from "@/components/careers/SectionCard";
import LandingSection from "@/components/common/LandingSection";
import { useState, useEffect, useRef } from "react";

const sectionsData = [
  {
    id: 1,
    title: "Why EZYGRO",
    description:
      "Looking to elevate your career with purpose-driven work? At EZYGRO, we believe in transforming businesses through smart finance, compliance, and strategy. Join a team of passionate professionals, innovators, and problem-solvers shaping the future of financial growth. Let your journey grow with ours.",
    alt: "A diverse team collaborating in a modern office meeting room.",
    imageUrl:
      "https://res.cloudinary.com/daoju0r3c/image/upload/v1753712267/whyeszroc_ghbpij_ejujbc.jpg",
  },
  {
    id: 2,
    title: "Empowering Through Finance",
    description:
      "We are a purpose-led firm committed to creating meaningful growth journeys for our clients and team. At EZYGRO, we don’t just deliver financial solutions we empower businesses and people to thrive with clarity, confidence, and compliance. Let’s grow together the EZYGRO way.",
    alt: "A creative team celebrating success with high-fives in a sunlit office.",
    imageUrl:
      "https://res.cloudinary.com/daoju0r3c/image/upload/v1753712265/empoweringc_eazapv_tr8efr.jpg",
  },
  {
    id: 3,
    title: "Diversity & Inclusion at EZYGRO",
    description:
      "We value what makes each of us unique because it’s the differences that drive innovation. At EZYGRO, we’re proudly diverse and consciously inclusive, creating a workplace where every voice matters and every perspective adds value.",
    alt: "A mentor guiding a colleague on a laptop in a bright, collaborative space.",
    imageUrl:
      "https://res.cloudinary.com/daoju0r3c/image/upload/v1754236055/inclsuionc_aczfux_kzkg9f.jpg",
  },
  {
    id: 4,
    title: "Reconnect. Rediscover. Rise Together",
    description:
      "Revisit your journey with EZYGRO reconnect with former colleagues, rediscover new opportunities, and inspire the next wave of growth. Join the EZYGRO Alumni Network to stay updated through newsletters, share your story, and explore pathways to return or collaborate.There are countless reasons to be part of EZYConnect – the EZYGRO Alumni Portal. What’s yours?",
    alt: "An engineer working on complex robotics in a high-tech laboratory.",
    imageUrl:
      "https://res.cloudinary.com/daoju0r3c/image/upload/v1754235999/resetc_u7smca_ldersg.jpg",
  },
];

export default function CareersPage() {
  return (
    <>
      <LandingSection
        title={() => (
          <>
            Careers at <span className="text-[#4B1D92]">EZYGRO</span>
          </>
        )}
        subtitle="Join a dynamic and growth-driven environment where your ideas matter. At EZYGRO, we nurture talent, encourage innovation, and offer opportunities to build a meaningful, future-ready career."
        media="https://res.cloudinary.com/daoju0r3c/image/upload/v1753712261/carrer_dtd9ts_iq1nyx.jpg"
      />

      <div className="bg-white py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="mx-auto px-6 lg:px-12 container">
          <div className="flex flex-col gap-12 sm:gap-16 md:gap-20 lg:gap-24 mx-auto">
            {sectionsData.map((section, index) => (
              <SectionCard key={index} section={section} index={index} />
            ))}
          </div>
        </div>
      </div>

      <ContactForm />
    </>
  );
}
