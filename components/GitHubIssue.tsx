"use client";

import { motion } from "framer-motion";
import Button from "./Button";

type Props = {
  onNext: () => void;
};

export default function GitHubIssue({ onNext }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="flex min-h-screen items-center justify-center bg-[#09090B] p-8"
    >
      <div className="w-full max-w-4xl rounded-2xl border border-zinc-800 bg-zinc-900 p-8 shadow-2xl">
        <div className="mb-8 flex items-center gap-3">
          <div className="h-3 w-3 rounded-full bg-red-500" />
          <div className="h-3 w-3 rounded-full bg-yellow-500" />
          <div className="h-3 w-3 rounded-full bg-green-500" />
        </div>

        <h1 className="text-4xl font-bold text-white">🐞 Issue #143</h1>

        <p className="mt-8 text-zinc-400">Title</p>

        <h2 className="text-2xl text-rose-400">
          I Hurt The Most Beautiful Girl
        </h2>

        <div className="mt-8 grid grid-cols-2 gap-6">
          <div>
            <p className="text-zinc-500">Severity</p>

            <p className="font-semibold text-red-400">Critical</p>
          </div>

          <div>
            <p className="text-zinc-500">Status</p>

            <p className="font-semibold text-yellow-400">Open</p>
          </div>

          <div>
            <p className="text-zinc-500">Reporter</p>

            <p className="text-white">Rizwana ❤️</p>
          </div>

          <div>
            <p className="text-zinc-500">Assigned To</p>

            <p className="text-white">Faisal</p>
          </div>
        </div>

        <div className="mt-10 rounded-xl border border-red-400/20 bg-red-500/10 p-5">
          <p className="text-lg text-zinc-200">Root Cause:</p>

          <p className="mt-2 text-zinc-400">
            Developer spoke without thinking and unintentionally hurt someone's
            feelings.
          </p>
        </div>

        <div className="mt-10">
          <Button text="Start Debugging ❤️" onClick={onNext} />
        </div>
      </div>
    </motion.div>
  );
}
