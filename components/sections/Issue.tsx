"use client";

import { motion } from "framer-motion";
import { Heart, Sparkles } from "lucide-react";

import Section from "../ui/Section";
import Button from "../Button";
import { SITE } from "@/data/site";

type Props = {
  onNext: () => void;
};

export default function Hero({ onNext }: Props) {
  return (
    <Section id="hero">
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
            h-72
            w-72
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-rose-500/10
            blur-[110px]
            sm:h-96
            sm:w-96
          "
        />

        <div className="relative z-10">
          {/* Tiny opening */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="flex items-center justify-center gap-2"
          >
            <Sparkles size={13} className="text-rose-400" />

            <p
              className="
              text-[10px]
              uppercase
              tracking-[0.35em]
              text-zinc-500
              sm:text-xs
            "
            >
              A little something for you
            </p>

            <Sparkles size={13} className="text-rose-400" />
          </motion.div>

          {/* Main heading */}
          <motion.h1
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
              delay: 0.2,
              ease: "easeOut",
            }}
            className="
              mt-8
              text-[3.4rem]
              font-semibold
              leading-[0.98]
              tracking-[-0.055em]
              text-white
              sm:text-7xl
              md:text-8xl
            "
          >
            I need to
            <br />
            <span className="text-rose-400">tell you something.</span>
          </motion.h1>

          {/* Personal intro */}
          <motion.p
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
            className="
              mx-auto
              mt-8
              max-w-xl
              text-base
              leading-8
              text-zinc-400
              sm:text-lg
              sm:leading-9
            "
          >
            I know I said something that hurt you.
            <br />
            <span className="text-zinc-200">
              And honestly, I wish I could take
              <br className="sm:hidden" />
              those words back.
            </span>
          </motion.p>

          {/* Heart */}
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
              duration: 0.7,
              delay: 0.7,
            }}
            className="mt-8 flex justify-center"
          >
            <motion.div
              animate={{
                scale: [1, 1.08, 1],
              }}
              transition={{
                duration: 2.2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                flex
                h-12
                w-12
                items-center
                justify-center
                rounded-full
                border
                border-rose-400/15
                bg-rose-400/5
              "
            >
              <Heart size={19} className="fill-rose-400 text-rose-400" />
            </motion.div>
          </motion.div>

          {/* Her name */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 0.7,
              delay: 0.9,
            }}
            className="
              mt-5
              text-sm
              text-zinc-500
            "
          >
            For you, {SITE.herName}.
          </motion.p>

          {/* CTA */}
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
              delay: 1.1,
            }}
            className="
              mx-auto
              mt-10
              w-full
              max-w-sm
            "
          >
            <Button text="Let me explain" pulse onClick={onNext} />
          </motion.div>

          {/* Bottom hint */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 0.8,
              delay: 1.5,
            }}
            className="
              mt-6
              text-[10px]
              uppercase
              tracking-[0.25em]
              text-zinc-700
            "
          >
            Just hear me out
          </motion.p>
        </div>
      </div>
    </Section>
  );
}
