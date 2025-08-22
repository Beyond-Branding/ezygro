import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export interface Testimonial {
  _createdAt: string;
  _id: string;
  _rev: string;
  _type: string;
  _updatedAt: string;
  designation: string;
  image: string;
  name: string;
  testimonial: string;
}

export default function TestimonialSection({
  testimonials = [],
}: {
  testimonials: Testimonial[];
}) {
  const [initialRender, setInitialRender] = useState(false);

  /* Button Refs */
  const prevButtonRef = useRef(null);
  const nextButtonRef = useRef(null);

  useEffect(() => {
    setInitialRender(true);
  }, []);

  if (!initialRender) return null;

  return (
    <section
      id="testimonial-section"
      className="bg-black text-white py-12 sm:py-16 lg:py-20 xl:py-28 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 sm:mb-10 lg:mb-12 gap-4 sm:gap-0">
          <h2
            className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold transition-all duration-1000 ease-out transform`}
          >
            What Our Clients Say
          </h2>
          {testimonials.length > 3 && (
            <div className="flex items-center gap-3 sm:gap-4">
              <button
                ref={prevButtonRef}
                // onClick={prev}
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-gray-600 flex items-center justify-center hover:border-white transition-colors"
              >
                <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>
              <button
                ref={nextButtonRef}
                // onClick={next}
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-gray-600 flex items-center justify-center hover:border-white transition-colors"
              >
                <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>
            </div>
          )}
        </div>

        <Swiper
          onInit={(swiper) => {
            if (
              swiper.params.navigation &&
              typeof swiper.params.navigation !== "boolean"
            ) {
              swiper.params.navigation.prevEl = prevButtonRef.current;
              swiper.params.navigation.nextEl = nextButtonRef.current;
              swiper.navigation.update();
              swiper.navigation.init();
            }
          }}
          modules={[Navigation, Autoplay]}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          loop
          spaceBetween={30}
          breakpoints={{
            0: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          watchOverflow
          className="h-[22rem] sm:h-80 lg:h-96"
        >
          {testimonials.map((item) => {
            return (
              <SwiperSlide key={item._id}>
                <div className="group h-full transition-all duration-500 ease-in-out p-6 sm:p-8 lg:p-10 bg-white text-black flex flex-col rounded-md">
                  <div className="flex-1">
                    <p className="relative text-lg sm:text-xl lg:text-2xl font-semibold italic ">
                      <Quote className="text-[#4b1f92]" />
                      {item.testimonial}
                    </p>
                  </div>
                  <div className="flex gap-3 justify-start items-center">
                    <div className="size-12 rounded-full overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="size-full object-cover"
                      />
                    </div>
                    <div>
                      <p className="text-md sm:text-lg font-bold ">
                        {item.name}
                      </p>
                      <p className="text-sm text-gray-600">
                        {item.designation}
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
}
