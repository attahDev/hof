"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

const heroPortraits = [
  "/hero/herotest.png",
  "/hero/Button (1).png",
  "/home/achebe.png",
  "/home/bell.png",
  "/hero/Button (4).png",
  "/home/claudia.png",
  "/home/doreen.png",
  "/home/John.png",
  "/home/mansa.png",
  "/home/olau.png",
  "/home/sanwata.png",
  "/home/Truth.png",
];

export default function HallOfFameHero() {
  const reduceMotion = useReducedMotion();

  const headlineTransition = reduceMotion
    ? { duration: 0 }
    : { duration: 0.6, ease: "easeOut" as const };

  return (
    <section className="relative w-full overflow-hidden bg-[#F5EBE1] pb-0 pt-14 sm:pt-16 lg:pt-20">
      <div className="mx-auto flex w-full max-w-[1500px] flex-col gap-10 px-5 sm:px-10 lg:flex-row lg:items-end lg:justify-between lg:gap-6 lg:px-16">
        {/* Left: identity block */}
        <div className="flex max-w-[620px] flex-col">
          <motion.div
            className="flex items-center gap-3"
            initial={reduceMotion ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={headlineTransition}
          >
            <div className="relative size-[44px] shrink-0">
              <Image
                src="/logo/hlogo.svg"
                alt="Black Tech Expo Hall of Fame"
                fill
                priority
                sizes="44px"
                className="object-contain"
              />
            </div>

            <p className="font-montserrat text-[13px] font-semibold uppercase tracking-[0.22em] text-[var(--gold-dim)]">
              Black Tech Expo
            </p>
          </motion.div>

          <motion.h1
            className="mt-6 font-serif text-[clamp(52px,9vw,116px)] font-medium leading-[0.96] tracking-[-0.015em] text-[var(--ink)]"
            initial={reduceMotion ? false : { opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...headlineTransition, delay: 0.12 }}
          >
            The Hall
            <br />
            <span className="italic text-[var(--gold-deep)]">of Fame</span>
          </motion.h1>

          <motion.p
            className="mt-6 max-w-[480px] font-montserrat text-[17px] font-light leading-relaxed text-[#3A4249] sm:text-[19px]"
            initial={reduceMotion ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...headlineTransition, delay: 0.28 }}
          >
            A living archive of the leaders, thinkers and builders whose
            legacy still moves us forward — six centuries, one continuous
            record.
          </motion.p>
        </div>

        {/* Right: a preview of who's kept here */}
        <motion.div
          className="w-full max-w-[420px] lg:w-[380px]"
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...headlineTransition, delay: 0.42 }}
        >
          <p className="font-montserrat text-[12px] font-semibold uppercase tracking-[0.16em] text-[#96908A]">
            Featured in the archive
          </p>

          <div className="mt-4 grid grid-cols-4 gap-2.5 sm:grid-cols-6 lg:grid-cols-4">
            {heroPortraits.slice(0, 8).map((src, index) => (
              <div
                key={src}
                className={[
                  "relative aspect-[3/4] overflow-hidden rounded-[3px] bg-[#000D1C]",
                  index % 5 === 0 ? "lg:col-span-2 lg:row-span-2 lg:aspect-square" : "",
                ].join(" ")}
              >
                <Image
                  src={src}
                  alt=""
                  fill
                  priority={index === 0}
                  sizes="120px"
                  className="object-cover object-top"
                />
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Marquee — a continuous procession of the archive's portraits */}
      <div className="relative mt-12 w-full overflow-hidden border-t border-black/10 py-6 sm:mt-16">
        <div
          className={[
            "flex w-max gap-4",
            reduceMotion ? "" : "animate-[hero-marquee_38s_linear_infinite]",
          ].join(" ")}
        >
          {[...heroPortraits, ...heroPortraits].map((src, index) => (
            <div
              key={`${src}-${index}`}
              className="relative h-[86px] w-[68px] shrink-0 overflow-hidden rounded-[3px] bg-[#000D1C] sm:h-[110px] sm:w-[88px]"
            >
              <Image
                src={src}
                alt=""
                fill
                sizes="88px"
                className="object-cover object-top grayscale transition duration-500 hover:grayscale-0"
              />
            </div>
          ))}
        </div>

        {/* Edge fades so the marquee doesn't hard-cut */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-[#F5EBE1] to-transparent sm:w-28" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-[#F5EBE1] to-transparent sm:w-28" />
      </div>

      <style jsx>{`
        @keyframes hero-marquee {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  );
}
