"use client";

import { useEffect, useState } from "react";
import { Heart } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

type HeartParticle = {
  id: number;
  x: number;
  y: number;
};

export default function HeartTouch() {
  const [hearts, setHearts] = useState<HeartParticle[]>([]);

  useEffect(() => {
    let id = 0;

    const handlePointerDown = (event: PointerEvent) => {
      const target = event.target as HTMLElement;

      if (
        target.closest("button") ||
        target.closest("a") ||
        target.closest("video")
      ) {
        return;
      }

      const heart = {
        id: ++id,
        x: event.clientX,
        y: event.clientY,
      };

      setHearts((current) => [...current.slice(-5), heart]);

      window.setTimeout(() => {
        setHearts((current) => current.filter((item) => item.id !== heart.id));
      }, 1000);
    };

    window.addEventListener("pointerdown", handlePointerDown);

    return () => {
      window.removeEventListener("pointerdown", handlePointerDown);
    };
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-[1000]">
      <AnimatePresence>
        {hearts.map((heart) => (
          <motion.div
            key={heart.id}
            initial={{
              opacity: 0,
              scale: 0.5,
              x: heart.x - 9,
              y: heart.y - 9,
            }}
            animate={{
              opacity: [0, 0.75, 0],
              scale: [0.55, 1, 0.8],
              y: heart.y - 58,
            }}
            exit={{
              opacity: 0,
            }}
            transition={{
              duration: 0.9,
              ease: "easeOut",
            }}
            className="absolute"
          >
            <Heart
              size={17}
              fill="currentColor"
              className="text-[#df91a9] heart-glow"
            />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}
