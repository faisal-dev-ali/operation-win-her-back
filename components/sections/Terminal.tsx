"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Heart, Sparkles, CircleCheck } from "lucide-react";

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
      <div className="relative mx-auto w-full max-w-3xl text-center">
        {/* Soft romantic glow */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          className="
            pointer-events-none
            absolute
            left-1/2
            top-1/2
            h-80
            w-80
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-rose-500/10
            blur-[110px]
          "
        />

        <div className="relative z-10">
          {/* Heading */}
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
            }}
          >
            <div
              className="
                mx-auto
                flex
                h-12
                w-12
                items-center
                justify-center
                rounded-2xl
                border
                border-rose-400/15
                bg-rose-400/5
              "
            >
              <Heart size={20} className="fill-rose-400 text-rose-400" />
            </div>

            <p
              className="
                mt-6
                text-[10px]
                uppercase
                tracking-[0.35em]
                text-rose-300/70
                sm:text-xs
              "
            >
              Then I realised
            </p>

            <h2
              className="
                mt-4
                text-4xl
                font-semibold
                leading-tight
                tracking-tight
                text-white
                sm:text-5xl
              "
            >
              What I had
              <br />
              <span className="text-rose-400">actually done.</span>
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
              Sometimes it takes a moment of silence
              <br className="hidden sm:block" />
              to realise how much your words can mean.
            </p>
          </motion.div>

          {/* Realisation card */}
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
              delay: 0.25,
            }}
            className="
              mt-10
              overflow-hidden
              rounded-[2rem]
              border
              border-white/10
              bg-white/[0.035]
              p-6
              text-left
              shadow-2xl
              shadow-black/20
              backdrop-blur-xl
              sm:p-8
            "
          >
            {/* Card header */}
            <div
              className="
                flex
                items-center
                justify-between
                border-b
                border-white/10
                pb-5
              "
            >
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-rose-400" />

                <span
                  className="
                    text-[10px]
                    uppercase
                    tracking-[0.25em]
                    text-zinc-500
                  "
                >
                  What was going through my mind
                </span>
              </div>

              <Sparkles size={15} className="text-rose-400/60" />
            </div>

            {/* Moments */}
            <div className="mt-7 space-y-7">
              {moments.slice(0, visible).map((moment, index) => (
                <motion.div
                  key={moment}
                  initial={{
                    opacity: 0,
                    y: 15,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 0.6,
                  }}
                  className="flex gap-4"
                >
                  {/* Number */}
                  <div className="relative flex shrink-0 justify-center">
                    <div
                      className="
                        flex
                        h-8
                        w-8
                        items-center
                        justify-center
                        rounded-full
                        border
                        border-white/10
                        bg-white/5
                      "
                    >
                      <span className="text-[10px] text-zinc-500">
                        0{index + 1}
                      </span>
                    </div>

                    {index < moments.length - 1 && (
                      <div
                        className="
                          absolute
                          top-9
                          h-[calc(100%+28px)]
                          w-px
                          bg-white/10
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
                      sm:text-base
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
                  duration: 0.8,
                }}
                className="
                  mt-8
                  rounded-2xl
                  border
                  border-rose-400/10
                  bg-rose-400/[0.04]
                  p-5
                  text-center
                  sm:p-7
                "
              >
                <CircleCheck size={20} className="mx-auto text-rose-400" />

                <p
                  className="
                    mt-4
                    text-base
                    font-medium
                    leading-7
                    text-zinc-200
                    sm:text-lg
                  "
                >
                  It wasn&apos;t you.
                  <br />
                  It wasn&apos;t your pictures.
                </p>

                <p
                  className="
                    mt-4
                    text-sm
                    leading-7
                    text-rose-300
                    sm:text-base
                  "
                >
                  It was the way I chose to express myself.
                </p>
              </motion.div>
            )}
          </motion.div>

          {/* Continue */}
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
                duration: 0.7,
                delay: 0.3,
              }}
              className="mt-10"
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
                  tracking-[0.25em]
                  text-zinc-700
                "
              >
                From me, honestly
              </p>
            </motion.div>
          )}

          {/* Names */}
          <p
            className="
              mt-10
              text-[10px]
              uppercase
              tracking-[0.25em]
              text-zinc-700
            "
          >
            {SITE.yourName} · {SITE.herName}
          </p>
        </div>
      </div>
    </Section>
  );
}
