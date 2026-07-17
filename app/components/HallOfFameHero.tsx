"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

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
  const [activeImage, setActiveImage] = useState(0);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveImage((current) => (current + 1) % heroPortraits.length);
    }, 1200);

    return () => clearInterval(interval);
  }, []);

  const headlineTransition = reduceMotion
    ? { duration: 0 }
    : { duration: 0.6, ease: "easeOut" as const };

  return (
    <section className="relative flex min-h-[588px] w-full overflow-hidden bg-[#F5EBE1] px-5 py-14 sm:px-10 sm:py-16 lg:px-16">
      <div className="relative mx-auto w-full max-w-[1500px]">
        <div className="mx-auto flex w-full max-w-[1100px] flex-col gap-5 pt-10 sm:gap-7 lg:pt-16">
          <div className="flex items-center justify-center whitespace-nowrap">
            <motion.h1
              className="font-montserrat text-[clamp(48px,9vw,115px)] font-medium uppercase leading-[1] tracking-normal text-[#000D1C]"
              initial={reduceMotion ? false : { opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...headlineTransition, delay: 0.1 }}
            >
              Time To Enter
            </motion.h1>
          </div>

          <div className="flex items-center justify-center gap-[clamp(18px,2.5vw,35px)]">
            <div className="relative h-[clamp(75px,9vw,140px)] w-[clamp(95px,12vw,180px)] shrink-0 overflow-hidden bg-[#000D1C]">
              <AnimatePresence mode="sync">
                <motion.div
                  key={heroPortraits[activeImage]}
                  className="absolute inset-0"
                  initial={reduceMotion ? false : { opacity: 0, scale: 1.03 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={reduceMotion ? undefined : { opacity: 0, scale: 1 }}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                >
                  <Image
                    src={heroPortraits[activeImage]}
                    alt={`Hall of Fame inductee ${activeImage + 1}`}
                    fill
                    priority={activeImage === 0}
                    sizes="(max-width: 640px) 95px, (max-width: 1024px) 150px, 180px"
                    className="object-cover object-top"
                  />
                </motion.div>
              </AnimatePresence>
            </div>

            <motion.h2
              className="font-montserrat text-[clamp(52px,9vw,126px)] font-medium uppercase leading-[1] tracking-normal text-[#000D1C]"
              initial={reduceMotion ? false : { opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...headlineTransition, delay: 0.25 }}
            >
              History
            </motion.h2>
          </div>
        </div>

        <motion.div
          className="mt-12 flex justify-center sm:mt-16 sm:justify-end lg:mt-8"
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...headlineTransition, delay: 0.45 }}
        >
          <div className="flex flex-col items-center sm:items-end">
            <div className="relative size-[110px] sm:size-[125px] lg:size-[135px]">
              <Image
                src="/logo/hlogo.svg"
                alt="Black Tech Expo Hall of Fame"
                fill
                priority
                sizes="135px"
                className="object-contain"
              />
            </div>

            <div className="mt-3 text-center sm:text-right">
              <p
                className="
                  bg-[linear-gradient(82.9deg,#000D1C_-59.86%,#4D3218_43.8%)]
                  bg-clip-text
                  font-montserrat
                  text-[22px]
                  font-bold
                  leading-[22px]
                  tracking-[-0.41px]
                  text-transparent
                "
              >
                Black Tech Expo
              </p>

              <p
                className="
                  mt-1
                  bg-[linear-gradient(82.9deg,#000D1C_-59.86%,#4D3218_43.8%)]
                  bg-clip-text
                  font-montserrat
                  text-[22px]
                  font-bold
                  leading-[22px]
                  tracking-[-0.41px]
                  text-transparent
                "
              >
                Hall of Fame
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
