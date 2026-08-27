import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function HallOfFameHeroBanner() {
  return (
    <section className="relative grid h-auto w-full grid-cols-1 overflow-hidden rounded-[15px] bg-[var(--ink)] lg:min-h-[320px] lg:grid-cols-[36%_64%]">
      {/* Left Content */}
      <div className="relative z-20 flex h-full min-h-[320px] flex-col justify-between bg-[var(--ink)] px-6 py-8 sm:px-8">
        <div>
          <h1 className="font-serif text-[34px] font-medium leading-none text-[#DBD2C8] xs:text-[40px] lg:text-[48px]">
            Hall of Fame
          </h1>

          <h2 className="mt-3 font-serif text-[21px] italic font-normal leading-none text-[var(--gold-deep)] sm:mt-5 lg:text-[26px]">
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
          className="mt-6 flex h-11 w-full shrink-0 items-center justify-center gap-4 rounded-lg bg-[var(--gold)] p-1 text-sm font-semibold text-[var(--ink)] transition-all hover:bg-[var(--gold)]/90 active:scale-[0.98] xs:w-[220px] lg:mt-auto"
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
        <div className="absolute inset-y-0 left-0 h-16 w-full bg-gradient-to-b from-[var(--ink)] to-transparent lg:h-full lg:w-40 lg:bg-gradient-to-r" />

        {/* Light bottom fade for quote readability */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[28%] bg-gradient-to-t from-[var(--ink)]/80 via-[var(--ink)]/30 to-transparent" />

        {/* Responsive Quote Text */}
        <p className="absolute bottom-3 left-4 right-4 z-10 text-xs font-light italic leading-normal text-white/95 sm:bottom-4 sm:left-[10%] lg:left-[32%] lg:text-sm">
          “Their vision built the future. Their legacy lights the way”
        </p>
      </div>
    </section>
  );
}