"use client";

import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";

type MusicContextType = {
  startMusic: () => void;
  fadeMusic: (targetVolume?: number, duration?: number) => void;
  restoreMusic: (targetVolume?: number, duration?: number) => void;
  isPlaying: boolean;
};

const MusicContext = createContext<MusicContextType | null>(null);

export function useMusic() {
  const context = useContext(MusicContext);

  if (!context) {
    throw new Error("useMusic must be used inside MusicProvider");
  }

  return context;
}

type Props = {
  children: ReactNode;
};

export default function MusicProvider({ children }: Props) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const fadeFrameRef = useRef<number | null>(null);

  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const audio = new Audio("/music/our-song.mp3");

    audio.loop = true;
    audio.preload = "auto";
    audio.volume = 0;

    audioRef.current = audio;

    return () => {
      if (fadeFrameRef.current) {
        cancelAnimationFrame(fadeFrameRef.current);
      }

      audio.pause();
      audio.src = "";
    };
  }, []);

  const animateVolume = (targetVolume: number, duration: number) => {
    const audio = audioRef.current;

    if (!audio) return;

    if (fadeFrameRef.current) {
      cancelAnimationFrame(fadeFrameRef.current);
    }

    const startVolume = audio.volume;
    const startTime = performance.now();

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      const eased = 1 - Math.pow(1 - progress, 3);

      audio.volume = startVolume + (targetVolume - startVolume) * eased;

      if (progress < 1) {
        fadeFrameRef.current = requestAnimationFrame(animate);
      }
    };

    fadeFrameRef.current = requestAnimationFrame(animate);
  };

  const startMusic = async () => {
    const audio = audioRef.current;

    if (!audio) return;

    try {
      if (audio.paused) {
        await audio.play();
      }

      setIsPlaying(true);

      animateVolume(0.22, 1800);
    } catch {
      // Browser blocked playback.
      // It can be started by the next user interaction.
    }
  };

  const fadeMusic = (targetVolume = 0.06, duration = 1200) => {
    const audio = audioRef.current;

    if (!audio) return;

    animateVolume(targetVolume, duration);
  };

  const restoreMusic = (targetVolume = 0.22, duration = 1400) => {
    const audio = audioRef.current;

    if (!audio) return;

    animateVolume(targetVolume, duration);
  };

  return (
    <MusicContext.Provider
      value={{
        startMusic,
        fadeMusic,
        restoreMusic,
        isPlaying,
      }}
    >
      {children}
    </MusicContext.Provider>
  );
}
