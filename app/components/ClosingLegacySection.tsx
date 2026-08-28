import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUp, MapPin } from "lucide-react";
import ScrollReveal from "./animations/ScrollReveal";

export default function ClosingLegacySection() {
  return (
    <ScrollReveal as="section" className="w-full border-y-[0.5px] border-black/10 bg-[#F8F4EA] px-6 py-[70px] sm:px-10 lg:px-[50px]">
      <div className="mx-auto w-full max-w-[1440px]">
        {/* Top closing content */}
        <div className="mx-auto flex max-w-[900px] flex-col items-center text-center">
          <p className="text-[18px] font-medium text-[#8A6425]">
            Inspired by Legacy. Built by Community
          </p>

          <h2 className="mt-5 font-serif text-[clamp(54px,6vw,82px)] font-medium leading-[1.02] tracking-[-0.035em] text-[#17120F]">
            Legacy continues
            <br />
            <span className="italic text-[var(--gold-deep)]">with us.</span>
          </h2>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-8">
            <Link
              href="/#legacy"
              className="btn-shimmer inline-flex h-[56px] items-center gap-3 rounded-lg bg-[#D7263D] px-6 text-[18px] font-semibold text-white transition hover:bg-[#BE1F35]"
            >
              Explore the Legacy
              <ArrowUp size={18} strokeWidth={2} />
            </Link>

            <div className="w-fit">
              <Link
                href="/dashboard/nominations"
                className="block text-[20px] font-medium text-[#000D1C]"
              >
                Nominate a Changemaker
              </Link>

              <div className="relative mt-2 h-2 w-full">
                <div className="absolute bottom-0 left-1.5 right-1.5 border-b border-[#BFB2A3]" />
                <div className="absolute bottom-0 left-0 h-2 w-2 rounded-bl-[8px] border-b border-l border-[#BFB2A3]" />
                <div className="absolute bottom-0 right-0 h-2 w-2 rounded-br-[8px] border-b border-r border-[#BFB2A3]" />
              </div>
            </div>
          </div>
        </div>


  );
}
