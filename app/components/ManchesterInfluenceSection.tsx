import Image from "next/image";
import ScrollReveal from "./animations/ScrollReveal";

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
    <ScrollReveal
      as="section"
      className="
        relative w-full overflow-hidden
        bg-[linear-gradient(180deg,#081420_0%,#060F18_100%)]
        py-16
        lg:py-20
      "
    >
      {/* Decorative radial gradients */}
      <div
        className="
          pointer-events-none absolute inset-0
          bg-[radial-gradient(70.42%_85.42%_at_10%_90%,rgba(201,162,39,0.06)_0%,rgba(0,0,0,0)_55%),radial-gradient(86.07%_105.92%_at_78%_18%,rgba(201,162,39,0.10)_0%,rgba(0,0,0,0)_60%)]
        "
      />

      <div className="relative z-10 mx-auto w-full max-w-[1440px] px-6 sm:px-10 lg:px-12">
        {/* Section header */}
        <header className="max-w-[950px]">
          <div className="flex items-center gap-4 text-[#D9B700]">
            <span className="font-serif text-[30px] italic leading-none">
              IV.
            </span>

            <p className="text-[22px] font-semibold uppercase tracking-[0.02em]">
              UK &amp; Manchester Influence
            </p>
          </div>

          <h2
            className="
              mt-7
              max-w-[900px]
              text-[65px]
              font-bold
              leading-[1.08]
              tracking-[-0.03em]
              text-white
            "
          >
            Institutional impact, civic
            <br />
            leadership
          </h2>

          <p
            className="
              mt-7
              max-w-[880px]
              text-[25px]
              leading-[1.55]
              text-[#DBD2C8]
            "
          >
            These figures shaped modern Britain and local community
            transformation anchoring this archive to Manchester
          </p>
        </header>

        {/* Cards */}
        <div
          className="
            mt-16
            grid
            grid-cols-1
            gap-6
            lg:grid-cols-[minmax(0,329px)_minmax(0,622px)_minmax(0,329px)]
            lg:items-stretch
            lg:justify-between
          "
        >
          <InfluenceSideCard {...sideFigures[0]} />

          <FeaturedInfluenceCard />

          <InfluenceSideCard {...sideFigures[1]} />
        </div>
      </div>
    </ScrollReveal>
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
        min-h-[464px]
        flex-col
        overflow-hidden
        rounded-lg
        border
        border-white/10
        bg-[linear-gradient(205.51deg,#281C10_4.55%,#111419_38.62%)]
        pb-8
      "
    >
      {/* Image */}
      <div className="relative h-[255px] w-full overflow-hidden">
        <Image
          src={image}
          alt={name}
          fill
          sizes="329px"
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
      <div className="flex flex-1 flex-col items-center px-6 pt-6 text-center">
        <h3 className="text-[20px] font-semibold uppercase leading-tight text-white">
          {name}
        </h3>

        <p className="mt-3 text-[15px] font-medium uppercase text-[#BFB2A3]">
          {years}
        </p>

        <p className="mt-4 text-[13px] italic leading-relaxed text-[#D9B700]">
          {quote}
        </p>

        <p className="mt-5 max-w-[260px] text-[14px] leading-[1.6] text-[#F0E9E2]">
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
        min-h-[466px]
        overflow-hidden
        rounded-lg
        border
        border-white/10
        bg-[linear-gradient(205.51deg,#281C10_4.55%,#111419_38.62%)]
      "
    >
      <div className="grid min-h-[466px] grid-cols-1 md:grid-cols-[52%_48%]">
        {/* Erinma image */}
        <div className="relative min-h-[360px] overflow-hidden md:min-h-[466px]">
          <Image
            src="/home/bell.png"
            alt="Erinma Bell"
            fill
            priority
            sizes="(max-width: 768px) 100vw, 320px"
            className="object-contain object-left-bottom"
          />

          {/* Blend image into content */}
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

        {/* Featured content */}
        <div className="flex flex-col justify-center px-7 py-10 md:px-8">
          <span
            className="
              w-fit
              border border-[#B1A393]/20
              bg-[#3B2B1F]/40
              px-4 py-3
              text-[12px]
              font-semibold
              uppercase
              tracking-[0.18em]
              text-[#D9B700]
            "
          >
            Spirit of Manchester
          </span>

          <h3 className="mt-8 text-[28px] font-semibold uppercase leading-tight text-white">
            Erinma Bell
          </h3>

          <p className="mt-3 text-[15px] uppercase text-[#BFB2A3]">
            Featured Inductee · 2026
          </p>

          <p className="mt-4 text-[14px] italic text-[#D9B700]">
            Peace built from within.
          </p>

          <p className="mt-4 max-w-[300px] text-[15px] leading-[1.65] text-[#F0E9E2]">
            Community peace advocate and civic leader recognised for long
            standing contributions to youth engagement and neighborhood safety
            in Manchester.
          </p>
        </div>
      </div>
    </article>
  );
}