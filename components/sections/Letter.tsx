"use client";

import { useCallback, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Feather, Flower2, Heart, Quote, Sparkles } from "lucide-react";

import Section from "../ui/Section";
import Button from "../Button";
import Typewriter from "../Typewriter";
import { SITE } from "@/data/site";

type Props = {
  onNext: () => void;
};

/* =========================================================
   TINY STARS
   ========================================================= */

const stars = [
  { left: "7%", top: "13%", delay: 0 },
  { left: "91%", top: "18%", delay: 1.2 },
  { left: "4%", top: "61%", delay: 2 },
  { left: "95%", top: "70%", delay: 0.8 },
  { left: "17%", top: "84%", delay: 2.5 },
  { left: "82%", top: "82%", delay: 1.7 },
];

/* =========================================================
   FLOATING PETALS
   ========================================================= */

const petals = [
  {
    left: "6%",
    top: "27%",
    size: 12,
    rotate: -25,
    delay: 0,
    duration: 9,
  },
  {
    left: "91%",
    top: "30%",
    size: 10,
    rotate: 35,
    delay: 1.4,
    duration: 10,
  },
  {
    left: "8%",
    top: "77%",
    size: 8,
    rotate: 50,
    delay: 2.2,
    duration: 11,
  },
  {
    left: "94%",
    top: "79%",
    size: 9,
    rotate: -35,
    delay: 0.8,
    duration: 9,
  },
];

/* =========================================================
   LETTER
   ========================================================= */

const letter = `Rizwana,

I have been thinking about what I said.

Maybe for a moment, I didn't realise how my words would make you feel.

But when I understood that I had hurt you,
I genuinely wished I could go back and say it differently.

Because the truth is...

there was nothing wrong with your pictures.

There was nothing wrong with you.

You were beautiful.
And instead of making you feel appreciated,
I made you feel the opposite.

For that, I'm truly sorry.

You deserve words that make you smile,
not words that make you question yourself.

You deserve to feel beautiful,
especially when you're sharing a part of yourself with me.

I can't take that moment back.

But I can learn from it.
I can be more careful with your heart.
And I can choose my words better next time.

I just wanted you to know that.

I'm genuinely sorry, Rizwana.`;

/* =========================================================
   COMPONENT
   ========================================================= */

export default function Letter({ onNext }: Props) {
  const [typingFinished, setTypingFinished] = useState(false);

  const handleTypingComplete = useCallback(() => {
    setTypingFinished(true);
  }, []);

  return (
    <Section id="letter">
      <div className="relative mx-auto w-full max-w-4xl">
        {/* =====================================================
            ATMOSPHERE
        ===================================================== */}

        <div className="pointer-events-none absolute inset-0">
          {/* Main paper glow */}
          <motion.div
            animate={{
              opacity: [0.07, 0.16, 0.07],
              scale: [0.94, 1.06, 0.94],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="
              absolute
              left-1/2
              top-[40%]
              h-[28rem]
              w-[28rem]
              -translate-x-1/2
              -translate-y-1/2
              rounded-full
              bg-[#c87591]/[0.1]
              blur-[120px]
              sm:h-[38rem]
              sm:w-[38rem]
            "
          />

          {/* Champagne light */}
          <motion.div
            animate={{
              opacity: [0.02, 0.07, 0.02],
              x: [-18, 18, -18],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="
              absolute
              left-1/2
              top-[8%]
              h-44
              w-72
              -translate-x-1/2
              rounded-full
              bg-[#efd7c9]/[0.04]
              blur-[90px]
            "
          />

          {/* Wine glow */}
          <motion.div
            animate={{
              opacity: [0.025, 0.08, 0.025],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 11,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="
              absolute
              bottom-[4%]
              right-[-8%]
              h-64
              w-64
              rounded-full
              bg-[#8f4564]/[0.08]
              blur-[110px]
            "
          />

          {/* =================================================
              STARS
          ================================================= */}

          {stars.map((star, index) => (
            <motion.span
              key={index}
              className="
                absolute
                h-[2px]
                w-[2px]
                rounded-full
                bg-[#efdcd5]
              "
              style={{
                left: star.left,
                top: star.top,
              }}
              animate={{
                opacity: [0.025, 0.25, 0.025],
                scale: [1, 1.3, 1],
              }}
              transition={{
                duration: 4 + index * 0.5,
                delay: star.delay,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}

          {/* =================================================
              PETALS
          ================================================= */}

          {petals.map((petal, index) => (
            <motion.div
              key={index}
              initial={{
                opacity: 0,
                y: 0,
                rotate: petal.rotate,
              }}
              animate={{
                opacity: [0, 0.16, 0],
                y: [0, -25, 0],
                x: [0, index % 2 === 0 ? 9 : -9, 0],
                rotate: [petal.rotate, petal.rotate + 16, petal.rotate - 8],
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
                  from-[#e2a2b5]/35
                  to-[#8f4564]/5
                "
                style={{
                  width: petal.size,
                  height: petal.size * 0.65,
                }}
              />
            </motion.div>
          ))}
        </div>

        {/* =====================================================
            INTRO
        ===================================================== */}

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
          className="
            relative
            z-10
            mb-12
            text-center
          "
        >
          {/* Feather */}
          <motion.div
            animate={{
              rotate: [0, -4, 4, 0],
              y: [0, -2, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="
              mx-auto
              flex
              h-12
              w-12
              items-center
              justify-center
              rounded-2xl
              border
              border-[#e2a2b5]/15
              bg-[#e2a2b5]/[0.045]
              shadow-[0_0_30px_rgba(200,117,145,0.06)]
            "
          >
            <Feather size={20} strokeWidth={1.25} className="text-[#e2a2b5]" />
          </motion.div>

          {/* Eyebrow */}
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              delay: 0.35,
              duration: 0.8,
            }}
            className="
              mt-5
              flex
              items-center
              justify-center
              gap-3
            "
          >
            <span className="h-px w-7 bg-[#e2a2b5]/20" />

            <p
              className="
                text-[10px]
                uppercase
                tracking-[0.4em]
                text-[#e2a2b5]/70
              "
            >
              From my heart
            </p>

            <span className="h-px w-7 bg-[#e2a2b5]/20" />
          </motion.div>

          {/* Heading */}
          <motion.h2
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.5,
              duration: 0.9,
            }}
            className="
              romantic-title
              mt-5
              text-[2.7rem]
              leading-[1.05]
              sm:text-5xl
              md:text-6xl
            "
          >
            There are some things
            <br />
            <span className="romantic-gradient">I want to say properly.</span>
          </motion.h2>

          <motion.p
            initial={{
              opacity: 0,
              y: 10,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.85,
              duration: 0.8,
            }}
            className="
              mx-auto
              mt-5
              max-w-md
              text-sm
              leading-7
              text-[#b8a5ad]
            "
          >
            So this time, I&apos;m not going to rush my words.
            <br />I just want you to hear me.
          </motion.p>
        </motion.div>

        {/* =====================================================
            LETTER PAPER
        ===================================================== */}

        <div className="relative z-10">
          {/* Paper aura */}
          <motion.div
            animate={{
              opacity: [0.1, 0.2, 0.1],
              scale: [1, 1.06, 1],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="
              pointer-events-none
              absolute
              left-1/2
              top-1/2
              h-[80%]
              w-[80%]
              -translate-x-1/2
              -translate-y-1/2
              rounded-full
              bg-[#c87591]/[0.1]
              blur-[100px]
            "
          />

          {/* =================================================
              PAPER
          ================================================= */}

          <motion.div
            initial={{
              opacity: 0,
              y: 35,
              scale: 0.97,
              rotateX: 5,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
              rotateX: 0,
            }}
            transition={{
              duration: 1,
              ease: "easeOut",
            }}
            className="
              romantic-paper
              relative
              w-full
              overflow-hidden
              rounded-[2rem]
              px-6
              py-10
              sm:px-10
              sm:py-14
              md:px-14
              lg:px-16
            "
          >
            {/* =================================================
                PAPER LIGHT SWEEP
            ================================================= */}

            <motion.div
              animate={{
                x: ["-140%", "180%"],
              }}
              transition={{
                duration: 11,
                repeat: Infinity,
                repeatDelay: 3,
                ease: "linear",
              }}
              className="
                pointer-events-none
                absolute
                top-0
                h-full
                w-28
                -skew-x-[18deg]
                bg-white/[0.08]
                blur-2xl
              "
            />

            {/* Top warm glow */}
            <motion.div
              animate={{
                opacity: [0.15, 0.32, 0.15],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                pointer-events-none
                absolute
                -right-24
                -top-24
                h-72
                w-72
                rounded-full
                bg-[#e7bdb2]/20
                blur-3xl
              "
            />

            {/* Bottom rose glow */}
            <div
              className="
                pointer-events-none
                absolute
                -bottom-28
                -left-28
                h-72
                w-72
                rounded-full
                bg-[#e5b9bd]/15
                blur-3xl
              "
            />

            {/* Decorative flower */}
            <motion.div
              animate={{
                rotate: [0, 4, -2, 0],
                opacity: [0.14, 0.3, 0.14],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                pointer-events-none
                absolute
                right-7
                top-7
                text-[#c87591]/30
              "
            >
              <Flower2 size={25} strokeWidth={1} />
            </motion.div>

            {/* Tiny heart */}
            <motion.div
              animate={{
                scale: [1, 1.08, 1],
                opacity: [0.3, 0.55, 0.3],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                pointer-events-none
                absolute
                bottom-8
                left-8
              "
            >
              <Heart
                size={13}
                strokeWidth={1}
                className="
                  fill-[#c87591]/20
                  text-[#c87591]/45
                "
              />
            </motion.div>

            {/* =================================================
                PAPER CONTENT
            ================================================= */}

            <div className="relative">
              {/* Letter header */}
              <div
                className="
                  mb-9
                  flex
                  items-center
                  justify-between
                  border-b
                  border-[#3e2830]/10
                  pb-5
                "
              >
                <div>
                  <p
                    className="
                      text-[9px]
                      uppercase
                      tracking-[0.3em]
                      text-[#806a70]
                    "
                  >
                    A letter from
                  </p>

                  <p
                    className="
                      mt-1
                      text-lg
                      text-[#3e2830]
                    "
                    style={{
                      fontFamily: "Georgia, 'Times New Roman', serif",
                    }}
                  >
                    {SITE.yourName}
                  </p>
                </div>

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
                  <Heart
                    size={18}
                    strokeWidth={1.4}
                    className="
                      fill-[#d889a2]
                      text-[#d889a2]
                    "
                  />
                </motion.div>
              </div>

              {/* =================================================
                  GREETING
              ================================================= */}

              <div className="relative">
                <Quote
                  size={32}
                  strokeWidth={1}
                  className="
                    pointer-events-none
                    absolute
                    -left-2
                    -top-5
                    text-[#c87591]/15
                  "
                />

                <motion.h3
                  initial={{
                    opacity: 0,
                    x: -10,
                  }}
                  animate={{
                    opacity: 1,
                    x: 0,
                  }}
                  transition={{
                    delay: 0.65,
                    duration: 0.7,
                  }}
                  className="
                    relative
                    pl-2
                    text-3xl
                    text-[#3e2830]
                    sm:text-4xl
                  "
                  style={{
                    fontFamily: "Georgia, 'Times New Roman', serif",
                  }}
                >
                  Dear {SITE.herName},
                </motion.h3>
              </div>

              {/* =================================================
                  TYPING INDICATOR
              ================================================= */}

              <AnimatePresence>
                {!typingFinished && (
                  <motion.div
                    initial={{
                      opacity: 0,
                      y: 5,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    exit={{
                      opacity: 0,
                      y: -5,
                    }}
                    className="
                      mt-5
                      flex
                      items-center
                      gap-2
                      text-xs
                      text-[#806a70]
                    "
                  >
                    <motion.span
                      animate={{
                        scale: [1, 1.4, 1],
                        opacity: [0.45, 1, 0.45],
                      }}
                      transition={{
                        duration: 1.2,
                        repeat: Infinity,
                      }}
                      className="
                        h-1.5
                        w-1.5
                        rounded-full
                        bg-[#c87591]
                      "
                    />

                    <span>Writing this carefully...</span>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* =================================================
                  LETTER BODY
              ================================================= */}

              <div
                className="
                  mt-8
                  text-[17px]
                  leading-[2]
                  text-[#4c373e]
                  sm:text-lg
                  sm:leading-[2.1]
                "
                style={{
                  fontFamily: "Georgia, 'Times New Roman', serif",
                }}
              >
                <Typewriter
                  text={letter}
                  speed={32}
                  onComplete={handleTypingComplete}
                />
              </div>

              {/* =================================================
                  SIGNATURE
              ================================================= */}

              <AnimatePresence>
                {typingFinished && (
                  <motion.div
                    initial={{
                      opacity: 0,
                      y: 18,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    transition={{
                      duration: 0.9,
                    }}
                    className="
                      mt-10
                      border-t
                      border-[#3e2830]/10
                      pt-7
                      text-right
                    "
                    style={{
                      fontFamily: "Georgia, 'Times New Roman', serif",
                    }}
                  >
                    <p
                      className="
                        text-sm
                        italic
                        text-[#806a70]
                      "
                    >
                      With all my heart,
                    </p>

                    <p
                      className="
                        mt-1
                        text-3xl
                        text-[#3e2830]
                      "
                    >
                      {SITE.yourName}
                    </p>

                    <div className="mt-2 flex justify-end">
                      <motion.div
                        animate={{
                          scale: [1, 1.15, 1],
                        }}
                        transition={{
                          duration: 2.5,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                      >
                        <Heart
                          size={14}
                          strokeWidth={1.3}
                          className="
                            fill-[#d889a2]
                            text-[#d889a2]
                          "
                        />
                      </motion.div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>

        {/* =====================================================
            AFTER LETTER
        ===================================================== */}

        <AnimatePresence>
          {typingFinished && (
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
                delay: 0.35,
              }}
              className="
                relative
                z-10
                mt-12
                text-center
              "
            >
              {/* Divider */}
              <div
                className="
                  mx-auto
                  mb-6
                  flex
                  items-center
                  justify-center
                  gap-3
                "
              >
                <span className="h-px w-12 bg-[#e2a2b5]/15" />

                <motion.div
                  animate={{
                    rotate: [0, 5, -5, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <Flower2
                    size={15}
                    strokeWidth={1}
                    className="text-[#c87591]"
                  />
                </motion.div>

                <span className="h-px w-12 bg-[#e2a2b5]/15" />
              </div>

              <p
                className="
                  text-sm
                  leading-7
                  text-[#b8a5ad]
                "
              >
                I hope you can feel
                <br />
                how sincerely I mean this.
              </p>

              {/* CTA */}
              <div
                className="
                  mx-auto
                  mt-7
                  w-full
                  max-w-sm
                "
              >
                <motion.div
                  animate={{
                    boxShadow: [
                      "0 0 0 rgba(200,117,145,0)",
                      "0 0 30px rgba(200,117,145,0.13)",
                      "0 0 0 rgba(200,117,145,0)",
                    ],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="rounded-full"
                >
                  <Button
                    text="There's more I want to show you"
                    pulse
                    onClick={onNext}
                  />
                </motion.div>
              </div>

              {/* Bottom whisper */}
              <motion.div
                animate={{
                  opacity: [0.25, 0.5, 0.25],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="
                  mt-5
                  flex
                  items-center
                  justify-center
                  gap-2
                "
              >
                <Sparkles size={9} className="text-[#e2a2b5]/35" />

                <p
                  className="
                    text-[9px]
                    uppercase
                    tracking-[0.3em]
                    text-[#b8a5ad]/45
                  "
                >
                  One more little part of this story
                </p>

                <Sparkles size={9} className="text-[#e2a2b5]/35" />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </Section>
  );
}
