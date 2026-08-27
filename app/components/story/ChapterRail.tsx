"use client";

import { useEffect, useState } from "react";
import { motion, useScroll, useReducedMotion } from "framer-motion";

type Chapter = {
  id: string;
  numeral: string;
  label: string;
  accentLight: string;
  accentDark: string;
  theme: "light" | "dark";
};

const CHAPTERS: Chapter[] = [
  {
    id: "prologue",
    numeral: "—",
    label: "Prologue",
    accentLight: "#96701C",
    accentDark: "#D9B700",
    theme: "dark",
  },
  {
    id: "legacy-timeline",
    numeral: "I",
    label: "The Legacy Timeline",
    accentLight: "#A23D49",
    accentDark: "#E5485A",
    theme: "light",
  },
  {
    id: "foundations",
    numeral: "II",
    label: "Foundations of Greatness",
    accentLight: "#A54350",
    accentDark: "#E5485A",
    theme: "light",
  },
  {
    id: "intellectual-traditions",
    numeral: "III",
    label: "Intellectual & Literary Traditions",
    accentLight: "#A54350",
    accentDark: "#E5485A",
    theme: "light",
  },
  {
    id: "manchester-influence",
    numeral: "IV",
    label: "UK & Manchester Influence",
    accentLight: "#96701C",
    accentDark: "#D9B700",
    theme: "dark",
  },
  {
    id: "global-modern-era",
    numeral: "V",
    label: "Global Modern Era",
    accentLight: "#96701C",
    accentDark: "#D9B700",
    theme: "light",
  },
  {
    id: "community-champions",
    numeral: "VI",
    label: "Contemporary Archive",
    accentLight: "#96701C",
    accentDark: "#D9B700",
    theme: "dark",
  },
  {
    id: "epilogue",
    numeral: "—",
    label: "Legacy Continues",
    accentLight: "#96701C",
    accentDark: "#D9B700",
    theme: "light",
  },
];

export default function ChapterRail() {
  const [activeId, setActiveId] = useState<string>(CHAPTERS[0].id);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    const targets = CHAPTERS.map((chapter) =>
      document.getElementById(chapter.id)
    ).filter((el): el is HTMLElement => Boolean(el));

    if (targets.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible[0]) {
          setActiveId(visible[0].target.id);
        }
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] }
    );

    targets.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const activeChapter = CHAPTERS.find((c) => c.id === activeId) ?? CHAPTERS[0];
  const isDark = activeChapter.theme === "dark";
  const activeAccent = isDark ? activeChapter.accentDark : activeChapter.accentLight;

  return (
    <div
      className="pointer-events-none fixed left-6 top-1/2 z-30 hidden -translate-y-1/2 lg:flex"
      aria-hidden="true"
    >
      <div className="pointer-events-auto flex items-center gap-4">
        {/* Track + progress fill */}
        <div
          className={[
            "relative h-[340px] w-px transition-colors duration-300",
            isDark ? "bg-white/20" : "bg-black/20",
          ].join(" ")}
        >
          <motion.div
            className="absolute left-0 top-0 w-px origin-top"
            style={{
              height: "100%",
              scaleY: reduceMotion ? undefined : scrollYProgress,
              background: `linear-gradient(180deg, ${activeAccent}, transparent)`,
            }}
          />

          {CHAPTERS.map((chapter, index) => {
            const top = (index / (CHAPTERS.length - 1)) * 100;
            const isActive = chapter.id === activeId;
            const itemAccent = isDark ? chapter.accentDark : chapter.accentLight;

            return (
              <button
                key={chapter.id}
                type="button"
                onClick={() =>
                  document
                    .getElementById(chapter.id)
                    ?.scrollIntoView({ behavior: "smooth", block: "start" })
                }
                title={chapter.label}
                className="group absolute -left-[5px] flex items-center"
                style={{ top: `${top}%` }}
              >
                <span
                  className="block h-[11px] w-[11px] rounded-full border transition-all duration-300"
                  style={{
                    borderColor: isActive
                      ? itemAccent
                      : isDark
                        ? "rgba(255,255,255,0.3)"
                        : "rgba(0,13,28,0.3)",
                    backgroundColor: isActive
                      ? itemAccent
                      : isDark
                        ? "transparent"
                        : "rgba(255,255,255,0.7)",
                    boxShadow: isActive ? `0 0 10px ${itemAccent}` : "none",
                  }}
                />
              </button>
            );
          })}
        </div>

        {/* Active chapter readout */}
        <div className="w-[210px] font-montserrat">
          <p
            className="text-[11px] font-semibold uppercase tracking-[0.18em] transition-colors duration-300"
            style={{ color: activeAccent }}
          >
            {activeChapter.numeral !== "—"
              ? `Chapter ${activeChapter.numeral}`
              : activeChapter.label === "Prologue"
                ? "Prologue"
                : "Epilogue"}
          </p>
          <p
            className={[
              "mt-1 text-[13px] font-semibold leading-snug transition-colors duration-300",
              isDark ? "text-white/95" : "text-[#000D1C]",
            ].join(" ")}
          >
            {activeChapter.label}
          </p>
        </div>
      </div>
    </div>
  );
}
