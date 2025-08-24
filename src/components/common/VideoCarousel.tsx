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

export default function VideCarousel() {
  const swiperRef = useRef<SwiperClass | null>(null);

  return (
    <section className="relative w-full h-screen max-h-[960px] overflow-y-hidden">
      {/* Content */}
      <div className="z-10 relative h-full">
        {/* Stripe */}
        <div className="top-0 left-0 absolute flex bg-white w-full h-full lg:h-[80%] skew-y-[-16deg] origin-center -translate-y-1/2"></div>

        <div className="z-20 relative mx-auto mt-4 lg:mt-8 px-6 md:px-12 container">
          <h2 className="mb-6 font-semibold text-4xl lg:text-6xl leading-[1] tracking-tight">
            Where Expertise
            <br />
            <span className="text-[#4b1d92]">Meets Integrity</span>
          </h2>
          <p className="lg:max-w-1/2 text-lg">
            Our promise to help enterprises across industries transform at
            speed, agility, resilience, and efficiency to their businesses.
          </p>
        </div>
      </div>

      {/* Slider */}
      <div className="absolute inset-0">
        <NavigationBars swiper={swiperRef} />

        <Swiper
          className="relative size-full"
          modules={[Autoplay]} // ✅ enable autoplay module
          autoplay={{ delay: 4000 }}
          loop
          speed={1000}
          slidesPerView={1}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
        >
          {videos.map((videos, index) => (
            <SwiperSlide key={index}>
              <div className="relative size-full">
                <div className="absolute inset-0">
                  <video
                    className="w-full h-full object-cover"
                    src={videos.videoUrl}
                    autoPlay
                    loop
                    muted
                  />
                </div>

                {/* Contents and Slider */}
                <div className="right-0 bottom-18 lg:bottom-24 left-0 absolute mx-auto text-white">
                  <div className="flex justify-between gap-6 mx-auto px-6 md:px-12 text-xl lg:text-4xl text-right container">
                    <div className="ml-auto lg:max-w-1/2">
                      <h3>{videos.title}</h3>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
