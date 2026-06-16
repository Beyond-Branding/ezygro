import Marquee from "react-fast-marquee";

const INDUSTRIES_DATA = [
  {
    id: "pharma",
    title: "Pharma",
    link: "#",
    imageUrl:
      "https://res.cloudinary.com/dt6hlbtfo/image/upload/v1781603190/tvgsmclezgwgaxjqiru9.jpg",
  },
  {
    id: "retail",
    title: "Retail",
    link: "#",
    imageUrl:
      "https://res.cloudinary.com/dt6hlbtfo/image/upload/v1781603190/odxgnfdadi8hzuvbrd0r.jpg",
  },
  {
    id: "real-estate",
    title: "Real Estate & Infrastructure",
    link: "#",
    imageUrl:
      "https://res.cloudinary.com/dt6hlbtfo/image/upload/v1781603191/rbgr7iuejfeimcnuilaj.jpg",
  },
  {
    id: "it",
    title: "Information Technology",
    link: "#",
    imageUrl:
      "https://res.cloudinary.com/dt6hlbtfo/image/upload/v1781603191/n7dc6xnb0uirprnvvqjw.jpg",
  },
  {
    id: "banking",
    title: "Banking, Finance & Investment Insurance",
    link: "#",
    imageUrl:
      "https://res.cloudinary.com/dt6hlbtfo/image/upload/v1781603190/a7uyxrlsh7lwa3eystbm.jpg",
  },
  {
    id: "telecom",
    title: "Telecom",
    link: "#",
    imageUrl:
      "https://res.cloudinary.com/dt6hlbtfo/image/upload/v1781603192/wljqzwr3ph6fix4jfpc3.jpg",
  },
  {
    id: "hospitality",
    title: "Hospitality & Leisure",
    link: "#",
    imageUrl:
      "https://res.cloudinary.com/dt6hlbtfo/image/upload/v1781603191/h0lcgyq1psiyeozn3a7a.jpg",
  },
  {
    id: "fmcg",
    title: "FMCG",
    link: "#",
    imageUrl:
      "https://res.cloudinary.com/dt6hlbtfo/image/upload/v1781603191/wpkiq04uysiyow7cefrq.jpg",
  },
  {
    id: "automotive",
    title: "Automotive",
    link: "#",
    imageUrl:
      "https://res.cloudinary.com/dt6hlbtfo/image/upload/v1781603192/xerlnsnmzfkoqywq8gor.jpg",
  },
  {
    id: "food-beverage",
    title: "Food & Beverage",
    link: "#",
    imageUrl:
      "https://res.cloudinary.com/dt6hlbtfo/image/upload/v1781603191/slfl5v7m13vtp94c36oq.jpg",
  },
  {
    id: "advertising",
    title: "Advertising",
    link: "#",
    imageUrl:
      "https://res.cloudinary.com/dt6hlbtfo/image/upload/v1781603191/tjf8jb9nilxylrr6u8ct.jpg",
  },
  {
    id: "healthcare",
    title: "Health Care",
    link: "#",
    imageUrl:
      "https://res.cloudinary.com/dt6hlbtfo/image/upload/v1781603192/tiv93jkrbvc2rkhsc1y7.jpg",
  },
  {
    id: "apparel",
    title: "Apparel & Accessories",
    link: "#",
    imageUrl:
      "https://res.cloudinary.com/dt6hlbtfo/image/upload/v1781603191/hedn9xgccgen9muuhk6v.jpg",
  },
  {
    id: "call-centers",
    title: "Call Centers",
    link: "#",
    imageUrl:
      "https://res.cloudinary.com/dt6hlbtfo/image/upload/v1781603192/iu2mvhfhezrp6diikhjq.jpg",
  },
  {
    id: "consumer-industrial",
    title: "Consumer and Industrial Products",
    link: "#",
    imageUrl:
      "https://res.cloudinary.com/dt6hlbtfo/image/upload/v1781603192/ky1sob2chsyc5t2xhfey.jpg",
  },
  {
    id: "educational",
    title: "Educational Institutions",
    link: "#",
    imageUrl:
      "https://res.cloudinary.com/dt6hlbtfo/image/upload/v1781603191/u6ynwwlkvyon2glsbcwm.jpg",
  },
];

function Industries() {
  return (
    <section className="bg-white ml-0 pt-8 md:pt-12 pb-16 md:pb-24">
      <div className="mx-auto px-6 lg:px-12">
        <div className="mx-auto container">
          <div className="flex flex-row justify-between items-center gap-4 mb-8 sm:mb-10 lg:mb-12">
            <h2 className="font-bold text-gray-900 text-4xl md:text-5xl">
              Industries
            </h2>
          </div>

          <div className="relative w-full overflow-hidden">
            <Marquee>
              {INDUSTRIES_DATA.map((industry, index) => (
                <div
                  key={`${industry.id}-${index}`}
                  className="group relative flex-shrink-0 bg-white hover:shadow-xl mx-3 border border-gray-200 aspect-[3/4] overflow-hidden transition-shadow duration-300 ease-in-out cursor-pointer"
                  style={{ width: "340px" }}
                >
                  <div className="absolute inset-0">
                    <img
                      src={industry.imageUrl}
                      alt={`${industry.title} Visual`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 ease-in-out"
                    />
                    <div className="absolute inset-0 bg-black/20"></div>
                  </div>
                  <div className="z-10 relative flex flex-col p-3 sm:p-4 lg:p-6 h-full text-center">
                    <h3 className="mb-1 sm:mb-2 font-bold text-white text-lg sm:text-xl lg:text-2xl xl:text-3xl leading-tight">
                      {industry.title}
                    </h3>
                  </div>
                </div>
              ))}
            </Marquee>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Industries;
