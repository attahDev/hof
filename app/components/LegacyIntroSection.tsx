import Image from "next/image";
import ScrollReveal from "./animations/ScrollReveal";

export default function LegacyIntroSection() {
  return (
    <ScrollReveal
      as="section"
      className="relative mx-auto w-full overflow-hidden bg-[#000512] pb-0"
    >
      <div className="relative z-20 mx-auto flex w-full max-w-[820px] flex-col items-center px-5 pt-14 text-center sm:px-6 sm:pt-16 lg:pt-[72px]">
        <div className="relative inline-flex items-center justify-center">
          {/* Soft gold circle glow at the edges of the title */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-1/2 top-1/2 z-0 h-[180%] w-[130%] -translate-x-1/2 -translate-y-1/2 sm:h-[200%] sm:w-[140%]"
            style={{
              background:
                "radial-gradient(ellipse 50% 55% at 50% 50%, rgba(201,160,80,0.32) 0%, rgba(187,164,134,0.16) 40%, rgba(0,5,18,0) 72%)",
            }}
          />

          <h2
            className="
              relative z-10
              font-montserrat text-[clamp(32px,9vw,72px)] font-medium uppercase
              leading-tight sm:leading-none lg:text-[clamp(48px,4.5vw,72px)]
              bg-[linear-gradient(180deg,#E7E1D3_0%,#BBA486_100%)]
              bg-clip-text text-transparent
            "
          >
            Hall of Fame
          </h2>
        </div>

        <h3 className="mt-4 font-montserrat text-[clamp(19px,4.5vw,40px)] font-medium leading-[1.25] text-[#DBD2C8] sm:mt-6 lg:mt-7 lg:text-[clamp(25px,2.6vw,40px)]">
          Inspired by Legacy. Built by Community.
        </h3>

        <p className="mt-5 max-w-[760px] font-montserrat text-[clamp(15px,3.2vw,25px)] font-light leading-[1.5] text-[#EAEAEA] sm:mt-6 lg:mt-7 lg:text-[clamp(16px,1.55vw,25px)]">
          For centuries, Black leadership, intellect, creativity and courage
          have shaped the world. This archive recognizes those whose impact
          best established foundations and those who continue to build upon
          them.
        </p>
      </div>

      {/* Full-bleed stretched portrait artwork */}
      <div className="relative mt-6 w-full overflow-hidden sm:mt-8 lg:mt-10">
        <div className="relative h-[300px] w-full sm:h-[420px] md:h-[520px] lg:h-[620px] xl:h-[720px]">
          <Image
            src="/home/legacy.png"
            alt="Hall of Fame legacy leaders"
            fill
            priority
            sizes="100vw"
            className="object-cover object-bottom scale-x-[1.08] origin-bottom"
          />
        </div>

        {/* Soft blend above the portraits */}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-[#000512] via-[#000512]/65 to-transparent sm:h-24" />

        {/* Light fade under quote for readability — keep artwork visible to the bottom edge */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[22%] bg-gradient-to-t from-[#000512]/80 via-[#000512]/35 to-transparent" />

        {/* Quote sits on the image */}
        <p className="absolute bottom-[4%] left-1/2 z-10 w-[min(720px,92%)] -translate-x-1/2 text-center font-montserrat text-[clamp(14px,2.4vw,20px)] font-light leading-relaxed text-[#DBD2C8] sm:bottom-[5%]">
          &ldquo;Their vision built the future. Their legacy lights the way&rdquo;
        </p>
      </div>
    </ScrollReveal>
  );
}
