"use client";

import { motion, useReducedMotion } from "framer-motion";

type ChapterCardProps = {
  numeral: string;
  title: string;
  line: string;
  tone?: "light" | "dark";
};

export default function ChapterCard({
  numeral,
  title,
  line,
  tone = "light",
}: ChapterCardProps) {
  const reduceMotion = useReducedMotion();
  const isDark = tone === "dark";
  const isNumbered = numeral !== "—";

  return (
    <div
      className={[
        "relative flex w-full items-center justify-center overflow-hidden px-6 py-20 sm:py-28",
        isDark ? "bg-[#000512]" : "bg-[#F5EBE1]",
      ].join(" ")}
    >
      {/* Faint oversized numeral sitting behind the copy */}
      {isNumbered && (
        <span
          aria-hidden="true"
          className={[
            "pointer-events-none absolute font-serif italic leading-none select-none",
            "text-[clamp(140px,28vw,340px)]",
            isDark ? "text-white/[0.035]" : "text-black/[0.045]",
          ].join(" ")}
        >
          {numeral}
        </span>
      )}

      <motion.div
        className="relative z-10 flex max-w-[720px] flex-col items-center text-center"
        initial={reduceMotion ? false : { opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="ornament-divider w-full max-w-[280px]">
          <span className="ornament-diamond" />
        </div>

        {isNumbered && (
          <p
            className={[
              "mt-6 font-serif text-[15px] italic tracking-[0.02em]",
              isDark ? "text-[#D9B700]" : "text-[#96701C]",
            ].join(" ")}
          >
            Chapter {numeral}
          </p>
        )}

        <h3
          className={[
            "font-montserrat text-[clamp(28px,5vw,48px)] font-medium uppercase leading-[1.1] tracking-[-0.01em]",
            isNumbered ? "mt-3" : "mt-6",
            isDark ? "text-white" : "text-[#000D1C]",
          ].join(" ")}
        >
          {title}
        </h3>

        <p
          className={[
            "mt-5 max-w-[520px] text-[15px] leading-relaxed sm:text-[17px]",
            isDark ? "text-[#DBD2C8]" : "text-[#555D68]",
          ].join(" ")}
        >
          {line}
        </p>
      </motion.div>
    </div>
  );
}
