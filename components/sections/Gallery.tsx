"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Heart, Sparkles } from "lucide-react";
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
    image: "/memories/memory-04.JPG",
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
      <div className="relative w-full overflow-hidden">
        {/* =====================================================
            BACKGROUND
        ====================================================== */}

        <motion.div
          animate={{
            scale: [1, 1.08, 1],
            opacity: [0.35, 0.6, 0.35],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            pointer-events-none
            absolute
            left-1/2
            top-1/3
            h-[28rem]
            w-[28rem]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-rose-500/[0.07]
            blur-[120px]
          "
        />

        <div className="relative z-10">
          {/* =====================================================
              HEADER
          ====================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              y: 25,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
            }}
            className="mx-auto max-w-2xl text-center"
          >
            <motion.div
              animate={{
                scale: [1, 1.06, 1],
                rotate: [0, 3, -3, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                mx-auto
                flex
                h-14
                w-14
                items-center
                justify-center
                rounded-full
                border
                border-rose-300/15
                bg-rose-400/[0.06]
                shadow-lg
                shadow-rose-500/10
              "
            >
              <Heart size={21} className="fill-rose-400 text-rose-400" />
            </motion.div>

            <div className="mt-7 flex items-center justify-center gap-3">
              <span className="h-px w-8 bg-rose-400/25" />

              <p
                className="
                  text-[10px]
                  uppercase
                  tracking-[0.4em]
                  text-rose-300/70
                  sm:text-xs
                "
              >
                Our little memories
              </p>

              <span className="h-px w-8 bg-rose-400/25" />
            </div>

            <h2
              className="
                mt-5
                text-4xl
                font-semibold
                leading-[1.08]
                tracking-[-0.045em]
                text-white
                sm:text-5xl
              "
              style={{
                fontFamily: "var(--font-playfair)",
              }}
            >
              The things I don&apos;t want
              <br />
              <span className="text-rose-300">to forget.</span>
            </h2>

            <p
              className="
                mx-auto
                mt-5
                max-w-lg
                text-sm
                leading-7
                text-zinc-500
                sm:text-base
              "
            >
              Not everything important needs a photograph.
              <br className="hidden sm:block" />
              Some memories live in the way someone makes you feel.
            </p>
          </motion.div>

          {/* =====================================================
              PHOTO CARD
          ====================================================== */}

          <div className="mx-auto mt-10 w-full max-w-3xl sm:mt-12">
            <motion.div
              key={memory.image}
              initial={{
                opacity: 0,
                y: 18,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.5,
                ease: "easeOut",
              }}
              drag="x"
              dragConstraints={{
                left: 0,
                right: 0,
              }}
              dragElastic={0.12}
              onDragEnd={(_, info) => {
                if (info.offset.x < -70) {
                  nextMemory();
                }

                if (info.offset.x > 70) {
                  previousMemory();
                }
              }}
              className="
                overflow-hidden
                rounded-[2rem]
                border
                border-white/[0.08]
                bg-white/[0.025]
                p-2
                shadow-2xl
                shadow-black/30
                backdrop-blur-xl
                sm:p-3
              "
            >
              {/* =================================================
                  PHOTO
              ================================================== */}

              <div
                className="
    relative
    w-full
    overflow-hidden
    rounded-[1.5rem]
    bg-[#0b090b]
  "
              >
                <motion.div
                  key={memory.image}
                  initial={{
                    opacity: 0,
                    scale: 0.98,
                  }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                  }}
                  transition={{
                    duration: 0.5,
                    ease: "easeOut",
                  }}
                  className="relative w-full"
                >
                  <Image
                    src={memory.image}
                    alt={memory.title}
                    width={1200}
                    height={1600}
                    sizes="(max-width: 640px) 92vw, 720px"
                    className="
        block
        h-auto
        w-full
        object-contain
      "
                    priority={active === 0}
                  />

                  {/* Very subtle cinematic shade */}
                  <div
                    className="
        pointer-events-none
        absolute
        inset-0
        bg-gradient-to-t
        from-black/20
        via-transparent
        to-transparent
      "
                  />

                  {/* Heart */}
                  <motion.div
                    animate={{
                      scale: [1, 1.08, 1],
                    }}
                    transition={{
                      duration: 2.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="
        absolute
        right-4
        top-4
        flex
        h-10
        w-10
        items-center
        justify-center
        rounded-full
        border
        border-white/15
        bg-black/30
        backdrop-blur-md
      "
                  >
                    <Heart size={17} className="fill-white text-white" />
                  </motion.div>

                  {/* Caption */}
                  <div className="absolute bottom-4 left-4">
                    <span
                      className="
          rounded-full
          border
          border-white/15
          bg-black/35
          px-3
          py-1.5
          text-[9px]
          uppercase
          tracking-[0.2em]
          text-white/75
          backdrop-blur-md
        "
                    >
                      A moment worth keeping
                    </span>
                  </div>
                </motion.div>
              </div>

              {/* =================================================
                  MEMORY TEXT
              ================================================== */}

              <motion.div
                key={`${memory.image}-text`}
                initial={{
                  opacity: 0,
                  y: 8,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.4,
                }}
                className="
                  px-5
                  pb-2
                  pt-8
                  text-center
                  sm:px-10
                "
              >
                <div className="flex items-center justify-center gap-2">
                  <span className="h-px w-6 bg-rose-400/20" />

                  <Sparkles size={12} className="text-rose-300/60" />

                  <span className="h-px w-6 bg-rose-400/20" />
                </div>

                <p
                  className="
                    mt-4
                    text-[10px]
                    uppercase
                    tracking-[0.35em]
                    text-zinc-600
                  "
                >
                  A little memory
                </p>

                <h3
                  className="
                    mt-3
                    text-2xl
                    font-semibold
                    tracking-tight
                    text-white
                    sm:text-3xl
                  "
                  style={{
                    fontFamily: "var(--font-playfair)",
                  }}
                >
                  {memory.title}
                </h3>

                <p
                  className="
                    mx-auto
                    mt-4
                    max-w-xl
                    text-sm
                    leading-7
                    text-zinc-400
                    sm:text-base
                  "
                >
                  {memory.text}
                </p>
              </motion.div>

              {/* =================================================
                  CONTROLS
              ================================================== */}

              <div
                className="
                  flex
                  items-center
                  justify-between
                  px-4
                  pb-5
                  pt-7
                  sm:px-8
                "
              >
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
                    rounded-full
                    border
                    border-white/10
                    bg-white/[0.035]
                    text-zinc-400
                    transition-all
                    active:scale-95
                    hover:border-rose-300/20
                    hover:bg-rose-400/[0.06]
                    hover:text-rose-300
                  "
                >
                  <ArrowLeft size={17} />
                </button>

                {/* Dots */}
                <div className="flex items-center gap-2">
                  {memories.map((item, index) => (
                    <button
                      key={item.number}
                      type="button"
                      onClick={() => setActive(index)}
                      aria-label={`View memory ${index + 1}`}
                      className="
                        flex
                        h-6
                        items-center
                        justify-center
                      "
                    >
                      <span
                        className={`
                          block
                          rounded-full
                          transition-all
                          duration-300
                          ${
                            index === active
                              ? "h-1.5 w-8 bg-rose-400"
                              : "h-1.5 w-1.5 bg-zinc-700"
                          }
                        `}
                      />
                    </button>
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
                    rounded-full
                    border
                    border-white/10
                    bg-white/[0.035]
                    text-zinc-400
                    transition-all
                    active:scale-95
                    hover:border-rose-300/20
                    hover:bg-rose-400/[0.06]
                    hover:text-rose-300
                  "
                >
                  <ArrowRight size={17} />
                </button>
              </div>
            </motion.div>

            {/* Swipe hint */}
            <motion.p
              animate={{
                opacity: [0.25, 0.55, 0.25],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                mt-5
                text-center
                text-[9px]
                uppercase
                tracking-[0.25em]
                text-zinc-700
              "
            >
              Swipe to see the next memory
            </motion.p>
          </div>

          {/* =====================================================
              NEXT CHAPTER
          ====================================================== */}

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
              delay: 0.35,
            }}
            className="mt-12 text-center"
          >
            <div className="mb-6 flex items-center justify-center gap-3">
              <span className="h-px w-10 bg-white/10" />

              <Heart size={13} className="fill-rose-400/70 text-rose-400" />

              <span className="h-px w-10 bg-white/10" />
            </div>

            <p
              className="
                mx-auto
                max-w-md
                text-sm
                leading-7
                text-zinc-500
              "
            >
              Some moments become memories.
              <br />
              Some people become a part of your heart.
            </p>

            <div className="mx-auto mt-7 w-full max-w-sm">
              <Button text="One last thing" pulse onClick={onNext} />
            </div>

            <p
              className="
                mt-5
                text-[10px]
                uppercase
                tracking-[0.25em]
                text-zinc-700
              "
            >
              Keep going
            </p>
          </motion.div>
        </div>
      </div>
    </Section>
  );
}
