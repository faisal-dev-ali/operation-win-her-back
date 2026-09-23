"use client";

import { useRef, useState } from "react";

import Hero from "@/components/sections/Hero";
import Issue from "@/components/sections/Issue";
import Terminal from "@/components/sections/Terminal";
import Letter from "@/components/sections/Letter";
import Gallery from "@/components/sections/Gallery";
import Promise from "@/components/sections/Promise";
import Final from "@/components/sections/Final";

type Stage =
  | "hero"
  | "issue"
  | "terminal"
  | "letter"
  | "gallery"
  | "promise"
  | "final";

export default function Home() {
  const [stage, setStage] = useState<Stage>("hero");

  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [musicPlaying, setMusicPlaying] = useState(false);

  const startMusic = async () => {
    try {
      if (!audioRef.current) {
        audioRef.current = new Audio("/music/song.mp3");

        audioRef.current.loop = true;
        audioRef.current.volume = 0.45;
        audioRef.current.preload = "auto";
      }

      await audioRef.current.play();
      setMusicPlaying(true);
    } catch (error) {
      console.error("Unable to play music:", error);
    }
  };

  const goToIssue = async () => {
    await startMusic();
    setStage("issue");
  };

  const toggleMusic = async () => {
    if (!audioRef.current) {
      await startMusic();
      return;
    }

    if (audioRef.current.paused) {
      await audioRef.current.play();
      setMusicPlaying(true);
    } else {
      audioRef.current.pause();
      setMusicPlaying(false);
    }
  };

  return (
    <main className="min-h-screen overflow-x-hidden">
      {/* Music control */}
      <button
        type="button"
        onClick={toggleMusic}
        className="
          fixed
          bottom-5
          right-5
          z-[999]
          flex
          h-12
          w-12
          items-center
          justify-center
          rounded-full
          border
          border-white/10
          bg-black/60
          text-rose-300
          shadow-xl
          shadow-black/30
          backdrop-blur-xl
        "
        aria-label={musicPlaying ? "Pause music" : "Play music"}
      >
        {musicPlaying ? "♫" : "♪"}
      </button>

      {stage === "hero" && <Hero onNext={goToIssue} />}

      {stage === "issue" && <Issue onNext={() => setStage("terminal")} />}

      {stage === "terminal" && <Terminal onNext={() => setStage("letter")} />}

      {stage === "letter" && <Letter onNext={() => setStage("gallery")} />}

      {stage === "gallery" && <Gallery onNext={() => setStage("promise")} />}

      {stage === "promise" && <Promise onNext={() => setStage("final")} />}

      {stage === "final" && <Final onRestart={() => setStage("hero")} />}
    </main>
  );
}
