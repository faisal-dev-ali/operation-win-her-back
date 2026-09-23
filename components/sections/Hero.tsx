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
   TINY STARS
   ========================================================= */

const stars = [
  { left: "9%", top: "18%", size: 1, delay: 0 },
  { left: "18%", top: "67%", size: 1, delay: 1.2 },
  { left: "84%", top: "17%", size: 1.2, delay: 0.6 },
  { left: "91%", top: "46%", size: 1, delay: 1.8 },
  { left: "77%", top: "75%", size: 0.8, delay: 2.4 },
  { left: "7%", top: "46%", size: 0.8, delay: 1.4 },
  { left: "68%", top: "11%", size: 1, delay: 0.9 },
  { left: "32%", top: "12%", size: 0.8, delay: 2.2 },
  { left: "26%", top: "83%", size: 0.7, delay: 3 },
  { left: "64%", top: "82%", size: 0.8, delay: 1.7 },
];

/* =========================================================
   FLOATING PETALS
   ========================================================= */

const petals = [
  {
    left: "11%",
    top: "30%",
    size: 15,
    rotate: -25,
    delay: 0,
    duration: 8,
  },
  {
    left: "88%",
    top: "36%",
    size: 12,
    rotate: 35,
    delay: 1.5,
    duration: 9,
  },
  {
    left: "7%",
    top: "73%",
    size: 10,
    rotate: 55,
    delay: 2,
    duration: 10,
  },
  {
    left: "93%",
    top: "70%",
    size: 13,
    rotate: -35,
    delay: 0.8,
    duration: 9,
  },
];

/* =========================================================
   FLOATING PARTICLES
   ========================================================= */

const particles = [
  { left: "22%", top: "30%", delay: 0 },
  { left: "78%", top: "27%", delay: 1 },
  { left: "17%", top: "58%", delay: 2 },
  { left: "83%", top: "60%", delay: 1.4 },
  { left: "28%", top: "76%", delay: 2.5 },
  { left: "72%", top: "73%", delay: 0.7 },
];

/* =========================================================
   HEARTBEAT
   ========================================================= */

const heartbeat = {
  scale: [1, 1.16, 1, 1.09, 1],
};

const heartbeatTransition = {
  duration: 1.8,
  repeat: Infinity,
  times: [0, 0.18, 0.42, 0.58, 1],
  ease: "easeInOut" as const,
};

export default function Hero({ onNext }: Props) {
  const [entered, setEntered] = useState(false);
  const [leaving, setLeaving] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setEntered(true);
    }, 200);

    return () => clearTimeout(timer);
  }, []);

  const handleContinue = () => {
    setLeaving(true);

    setTimeout(() => {
      onNext();
    }, 850);
  };

  return (
    <Section id="hero">
      <div className="relative w-full overflow-hidden">
        {/* =====================================================
            BACKGROUND ATMOSPHERE
        ===================================================== */}

        <div className="pointer-events-none absolute inset-0">
          {/* Main romantic glow */}
          <motion.div
            animate={{
              opacity: [0.18, 0.38, 0.18],
              scale: [0.94, 1.07, 0.94],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="
              absolute
              left-1/2
              top-[34%]
              h-[24rem]
              w-[24rem]
              -translate-x-1/2
              -translate-y-1/2
              rounded-full
              bg-[#d889a2]/[0.09]
              blur-[110px]
              sm:h-[34rem]
              sm:w-[34rem]
            "
          />

          {/* Warm champagne glow */}
          <motion.div
            animate={{
              opacity: [0.04, 0.12, 0.04],
              x: [-15, 15, -15],
              y: [-5, 8, -5],
            }}
            transition={{
              duration: 11,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="
              absolute
              left-[5%]
              top-[18%]
              h-64
              w-64
              rounded-full
              bg-[#efd7c9]/[0.055]
              blur-[105px]
            "
          />

          {/* Deep wine atmosphere */}
          <motion.div
            animate={{
              opacity: [0.04, 0.11, 0.04],
              scale: [1, 1.12, 1],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="
              absolute
              right-[-8%]
              bottom-[15%]
              h-72
              w-72
              rounded-full
              bg-[#8f4564]/[0.12]
              blur-[110px]
            "
          />

          {/* ===================================================
              TINY STARS
          =================================================== */}

          {stars.map((star, index) => (
            <motion.span
              key={index}
              className="
                absolute
                rounded-full
                bg-[#f1ddd5]
              "
              style={{
                left: star.left,
                top: star.top,
                width: star.size,
                height: star.size,
              }}
              animate={{
                opacity: [0.035, 0.3, 0.035],
                scale: [1, 1.25, 1],
              }}
              transition={{
                duration: 4 + index * 0.35,
                delay: star.delay,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}

          {/* ===================================================
              FLOATING PARTICLES
          =================================================== */}

          {particles.map((particle, index) => (
            <motion.span
              key={index}
              className="
                absolute
                h-[3px]
                w-[3px]
                rounded-full
                bg-[#e2a2b5]/25
              "
              style={{
                left: particle.left,
                top: particle.top,
              }}
              animate={{
                y: [0, -24, 0],
                x: [0, index % 2 === 0 ? 7 : -7, 0],
                opacity: [0, 0.35, 0],
              }}
              transition={{
                duration: 5 + index,
                delay: particle.delay,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}

          {/* ===================================================
              FLOATING PETALS
          =================================================== */}

          {petals.map((petal, index) => (
            <motion.div
              key={index}
              className="absolute"
              style={{
                left: petal.left,
                top: petal.top,
              }}
              initial={{
                opacity: 0,
                rotate: petal.rotate,
              }}
              animate={{
                opacity: [0.02, 0.2, 0.02],
                y: [0, -35, 0],
                x: [0, index % 2 ? -12 : 12, 0],
                rotate: [petal.rotate, petal.rotate + 20, petal.rotate - 10],
              }}
              transition={{
                duration: petal.duration,
                delay: petal.delay,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <div
                className="
                  rounded-[100%_0_100%_0]
                  bg-gradient-to-br
                  from-[#e2a2b5]/40
                  to-[#8f4564]/5
                "
                style={{
                  width: petal.size,
                  height: petal.size * 0.62,
                }}
              />
            </motion.div>
          ))}
        </div>

        {/* =====================================================
            MAIN HERO
        ===================================================== */}

        <AnimatePresence mode="wait">
          {entered && (
            <motion.div
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: leaving ? 0 : 1,
                scale: leaving ? 0.97 : 1,
                y: leaving ? -18 : 0,
              }}
              transition={{
                duration: leaving ? 0.8 : 1,
                ease: "easeInOut",
              }}
              className="
                relative
                z-10
                mx-auto
                flex
                min-h-[82vh]
                w-full
                flex-col
                items-center
                justify-center
                py-8
              "
            >
              {/* =================================================
                  TOP LABEL
              ================================================= */}

              <motion.div
                initial={{
                  opacity: 0,
                  y: 15,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.9,
                  delay: 0.2,
                  ease: "easeOut",
                }}
                className="
                  mb-8
                  flex
                  items-center
                  gap-3
                "
              >
                <motion.span
                  animate={{
                    opacity: [0.18, 0.5, 0.18],
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
                    origin-center
                    bg-[#e2a2b5]/35
                  "
                />

                <span
                  className="
                    text-[9px]
                    uppercase
                    tracking-[0.45em]
                    text-[#e2a2b5]/75
                    sm:text-[10px]
                  "
                >
                  A little something for you
                </span>

                <motion.span
                  animate={{
                    opacity: [0.18, 0.5, 0.18],
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
                    origin-center
                    bg-[#e2a2b5]/35
                  "
                />
              </motion.div>

              {/* =================================================
                  HEART
              ================================================= */}

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
                  delay: 0.42,
                }}
                className="
                  relative
                  mb-7
                  flex
                  h-14
                  w-14
                  items-center
                  justify-center
                "
              >
                {/* Heart aura */}
                <motion.div
                  animate={{
                    opacity: [0.08, 0.3, 0.08],
                    scale: [0.72, 1.3, 0.72],
                  }}
                  transition={{
                    duration: 1.8,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="
                    absolute
                    inset-0
                    rounded-full
                    bg-[#d889a2]/25
                    blur-xl
                  "
                />

                {/* Main heartbeat */}
                <motion.div
                  animate={heartbeat}
                  transition={heartbeatTransition}
                  className="
                    relative
                    z-10
                  "
                >
                  <Heart
                    size={30}
                    strokeWidth={1.3}
                    className="
                      heart-glow
                      fill-[#d889a2]
                      text-[#efb0c0]
                    "
                  />
                </motion.div>

                {/* Tiny orbit */}
                <motion.span
                  animate={{
                    rotate: 360,
                  }}
                  transition={{
                    duration: 7,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="
                    absolute
                    inset-[-5px]
                  "
                >
                  <span
                    className="
                      absolute
                      left-1/2
                      top-0
                      h-[3px]
                      w-[3px]
                      -translate-x-1/2
                      rounded-full
                      bg-[#e2a2b5]/45
                    "
                  />
                </motion.span>

                <motion.span
                  animate={{
                    rotate: -360,
                  }}
                  transition={{
                    duration: 9,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="
                    absolute
                    inset-[-8px]
                  "
                >
                  <span
                    className="
                      absolute
                      bottom-0
                      left-1/2
                      h-[2px]
                      w-[2px]
                      -translate-x-1/2
                      rounded-full
                      bg-[#efd7c9]/40
                    "
                  />
                </motion.span>
              </motion.div>

              {/* =================================================
                  LETTER
              ================================================= */}

              <div className="relative w-full max-w-[620px]">
                {/* Back sheet */}
                <motion.div
                  initial={{
                    opacity: 0,
                    rotate: 4,
                    y: 18,
                  }}
                  animate={{
                    opacity: 1,
                    rotate: 3,
                    y: 0,
                  }}
                  transition={{
                    duration: 1,
                    delay: 0.55,
                    ease: "easeOut",
                  }}
                  className="
                    absolute
                    inset-x-3
                    bottom-[-10px]
                    top-3
                    rounded-[1.7rem]
                    bg-[#dca7b5]/[0.055]
                  "
                />

                {/* Floating sheet */}
                <motion.div
                  initial={{
                    opacity: 0,
                    y: 45,
                    scale: 0.94,
                    rotateX: 8,
                  }}
                  animate={{
                    opacity: 1,
                    y: [0, -4, 0],
                    scale: 1,
                    rotateX: 0,
                  }}
                  transition={{
                    opacity: {
                      duration: 0.8,
                      delay: 0.65,
                    },
                    scale: {
                      duration: 1,
                      delay: 0.65,
                      ease: "easeOut",
                    },
                    rotateX: {
                      duration: 1,
                      delay: 0.65,
                    },
                    y: {
                      duration: 5,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 1.6,
                    },
                  }}
                  className="relative"
                >
                  {/* Paper glow */}
                  <motion.div
                    animate={{
                      opacity: [0.08, 0.24, 0.08],
                      scale: [0.95, 1.05, 0.95],
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
                      top-1/2
                      h-[80%]
                      w-[80%]
                      -translate-x-1/2
                      -translate-y-1/2
                      rounded-full
                      bg-[#c87591]/[0.13]
                      blur-[70px]
                    "
                  />

                  <motion.div
                    whileHover={{
                      y: -3,
                      boxShadow: "0 45px 110px rgba(0,0,0,0.42)",
                    }}
                    transition={{
                      duration: 0.4,
                    }}
                    className="
                      romantic-paper
                      relative
                      overflow-hidden
                      rounded-[1.7rem]
                      px-7
                      py-9
                      shadow-[0_35px_100px_rgba(0,0,0,0.34)]
                      sm:px-12
                      sm:py-12
                    "
                  >
                    {/* =================================================
                        LIGHT SWEEP
                    ================================================= */}

                    <motion.div
                      animate={{
                        x: ["-140%", "180%"],
                      }}
                      transition={{
                        duration: 10,
                        repeat: Infinity,
                        repeatDelay: 2,
                        ease: "linear",
                      }}
                      className="
                        pointer-events-none
                        absolute
                        top-0
                        h-full
                        w-28
                        -skew-x-[18deg]
                        bg-white/[0.09]
                        blur-2xl
                      "
                    />

                    {/* Warm corner glow */}
                    <motion.div
                      animate={{
                        opacity: [0.16, 0.35, 0.16],
                      }}
                      transition={{
                        duration: 5,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      className="
                        pointer-events-none
                        absolute
                        -left-16
                        -top-16
                        h-52
                        w-52
                        rounded-full
                        bg-[#e7bdb2]/20
                        blur-[70px]
                      "
                    />

                    {/* Decorative flower */}
                    <motion.div
                      animate={{
                        rotate: [0, 4, -2, 0],
                        opacity: [0.14, 0.32, 0.14],
                      }}
                      transition={{
                        duration: 5,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      className="
                        absolute
                        right-6
                        top-6
                        text-[#c87591]/30
                      "
                    >
                      <Flower2 size={23} strokeWidth={1} />
                    </motion.div>

                    <div className="relative">
                      {/* =================================================
                          NAME
                      ================================================= */}

                      <motion.p
                        initial={{
                          opacity: 0,
                          x: -12,
                        }}
                        animate={{
                          opacity: 1,
                          x: 0,
                        }}
                        transition={{
                          delay: 1.25,
                          duration: 0.7,
                        }}
                        className="
                          font-[var(--font-playfair)]
                          text-2xl
                          italic
                          text-[#674b53]
                          sm:text-3xl
                        "
                      >
                        {SITE.herName},
                      </motion.p>

                      {/* Divider */}
                      <motion.div
                        initial={{
                          scaleX: 0,
                          opacity: 0,
                        }}
                        animate={{
                          scaleX: 1,
                          opacity: 1,
                        }}
                        transition={{
                          delay: 1.45,
                          duration: 0.7,
                        }}
                        className="
                          mt-5
                          h-px
                          origin-left
                          bg-[#6a4d55]/10
                        "
                      />

                      {/* =================================================
                          LETTER
                      ================================================= */}

                      <div
                        className="
                          mt-7
                          space-y-5
                          font-[var(--font-playfair)]
                          text-[17px]
                          leading-8
                          text-[#49343b]
                          sm:text-lg
                          sm:leading-9
                        "
                      >
                        <motion.p
                          initial={{
                            opacity: 0,
                            y: 15,
                          }}
                          animate={{
                            opacity: 1,
                            y: 0,
                          }}
                          transition={{
                            delay: 1.65,
                            duration: 0.75,
                          }}
                        >
                          Before you read anything...
                        </motion.p>

                        <motion.p
                          initial={{
                            opacity: 0,
                            y: 15,
                          }}
                          animate={{
                            opacity: 1,
                            y: 0,
                          }}
                          transition={{
                            delay: 2,
                            duration: 0.75,
                          }}
                        >
                          I just want you to know that I made this because there
                          are some things I wanted to say properly.
                        </motion.p>

                        <motion.p
                          initial={{
                            opacity: 0,
                            y: 15,
                          }}
                          animate={{
                            opacity: 1,
                            y: 0,
                          }}
                          transition={{
                            delay: 2.35,
                            duration: 0.75,
                          }}
                        >
                          Things that are easier to write when I can take my
                          time with every word.
                        </motion.p>
                      </div>

                      {/* =================================================
                          HEART DIVIDER
                      ================================================= */}

                      <motion.div
                        initial={{
                          opacity: 0,
                          scale: 0.5,
                        }}
                        animate={{
                          opacity: 1,
                          scale: 1,
                        }}
                        transition={{
                          delay: 2.75,
                          duration: 0.8,
                        }}
                        className="
                          mt-8
                          flex
                          items-center
                          gap-3
                        "
                      >
                        <motion.span
                          animate={{
                            width: [24, 38, 24],
                            opacity: [0.2, 0.5, 0.2],
                          }}
                          transition={{
                            duration: 3,
                            repeat: Infinity,
                          }}
                          className="
                            h-px
                            bg-[#c87591]/35
                          "
                        />

                        <Heart
                          size={13}
                          strokeWidth={1.2}
                          className="
                            fill-[#c87591]/20
                            text-[#c87591]
                          "
                        />

                        <motion.span
                          animate={{
                            width: [24, 38, 24],
                            opacity: [0.2, 0.5, 0.2],
                          }}
                          transition={{
                            duration: 3,
                            repeat: Infinity,
                            delay: 0.4,
                          }}
                          className="
                            h-px
                            bg-[#c87591]/35
                          "
                        />
                      </motion.div>

                      {/* =================================================
                          SIGNATURE
                      ================================================= */}

                      <motion.p
                        initial={{
                          opacity: 0,
                          y: 8,
                        }}
                        animate={{
                          opacity: 1,
                          y: 0,
                        }}
                        transition={{
                          delay: 2.95,
                          duration: 0.8,
                        }}
                        className="
                          mt-6
                          font-[var(--font-playfair)]
                          text-sm
                          italic
                          text-[#806a70]
                        "
                      >
                        — {SITE.yourName}
                      </motion.p>
                    </div>
                  </motion.div>
                </motion.div>
              </div>

              {/* =================================================
                  CONTINUE
              ================================================= */}

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
                  delay: 3.3,
                  duration: 0.8,
                }}
                className="
                  mt-9
                  flex
                  flex-col
                  items-center
                "
              >
                <motion.p
                  animate={{
                    opacity: [0.4, 0.75, 0.4],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="
                    mb-4
                    font-[var(--font-playfair)]
                    text-sm
                    italic
                    text-[#b8a5ad]/75
                  "
                >
                  And now, let me explain...
                </motion.p>

                {/* CTA glow */}
                <motion.div
                  animate={{
                    boxShadow: [
                      "0 0 0 rgba(200,117,145,0)",
                      "0 0 30px rgba(200,117,145,0.18)",
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
                  <Button text="Continue" pulse onClick={handleContinue} />
                </motion.div>

                {/* Bottom whisper */}
                <motion.div
                  initial={{
                    opacity: 0,
                  }}
                  animate={{
                    opacity: [0.15, 0.38, 0.15],
                  }}
                  transition={{
                    delay: 4,
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="
                    mt-6
                    flex
                    items-center
                    gap-2
                  "
                >
                  <Sparkles size={9} className="text-[#e2a2b5]/40" />

                  <span
                    className="
                      text-[8px]
                      uppercase
                      tracking-[0.35em]
                      text-[#b8a5ad]/45
                    "
                  >
                    Just hear me out
                  </span>

                  <Sparkles size={9} className="text-[#e2a2b5]/40" />
                </motion.div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </Section>
  );
}
