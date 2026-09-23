"use client";

import { useState } from "react";

import Hero from "@/components/sections/Hero";
import Issue from "@/components/sections/Issue";
import Terminal from "@/components/sections/Terminal";
import RedoMoment from "@/components/sections/RedoMoment";
import Letter from "@/components/sections/Letter";
import Gallery from "@/components/sections/Gallery";
import Promise from "@/components/sections/Promise";
import Final from "@/components/sections/Final";

type Stage =
  | "hero"
  | "issue"
  | "terminal"
  | "redo"
  | "letter"
  | "gallery"
  | "promise"
  | "final";

export default function Home() {
  const [stage, setStage] = useState<Stage>("hero");

  return (
    <main className="min-h-screen overflow-x-hidden">
      {stage === "hero" && <Hero onNext={() => setStage("issue")} />}

      {stage === "issue" && <Issue onNext={() => setStage("terminal")} />}

      {stage === "terminal" && <Terminal onNext={() => setStage("redo")} />}

      {stage === "redo" && <RedoMoment onNext={() => setStage("letter")} />}

      {stage === "letter" && <Letter onNext={() => setStage("gallery")} />}

      {stage === "gallery" && <Gallery onNext={() => setStage("promise")} />}

      {stage === "promise" && <Promise onNext={() => setStage("final")} />}

      {stage === "final" && <Final onRestart={() => setStage("hero")} />}
    </main>
  );
}
