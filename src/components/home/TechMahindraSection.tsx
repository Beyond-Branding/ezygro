import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { RefObject, useEffect, useRef, useState } from "react";

const videos = [
  {
    id: 1,
    title:
      "Empowering Growth with Every Number We don’t just file and finish we plan, guide, and grow with you. EZYGRO turns boring numbers into bold moves.",
    videoUrl:
      "https://res.cloudinary.com/daoju0r3c/video/upload/v1753712267/1_bhjviq_jwrrjy.mp4",
  },
  {
    id: 2,
    title:
      "Driven by Precision. Backed by Ethics. Sharp minds, honest hands. With EZYGRO, you get advice that’s smart, clear, and always has your back.",
    videoUrl:
      "https://res.cloudinary.com/daoju0r3c/video/upload/v1753712267/2_sv5b42_ht3gsl.mp4",
  },
  {
    id: 3,
    title:
      "Simplifying Compliance, Amplifying Success Legal forms? Tax chaos? Leave that to us. EZYGRO makes the tough stuff simple, so you can focus on winning.",
    videoUrl:
      "https://res.cloudinary.com/daoju0r3c/video/upload/v1753712266/3_zlm6td_edeloy.mp4",
  },
  {
    id: 4,
    title:
      "Your Partner in Professional Progress Every business needs a solid support system. EZYGRO walks with you through paperwork, plans, and big dreams.",
    videoUrl:
      "https://res.cloudinary.com/daoju0r3c/video/upload/v1753712259/4_xdzdvi_s9wvb0.mp4",
  },
  {
    id: 5,
    title:
      "Where Strategy Meets Service Smart ideas are nothing without action. At EZYGRO, we turn smart plans into smoother journeys no stress, just results.",
    videoUrl:
      "https://res.cloudinary.com/daoju0r3c/video/upload/v1753712257/6_ycd4gn_sjsntq.mp4",
  },
];

function NavigationBars({ swiper }: { swiper: RefObject<SwiperClass | null> }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (swiper.current) {
      swiper.current.on("slideChange", (swiper) => {
        setCurrentIndex(swiper.activeIndex);
      });
    }
  }, []);

  return (
    <div className="right-0 bottom-20 left-0 z-[1000] absolute mx-auto pl-12 container">
      {/* Slider Navigation */}
      <div className="hidden gap-4 md:grid grid-flow-col w-1/3">
        {Array.from({ length: videos.length }).map((_, index) => (
          <div
            key={index}
            onClick={() => {
              if (swiper.current) {
                swiper.current.slideTo(index);
              }
            }}
            className={`bg-white/30 hover:bg-white/50 w-auto h-1 transition-colors duration-200 ease-in-out cursor-pointer ${
              currentIndex === index ? "bg-white/60" : ""
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
}

export default function TechMahindraSection() {
  return (
    <section className="relative w-full h-screen max-h-[960px] overflow-y-hidden">
      {/* Content */}
      <div className="z-10 relative h-full">
        {/* Stripe */}
        <div className="top-0 left-0 absolute flex bg-white w-full h-full skew-y-[-16deg] origin-center -translate-y-[25%] md:-translate-y-1/2"></div>

        <div className="z-20 relative mx-auto mt-4 lg:mt-8 px-6 md:px-12 container">
          <h2 className="mb-6 font-semibold text-4xl lg:text-6xl leading-[1] tracking-tight">
            Grow Easily
            <br />
            <span className="text-[#4b1d92]">with EZYGRO</span>
          </h2>
          <p className="lg:max-w-1/2 text-lg">
            In today&apos;s fast paced business environment, success requires
            financial clarity and compliance you can rely on. EZYGRO empowers
            you with smart solutions that drive sustainable growth, strategic
            decision making, and operational excellence all at the speed your
            business demands.
          </p>
        </div>
      </div>

      {/* Slider */}
      <div className="absolute inset-0">
        <div className="relative size-full">
          <div className="absolute inset-0">
            <video
              className="w-full h-full object-cover"
              src="https://res.cloudinary.com/dt6hlbtfo/video/upload/v1781603527/wsymodr2ufhxhjojuf8s.mp4"
              autoPlay
              loop
              muted
            />
          </div>
        </div>
      </div>
    </section>
  );
}
