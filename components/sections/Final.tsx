"use client";

import { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, Sparkles, Stars, Flower2, Play } from "lucide-react";

import Section from "../ui/Section";
import Button from "../Button";
import { SITE } from "@/data/site";
import { useMusic } from "@/components/effects/MusicProvider";

type Props = {
  onRestart: () => void;
};

/* =========================================================
   TINY STARS
========================================================= */

const stars = Array.from({ length: 22 }, (_, index) => ({
  id: index,
  left: `${(index * 43) % 100}%`,
  top: `${(index * 61) % 100}%`,
  size: 2 + (index % 3),
  delay: (index % 6) * 0.7,
}));

/* =========================================================
   FLOATING PETALS
========================================================= */

const petals = Array.from({ length: 9 }, (_, index) => ({
  id: index,
  left: `${5 + ((index * 29) % 90)}%`,
  delay: index * 1.15,
  duration: 9 + (index % 4),
  size: 7 + (index % 4),
}));

/* =========================================================
   COMPONENT
========================================================= */

export default function Final({ onRestart }: Props) {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const { fadeMusic, restoreMusic } = useMusic();

  const [videoStarted, setVideoStarted] = useState(false);
  const [videoEnded, setVideoEnded] = useState(false);

  /* =========================================================
     START VIDEO
  ========================================================= */

  const startVideo = async () => {
    const video = videoRef.current;

    if (!video) return;

    /*
     * Video is visual only.
     * Background music is the only audio source.
     */

    video.muted = true;
    video.volume = 0;

    fadeMusic(0.025, 1000);

    try {
      await video.play();

      /*
       * Force video silence after playback begins.
       */

      video.muted = true;
      video.volume = 0;

      setVideoStarted(true);
    } catch (error) {
      console.error("Video could not be started:", error);

      restoreMusic(0.45, 1000);
    }
  };

  return (
    <Section id="final">
      <div className="relative w-full overflow-hidden">
        {/* =========================================================
            ATMOSPHERE
        ========================================================== */}

        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          {/* Main rose glow */}

          <motion.div
            animate={{
              opacity: [0.22, 0.42, 0.22],
              scale: [1, 1.1, 1],
            }}
            transition={{
              opacity: {
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
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
              top-[34%]
              h-[25rem]
              w-[25rem]
              -translate-x-1/2
              -translate-y-1/2
              rounded-full
              bg-[#c87591]/[0.10]
              blur-[120px]
              sm:h-[34rem]
              sm:w-[34rem]
            "
          />

          {/* Deep wine glow */}

          <div
            className="
              absolute
              -left-40
              top-[42%]
              h-80
              w-80
              rounded-full
              bg-[#8f4564]/[0.10]
              blur-[120px]
            "
          />

          {/* Champagne glow */}

          <div
            className="
              absolute
              -right-40
              top-[16%]
              h-72
              w-72
              rounded-full
              bg-[#efd7c9]/[0.055]
              blur-[110px]
            "
          />

          {/* Stars */}

          {stars.map((star) => (
            <motion.span
              key={star.id}
              animate={{
                opacity: [0.06, 0.42, 0.06],
                scale: [0.7, 1, 0.7],
              }}
              transition={{
                duration: 3 + star.delay,
                repeat: Infinity,
                ease: "easeInOut",
                delay: star.delay,
              }}
              className="absolute rounded-full bg-[#f1dce1]"
              style={{
                left: star.left,
                top: star.top,
                width: star.size,
                height: star.size,
              }}
            />
          ))}

          {/* Floating petals */}

          {petals.map((petal) => (
            <motion.span
              key={petal.id}
              initial={{
                y: "-10vh",
                rotate: 0,
                opacity: 0,
              }}
              animate={{
                y: "110vh",
                rotate: 180,
                opacity: [0, 0.24, 0.1, 0],
              }}
              transition={{
                duration: petal.duration,
                repeat: Infinity,
                ease: "linear",
                delay: petal.delay,
              }}
              className="
                absolute
                top-0
                rounded-[100%_0_100%_0]
                border
                border-[#e4a5b8]/20
                bg-[#d889a2]/[0.045]
              "
              style={{
                left: petal.left,
                width: petal.size,
                height: petal.size * 1.45,
              }}
            />
          ))}
        </div>

        {/* =========================================================
            CONTENT
        ========================================================== */}

        <div className="relative z-10 mx-auto max-w-3xl text-center">
          {/* =========================================================
              OPENING HEART
          ========================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              scale: 0.6,
              y: 15,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
            }}
            transition={{
              duration: 1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative mx-auto h-20 w-20"
          >
            <motion.div
              animate={{
                scale: [1, 1.25, 1],
                opacity: [0.18, 0.4, 0.18],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                absolute
                inset-0
                rounded-full
                bg-[#c87591]/[0.13]
                blur-2xl
              "
            />

            <div
              className="
                heart-glow
                relative
                flex
                h-20
                w-20
                items-center
                justify-center
                rounded-full
                border
                border-[#e1a1b5]/20
                bg-[#c87591]/[0.065]
              "
            >
              <motion.div
                animate={{
                  scale: [1, 1.12, 1],
                }}
                transition={{
                  duration: 2.4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <Heart
                  size={28}
                  strokeWidth={1.4}
                  className="fill-[#d98fa5] text-[#d98fa5]"
                />
              </motion.div>
            </div>
          </motion.div>

          {/* =========================================================
              INTRO
          ========================================================== */}

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
              tracking-[0.42em]
              text-[#dca5b6]/70
              sm:text-xs
            "
          >
            One last thing
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
              delay: 0.32,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              romantic-title
              mt-5
              text-[2.7rem]
              font-semibold
              leading-[1.04]
              tracking-[-0.055em]
              sm:text-6xl
            "
          >
            Some things are better
            <br />
            <span className="romantic-gradient">shown than written.</span>
          </motion.h2>

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
              duration: 0.75,
              delay: 0.5,
            }}
            className="
              mx-auto
              mt-6
              max-w-md
              text-sm
              leading-7
              text-[#b9a8ae]
              sm:text-base
            "
          >
            So this time, no long paragraph.
            <br />
            Just me... saying sorry.
          </motion.p>

          {/* =========================================================
              APOLOGY VIDEO
          ========================================================== */}

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
              delay: 0.7,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="mx-auto mt-10 max-w-3xl"
          >
            <div className="relative">
              {/* Outer glow */}

              <div
                className="
                  pointer-events-none
                  absolute
                  -inset-8
                  rounded-[3rem]
                  bg-[#c87591]/[0.08]
                  blur-[55px]
                "
              />

              {/* Video frame */}

              <div
                className="
                  relative
                  rounded-[2rem]
                  border
                  border-[#e1a1b5]/15
                  bg-[#0b090b]
                  p-1.5
                  shadow-[0_35px_100px_rgba(0,0,0,0.4)]
                  sm:p-2
                "
              >
                <div className="relative overflow-hidden rounded-[1.5rem] bg-black">
                  {/* =================================================
                      VIDEO
                  ================================================== */}

                  <video
                    ref={videoRef}
                    src="/videos/apology.mp4"
                    muted
                    playsInline
                    preload="metadata"
                    controls={videoStarted}
                    onLoadedMetadata={() => {
                      const video = videoRef.current;

                      if (!video) return;

                      video.muted = true;
                      video.volume = 0;
                    }}
                    onPlay={() => {
                      const video = videoRef.current;

                      if (video) {
                        video.muted = true;
                        video.volume = 0;
                      }

                      setVideoStarted(true);

                      fadeMusic(0.025, 1000);
                    }}
                    onPause={() => {
                      if (!videoEnded) {
                        restoreMusic(0.1, 1200);
                      }
                    }}
                    onEnded={() => {
                      const video = videoRef.current;

                      if (video) {
                        video.muted = true;
                        video.volume = 0;
                      }

                      setVideoEnded(true);

                      restoreMusic(0.45, 1600);
                    }}
                    className="
                      block
                      h-auto
                      max-h-[75vh]
                      w-full
                      bg-black
                    "
                  />

                  {/* =================================================
                      PLAY BUTTON
                  ================================================== */}

                  {!videoStarted && (
                    <button
                      type="button"
                      onClick={startVideo}
                      aria-label="Play apology video"
                      className="
                        absolute
                        inset-0
                        flex
                        cursor-pointer
                        items-center
                        justify-center
                        bg-black/20
                        transition-colors
                        hover:bg-black/10
                      "
                    >
                      <motion.div
                        initial={{
                          opacity: 0,
                          scale: 0.75,
                        }}
                        animate={{
                          opacity: 1,
                          scale: 1,
                        }}
                        transition={{
                          duration: 0.5,
                        }}
                        whileHover={{
                          scale: 1.07,
                        }}
                        whileTap={{
                          scale: 0.94,
                        }}
                        className="
                          heart-glow
                          flex
                          h-18
                          w-18
                          items-center
                          justify-center
                          rounded-full
                          border
                          border-white/20
                          bg-[#c87591]/85
                          shadow-2xl
                          backdrop-blur-md
                          sm:h-20
                          sm:w-20
                        "
                      >
                        <Play
                          size={26}
                          fill="white"
                          strokeWidth={1.5}
                          className="ml-1 text-white"
                        />
                      </motion.div>
                    </button>
                  )}

                  {/* Play hint */}

                  {!videoStarted && (
                    <div
                      className="
                        pointer-events-none
                        absolute
                        bottom-5
                        left-1/2
                        -translate-x-1/2
                        whitespace-nowrap
                        rounded-full
                        border
                        border-white/10
                        bg-black/35
                        px-4
                        py-2
                        text-[9px]
                        uppercase
                        tracking-[0.25em]
                        text-white/70
                        backdrop-blur-md
                      "
                    >
                      Tap to hear me out
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Video caption */}

            <motion.p
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              transition={{
                duration: 0.7,
                delay: 1,
              }}
              className="
                mt-6
                text-[10px]
                uppercase
                tracking-[0.3em]
                text-[#918087]
              "
            >
              No excuses. Just sorry.
            </motion.p>
          </motion.div>

          {/* =========================================================
              AFTER VIDEO
          ========================================================== */}

          <AnimatePresence>
            {videoEnded && (
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
                className="mx-auto mt-10 max-w-xl"
              >
                {/* =================================================
                    HEARTFELT HINGLISH LINE
                ================================================== */}

                <motion.div
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
                    delay: 0.2,
                  }}
                  className="mx-auto max-w-lg text-center"
                >
                  <div className="mx-auto mb-5 flex items-center justify-center gap-3">
                    <span className="h-px w-10 bg-[#e2a2b5]/15" />

                    <Heart
                      size={13}
                      strokeWidth={1.2}
                      className="fill-[#d889a2]/70 text-[#d889a2]"
                    />

                    <span className="h-px w-10 bg-[#e2a2b5]/15" />
                  </div>

                  <p
                    className="
                      romantic-title
                      text-2xl
                      leading-9
                      text-[#f5e5e8]
                      sm:text-3xl
                    "
                  >
                    Sach bolun...
                  </p>

                  <p
                    className="
                      mt-3
                      text-base
                      leading-8
                      text-[#cdbbc0]
                      sm:text-lg
                    "
                  >
                    mujhe bas itna chahiye ki tum meri baat
                    <br className="hidden sm:block" />
                    ek baar dil se sun lo.
                  </p>
                </motion.div>

                {/* =================================================
                    LIGHT MOMENT
                ================================================== */}

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
                    duration: 0.7,
                    delay: 0.9,
                  }}
                  className="
                    mt-9
                    text-sm
                    leading-7
                    text-[#b9a8ae]
                    sm:text-base
                  "
                >
                  Okay...
                  <br />I know that was a little dramatic. 😂
                </motion.p>

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
                    duration: 0.8,
                    delay: 1.15,
                  }}
                  className="
                    romantic-title
                    mt-5
                    text-2xl
                    leading-9
                    text-[#fff5f1]
                    sm:text-3xl
                  "
                >
                  But I really am sorry,
                  <br />
                  <span className="romantic-gradient">{SITE.herName}.</span>
                </motion.p>
              </motion.div>
            )}
          </AnimatePresence>

          {/* =========================================================
              FINAL HANDWRITTEN LETTER
              Only appears after the video is finished.
          ========================================================== */}

          <AnimatePresence>
            {videoEnded && (
              <motion.div
                initial={{
                  opacity: 0,
                  y: 30,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.9,
                  delay: 1.05,
                }}
                className="
                  romantic-paper
                  relative
                  mx-auto
                  mt-12
                  max-w-xl
                  overflow-hidden
                  rounded-[1.8rem]
                  px-7
                  py-10
                  text-left
                  sm:px-12
                  sm:py-12
                "
              >
                {/* Paper light */}

                <motion.div
                  animate={{
                    x: ["-120%", "120%"],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    repeatDelay: 4,
                    ease: "easeInOut",
                  }}
                  className="
                    pointer-events-none
                    absolute
                    left-0
                    top-0
                    h-full
                    w-1/3
                    skew-x-[-15deg]
                    bg-white/[0.13]
                    blur-2xl
                  "
                />

                <div className="relative">
                  {/* Header */}

                  <div className="flex items-center gap-3">
                    <Flower2
                      size={17}
                      strokeWidth={1.2}
                      className="text-[#a9667d]"
                    />

                    <span
                      className="
                        text-[9px]
                        uppercase
                        tracking-[0.3em]
                        text-[#8d6874]
                      "
                    >
                      From my heart
                    </span>
                  </div>

                  {/* Name */}

                  <p
                    className="
                      mt-8
                      text-[1.65rem]
                      leading-[1.35]
                      text-[#432d35]
                      sm:text-3xl
                    "
                    style={{
                      fontFamily: "var(--font-playfair)",
                    }}
                  >
                    {SITE.herName},
                  </p>

                  {/* Letter */}

                  <div
                    className="
                      mt-6
                      space-y-5
                      text-[15px]
                      leading-8
                      text-[#634a52]
                      sm:text-base
                      sm:leading-9
                    "
                  >
                    <p>I can&apos;t undo that moment.</p>

                    <p>But I hope you can see how genuinely sorry I am.</p>

                    <p>
                      What I said was wrong.
                      <br />
                      And you deserved much better from me.
                    </p>

                    <p
                      className="
                        pt-2
                        text-lg
                        font-medium
                        leading-8
                        text-[#4a3039]
                        sm:text-xl
                      "
                      style={{
                        fontFamily: "var(--font-playfair)",
                      }}
                    >
                      I never wanted you to question
                      <br className="hidden sm:block" />
                      how beautiful you are.
                    </p>
                  </div>

                  {/* Divider */}

                  <div className="mt-9 flex items-center gap-3">
                    <span className="h-px w-12 bg-[#a9667d]/20" />

                    <Heart
                      size={13}
                      strokeWidth={1.5}
                      className="fill-[#b76f88] text-[#b76f88]"
                    />

                    <span className="h-px w-12 bg-[#a9667d]/20" />
                  </div>

                  {/* Final sentence */}

                  <p
                    className="
                      mt-7
                      text-sm
                      italic
                      text-[#876c74]
                    "
                  >
                    I just hope my sorry reaches you.
                  </p>

                  {/* Signature */}

                  <p
                    className="
                      mt-6
                      text-2xl
                      text-[#4b323b]
                      sm:text-3xl
                    "
                    style={{
                      fontFamily: "Georgia, 'Times New Roman', serif",
                    }}
                  >
                    — {SITE.yourName}
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* =========================================================
              FINAL LINE
          ========================================================== */}

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
              delay: 1.3,
            }}
            className="mt-12"
          >
            <motion.div
              animate={{
                scale: [1, 1.015, 1],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <p
                className="
                  romantic-title
                  text-2xl
                  leading-9
                  text-[#f2e2e4]
                  sm:text-3xl
                "
              >
                Ab thoda sa maan bhi jao na...
                <br />
                <span className="romantic-gradient">❤️</span>
              </p>
            </motion.div>
          </motion.div>

          {/* =========================================================
              SOFT ENDING
          ========================================================== */}

          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              duration: 0.8,
              delay: 1.5,
            }}
            className="mx-auto mt-9 max-w-md"
          >
            <p
              className="
                text-xs
                leading-6
                text-[#918087]
              "
            >
              You don&apos;t have to say anything right now.
              <br />I just wanted you to hear this from me.
            </p>

            <p
              className="
                mt-4
                text-sm
                leading-7
                text-[#aa989f]
              "
            >
              Properly.
              <br />
              From my heart.
            </p>
          </motion.div>

          {/* =========================================================
              RESTART
          ========================================================== */}

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
              delay: 1.7,
            }}
            className="mt-10"
          >
            <Button
              text="Start from the beginning"
              variant="secondary"
              onClick={onRestart}
            />

            <div className="mt-7 flex items-center justify-center gap-3">
              <span className="h-px w-8 bg-white/[0.07]" />

              <Stars
                size={11}
                strokeWidth={1.2}
                className="text-[#d9b49e]/45"
              />

              <span className="h-px w-8 bg-white/[0.07]" />
            </div>

            <p
              className="
                mt-5
                text-[9px]
                uppercase
                tracking-[0.28em]
                text-[#76656d]
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
