import Image from "next/image";

export default function LegacyIntroSection() {
  return (
    <section className="relative mx-auto w-full overflow-hidden bg-[#000512] pb-16 sm:pb-20 lg:h-[1000px] lg:pb-0">
      {/* Narrow text container */}
      <div className="relative z-20 mx-auto flex w-full max-w-[820px] flex-col items-center px-5 pt-14 text-center sm:px-6 sm:pt-16 lg:mb-20 lg:pt-[72px]">
        <h2 className="font-montserrat text-[clamp(32px,9vw,72px)] font-medium uppercase leading-tight text-[#DBD2C8] sm:leading-none lg:text-[clamp(48px,4.5vw,72px)]">
          Hall of Fame
        </h2>

        <h3 className="mt-4 font-montserrat text-[clamp(19px,4.5vw,40px)] font-medium leading-[1.25] text-[#B1A393] sm:mt-6 lg:mt-7 lg:text-[clamp(25px,2.6vw,40px)]">
          Inspired by Legacy. Built by Community.
        </h3>

        <p className="mt-5 max-w-[760px] font-montserrat text-[clamp(15px,3.2vw,25px)] font-normal leading-[1.5] text-[#F5F1ED] sm:mt-6 lg:mt-7 lg:text-[clamp(16px,1.55vw,25px)]">
          For centuries, Black leadership, intellect, creativity and courage
          have shaped the world. This archive recognizes those whose impact
          best established foundations and those who continue to build upon
          them.
        </p>
      </div>

      {/* Full-width portrait artwork */}
      <div className="relative mt-8 flex justify-center overflow-hidden sm:mt-10 lg:absolute lg:inset-x-0 lg:top-[410px] lg:mt-0">
        <div className="relative aspect-[1800/760] w-[130%] max-w-none sm:w-[120%] lg:w-[115%]">
          <Image
            src="/home/legacy.png"
            alt="Hall of Fame legacy leaders"
            fill
            priority
            sizes="(max-width: 1024px) 130vw, 115vw"
            className="object-contain object-center"
          />
        </div>

        {/* Soft blend above the portraits */}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-[#000512] via-[#000512]/70 to-transparent sm:h-28" />
      </div>
    </section>
  );
}