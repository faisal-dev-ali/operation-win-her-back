"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import Hero from "@/components/sections/Hero";
import Issue from "@/components/sections/Issue";
import Terminal from "@/components/sections/Terminal";
import RedoMoment from "@/components/sections/RedoMoment";
import Letter from "@/components/sections/Letter";
import Gallery from "@/components/sections/Gallery";
import Promise from "@/components/sections/Promise";
import Final from "@/components/sections/Final";

import MusicProvider, { useMusic } from "@/components/effects/MusicProvider";

import HeartTouch from "@/components/effects/HeartTouch";

type Stage =
  | "hero"
  | "issue"
  | "terminal"
  | "redo"
  | "letter"
  | "gallery"
  | "promise"
  | "final";

function Story() {
  const [stage, setStage] = useState<Stage>("hero");
  const { startMusic } = useMusic();

  const nextStage = (next: Stage) => {
    // Start music from the user's interaction.
    startMusic();

    setStage(next);
  };

  return (
    <>
      {/* Subtle floating hearts wherever she taps */}
      <HeartTouch />

      <main className="min-h-screen overflow-x-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={stage}
            initial={{
              opacity: 0,
              y: 14,
              scale: 0.995,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              y: -10,
              scale: 1.005,
            }}
            transition={{
              duration: 0.65,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            {stage === "hero" && <Hero onNext={() => nextStage("issue")} />}

            {stage === "issue" && (
              <Issue onNext={() => nextStage("terminal")} />
            )}

            {stage === "terminal" && (
              <Terminal onNext={() => nextStage("redo")} />
            )}

            {stage === "redo" && (
              <RedoMoment onNext={() => nextStage("letter")} />
            )}

            {stage === "letter" && (
              <Letter onNext={() => nextStage("gallery")} />
            )}

            {stage === "gallery" && (
              <Gallery onNext={() => nextStage("promise")} />
            )}

            {stage === "promise" && (
              <Promise onNext={() => nextStage("final")} />
            )}

            {stage === "final" && (
              <Final
                onRestart={() => {
                  startMusic();
                  setStage("hero");
                }}
              />
            )}
          </motion.div>
        </AnimatePresence>
      </main>
    </>
  );
}

export default function Home() {
  return (
    <MusicProvider>
      <Story />
    </MusicProvider>
  );
}
