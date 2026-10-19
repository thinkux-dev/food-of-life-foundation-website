"use client";

import { useWordCycle } from "@/hooks/useWordCycle";

const WORDS = ["families", "widows", "children", "communities"];

export default function AnimatedHeadline() {
  const { displayed, isTyping } = useWordCycle({
    words: WORDS,
    holdMs: 2200,
    typeSpeedMs: 75,
    deleteSpeedMs: 45,
    pauseBeforeTypeMs: 320,
  });

  return (
    <h1 className="font-display text-[2.6rem] leading-[1.08] sm:text-6xl sm:leading-[1.05] text-dusk">
      Nourishing lives and{" "}
      <span
        className="relative inline-block"
        style={{ minWidth: "5ch" }}
      >
        <span
          className="absolute bottom-0 left-0 h-[3px] bg-clay transition-all duration-300 rounded-full"
          style={{ width: displayed.length > 0 ? "100%" : "0%" }}
          aria-hidden="true"
        />
        <span className="relative text-clay">
          {displayed}
          <span
            aria-hidden="true"
            className={`inline-block w-[2px] h-[0.82em] bg-clay ml-[2px] align-middle translate-y-[-1px] ${
              isTyping ? "animate-cursor-blink" : "opacity-0"
            }`}
          />
        </span>
      </span>{" "}
      across Nigeria.
    </h1>
  );
}
