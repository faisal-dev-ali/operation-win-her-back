"use client";

import { motion } from "framer-motion";
import { Heart, Sparkles } from "lucide-react";

import Section from "../ui/Section";
import Button from "../Button";
import { SITE } from "@/data/site";

type Props = {
  onRestart: () => void;
};

export default function Final({ onRestart }: Props) {
  return (
    <Section id="final">
      <div className="relative w-full">
        {/* Ambient glow */}
        <motion.div
          initial={{
            opacity: 0,
            scale: 0.7,
          }}
          whileInView={{
            opacity: 1,
            scale: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 1.2,
          }}
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
            blur-[100px]
          "
        />

        <div className="relative mx-auto max-w-2xl text-center">
          {/* Heart */}
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.5,
              rotate: -10,
            }}
            whileInView={{
              opacity: 1,
              scale: 1,
              rotate: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
            }}
            className="
              mx-auto
              flex
              h-16
              w-16
              items-center
              justify-center
              rounded-2xl
              border
              border-rose-400/15
              bg-rose-400/5
            "
          >
            <motion.div
              animate={{
                scale: [1, 1.08, 1],
              }}
              transition={{
                repeat: Infinity,
                duration: 2.2,
                ease: "easeInOut",
              }}
            >
              <Heart size={26} className="fill-rose-400 text-rose-400" />
            </motion.div>
          </motion.div>

          {/* Label */}
          <motion.p
            initial={{
              opacity: 0,
              y: 15,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.6,
              delay: 0.15,
            }}
            className="
              mt-8
              text-xs
              uppercase
              tracking-[0.35em]
              text-rose-400
            "
          >
            End of the investigation
          </motion.p>

          {/* Heading */}
          <motion.h2
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.7,
              delay: 0.25,
            }}
            className="
              mt-5
              text-4xl
              font-semibold
              tracking-tight
              text-white
              sm:text-5xl
              md:text-6xl
            "
          >
            I just wanted
            <br />
            <span className="text-rose-400">you to know.</span>
          </motion.h2>

          {/* Main message */}
          <motion.div
            initial={{
              opacity: 0,
              y: 25,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.7,
              delay: 0.4,
            }}
            className="
              mx-auto
              mt-8
              max-w-xl
              space-y-5
              text-sm
              leading-7
              text-zinc-400
              sm:text-base
              sm:leading-8
            "
          >
            <p>I don&apos;t expect one website to fix everything.</p>

            <p>
              I don&apos;t expect one apology to magically erase the moment that
              hurt you.
            </p>

            <p>
              I just wanted to take responsibility for what I said, because you
              matter too much to me for me to pretend it didn&apos;t.
            </p>

            <p className="text-zinc-200">
              And if I could rewrite that moment,
              <br />I would choose completely different words.
            </p>
          </motion.div>

          {/* Final apology card */}
          <motion.div
            initial={{
              opacity: 0,
              y: 25,
              scale: 0.96,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            viewport={{
              once: true,
              amount: 0.4,
            }}
            transition={{
              duration: 0.8,
              delay: 0.55,
            }}
            className="
              mx-auto
              mt-12
              max-w-lg
              rounded-3xl
              border
              border-white/10
              bg-white/[0.035]
              px-6
              py-9
              backdrop-blur-xl
              sm:px-10
            "
          >
            <Sparkles size={18} className="mx-auto text-rose-400" />

            <p className="mt-5 text-xl font-medium text-white sm:text-2xl">
              I&apos;m genuinely sorry,
              <br />
              {SITE.herName}.
            </p>

            <p className="mt-4 text-sm leading-6 text-zinc-500">
              You deserved better words from me.
            </p>

            {/* Divider */}
            <div className="mt-7 flex items-center justify-center gap-3">
              <div className="h-px w-10 bg-white/10" />

              <Heart size={13} className="fill-rose-400 text-rose-400" />

              <div className="h-px w-10 bg-white/10" />
            </div>

            <p className="mt-5 text-sm text-zinc-500">— {SITE.yourName}</p>
          </motion.div>

          {/* Final thought */}
          <motion.p
            initial={{
              opacity: 0,
            }}
            whileInView={{
              opacity: 1,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.7,
              delay: 0.8,
            }}
            className="
              mx-auto
              mt-10
              max-w-md
              text-xs
              leading-6
              text-zinc-600
            "
          >
            No pressure.
            <br />
            No expectations.
            <br />
            Just an apology I genuinely wanted you to hear.
          </motion.p>

          {/* Restart */}
          <motion.div
            initial={{
              opacity: 0,
              y: 15,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.6,
              delay: 1,
            }}
            className="mt-12"
          >
            <Button
              text="Start again"
              variant="secondary"
              onClick={onRestart}
            />

            <p className="mt-6 text-[11px] text-zinc-700">
              relationship-service · v2.0.0 · deployed with love
            </p>
          </motion.div>
        </div>
      </div>
    </Section>
  );
}
