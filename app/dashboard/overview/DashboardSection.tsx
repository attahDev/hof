"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useRef, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  Eye,
  Send,
  Volume2,
} from "lucide-react";

type RegionId = "all" | "uk" | "africa" | "global" | "american-caribbean";

type Inductee = {
  id: string;
  region: Exclude<RegionId, "all">;
  name: string;
  role: string;
  years: string;
  image: string;
};

const tabs: { id: RegionId; label: string }[] = [
  { id: "all", label: "All" },
  { id: "uk", label: "UK & Manchester" },
  { id: "africa", label: "Africa" },
  { id: "global", label: "Global" },
  { id: "american-caribbean", label: "American & Caribbean" },
];

const inductees: Inductee[] = [
  {
    id: "nelson-mandela",
    region: "africa",
    name: "NELSON MANDELA",
    role: "Freedom fighter\nStatesman | Humanitarian",
    years: "1918 – 2013",
    image: "/hero/Button.png",
  },
  {
    id: "erinma-bell",
    region: "uk",
    name: "PROF ERINMA\nBELL MBE DL",
    role: "Pioneering peace activist,\ncommunity leader,",
    years: "2026 INDUCTEE",
    image: "/hero/Button (1).png",
  },
  {
    id: "kwame-nkrumah",
    region: "africa",
    name: "DR. KWAME\nNKRUMAH",
    role: "Pan-African leader\nVisionary | Statesman",
    years: "1918 – 2013",
    image: "/hero/Button (2).png",
  },
  {
    id: "global-leader",
    region: "global",
    name: "GLOBAL\nVISIONARY",
    role: "Innovation leader\nLegacy builder",
    years: "2026 INDUCTEE",
    image: "/hero/Button.png",
  },
  {
    id: "caribbean-leader",
    region: "american-caribbean",
    name: "CARIBBEAN\nCHAMPION",
    role: "Community voice\nCultural leader",
    years: "2026 INDUCTEE",
    image: "/hero/Button (1).png",
  },
];

const quickActions = [
  {
    title: "Nominate",
    text: "Submit a candidate",
    icon: Send,
    href: "/hall-of-fame/nominations",
  },
  {
    title: "Legacy Tributes",
    text: "Celebrate someone",
    icon: Volume2,
    href: "/hall-of-fame/tributes",
  },
  {
    title: "Witness",
    text: "Sign an induction",
    icon: Eye,
    href: "/hall-of-fame/witness",
  },
  {
    title: "Legacy Story",
    text: "Read or submit",
    icon: BookOpen,
    href: "/hall-of-fame/library",
  },
];

const regions = [
  { label: "UK & Manc.", value: 48, max: 60 },
  { label: "Africa", value: 35, max: 60 },
  { label: "Americas", value: 22, max: 60 },
  { label: "Caribbean", value: 13, max: 60 },
  { label: "Global", value: 8, max: 60 },
];

export default function DashboardSection() {
  return (
    <section className="mt-[24px] sm:mt-[34px] flex flex-col lg:flex-row w-full gap-[20px]">
      {/* Left side panel (Hall of Fame) */}
      <div className="flex-1 min-w-0 w-full">
        <HallOfFamePanel />
      </div>

      {/* Right side panel */}
      <div className="flex w-full lg:w-[380px] xl:w-[486px] shrink-0 flex-col gap-[20px]">
        <QuickActions />
        <RegionStats />
      </div>
    </section>
  );
}

function HallOfFamePanel() {
  const [activeTab, setActiveTab] = useState<RegionId>("all");
  const scrollRef = useRef<HTMLDivElement | null>(null);

  const filteredInductees = useMemo(() => {
    if (activeTab === "all") return inductees;
    return inductees.filter((item) => item.region === activeTab);
  }, [activeTab]);

  const scrollCards = (direction: "left" | "right") => {
    scrollRef.current?.scrollBy({
      left: direction === "right" ? 190 : -190,
      behavior: "smooth",
    });
  };

  return (
    <section className="h-auto min-h-[510px] w-full overflow-hidden rounded-[15px] bg-[#000D1C] px-4 sm:px-[20px] py-[20px]">
      <div className="flex items-center justify-between">
        <h2 className="text-[18px] sm:text-[20px] font-semibold uppercase tracking-[0.5px] text-white">
          Hall of Fame
        </h2>

        <Link
          href="/hall-of-fame/inductees"
          className="text-[12px] sm:text-[14px] font-medium uppercase text-[#B1A393] transition hover:text-white"
        >
          View All
        </Link>
      </div>

      {/* Better Touch-Friendly Tab Bar (Doesn't clip, uses gradient hint on edge) */}
      <div className="mt-5 sm:mt-[29px] flex gap-[8px] sm:gap-[10px] overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {tabs.map((tab) => {
          const isActive = activeTab === tab.id;

          return (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveTab(tab.id)}
              className={[
                "h-[34px] sm:h-[37px] shrink-0 rounded-[8px] border px-3 sm:px-[14px] text-xs sm:text-[14px] font-medium transition whitespace-nowrap",
                isActive
                  ? "border-[#D9B700] bg-[#D9B700] text-[#000D1C]"
                  : "border-[#C2B2B240] bg-transparent text-[#B1A393] hover:border-[#D9B700] hover:text-[#D9B700]",
              ].join(" ")}
            >
              {tab.label}
            </button>
          );
        })}
      </div>

      {/* Card Carousel Wrapper */}
      <div className="relative mt-5 sm:mt-[29px]">
        {/* Navigation arrows only show on non-touch devices (typically md: and up) */}
        <button
          type="button"
          onClick={() => scrollCards("left")}
          className="absolute hidden md:flex left-[-12px] top-1/2 z-20 h-[30px] w-[30px] -translate-y-1/2 items-center justify-center rounded-full border border-[#C2B2B240] bg-[#000D1C]/80 text-[#B1A393] transition hover:text-white"
        >
          <ArrowLeft size={16} />
        </button>

        <div
          ref={scrollRef}
          className="flex gap-[12px] overflow-x-auto scroll-smooth pb-4 snap-x snap-mandatory [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {filteredInductees.map((item) => (
            <div key={item.id} className="snap-start shrink-0">
              <InducteeCard item={item} />
            </div>
          ))}
        </div>

        <button
          type="button"
          onClick={() => scrollCards("right")}
          className="absolute hidden md:flex right-[-12px] top-1/2 z-20 h-[30px] w-[30px] -translate-y-1/2 items-center justify-center rounded-full border border-[#C2B2B240] bg-[#000D1C]/80 text-[#B1A393] transition hover:text-white"
        >
          <ArrowRight size={16} />
        </button>
      </div>
    </section>
  );
}

function InducteeCard({ item }: { item: Inductee }) {
  return (
    <article className="relative h-[280px] xs:h-[290px] sm:h-[327px] w-[140px] xs:w-[155px] sm:w-[178px] overflow-hidden rounded-[8px] border border-white/10 bg-[#15181D]">
      <Image
        src={item.image}
        alt={item.name.replace(/\n/g, " ")}
        fill
        sizes="(max-width: 640px) 140px, 178px"
        className="object-cover object-top"
      />

      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#15181D]/10 to-[#15181D]" />

      <div className="absolute bottom-[12px] sm:bottom-[20px] left-0 right-0 px-2 sm:px-[12px] text-center">
        <h3 className="whitespace-pre-line text-[11px] xs:text-xs sm:text-[14px] font-bold leading-tight sm:leading-[18px] text-white">
          {item.name}
        </h3>

        <p className="mt-[6px] sm:mt-[11px] whitespace-pre-line text-[8px] xs:text-[9px] sm:text-[10px] font-light leading-snug sm:leading-[15px] text-[#B1A393] opacity-80">
          {item.role}
        </p>

        <p className="mt-[6px] sm:mt-[10px] text-[9px] xs:text-[10px] sm:text-[11px] font-medium text-[#B1A393]">
          {item.years}
        </p>
      </div>
    </article>
  );
}

function QuickActions() {
  return (
    <section className="h-auto min-h-[245px] w-full rounded-[15px] bg-[#000D1C] px-4 sm:px-[20px] py-[15px] sm:py-[12px]">
      <h2 className="text-[18px] sm:text-[20px] font-semibold uppercase tracking-[0.5px] text-white">
        Quick Actions
      </h2>

      {/* Grid shifts to 1 column on extremely small viewports (xs/xxs mobile) to prevent text clipping */}
      <div className="mt-4 sm:mt-[22px] grid grid-cols-1 xs:grid-cols-2 gap-[8px]">
        {quickActions.map((action) => {
          const Icon = action.icon;

          return (
            <Link
              key={action.title}
              href={action.href}
              className="group flex flex-col justify-between h-auto min-h-[85px] sm:h-[79.33px] rounded-[7px] border-[0.67px] border-[#FFFFFF26] bg-[#181D22] p-[10px] transition duration-200 hover:border-[#D9B700]/60 hover:bg-[#1f252b]"
            >
              <Icon size={18} strokeWidth={2} className="text-[#858062] transition-colors group-hover:text-[#D9B700]" />

              <div>
                <h3 className="mt-[6px] sm:mt-[7px] text-[11px] font-bold text-[#D9B700]">
                  {action.title}
                </h3>

                <p className="mt-[2px] sm:mt-[4px] text-[10px] text-[#B1A393] leading-snug">
                  {action.text}
                </p>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}

function RegionStats() {
  return (
    <section className="h-auto min-h-[243px] w-full rounded-[15px] bg-[#000D1C] px-4 sm:px-[25px] py-[15px] sm:py-[12px]">
      <h2 className="text-[18px] sm:text-[20px] font-semibold uppercase tracking-[0.5px] text-white">
        By Region
      </h2>

      <div className="mt-4 sm:mt-[19px] space-y-[12px] sm:space-y-[14px]">
        {regions.map((region) => (
          /* Uses flexible percentage columns on mobile to ensure the progress bar is always visible and the layout never breaks */
          <div
            key={region.label}
            className="flex items-center justify-between gap-3 text-white"
          >
            <p className="w-[85px] sm:w-[110px] shrink-0 text-xs sm:text-[16px] font-medium truncate">
              {region.label}
            </p>

            <div className="flex-1 h-[7px] sm:h-[9px] overflow-hidden rounded-full bg-[#34404C]">
              <div
                className="h-full rounded-full bg-[#D9B700]"
                style={{ width: `${(region.value / region.max) * 100}%` }}
              />
            </div>

            <p className="w-[26px] shrink-0 text-right text-xs sm:text-[14px] font-medium text-[#B1A393]">
              {region.value}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}