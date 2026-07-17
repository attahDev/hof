import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function HallOfFameHeroBanner() {
  return (
    <section className="relative grid h-auto min-h-[350px] lg:h-[300px] w-full grid-cols-1 lg:grid-cols-[36%_64%] overflow-hidden rounded-[15px] bg-[#000D1C]">
      {/* Left Content */}
      <div className="relative z-20 flex h-full flex-col bg-[#000D1C] px-6 py-8 sm:px-8 sm:py-8 justify-between lg:justify-start">
        <div>
          <h1 className="text-[32px] xs:text-[38px] lg:text-[45px] font-bold uppercase leading-none tracking-wide text-[#DBD2C8]">
            Hall of Fame
          </h1>

          <h2 className="mt-3 sm:mt-5 text-[20px] lg:text-[25px] font-light uppercase leading-none text-[#B1A393]">
            National & Global Impact
          </h2>

          <p className="mt-4 sm:mt-8 max-w-[450px] text-xs sm:text-sm lg:text-[14px] font-light leading-relaxed sm:leading-[24px] text-white">
            Lifetime legacy recognition for individuals who have made <br className="hidden md:block" />
            a profound and lasting impact nationally or globally.
          </p>
        </div>

        <Link
          href="/dashboard/nominations"
          className="mt-6 lg:mt-auto flex p-1 h-11 w-full xs:w-[220px] items-center justify-center gap-4 rounded-lg bg-[#D9B700] text-sm sm:text-base font-semibold text-[#000D1C] transition-all hover:bg-[#D9B700]/90 active:scale-[0.98]"
        >
          Nominate Someone
          <ArrowRight size={20} />
        </Link>
      </div>

      {/* Right Image Container */}
      <div className="relative h-[220px] sm:h-[280px] lg:h-full w-full">
        <Image
          src="/hero/heorimage.png"
          alt="Hall of Fame"
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 64vw"
          className="object-cover object-center"
        />

        {/* Fade into text side on Desktop / Top-fade on Mobile */}
        <div className="absolute inset-y-0 left-0 w-full lg:w-40 bg-gradient-to-b lg:bg-gradient-to-r from-[#000D1C] to-transparent h-16 lg:h-full" />

        {/* Slight bottom fade */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#000D1C]/45" />

        {/* Responsive Quote Text */}
        <p className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-[10%] lg:left-[32%] z-10 text-sm sm:text-base lg:text-lg font-light italic text-white/95 leading-normal">
          “Their vision built the future. Their legacy lights the way”
        </p>
      </div>
    </section>
  );
}