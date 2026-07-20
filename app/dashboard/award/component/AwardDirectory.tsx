"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronDown, ChevronRight, Search } from "lucide-react";
import { useMemo, useState } from "react";

type AwardCategory =
  | "All Awards"
  | "Innovation"
  | "Leadership"
  | "Education"
  | "Community Impact"
  | "Technology"
  | "Arts & Culture"
  | "Sustainability"
  | "Heritage"
  | "Employability"
  | "Mentorship"
  | "Business";

type Award = {
  id: string;
  title: string;
  description: string;
  recipient: string;
  category: Exclude<AwardCategory, "All Awards">;
  year: string;
  region: string;
  image: string;
};

const categories: AwardCategory[] = [
  "All Awards",
  "Innovation",
  "Leadership",
  "Education",
  "Community Impact",
  "Technology",
  "Arts & Culture",
  "Sustainability",
  "Heritage",
  "Employability",
  "Mentorship",
  "Business",
];

const years = ["All Years", "2026", "2025", "2024"];
const regions = ["All Regions", "Global", "UK & Manchester", "Africa", "America"];

// Fully integrated list of all 12 of your actual awardees!
const awards: Award[] = [
  {
    id: "wayne-bennett-award",
    title: "Employability & Workforce Impact",
    description: "Improving access to employment, skills, and workforce pathways.",
    recipient: "Wayne Bennett",
    category: "Employability",
    year: "2026",
    region: "UK & Manchester",
    image: "/com1/com1.png",
  },
  {
    id: "esther-aluko-award",
    title: "Community Coach & Mentor Award",
    description: "Guiding individuals through developmental mentorship and coaching.",
    recipient: "Esther Aluko",
    category: "Mentorship",
    year: "2026",
    region: "UK & Manchester",
    image: "/com1/com2.png",
  },
  {
    id: "samantha-lubanzu-award",
    title: "Community Leadership Excellence",
    description: "Nurturing confidence, capability, and positive grassroots change.",
    recipient: "Samantha Lubanzu",
    category: "Leadership",
    year: "2026",
    region: "UK & Manchester",
    image: "/com1/com3.png",
  },
  {
    id: "lewis-adeniregun-award",
    title: "Local Business Support Award",
    description: "Strengthening local businesses and supporting neighborhood economic growth.",
    recipient: "Lewis Adeniregun",
    category: "Business",
    year: "2026",
    region: "UK & Manchester",
    image: "/com1/com4.png",
  },
  {
    id: "carol-ann-whitehead-award",
    title: "Lifetime Achievement Award",
    description: "A lifetime of education, service, and institutional leadership.",
    recipient: "Carol Ann Whitehead",
    category: "Education",
    year: "2026",
    region: "UK & Manchester",
    image: "/com1/com5.png",
  },
  {
    id: "ngozi-weller-award",
    title: "Health & Social Impact Award",
    description: "Advancing health, wellbeing, and social initiatives.",
    recipient: "Ngozi Weller",
    category: "Sustainability",
    year: "2026",
    region: "UK & Manchester",
    image: "/com1/com6.png",
  },
  {
    id: "daniel-jimoh-award",
    title: "Student Excellence in Data & AI",
    description: "Outstanding achievement, research, and innovation in Data and AI.",
    recipient: "Daniel Jimoh",
    category: "Technology",
    year: "2026",
    region: "UK & Manchester",
    image: "/com1/com7.png",
  },
  {
    id: "donna-sergeant-award",
    title: "Heritage Advocacy & Social Impact",
    description: "Championing heritage preservation and driving positive social actions.",
    recipient: "Donna Sergeant",
    category: "Heritage",
    year: "2026",
    region: "Africa",
    image: "/com1/com8.png",
  },
  {
    id: "leone-shaw-brown-heritage",
    title: "Heritage & Justice Advocacy Award",
    description: "Promoting heritage preservation and advancing societal justice.",
    recipient: "Leone Shaw-Brown",
    category: "Heritage",
    year: "2026",
    region: "Africa",
    image: "/com1/com9.png",
  },
  {
    id: "paul-obinna-award",
    title: "Cultural Innovation & Digital Engagement",
    description: "Harnessing digital engagement to inspire, connect, and empower.",
    recipient: "Paul Obinna",
    category: "Technology",
    year: "2026",
    region: "Africa",
    image: "/com1/com10.png",
  },
  {
    id: "leone-shaw-brown-global",
    title: "Global Change Maker Award",
    description: "Creating transformative community impact and vision on a global scale.",
    recipient: "Leone Shaw-Brown",
    category: "Leadership",
    year: "2026",
    region: "Africa",
    image: "/com1/com11.png",
  },
  {
    id: "lisa-rees-odonnell-award",
    title: "Inclusion & Equity Excellence",
    description: "Outstanding commitment to advancing equity and opportunity.",
    recipient: "Lisa Rees-O'Donnell",
    category: "Education",
    year: "2026",
    region: "UK & Manchester",
    image: "/com1/com12.png",
  },
];

export default function AwardDirectory() {
  const [activeCategory, setActiveCategory] = useState<AwardCategory>("All Awards");
  const [search, setSearch] = useState("");
  const [year, setYear] = useState("All Years");
  const [region, setRegion] = useState("All Regions");
  const [page, setPage] = useState(1);

  const perPage = 5;

  const filteredAwards = useMemo(() => {
    return awards.filter((award) => {
      const q = search.trim().toLowerCase();

      const matchesCategory =
        activeCategory === "All Awards" || award.category === activeCategory;

      const matchesSearch =
        !q ||
        award.title.toLowerCase().includes(q) ||
        award.recipient.toLowerCase().includes(q) ||
        award.description.toLowerCase().includes(q);

      const matchesYear = year === "All Years" || award.year === year;

      const matchesRegion =
        region === "All Regions" ||
        award.region === region ||
        (region === "UK & Manchester" && award.region === "UK & Manchester");

      return matchesCategory && matchesSearch && matchesYear && matchesRegion;
    });
  }, [activeCategory, search, year, region]);

  const totalPages = Math.max(1, Math.ceil(filteredAwards.length / perPage));

  const paginatedAwards = filteredAwards.slice(
    (page - 1) * perPage,
    page * perPage
  );

  const resetPage = () => setPage(1);

  return (
    <section className="mt-8 px-4 sm:px-6 lg:px-0">
      
      {/* Scrollable Categories Navigation bar */}
      <div className="overflow-x-auto border-b border-[#D8CFC5] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        <div className="flex gap-6 sm:gap-9 pb-1">
          {categories.map((category) => {
            const isActive = activeCategory === category;

            return (
              <button
                key={category}
                type="button"
                onClick={() => {
                  setActiveCategory(category);
                  resetPage();
                }}
                className={[
                  "h-14 shrink-0 border-b-4 text-xs sm:text-sm lg:text-base font-semibold uppercase transition whitespace-nowrap",
                  isActive
                    ? "border-[#D7263D] text-[#D7263D]"
                    : "border-transparent text-[#111419] hover:text-[#D7263D]",
                ].join(" ")}
              >
                {category}
              </button>
            );
          })}
        </div>
      </div>

      {/* Inputs Filter Grid */}
      <div className="mt-7 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
        {/* Search */}
        <div className="relative w-full lg:max-w-[360px]">
          <Search
            size={18}
            className="absolute left-5 top-1/2 -translate-y-1/2 text-[#6B7280]"
          />

          <input
            value={search}
            onChange={(event) => {
              setSearch(event.target.value);
              resetPage();
            }}
            placeholder="Search award or recipient..."
            className="h-[50px] sm:h-[54px] w-full rounded-lg border border-[#C2B2B2] bg-transparent pl-14 pr-4 text-sm text-[#111419] outline-none placeholder:text-[#7B8494]"
          />
        </div>

        {/* Filter Dropdowns */}
        <div className="flex flex-col xs:flex-row gap-3 w-full lg:w-auto">
          <FilterSelect
            value={year}
            options={years}
            onChange={(value) => {
              setYear(value);
              resetPage();
            }}
          />
          <FilterSelect
            value={region}
            options={regions}
            onChange={(value) => {
              setRegion(value);
              resetPage();
            }}
          />
        </div>
      </div>

      {/* Directory Grid / Table Wrapper */}
      <div className="mt-8 rounded-[15px] bg-[#000D1C] px-4 py-6 sm:px-7 sm:py-8 overflow-hidden">
        
        {/* Widescreen Desktop Header Only */}
        <div className="hidden lg:grid lg:grid-cols-[2.5fr_1.5fr_1.2fr_0.8fr_1.2fr_1fr] items-center gap-4 text-sm font-bold uppercase text-[#B1A393] border-b border-[#FFFFFF1A] pb-4">
          <p>Award</p>
          <p>Recipient</p>
          <p>Category</p>
          <p className="text-center">Year</p>
          <p>Region</p>
          <p className="text-right">Action</p>
        </div>

        {/* Directory rows container */}
        <div className="mt-4 lg:mt-6 space-y-6 lg:space-y-6 divide-y divide-white/5 lg:divide-y-0">
          {paginatedAwards.map((award, index) => (
            <AwardRow key={award.id} award={award} isFirst={index === 0} />
          ))}
        </div>

        {paginatedAwards.length === 0 && (
          <div className="flex h-40 items-center justify-center text-sm sm:text-base text-white">
            No awards found.
          </div>
        )}
      </div>

      <Pagination page={page} totalPages={totalPages} onPageChange={setPage} />
    </section>
  );
}

function AwardRow({ award, isFirst }: { award: Award; isFirst: boolean }) {
  return (
    <div className={[
      "grid grid-cols-1 gap-3 lg:gap-4 items-center py-5 lg:py-0 lg:grid-cols-[2.5fr_1.5fr_1.2fr_0.8fr_1.2fr_1fr]",
      isFirst ? "pt-0" : ""
    ].join(" ")}>
      
      {/* Award & Description block */}
      <div className="flex items-center gap-4 sm:gap-5">
        <div className="relative h-12 w-12 sm:h-14 sm:w-14 shrink-0 overflow-hidden rounded-full border border-[#B1A393]">
          <Image
            src={award.image}
            alt={award.recipient}
            fill
            sizes="(max-width: 640px) 48px, 56px"
            className="object-cover object-top"
          />
        </div>

        <div className="min-w-0">
          <h3 className="text-sm sm:text-[15px] font-bold uppercase leading-snug text-white truncate">
            {award.title}
          </h3>
          <p className="mt-0.5 text-xs sm:text-sm text-white/70 truncate lg:whitespace-normal">
            {award.description}
          </p>
        </div>
      </div>

      {/* Recipient details */}
      <div className="flex lg:block justify-between items-center text-xs sm:text-[15px] text-white">
        <span className="font-semibold uppercase tracking-wider text-[#B1A393] text-[10px] lg:hidden">Recipient</span>
        <p className="font-bold lg:font-normal">{award.recipient}</p>
      </div>

      {/* Category details */}
      <div className="flex lg:block justify-between items-center text-xs sm:text-[15px] text-white">
        <span className="font-semibold uppercase tracking-wider text-[#B1A393] text-[10px] lg:hidden">Category</span>
        <p className="font-bold lg:font-normal">{award.category}</p>
      </div>

      {/* Year details */}
      <div className="flex lg:block justify-between items-center text-xs sm:text-[15px] text-white lg:text-center">
        <span className="font-semibold uppercase tracking-wider text-[#B1A393] text-[10px] lg:hidden">Year</span>
        <p className="font-bold lg:font-normal">{award.year}</p>
      </div>

      {/* Region details */}
      <div className="flex lg:block justify-between items-center text-xs sm:text-[15px] text-white">
        <span className="font-semibold uppercase tracking-wider text-[#B1A393] text-[10px] lg:hidden">Region</span>
        <p className="font-bold lg:font-normal">{award.region}</p>
      </div>

      {/* Action Button */}
      <div className="pt-2 lg:pt-0">
        <Link
          href="/dashboard/community"
          className="flex h-[38px] sm:h-[42px] lg:h-[46px] w-full lg:ml-auto lg:max-w-[100px] items-center justify-center rounded-lg bg-[#D7263D] text-xs sm:text-sm lg:text-base font-bold text-white transition hover:bg-[#D7263D]/90 active:scale-[0.98]"
        >
          View
        </Link>
      </div>
    </div>
  );
}

function FilterSelect({
  value,
  options,
  onChange,
}: {
  value: string;
  options: string[];
  onChange: (value: string) => void;
}) {
  return (
    <div className="relative w-full sm:w-auto">
      <select
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="h-[50px] sm:h-[54px] w-full sm:min-w-[180px] appearance-none rounded-lg border border-[#C2B2B2] bg-[#F5EBE1] px-4 pr-11 text-sm sm:text-base font-semibold text-[#111419] outline-none"
      >
        {options.map((option) => (
          <option key={option}>{option}</option>
        ))}
      </select>

      <ChevronDown
        size={20}
        className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[#000D1C]"
      />
    </div>
  );
}

function Pagination({
  page,
  totalPages,
  onPageChange,
}: {
  page: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}) {
  const pages = Array.from({ length: totalPages }, (_, index) => index + 1);

  return (
    <div className="mt-10 sm:mt-14 flex justify-center items-center gap-2 sm:gap-4">
      {pages.map((item) => (
        <button
          key={item}
          type="button"
          onClick={() => onPageChange(item)}
          className={[
            "h-10 w-10 sm:h-14 sm:w-14 rounded-md border text-sm sm:text-xl font-bold transition",
            page === item
              ? "border-[#D7263D] bg-[linear-gradient(205.51deg,#FFFFFF_4.55%,#F5EBE1_38.62%)] text-[#000D1C]"
              : "border-[#E9DCD3] text-[#7B7B7B]",
          ].join(" ")}
        >
          {item}
        </button>
      ))}

      {totalPages > 3 && (
        <span className="flex h-10 sm:h-14 items-center px-1.5 sm:px-3 text-sm sm:text-xl font-bold text-[#555]">
          ...
        </span>
      )}

      <button
        type="button"
        disabled={page >= totalPages}
        onClick={() => onPageChange(Math.min(page + 1, totalPages))}
        className="flex h-10 w-10 sm:h-14 sm:w-14 items-center justify-center rounded-md border border-[#E9DCD3] disabled:opacity-40 text-[#7B7B7B]"
      >
        <ChevronRight size={20} className="sm:size-[26px]" />
      </button>
    </div>
  );
}