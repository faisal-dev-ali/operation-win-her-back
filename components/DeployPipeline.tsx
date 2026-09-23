"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import Card from "./Card";
import Button from "./Button";
import PageContainer from "./PageContainer";

const steps = [
  "Checking out source...",
  "Installing dependencies...",
  "Compiling feelings...",
  "Removing ego...",
  "Building apology...",
  "Running relationship tests...",
  "Deploying to production...",
  "Deployment successful ❤️",
];

type Props = {
  onNext: () => void;
};

export default function DeployPipeline({ onNext }: Props) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (current >= steps.length - 1) return;

    const timer = setTimeout(() => {
      setCurrent((prev) => prev + 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [current]);

  const progress = ((current + 1) / steps.length) * 100;

  return (
    <PageContainer>
      <Card>
        <h1 className="text-2xl sm:text-3xl font-bold text-white">
          🚀 GitHub Actions
        </h1>

        <p className="mt-2 text-zinc-400">Deploying apology...</p>

        <div className="mt-8 space-y-4">
          {steps.map((step, index) => (
            <motion.div
              key={step}
              initial={{ opacity: 0 }}
              animate={{
                opacity: index <= current ? 1 : 0.25,
              }}
              className="flex items-center gap-3"
            >
              <div
                className={`h-3 w-3 rounded-full ${
                  index <= current ? "bg-green-500" : "bg-zinc-600"
                }`}
              />

              <p
                className={`${
                  index <= current ? "text-white" : "text-zinc-500"
                }`}
              >
                {step}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="mt-10">
          <div className="h-3 rounded-full bg-zinc-800">
            <motion.div
              animate={{
                width: `${progress}%`,
              }}
              className="h-full rounded-full bg-gradient-to-r from-pink-500 to-rose-500"
            />
          </div>

          <p className="mt-3 text-right text-sm text-zinc-400">
            {Math.round(progress)}%
          </p>
        </div>

        {current === steps.length - 1 && (
          <motion.div
            initial={{
              opacity: 0,
              y: 15,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            className="mt-10"
          >
            <Button text="Open Letter ❤️" onClick={onNext} />
          </motion.div>
        )}
      </Card>
    </PageContainer>
  );
}
