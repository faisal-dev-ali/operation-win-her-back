"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  Heart,
  Image as ImageIcon,
  Sparkles,
} from "lucide-react";
import { useState } from "react";

import Section from "../ui/Section";
import Button from "../Button";

type Props = {
  onNext: () => void;
};

const memories = [
  {
    number: "01",
    title: "The little things",
    text: "You somehow made ordinary conversations feel like something I wanted to remember.",
    image: "/memories/memory-01.png",
  },
  {
    number: "02",
    title: "Your smile",
    text: "Somewhere along the way, your smile became one of my favourite things to see.",
    image: "/memories/memory-03.png",
  },
  {
    number: "03",
    title: "The moments between",
    text: "It isn't always the big moments. Sometimes it's the random messages, the late nights, and the little things.",
    image: "/memories/memory-02.png",
  },
  {
    number: "04",
    title: "What I should have said",
    text: "You looked beautiful. I should have said that. Clearly. Kindly. Without making you question it.",
    image: "/memories/memory-04.jpg",
  },
];

export default function Gallery({ onNext }: Props) {
  const [active, setActive] = useState(0);

  const nextMemory = () => {
    setActive((current) => (current === memories.length - 1 ? 0 : current + 1));
  };

  const previousMemory = () => {
    setActive((current) => (current === 0 ? memories.length - 1 : current - 1));
  };

  const memory = memories[active];

  return (
    <Section id="gallery">
      <div className="w-full">
        {/* ================================= */}
        {/* HEADER */}
        {/* ================================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.7,
          }}
          className="mb-10 text-center"
        >
          <motion.div
            animate={{
              y: [0, -3, 0],
              rotate: [0, 2, -2, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="
              mx-auto
              flex
              h-11
              w-11
              items-center
              justify-center
              rounded-2xl
              border
              border-rose-400/15
              bg-rose-400/5
            "
          >
            <Sparkles size={18} className="text-rose-300" />
          </motion.div>

          <p className="mt-5 text-[10px] uppercase tracking-[0.4em] text-rose-400">
            Memories
          </p>

          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            The things I don&apos;t want
            <br />
            to forget.
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-zinc-500 sm:text-base">
            Not everything important needs a photograph.
            <br className="hidden sm:block" />
            Some memories live in the way someone makes you feel.
          </p>
        </motion.div>

        {/* ================================= */}
        {/* MEMORY CARD */}
        {/* ================================= */}

        <div className="mx-auto max-w-3xl">
          <motion.div
            key={memory.number}
            initial={{
              opacity: 0,
              x: 30,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.45,
              ease: "easeOut",
            }}
            drag="x"
            dragConstraints={{
              left: 0,
              right: 0,
            }}
            dragElastic={0.18}
            onDragEnd={(_, info) => {
              if (info.offset.x < -60) {
                nextMemory();
              }

              if (info.offset.x > 60) {
                previousMemory();
              }
            }}
            className="
              relative
              overflow-hidden
              rounded-[2rem]
              border
              border-white/10
              bg-white/[0.035]
              shadow-2xl
              shadow-black/30
              backdrop-blur-xl
            "
          >
            {/* Background glow */}

            <div
              className="
                pointer-events-none
                absolute
                -right-24
                -top-24
                h-72
                w-72
                rounded-full
                bg-rose-500/10
                blur-3xl
              "
            />

            <div
              className="
                pointer-events-none
                absolute
                -bottom-24
                -left-24
                h-72
                w-72
                rounded-full
                bg-pink-500/5
                blur-3xl
              "
            />

            <div className="relative">
              {/* ================================= */}
              {/* TOP BAR */}
              {/* ================================= */}

              <div className="flex items-center justify-between px-6 pt-6 sm:px-10 sm:pt-8">
                <span className="font-mono text-[11px] tracking-wider text-zinc-600">
                  MEMORY_{memory.number}
                </span>

                <div className="flex items-center gap-2">
                  <span className="text-[10px] uppercase tracking-[0.2em] text-zinc-700">
                    {String(active + 1).padStart(2, "0")} /{" "}
                    {String(memories.length).padStart(2, "0")}
                  </span>

                  <Heart size={17} className="fill-rose-400/20 text-rose-400" />
                </div>
              </div>

              {/* ================================= */}
              {/* IMAGE */}
              {/* ================================= */}

              <div className="px-5 pt-6 sm:px-8 sm:pt-8">
                <motion.div
                  key={memory.image}
                  initial={{
                    opacity: 0,
                    scale: 0.97,
                  }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                  }}
                  transition={{
                    duration: 0.45,
                    ease: "easeOut",
                  }}
                  className="
      relative
      flex
      h-[360px]
      w-full
      items-center
      justify-center
      overflow-hidden
      rounded-[1.5rem]
      border
      border-white/10
      bg-black/20
      sm:h-[460px]
      md:h-[520px]
    "
                >
                  <Image
                    src={memory.image}
                    alt={memory.title}
                    fill
                    sizes="(max-width: 640px) 90vw, 700px"
                    className="
        object-contain
        p-2
        sm:p-3
      "
                    priority={active === 0}
                  />

                  {/* subtle overlay */}
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-black/5" />

                  {/* top-right heart */}
                  <motion.div
                    animate={{
                      scale: [1, 1.08, 1],
                    }}
                    transition={{
                      duration: 2.2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="absolute right-4 top-4"
                  >
                    <Heart
                      size={19}
                      className="fill-white/80 text-white/80 drop-shadow-lg"
                    />
                  </motion.div>

                  {/* bottom label */}
                  <div className="absolute bottom-4 left-4">
                    <span className="rounded-full border border-white/15 bg-black/30 px-3 py-1.5 text-[10px] uppercase tracking-[0.2em] text-white/70 backdrop-blur-md">
                      A moment worth keeping
                    </span>
                  </div>
                </motion.div>
              </div>

              {/* ================================= */}
              {/* MEMORY TEXT */}
              {/* ================================= */}

              <div className="px-6 pb-2 pt-8 text-center sm:px-10">
                <p className="text-[10px] uppercase tracking-[0.3em] text-zinc-600">
                  Some things stay
                </p>

                <h3 className="mt-3 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                  {memory.title}
                </h3>

                <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-zinc-400 sm:text-base">
                  {memory.text}
                </p>
              </div>

              {/* ================================= */}
              {/* CONTROLS */}
              {/* ================================= */}

              <div className="flex items-center justify-between px-6 pb-7 pt-7 sm:px-10">
                {/* Previous */}

                <button
                  type="button"
                  onClick={previousMemory}
                  aria-label="Previous memory"
                  className="
                    flex
                    h-11
                    w-11
                    shrink-0
                    items-center
                    justify-center
                    rounded-xl
                    border
                    border-white/10
                    bg-white/5
                    text-zinc-400
                    transition
                    hover:bg-white/10
                    hover:text-white
                    active:scale-95
                  "
                >
                  <ArrowLeft size={17} />
                </button>

                {/* Dots */}

                <div className="flex items-center gap-2">
                  {memories.map((item, index) => (
                    <button
                      type="button"
                      key={item.number}
                      onClick={() => setActive(index)}
                      aria-label={`Go to memory ${index + 1}`}
                      className={`
                        h-1.5
                        rounded-full
                        transition-all
                        duration-300
                        ${
                          index === active
                            ? "w-7 bg-rose-400"
                            : "w-1.5 bg-zinc-700 hover:bg-zinc-500"
                        }
                      `}
                    />
                  ))}
                </div>

                {/* Next */}

                <button
                  type="button"
                  onClick={nextMemory}
                  aria-label="Next memory"
                  className="
                    flex
                    h-11
                    w-11
                    shrink-0
                    items-center
                    justify-center
                    rounded-xl
                    border
                    border-white/10
                    bg-white/5
                    text-zinc-400
                    transition
                    hover:bg-white/10
                    hover:text-white
                    active:scale-95
                  "
                >
                  <ArrowRight size={17} />
                </button>
              </div>
            </div>
          </motion.div>

          {/* Swipe hint */}

          <motion.p
            animate={{
              opacity: [0.45, 0.8, 0.45],
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
            }}
            className="mt-5 text-center text-[11px] text-zinc-600"
          >
            Swipe the memory or use the arrows
          </motion.p>
        </div>

        {/* ================================= */}
        {/* TRANSITION */}
        {/* ================================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.6,
            delay: 0.2,
          }}
          className="mt-12 text-center"
        >
          <div className="mx-auto mb-6 flex items-center justify-center gap-3">
            <span className="h-px w-10 bg-white/10" />

            <Heart size={13} className="fill-rose-400/70 text-rose-400" />

            <span className="h-px w-10 bg-white/10" />
          </div>

          <p className="mb-5 text-sm leading-7 text-zinc-500">
            And if there&apos;s one thing I want to remember...
            <br />
            it&apos;s how I should have treated your heart.
          </p>

          <div className="mx-auto w-full max-w-sm">
            <Button text="One last thing" pulse onClick={onNext} />
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
