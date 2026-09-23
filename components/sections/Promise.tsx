"use client";

import { motion } from "framer-motion";
import {
  Heart,
  Sparkles,
  ShieldCheck,
  MessageCircleHeart,
  HandHeart,
} from "lucide-react";

import Section from "../ui/Section";
import Button from "../Button";
import { SITE } from "@/data/site";

type Props = {
  onNext: () => void;
};

const promises = [
  {
    number: "01",
    title: "I’ll think before I speak",
    description:
      "I never want my careless words to become the reason you feel bad about yourself.",
    icon: ShieldCheck,
  },
  {
    number: "02",
    title: "I’ll make sure you know how beautiful you are",
    description:
      "If I think you look beautiful, I shouldn’t leave you wondering. I should tell you.",
    icon: Heart,
  },
  {
    number: "03",
    title: "I’ll listen when something hurts",
    description:
      "I don’t want to defend myself when you’re telling me that something hurt. I want to understand you.",
    icon: MessageCircleHeart,
  },
  {
    number: "04",
    title: "I’ll learn from this",
    description:
      "I can’t undo what happened, but I can make sure I become better because of it.",
    icon: HandHeart,
  },
];

export default function Promise({ onNext }: Props) {
  return (
    <Section id="promise">
      <div className="relative mx-auto w-full max-w-4xl overflow-hidden">
        {/* =====================================================
            AMBIENT ROMANTIC LIGHT
        ====================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            scale: 0.8,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 1.5,
          }}
          className="
            pointer-events-none
            absolute
            left-1/2
            top-[35%]
            h-[28rem]
            w-[28rem]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-rose-500/[0.07]
            blur-[120px]
          "
        />

        <div
          className="
            pointer-events-none
            absolute
            left-1/2
            top-0
            h-48
            w-[80%]
            -translate-x-1/2
            rounded-full
            bg-rose-400/[0.04]
            blur-3xl
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
            className="text-center"
          >
            <motion.div
              animate={{
                y: [0, -4, 0],
                scale: [1, 1.05, 1],
              }}
              transition={{
                duration: 3,
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
                shadow-xl
                shadow-rose-500/10
              "
            >
              <Heart size={22} className="fill-rose-400 text-rose-400" />
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
                From now on
              </p>

              <span className="h-px w-8 bg-rose-400/25" />
            </div>

            <h2
              className="
                mt-5
                text-[2.7rem]
                font-semibold
                leading-[1.05]
                tracking-[-0.05em]
                text-white
                sm:text-5xl
              "
              style={{
                fontFamily: "var(--font-playfair)",
              }}
            >
              What I want
              <br />
              <span className="text-rose-300">to do better.</span>
            </h2>

            <p
              className="
                mx-auto
                mt-5
                max-w-md
                text-sm
                leading-7
                text-zinc-500
                sm:text-base
              "
            >
              Not because I have to.
              <br />
              Because you matter to me.
            </p>
          </motion.div>

          {/* =====================================================
              PROMISES
          ====================================================== */}

          <div className="mt-12 space-y-4">
            {promises.map((promise, index) => {
              const Icon = promise.icon;

              return (
                <motion.div
                  key={promise.title}
                  initial={{
                    opacity: 0,
                    y: 25,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 0.65,
                    delay: 0.15 + index * 0.12,
                    ease: "easeOut",
                  }}
                  whileHover={{
                    y: -3,
                  }}
                  className="
                    group
                    relative
                    overflow-hidden
                    rounded-[1.75rem]
                    border
                    border-white/[0.08]
                    bg-gradient-to-br
                    from-white/[0.055]
                    via-white/[0.025]
                    to-transparent
                    p-5
                    shadow-xl
                    shadow-black/10
                    backdrop-blur-xl
                    transition-all
                    duration-300
                    hover:border-rose-300/15
                    hover:shadow-rose-950/20
                    sm:p-6
                  "
                >
                  {/* Hover glow */}
                  <div
                    className="
                      pointer-events-none
                      absolute
                      -right-20
                      -top-20
                      h-40
                      w-40
                      rounded-full
                      bg-rose-400/[0.04]
                      blur-3xl
                      transition-all
                      duration-500
                      group-hover:bg-rose-400/[0.09]
                    "
                  />

                  {/* Left accent */}
                  <div
                    className="
                      absolute
                      bottom-6
                      left-0
                      top-6
                      w-[2px]
                      rounded-r-full
                      bg-rose-400/0
                      transition-all
                      duration-300
                      group-hover:bg-rose-400/60
                    "
                  />

                  <div className="relative flex gap-4 sm:gap-5">
                    {/* Number */}
                    <div className="shrink-0">
                      <div
                        className="
                          flex
                          h-10
                          w-10
                          items-center
                          justify-center
                          rounded-full
                          border
                          border-white/10
                          bg-black/10
                          text-[11px]
                          font-medium
                          text-zinc-500
                        "
                      >
                        {promise.number}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="min-w-0 flex-1">
                      <div className="flex items-start gap-3">
                        <div
                          className="
                            flex
                            h-9
                            w-9
                            shrink-0
                            items-center
                            justify-center
                            rounded-xl
                            bg-rose-400/[0.07]
                            ring-1
                            ring-rose-300/[0.05]
                          "
                        >
                          <Icon size={17} className="text-rose-300" />
                        </div>

                        <h3
                          className="
                            pt-1
                            text-sm
                            font-medium
                            leading-6
                            text-zinc-100
                            sm:text-base
                          "
                        >
                          {promise.title}
                        </h3>
                      </div>

                      <p
                        className="
                          mt-4
                          text-sm
                          leading-7
                          text-zinc-500
                          sm:pr-4
                        "
                      >
                        {promise.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* =====================================================
              HEARTFELT PROMISE
          ====================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              y: 30,
              scale: 0.98,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            transition={{
              duration: 0.9,
              delay: 0.75,
            }}
            className="
              relative
              mt-10
              overflow-hidden
              rounded-[2rem]
              border
              border-rose-300/10
              bg-gradient-to-br
              from-rose-400/[0.08]
              via-white/[0.035]
              to-transparent
              px-6
              py-10
              text-center
              shadow-2xl
              shadow-black/20
              backdrop-blur-xl
              sm:px-10
              sm:py-12
            "
          >
            {/* Card glow */}
            <div
              className="
                pointer-events-none
                absolute
                left-1/2
                top-0
                h-40
                w-72
                -translate-x-1/2
                rounded-full
                bg-rose-400/[0.06]
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
                  bg-rose-400/[0.07]
                "
              >
                <Sparkles size={17} className="text-rose-300" />
              </motion.div>

              <p
                className="
                  mx-auto
                  mt-6
                  max-w-lg
                  text-xl
                  font-medium
                  leading-8
                  tracking-tight
                  text-zinc-100
                  sm:text-2xl
                "
              >
                I don&apos;t promise
                <br className="sm:hidden" />
                that I&apos;ll always be perfect.
              </p>

              <p
                className="
                  mx-auto
                  mt-4
                  max-w-md
                  text-sm
                  leading-7
                  text-zinc-500
                  sm:text-base
                "
              >
                I promise that I&apos;ll always try
                <br className="hidden sm:block" />
                to be better with your heart.
              </p>

              <div className="mt-7 flex items-center justify-center gap-3">
                <span className="h-px w-12 bg-white/10" />

                <motion.div
                  animate={{
                    scale: [1, 1.15, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                  }}
                >
                  <Heart size={13} className="fill-rose-400 text-rose-400" />
                </motion.div>

                <span className="h-px w-12 bg-white/10" />
              </div>

              <p
                className="
                  mt-6
                  text-sm
                  text-zinc-600
                "
                style={{
                  fontFamily: "Georgia, 'Times New Roman', serif",
                }}
              >
                — {SITE.yourName}
              </p>
            </div>
          </motion.div>

          {/* =====================================================
              FINAL TRANSITION
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
              duration: 0.8,
              delay: 1,
            }}
            className="mt-12 text-center"
          >
            <div className="mb-7 flex items-center justify-center gap-3">
              <span className="h-px w-10 bg-white/10" />

              <Heart size={12} className="fill-rose-400/70 text-rose-400" />

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
              I know words alone aren&apos;t enough.
              <br />
              So there&apos;s just one last thing I want to say.
            </p>

            <div className="mx-auto mt-8 w-full max-w-sm">
              <Button text="One last thing" pulse onClick={onNext} />
            </div>

            <motion.p
              animate={{
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                mt-6
                text-[10px]
                uppercase
                tracking-[0.3em]
                text-zinc-700
              "
            >
              From my heart
            </motion.p>
          </motion.div>
        </div>
      </div>
    </Section>
  );
}
