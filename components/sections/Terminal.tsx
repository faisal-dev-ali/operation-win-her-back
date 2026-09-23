"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Check, Heart, Sparkles } from "lucide-react";

import Section from "../ui/Section";
import Button from "../Button";
import { SITE } from "@/data/site";

type Props = {
  onNext: () => void;
};

const moments = [
  "I said something without thinking enough about how it might make you feel.",
  "Then I realised that my words had hurt someone who never deserved that from me.",
  "And that is when I understood what I had actually done.",
];

const petals = [
  {
    left: "8%",
    top: "16%",
    size: 13,
    rotate: -25,
    duration: 7,
    delay: 0,
  },
  {
    left: "88%",
    top: "12%",
    size: 10,
    rotate: 35,
    duration: 8,
    delay: 1,
  },
  {
    left: "15%",
    top: "55%",
    size: 9,
    rotate: 60,
    duration: 9,
    delay: 2,
  },
  {
    left: "91%",
    top: "62%",
    size: 14,
    rotate: -40,
    duration: 8,
    delay: 0.5,
  },
  {
    left: "5%",
    top: "78%",
    size: 8,
    rotate: 25,
    duration: 10,
    delay: 3,
  },
  {
    left: "94%",
    top: "82%",
    size: 9,
    rotate: -20,
    duration: 9,
    delay: 1.5,
  },
];

export default function Terminal({ onNext }: Props) {
  const [visible, setVisible] = useState(0);
  const [finished, setFinished] = useState(false);

  useEffect(() => {
    if (visible >= moments.length) {
      const timer = setTimeout(() => {
        setFinished(true);
      }, 900);

      return () => clearTimeout(timer);
    }

    const timer = setTimeout(() => {
      setVisible((current) => current + 1);
    }, 1100);

    return () => clearTimeout(timer);
  }, [visible]);

  return (
    <Section id="terminal">
      <div className="relative w-full overflow-hidden">
        {/* ================================================= */}
        {/* ROMANTIC BACKGROUND */}
        {/* ================================================= */}

        <div className="pointer-events-none absolute inset-0">
          {/* Main glow */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
            className="
              absolute
              left-1/2
              top-[22%]
              h-[30rem]
              w-[30rem]
              -translate-x-1/2
              -translate-y-1/2
              rounded-full
              bg-rose-600/[0.08]
              blur-[120px]
            "
          />

          {/* Top warm light */}
          <div
            className="
              absolute
              left-1/2
              top-0
              h-72
              w-[90%]
              -translate-x-1/2
              rounded-full
              bg-gradient-to-b
              from-rose-500/[0.07]
              to-transparent
              blur-3xl
            "
          />

          {/* Side glow */}
          <div
            className="
              absolute
              -left-32
              top-[40%]
              h-72
              w-72
              rounded-full
              bg-pink-500/[0.04]
              blur-[100px]
            "
          />

          <div
            className="
              absolute
              -right-32
              top-[55%]
              h-72
              w-72
              rounded-full
              bg-rose-500/[0.04]
              blur-[100px]
            "
          />

          {/* Floating petals */}
          {petals.map((petal, index) => (
            <motion.div
              key={index}
              initial={{
                opacity: 0,
                y: 0,
                rotate: petal.rotate,
              }}
              animate={{
                opacity: [0.15, 0.55, 0.15],
                y: [0, -18, 0],
                rotate: [petal.rotate, petal.rotate + 20, petal.rotate - 10],
              }}
              transition={{
                duration: petal.duration,
                delay: petal.delay,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute"
              style={{
                left: petal.left,
                top: petal.top,
              }}
            >
              <div
                className="
                  rounded-[100%_0_100%_0]
                  bg-gradient-to-br
                  from-rose-300/50
                  to-rose-600/10
                  blur-[0.3px]
                "
                style={{
                  width: petal.size,
                  height: petal.size * 0.65,
                }}
              />
            </motion.div>
          ))}
        </div>

        <div className="relative z-10 mx-auto w-full max-w-4xl">
          {/* ================================================= */}
          {/* HEADER */}
          {/* ================================================= */}

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
              duration: 0.9,
            }}
            className="text-center"
          >
            {/* Heart */}
            <motion.div
              initial={{
                opacity: 0,
                scale: 0.6,
              }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              transition={{
                duration: 0.8,
              }}
              className="
                mx-auto
                flex
                h-14
                w-14
                items-center
                justify-center
                rounded-2xl
                border
                border-rose-300/20
                bg-rose-400/[0.07]
                shadow-lg
                shadow-rose-500/10
              "
            >
              <motion.div
                animate={{
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 2.4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <Heart size={22} className="fill-rose-400 text-rose-400" />
              </motion.div>
            </motion.div>

            {/* Label */}
            <div className="mt-7 flex items-center justify-center gap-3">
              <span className="h-px w-8 bg-rose-400/30" />

              <p
                className="
                  text-[10px]
                  uppercase
                  tracking-[0.4em]
                  text-rose-300/80
                  sm:text-xs
                "
              >
                Then I realised
              </p>

              <span className="h-px w-8 bg-rose-400/30" />
            </div>

            {/* Heading */}
            <h2
              className="
                mt-5
                text-[2.9rem]
                font-semibold
                leading-[1.02]
                tracking-[-0.055em]
                text-white
                sm:text-6xl
              "
            >
              What I had
              <br />
              <span className="text-rose-300">actually done.</span>
            </h2>

            {/* Decorative heart */}
            <div className="mt-5 flex items-center justify-center">
              <div className="relative flex items-center gap-2">
                <span className="h-px w-10 bg-gradient-to-r from-transparent to-rose-400/50" />

                <Heart size={15} className="fill-rose-400/20 text-rose-300" />

                <span className="h-px w-10 bg-gradient-to-l from-transparent to-rose-400/50" />
              </div>
            </div>

            {/* Subtitle */}
            <p
              className="
                mx-auto
                mt-6
                max-w-md
                text-sm
                leading-7
                text-zinc-500
                sm:text-base
                sm:leading-8
              "
            >
              Sometimes it takes a moment of silence
              <br className="hidden sm:block" />
              to realise how much your words can mean.
            </p>
          </motion.div>

          {/* ================================================= */}
          {/* REALISATION CARD */}
          {/* ================================================= */}

          <motion.div
            initial={{
              opacity: 0,
              y: 35,
              scale: 0.98,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            transition={{
              duration: 0.9,
              delay: 0.3,
            }}
            className="
              relative
              mx-auto
              mt-12
              max-w-3xl
              overflow-hidden
              rounded-[2rem]
              border
              border-rose-300/10
              bg-gradient-to-br
              from-white/[0.055]
              via-white/[0.025]
              to-rose-500/[0.025]
              p-1
              shadow-2xl
              shadow-black/30
              backdrop-blur-2xl
            "
          >
            {/* Inner card */}
            <div
              className="
                relative
                overflow-hidden
                rounded-[1.8rem]
                bg-black/20
              "
            >
              {/* Card glow */}
              <div
                className="
                  pointer-events-none
                  absolute
                  left-1/2
                  top-0
                  h-48
                  w-96
                  -translate-x-1/2
                  rounded-full
                  bg-rose-500/[0.05]
                  blur-3xl
                "
              />

              {/* Card header */}
              <div
                className="
                  relative
                  flex
                  items-center
                  justify-between
                  border-b
                  border-white/[0.08]
                  px-6
                  py-5
                  sm:px-8
                "
              >
                <div className="flex items-center gap-3">
                  <motion.span
                    animate={{
                      opacity: [1, 0.45, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                    }}
                    className="
                      h-2
                      w-2
                      rounded-full
                      bg-rose-400
                      shadow-sm
                      shadow-rose-400
                    "
                  />

                  <span
                    className="
                      text-[10px]
                      uppercase
                      tracking-[0.3em]
                      text-zinc-500
                      sm:text-xs
                    "
                  >
                    What was going through my mind
                  </span>
                </div>

                <Sparkles size={16} className="text-rose-300/60" />
              </div>

              {/* Moments */}
              <div className="relative px-6 py-7 sm:px-8 sm:py-9">
                <div className="space-y-8">
                  {moments.slice(0, visible).map((moment, index) => (
                    <motion.div
                      key={moment}
                      initial={{
                        opacity: 0,
                        x: -15,
                      }}
                      animate={{
                        opacity: 1,
                        x: 0,
                      }}
                      transition={{
                        duration: 0.65,
                      }}
                      className="relative flex gap-4 sm:gap-5"
                    >
                      {/* Timeline */}
                      <div className="relative flex shrink-0 justify-center">
                        <motion.div
                          initial={{
                            scale: 0.7,
                          }}
                          animate={{
                            scale: 1,
                          }}
                          className="
                              relative
                              z-10
                              flex
                              h-9
                              w-9
                              items-center
                              justify-center
                              rounded-full
                              border
                              border-rose-300/20
                              bg-rose-400/[0.05]
                            "
                        >
                          <span className="text-[10px] text-rose-300/70">
                            0{index + 1}
                          </span>
                        </motion.div>

                        {index < moments.length - 1 && (
                          <div
                            className="
                                absolute
                                top-10
                                h-[calc(100%+30px)]
                                w-px
                                bg-gradient-to-b
                                from-rose-400/25
                                to-transparent
                              "
                          />
                        )}
                      </div>

                      {/* Text */}
                      <p
                        className="
                            pt-1
                            text-sm
                            leading-7
                            text-zinc-400
                            sm:text-[15px]
                            sm:leading-8
                          "
                      >
                        {moment}
                      </p>
                    </motion.div>
                  ))}
                </div>

                {/* Final realisation */}
                {finished && (
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
                      duration: 0.9,
                    }}
                    className="
                      relative
                      mt-9
                      overflow-hidden
                      rounded-[1.5rem]
                      border
                      border-rose-300/15
                      bg-gradient-to-br
                      from-rose-500/[0.09]
                      via-rose-400/[0.04]
                      to-transparent
                      px-5
                      py-8
                      text-center
                      sm:px-8
                    "
                  >
                    {/* Glow */}
                    <div
                      className="
                        pointer-events-none
                        absolute
                        left-1/2
                        top-0
                        h-32
                        w-64
                        -translate-x-1/2
                        rounded-full
                        bg-rose-400/[0.08]
                        blur-3xl
                      "
                    />

                    <div className="relative">
                      <motion.div
                        animate={{
                          scale: [1, 1.08, 1],
                        }}
                        transition={{
                          duration: 2.5,
                          repeat: Infinity,
                        }}
                        className="
                          mx-auto
                          flex
                          h-9
                          w-9
                          items-center
                          justify-center
                          rounded-full
                          bg-rose-400/10
                        "
                      >
                        <Check size={17} className="text-rose-300" />
                      </motion.div>

                      <p
                        className="
                          mt-5
                          text-lg
                          font-medium
                          leading-8
                          text-zinc-100
                          sm:text-xl
                        "
                      >
                        It wasn&apos;t you.
                        <br />
                        <span className="text-rose-300">
                          It wasn&apos;t your pictures.
                        </span>
                      </p>

                      <div className="mx-auto mt-4 h-px w-12 bg-rose-400/20" />

                      <p
                        className="
                          mt-4
                          text-sm
                          leading-7
                          text-zinc-500
                        "
                      >
                        It was the way I chose
                        <br className="sm:hidden" />
                        to express myself.
                      </p>
                    </div>
                  </motion.div>
                )}
              </div>
            </div>
          </motion.div>

          {/* ================================================= */}
          {/* CONTINUE */}
          {/* ================================================= */}

          {finished && (
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
                delay: 0.3,
              }}
              className="mt-10 text-center"
            >
              <p
                className="
                  mx-auto
                  max-w-md
                  text-sm
                  leading-7
                  text-zinc-500
                "
              >
                I can&apos;t change what I said.
                <br />
                But I can tell you what I should have said instead.
              </p>

              <div className="mx-auto mt-7 w-full max-w-sm">
                <Button text="Let me tell you" pulse onClick={onNext} />
              </div>

              <p
                className="
                  mt-5
                  text-[10px]
                  uppercase
                  tracking-[0.3em]
                  text-zinc-700
                "
              >
                From me, honestly
              </p>
            </motion.div>
          )}

          {/* Footer */}
          <p
            className="
              mt-10
              text-center
              text-[10px]
              tracking-[0.25em]
              text-zinc-800
            "
          >
            {SITE.yourName} · {SITE.herName}
          </p>
        </div>
      </div>
    </Section>
  );
}
