import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function HallOfFameHeroBanner() {
  return (
    <section className="relative grid h-auto w-full grid-cols-1 overflow-hidden rounded-[15px] bg-[#000D1C] lg:min-h-[320px] lg:grid-cols-[36%_64%]">
      {/* Left Content */}
      <div className="relative z-20 flex h-full min-h-[320px] flex-col justify-between bg-[#000D1C] px-6 py-8 sm:px-8">
        <div>
          <h1 className="text-[32px] font-bold uppercase leading-none tracking-wide text-[#DBD2C8] xs:text-[38px] lg:text-[45px]">
            Hall of Fame
          </h1>

          <h2 className="mt-3 text-[20px] font-light uppercase leading-none text-[#B1A393] sm:mt-5 lg:text-[25px]">
            National & Global Impact
          </h2>

          <p className="mt-4 max-w-[450px] text-xs font-light leading-relaxed text-white sm:mt-8 sm:text-sm sm:leading-[24px] mb-5 lg:text-[14px]">
            Lifetime legacy recognition for individuals who have made{" "}
            <br className="hidden md:block" />
            a profound and lasting impact nationally or globally.
          </p>
        </div>

        <Link
          href="/dashboard/nominations"
          className="mt-6 flex h-11 w-full shrink-0 items-center justify-center gap-4 rounded-lg bg-[#D9B700] p-1 text-sm font-semibold text-[#000D1C] transition-all hover:bg-[#D9B700]/90 active:scale-[0.98] xs:w-[220px] lg:mt-auto"
        >
          Nominate Someone
          <ArrowRight size={20} />
        </Link>
      </div>

      {/* Right Image Container */}
      <div className="relative h-[240px] w-full sm:h-[300px] lg:h-full">
        <Image
          src="/hero/heorimage.png"
          alt="Hall of Fame"
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 64vw"
          className="object-cover object-bottom"
        />

        {/* Fade into text side on Desktop / Top-fade on Mobile */}
        <div className="absolute inset-y-0 left-0 h-16 w-full bg-gradient-to-b from-[#000D1C] to-transparent lg:h-full lg:w-40 lg:bg-gradient-to-r" />

        {/* Light bottom fade for quote readability */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[28%] bg-gradient-to-t from-[#000D1C]/80 via-[#000D1C]/30 to-transparent" />

        {/* Responsive Quote Text */}
        <p className="absolute bottom-3 left-4 right-4 z-10 text-xs font-light italic leading-normal text-white/95 sm:bottom-4 sm:left-[10%] lg:left-[32%] lg:text-sm">
          “Their vision built the future. Their legacy lights the way”
        </p>
      </div>
    </section>
  );
}