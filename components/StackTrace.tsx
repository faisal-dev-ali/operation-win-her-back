"use client";

import { motion } from "framer-motion";
import Button from "./Button";

type Props = {
  onNext: () => void;
};

export default function StackTrace({ onNext }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-[#09090B] flex items-center justify-center p-6"
    >
      <div className="w-full max-w-5xl rounded-2xl border border-zinc-800 bg-[#0d1117] shadow-2xl overflow-hidden">
        <div className="flex items-center gap-2 border-b border-zinc-800 px-5 py-3">
          <div className="w-3 h-3 rounded-full bg-red-500" />
          <div className="w-3 h-3 rounded-full bg-yellow-500" />
          <div className="w-3 h-3 rounded-full bg-green-500" />

          <span className="ml-4 text-sm text-zinc-400">
            relationship-service.log
          </span>
        </div>

        <div className="p-8 font-mono text-sm leading-8">
          <p className="text-red-400">Exception in thread "main"</p>

          <p className="text-rose-400">
            java.lang.HurtHerException: Careless words detected
          </p>

          <br />

          <p className="text-zinc-300">
            at Relationship.saySomethingWithoutThinking(Relationship.java:143)
          </p>

          <p className="text-zinc-300">at Rizwana.feelHurt(Heart.java:52)</p>

          <p className="text-zinc-300">at Chat.becomeSilent(Chat.java:88)</p>

          <p className="text-zinc-300">
            at Faisal.startPanicking(Heart.java:101)
          </p>

          <p className="text-zinc-300">
            at Relationship.waitForReply(Forever.java:999)
          </p>

          <br />

          <p className="text-green-400">Root Cause Identified ✔</p>

          <p className="mt-2 text-zinc-400">
            Developer forgot that words spoken in haste can hurt someone he
            loves the most.
          </p>

          <div className="mt-10">
            <Button text="Fix Exception ❤️" onClick={onNext} />
          </div>
        </div>
      </div>
    </motion.div>
  );
}
