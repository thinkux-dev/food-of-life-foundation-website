"use client";

import { useInView } from "@/hooks/useInView";
import { useEffect, useRef, useState } from "react";

const stats = [
  { value: 2025, suffix: "",  label: "Year the Foundation began its work", isYear: true },
  { value: 3,    suffix: "",  label: "Core pillars — Food relief, widows care & children", isYear: false },
  { value: 100,  suffix: "%", label: "Direct grassroots outreach to families on the ground", isYear: false },
  { value: null, suffix: "∞", label: "Commitment — reaching the needy with food across the Nation", isYear: false },
];

function AnimatedNumber({
  target,
  suffix,
  inView,
  delay,
  isYear,
}: {
  target: number | null;
  suffix: string;
  inView: boolean;
  delay: number;
  isYear?: boolean;
}) {
  const [count, setCount] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    if (!inView || target === null || started.current) return;
    started.current = true;

    const numericTarget = target;
    const startTime = performance.now() + delay;
    const duration = 900;
    const start = isYear ? 2000 : 0;

    function tick(now: number) {
      if (now < startTime) {
        requestAnimationFrame(tick);
        return;
      }
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(start + (numericTarget - start) * eased));
      if (progress < 1) requestAnimationFrame(tick);
    }

    requestAnimationFrame(tick);
  }, [inView, target, delay, isYear]);

  if (target === null) return <>{suffix}</>;
  return (
    <>{isYear ? String(count) : count.toLocaleString()}{suffix}</>
  );
}

export default function GlobalBand() {
  const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0.3 });

  return (
    <section className="bg-dusk text-paper">
      <div ref={ref} className="container-page py-14 md:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-10">
          {stats.map((s, i) => (
            <div
              key={s.label}
              className={`border-l border-paper/20 pl-5 anim-fade-up ${inView ? "anim-visible" : ""}`}
              style={{ transitionDelay: `${i * 120}ms`, animationDelay: `${i * 120}ms` }}
            >
              <p className="font-display text-4xl md:text-5xl text-gold-soft tabular-nums">
                <AnimatedNumber
                  target={s.value}
                  suffix={s.suffix}
                  inView={inView}
                  delay={i * 120}
                  isYear={s.isYear}
                />
              </p>
              <p className="mt-2 text-[13px] leading-snug text-paper/65 max-w-[18ch]">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
