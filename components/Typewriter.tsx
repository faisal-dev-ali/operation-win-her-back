"use client";

import { useEffect, useState } from "react";

type Props = {
  text: string;
  speed?: number;
  onComplete?: () => void;
};

export default function Typewriter({ text, speed = 35, onComplete }: Props) {
  const [displayed, setDisplayed] = useState("");
  const [finished, setFinished] = useState(false);

  useEffect(() => {
    let index = 0;

    const interval = setInterval(() => {
      index += 1;

      setDisplayed(text.slice(0, index));

      if (index >= text.length) {
        clearInterval(interval);
        setFinished(true);
        onComplete?.();
      }
    }, speed);

    return () => {
      clearInterval(interval);
    };
  }, [text, speed, onComplete]);

  return (
    <p className="whitespace-pre-line">
      {displayed}

      {!finished && (
        <span
          className="
            ml-1
            inline-block
            h-[1.1em]
            w-0.5
            translate-y-0.5
            animate-pulse
            bg-rose-400
          "
        />
      )}
    </p>
  );
}
