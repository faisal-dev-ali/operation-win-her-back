"use client";

import { motion } from "framer-motion";
import { Heart, Sparkles, Stars } from "lucide-react";

import Section from "../ui/Section";
import Button from "../Button";
import { SITE } from "@/data/site";

type Props = {
  onRestart: () => void;
};

export default function Final({ onRestart }: Props) {
  return (
    <Section id="final">
      <div className="relative w-full overflow-hidden">
        {/* ───────────────── AMBIENT GLOW ───────────────── */}

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
            duration: 1.5,
          }}
          className="
            pointer-events-none
            absolute
            left-1/2
            top-1/2
            h-[22rem]
            w-[22rem]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-rose-500/[0.08]
            blur-[110px]
            sm:h-[30rem]
            sm:w-[30rem]
          "
        />

        {/* Tiny ambient stars */}
        <motion.div
          animate={{
            opacity: [0.2, 0.6, 0.2],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            pointer-events-none
            absolute
            left-[12%]
            top-[18%]
            text-rose-300/30
          "
        >
          <Stars size={12} />
        </motion.div>

        <motion.div
          animate={{
            opacity: [0.15, 0.5, 0.15],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
          className="
            pointer-events-none
            absolute
            right-[14%]
            top-[30%]
            text-rose-300/20
          "
        >
          <Sparkles size={11} />
        </motion.div>

        <div className="relative z-10 mx-auto max-w-2xl text-center">
          {/* ───────────────── HEART ───────────────── */}

          <motion.div
            initial={{
              opacity: 0,
              scale: 0.5,
              y: 15,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
            }}
            transition={{
              duration: 0.9,
              ease: "easeOut",
            }}
            className="
              mx-auto
              flex
              h-16
              w-16
              items-center
              justify-center
              rounded-full
              border
              border-rose-400/15
              bg-rose-400/[0.06]
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
              <Heart size={25} className="fill-rose-400 text-rose-400" />
            </motion.div>
          </motion.div>

          {/* ───────────────── INTRO ───────────────── */}

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
              duration: 0.7,
              delay: 0.2,
            }}
            className="
              mt-8
              text-[10px]
              uppercase
              tracking-[0.4em]
              text-rose-300/70
              sm:text-xs
            "
          >
            Just one last thing
          </motion.p>

          <motion.h2
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
              delay: 0.3,
              ease: "easeOut",
            }}
            className="
              mt-5
              text-[2.8rem]
              font-semibold
              leading-[1.05]
              tracking-[-0.055em]
              text-white
              sm:text-6xl
            "
          >
            I just want
            <br />
            <span className="text-rose-300">you to know.</span>
          </motion.h2>

          {/* ───────────────── MESSAGE ───────────────── */}

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
              delay: 0.5,
            }}
            className="
              mx-auto
              mt-9
              max-w-xl
              space-y-6
              text-sm
              leading-8
              text-zinc-400
              sm:text-base
              sm:leading-9
            "
          >
            <p>I know I can&apos;t change the moment that already happened.</p>

            <p>
              I can&apos;t take those words back or pretend they never came out
              of my mouth.
            </p>

            <p className="text-zinc-300">
              But I can be honest about one thing...
            </p>

            <p
              className="
                text-lg
                font-medium
                leading-8
                text-zinc-100
                sm:text-xl
                sm:leading-9
              "
            >
              You never deserved to feel bad
              <br className="hidden sm:block" />
              because of something I said.
            </p>
          </motion.div>

          {/* ───────────────── FINAL APOLOGY ───────────────── */}

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
              duration: 0.9,
              delay: 0.75,
            }}
            className="
              relative
              mx-auto
              mt-12
              max-w-lg
              overflow-hidden
              rounded-[2rem]
              border
              border-rose-400/10
              bg-gradient-to-br
              from-rose-400/[0.08]
              via-white/[0.035]
              to-transparent
              px-6
              py-10
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
                h-32
                w-48
                -translate-x-1/2
                rounded-full
                bg-rose-400/[0.06]
                blur-3xl
              "
            />

            <div className="relative">
              <Sparkles size={17} className="mx-auto text-rose-300/70" />

              <p
                className="
                  mt-6
                  text-2xl
                  font-medium
                  leading-9
                  tracking-tight
                  text-white
                  sm:text-3xl
                "
              >
                I&apos;m genuinely sorry,
                <br />
                {SITE.herName}.
              </p>

              <p
                className="
                  mx-auto
                  mt-5
                  max-w-sm
                  text-sm
                  leading-7
                  text-zinc-500
                "
              >
                You deserved kindness from me in that moment.
                <br />
                You deserved better words.
              </p>

              {/* Divider */}
              <div className="mt-8 flex items-center justify-center gap-3">
                <span className="h-px w-12 bg-white/10" />

                <Heart size={13} className="fill-rose-400 text-rose-400" />

                <span className="h-px w-12 bg-white/10" />
              </div>

              <p
                className="
                  mt-6
                  text-sm
                  italic
                  text-zinc-500
                "
              >
                With all my heart,
              </p>

              <p
                className="
                  mt-1
                  text-2xl
                  text-zinc-200
                  sm:text-3xl
                "
                style={{
                  fontFamily: "Georgia, 'Times New Roman', serif",
                }}
              >
                {SITE.yourName}
              </p>
            </div>
          </motion.div>

          {/* ───────────────── NO PRESSURE ───────────────── */}

          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              duration: 0.8,
              delay: 1.05,
            }}
            className="mx-auto mt-10 max-w-md"
          >
            <p
              className="
                text-xs
                leading-6
                text-zinc-600
              "
            >
              You don&apos;t have to say anything right now.
              <br />
              You don&apos;t have to make anything okay.
            </p>

            <p
              className="
                mt-4
                text-sm
                leading-7
                text-zinc-500
              "
            >
              I just wanted you to hear this
              <br />
              from me, properly.
            </p>
          </motion.div>

          {/* ───────────────── FINAL HEART ───────────────── */}

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
              duration: 0.7,
              delay: 1.25,
            }}
            className="mt-10"
          >
            <motion.div
              animate={{
                y: [0, -4, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                inline-flex
                items-center
                justify-center
                rounded-full
                border
                border-white/5
                bg-white/[0.025]
                px-5
                py-3
              "
            >
              <Heart size={13} className="fill-rose-400/70 text-rose-400/70" />

              <span className="ml-2 text-[11px] text-zinc-600">
                Always rooting for us
              </span>
            </motion.div>
          </motion.div>

          {/* ───────────────── RESTART ───────────────── */}

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
              duration: 0.7,
              delay: 1.4,
            }}
            className="mt-10"
          >
            <Button
              text="Read it all again"
              variant="secondary"
              onClick={onRestart}
            />

            <p
              className="
                mt-6
                text-[10px]
                uppercase
                tracking-[0.25em]
                text-zinc-800
              "
            >
              Made with love · {SITE.yourName}
            </p>
          </motion.div>
        </div>
      </div>
    </Section>
  );
}
