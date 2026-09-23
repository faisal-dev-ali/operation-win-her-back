"use client";

import { motion } from "framer-motion";
import { Heart, LockKeyhole, Sparkles } from "lucide-react";

import Section from "../ui/Section";
import Button from "../Button";
import { SITE } from "@/data/site";

type Props = {
  onNext: () => void;
};

export default function Hero({ onNext }: Props) {
  return (
    <Section id="hero">
      <div className="relative mx-auto w-full max-w-4xl text-center">
        {/* Ambient glow */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          className="
            pointer-events-none
            absolute
            left-1/2
            top-1/2
            h-72
            w-72
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-rose-500/10
            blur-[110px]
            sm:h-96
            sm:w-96
          "
        />

        {/* Floating decorative particles */}
        <motion.div
          animate={{
            y: [0, -8, 0],
            opacity: [0.35, 0.7, 0.35],
          }}
          transition={{
            duration: 3.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            pointer-events-none
            absolute
            left-[12%]
            top-[18%]
            hidden
            sm:block
          "
        >
          <Sparkles size={14} className="text-rose-400/50" />
        </motion.div>

        <motion.div
          animate={{
            y: [0, 7, 0],
            opacity: [0.25, 0.6, 0.25],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
          className="
            pointer-events-none
            absolute
            right-[12%]
            top-[32%]
            hidden
            sm:block
          "
        >
          <Heart size={12} className="fill-rose-400/20 text-rose-400/40" />
        </motion.div>

        <div className="relative z-10">
          {/* Status badge */}
          <motion.div
            initial={{ opacity: 0, y: 12, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.7 }}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.035] px-4 py-2 backdrop-blur-xl"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-rose-400 opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-rose-400" />
            </span>

            <span className="text-[10px] uppercase tracking-[0.3em] text-zinc-400 sm:text-xs">
              Relationship Status
            </span>
          </motion.div>

          {/* Small issue reference */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="mt-7 flex items-center justify-center gap-2 text-[10px] uppercase tracking-[0.25em] text-zinc-600"
          >
            <LockKeyhole size={11} />
            <span>Private · Personal · For {SITE.herName}</span>
          </motion.div>

          {/* Main heading */}
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.15,
              ease: "easeOut",
            }}
            className="
              mt-7
              text-[3.5rem]
              font-semibold
              leading-[0.95]
              tracking-[-0.055em]
              text-white
              sm:text-7xl
              md:text-8xl
            "
          >
            Something
            <br />
            <span className="text-rose-400">went wrong.</span>
          </motion.h1>

          {/* Error line */}
          <motion.div
            initial={{ opacity: 0, scaleX: 0.8 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="mx-auto mt-7 flex max-w-xs items-center justify-center gap-3"
          >
            <div className="h-px flex-1 bg-white/10" />

            <span className="rounded-full border border-rose-400/15 bg-rose-400/5 px-3 py-1 text-[10px] font-mono tracking-wider text-rose-300/80">
              ERROR #{SITE.issueId.replace("#", "")}
            </span>

            <div className="h-px flex-1 bg-white/10" />
          </motion.div>

          {/* Emotional copy */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.55,
            }}
            className="mx-auto mt-9 max-w-lg"
          >
            <p className="text-base leading-8 text-zinc-400 sm:text-lg sm:leading-9">
              One careless sentence.
              <br />
              One completely wrong choice of words.
              <br />
              <span className="text-zinc-200">
                And suddenly, I hurt someone
                <br className="sm:hidden" /> I never wanted to hurt.
              </span>
            </p>
          </motion.div>

          {/* Personal line */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.75,
            }}
            className="mx-auto mt-7 flex max-w-md items-center justify-center gap-2"
          >
            <Heart size={12} className="fill-rose-400/70 text-rose-400/70" />

            <p className="text-sm text-zinc-500">
              And you deserved better from me, {SITE.herName}.
            </p>

            <Heart size={12} className="fill-rose-400/70 text-rose-400/70" />
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.95,
            }}
            className="mx-auto mt-11 w-full max-w-sm"
          >
            <Button text="See what happened" pulse onClick={onNext} />
          </motion.div>

          {/* Bottom hint */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 1,
              delay: 1.4,
            }}
            className="mt-7"
          >
            <p className="text-[10px] uppercase tracking-[0.28em] text-zinc-700">
              I owe you an explanation
            </p>
          </motion.div>
        </div>
      </div>
    </Section>
  );
}
