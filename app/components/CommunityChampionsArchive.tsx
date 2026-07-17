import Image from "next/image";
import Link from "next/link";
import { ChevronDown } from "lucide-react";

type Champion = {
  id: string;
  name: string;
  award: string;
  description: string;
  category: string;
  image: string;
  year: string;
  quote?: string;
};

const champions: Champion[] = [
  {
    id: "wayne-bennett",
    name: "Wayne Bennett",
    award: "GMBTE AFRICA4U EMPLOYABILITY & WORKFORCE IMPACT AWARD",
    description:
      "Recognized for improving access to employment by connecting skills, opportunity, and real workforce pathways across Greater Manchester.",
    category: "Employability & Workforce Impact",
    image: "/events/Image (1).png",
    year: "2026",
    quote:
      "This award reminds me that creating access to opportunity can change lives.",
  },
  {
    id: "esther-aluko",
    name: "Esther Aluko",
    award: "GMBTE AFRICA4U COMMUNITY COACH & MENTOR AWARD",
    description:
      "Recognized for guiding individuals through mentorship and coaching, connecting skills, and opportunity across Greater Manchester.",
    category: "Community Coach & Mentor",
    image: "/events/Image (2).png",
    year: "2026",
  },
  {
    id: "samantha-lubanzu",
    name: "Samantha Lubanzu",
    award: "GMBTE AFRICA4U COMMUNITY MENTOR & LEADERSHIP AWARD",
    description:
      "Recognized for leading through mentorship and service, nurturing confidence, capability, and positive change across the community.",
    category: "Community Leadership",
    image: "/events/Image (3).png",
    year: "2026",
  },
  {
    id: "lewis-adeniregun",
    name: "Lewis Adeniregun",
    award: "GMBTE AFRICA4U LOCAL BUSINESS & ECONOMIC SUPPORT AWARD",
    description:
      "Recognized for strengthening local businesses and supporting economic growth within the community.",
    category: "Local Business Support",
    image: "/events/Container (3).png",
    year: "2026",
  },
  {
    id: "carol-ann-whitehead",
    name: "Carol Ann Whitehead",
    award: "GMBTE AFRICA4U LIFETIME ACHIEVEMENT AWARD",
    description:
      "Recognized for a lifetime of service, leadership, and a long lasting impact within the community. She's a huge inspiration to all.",
    category: "Lifetime Achievement",
    image: "/events/Image (4).png",
    year: "2026",
  },
  {
    id: "ngozi-weller",
    name: "Ngozi Weller",
    award: "GMBTE AFRICA4U HEALTH, WELLBEING & SOCIAL IMPACT AWARD",
    description:
      "Recognized for advancing health, wellbeing, and positive social impact within the community.",
    category: "Health & Social Impact",
    image: "/events/Image (5).png",
    year: "2026",
  },
  {
    id: "mary-temiloluwa-ogunrewo",
    name: "Mary Temiloluwa Ogunrewo",
    award: "GMBTE AFRICA4U EMERGING TECH TALENT AWARD",
    description:
      "Recognized for demonstrating exceptional innovation, skill, and promise in technology, shaping the future of Africa's digital landscapes.",
    category: "Emerging Tech Talent",
    image: "/events/Image (6).png",
    year: "2026",
  },
  {
    id: "daniel-jimoh",
    name: "Daniel Jimoh",
    award: "GMBTE AFRICA4U STUDENT EXCELLENCE IN DATA & AI AWARD",
    description:
      "Recognized for outstanding achievement and innovation in Data and AI, advancing knowledge and driving impactful solutions in the digital era.",
    category: "Student Excellence Data & AI",
    image: "/events/Image (7).png",
    year: "2026",
  },
  {
    id: "donna-sergeant",
    name: "Donna Sergeant",
    award: "GMBTE AFRICA4U HERITAGE ADVOCACY & SOCIAL IMPACT AWARD",
    description:
      "Recognized for championing heritage preservation and driving positive social impact within communities across Africa.",
    category: "Heritage Advocacy & Social Impact",
    image: "/events/Image (8).png",
    year: "2026",
  },
  {
    id: "leone-shaw-brown-heritage",
    name: "Leone Shaw-Brown",
    award: "GMBTE AFRICA4U HERITAGE & JUSTICE ADVOCACY AWARD",
    description:
      "Recognized for promoting heritage preservation and advancing justice through impactful advocacy across communities in Africa.",
    category: "Heritage & Justice Advocacy",
    image: "/events/Image (8).png",
    year: "2026",
  },
  {
    id: "paul-obinna",
    name: "Paul Obinna",
    award: "GMBTE AFRICA4U CULTURAL INNOVATION & DIGITAL ENGAGEMENT",
    description:
      "Recognized for driving cultural innovation and harnessing digital engagement to inspire, connect, and empower communities across Africa.",
    category: "Cultural Innovation & Digital Engagement",
    image: "/events/Image (9).png",
    year: "2026",
  },
  {
    id: "leone-shaw-brown-global",
    name: "Leone Shaw-Brown",
    award: "GMBTE AFRICA4U GLOBAL CHANGE MAKER AWARD",
    description:
      "Recognized for creating transformative impact and driving positive change on a global scale through leadership, innovation, and vision.",
    category: "Global Change Maker",
    image: "/events/Image (10).png",
    year: "2026",
  },
  {
    id: "lisa-rees-odonnell",
    name: "Lisa Rees-O'Donnell",
    award: "GMBTE AFRICA4U ALLY CHAMPION AWARD",
    description:
      "In recognition of outstanding commitment to advancing inclusion, equity, and opportunity for Black communities.",
    category: "Ally Champion",
    image: "/events/Image (12).png",
    year: "2026",
  },
];

export default function CommunityChampionsArchive() {
  return (
    <section
      className="
        relative w-full overflow-hidden
        bg-[linear-gradient(180deg,#081420_0%,#060F18_100%)]
        px-6 py-[70px]
        sm:px-10
        lg:px-[50px]
      "
    >
      {/* Background glows */}
      <div
        className="
          pointer-events-none absolute inset-0
          bg-[radial-gradient(70.42%_85.42%_at_10%_90%,rgba(201,162,39,0.06)_0%,rgba(0,0,0,0)_55%),radial-gradient(86.07%_105.92%_at_78%_18%,rgba(201,162,39,0.10)_0%,rgba(0,0,0,0)_60%)]
        "
      />

      <div className="relative z-10 mx-auto w-full max-w-[1440px]">
        {/* Header */}
        <header className="max-w-[900px]">
          <div className="flex items-center gap-3 text-[#D9B700]">
            <span className="font-serif text-[26px] italic leading-none">
              VI.
            </span>

            <p className="text-[20px] font-semibold uppercase">
              Contemporary Archive
            </p>
          </div>

          <h2 className="mt-7 text-[clamp(42px,4.8vw,66px)] font-bold leading-none tracking-[-0.03em] text-white">
            Community Champions
          </h2>

          <p className="mt-6 max-w-[850px] text-[17px] leading-[1.6] text-[#9B9691]">
            History does not end with icons. It continues through entrepreneurs,
            technologists, mentors, and youth leaders every graduate, every
            speaker, every innovator shaping the future now.
          </p>
        </header>

        {/* Cards */}
        <div className="mt-16 flex flex-col gap-8">
          {champions.map((champion, index) => (
            <ChampionCard
              key={champion.id}
              champion={champion}
              imageOnLeft={index % 2 === 0}
            />
          ))}
        </div>

        {/* CTA */}
        <div className="mt-14 flex justify-center">
          <Link
            href="/dashboard/nominations"
            className="inline-flex h-[52px] items-center justify-center gap-2 rounded-lg bg-[#D9B700] px-7 text-[17px] font-semibold text-[#000D1C] transition hover:bg-[#E4C300]"
          >
            Nominate a Changemaker
            <span aria-hidden="true">↓</span>
          </Link>
        </div>
      </div>
    </section>
  );
}

function ChampionCard({
  champion,
  imageOnLeft,
}: {
  champion: Champion;
  imageOnLeft: boolean;
}) {
  return (
    <article
      className="
        relative grid w-full overflow-hidden
        rounded-[16px]
        border border-[#D9B700]/15
        bg-[linear-gradient(230.34deg,#281C10_6.93%,#111419_64.47%)]
        shadow-[0_10px_15px_-3px_rgba(0,0,0,0.10),0_4px_6px_-4px_rgba(0,0,0,0.10)]
        lg:h-[750px]
        lg:grid-cols-2
      "
    >
      {/* Ribbon stays on content side */}
      <YearRibbon
        year={champion.year}
        side={imageOnLeft ? "right" : "left"}
      />

      {/* Image */}
      <div
        className={[
          "relative min-h-[400px] overflow-hidden lg:min-h-0",
          imageOnLeft ? "lg:order-1" : "lg:order-2",
        ].join(" ")}
      >
        <Image
          src={champion.image}
          alt={champion.name}
          fill
          sizes="(max-width: 1024px) 100vw, 670px"
          className="object-cover object-center"
        />

        <div
          className={[
            "pointer-events-none absolute inset-0 hidden lg:block",
            imageOnLeft
              ? "bg-gradient-to-r from-transparent via-transparent to-[#111419]/20"
              : "bg-gradient-to-l from-transparent via-transparent to-[#111419]/20",
          ].join(" ")}
        />
      </div>

      {/* Content */}
      <div
        className={[
          "relative flex flex-col justify-center px-8 py-12 sm:px-10 lg:px-12 xl:px-[45px]",
          imageOnLeft ? "lg:order-2" : "lg:order-1",
        ].join(" ")}
      >
        <div className="max-w-[510px]">
          <p className="text-[17px] font-bold uppercase leading-[1.35] text-[#BFB2A3]">
            {champion.award}
          </p>

          <h3 className="mt-8 text-[clamp(28px,2.4vw,38px)] font-bold leading-[1.05] text-white">
            {champion.name}
          </h3>

          <p className="mt-4 text-[15px] leading-[1.5] text-[#A9A39E]">
            {champion.description}
          </p>

          <p className="mt-5 text-[12px] font-medium text-[#BFB2A3]">
            {champion.category}
          </p>

          <Link
            href={`/hall-of-fame/champions/${champion.id}`}
            className="mt-7 inline-flex items-center gap-2 text-[13px] font-semibold text-[#D9B700] transition hover:text-[#F0CE00]"
          >
            Read full story
            <ChevronDown size={14} strokeWidth={2} />
          </Link>

          {champion.quote && (
            <blockquote className="mt-8 rounded-md border-l-[3px] border-[#D9B700] bg-[#D9B700]/[0.06] px-5 py-4 text-[13px] italic leading-[1.5] text-[#E8E1DA]">
              “{champion.quote}”
            </blockquote>
          )}
        </div>
      </div>
    </article>
  );
}

type YearRibbonProps = {
  year: string;
  side?: "left" | "right";
};

function YearRibbon({
  year,
  side = "right",
}: YearRibbonProps) {
  return (
    <div
      className={[
        "absolute top-0 z-20",
        side === "right" ? "right-6" : "left-6",
      ].join(" ")}
    >
      <svg
        width="58"
        height="70"
        viewBox="0 0 58 70"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          d="M0 -10H58V70L29 48.6441L0 70V-10Z"
          fill="#D7263D"
        />

        <text
          x="29"
          y="26"
          textAnchor="middle"
          fill="#ffffff"
          fontSize="16"
          fontWeight="800"
        >
          {year}
        </text>
      </svg>
    </div>
  );
}