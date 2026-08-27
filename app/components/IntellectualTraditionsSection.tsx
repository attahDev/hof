"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import ScrollReveal from "./animations/ScrollReveal";

type LiteraryFigure = {
  id: string;
  name: string;
  years: string;
  description: string;
  image: string;
};

const literaryFigures: LiteraryFigure[] = [
  {
    id: "olaudah-equiano",
    name: "Olaudah Equiano",
    years: "1745–1797",
    description:
      "Author and abolitionist whose autobiography influenced the British anti-slavery movement.",
    image: "/home/olau.png",
  },
  {
    id: "sojourner-truth",
    name: "Sojourner Truth",
    years: "C.1797–1883",
    description:
      "Abolitionist and women's rights activist whose speeches challenged injustice at its core.",
    image: "/home/Truth.png",
  },
  {
    id: "frederick-douglass",
    name: "Frederick Douglass",
    years: "1818–1895",
    description:
      "Orator, statesman and one of the most powerful advocates for emancipation and equality.",
    image: "/home/fedrick.png",
  },
  {
    id: "harriet-tubman",
    name: "Harriet Tubman",
    years: "C.1822–1913",
    description:
      "Strategist and liberator who led enslaved people to freedom via the Underground Railroad.",
    image: "/home/herriat.png",
  },
];

export default function IntellectualTraditionsSection() {
  const railRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const dragStart = useRef({ x: 0, scrollLeft: 0 });

  const beginDrag = (clientX: number) => {
    if (!railRef.current) return;
    setIsDragging(true);
    dragStart.current = { x: clientX, scrollLeft: railRef.current.scrollLeft };
  };

  const continueDrag = (clientX: number) => {
    if (!isDragging || !railRef.current) return;
    const delta = clientX - dragStart.current.x;
    railRef.current.scrollLeft = dragStart.current.scrollLeft - delta;
  };

  const endDrag = () => setIsDragging(false);

  return (
    <ScrollReveal as="section" className="w-full bg-[#F5EBE1] py-12 sm:py-16 lg:py-[72px]">
      <div className="mx-auto w-full max-w-[1500px] px-4 sm:px-10 lg:px-12">
        <header className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <div className="flex items-center gap-3 text-[#A54350] sm:gap-4">
              <span className="font-serif text-[22px] italic leading-none sm:text-[26px] lg:text-[30px]">
                III.
              </span>

              <p className="text-base font-semibold uppercase tracking-[0.02em] sm:text-lg lg:text-[22px]">
                Intellectual &amp; Literary Traditions
              </p>
            </div>

            <h2 className="mt-5 max-w-[720px] font-serif text-[clamp(32px,7.5vw,74px)] font-medium leading-[1.1] tracking-[-0.02em] text-[var(--ink)] sm:mt-7 sm:leading-[1.05] sm:tracking-[-0.035em]">
              Voices that moved a nation
            </h2>
          </div>

          <p className="max-w-[420px] text-[15px] font-normal leading-[1.55] text-[#2B3037] sm:text-[17px]">
            18th–19th century thought leaders whose words transformed public
            consciousness and reshaped moral debate across continents.
          </p>
        </header>

        <div
          ref={railRef}
          role="region"
          aria-label="Intellectual and literary traditions"
          tabIndex={0}
          onMouseDown={(e) => beginDrag(e.clientX)}
          onMouseMove={(e) => continueDrag(e.clientX)}
          onMouseUp={endDrag}
          onMouseLeave={endDrag}
          onTouchStart={(e) => beginDrag(e.touches[0].clientX)}
          onTouchMove={(e) => continueDrag(e.touches[0].clientX)}
          onTouchEnd={endDrag}
          className={[
            "mt-10 flex gap-6 overflow-x-auto pb-4 sm:mt-16",
            "select-none scroll-smooth",
            "[scrollbar-width:none] [&::-webkit-scrollbar]:hidden",
            isDragging ? "cursor-grabbing" : "cursor-grab",
          ].join(" ")}
        >
          {literaryFigures.map((figure, index) => (
            <LiteraryFigureCard key={figure.id} figure={figure} index={index} />
          ))}

          {/* Trailing spacer so the last card can clear the viewport edge */}
          <div className="w-1 shrink-0 sm:w-6" />
        </div>

        <p className="mt-5 font-montserrat text-sm text-[#96908A] sm:text-base">
          ← Drag to read on →
        </p>
      </div>
    </ScrollReveal>
  );
}

function LiteraryFigureCard({
  figure,
  index,
}: {
  figure: LiteraryFigure;
  index: number;
}) {
  return (
    <article
      className={[
        "plaque-card relative w-[260px] shrink-0 overflow-hidden rounded-[8px]",
        "bg-[linear-gradient(205.51deg,#282610_4.55%,#111419_38.62%)]",
        "sm:w-[300px]",
        index % 2 === 1 ? "sm:mt-8" : "",
      ].join(" ")}
    >
      <div className="relative h-[340px] w-full overflow-hidden sm:h-[400px]">
        <Image
          src={figure.image}
          alt={figure.name}
          fill
          draggable={false}
          sizes="300px"
          className="pointer-events-none object-cover object-top"
        />

        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#111419] via-[#111419]/25 to-transparent" />

        {/* Name plate over the image, museum-label style */}
        <div className="absolute inset-x-0 bottom-0 px-5 pb-6 pt-10">
          <h3 className="text-[19px] font-semibold uppercase leading-[1.2] text-white">
            {figure.name}
          </h3>

          <p className="mt-1.5 text-[13px] font-medium text-[#D9B700]">
            {figure.years}
          </p>

          <p className="mt-3 max-w-[240px] text-[12px] leading-[1.55] text-[#F1ECE7]">
            {figure.description}
          </p>
        </div>
      </div>
    </article>
  );
}
