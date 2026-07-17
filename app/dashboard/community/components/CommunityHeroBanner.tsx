import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CommunityHeroBanner() {
  return (
    <section className="relative h-[250px] xs:h-[280px] sm:h-[300px] w-full overflow-hidden rounded-[15px] bg-[#000D1C]">
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
      <div className="absolute inset-y-0 left-[200px] sm:left-[460px] w-[180px] sm:w-[240px] bg-gradient-to-r from-[#000D1C] to-transparent" />

      {/* Left content */}
      <div className="relative z-10 flex h-full max-w-full sm:w-[700px] flex-col justify-center sm:justify-start gap-4 sm:gap-[23px] px-5 sm:px-[30px] pt-4 sm:pt-[40px]">
        
        {/* Title */}
        <h1 className="text-[26px] xs:text-[32px] sm:text-[44px] font-bold uppercase leading-tight sm:leading-none tracking-wide text-[#DBD2C8]">
          Community Champions
        </h1>

        {/* Subtitle */}
        <h2 className="text-[18px] sm:text-[24px] font-light uppercase leading-none text-[#B1A393]">
          Community Changemakers
        </h2>

        {/* Paragraph */}
        <p className="max-w-[280px] xs:max-w-[340px] sm:max-w-[430px] text-xs sm:text-[14px] font-light leading-relaxed sm:leading-[24px] text-white">
          Celebrating the heart of our communities, grassroots leaders, mentors,
          educators and everyday changemakers.
        </p>

        {/* Link Button */}
        <Link
          href="/dashboard/community/nominations"
          className="flex h-10 mb-3 sm:h-11 w-fit items-center gap-3 sm:gap-4 rounded-lg bg-[#D9B700] px-4 sm:px-5 text-sm sm:text-base font-semibold text-[#000D1C] transition hover:bg-[#D9B700]/90"
        >
          Nominate a Changemaker
          <ArrowRight size={18} className="sm:size-[20px]" />
        </Link>

      </div>
    </section>
  );
}