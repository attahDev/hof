"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";

/**
 * Ambient soundscape — a calm background bed, not narration.
 */
const NARRATION_SRC = "/audio/hall-of-fame-ambient.mp3";

type StoryAudioContextValue = {
  isPlaying: boolean;
  isReady: boolean;
  /** false once we've confirmed the file 404s / fails to decode */
  hasTrack: boolean;
  toggle: () => void;
  play: () => void;
  pause: () => void;
};

const StoryAudioContext = createContext<StoryAudioContextValue | null>(null);

export function useStoryAudio() {
  const ctx = useContext(StoryAudioContext);
  if (!ctx) {
    throw new Error("useStoryAudio must be used within StoryAudioProvider");
  }
  return ctx;
}

export default function StoryAudioProvider({
  children,
}: {
  children: ReactNode;
}) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isReady, setIsReady] = useState(false);
  const [hasTrack, setHasTrack] = useState(true);

  useEffect(() => {
    const audio = new Audio(NARRATION_SRC);
    audio.loop = true;
    audio.preload = "none";
    audio.volume = 0.32;

    const handleCanPlay = () => setIsReady(true);
    const handleError = () => {
      setHasTrack(false);
      setIsReady(false);
    };
    const handlePause = () => setIsPlaying(false);
    const handlePlay = () => setIsPlaying(true);

    audio.addEventListener("canplaythrough", handleCanPlay);
    audio.addEventListener("error", handleError);
    audio.addEventListener("pause", handlePause);
    audio.addEventListener("play", handlePlay);

    audioRef.current = audio;

    return () => {
      audio.removeEventListener("canplaythrough", handleCanPlay);
      audio.removeEventListener("error", handleError);
      audio.removeEventListener("pause", handlePause);
      audio.removeEventListener("play", handlePlay);
      audio.pause();
      audioRef.current = null;
    };
  }, []);

  const play = useCallback(() => {
    const audio = audioRef.current;
    if (!audio || !hasTrack) return;
    audio.play().catch(() => {
      // Autoplay was blocked or the source failed — fail silently,
      // the dock simply stays in its "off" state.
      setHasTrack((prev) => prev);
    });
  }, [hasTrack]);

  const pause = useCallback(() => {
    audioRef.current?.pause();
  }, []);

  const toggle = useCallback(() => {
    if (isPlaying) {
      pause();
    } else {
      play();
    }
  }, [isPlaying, pause, play]);

  return (
    <StoryAudioContext.Provider
      value={{ isPlaying, isReady, hasTrack, toggle, play, pause }}
    >
      {children}
    </StoryAudioContext.Provider>
  );
}
