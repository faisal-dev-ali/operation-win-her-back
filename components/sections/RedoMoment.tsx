"use client";

import { motion } from "framer-motion";
import { Heart, Sparkles, Flower2 } from "lucide-react";

import Section from "../ui/Section";
import Button from "../Button";

type Props = {
  onNext: () => void;
};

/* =========================================================
   TINY ATMOSPHERIC STARS
   ========================================================= */

const stars = [
  { left: "9%", top: "19%", delay: 0 },
  { left: "88%", top: "17%", delay: 1.2 },
  { left: "14%", top: "70%", delay: 2.1 },
  { left: "91%", top: "66%", delay: 0.7 },
  { left: "24%", top: "12%", delay: 1.8 },
  { left: "76%", top: "78%", delay: 2.8 },
];

/* =========================================================
   SOFT PETALS
   ========================================================= */

const petals = [
  {
    left: "8%",
    top: "35%",
    size: 12,
    rotate: -25,
    delay: 0,
    duration: 9,
  },
  {
    left: "90%",
    top: "38%",
    size: 10,
    rotate: 30,
    delay: 1.4,
    duration: 10,
  },
  {
    left: "6%",
    top: "78%",
    size: 8,
    rotate: 55,
    delay: 2,
    duration: 11,
  },
  {
    left: "94%",
    top: "75%",
    size: 9,
    rotate: -35,
    delay: 0.8,
    duration: 9,
  },
];

export default function RedoMoment({ onNext }: Props) {
  return (
    <Section id="redo-moment">
      <div className="relative mx-auto w-full max-w-3xl overflow-hidden">
        {/* =====================================================
            ROMANTIC ATMOSPHERE
        ===================================================== */}

        <div className="pointer-events-none absolute inset-0">
          {/* Central rose glow */}
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.75,
            }}
            animate={{
              opacity: [0.08, 0.17, 0.08],
              scale: [0.9, 1.06, 0.9],
            }}
            transition={{
              opacity: {
                duration: 1.4,
              },
              scale: {
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
              },
            }}
            className="
              absolute
              left-1/2
              top-[43%]
              h-72
              w-72
              -translate-x-1/2
              -translate-y-1/2
              rounded-full
              bg-[#c87591]/[0.1]
              blur-[110px]
              sm:h-96
              sm:w-96
            "
          />

          {/* Champagne light */}
          <motion.div
            animate={{
              opacity: [0.02, 0.07, 0.02],
              x: [-20, 20, -20],
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
              h-40
              w-72
              -translate-x-1/2
              rounded-full
              bg-[#efd7c9]/[0.045]
              blur-[90px]
            "
          />

          {/* Deep wine glow */}
          <motion.div
            animate={{
              opacity: [0.025, 0.08, 0.025],
              scale: [1, 1.08, 1],
            }}
            transition={{
              duration: 9,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="
              absolute
              bottom-[2%]
              right-[-10%]
              h-60
              w-60
              rounded-full
              bg-[#8f4564]/[0.09]
              blur-[100px]
            "
          />

          {/* ===================================================
              STARS
          =================================================== */}

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
                scale: [1, 1.35, 1],
              }}
              transition={{
                duration: 4 + index * 0.5,
                delay: star.delay,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}

          {/* ===================================================
              PETALS
          =================================================== */}

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
                y: [0, -28, 0],
                x: [0, index % 2 === 0 ? 10 : -10, 0],
                rotate: [petal.rotate, petal.rotate + 15, petal.rotate - 8],
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

        <div className="relative z-10 text-center">
          {/* ===================================================
              EYEBROW
          =================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              y: 12,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
            }}
            className="
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

            <span
              className="
                text-[10px]
                uppercase
                tracking-[0.38em]
                text-[#e2a2b5]/70
                sm:text-xs
              "
            >
              If I could go back
            </span>

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

          {/* ===================================================
              MAIN HEADING
          =================================================== */}

          <motion.h2
            initial={{
              opacity: 0,
              y: 22,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.9,
              delay: 0.15,
            }}
            className="
              romantic-title
              mt-7
              text-[2.7rem]
              leading-[1.05]
              sm:text-6xl
              md:text-7xl
            "
          >
            If I could redo
            <br />
            <span className="romantic-gradient">that moment...</span>
          </motion.h2>

          {/* ===================================================
              HEART PAUSE
          =================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              scale: 0.7,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration: 0.8,
              delay: 0.65,
            }}
            className="
              relative
              mx-auto
              mt-8
              flex
              h-14
              w-14
              items-center
              justify-center
            "
          >
            {/* aura */}
            <motion.div
              animate={{
                opacity: [0.08, 0.25, 0.08],
                scale: [0.7, 1.3, 0.7],
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

            {/* heart */}
            <motion.div
              animate={{
                scale: [1, 1.12, 1, 1.07, 1],
              }}
              transition={{
                duration: 2.2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative z-10"
            >
              <Heart
                size={19}
                strokeWidth={1.35}
                className="
                  heart-glow
                  fill-[#d889a2]/25
                  text-[#efb0c0]
                "
              />
            </motion.div>

            {/* tiny orbit */}
            <motion.span
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "linear",
              }}
              className="
                absolute
                inset-[-3px]
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
                  bg-[#e2a2b5]/40
                "
              />
            </motion.span>
          </motion.div>

          {/* ===================================================
              MAIN MESSAGE
          =================================================== */}

          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              duration: 1,
              delay: 1,
            }}
            className="
              mx-auto
              mt-10
              max-w-xl
            "
          >
            {/* First sentence */}
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
                duration: 0.8,
                delay: 1.15,
              }}
              className="
                text-base
                leading-8
                text-[#d4c5ca]
                sm:text-lg
                sm:leading-9
              "
            >
              I wouldn&apos;t say what I said.
            </motion.p>

            {/* Emotional pause */}
            <motion.div
              initial={{
                opacity: 0,
                scaleX: 0,
              }}
              animate={{
                opacity: 1,
                scaleX: 1,
              }}
              transition={{
                duration: 0.7,
                delay: 1.5,
              }}
              className="
                mx-auto
                my-6
                flex
                items-center
                justify-center
                gap-2
              "
            >
              <span className="h-px w-5 bg-[#c87591]/15" />

              <Sparkles
                size={10}
                strokeWidth={1.3}
                className="text-[#e2a2b5]/40"
              />

              <span className="h-px w-5 bg-[#c87591]/15" />
            </motion.div>

            {/* Main emotional line */}
            <motion.p
              initial={{
                opacity: 0,
                y: 14,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.9,
                delay: 1.7,
              }}
              className="
                romantic-title
                text-2xl
                leading-relaxed
                text-[#fff5f1]
                sm:text-3xl
              "
            >
              I would simply tell you
              <br />
              <motion.span
                initial={{
                  opacity: 0.3,
                }}
                animate={{
                  opacity: [0.65, 1, 0.65],
                }}
                transition={{
                  duration: 3.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="text-[#e2a2b5]"
              >
                you look beautiful.
              </motion.span>
            </motion.p>

            {/* Divider */}
            <motion.div
              initial={{
                opacity: 0,
                scaleX: 0,
              }}
              animate={{
                opacity: 1,
                scaleX: 1,
              }}
              transition={{
                duration: 0.7,
                delay: 2.3,
              }}
              className="
                mx-auto
                mt-8
                h-px
                w-12
                bg-gradient-to-r
                from-transparent
                via-[#dca7b5]/30
                to-transparent
              "
            />

            {/* Explanation */}
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
                duration: 0.8,
                delay: 2.5,
              }}
              className="
                mx-auto
                mt-7
                max-w-md
                text-sm
                leading-7
                text-[#b8a5ad]
                sm:text-[15px]
                sm:leading-8
              "
            >
              That is what you deserved to hear from me.
              <br />
              Clearly. Kindly. Without making you question it.
            </motion.p>
          </motion.div>

          {/* ===================================================
              CTA
          =================================================== */}

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
              duration: 0.8,
              delay: 3.1,
            }}
            className="
              mx-auto
              mt-10
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
                text="There’s more I want to say"
                pulse
                onClick={onNext}
              />
            </motion.div>
          </motion.div>

          {/* ===================================================
              BOTTOM WHISPER
          =================================================== */}

          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: [0.2, 0.45, 0.2],
            }}
            transition={{
              duration: 3,
              delay: 3.5,
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

            <Flower2 size={10} strokeWidth={1} className="text-[#e2a2b5]/35" />

            <span
              className="
                text-[9px]
                uppercase
                tracking-[0.3em]
                text-[#b8a5ad]/50
              "
            >
              From my heart
            </span>

            <Flower2 size={10} strokeWidth={1} className="text-[#e2a2b5]/35" />

            <span className="h-px w-5 bg-[#e2a2b5]/15" />
          </motion.div>
        </div>
      </div>
    </Section>
  );
}
