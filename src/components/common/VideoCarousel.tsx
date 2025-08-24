export default function VideCarousel() {
  return (
    <section className="relative w-full h-screen overflow-y-hidden">
      {/* Content */}
      <div className="z-10 relative h-full">
        {/* Stripe */}
        <div className="top-0 left-0 absolute flex bg-white w-full h-full lg:h-[80%] skew-y-[-16deg] origin-center -translate-y-1/2"></div>

        <div className="z-20 relative mx-auto mt-8 md:mt-8 px-6 md:px-12">
          <h2 className="mb-6 font-semibold text-6xl leading-[1] tracking-tight">
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
        <div className="absolute inset-0">
          <video
            className="w-full h-full object-cover"
            src="https://res.cloudinary.com/daoju0r3c/video/upload/v1753712267/1_bhjviq_jwrrjy.mp4"
            autoPlay
            loop
            muted
          />
        </div>

        {/* Slider Navigation */}
        <div className="hidden right-0 bottom-12 left-12 absolute gap-4 md:grid grid-flow-col w-1/3">
          {[1, 2, 3, 4].map((index) => (
            <div key={index} className="bg-white/40 w-auto h-1"></div>
          ))}
        </div>

        {/* Contents and Slider */}
        <div className="right-0 bottom-24 md:bottom-16 left-0 absolute mx-auto text-white">
          <div className="flex justify-between gap-6 ml-auto px-6 md:px-12 md:max-w-2/4 text-2xl md:text-4xl text-right container">
            <div>
              <h3>
                Empowering Growth with Every Number We don’t just file and
                finish we plan, guide, and grow with you. EZYGRO turns boring
                numbers into bold moves.
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
