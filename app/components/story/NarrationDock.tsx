"use client";

import { Volume2, VolumeX } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { useStoryAudio } from "./StoryAudioProvider";

export default function NarrationDock() {
  const { isPlaying, hasTrack, toggle } = useStoryAudio();
  const reduceMotion = useReducedMotion();

  return (
    <motion.button
      type="button"
      onClick={toggle}
      disabled={!hasTrack}
      aria-label={
        !hasTrack
          ? "Narration unavailable"
          : isPlaying
            ? "Pause the Hall of Fame narration"
            : "Play the Hall of Fame narration"
      }
      title={
        !hasTrack
          ? "Narration coming soon"
          : "African Giants — a spoken passage through this Hall"
      }
      initial={reduceMotion ? false : { opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 1.2, ease: "easeOut" }}
      className="
        group fixed bottom-5 right-5 z-40 flex items-center gap-2.5
        overflow-hidden rounded-full border border-[#D9B700]/40
        bg-[linear-gradient(140deg,#0A1017_0%,#000512_100%)]
        px-4 py-3 shadow-[0_8px_28px_rgba(0,0,0,0.45)]
        backdrop-blur-sm transition-all duration-300
        hover:border-[#D9B700]/80
        disabled:cursor-not-allowed disabled:opacity-40
        sm:bottom-8 sm:right-8
      "
    >
      <span className="relative flex h-4 w-4 items-center justify-center">
        {isPlaying ? (
          <Volume2 size={17} className="text-[#D9B700]" strokeWidth={2} />
        ) : (
          <VolumeX size={17} className="text-[#DBD2C8]" strokeWidth={2} />
        )}
      </span>

      {/* Equalizer bars — only animate while actually playing */}
      <span className="flex items-end gap-[3px]" aria-hidden="true">
        {[0, 1, 2].map((bar) => (
          <span
            key={bar}
            className="w-[3px] rounded-full bg-[#D9B700]"
            style={{
              height: isPlaying ? undefined : 4,
              animation:
                isPlaying && !reduceMotion
                  ? `eq-bounce 0.9s ease-in-out ${bar * 0.15}s infinite`
                  : "none",
            }}
          />
        ))}
      </span>

      <span className="max-w-0 overflow-hidden whitespace-nowrap font-montserrat text-[13px] font-medium tracking-[0.02em] text-[#DBD2C8] transition-all duration-300 group-hover:max-w-[150px] group-hover:pl-0.5">
        African Giants
      </span>

      <style jsx>{`
        @keyframes eq-bounce {
          0%,
          100% {
            height: 4px;
          }
          50% {
            height: 14px;
          }
        }
      `}</style>
    </motion.button>
  );
}
