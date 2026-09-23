"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Button from "./Button";

const logs = [
  "> Connecting to relationship-service...",
  "✔ Connection established",
  "",
  "> Fetching latest emotions...",
  "✔ Hurt detected",
  "",
  "> Searching for root cause...",
  "✔ Found careless words",
  "",
  "> Removing ego...",
  "✔ Success",
  "",
  "> Accepting mistake...",
  "✔ Success",
  "",
  "> Initializing apology...",
  "✔ Ready",
];

type Props = {
  onNext: () => void;
};

export default function DebugConsole({ onNext }: Props) {
  const [visible, setVisible] = useState(1);

  useEffect(() => {
    if (visible < logs.length) {
      const timer = setTimeout(() => {
        setVisible((v) => v + 1);
      }, 550);

      return () => clearTimeout(timer);
    }
  }, [visible]);

  return (
    <div className="min-h-screen bg-[#09090B] flex items-center justify-center p-6">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="w-full max-w-5xl rounded-2xl overflow-hidden border border-zinc-800"
      >
        <div className="bg-zinc-900 px-5 py-3 border-b border-zinc-800">
          <span className="text-zinc-400 text-sm">terminal</span>
        </div>

        <div className="bg-black p-8 font-mono text-green-400 min-h-[500px]">
          {logs.slice(0, visible).map((line, index) => (
            <p key={index} className="mb-2">
              {line}
            </p>
          ))}

          {visible === logs.length && (
            <div className="mt-10">
              <Button text="Create Fix Commit ❤️" onClick={onNext} />
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
}
