import Image from "next/image";

type InfluenceCard = {
  name: string;
  years: string;
  quote: string;
  description: string;
  image: string;
};

const sideFigures: InfluenceCard[] = [
  {
    name: "Claudia Jones",
    years: "1915–1964",
    quote: "Culture as resistance.",
    description:
      "Founder of the Notting Hill Carnival and advocate for Caribbean communities in Britain.",
    image: "/home/claudia.png",
  },
  {
    name: "Doreen Lawrence",
    years: "1952 – Present",
    quote: "Justice through perseverance.",
    description:
      "Campaigner for justice and systemic reform in the UK legal system.",
    image: "/home/doreen.png",
  },
];

export default function ManchesterInfluenceSection() {
  return (
    <section
      className="
        relative w-full overflow-hidden
        bg-[linear-gradient(180deg,#081420_0%,#060F18_100%)]
        py-12 xs:py-16 md:py-20 lg:py-24
      "
    >
      {/* Decorative radial gradients */}
      <div
        className="
          pointer-events-none absolute inset-0
          bg-[radial-gradient(70.42%_85.42%_at_10%_90%,rgba(201,162,39,0.06)_0%,rgba(0,0,0,0)_55%),radial-gradient(86.07%_105.92%_at_78%_18%,rgba(201,162,39,0.10)_0%,rgba(0,0,0,0)_60%)]
        "
      />

      <div className="relative z-10 mx-auto w-full max-w-[1440px] px-4 sm:px-8 lg:px-12">
        {/* Section header */}
        <header className="max-w-[950px]">
          <div className="flex items-center gap-3 sm:gap-4 text-[#D9B700]">
            <span className="font-serif text-[24px] sm:text-[30px] italic leading-none">
              IV.
            </span>
            <p className="text-sm sm:text-lg lg:text-[22px] font-semibold uppercase tracking-[0.05em]">
              UK &amp; Manchester Influence
            </p>
          </div>

          <h2
            className="
              mt-5 sm:mt-7
              max-w-[900px]
              text-[32px] xs:text-[40px] sm:text-[50px] md:text-[56px] lg:text-[65px]
              font-bold
              leading-[1.1] sm:leading-[1.08]
              tracking-[-0.03em]
              text-white
            "
          >
            Institutional impact, civic leadership
          </h2>

          <p
            className="
              mt-5 sm:mt-7
              max-w-[880px]
              text-base sm:text-xl lg:text-[25px]
              leading-relaxed sm:leading-[1.55]
              text-[#DBD2C8]
            "
          >
            These figures shaped modern Britain and local community
            transformation anchoring this archive to Manchester
          </p>
        </header>

        {/* Cards container: Single column on mobile, converts to a clean stack or grid on tablets, 3-column layout on wide screens */}
        <div
          className="
            mt-12 sm:mt-16
            grid
            grid-cols-1
            gap-6
            md:grid-cols-2 lg:grid-cols-[minmax(0,329px)_minmax(0,622px)_minmax(0,329px)]
            lg:items-stretch
            lg:justify-between
          "
        >
          {/* Side Card 1 */}
          <div className="md:order-1 lg:order-none">
            <InfluenceSideCard {...sideFigures[0]} />
          </div>

          {/* Featured Center Card: Span 2 cols on tablet landscape to keep symmetry */}
          <div className="md:col-span-2 lg:col-span-1 md:order-3 lg:order-none">
            <FeaturedInfluenceCard />
          </div>

          {/* Side Card 2 */}
          <div className="md:order-2 lg:order-none">
            <InfluenceSideCard {...sideFigures[1]} />
          </div>
        </div>
      </div>
    </section>
  );
}

function InfluenceSideCard({
  name,
  years,
  quote,
  description,
  image,
}: InfluenceCard) {
  return (
    <article
      className="
        flex
        h-full
        min-h-[420px] sm:min-h-[464px]
        flex-col
        overflow-hidden
        rounded-lg
        border
        border-white/10
        bg-[linear-gradient(205.51deg,#281C10_4.55%,#111419_38.62%)]
        pb-8
        transition-all duration-300 hover:border-white/20
      "
    >
      {/* Image container */}
      <div className="relative h-[200px] xs:h-[240px] sm:h-[255px] w-full overflow-hidden">
        <Image
          src={image}
          alt={name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 329px"
          className="object-cover object-top"
        />

        <div
          className="
            pointer-events-none
            absolute inset-0
            bg-gradient-to-b
            from-transparent
            via-transparent
            to-[#111419]
          "
        />
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col items-center px-5 sm:px-6 pt-5 sm:pt-6 text-center">
        <h3 className="text-lg sm:text-[20px] font-semibold uppercase leading-tight text-white">
          {name}
        </h3>

        <p className="mt-2 sm:mt-3 text-[13px] sm:text-[15px] font-medium uppercase text-[#BFB2A3]">
          {years}
        </p>

        <p className="mt-3 sm:mt-4 text-[12px] sm:text-[13px] italic leading-relaxed text-[#D9B700]">
          {quote}
        </p>

        <p className="mt-4 sm:mt-5 max-w-[260px] text-xs sm:text-[14px] leading-[1.6] text-[#F0E9E2]">
          {description}
        </p>
      </div>
    </article>
  );
}

function FeaturedInfluenceCard() {
  return (
    <article
      className="
        relative
        h-full
        min-h-[466px]
        overflow-hidden
        rounded-lg
        border
        border-white/10
        bg-[linear-gradient(205.51deg,#281C10_4.55%,#111419_38.62%)]
        transition-all duration-300 hover:border-white/20
      "
    >
      <div className="grid h-full grid-cols-1 md:grid-cols-[48%_52%] lg:grid-cols-[52%_48%]">
        
        {/* Erinma image container */}
        <div className="relative min-h-[280px] xs:min-h-[340px] sm:min-h-[380px] md:min-h-full overflow-hidden">
          <Image
            src="/home/bell.png"
            alt="Erinma Bell"
            fill
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 320px"
            className="object-cover md:object-contain object-center md:object-left-bottom"
          />

          {/* Fallback gradients for blending on mobile vs desktop */}
          <div
            className="
              pointer-events-none
              absolute inset-x-0 bottom-0
              h-24
              bg-gradient-to-t
              from-[#111419]
              to-transparent
              md:hidden
            "
          />
          <div
            className="
              pointer-events-none
              absolute inset-y-0 right-0
              hidden w-24
              bg-gradient-to-l
              from-[#111419]
              to-transparent
              md:block
            "
          />
        </div>

        {/* Featured content block */}
        <div className="flex flex-col justify-center px-6 py-8 sm:p-10 md:px-8">
          <span
            className="
              w-fit
              border border-[#B1A393]/20
              bg-[#3B2B1F]/40
              px-3 sm:px-4 py-2 sm:py-3
              text-[10px] sm:text-[12px]
              font-semibold
              uppercase
              tracking-[0.18em]
              text-[#D9B700]
            "
          >
            Spirit of Manchester
          </span>

          <h3 className="mt-6 sm:mt-8 text-2xl sm:text-[28px] font-semibold uppercase leading-tight text-white">
            Erinma Bell
          </h3>

          <p className="mt-2 sm:mt-3 text-13px sm:text-[15px] uppercase text-[#BFB2A3]">
            Featured Inductee · 2026
          </p>

          <p className="mt-3 sm:mt-4 text-xs sm:text-[14px] italic text-[#D9B700]">
            Peace built from within.
          </p>

          <p className="mt-4 max-w-[320px] text-sm sm:text-[15px] leading-[1.65] text-[#F0E9E2]">
            Community peace advocate and civic leader recognised for long standing contributions to youth engagement and neighborhood safety in Manchester.
          </p>
        </div>

      </div>
    </article>
  );
}