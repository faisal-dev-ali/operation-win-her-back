"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight, Heart, Sparkles, Stars } from "lucide-react";
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

const stars = Array.from({ length: 18 }, (_, index) => ({
  id: index,
  left: `${(index * 37) % 100}%`,
  top: `${(index * 61) % 100}%`,
  size: 2 + (index % 3),
  delay: (index % 5) * 0.7,
}));

const petals = Array.from({ length: 9 }, (_, index) => ({
  id: index,
  left: `${8 + ((index * 29) % 84)}%`,
  delay: index * 1.1,
  duration: 8 + (index % 4),
  size: 7 + (index % 4),
}));

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
        {/* =========================================================
            ATMOSPHERE
        ========================================================== */}

        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          {/* Main rose glow */}
          <motion.div
            animate={{
              scale: [1, 1.12, 1],
              opacity: [0.28, 0.5, 0.28],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="
              absolute
              left-1/2
              top-[30%]
              h-[30rem]
              w-[30rem]
              -translate-x-1/2
              -translate-y-1/2
              rounded-full
              bg-[#c87591]/[0.09]
              blur-[120px]
            "
          />

          {/* Wine glow */}
          <div
            className="
              absolute
              -left-32
              top-[45%]
              h-72
              w-72
              rounded-full
              bg-[#8f4564]/[0.1]
              blur-[110px]
            "
          />

          {/* Champagne glow */}
          <div
            className="
              absolute
              -right-32
              top-[18%]
              h-64
              w-64
              rounded-full
              bg-[#efd7c9]/[0.055]
              blur-[100px]
            "
          />

          {/* Stars */}
          {stars.map((star) => (
            <motion.span
              key={star.id}
              animate={{
                opacity: [0.08, 0.45, 0.08],
                scale: [0.7, 1, 0.7],
              }}
              transition={{
                duration: 3 + star.delay,
                repeat: Infinity,
                ease: "easeInOut",
                delay: star.delay,
              }}
              className="absolute rounded-full bg-[#f3d7dd]"
              style={{
                left: star.left,
                top: star.top,
                width: star.size,
                height: star.size,
              }}
            />
          ))}

          {/* Floating petals */}
          {petals.map((petal) => (
            <motion.span
              key={petal.id}
              initial={{
                y: "-10vh",
                rotate: 0,
                opacity: 0,
              }}
              animate={{
                y: "110vh",
                rotate: 180,
                opacity: [0, 0.3, 0.16, 0],
              }}
              transition={{
                duration: petal.duration,
                repeat: Infinity,
                ease: "linear",
                delay: petal.delay,
              }}
              className="
                absolute
                top-0
                rounded-[100%_0_100%_0]
                border
                border-[#e6a6b9]/20
                bg-[#d889a2]/[0.055]
              "
              style={{
                left: petal.left,
                width: petal.size,
                height: petal.size * 1.45,
              }}
            />
          ))}
        </div>

        <div className="relative z-10">
          {/* =========================================================
              INTRO
          ========================================================== */}

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.85,
              ease: "easeOut",
            }}
            className="mx-auto max-w-2xl text-center"
          >
            {/* Heart */}
            <motion.div
              animate={{
                scale: [1, 1.07, 1],
                rotate: [0, 2, -2, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                heart-glow
                mx-auto
                flex
                h-14
                w-14
                items-center
                justify-center
                rounded-full
                border
                border-[#e1a1b5]/15
                bg-[#c87591]/[0.06]
              "
            >
              <Heart
                size={21}
                strokeWidth={1.5}
                className="fill-[#d98fa5] text-[#d98fa5]"
              />
            </motion.div>

            <div className="mt-7 flex items-center justify-center gap-3">
              <span className="h-px w-8 bg-[#d889a2]/25" />

              <p
                className="
                  text-[10px]
                  uppercase
                  tracking-[0.42em]
                  text-[#dca5b6]/65
                  sm:text-xs
                "
              >
                The parts of you I remember
              </p>

              <span className="h-px w-8 bg-[#d889a2]/25" />
            </div>

            <h2
              className="
                romantic-title
                mt-5
                text-4xl
                font-semibold
                leading-[1.08]
                tracking-[-0.045em]
                sm:text-5xl
              "
            >
              Some things are too beautiful
              <br />
              <span className="romantic-gradient">to simply forget.</span>
            </h2>

            <p
              className="
                mx-auto
                mt-5
                max-w-lg
                text-sm
                leading-7
                text-[#bca9b0]
                sm:text-base
              "
            >
              I don&apos;t want to remember just the big moments.
              <br className="hidden sm:block" />I want to remember the little
              pieces that made them ours.
            </p>
          </motion.div>

          {/* =========================================================
              MEMORY CARD
          ========================================================== */}

          <div className="mx-auto mt-10 w-full max-w-3xl sm:mt-12">
            <motion.div
              className="
                romantic-glass
                overflow-hidden
                rounded-[2rem]
                p-2
                sm:p-3
              "
              layout
            >
              {/* =====================================================
                  PHOTO
              ====================================================== */}

              <div
                className="
                  relative
                  overflow-hidden
                  rounded-[1.55rem]
                  bg-[#0d0a0d]
                "
              >
                <AnimatePresence mode="wait">
                  <motion.div
                    key={memory.image}
                    initial={{
                      opacity: 0,
                      scale: 1.025,
                      x: 25,
                    }}
                    animate={{
                      opacity: 1,
                      scale: 1,
                      x: 0,
                    }}
                    exit={{
                      opacity: 0,
                      scale: 0.985,
                      x: -25,
                    }}
                    transition={{
                      duration: 0.5,
                      ease: [0.22, 1, 0.36, 1],
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
                    className="relative w-full cursor-grab active:cursor-grabbing"
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

                    {/* Soft cinematic shade */}
                    <div
                      className="
                        pointer-events-none
                        absolute
                        inset-0
                        bg-gradient-to-t
                        from-black/35
                        via-transparent
                        to-black/[0.06]
                      "
                    />

                    {/* Soft rose vignette */}
                    <div
                      className="
                        pointer-events-none
                        absolute
                        inset-0
                        bg-[radial-gradient(circle_at_50%_50%,transparent_45%,rgba(20,10,15,0.18)_100%)]
                      "
                    />

                    {/* Top-right heart */}
                    <motion.div
                      animate={{
                        scale: [1, 1.08, 1],
                      }}
                      transition={{
                        duration: 2.8,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      className="
                        heart-glow
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
                      <Heart
                        size={17}
                        strokeWidth={1.6}
                        className="fill-[#f1b2c3] text-[#f1b2c3]"
                      />
                    </motion.div>

                    {/* Image number */}
                    <div
                      className="
                        absolute
                        left-4
                        top-4
                        flex
                        items-center
                        gap-2
                        rounded-full
                        border
                        border-white/10
                        bg-black/25
                        px-3
                        py-1.5
                        backdrop-blur-md
                      "
                    >
                      <span className="text-[9px] tracking-[0.25em] text-white/50">
                        MEMORY
                      </span>

                      <span className="text-[10px] font-medium text-white/85">
                        {memory.number}
                      </span>
                    </div>

                    {/* Bottom image caption */}
                    <div className="absolute bottom-4 left-4">
                      <span
                        className="
                          rounded-full
                          border
                          border-white/12
                          bg-black/30
                          px-3
                          py-1.5
                          text-[9px]
                          uppercase
                          tracking-[0.22em]
                          text-white/70
                          backdrop-blur-md
                        "
                      >
                        A moment I want to keep
                      </span>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* =====================================================
                  MEMORY COPY
              ====================================================== */}

              <AnimatePresence mode="wait">
                <motion.div
                  key={`${memory.image}-copy`}
                  initial={{
                    opacity: 0,
                    y: 12,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  exit={{
                    opacity: 0,
                    y: -8,
                  }}
                  transition={{
                    duration: 0.35,
                  }}
                  className="
                    px-5
                    pb-3
                    pt-8
                    text-center
                    sm:px-10
                  "
                >
                  <div className="flex items-center justify-center gap-2">
                    <span className="h-px w-7 bg-[#d889a2]/20" />

                    <Sparkles
                      size={12}
                      strokeWidth={1.5}
                      className="text-[#e2a2b5]/60"
                    />

                    <span className="h-px w-7 bg-[#d889a2]/20" />
                  </div>

                  <p
                    className="
                      mt-4
                      text-[9px]
                      uppercase
                      tracking-[0.38em]
                      text-[#a9979f]
                    "
                  >
                    A little piece of us
                  </p>

                  <h3
                    className="
                      romantic-title
                      mt-3
                      text-2xl
                      font-semibold
                      tracking-tight
                      sm:text-3xl
                    "
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
                      text-[#bcaab0]
                      sm:text-base
                    "
                  >
                    {memory.text}
                  </p>
                </motion.div>
              </AnimatePresence>

              {/* =====================================================
                  CONTROLS
              ====================================================== */}

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
                <motion.button
                  type="button"
                  onClick={previousMemory}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.92 }}
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
                    text-[#b9a8ae]
                    transition-all
                    hover:border-[#e1a1b5]/25
                    hover:bg-[#c87591]/[0.07]
                    hover:text-[#e3a8b9]
                  "
                >
                  <ArrowLeft size={17} strokeWidth={1.7} />
                </motion.button>

                {/* Dots */}
                <div className="flex items-center gap-1">
                  {memories.map((item, index) => (
                    <button
                      key={item.number}
                      type="button"
                      onClick={() => setActive(index)}
                      aria-label={`View memory ${index + 1}`}
                      className="
                        flex
                        h-7
                        items-center
                        justify-center
                        px-1
                      "
                    >
                      <motion.span
                        animate={{
                          width: index === active ? 30 : 5,
                          opacity: index === active ? 1 : 0.45,
                        }}
                        transition={{
                          duration: 0.3,
                        }}
                        className="
                          block
                          h-1.5
                          rounded-full
                          bg-[#d889a2]
                        "
                      />
                    </button>
                  ))}
                </div>

                {/* Next */}
                <motion.button
                  type="button"
                  onClick={nextMemory}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.92 }}
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
                    text-[#b9a8ae]
                    transition-all
                    hover:border-[#e1a1b5]/25
                    hover:bg-[#c87591]/[0.07]
                    hover:text-[#e3a8b9]
                  "
                >
                  <ArrowRight size={17} strokeWidth={1.7} />
                </motion.button>
              </div>
            </motion.div>

            {/* Swipe hint */}
            <motion.div
              animate={{
                opacity: [0.25, 0.55, 0.25],
              }}
              transition={{
                duration: 2.8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                mt-5
                flex
                items-center
                justify-center
                gap-2
                text-center
              "
            >
              <ArrowLeft size={11} className="text-[#8f7d85]" />

              <p
                className="
                  text-[9px]
                  uppercase
                  tracking-[0.28em]
                  text-[#8f7d85]
                "
              >
                Swipe through the memories
              </p>

              <ArrowRight size={11} className="text-[#8f7d85]" />
            </motion.div>
          </div>

          {/* =========================================================
              EMOTIONAL TRANSITION
          ========================================================== */}

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
              duration: 0.8,
              delay: 0.35,
            }}
            className="mt-14 text-center sm:mt-16"
          >
            <div className="mb-7 flex items-center justify-center gap-3">
              <span className="h-px w-10 bg-white/[0.08]" />

              <Stars
                size={13}
                strokeWidth={1.4}
                className="text-[#d9b49e]/60"
              />

              <span className="h-px w-10 bg-white/[0.08]" />
            </div>

            <p
              className="
                romantic-title
                mx-auto
                max-w-xl
                text-2xl
                leading-relaxed
                text-[#ead9dd]
                sm:text-3xl
              "
            >
              And somehow,
              <br />
              <span className="romantic-gradient">
                you became one of those memories.
              </span>
            </p>

            <p
              className="
                mx-auto
                mt-5
                max-w-md
                text-sm
                leading-7
                text-[#aa989f]
              "
            >
              The kind I don&apos;t want to lose just because one moment went
              wrong.
            </p>

            <div className="mx-auto mt-8 w-full max-w-sm">
              <Button text="One last thing" pulse onClick={onNext} />
            </div>

            <motion.p
              animate={{
                opacity: [0.35, 0.7, 0.35],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                mt-5
                text-[9px]
                uppercase
                tracking-[0.3em]
                text-[#86747c]
              "
            >
              There&apos;s one more thing I want you to know
            </motion.p>
          </motion.div>
        </div>
      </div>
    </Section>
  );
}
