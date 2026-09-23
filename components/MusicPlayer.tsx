"use client";

import { useRef, useState } from "react";
import { Music2, Volume2, VolumeX } from "lucide-react";
import { motion } from "framer-motion";

type Props = {
  startSignal: number;
};

export default function MusicPlayer({ startSignal }: Props) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(false);

  const startMusic = async () => {
    try {
      if (!audioRef.current) {
        const audio = new Audio("/music/song.mp3");

        audio.loop = true;
        audio.volume = 0.45;
        audio.preload = "auto";

        audio.addEventListener("play", () => setPlaying(true));
        audio.addEventListener("pause", () => setPlaying(false));

        audioRef.current = audio;
      }

      await audioRef.current.play();
      setPlaying(true);
    } catch (error) {
      console.error("Music could not be started:", error);
    }
  };

  const toggleMusic = async () => {
    if (!audioRef.current) {
      await startMusic();
      return;
    }

    if (audioRef.current.paused) {
      await audioRef.current.play();
      setPlaying(true);
    } else {
      audioRef.current.pause();
      setPlaying(false);
    }
  };

  const toggleMute = () => {
    if (!audioRef.current) return;

    audioRef.current.muted = !audioRef.current.muted;
    setMuted(audioRef.current.muted);
  };

  return (
    <>
      {/* Hidden trigger controlled by page interaction */}
      {startSignal > 0 && !playing && (
        <button
          type="button"
          onClick={startMusic}
          className="hidden"
          aria-hidden="true"
        />
      )}

      <motion.button
        type="button"
        onClick={toggleMusic}
        whileTap={{ scale: 0.9 }}
        className="
          fixed
          bottom-5
          right-5
          z-[999]
          flex
          h-12
          w-12
          items-center
          justify-center
          rounded-full
          border
          border-white/10
          bg-black/60
          text-rose-300
          shadow-xl
          shadow-black/30
          backdrop-blur-xl
        "
        aria-label={playing ? "Pause music" : "Play music"}
      >
        {playing ? (
          <div className="relative">
            <Music2 size={18} />

            <motion.span
              animate={{
                opacity: [0.3, 1, 0.3],
                scale: [1, 1.25, 1],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
              }}
              className="
                absolute
                -right-2
                -top-2
                h-1.5
                w-1.5
                rounded-full
                bg-rose-400
              "
            />
          </div>
        ) : (
          <VolumeX size={18} />
        )}
      </motion.button>

      <button
        type="button"
        onClick={toggleMute}
        className="hidden"
        aria-label={muted ? "Unmute music" : "Mute music"}
      >
        {muted ? <VolumeX /> : <Volume2 />}
      </button>
    </>
  );
}
