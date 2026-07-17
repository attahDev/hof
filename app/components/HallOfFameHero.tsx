"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

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

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveImage((current) => (current + 1) % heroPortraits.length);
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative flex min-h-[588px] w-full overflow-hidden bg-[#F5EBE1] px-5 py-14 sm:px-10 sm:py-16 lg:px-16">
      <div className="relative mx-auto w-full max-w-[1500px]">
        {/* Main hero text */}
        <div className="mx-auto flex w-full max-w-[1100px] flex-col gap-5 pt-10 sm:gap-7 lg:pt-16">
          {/* First row */}
          <div className="flex items-center justify-center whitespace-nowrap">
            <h1 className="font-montserrat text-[clamp(48px,9vw,115px)] font-medium uppercase leading-[1] tracking-normal text-[#000D1C]">
              Time To Enter
            </h1>
          </div>

          {/* Second row */}
          <div className="flex items-center justify-center gap-[clamp(18px,2.5vw,35px)]">
            {/* Fast-changing portraits */}
            <div className="relative h-[clamp(75px,9vw,140px)] w-[clamp(95px,12vw,180px)] shrink-0 overflow-hidden bg-[#000D1C]">
              {heroPortraits.map((src, index) => (
                <Image
                  key={src}
                  src={src}
                  alt={`Hall of Fame inductee ${index + 1}`}
                  fill
                  priority={index === 0}
                  sizes="(max-width: 640px) 95px, (max-width: 1024px) 150px, 180px"
                  className={`object-cover object-top transition-opacity duration-200 ${index === activeImage ? "opacity-100" : "opacity-0"
                    }`}
                />
              ))}
            </div>

            <h2 className="font-montserrat text-[clamp(52px,9vw,126px)] font-medium uppercase leading-[1] tracking-normal text-[#000D1C]">
              History
            </h2>
          </div>
        </div>

        {/* Bottom-right brand identity */}
        <div className="mt-12 flex justify-center sm:mt-16 sm:justify-end lg:mt-8">
          <div className="flex flex-col items-center sm:items-end">
            {/* Logo */}
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

            {/* Brand text */}
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
        </div>
      </div>
    </section>
  );
}