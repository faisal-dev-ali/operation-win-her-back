"use client";

import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export default function Card({ children }: Props) {
  return (
    <div
      className="
      rounded-3xl

      border
      border-white/10

      bg-white/5

      backdrop-blur-xl

      shadow-2xl

      p-6

      sm:p-8
      "
    >
      {children}
    </div>
  );
}
