"use client";

import { useEffect, useRef, useState } from 'react';

type CountingStatProps = {
  value: string;
};

export default function CountingStat({ value }: CountingStatProps) {
  const [display, setDisplay] = useState(value);
  const ref = useRef<HTMLSpanElement | null>(null);
  const hasRun = useRef(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const match = value.match(/^(\d+(?:[.,]\d+)?)(.*)$/);
    if (!match) {
      setDisplay(value);
      return;
    }

    const target = Number(match[1].replace(',', '.'));
    const suffix = match[2] ?? '';
    let start = 0;
    let startTime: number | null = null;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasRun.current) {
            hasRun.current = true;
            requestAnimationFrame(step);
          }
        });
      },
      { threshold: 0.4 }
    );

    observer.observe(node);

    const duration = 1200;

    const step = (timestamp: number) => {
      if (startTime === null) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const current = Math.floor(progress * target);
      setDisplay(`${current}${suffix}`);
      if (progress < 1) requestAnimationFrame(step);
    };

    return () => {
      observer.disconnect();
    };
  }, [value]);

  return <span ref={ref} className="metric-number">{display}</span>;
}
