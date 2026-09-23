"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, Sparkles, Flower2 } from "lucide-react";

import Section from "../ui/Section";
import Button from "../Button";
import { SITE } from "@/data/site";

type Props = {
  onNext: () => void;
};

/* =========================================================
   REALISATION MOMENTS
   ========================================================= */

const moments = [
  {
    number: "01",
    text: "I said something without thinking enough about how it might make you feel.",
  },
  {
    number: "02",
    text: "Then I realised that my words had hurt someone who never deserved that from me.",
  },
  {
    number: "03",
    text: "And that is when I understood what I had actually done.",
  },
];

/* =========================================================
   FLOATING PETALS
   ========================================================= */

const petals = [
  {
    left: "7%",
    top: "16%",
    size: 11,
    rotate: -25,
    duration: 8,
    delay: 0,
  },
  {
    left: "89%",
    top: "13%",
    size: 8,
    rotate: 35,
    duration: 9,
    delay: 1.2,
  },
  {
    left: "12%",
    top: "61%",
    size: 7,
    rotate: 60,
    duration: 10,
    delay: 2,
  },
  {
    left: "92%",
    top: "66%",
    size: 10,
    rotate: -40,
    duration: 9,
    delay: 0.7,
  },
  {
    left: "5%",
    top: "82%",
    size: 7,
    rotate: 25,
    duration: 11,
    delay: 3,
  },
  {
    left: "95%",
    top: "84%",
    size: 7,
    rotate: -20,
    duration: 10,
    delay: 1.5,
  },
];

/* =========================================================
   TINY STARS
   ========================================================= */

const stars = [
  { left: "14%", top: "25%", delay: 0 },
  { left: "82%", top: "21%", delay: 1.4 },
  { left: "7%", top: "48%", delay: 2.1 },
  { left: "94%", top: "44%", delay: 0.8 },
  { left: "20%", top: "78%", delay: 2.8 },
  { left: "78%", top: "76%", delay: 1.7 },
];

/* =========================================================
   MAIN COMPONENT
   ========================================================= */

export default function Terminal({ onNext }: Props) {
  const [visible, setVisible] = useState(0);
  const [finished, setFinished] = useState(false);

  /* =======================================================
     SEQUENTIAL REVEAL
     ======================================================= */

  useEffect(() => {
    if (visible >= moments.length) {
      const timer = setTimeout(() => {
        setFinished(true);
      }, 900);

      return () => clearTimeout(timer);
    }

    const timer = setTimeout(() => {
      setVisible((current) => current + 1);
    }, 1350);

    return () => clearTimeout(timer);
  }, [visible]);

  return (
    <Section id="realisation">
      <div className="relative w-full overflow-hidden">
        {/* =====================================================
            ATMOSPHERE
        ===================================================== */}

        <div className="pointer-events-none absolute inset-0">
          {/* Main romantic moonlight */}
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.92,
            }}
            animate={{
              opacity: [0.08, 0.16, 0.08],
              scale: [0.96, 1.04, 0.96],
            }}
            transition={{
              opacity: {
                duration: 2.5,
              },
              scale: {
                duration: 9,
                repeat: Infinity,
                ease: "easeInOut",
              },
            }}
            className="
              absolute
              left-1/2
              top-[18%]
              h-[26rem]
              w-[26rem]
              -translate-x-1/2
              -translate-y-1/2
              rounded-full
              bg-[#d889a2]/[0.08]
              blur-[120px]
              sm:h-[34rem]
              sm:w-[34rem]
            "
          />

          {/* Warm champagne glow */}
          <motion.div
            animate={{
              opacity: [0.025, 0.07, 0.025],
              scale: [1, 1.08, 1],
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="
              absolute
              left-1/2
              top-[12%]
              h-40
              w-72
              -translate-x-1/2
              rounded-full
              bg-[#efd7c9]/[0.035]
              blur-[90px]
            "
          />

          {/* Deep wine glow */}
          <motion.div
            animate={{
              opacity: [0.025, 0.09, 0.025],
              x: [-15, 15, -15],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="
              absolute
              right-[-10%]
              bottom-[10%]
              h-72
              w-72
              rounded-full
              bg-[#8f4564]/[0.08]
              blur-[110px]
            "
          />

          {/* =================================================
              TINY STARS
          ================================================= */}

          {stars.map((star, index) => (
            <motion.span
              key={index}
              className="
                absolute
                h-[2px]
                w-[2px]
                rounded-full
                bg-[#efd7d0]
              "
              style={{
                left: star.left,
                top: star.top,
              }}
              animate={{
                opacity: [0.03, 0.25, 0.03],
                scale: [1, 1.4, 1],
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
              FLOATING PETALS
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
                opacity: [0, 0.18, 0],
                y: [0, -24, 0],
                x: [0, index % 2 === 0 ? 10 : -10, 0],
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
            CONTENT
        ===================================================== */}

        <div className="relative z-10 mx-auto w-full max-w-3xl">
          {/* ===================================================
              INTRO
          =================================================== */}

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
              duration: 1,
              ease: "easeOut",
            }}
            className="text-center"
          >
            {/* Heart */}
            <motion.div
              initial={{
                opacity: 0,
                scale: 0.65,
              }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              transition={{
                duration: 0.8,
              }}
              className="
                relative
                mx-auto
                flex
                h-12
                w-12
                items-center
                justify-center
                rounded-full
                border
                border-[#e2a2b5]/15
                bg-[#e2a2b5]/[0.045]
              "
            >
              {/* aura */}
              <motion.div
                animate={{
                  opacity: [0.08, 0.25, 0.08],
                  scale: [0.8, 1.25, 0.8],
                }}
                transition={{
                  duration: 2.8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="
                  absolute
                  inset-0
                  rounded-full
                  bg-[#c87591]/20
                  blur-xl
                "
              />

              <motion.div
                animate={{
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 2.8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="relative z-10"
              >
                <Heart
                  size={18}
                  strokeWidth={1.5}
                  className="
                    heart-glow
                    fill-[#d889a2]/35
                    text-[#efb0c0]
                  "
                />
              </motion.div>
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
                mt-7
                flex
                items-center
                justify-center
                gap-3
              "
            >
              <motion.span
                animate={{
                  opacity: [0.15, 0.4, 0.15],
                  scaleX: [0.8, 1, 0.8],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="
                  h-px
                  w-7
                  bg-[#e2a2b5]/25
                "
              />

              <p
                className="
                  text-[10px]
                  uppercase
                  tracking-[0.38em]
                  text-[#e2a2b5]/75
                  sm:text-xs
                "
              >
                Then I realised
              </p>

              <motion.span
                animate={{
                  opacity: [0.15, 0.4, 0.15],
                  scaleX: [0.8, 1, 0.8],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5,
                }}
                className="
                  h-px
                  w-7
                  bg-[#e2a2b5]/25
                "
              />
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
                mt-6
                text-[2.8rem]
                leading-[1.03]
                sm:text-6xl
                md:text-7xl
              "
            >
              What I had
              <br />
              <span className="romantic-gradient">actually done.</span>
            </motion.h2>

            {/* Subheading */}
            <motion.p
              initial={{
                opacity: 0,
                y: 12,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.85,
                duration: 0.9,
              }}
              className="
                mx-auto
                mt-6
                max-w-md
                text-sm
                leading-7
                text-[#b8a5ad]
                sm:text-base
                sm:leading-8
              "
            >
              Sometimes you only understand the weight
              <br className="hidden sm:block" />
              of your words after the silence that follows.
            </motion.p>
          </motion.div>

          {/* ===================================================
              REALISATION TIMELINE
          =================================================== */}

          <div className="relative mx-auto mt-14 max-w-2xl">
            {/* Vertical line */}
            <motion.div
              initial={{
                opacity: 0,
                scaleY: 0,
              }}
              animate={{
                opacity: 1,
                scaleY: 1,
              }}
              transition={{
                duration: 1.5,
                delay: 0.7,
                ease: "easeOut",
              }}
              className="
                pointer-events-none
                absolute
                left-[15px]
                top-5
                bottom-5
                w-px
                origin-top
                bg-gradient-to-b
                from-[#e2a2b5]/25
                via-[#c87591]/10
                to-transparent
                sm:left-[19px]
              "
            />

            <div className="space-y-9 sm:space-y-11">
              {moments.slice(0, visible).map((moment, index) => (
                <motion.div
                  key={moment.number}
                  initial={{
                    opacity: 0,
                    y: 22,
                    x: -8,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    x: 0,
                  }}
                  transition={{
                    duration: 0.8,
                    ease: "easeOut",
                  }}
                  className="
                      relative
                      flex
                      gap-5
                      sm:gap-7
                    "
                >
                  {/* Number */}
                  <motion.div
                    initial={{
                      scale: 0.6,
                    }}
                    animate={{
                      scale: 1,
                    }}
                    transition={{
                      duration: 0.5,
                      delay: 0.15,
                    }}
                    className="
                        relative
                        z-10
                        flex
                        h-8
                        w-8
                        shrink-0
                        items-center
                        justify-center
                        rounded-full
                        border
                        border-[#e2a2b5]/15
                        bg-[#1a131a]
                        shadow-[0_0_20px_rgba(200,117,145,0.05)]
                        sm:h-10
                        sm:w-10
                      "
                  >
                    <span
                      className="
                          text-[9px]
                          tracking-[0.12em]
                          text-[#e2a2b5]/70
                          sm:text-[10px]
                        "
                    >
                      {moment.number}
                    </span>
                  </motion.div>

                  {/* Text */}
                  <div className="pt-0.5 sm:pt-1">
                    <p
                      className="
                          max-w-xl
                          text-[15px]
                          leading-8
                          text-[#d4c5ca]
                          sm:text-base
                          sm:leading-8
                        "
                    >
                      {moment.text}
                    </p>

                    {/* tiny emotional underline */}
                    {index === visible - 1 && (
                      <motion.div
                        initial={{
                          width: 0,
                          opacity: 0,
                        }}
                        animate={{
                          width: 32,
                          opacity: 1,
                        }}
                        transition={{
                          delay: 0.45,
                          duration: 0.5,
                        }}
                        className="
                            mt-3
                            h-px
                            bg-[#c87591]/25
                          "
                      />
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* =================================================
                FINAL REALISATION
            ================================================= */}

            <AnimatePresence>
              {finished && (
                <motion.div
                  initial={{
                    opacity: 0,
                    y: 30,
                    scale: 0.97,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    scale: 1,
                  }}
                  transition={{
                    duration: 1.1,
                    ease: "easeOut",
                  }}
                  className="
                    relative
                    mt-14
                    overflow-hidden
                    rounded-[2rem]
                    border
                    border-[#e2a2b5]/12
                    bg-gradient-to-br
                    from-[#e2a2b5]/[0.075]
                    via-[#c87591]/[0.025]
                    to-transparent
                    px-6
                    py-10
                    text-center
                    shadow-[0_30px_80px_rgba(0,0,0,0.22)]
                    sm:px-10
                    sm:py-12
                  "
                >
                  {/* Inner glow */}
                  <motion.div
                    animate={{
                      opacity: [0.12, 0.3, 0.12],
                      scale: [1, 1.08, 1],
                    }}
                    transition={{
                      duration: 5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="
                      pointer-events-none
                      absolute
                      left-1/2
                      top-0
                      h-48
                      w-72
                      -translate-x-1/2
                      rounded-full
                      bg-[#d889a2]/[0.07]
                      blur-[80px]
                    "
                  />

                  {/* Soft border highlight */}
                  <div
                    className="
                      pointer-events-none
                      absolute
                      inset-px
                      rounded-[2rem]
                      border
                      border-white/[0.025]
                    "
                  />

                  <div className="relative">
                    {/* Sparkle */}
                    <motion.div
                      animate={{
                        scale: [1, 1.08, 1],
                        rotate: [0, 4, -4, 0],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      className="
                        mx-auto
                        flex
                        h-10
                        w-10
                        items-center
                        justify-center
                        rounded-full
                        border
                        border-[#e2a2b5]/12
                        bg-[#e2a2b5]/[0.045]
                      "
                    >
                      <Sparkles
                        size={16}
                        strokeWidth={1.5}
                        className="text-[#e2a2b5]"
                      />
                    </motion.div>

                    <p
                      className="
                        romantic-title
                        mt-7
                        text-2xl
                        leading-tight
                        text-[#fff5f1]
                        sm:text-3xl
                      "
                    >
                      It wasn&apos;t you.
                    </p>

                    <p
                      className="
                        romantic-title
                        mt-2
                        text-2xl
                        leading-tight
                        text-[#e2a2b5]
                        sm:text-3xl
                      "
                    >
                      It wasn&apos;t your pictures.
                    </p>

                    <div className="mx-auto my-6 flex items-center justify-center gap-2">
                      <span className="h-px w-8 bg-[#c87591]/20" />

                      <Heart
                        size={11}
                        strokeWidth={1.2}
                        className="
                          fill-[#c87591]/15
                          text-[#c87591]
                        "
                      />

                      <span className="h-px w-8 bg-[#c87591]/20" />
                    </div>

                    <p
                      className="
                        mx-auto
                        max-w-md
                        text-sm
                        leading-7
                        text-[#b8a5ad]
                        sm:text-[15px]
                        sm:leading-8
                      "
                    >
                      It was the way I chose to express myself.
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* ===================================================
              CONTINUE
          =================================================== */}

          <AnimatePresence>
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
                  delay: 0.45,
                }}
                className="mt-12 text-center"
              >
                <p
                  className="
                    mx-auto
                    max-w-md
                    text-sm
                    leading-7
                    text-[#b8a5ad]
                  "
                >
                  I can&apos;t change what I said.
                  <br />
                  But I can tell you what I should have said instead.
                </p>

                <div className="mx-auto mt-7 w-full max-w-sm">
                  <Button text="Let me tell you" pulse onClick={onNext} />
                </div>

                <motion.div
                  animate={{
                    opacity: [0.25, 0.55, 0.25],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="
                    mt-6
                    flex
                    items-center
                    justify-center
                    gap-2
                  "
                >
                  <span className="h-px w-5 bg-[#e2a2b5]/15" />

                  <span
                    className="
                      text-[9px]
                      uppercase
                      tracking-[0.3em]
                      text-[#b8a5ad]/55
                    "
                  >
                    From me, honestly
                  </span>

                  <span className="h-px w-5 bg-[#e2a2b5]/15" />
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* ===================================================
              SIGNATURE
          =================================================== */}

          <motion.p
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              delay: 1.1,
              duration: 1,
            }}
            className="
              mt-12
              text-center
              font-[var(--font-playfair)]
              text-sm
              italic
              tracking-wide
              text-[#b8a5ad]/45
            "
          >
            {SITE.yourName} · {SITE.herName}
          </motion.p>
        </div>
      </div>
    </Section>
  );
}
