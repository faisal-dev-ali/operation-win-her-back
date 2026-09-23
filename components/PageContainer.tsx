"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";

type Props = {
  children: ReactNode;
};

export default function PageContainer({ children }: Props) {
  return (
    <motion.main
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.45,
        ease: "easeOut",
      }}
      className="
      min-h-screen
      bg-gradient-to-br
      from-zinc-950
      via-[#140d16]
      to-zinc-950

      flex
      justify-center
      items-center

      p-5
      sm:p-8
      "
    >
      <div
        className="
        w-full
        max-w-md
        sm:max-w-xl
        lg:max-w-3xl
        "
      >
        {children}
      </div>
    </motion.main>
  );
}
