"use client";

import { useEffect, useState } from "react";

interface UseWordCycleOptions {
  words: string[];
  holdMs?: number;
  typeSpeedMs?: number;
  deleteSpeedMs?: number;
  pauseBeforeTypeMs?: number;
}

export function useWordCycle({
  words,
  holdMs = 2000,
  typeSpeedMs = 80,
  deleteSpeedMs = 50,
  pauseBeforeTypeMs = 300,
}: UseWordCycleOptions) {
  const [displayed, setDisplayed] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [phase, setPhase] = useState<"typing" | "holding" | "deleting" | "pausing">("typing");

  useEffect(() => {
    const target = words[wordIndex];

    if (phase === "typing") {
      if (displayed.length < target.length) {
        const t = setTimeout(
          () => setDisplayed(target.slice(0, displayed.length + 1)),
          typeSpeedMs
        );
        return () => clearTimeout(t);
      } else {
        const t = setTimeout(() => setPhase("holding"), holdMs);
        return () => clearTimeout(t);
      }
    }

    if (phase === "holding") {
      setPhase("deleting");
    }

    if (phase === "deleting") {
      if (displayed.length > 0) {
        const t = setTimeout(
          () => setDisplayed(displayed.slice(0, -1)),
          deleteSpeedMs
        );
        return () => clearTimeout(t);
      } else {
        setPhase("pausing");
      }
    }

    if (phase === "pausing") {
      const t = setTimeout(() => {
        setWordIndex((i) => (i + 1) % words.length);
        setPhase("typing");
      }, pauseBeforeTypeMs);
      return () => clearTimeout(t);
    }
  }, [displayed, phase, wordIndex, words, holdMs, typeSpeedMs, deleteSpeedMs, pauseBeforeTypeMs]);

  const isTyping = phase === "typing" || phase === "holding";

  return { displayed, isTyping };
}
