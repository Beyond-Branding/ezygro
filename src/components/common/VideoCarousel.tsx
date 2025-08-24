import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

export default function VideCarousel() {
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
        <div className="right-0 bottom-12 left-0 z-[1000] absolute mx-auto pl-8 container">
          {/* Slider Navigation */}
          <div className="hidden gap-4 md:grid grid-flow-col w-1/3">
            {[1, 2, 3, 4].map((index) => (
              <div key={index} className="bg-white/40 w-auto h-1"></div>
            ))}
          </div>
        </div>

        <Swiper
          className="relative size-full"
          modules={[Autoplay]} // ✅ enable autoplay module
          autoplay={{ delay: 4000 }}
          loop
          speed={1000}
          slidesPerView={1}
        >
          <SwiperSlide>
            <div className="relative size-full">
              <div className="absolute inset-0">
                <video
                  className="w-full h-full object-cover"
                  src="https://res.cloudinary.com/daoju0r3c/video/upload/v1753712267/1_bhjviq_jwrrjy.mp4"
                  autoPlay
                  loop
                  muted
                />
              </div>

              {/* Contents and Slider */}
              <div className="right-0 bottom-18 lg:bottom-24 left-0 absolute mx-auto text-white">
                <div className="flex justify-between gap-6 mx-auto px-6 md:px-12 text-xl lg:text-4xl text-right container">
                  <div className="ml-auto lg:max-w-1/2">
                    <h3>
                      Empowering Growth with Every Number We don’t just file and
                      finish we plan, guide, and grow with you. EZYGRO turns
                      boring numbers into bold moves.
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
}
