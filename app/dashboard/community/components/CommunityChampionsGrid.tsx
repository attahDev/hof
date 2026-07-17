"use client";

import Image from "next/image";
import {
  ChevronDown,
  ChevronUp,
  Heart,
  Search,
} from "lucide-react";
import { useMemo, useState } from "react";

type Champion = {
  id: string;
  name: string;
  title: string;
  impact: string;
  likes: string;
  image: string;
  category: string;
  ageGroup: string;
  region: string;
};

const champions: Champion[] = [
  {
    id: "wayne-bennett",
    name: "WAYNE BENNETT",
    title: "Employability & Workforce Impact",
    impact:
      "Recognized for improving access to employment by connecting skills, opportunity, and real workforce pathways across Greater Manchester.",
    likes: "125",
    image: "/com1/com1.png",
    category: "Employability",
    ageGroup: "Adult",
    region: "Manchester",
  },
  {
    id: "esther-aluko",
    name: "ESTHER ALUKO",
    title: "Community Coach & Mentor",
    impact:
      "Recognized for guiding individuals through mentorship and coaching, connecting skills, and opportunity across Greater Manchester.",
    likes: "15",
    image: "/com1/com2.png",
    category: "Mentorship",
    ageGroup: "Adult",
    region: "Manchester",
  },
  {
    id: "samantha-lubanzu",
    name: "SAMANTHA LUBANZU",
    title: "Community Leadership",
    impact:
      "Recognized for leading through mentorship and service nurturing confidence, capability, and positive change across the community.",
    likes: "700",
    image: "/com1/com3.png",
    category: "Leadership",
    ageGroup: "Adult",
    region: "Manchester",
  },
  {
    id: "lewis-adeniregun",
    name: "LEWIS ADENIREGUN",
    title: "Local Business Support",
    impact:
      "Recognized for strengthening local businesses and supporting economic growth within the community.",
    likes: "125",
    image: "/com1/com4.png",
    category: "Business",
    ageGroup: "Adult",
    region: "Manchester",
  },
  {
    id: "carol-ann-whitehead",
    name: "CAROL ANN WHITEHEAD",
    title: "Lifetime Achievement (Education & Institutional Leadership)",
    impact:
      "Recognized for a lifetime of service, leadership & impact within the community. She’s a huge inspiration to all.",
    likes: "15",
    image: "/com1/com5.png",
    category: "Education",
    ageGroup: "Adult",
    region: "Manchester",
  },
  {
    id: "ngozi-weller",
    name: "NGOZI WELLER",
    title: "Health & Social Impact",
    impact:
      "Recognized for advancing health, wellbeing, and positive social impact within the community.",
    likes: "700",
    image: "/com1/com6.png",
    category: "Health",
    ageGroup: "Adult",
    region: "Manchester",
  },
  {
    id: "daniel-jimoh",
    name: "DANIEL JIMOH",
    title: "Student Excellence Data & AI",
    impact:
      "Recognized for outstanding achievement and innovation in Data and AI, advancing knowledge and driving impactful solutions in the digital era.",
    likes: "125",
    image: "/com1/com7.png",
    category: "Technology",
    ageGroup: "Youth",
    region: "Manchester",
  },
  {
    id: "donna-sergeant",
    name: "DONNA SERGEANT",
    title: "Heritage Advocacy & Social Impact",
    impact:
      "Recognized for championing heritage preservation and driving positive social impact within communities across Africa.",
    likes: "15",
    image: "/com1/Image (11).png",
    category: "Heritage",
    ageGroup: "Adult",
    region: "Africa",
  },
  {
    id: "leone-shaw-brown",
    name: "LEONE SHAW-BROWN",
    title: "Heritage & Justice Advocacy",
    impact:
      "Recognized for promoting heritage preservation and advancing justice through impactful advocacy across communities in Africa.",
    likes: "700",
    image: "/com1/com9.png",
    category: "Heritage",
    ageGroup: "Adult",
    region: "Africa",
  },
  {
    id: "paul-obinna",
    name: "PAUL OBINNA",
    title: "Cultural Innovation & Digital Engagement",
    impact:
      "Recognized for driving cultural innovation and harnessing digital engagement to inspire, connect, and empower communities across Africa.",
    likes: "125",
    image: "/com1/com10.png", // Matches image 4 in screenshot (bottom left)
    category: "Technology",
    ageGroup: "Adult",
    region: "Africa",
  },
  {
    id: "leone-shaw-brown-global",
    name: "LEONE SHAW-BROWN",
    title: "Global Change Maker",
    impact:
      "Recognized for creating transformative impact and driving positive change on a global scale through leadership, innovation, and vision.",
    likes: "15",
    image: "/com1/com11.png", // Matches image 5 in screenshot (bottom center)
    category: "Leadership",
    ageGroup: "Adult",
    region: "Africa",
  },
  {
    id: "lisa-rees-odonnell",
    name: "LISA REES-O'DONNELL",
    title: "Cultural Innovation & Digital Engagement",
    impact:
      "In recognition of outstanding commitment to advancing inclusion, equity, and opportunity for Black communities.",
    likes: "700",
    image: "/com1/com12.png", // Matches image 6 in screenshot (bottom right)
    category: "Education",
    ageGroup: "Adult",
    region: "Manchester",
  }
];

const categories = [
  "All Categories",
  "Employability",
  "Mentorship",
  "Leadership",
  "Business",
  "Education",
  "Health",
  "Technology",
  "Heritage",
];

const ageGroups = ["All Age Groups", "Youth", "Adult"];

const regions = [
  "All Regions",
  "Manchester",
  "UK",
  "Africa",
  "Caribbean",
];

const INITIAL_VISIBLE_COUNT = 6;

export default function CommunityChampionsGrid() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All Categories");
  const [ageGroup, setAgeGroup] = useState("All Age Groups");
  const [region, setRegion] = useState("All Regions");
  const [showAll, setShowAll] = useState(false);

  const filteredChampions = useMemo(() => {
    return champions.filter((champion) => {
      const query = search.trim().toLowerCase();

      const matchesSearch =
        !query ||
        champion.name.toLowerCase().includes(query) ||
        champion.title.toLowerCase().includes(query) ||
        champion.impact.toLowerCase().includes(query);

      const matchesCategory =
        category === "All Categories" ||
        champion.category === category;

      const matchesAge =
        ageGroup === "All Age Groups" ||
        champion.ageGroup === ageGroup;

      const matchesRegion =
        region === "All Regions" ||
        champion.region === region;

      return (
        matchesSearch &&
        matchesCategory &&
        matchesAge &&
        matchesRegion
      );
    });
  }, [search, category, ageGroup, region]);

  const hasActiveFilters =
    search.trim() !== "" ||
    category !== "All Categories" ||
    ageGroup !== "All Age Groups" ||
    region !== "All Regions";

  const visibleChampions =
    showAll || hasActiveFilters
      ? filteredChampions
      : filteredChampions.slice(0, INITIAL_VISIBLE_COUNT);

  const canToggleView =
    !hasActiveFilters &&
    filteredChampions.length > INITIAL_VISIBLE_COUNT;

  return (
    <section className="mt-8 w-full">
      {/* ==========================================
          SEARCH + FILTERS
      ========================================== */}
      <div className="flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between">
        {/* Search */}
        <div className="relative w-full xl:max-w-[357px]">
          <Search
            size={16}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-[#6B7280]"
          />

          <input
            value={search}
            onChange={(event) => {
              setSearch(event.target.value);
              setShowAll(false);
            }}
            placeholder="Search by name or impact..."
            className="
              h-[48px]
              w-full
              rounded-lg
              border
              border-[#C2B2B2]
              bg-transparent
              pl-11
              pr-4
              text-sm
              text-[#111419]
              outline-none
              transition
              placeholder:text-[#6B7280]
              focus:border-[#D7263D]
            "
          />
        </div>

        {/* Filters */}
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-3 xl:flex xl:gap-4">
          <FilterSelect
            value={category}
            onChange={(value) => {
              setCategory(value);
              setShowAll(false);
            }}
            options={categories}
          />

          <FilterSelect
            value={ageGroup}
            onChange={(value) => {
              setAgeGroup(value);
              setShowAll(false);
            }}
            options={ageGroups}
          />

          <FilterSelect
            value={region}
            onChange={(value) => {
              setRegion(value);
              setShowAll(false);
            }}
            options={regions}
          />
        </div>
      </div>

      {/* ==========================================
          CHAMPIONS GRID
          - Uses flex-like auto-fit tracks on large screens 
          - Scales beautifully from mobile to ultra-wide
      ========================================== */}
      {visibleChampions.length > 0 ? (
        <div
          className="
            mt-8
            grid
            grid-cols-1
            gap-6
            sm:grid-cols-2
            lg:grid-cols-3
            xl:gap-8
            2xl:grid-cols-3
          "
        >
          {visibleChampions.map((champion) => (
            <ChampionCard
              key={champion.id}
              champion={champion}
            />
          ))}
        </div>
      ) : (
        <div className="mt-8 flex h-60 items-center justify-center rounded-[15px] border border-black/10 bg-white/40 px-5 text-center text-base font-semibold text-[#111419]">
          No community champions found.
        </div>
      )}

      {/* ==========================================
          VIEW ALL / SHOW LESS
      ========================================== */}
      {canToggleView && (
        <div className="mt-12 flex justify-center sm:mt-14">
          <button
            type="button"
            onClick={() => {
              setShowAll((prev) => !prev);

              if (showAll) {
                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                });
              }
            }}
            className="
              flex
              h-[55px]
              items-center
              justify-center
              gap-2
              rounded-md
              border
              border-[#D7263D]
              bg-[linear-gradient(205.51deg,#FFFFFF_4.55%,#F5EBE1_38.62%)]
              px-8
              text-base
              font-bold
              uppercase
              text-[#000D1C]
              transition-all
              duration-200
              hover:bg-[#D7263D]
              hover:text-white
              sm:text-lg
            "
          >
            {showAll ? (
              <>
                Show Less
                <ChevronUp size={20} />
              </>
            ) : (
              <>
                View All Champions
                <ChevronDown size={20} />
              </>
            )}
          </button>
        </div>
      )}
    </section>
  );
}

/* ==================================================
   FILTER SELECT
================================================== */

function FilterSelect({
  value,
  onChange,
  options,
}: {
  value: string;
  onChange: (value: string) => void;
  options: string[];
}) {
  return (
    <div className="relative w-full xl:w-auto">
      <select
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="
          h-[48px]
          w-full
          appearance-none
          rounded-lg
          border
          border-[#C2B2B2]
          bg-[#F8F4EA]
          px-4
          pr-10
          text-sm
          font-semibold
          text-[#111419]
          outline-none
          transition
          focus:border-[#D7263D]
          xl:min-w-[180px]
        "
      >
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>

      <ChevronDown
        size={18}
        className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[#111419]"
      />
    </div>
  );
}

/* ==================================================
   CHAMPION CARD
================================================== */

function ChampionCard({
  champion,
}: {
  champion: Champion;
}) {
  return (
    <article
      className="
        group
        relative
        flex
        h-[480px]
        w-full
        flex-col
        overflow-hidden
        rounded-[15px]
        border
        border-white/10
        bg-[linear-gradient(205.51deg,#282610_4.55%,#111419_38.62%)]
        transition-all
        duration-300
        ease-out
        hover:-translate-y-1.5
        hover:border-white/20
        hover:shadow-xl
      "
    >
      {/* ==========================================
          IMAGE
      ========================================== */}
      <div className="relative h-[290px] w-full shrink-0 overflow-hidden sm:h-[300px] lg:h-[295px] xl:h-[305px]">
        <Image
          src={champion.image}
          alt={champion.name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 450px"
          className="
            object-cover
            object-top
            transition-transform
            duration-500
            ease-out
            group-hover:scale-[1.03]
          "
        />

        {/* Dark image blend */}
        <div
          className="pointer-events-none absolute inset-0 z-10"
          style={{
            background:
              "linear-gradient(180deg, rgba(17,20,25,0) 42%, rgba(17,20,25,0.08) 58%, rgba(17,20,25,0.65) 82%, #111419 100%)",
          }}
        />
      </div>

      {/* ==========================================
          TEXT CONTENT
      ========================================== */}
      <div className="relative flex min-h-0 flex-1 flex-col px-5 pb-5 sm:px-6">
        <h3 className="-mt-[16px] relative z-20 text-[20px] sm:text-[22px] lg:text-[23px] font-bold uppercase leading-snug tracking-tight text-white">
          {champion.name}
        </h3>

        <p className="mt-1.5 text-xs sm:text-[14px] font-medium leading-[19px] text-[#B1A393]">
          {champion.title}
        </p>

        <p
          className="
            mt-3
            line-clamp-3
            text-xs
            font-normal
            leading-relaxed
            text-[#CFC8BF]
          "
        >
          {champion.impact}
        </p>
      </div>

      {/* ==========================================
          AWARD RIBBON
      ========================================== */}
      <div
        className="
          absolute
          bottom-[16px]
          left-0
          z-20
          flex
          h-[35px]
          w-[84px]
          flex-col
          justify-center
          bg-[#E92243]
          pl-[10px]
          text-white
        "
        style={{
          clipPath:
            "polygon(0 0, 100% 0, 78% 50%, 100% 100%, 0 100%)",
        }}
      >
        <span className="text-[10px] font-semibold leading-none">
          2026
        </span>

        <span className="mt-[2px] text-[7.5px] font-bold uppercase leading-none">
          Awards
        </span>
      </div>

      {/* ==========================================
          LIKES
      ========================================== */}
      <div className="absolute bottom-[20px] right-[24px] z-20 flex items-center gap-[6px] text-[#B1A393]">
        <Heart
          size={20}
          strokeWidth={1.7}
        />

        <span className="text-[13px] font-medium">
          {champion.likes}
        </span>
      </div>
    </article>
  );
}