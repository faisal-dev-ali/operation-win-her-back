"use client";

import { motion } from "framer-motion";
import { Check, GitCommit, Heart, ShieldCheck, Sparkles } from "lucide-react";

import Section from "../ui/Section";
import Button from "../Button";
import { SITE } from "@/data/site";

type Props = {
  onNext: () => void;
};

const promises = [
  {
    title: "Think before I speak",
    description: "Especially when my words can affect someone I care about.",
    icon: ShieldCheck,
  },
  {
    title: "Appreciate, never make you doubt",
    description:
      "If I think you're beautiful, I should make sure you hear it from me.",
    icon: Heart,
  },
  {
    title: "Listen when something hurts",
    description:
      "Not defend myself. Not find excuses. Just listen and understand.",
    icon: Sparkles,
  },
  {
    title: "Learn from my mistakes",
    description:
      "An apology means more when the same mistake doesn't keep happening.",
    icon: GitCommit,
  },
];

export default function Promise({ onNext }: Props) {
  return (
    <Section id="promise">
      <div className="w-full">
        {/* Header */}
        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.4,
          }}
          transition={{
            duration: 0.7,
          }}
          className="mb-10 text-center"
        >
          <div className="mx-auto flex w-fit items-center gap-2 rounded-full border border-rose-400/15 bg-rose-400/5 px-4 py-2">
            <GitCommit size={14} className="text-rose-400" />

            <span className="font-mono text-xs text-zinc-400">
              release v2.0.0
            </span>
          </div>

          <h2 className="mt-6 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Release Notes
          </h2>

          <p className="mt-4 text-sm text-zinc-500">
            What changed after I understood the bug.
          </p>
        </motion.div>

        {/* Release card */}
        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.25,
          }}
          transition={{
            duration: 0.8,
          }}
          className="
            mx-auto
            max-w-3xl
            overflow-hidden
            rounded-[2rem]
            border
            border-white/10
            bg-white/[0.035]
            shadow-2xl
            shadow-black/20
            backdrop-blur-xl
          "
        >
          {/* Card header */}
          <div className="border-b border-white/10 bg-white/[0.025] px-6 py-5 sm:px-8">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="font-mono text-xs text-zinc-600">
                  relationship-service
                </p>

                <p className="mt-1 text-sm font-medium text-zinc-300">
                  {SITE.yourName}
                </p>
              </div>

              <span className="rounded-full border border-emerald-400/15 bg-emerald-400/5 px-3 py-1 text-xs text-emerald-400">
                stable
              </span>
            </div>
          </div>

          {/* Version */}
          <div className="border-b border-white/10 px-6 py-6 sm:px-8">
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-rose-400/10">
                <GitCommit size={18} className="text-rose-400" />
              </div>

              <div>
                <p className="font-mono text-sm text-zinc-300">
                  v2.0.0 — communication update
                </p>

                <p className="mt-1 text-xs leading-5 text-zinc-600">
                  Major improvements to the way I communicate with someone
                  important to me.
                </p>
              </div>
            </div>
          </div>

          {/* Changes */}
          <div className="divide-y divide-white/5">
            {promises.map((promise, index) => {
              const Icon = promise.icon;

              return (
                <motion.div
                  key={promise.title}
                  initial={{
                    opacity: 0,
                    x: -15,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.5,
                  }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.08,
                  }}
                  className="
                    flex
                    gap-4
                    px-6
                    py-6
                    sm:px-8
                  "
                >
                  {/* Icon */}
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white/5">
                    <Icon size={17} className="text-rose-400" />
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <Check size={14} className="text-emerald-400" />

                      <h3 className="text-sm font-medium text-zinc-200 sm:text-base">
                        {promise.title}
                      </h3>
                    </div>

                    <p className="mt-2 text-sm leading-6 text-zinc-500">
                      {promise.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Known bugs */}
          <div className="border-t border-white/10 bg-white/[0.02] px-6 py-6 sm:px-8">
            <div className="flex items-start gap-3">
              <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-emerald-400/10">
                <Check size={14} className="text-emerald-400" />
              </div>

              <div>
                <p className="text-sm font-medium text-zinc-300">Known bugs</p>

                <p className="mt-1 text-sm leading-6 text-zinc-600">
                  Still human. Still imperfect. But willing to understand,
                  improve, and do better.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Final transition */}
        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.5,
          }}
          transition={{
            duration: 0.7,
            delay: 0.2,
          }}
          className="mt-12 text-center"
        >
          <p className="mx-auto max-w-md text-sm leading-7 text-zinc-500">
            I don&apos;t expect a version update to erase what happened.
            <br />I just want you to know that I understood it.
          </p>

          {/* Next section CTA */}
          <div className="mx-auto mt-7 w-full max-w-sm">
            <Button text="One last message" pulse onClick={onNext} />
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
