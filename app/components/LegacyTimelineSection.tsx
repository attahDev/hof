"use client";

import Image from "next/image";
import { useRef, useState } from "react";

type TimelineEntry = {
  id: string;
  century: string;
  name: string;
  category: string;
  description: string;
  image: string;
  imagePosition?: string;
};

const timelineEntries: TimelineEntry[] = [
  {
    id: "mansa-musa",
    century: "1200s",
    name: "Mansa Musa",
    category: "Wealth & Scholarship",
    description:
      "14th-century emperor of Mali, symbol of African wealth, scholarship and global trade networks.",
    image: "/home/mansa.png",
    imagePosition: "object-top",
  },
  {
    id: "john-blanke",
    century: "1500s",
    name: "John Blanke",
    category: "Tudor Court Musician",
    description:
      "Royal trumpeter in Tudor England, documented in the 1511 Westminster Tournament Roll.",
    image: "/home/John.png",
    imagePosition: "object-top",
  },
  {
    id: "toussaint-louverture",
    century: "1700s",
    name: "Toussaint Louverture",
    category: "Haitian Revolution Leader",
    description:
      "Architect of the Haitian Revolution, the first successful uprising that reshaped global power structures.",
    image: "/home/lover.png",
    imagePosition: "object-top",
  },
  {
    id: "harriet-tubman",
    century: "1800s",
    name: "Harriet Tubman",
    category: "Freedom Strategist",
    description:
      "Strategist and liberator who led enslaved people to freedom through the Underground Railroad.",
    image: "/home/herriat.png",
    imagePosition: "object-top",
  },
  {
    id: "claudia-jones",
    century: "1900s",
    name: "Claudia Jones",
    category: "Civil Rights Pioneer",
    description:
      "Journalist, activist and organiser whose work shaped Black British political and cultural history.",
    image: "/community/claudia.jpg",
    imagePosition: "object-top",
  },
  {
    id: "modern-innovators",
    century: "2000s",
    name: "Modern Innovators",
    category: "Technology & Leadership",
    description:
      "A new generation advancing technology, education, entrepreneurship and social impact.",
    image: "/community/How Does Technology Influence Unique Art.jpeg",
    imagePosition: "object-top",
  },
];

export default function LegacyTimelineSection() {
  const timelineRef = useRef<HTMLDivElement | null>(null);

  const [isDragging, setIsDragging] = useState(false);
  const [dragStartX, setDragStartX] = useState(0);
  const [initialScrollLeft, setInitialScrollLeft] = useState(0);

  const beginDrag = (clientX: number) => {
    const container = timelineRef.current;

    if (!container) return;

    setIsDragging(true);
    setDragStartX(clientX);
    setInitialScrollLeft(container.scrollLeft);
  };

  const continueDrag = (clientX: number) => {
    const container = timelineRef.current;

    if (!container || !isDragging) return;

    const distance = clientX - dragStartX;

    container.scrollLeft = initialScrollLeft - distance;
  };

  const endDrag = () => {
    setIsDragging(false);
  };

  return (
    <section className="w-full overflow-hidden bg-[#F5EBE1] py-12 sm:py-16 lg:py-24">
      <div className="mx-auto w-full max-w-[1500px]">
        <header className="px-5 sm:px-10 lg:px-12">
          <div className="flex items-center gap-3 text-[#A23D49] sm:gap-5">
            <span className="font-serif text-[24px] italic leading-none sm:text-[32px] lg:text-[38px]">
              I.
            </span>

            <p className="font-montserrat text-sm font-semibold uppercase tracking-[0.02em] sm:text-[20px] lg:text-[24px]">
              The Legacy Timeline
            </p>
          </div>

          <h2 className="mt-5 max-w-[850px] font-montserrat text-[clamp(30px,8vw,72px)] font-bold leading-[1.1] tracking-[-0.015em] text-[#000D1C] sm:mt-8 sm:leading-[1.05] sm:tracking-[-0.035em]">
            Six centuries of impact, one continuum
          </h2>

          <p className="mt-4 max-w-[800px] font-montserrat text-[clamp(16px,3vw,27px)] font-normal leading-[1.45] text-[#4E5660] sm:mt-7 sm:leading-[1.55]">
            From ancient kingdoms to modern innovators, Black excellence has
            shaped the world. Scroll through the record.
          </p>
        </header>

        <div
          ref={timelineRef}
          role="region"
          aria-label="Legacy timeline"
          tabIndex={0}
          onMouseDown={(event) => beginDrag(event.clientX)}
          onMouseMove={(event) => continueDrag(event.clientX)}
          onMouseUp={endDrag}
          onMouseLeave={endDrag}
          onTouchStart={(event) => beginDrag(event.touches[0].clientX)}
          onTouchMove={(event) => continueDrag(event.touches[0].clientX)}
          onTouchEnd={endDrag}
          className={[
            "mt-10 overflow-x-auto pb-4 sm:mt-16",
            "select-none scroll-smooth",
            "[scrollbar-width:none] [&::-webkit-scrollbar]:hidden",
            isDragging ? "cursor-grabbing" : "cursor-grab",
          ].join(" ")}
        >
          <div className="relative min-w-max px-5 sm:px-10 lg:px-12">
            {/* Continuous horizontal line */}
            <div className="absolute left-5 right-5 top-[20px] h-px bg-[#A23D49] sm:left-10 sm:right-10 sm:top-[22px] lg:left-12 lg:right-12" />

            <div className="relative flex gap-10 pr-20 sm:gap-[70px] sm:pr-[120px] lg:gap-[95px]">
              {timelineEntries.map((entry) => (
                <TimelineItem key={entry.id} entry={entry} />
              ))}
            </div>
          </div>
        </div>

        <div className="mt-5 px-5 sm:mt-6 sm:px-10 lg:px-12">
          <p className="font-montserrat text-[clamp(14px,2.5vw,24px)] font-normal text-[#AAA29B]">
            ← Drag to explore the archive →
          </p>
        </div>
      </div>
    </section>
  );
}

function TimelineItem({ entry }: { entry: TimelineEntry }) {
  return (
    <article className="relative w-[210px] shrink-0 sm:w-[252px] lg:w-[270px]">
      {/* Timeline marker */}
      <div className="relative z-10 ml-4 flex h-9 w-9 items-center justify-center rounded-full border-[3px] border-[#A23D49] bg-[#F5EBE1] sm:ml-5 sm:h-11 sm:w-11 lg:h-12 lg:w-12">
        <span className="h-2 w-2 rounded-full bg-transparent" />
      </div>

      <p className="ml-4 mt-4 font-montserrat text-xl font-medium italic leading-none text-[#A23D49] sm:ml-5 sm:mt-5 sm:text-[26px]">
        {entry.century}
      </p>

      <div className="mt-6 overflow-hidden rounded-[8px] border border-white/10 bg-[linear-gradient(205.51deg,#282610_4.55%,#111419_38.62%)] sm:mt-8">
        <div className="relative h-[160px] w-full overflow-hidden sm:h-[198px] lg:h-[205px]">
          <Image
            src={entry.image}
            alt={entry.name}
            fill
            sizes="270px"
            draggable={false}
            className={[
              "pointer-events-none object-cover",
              entry.imagePosition ?? "object-center",
            ].join(" ")}
          />

          <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#111419]/40" />
        </div>

        <div className="px-3.5 pb-4 pt-3.5 sm:px-4 sm:pb-5 sm:pt-4">
          <h3 className="font-montserrat text-base font-semibold uppercase leading-[1.25] text-white sm:text-[18px]">
            {entry.name}
          </h3>

          <p className="mt-1.5 font-montserrat text-[10px] font-medium uppercase leading-[1.4] text-[#D9B700] sm:text-[11px]">
            {entry.category}
          </p>

          <p className="mt-3 font-montserrat text-[10px] font-normal leading-[1.55] text-[#E2DAD2] sm:text-[11px]">
            {entry.description}
          </p>
        </div>
      </div>
    </article>
  );
}