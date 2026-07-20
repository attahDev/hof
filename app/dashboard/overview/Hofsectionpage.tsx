import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { ReactNode } from "react";

type CategoryCard = {
  id: string;
  title: ReactNode;
  subtitle: string;
  description: string;
  image: string;
  href: string;
  hasGradient?: boolean;
};

const categoryCards: CategoryCard[] = [
  {
    id: "hall-of-fame",
    title: "Hall of Fame",
    subtitle: "National & Global Impact",
    description:
      "Honoring lifetime legacy and extraordinary contributions that changed the world",
    image: "/hero/first.png",
    href: "/dashboard/inductees",
  },
  {
    id: "regional",
    title: (
      <>
        Regional
        <br />
        Recognition
      </>
    ),
    subtitle: "Outstanding Individuals",
    description: "Celebrating excellence across regions and communities",
    image: "/hero/secound.png",
    href: "/dashboard/regional",
    hasGradient: true,
  },
  {
    id: "community",
    title: (
      <>
        Community
        <br />
        Champions
      </>
    ),
    subtitle: "Change Makers",
    description:
      "The heart of our communities. Recognizing those creating real impact every day.",
    image: "/hero/third.png",
    href: "/dashboard/community",
  },
  {
    id: "award",
    title: (
      <>
        Award
        <br />
        Recognition
      </>
    ),
    subtitle: "Outstanding Performance",
    description:
      "Recognizing excellence across industries, innovation and leadership",
    image: "/hero/forth.png",
    href: "/dashboard/award",
  },
];

export default function HallOfFamePageSection() {
  return (
    <section className="mt-[24px] sm:mt-[34px] grid w-full grid-cols-1 gap-[16px] sm:grid-cols-2 sm:gap-[20px] lg:grid-cols-4">
      {categoryCards.map((card) => (
        <CategoryCardItem key={card.id} card={card} />
      ))}
    </section>
  );
}

function CategoryCardItem({ card }: { card: CategoryCard }) {
  return (
    <article className="group relative flex h-[330px] sm:h-[315px] w-full flex-col overflow-hidden rounded-[15px] bg-[#000D1C] transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      <Image
        src={card.image}
        alt={card.subtitle}
        fill
        priority
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
      />

      {/* Primary semi-transparent overlay to ensure readability */}
      <div className="absolute inset-0 bg-[#000D1C]/45 transition-opacity duration-300 group-hover:bg-[#000D1C]/35" />

      {card.hasGradient && (
        <div
          className="absolute inset-0 z-[1]"
          style={{
            background:
              "linear-gradient(180deg, rgba(0, 13, 28, 0) 0%, #000D1C 100%)",
          }}
        />
      )}

      {/* Gradient fade overlay from bottom for all cards to guarantee text readability */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-t from-[#000D1C]/90 via-[#000D1C]/50 to-transparent" />

      <div className="relative z-10 flex h-full flex-col px-[20px] pb-[20px] pt-[18px] sm:px-[22px] sm:pb-[22px] sm:pt-[20px]">
        <h2 className="text-[19px] sm:text-[21px] font-semibold uppercase leading-snug tracking-[0.4px] text-white">
          {card.title}
        </h2>

        <h3 className="mt-[8px] sm:mt-[12px] text-[15px] sm:text-[17px] font-medium uppercase leading-[22px] sm:leading-[26px] text-[#B1A393]">
          {card.subtitle}
        </h3>

        <p className="mt-[20px] sm:mt-[34px] max-w-[240px] text-xs sm:text-[13px] font-light leading-[20px] sm:leading-[23px] text-white/90">
          {card.description}
        </p>

        <Link
          href={card.href}
          className="mt-auto flex h-[42px] sm:h-[45px] w-[130px] sm:w-[140px] items-center justify-center gap-[10px] sm:gap-[14px] rounded-[8px] bg-[#D7263D] text-[13px] sm:text-[14px] font-semibold text-white transition-all duration-200 hover:bg-[#D7263D]/90 active:scale-[0.98]"
        >
          Explore
          <ArrowRight size={17} strokeWidth={2.4} className="transition-transform duration-200 group-hover:translate-x-1" />
        </Link>
      </div>
    </article>
  );
}