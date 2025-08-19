import useInView from "@/hooks/useInView";

interface Section {
  id: number;
  title: string;
  description: string;
  alt: string;
  imageUrl: string;
}

export default function SectionCard({
  section,
  index,
}: {
  section: Section;
  index: number;
}) {
  const isTextOnLeft = index % 2 === 0;
  const [ref, isInView] = useInView({ threshold: 0.1 });

  return (
    <div
      ref={ref}
      key={section.id}
      className={`flex flex-col lg:flex-row items-center gap-6 sm:gap-8 md:gap-12 lg:gap-16 transition-opacity duration-500 ${
        isInView ? "opacity-100" : "opacity-50"
      }`}
    >
      <div
        className={`lg:w-3/5 lg:py-6 sm:lg:py-8 ${
          isTextOnLeft ? "lg:order-1" : "lg:order-2"
        }`}
      >
        <div
          className={`transition-all duration-1000 ease-out ${
            isInView
              ? "translate-x-0 opacity-100"
              : isTextOnLeft
              ? "-translate-x-10 opacity-0"
              : "translate-x-10 opacity-0"
          }`}
        >
          <h2 className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl font-bold tracking-tight text-gray-900">
            {section.title}
          </h2>
          <p className="mt-4 sm:mt-5 md:mt-6 text-base sm:text-lg md:text-lg leading-6 sm:leading-7 md:leading-8 text-gray-600">
            {section.description}
          </p>
        </div>
      </div>

      <div className={`lg:w-2/5 ${isTextOnLeft ? "lg:order-2" : "lg:order-1"}`}>
        <div
          className={`overflow-hidden transition-all duration-1000 ease-out ${
            isInView ? "scale-100 opacity-100" : "scale-90 opacity-0"
          }`}
        >
          <img
            src={section.imageUrl}
            alt={section.alt}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}
