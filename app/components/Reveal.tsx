"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

type Tag = "div" | "article" | "figure" | "li";

function prefersReducedMotion() {
  return (
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
}

export default function Reveal({
  children,
  index = 0,
  className = "",
  as = "div",
}: {
  children: ReactNode;
  index?: number;
  className?: string;
  as?: Tag;
}) {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(prefersReducedMotion);

  useEffect(() => {
    if (visible) return;
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -60px 0px" }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [visible]);

  const props = {
    ref: ref as React.Ref<HTMLDivElement>,
    className: `reveal ${visible ? "reveal-visible" : ""} ${className}`,
    style: { transitionDelay: visible ? `${Math.min(index, 6) * 80}ms` : "0ms" },
  };

  if (as === "article") return <article {...(props as React.ComponentProps<"article">)}>{children}</article>;
  if (as === "figure") return <figure {...(props as React.ComponentProps<"figure">)}>{children}</figure>;
  if (as === "li") return <li {...(props as React.ComponentProps<"li">)}>{children}</li>;
  return <div {...props}>{children}</div>;
}
