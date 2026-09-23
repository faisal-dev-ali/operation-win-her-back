"use client";

import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
};

export default function Card({ children, className = "" }: Props) {
  return (
    <div
      className={[
        "romantic-glass",
        "rounded-[2rem]",
        "p-6",
        "sm:p-8",
        className,
      ].join(" ")}
    >
      {children}
    </div>
  );
}
