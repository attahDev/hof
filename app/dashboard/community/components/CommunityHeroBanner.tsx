import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CommunityHeroBanner() {
  return (
    <section className="relative h-[250px] xs:h-[280px] sm:h-[300px] w-full overflow-hidden rounded-[15px] bg-[var(--ink)]">
      {/* Illustration side */}
      <Image
        src="/community/community-hero.png"
        alt="Community Champions"
        width={694}
        height={387}
        priority
        className="
          absolute 
          /* Mobile constraints: scaled down and pushed deeper to avoid overlapping text */
          right-[-80px] sm:right-5 
          top-[-40px] sm:top-[-110px] 
          h-[260px] sm:h-[387px] 
          w-[466px] sm:w-[694px] 
          object-contain 
          object-right-bottom 
          opacity-30 xs:opacity-50 sm:opacity-100
        "
      />

      {/* Blend image into background */}
      <div className="absolute inset-y-0 left-[200px] sm:left-[460px] w-[180px] sm:w-[240px] bg-gradient-to-r from-[var(--ink)] to-transparent" />

      {/* Left content */}
      <div className="relative z-10 flex h-full max-w-full sm:w-[700px] flex-col justify-center sm:justify-start gap-4 sm:gap-[23px] px-5 sm:px-[30px] pt-4 sm:pt-[40px]">
        
        {/* Title */}
        <h1 className="font-serif text-[28px] xs:text-[34px] sm:text-[48px] font-medium leading-tight sm:leading-none text-[#DBD2C8]">
          Community Champions
        </h1>

        {/* Subtitle */}
        <h2 className="font-serif text-[19px] sm:text-[25px] italic font-normal leading-none text-[var(--gold-deep)]">
          Community Changemakers
        </h2>

        {/* Paragraph */}
        <p className="max-w-[280px] xs:max-w-[340px] sm:max-w-[430px] text-xs sm:text-[14px] font-light leading-relaxed sm:leading-[24px] text-white">
          Celebrating the heart of our communities, grassroots leaders, mentors,
          educators and everyday changemakers.
        </p>

        {/* Link Button */}
        <Link
          href="/dashboard/nominations"
          className="flex h-10 mb-3 sm:h-11 w-fit items-center gap-3 sm:gap-4 rounded-lg bg-[var(--gold)] px-4 sm:px-5 text-sm sm:text-base font-semibold text-[var(--ink)] transition hover:bg-[var(--gold)]/90"
        >
          Nominate a Changemaker
          <ArrowRight size={18} className="sm:size-[20px]" />
        </Link>

      </div>
    </section>
  );
}