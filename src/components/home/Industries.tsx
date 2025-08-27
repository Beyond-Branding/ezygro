import Marquee from "react-fast-marquee";

const INDUSTRIES_DATA = [
  {
    id: "pharma",
    title: "Pharma",
    link: "#",
    imageUrl:
      "https://res.cloudinary.com/daoju0r3c/image/upload/v1756291411/pexels-karolina-grabowska-4021811_monxhi_1_h5rsso.jpg",
  },
  {
    id: "retail",
    title: "Retail",
    link: "#",
    imageUrl:
      "https://res.cloudinary.com/daoju0r3c/image/upload/v1756291546/pexels-asphotograpy-230544_ns9kr7_1_uw1qjv.jpg",
  },
  {
    id: "real-estate",
    title: "Real Estate & Infrastructure",
    link: "#",
    imageUrl:
      "https://res.cloudinary.com/daoju0r3c/image/upload/v1756291605/pexels-field-engineer-147254-442150_r9zsru_1_ihvglg.jpg",
  },
  {
    id: "it",
    title: "Information Technology",
    link: "#",
    imageUrl:
      "https://res.cloudinary.com/daoju0r3c/image/upload/v1756291787/pexels-cytonn-955402_hfgkbw_1_b4ys6p.jpg",
  },
  {
    id: "banking",
    title: "Banking, Finance & Investment Insurance",
    link: "#",
    imageUrl:
      "https://res.cloudinary.com/daoju0r3c/image/upload/v1756291831/pexels-artempodrez-5716032_k5s94h_1_shh6zo.jpg",
  },
  {
    id: "telecom",
    title: "Telecom",
    link: "#",
    imageUrl:
      "https://res.cloudinary.com/daoju0r3c/image/upload/v1756291876/pexels-tuichupanh-32779161_dwefsm_nk1ev6_1_cj91xi.jpg",
  },
  {
    id: "hospitality",
    title: "Hospitality & Leisure",
    link: "#",
    imageUrl:
      "https://res.cloudinary.com/daoju0r3c/image/upload/v1756291922/pexels-nubikini-386009_lrntht_ezoyyd_1_me3igb.jpg",
  },
  {
    id: "fmcg",
    title: "FMCG",
    link: "#",
    imageUrl:
      "https://res.cloudinary.com/daoju0r3c/image/upload/v1756292002/pexels-freestocks-1366594_byxpvw_u8vbpg_1_1_kejdpt.jpg",
  },
  {
    id: "automotive",
    title: "Automotive",
    link: "#",
    imageUrl:
      "https://res.cloudinary.com/daoju0r3c/image/upload/v1756292041/pexels-pixabay-417018_bllqjy_zg6z66_1_ke4nl4.jpg",
  },
  {
    id: "food-beverage",
    title: "Food & Beverage",
    link: "#",
    imageUrl:
      "https://res.cloudinary.com/daoju0r3c/image/upload/v1756292089/pexels-miff-ibra-387362143-32824086_wckbad_mdcv6f_1_jp0yfq.jpg",
  },
  {
    id: "advertising",
    title: "Advertising",
    link: "#",
    imageUrl:
      "https://res.cloudinary.com/daoju0r3c/image/upload/v1756292129/pexels-meganbucknall-2448522_etgfdh_uodptf_1_rlgald.jpg",
  },
  {
    id: "healthcare",
    title: "Health Care",
    link: "#",
    imageUrl:
      "https://res.cloudinary.com/daoju0r3c/image/upload/v1756292163/pexels-pixabay-356040_mke2cx_uw4yhh_1_gdw1uh.jpg",
  },
  {
    id: "apparel",
    title: "Apparel & Accessories",
    link: "#",
    imageUrl:
      "https://res.cloudinary.com/daoju0r3c/image/upload/v1756292202/pexels-arina-krasnikova-5418889_dtyvzu_rn7ymt_1_b6wuri.jpg",
  },
  {
    id: "call-centers",
    title: "Call Centers",
    link: "#",
    imageUrl:
      "https://res.cloudinary.com/daoju0r3c/image/upload/v1756292247/pexels-shkrabaanthony-7971724_q7qzz4_bcqzft_1_bwziaa.jpg",
  },
  {
    id: "consumer-industrial",
    title: "Consumer and Industrial Products",
    link: "#",
    imageUrl:
      "https://res.cloudinary.com/daoju0r3c/image/upload/v1753712251/pexels-shkrabaanthony-5486124_hlyjhp_l4vppj.jpg",
  },
  {
    id: "educational",
    title: "Educational Institutions",
    link: "#",
    imageUrl:
      "https://res.cloudinary.com/daoju0r3c/image/upload/v1756292340/pexels-ivan-samkov-5676736_yheiaz_tg30uc_1_qmowag.jpg",
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
