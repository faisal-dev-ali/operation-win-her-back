"use client";

import { useCallback, useState } from "react";
import { motion } from "framer-motion";
import { Feather, Flower2, Heart, Quote } from "lucide-react";

import Section from "../ui/Section";
import Button from "../Button";
import Typewriter from "../Typewriter";
import { SITE } from "@/data/site";

type Props = {
  onNext: () => void;
};

export default function Letter({ onNext }: Props) {
  const [typingFinished, setTypingFinished] = useState(false);

  const handleTypingComplete = useCallback(() => {
    setTypingFinished(true);
  }, []);

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

  return (
    <Section id="letter">
      <div className="mx-auto w-full max-w-4xl">
        {/* INTRO */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-12 text-center"
        >
          <motion.div
            animate={{
              rotate: [0, -4, 4, 0],
              scale: [1, 1.04, 1],
            }}
            transition={{
              duration: 3,
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
              border-rose-400/15
              bg-rose-400/5
            "
          >
            <Feather size={20} className="text-rose-300" />
          </motion.div>

          <p
            className="
              mt-5
              text-[10px]
              uppercase
              tracking-[0.4em]
              text-rose-300/70
            "
          >
            From my heart
          </p>

          <h2
            className="
              mt-4
              text-4xl
              font-semibold
              tracking-tight
              text-white
              sm:text-5xl
            "
          >
            There are some things
            <br />
            <span className="text-rose-300">I want to say properly.</span>
          </h2>

          <p
            className="
              mx-auto
              mt-5
              max-w-md
              text-sm
              leading-7
              text-zinc-500
            "
          >
            So this time, I&apos;m not going to rush my words.
            <br />I just want you to hear me.
          </p>
        </motion.div>

        {/* LETTER */}
        <div className="relative">
          {/* Ambient glow */}
          <motion.div
            animate={{
              opacity: [0.2, 0.4, 0.2],
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
              ease: "easeOut",
            }}
            className="
              relative
              z-10
              w-full
              overflow-hidden
              rounded-[2rem]
              bg-[#fff8f2]
              px-6
              py-10
              shadow-2xl
              shadow-black/40
              sm:px-10
              sm:py-14
              md:px-14
              lg:px-16
            "
          >
            {/* Paper decoration */}
            <div
              className="
                pointer-events-none
                absolute
                -right-24
                -top-24
                h-72
                w-72
                rounded-full
                bg-rose-200/30
                blur-3xl
              "
            />

            <div
              className="
                pointer-events-none
                absolute
                -bottom-24
                -left-24
                h-72
                w-72
                rounded-full
                bg-pink-200/20
                blur-3xl
              "
            />

            {/* Decorative hearts */}
            <Heart
              size={14}
              className="
                pointer-events-none
                absolute
                right-8
                top-8
                rotate-12
                fill-rose-300/40
                text-rose-300/50
              "
            />

            <Heart
              size={9}
              className="
                pointer-events-none
                absolute
                bottom-12
                left-8
                -rotate-12
                fill-rose-300/30
                text-rose-300/40
              "
            />

            <div className="relative">
              {/* Letter header */}
              <div
                className="
                  mb-9
                  flex
                  items-center
                  justify-between
                  border-b
                  border-zinc-900/10
                  pb-5
                "
              >
                <div>
                  <p
                    className="
                      text-[10px]
                      uppercase
                      tracking-[0.3em]
                      text-zinc-400
                    "
                  >
                    A letter from
                  </p>

                  <p
                    className="mt-1 text-lg text-zinc-800"
                    style={{
                      fontFamily: "Georgia, 'Times New Roman', serif",
                    }}
                  >
                    {SITE.yourName}
                  </p>
                </div>

                <Heart size={18} className="fill-rose-400 text-rose-400" />
              </div>

              {/* Greeting */}
              <div className="relative">
                <Quote
                  size={30}
                  className="
                    absolute
                    -left-1
                    -top-4
                    text-rose-300/20
                  "
                />

                <h3
                  className="
                    relative
                    pl-2
                    text-3xl
                    text-zinc-800
                    sm:text-4xl
                  "
                  style={{
                    fontFamily: "Georgia, 'Times New Roman', serif",
                  }}
                >
                  Dear {SITE.herName},
                </h3>
              </div>

              {/* Typing indicator */}
              {!typingFinished && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="
                    mt-5
                    flex
                    items-center
                    gap-2
                    text-xs
                    text-zinc-400
                  "
                >
                  <span
                    className="
                      h-1.5
                      w-1.5
                      animate-pulse
                      rounded-full
                      bg-rose-400
                    "
                  />
                  Writing this carefully...
                </motion.div>
              )}

              {/* Letter body */}
              <div
                className="
                  mt-8
                  text-[17px]
                  leading-[2]
                  text-zinc-700
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

              {/* Signature */}
              {typingFinished && (
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
                  }}
                  className="
                    mt-10
                    border-t
                    border-zinc-900/10
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
                      text-zinc-500
                    "
                  >
                    With all my heart,
                  </p>

                  <p
                    className="
                      mt-1
                      text-3xl
                      text-zinc-800
                    "
                  >
                    {SITE.yourName}
                  </p>

                  <div className="mt-2 flex justify-end">
                    <Heart
                      size={14}
                      className="
                        fill-rose-400
                        text-rose-400
                      "
                    />
                  </div>
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>

        {/* AFTER LETTER */}
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
              duration: 0.7,
              delay: 0.35,
            }}
            className="mt-12 text-center"
          >
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
              <span className="h-px w-12 bg-white/10" />

              <Flower2 size={15} className="text-rose-400" />

              <span className="h-px w-12 bg-white/10" />
            </div>

            <p
              className="
                text-sm
                leading-7
                text-zinc-500
              "
            >
              I hope you can feel
              <br />
              how sincerely I mean this.
            </p>

            <div
              className="
                mx-auto
                mt-7
                w-full
                max-w-sm
              "
            >
              <Button
                text="There's more I want to show you"
                pulse
                onClick={onNext}
              />
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
              One more little part of this story
            </p>
          </motion.div>
        )}
      </div>
    </Section>
  );
}
