"use client";

import { useInView } from "@/hooks/useInView";
import { ReactNode, CSSProperties } from "react";

interface FadeInProps {
  children: ReactNode;
  className?: string;
  variant?: "up" | "left" | "right" | "scale";
  delay?: number;
  threshold?: number;
  style?: CSSProperties;
}

const variantMap: Record<string, string> = {
  up: "anim-fade-up",
  left: "anim-fade-left",
  right: "anim-fade-right",
  scale: "anim-scale-in",
};

export default function FadeIn({
  children,
  className = "",
  variant = "up",
  delay = 0,
  threshold = 0.12,
  style,
}: FadeInProps) {
  const { ref, inView } = useInView<HTMLDivElement>({ threshold });

  return (
    <div
      ref={ref}
      className={`${variantMap[variant]} ${inView ? "anim-visible" : ""} ${className}`}
      style={{ transitionDelay: `${delay}ms`, animationDelay: `${delay}ms`, ...style }}
    >
      {children}
    </div>
  );
}
