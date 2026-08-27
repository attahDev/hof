"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import ScrollReveal from "./animations/ScrollReveal";

type Champion = {
  id: string;
  name: string;
  award: string;
  description: string;
  story: string;
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
    story:
      "He has supported employability programmes that have reached hundreds of individuals, providing career guidance, skills training, and employer connections. Through his impacts & efforts, many have progressed into internships, apprenticeships, and full time roles, strengthening individuals and the wider local workforce.",
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
    story:
      "She has mentored and coached countless individuals, helping them build confidence, sharpen their skills, and find meaningful pathways into work and leadership. Through one-to-one guidance and community programmes, she has connected people to opportunities that transform careers and strengthen Greater Manchester's talent pipeline.",
    category: "Community Coach & Mentor",
    image: "/events/Image (2).png",
    year: "2026",
    quote:
      "Mentorship is how we turn potential into progress — one conversation at a time.",
  },
  {
    id: "samantha-lubanzu",
    name: "Samantha Lubanzu",
    award: "GMBTE AFRICA4U COMMUNITY MENTOR & LEADERSHIP AWARD",
    description:
      "Recognized for leading through mentorship and service, nurturing confidence, capability, and positive change across the community.",
    story:
      "She has led through mentorship and service, creating spaces where people feel seen, supported, and equipped to grow. By nurturing confidence and capability in others, she has sparked lasting positive change across the community and inspired a new generation of leaders.",
    category: "Community Leadership",
    image: "/events/Image (3).png",
    year: "2026",
    quote: "True leadership is lifting others as you rise.",
  },
  {
    id: "lewis-adeniregun",
    name: "Lewis Adeniregun",
    award: "GMBTE AFRICA4U LOCAL BUSINESS & ECONOMIC SUPPORT AWARD",
    description:
      "Recognized for strengthening local businesses and supporting economic growth within the community.",
    story:
      "He has strengthened local businesses by opening doors to networks, resources, and practical support that help enterprises grow. His work has driven economic opportunity within the community, enabling founders and traders to build sustainable livelihoods and contribute to a thriving local economy.",
    category: "Local Business Support",
    image: "/events/Container (3).png",
    year: "2026",
    quote: "When local businesses thrive, the whole community rises with them.",
  },
  {
    id: "carol-ann-whitehead",
    name: "Carol Ann Whitehead",
    award: "GMBTE AFRICA4U LIFETIME ACHIEVEMENT AWARD",
    description:
      "Recognized for a lifetime of service, leadership, and a long lasting impact within the community. She's a huge inspiration to all.",
    story:
      "Across a lifetime of service and leadership, she has left a lasting imprint on the community — mentoring others, amplifying voices, and championing inclusion. Her dedication continues to inspire people of all ages to lead with purpose and create change that endures.",
    category: "Lifetime Achievement",
    image: "/events/Image (4).png",
    year: "2026",
    quote: "A life of service is the greatest legacy we can leave.",
  },
  {
    id: "ngozi-weller",
    name: "Ngozi Weller",
    award: "GMBTE AFRICA4U HEALTH, WELLBEING & SOCIAL IMPACT AWARD",
    description:
      "Recognized for advancing health, wellbeing, and positive social impact within the community.",
    story:
      "She has advanced health and wellbeing across the community through programmes that put people first — improving access to support, raising awareness, and driving social impact. Her efforts have helped individuals and families build healthier, more resilient lives.",
    category: "Health & Social Impact",
    image: "/events/Image (5).png",
    year: "2026",
    quote: "Wellbeing is the foundation on which every community thrives.",
  },
  {
    id: "mary-temiloluwa-ogunrewo",
    name: "Mary Temiloluwa Ogunrewo",
    award: "GMBTE AFRICA4U EMERGING TECH TALENT AWARD",
    description:
      "Recognized for demonstrating exceptional innovation, skill, and promise in technology, shaping the future of Africa's digital landscapes.",
    story:
      "She has demonstrated exceptional innovation and skill in technology, applying creativity and technical excellence to real-world challenges. As an emerging talent, she is already shaping digital landscapes and opening pathways for others who will follow in her footsteps.",
    category: "Emerging Tech Talent",
    image: "/events/Image (6).png",
    year: "2026",
    quote: "Innovation begins when we dare to build what doesn't exist yet.",
  },
  {
    id: "daniel-jimoh",
    name: "Daniel Jimoh",
    award: "GMBTE AFRICA4U STUDENT EXCELLENCE IN DATA & AI AWARD",
    description:
      "Recognized for outstanding achievement and innovation in Data and AI, advancing knowledge and driving impactful solutions in the digital era.",
    story:
      "He has achieved outstanding results in Data and AI, advancing knowledge and applying innovative approaches to solve meaningful problems. His work demonstrates how student excellence can drive impactful solutions and inspire peers across the digital era.",
    category: "Student Excellence Data & AI",
    image: "/events/Image (7).png",
    year: "2026",
    quote: "Data and AI are powerful when they serve people and communities.",
  },
  {
    id: "donna-sergeant",
    name: "Donna Sergeant",
    award: "GMBTE AFRICA4U HERITAGE ADVOCACY & SOCIAL IMPACT AWARD",
    description:
      "Recognized for championing heritage preservation and driving positive social impact within communities across Africa.",
    story:
      "She has championed heritage preservation while driving positive social impact across communities. Through advocacy and action, she has helped keep cultural identity alive and ensured that heritage remains a living force for connection, pride, and progress.",
    category: "Heritage Advocacy & Social Impact",
    image: "/events/Image (8).png",
    year: "2026",
    quote: "Preserving heritage is how we honour the past and empower the future.",
  },
  {
    id: "leone-shaw-brown-heritage",
    name: "Leone Shaw-Brown",
    award: "GMBTE AFRICA4U HERITAGE & JUSTICE ADVOCACY AWARD",
    description:
      "Recognized for promoting heritage preservation and advancing justice through impactful advocacy across communities in Africa.",
    story:
      "She has promoted heritage preservation and advanced justice through powerful advocacy across communities. By connecting cultural memory with the fight for fairness, she has helped ensure that history informs a more equitable future.",
    category: "Heritage & Justice Advocacy",
    image: "/events/Image (8).png",
    year: "2026",
    quote: "Justice and heritage walk hand in hand — both demand we remember and act.",
  },
  {
    id: "paul-obinna",
    name: "Paul Obinna",
    award: "GMBTE AFRICA4U CULTURAL INNOVATION & DIGITAL ENGAGEMENT",
    description:
      "Recognized for driving cultural innovation and harnessing digital engagement to inspire, connect, and empower communities across Africa.",
    story:
      "He has driven cultural innovation by harnessing digital platforms to inspire, connect, and empower communities. Through creative storytelling and digital engagement, he has brought culture to new audiences and strengthened bonds across Africa and beyond.",
    category: "Cultural Innovation & Digital Engagement",
    image: "/events/Image (9).png",
    year: "2026",
    quote: "Culture thrives when we innovate how we share it with the world.",
  },
  {
    id: "leone-shaw-brown-global",
    name: "Leone Shaw-Brown",
    award: "GMBTE AFRICA4U GLOBAL CHANGE MAKER AWARD",
    description:
      "Recognized for creating transformative impact and driving positive change on a global scale through leadership, innovation, and vision.",
    story:
      "She has created transformative impact on a global scale through leadership, innovation, and vision. Her work crosses borders and disciplines, driving positive change and proving that community-rooted leadership can influence the world.",
    category: "Global Change Maker",
    image: "/events/Image (10).png",
    year: "2026",
    quote: "Global change starts with courage in our own communities.",
  },
  {
    id: "lisa-rees-odonnell",
    name: "Lisa Rees-O'Donnell",
    award: "GMBTE AFRICA4U ALLY CHAMPION AWARD",
    description:
      "In recognition of outstanding commitment to advancing inclusion, equity, and opportunity for Black communities.",
    story:
      "She has shown outstanding commitment to advancing inclusion, equity, and opportunity for Black communities. As an ally and champion, she has used her platform and partnerships to open doors, amplify voices, and build pathways that make lasting difference.",
    category: "Ally Champion",
    image: "/events/Image (12).png",
    year: "2026",
    quote: "Allyship means showing up — consistently, courageously, and without ego.",
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
        <ScrollReveal as="header" className="max-w-[900px]">
          <div className="flex items-center gap-3 text-[var(--gold)]">
            <span className="font-serif text-[26px] italic leading-none">
              VI.
            </span>

            <p className="text-[20px] font-semibold uppercase">
              Contemporary Archive
            </p>
          </div>

          <h2 className="mt-7 font-serif text-[clamp(42px,4.8vw,66px)] font-medium leading-none tracking-[-0.03em] text-white">
            Community Champions
          </h2>

          <p className="mt-6 max-w-[850px] text-[17px] leading-[1.6] text-[#9B9691]">
            History does not end with icons. It continues through entrepreneurs,
            technologists, mentors, and youth leaders every graduate, every
            speaker, every innovator shaping the future now.
          </p>
        </ScrollReveal>

        {/* The book */}
        <ScrollReveal delay={0.1}>
          <ChampionsBook />
        </ScrollReveal>

        {/* CTA */}
        <div className="mt-14 flex justify-center">
          <Link
            href="/dashboard/nominations"
            className="inline-flex h-[52px] items-center justify-center gap-2 rounded-lg bg-[var(--gold)] px-7 text-[17px] font-semibold text-[#000D1C] transition hover:bg-[#E4C300]"
          >
            Nominate a Changemaker
            <span aria-hidden="true">↓</span>
          </Link>
        </div>
      </div>
    </section>
  );
}

const romanNumerals = [
  "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X", "XI", "XII", "XIII", "XIV", "XV",
];

function ChampionsBook() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const reduceMotion = useReducedMotion();
  const total = champions.length;
  const champion = champions[index];

  const turnTo = (nextIndex: number, dir: 1 | -1) => {
    setDirection(dir);
    setIndex(((nextIndex % total) + total) % total);
  };

  useEffect(() => {
    function handleKey(event: KeyboardEvent) {
      if (event.key === "ArrowRight") turnTo(index + 1, 1);
      if (event.key === "ArrowLeft") turnTo(index - 1, -1);
    }
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index]);

  const pageTransition = reduceMotion
    ? { duration: 0 }
    : { duration: 0.55, ease: [0.65, 0, 0.35, 1] as const };

  const photoVariants = {
    enter: { opacity: 0 },
    center: { opacity: 1 },
    exit: { opacity: 0 },
  };

  // The leaf pivots on the spine (its left edge) like an actual page
  // turning over, rather than just cross-fading.
  const leafVariants = {
    enter: (dir: number) => ({
      rotateY: dir > 0 ? 128 : -128,
      opacity: 0.35,
    }),
    center: { rotateY: 0, opacity: 1 },
    exit: (dir: number) => ({
      rotateY: dir > 0 ? -128 : 128,
      opacity: 0.35,
    }),
  };

  return (
    <div className="mt-16 w-full">
      <div
        className="relative mx-auto w-full max-w-[1160px] overflow-hidden rounded-[6px] border border-[var(--gold)]/20 bg-[#0B0E13] shadow-[0_40px_80px_-30px_rgba(0,0,0,0.7)]"
        style={{ perspective: 2200 }}
      >
        {/* Spine shadow between the two pages */}
        <div className="pointer-events-none absolute inset-y-0 left-1/2 z-20 hidden w-20 -translate-x-1/2 bg-[linear-gradient(90deg,transparent_0%,rgba(0,0,0,0.4)_50%,transparent_100%)] lg:block" />
        <div className="pointer-events-none absolute inset-y-0 left-1/2 z-20 hidden w-px -translate-x-1/2 bg-[var(--gold)]/15 lg:block" />

        <div className="grid min-h-[560px] w-full lg:grid-cols-2">
          {/* Left page — the photograph plate */}
          <div
            className="relative overflow-hidden bg-[#05070a]"
            style={{ transformStyle: "preserve-3d" }}
          >
            <AnimatePresence mode="wait" custom={direction} initial={false}>
              <motion.div
                key={`photo-${champion.id}`}
                custom={direction}
                variants={photoVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={pageTransition}
                className="absolute inset-0"
              >
                <Image
                  src={champion.image}
                  alt={champion.name}
                  fill
                  sizes="(max-width: 1024px) 100vw, 580px"
                  className="object-cover object-center"
                  priority={index === 0}
                />
                <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(0deg,rgba(0,0,0,0.35)_0%,transparent_35%)]" />
                <YearRibbon year={champion.year} />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right page — the printed leaf, hinged on the spine */}
          <div
            className="relative min-h-[400px] overflow-hidden bg-[var(--paper)]"
            style={{ perspective: 2200 }}
          >
            <AnimatePresence mode="sync" custom={direction} initial={false}>
              <motion.div
                key={`leaf-${champion.id}`}
                custom={direction}
                variants={leafVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={pageTransition}
                className="absolute inset-0 flex flex-col justify-center overflow-y-auto bg-[var(--paper)] px-8 py-12 sm:px-10 lg:px-12 xl:px-[52px]"
                style={{
                  transformOrigin: "left center",
                  backfaceVisibility: "hidden",
                  WebkitBackfaceVisibility: "hidden",
                }}
              >
                {/* Shading that sweeps across the leaf as it turns, like
                    light catching a real page mid-flip */}
                <motion.div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.35)_0%,transparent_45%)]"
                  variants={{
                    enter: { opacity: 1 },
                    center: { opacity: 0 },
                    exit: { opacity: 1 },
                  }}
                  transition={pageTransition}
                />

                <p className="font-serif text-[15px] italic tracking-[0.02em] text-[var(--gold-deep)]">
                  Plate {romanNumerals[index] ?? index + 1}
                </p>

                <p className="mt-4 text-[13px] font-bold uppercase leading-[1.4] tracking-[0.02em] text-[var(--gold-dim)]">
                  {champion.award}
                </p>

                <h3 className="mt-5 font-serif text-[clamp(28px,2.6vw,40px)] font-medium leading-[1.1] text-[var(--ink)]">
                  {champion.name}
                </h3>

                <p className="mt-4 text-[15px] leading-[1.6] text-[var(--ink-soft)]">
                  {champion.description}
                </p>

                <p className="mt-4 text-[15px] leading-[1.6] text-[var(--ink-soft)]">
                  {champion.story}
                </p>

                {champion.quote && (
                  <blockquote className="mt-6 border-l-2 border-[var(--gold-deep)]/50 pl-5 font-serif text-[15px] italic leading-[1.55] text-[var(--ink)]">
                    “{champion.quote}”
                  </blockquote>
                )}

                <p className="mt-6 text-[11px] font-semibold uppercase tracking-[0.14em] text-[var(--gold-dim)]/70">
                  {champion.category}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Page-turn controls */}
        <div className="relative z-30 flex items-center justify-center gap-6 border-t border-[var(--gold)]/15 bg-[#05070a] py-5">
          <button
            type="button"
            onClick={() => turnTo(index - 1, -1)}
            aria-label="Previous entry"
            className="flex size-10 items-center justify-center rounded-full border border-[var(--gold)]/30 text-[var(--gold)] transition hover:border-[var(--gold)]/60 hover:bg-[var(--gold)]/10"
          >
            <ChevronLeft size={18} strokeWidth={1.75} />
          </button>

          <p className="font-serif text-[14px] italic tracking-[0.04em] text-[#DBD2C8]">
            {String(index + 1).padStart(2, "0")}
            <span className="mx-1.5 text-[#DBD2C8]/40">/</span>
            {String(total).padStart(2, "0")}
          </p>

          <button
            type="button"
            onClick={() => turnTo(index + 1, 1)}
            aria-label="Next entry"
            className="flex size-10 items-center justify-center rounded-full border border-[var(--gold)]/30 text-[var(--gold)] transition hover:border-[var(--gold)]/60 hover:bg-[var(--gold)]/10"
          >
            <ChevronRight size={18} strokeWidth={1.75} />
          </button>
        </div>
      </div>

      {/* Jump-to-entry index, styled like a table of contents */}
      <div className="mx-auto mt-6 flex max-w-[1160px] flex-wrap justify-center gap-2">
        {champions.map((c, i) => (
          <button
            key={c.id}
            type="button"
            onClick={() => turnTo(i, i > index ? 1 : -1)}
            aria-label={`Go to ${c.name}`}
            aria-current={i === index}
            className={[
              "size-[7px] rounded-full transition-all duration-300",
              i === index
                ? "w-5 bg-[var(--gold)]"
                : "bg-[var(--gold)]/25 hover:bg-[var(--gold)]/50",
            ].join(" ")}
          />
        ))}
      </div>
    </div>
  );
}

type YearRibbonProps = {
  year: string;
};

function YearRibbon({ year }: YearRibbonProps) {
  return (
    <div className="absolute right-6 top-0 z-20">
      <svg
        width="58"
        height="70"
        viewBox="0 0 58 70"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path d="M0 -10H58V70L29 48.6441L0 70V-10Z" fill="#D7263D" />

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
