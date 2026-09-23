"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  id?: string;
};

export default function Section({ children, id }: Props) {
  return (
    <motion.section
      id={id}
      initial={{
        opacity: 0,
        y: 40,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.25,
      }}
      transition={{
        duration: 0.8,
      }}
      className="relative flex min-h-screen items-center justify-center px-6 py-24"
    >
      <div className="mx-auto w-full max-w-5xl">{children}</div>
    </motion.section>
  );
}
