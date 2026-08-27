"use client";

import type { ReactNode } from "react";
import StoryAudioProvider from "./StoryAudioProvider";
import NarrationDock from "./NarrationDock";
import ChapterRail from "./ChapterRail";
import CinematicOpening from "../CinematicOpening";

export default function StoryExperience({ children }: { children: ReactNode }) {
  return (
    <StoryAudioProvider>
      <CinematicOpening />
      <ChapterRail />
      <NarrationDock />

      {/* Subtle cinematic grain — purely decorative, never blocks clicks */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-[2] opacity-[0.05] mix-blend-overlay"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      />

      {children}
    </StoryAudioProvider>
  );
}
