export interface LandingSectionProps {
  title: string | (() => React.ReactNode);
  subtitle: string;
  media: string;
  enlargeBackground?: boolean;
}

export default function LandingSection(props: LandingSectionProps) {
  const { title: Title, subtitle, media, enlargeBackground = false } = props;
  return (
    <section className="relative w-full h-screen max-h-[960px] overflow-y-hidden">
      {/* Content */}
      <div className="z-10 relative h-full">
        {/* Stripe */}
        <div
          className={`top-0 left-0 absolute flex bg-white w-full h-full lg:h-[80%] skew-y-[-16deg] origin-center ${enlargeBackground ? "-translate-y-[25%] lg:-translate-y-1/2" : "-translate-y-1/2"}`}
        ></div>

        <div className="z-20 relative mx-auto mt-4 lg:mt-8 px-6 md:px-12 container">
          <h2 className="mb-6 font-semibold text-4xl lg:text-6xl leading-[1] tracking-tight">
            {typeof Title === "string" ? Title : <Title />}
          </h2>
          <p className="lg:max-w-1/2 text-lg">{subtitle}</p>
        </div>
      </div>

      {/* Slider */}
      <div className="absolute inset-0">
        <div className="relative size-full">
          <div className="absolute inset-0">
            <img
              alt="Media"
              className="w-full h-full object-cover"
              src={media}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
