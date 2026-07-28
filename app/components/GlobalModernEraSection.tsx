"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import ScrollReveal from "./animations/ScrollReveal";

type RegionId =
  | "all"
  | "uk"
  | "africa"
  | "american-caribbean"
  | "global";

type GlobalFigure = {
  id: string;
  name: string;
  years: string;
  description: string;
  image: string;
  region: Exclude<RegionId, "all">;
};

const filters: { id: RegionId; label: string }[] = [
  { id: "all", label: "All Region" },
  { id: "uk", label: "UK & Manchester" },
  { id: "africa", label: "Africa" },
  { id: "american-caribbean", label: "American & Caribbean" },
  { id: "global", label: "Global" },
];

const figures: GlobalFigure[] = [
  {
    id: "nelson-mandela",
    name: "Nelson Mandela",
    years: "1918–2013",
    description:
      "Global symbol of resilience, reconciliation and principled leadership.",
    image: "/home/profile/nelson.png",
    region: "africa",
  },
  {
    id: "maya-angelou",
    name: "Maya Angelou",
    years: "1928–2014",
    description:
      "Poet and memoirist whose words continue to empower across generations.",
    image: "/home/profile/maya.png",
    region: "american-caribbean",
  },
  {
    id: "wangari-maathai",
    name: "Wangari Maathai",
    years: "1940–2011",
    description:
      "Environmental leader and Nobel laureate whose work inspired global change.",
    image: "/home/profile/maathai.png",
    region: "africa",
  },
  {
    id: "lewis-hamilton",
    name: "Lewis Hamilton",
    years: "Active",
    description:
      "Seven time World Champion and advocate for diversity in global sport.",
    image: "/home/profile/hamiltion.png",
    region: "uk",
  },
];

export default function GlobalModernEraSection() {
  const [activeRegion, setActiveRegion] = useState<RegionId>("all");

  const filteredFigures = useMemo(() => {
    if (activeRegion === "all") return figures;

    return figures.filter((figure) => figure.region === activeRegion);
  }, [activeRegion]);

  return (
    <ScrollReveal as="section" className="w-full border-y-[0.5px] border-black/10 bg-[#F8F4EA] py-[70px]">
      <div className="mx-auto w-full max-w-[1440px] px-6 sm:px-10 lg:px-[50px]">
        {/* Heading */}
        <header className="max-w-[860px]">
          <div className="flex items-center gap-4 text-[#96701C]">
            <span className="font-serif text-[32px] italic leading-none">
              V
            </span>

            <p className="text-[24px] font-semibold uppercase tracking-[0.02em]">
              Global Modern Era
            </p>
          </div>

          <h2 className="mt-8 text-[clamp(52px,5vw,74px)] font-bold leading-[1.05] tracking-[-0.035em] text-[#15110E]">
            Global Inspiration
          </h2>

          <p className="mt-7 max-w-[820px] text-[clamp(20px,1.8vw,28px)] leading-[1.55] text-[#5B5B58]">
            20th 21st century influence. Illustrated portraits only, in keeping
            with an interpretive, non-photographic archive style.
          </p>
        </header>

        {/* Region filters */}
        <div className="mt-10 flex flex-wrap items-center gap-3 border-y border-black/10 py-5">
          <span className="mr-1 shrink-0 font-serif text-[13px] italic text-[#96701C]">
            Filter by
          </span>

          {filters.map((filter) => {
            const isActive = activeRegion === filter.id;

            return (
              <button
                key={filter.id}
                type="button"
                onClick={() => setActiveRegion(filter.id)}
                className={[
                  "h-[42px] rounded-full border px-6 text-[14px] font-medium uppercase tracking-[0.03em] transition",
                  isActive
                    ? "border-[#D9B700] bg-[#15110E] text-[#D9B700]"
                    : "border-black/15 bg-transparent text-[#5B5B58] hover:border-[#D9B700]/60 hover:text-[#96701C]",
                ].join(" ")}
              >
                {filter.label}
              </button>
            );
          })}
        </div>

        {/* Cards */}
        <div className="mt-8 grid grid-cols-1 gap-[45px] sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filteredFigures.map((figure) => (
            <GlobalFigureCard key={figure.id} figure={figure} />
          ))}
        </div>

        {/* Empty state */}
        {filteredFigures.length === 0 && (
          <div className="mt-12 flex min-h-[240px] items-center justify-center rounded-lg border border-black/10">
            <p className="text-lg text-[#66625E]">
              No inductees available for this region yet.
            </p>
          </div>
        )}
      </div>
    </ScrollReveal>
  );
}

function GlobalFigureCard({ figure }: { figure: GlobalFigure }) {
  return (
    <article className="plaque-card mx-auto flex h-[393px] w-full max-w-[248px] flex-col overflow-hidden rounded-lg bg-[linear-gradient(205.51deg,#281C10_4.55%,#111419_38.62%)] pb-[25px]">
      {/* Image */}
      <div className="relative h-[220px] w-full shrink-0 overflow-hidden">
        <Image
          src={figure.image}
          alt={figure.name}
          fill
          sizes="248px"
          className="object-cover object-top"
        />

        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#111419]/40" />
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col items-center px-5 pt-6 text-center">
        <h3 className="text-[20px] font-semibold uppercase leading-tight text-white">
          {figure.name}
        </h3>

        <p className="mt-3 text-[14px] uppercase text-[#BFB2A3]">
          {figure.years}
        </p>

        <p className="mt-5 text-[12px] leading-[1.65] text-[#F0EAE4]">
          {figure.description}
        </p>
      </div>
    </article>
  );
}