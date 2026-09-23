"use client";

import { useEffect, useState } from "react";

type LoadingScreenProps = {
  onComplete: () => void;
};

const messages = [
  "Loading memories...",
  "Loading smiles...",
  "Loading late night chats...",
  "Loading love...",
  "Checking relationship status...",
];

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0);
  const [messageIndex, setMessageIndex] = useState(0);

  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);

          setTimeout(() => {
            onComplete();
          }, 1000);

          return 100;
        }

        return prev + 2;
      });
    }, 80);

    return () => clearInterval(progressInterval);
  }, [onComplete]);

  useEffect(() => {
    const messageInterval = setInterval(() => {
      setMessageIndex((prev) => (prev < messages.length - 1 ? prev + 1 : prev));
    }, 1800);

    return () => clearInterval(messageInterval);
  }, []);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-[#030712] px-6 text-white">
      <h1 className="text-5xl font-bold">Operation:</h1>

      <h2 className="mt-3 text-4xl font-light">Win Her Back ❤️</h2>

      <div className="mt-16 w-full max-w-lg">
        <div className="mb-3 flex justify-between text-sm text-gray-400">
          <span>{messages[messageIndex]}</span>
          <span>{progress}%</span>
        </div>

        <div className="h-3 overflow-hidden rounded-full bg-gray-800">
          <div
            className="h-full rounded-full bg-red-500 transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </div>
  );
}
