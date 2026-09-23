"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

type Props = {
  text: string;
  onClick?: () => void;
  pulse?: boolean;
  variant?: "primary" | "secondary";
};

export default function Button({
  text,
  onClick,
  pulse = false,
  variant = "primary",
}: Props) {
  const isPrimary = variant === "primary";

  return (
    <motion.button
      type="button"
      onClick={onClick}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.96 }}
      animate={
        pulse
          ? {
              opacity: [1, 0.55, 1],
              scale: [1, 1.025, 1],
            }
          : {
              opacity: 1,
              scale: 1,
            }
      }
      transition={
        pulse
          ? {
              duration: 1.4,
              repeat: Infinity,
              ease: "easeInOut",
            }
          : {
              duration: 0.2,
            }
      }
      className={[
        "relative z-50",
        "inline-flex min-h-12 w-full items-center justify-center gap-2",
        "rounded-2xl px-6 py-3",
        "font-semibold",
        "cursor-pointer",
        "select-none",
        "touch-manipulation",
        "sm:w-auto",
        isPrimary
          ? [
              "bg-gradient-to-r from-rose-500 via-pink-500 to-rose-600",
              "text-white",
              "shadow-xl shadow-rose-500/20",
            ].join(" ")
          : ["border border-white/10", "bg-white/5", "text-zinc-400"].join(" "),
      ].join(" ")}
    >
      <span>{text}</span>

      {isPrimary && <ArrowRight size={18} className="shrink-0" />}
    </motion.button>
  );
}
