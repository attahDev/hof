"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Volume2, VolumeX } from "lucide-react";
import { useStoryAudio } from "./story/StoryAudioProvider";

/**
 * Optional real video opening. Drop a file at this path and it plays
 * automatically instead of the Ken Burns portrait sequence below —
 * no code changes needed.
 */
const OPENING_VIDEO_SRC = "/video/hall-of-fame-opening.mp4";

const SEQUENCE_IMAGES = [
  { src: "/home/legacy.png", caption: "Six centuries of Black leadership" },
  { src: "/home/mansa.png", caption: "Empires, scholarship, and wealth" },
  { src: "/home/queen.png", caption: "Sovereignty defended, unbroken" },
  { src: "/home/achebe.png", caption: "Stories told in our own voice" },
];

const SESSION_KEY = "hof_intro_seen_v1";
const SLIDE_DURATION = 2100; // ms per portrait

export default function CinematicOpening() {
  const reduceMotion = useReducedMotion();
  const { play, isPlaying } = useStoryAudio();

  // Starts "dismissed" on both server and client so the very first
  // client render matches the server-rendered (hidden) markup — no
  // hydration mismatch. The effect below then reveals it, once, only
  // if this browser hasn't seen it yet this session.
  const [dismissed, setDismissed] = useState(true);
  const [activeSlide, setActiveSlide] = useState(0);
  const [videoFailed, setVideoFailed] = useState(false);
  const skipTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  const shouldShow = !dismissed && !reduceMotion;

  useEffect(() => {
    const alreadySeen =
      window.sessionStorage.getItem(SESSION_KEY) === "1";
    if (alreadySeen) return;
    // eslint-disable-next-line react-hooks/set-state-in-effect -- intentional: reveals a client-only, session-gated intro after the hydration-safe first paint
    setDismissed(false);
  }, []);

  // Lock page scroll only while the intro is actually showing.
  useEffect(() => {
    if (!shouldShow) return;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [shouldShow]);

  // Portrait crossfade cadence (only relevant if no video plays).
  useEffect(() => {
    if (!shouldShow || !videoFailed) return;
    const interval = setInterval(() => {
      setActiveSlide((current) => {
        const next = current + 1;
        if (next >= SEQUENCE_IMAGES.length) {
          finish();
          return current;
        }
        return next;
      });
    }, SLIDE_DURATION);
    return () => clearInterval(interval);
  }, [shouldShow, videoFailed]);

  // Fallback auto-dismiss timer once we know we're in image mode.
  useEffect(() => {
    if (!shouldShow || !videoFailed) return;
    skipTimeout.current = setTimeout(
      finish,
      SLIDE_DURATION * SEQUENCE_IMAGES.length + 400
    );
    return () => {
      if (skipTimeout.current) clearTimeout(skipTimeout.current);
    };
  }, [shouldShow, videoFailed]);

  function finish() {
    setDismissed(true);
    if (typeof window !== "undefined") {
      window.sessionStorage.setItem(SESSION_KEY, "1");
    }
  }

  function handleEnableSound() {
    play();
  }

  if (!shouldShow) return null;

  return (
    <AnimatePresence>
      {shouldShow && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden bg-[#000512]"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.9, ease: "easeInOut" } }}
        >
          {/* Layer 1: real video, if present */}
          {!videoFailed && (
            <video
              className="absolute inset-0 h-full w-full object-cover"
              src={OPENING_VIDEO_SRC}
              autoPlay
              muted
              playsInline
              onEnded={finish}
              onError={() => setVideoFailed(true)}
            />
          )}

          {/* Layer 2: Ken Burns portrait sequence (fallback / default) */}
          {videoFailed && (
            <AnimatePresence mode="sync">
              <motion.div
                key={SEQUENCE_IMAGES[activeSlide].src}
                className="absolute inset-0"
                initial={{ opacity: 0, scale: 1.02 }}
                animate={{ opacity: 1, scale: 1.1 }}
                exit={{ opacity: 0 }}
                transition={{
                  opacity: { duration: 0.9, ease: "easeInOut" },
                  scale: { duration: SLIDE_DURATION / 1000 + 0.4, ease: "linear" },
                }}
              >
                <Image
                  src={SEQUENCE_IMAGES[activeSlide].src}
                  alt=""
                  fill
                  priority
                  sizes="100vw"
                  className="object-cover object-top opacity-70"
                />
              </motion.div>
            </AnimatePresence>
          )}

          {/* Vignette so type stays legible over either layer */}
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(120%_90%_at_50%_50%,rgba(0,5,18,0.35)_0%,rgba(0,5,18,0.92)_100%)]" />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#000512] to-transparent" />

          {/* Copy */}
          <div className="relative z-10 flex flex-col items-center px-6 text-center">
            <motion.p
              className="font-montserrat text-[12px] font-semibold uppercase tracking-[0.35em] text-[#D9B700] sm:text-[14px]"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.7, ease: "easeOut" }}
            >
              Black Tech Expo
            </motion.p>

            <motion.h1
              className="mt-4 bg-[linear-gradient(180deg,#F5EBE1_0%,#BBA486_100%)] bg-clip-text font-montserrat text-[clamp(38px,9vw,96px)] font-medium uppercase leading-[1.02] tracking-tight text-transparent"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55, duration: 0.8, ease: "easeOut" }}
            >
              Time to Enter
              <br />
              History
            </motion.h1>

            <motion.p
              className="mt-6 max-w-[560px] font-montserrat text-[15px] font-light leading-relaxed text-[#DBD2C8] sm:text-[18px]"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.7, ease: "easeOut" }}
            >
              A living archive of African giants — the leaders, thinkers and
              builders whose legacy still moves us forward.
            </motion.p>

            <motion.button
              type="button"
              onClick={handleEnableSound}
              className="mt-9 inline-flex items-center gap-2.5 rounded-full border border-[#D9B700]/50 px-5 py-2.5 font-montserrat text-[13px] font-medium uppercase tracking-[0.08em] text-[#D9B700] transition hover:bg-[#D9B700]/10"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.15, duration: 0.6, ease: "easeOut" }}
            >
              {isPlaying ? <Volume2 size={15} /> : <VolumeX size={15} />}
              {isPlaying ? "Sound on" : "Enter with sound"}
            </motion.button>
          </div>

          {/* Skip */}
          <button
            type="button"
            onClick={finish}
            className="absolute right-6 top-6 z-10 font-montserrat text-[13px] font-medium uppercase tracking-[0.1em] text-[#EAEAEA]/70 transition hover:text-[#EAEAEA] sm:right-10 sm:top-10"
          >
            Skip intro →
          </button>

          {/* Progress scrubber */}
          <div className="absolute inset-x-0 bottom-0 h-[3px] w-full bg-white/10">
            <motion.div
              className="h-full bg-[#D9B700]"
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{
                duration: videoFailed
                  ? (SLIDE_DURATION * SEQUENCE_IMAGES.length) / 1000
                  : 6,
                ease: "linear",
              }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
