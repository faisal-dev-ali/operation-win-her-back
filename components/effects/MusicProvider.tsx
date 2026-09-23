"use client";

import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";

type MusicContextType = {
  startMusic: () => Promise<void>;
  pauseMusic: () => void;
  toggleMusic: () => Promise<void>;
  fadeMusic: (targetVolume?: number, duration?: number) => void;
  restoreMusic: (targetVolume?: number, duration?: number) => void;
  isPlaying: boolean;
};

const MusicContext = createContext<MusicContextType | null>(null);

type Props = {
  children: ReactNode;
};

export function useMusic() {
  const context = useContext(MusicContext);

  if (!context) {
    throw new Error("useMusic must be used inside MusicProvider");
  }

  return context;
}

export default function MusicProvider({ children }: Props) {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const fadeFrameRef = useRef<number | null>(null);

  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const audio = document.createElement("audio");

    audio.src = "/music/song.mp3";
    audio.loop = true;
    audio.preload = "auto";
    audio.volume = 0.45;

    const handlePlay = () => {
      setIsPlaying(true);
    };

    const handlePause = () => {
      setIsPlaying(false);
    };

    const handleEnded = () => {
      setIsPlaying(false);
    };

    const handleError = () => {
      console.error("❌ Music could not be loaded:", audio.error);

      setIsPlaying(false);
    };

    audio.addEventListener("play", handlePlay);

    audio.addEventListener("pause", handlePause);

    audio.addEventListener("ended", handleEnded);

    audio.addEventListener("error", handleError);

    document.body.appendChild(audio);

    audioRef.current = audio;

    return () => {
      if (fadeFrameRef.current) {
        cancelAnimationFrame(fadeFrameRef.current);
      }

      audio.pause();

      audio.removeEventListener("play", handlePlay);

      audio.removeEventListener("pause", handlePause);

      audio.removeEventListener("ended", handleEnded);

      audio.removeEventListener("error", handleError);

      audio.remove();

      audioRef.current = null;
    };
  }, []);

  /*
   * Smooth volume animation.
   */
  const animateVolume = (targetVolume: number, duration: number) => {
    const audio = audioRef.current;

    if (!audio) return;

    if (fadeFrameRef.current) {
      cancelAnimationFrame(fadeFrameRef.current);
    }

    const startVolume = audio.volume;
    const startTime = performance.now();

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;

      const progress = Math.min(elapsed / duration, 1);

      /*
       * Ease-out curve.
       */
      const eased = 1 - Math.pow(1 - progress, 3);

      audio.volume = startVolume + (targetVolume - startVolume) * eased;

      if (progress < 1) {
        fadeFrameRef.current = requestAnimationFrame(animate);
      } else {
        fadeFrameRef.current = null;
      }
    };

    fadeFrameRef.current = requestAnimationFrame(animate);
  };

  /*
   * Start background music.
   */
  const startMusic = async () => {
    const audio = audioRef.current;

    if (!audio) {
      console.error("❌ Audio element is not available.");

      return;
    }

    /*
     * Already playing.
     */
    if (!audio.paused) {
      animateVolume(0.45, 600);
      setIsPlaying(true);
      return;
    }

    try {
      if (audio.readyState === HTMLMediaElement.HAVE_NOTHING) {
        audio.load();
      }

      audio.muted = false;

      audio.volume = 0;

      await audio.play();

      setIsPlaying(true);

      /*
       * Beautifully fade the song in.
       */
      animateVolume(0.45, 1600);

      console.log("❤️ Music started");
    } catch (error) {
      console.error("❌ Music could not be started:", error);

      if (error instanceof DOMException) {
        console.error("Music error:", error.name, error.message);
      }
    }
  };

  /*
   * Pause music completely.
   */
  const pauseMusic = () => {
    const audio = audioRef.current;

    if (!audio) return;

    audio.pause();

    setIsPlaying(false);
  };

  /*
   * Play / pause button.
   */
  const toggleMusic = async () => {
    const audio = audioRef.current;

    if (!audio) {
      await startMusic();
      return;
    }

    if (audio.paused) {
      await startMusic();
    } else {
      pauseMusic();
    }
  };

  /*
   * Fade background music down.
   *
   * Used when the apology video starts.
   */
  const fadeMusic = (targetVolume = 0.025, duration = 1000) => {
    const audio = audioRef.current;

    if (!audio) return;

    if (audio.paused) {
      return;
    }

    animateVolume(targetVolume, duration);
  };

  /*
   * Bring background music back.
   *
   * Used after the apology video ends.
   */
  const restoreMusic = (targetVolume = 0.45, duration = 1400) => {
    const audio = audioRef.current;

    if (!audio) return;

    /*
     * If music was somehow paused,
     * start it again.
     */
    if (audio.paused) {
      audio.volume = 0;

      audio
        .play()
        .then(() => {
          setIsPlaying(true);

          animateVolume(targetVolume, duration);
        })
        .catch((error) => {
          console.error("❌ Music restore failed:", error);
        });

      return;
    }

    animateVolume(targetVolume, duration);
  };

  return (
    <MusicContext.Provider
      value={{
        startMusic,
        pauseMusic,
        toggleMusic,
        fadeMusic,
        restoreMusic,
        isPlaying,
      }}
    >
      {children}
    </MusicContext.Provider>
  );
}
