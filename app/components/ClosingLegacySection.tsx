import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUp, MapPin } from "lucide-react";

export default function ClosingLegacySection() {
  return (
    <section className="w-full border-y-[0.5px] border-black/10 bg-[#F8F4EA] px-6 py-[70px] sm:px-10 lg:px-[50px]">
      <div className="mx-auto w-full max-w-[1440px]">
        {/* Top closing content */}
        <div className="mx-auto flex max-w-[900px] flex-col items-center text-center">
          <p className="text-[18px] font-medium text-[#8A6425]">
            Inspired by Legacy. Built by Community
          </p>

          <h2 className="mt-5 text-[clamp(54px,6vw,82px)] font-medium leading-[1.02] tracking-[-0.035em] text-[#17120F]">
            Legacy continues
            <br />
            with us.
          </h2>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-8">
            <Link
              href="#legacy"
              className="inline-flex h-[56px] items-center gap-3 rounded-lg bg-[#D7263D] px-6 text-[18px] font-semibold text-white transition hover:bg-[#BE1F35]"
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

        {/* Event card */}
        <div
          className="
            relative mt-[80px] overflow-hidden rounded-[16px]
            border border-white/10
            bg-[linear-gradient(180deg,#081420_0%,#060F18_100%)]
          "
        >
          {/* Background glows */}
          <div
            className="
              pointer-events-none absolute inset-0
              bg-[radial-gradient(70.42%_85.42%_at_10%_90%,rgba(201,162,39,0.06)_0%,rgba(0,0,0,0)_55%),radial-gradient(86.07%_105.92%_at_78%_18%,rgba(201,162,39,0.10)_0%,rgba(0,0,0,0)_60%)]
            "
          />

          <div className="relative z-10 px-4 pb-5 pt-5 sm:px-6 lg:px-8 lg:pt-7">
            {/* Event information */}
            <div className="flex flex-col items-center justify-center gap-3 text-center lg:flex-row lg:flex-wrap">
              <p className="text-[16px] font-semibold uppercase tracking-[0.02em] text-[#BFB2A3]">
                Next Induction Ceremony
              </p>

              <p className="text-[clamp(24px,2.5vw,34px)] font-bold text-white">
                17 July, 2026
              </p>

              <span className="hidden text-[#8E8984] lg:inline">•</span>

              <p className="text-[clamp(24px,2.5vw,34px)] font-bold text-white">
                10am - 2pm
              </p>
            </div>

            <div className="mt-3 flex flex-col items-center justify-center gap-3 text-center text-[17px] text-[#DBD2C8] lg:flex-row">
              <span className="inline-flex items-center gap-2">
                <MapPin size={18} fill="currentColor" />
                47 Lloyd St, MANCHESTER M2 5LE
              </span>

              <span>
                <span className="font-semibold text-[#D9B700]">Title:</span>{" "}
                POWER OF EXPRESSION 2026
              </span>
            </div>

            {/* Event image */}
            <div className="relative mt-7 h-[300px] w-full overflow-hidden sm:h-[360px] lg:h-[444px]">
              <Image
                src="/events/event.png"
                alt="Power of Expression 2026 induction ceremony"
                fill
                priority
                sizes="(max-width: 1440px) 100vw, 1300px"
                className="object-cover object-center"
              />
            </div>

            {/* Register button */}
            <div className="mt-7 flex justify-center">
              <Link
                href="/events"
                className="inline-flex h-[48px] items-center gap-3 rounded-lg bg-[#D7263D] px-6 text-[15px] font-semibold text-white transition hover:bg-[#BE1F35]"
              >
                Register Interest
                <ArrowRight size={17} strokeWidth={2} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}