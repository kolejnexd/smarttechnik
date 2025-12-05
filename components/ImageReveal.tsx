"use client";

import Image from 'next/image';
import { useState } from 'react';

type Props = {
  topSrc: string;
  topAlt: string;
  bottomSrc: string;
  bottomAlt: string;
  initial?: number;
};

export default function ImageReveal({ topSrc, topAlt, bottomSrc, bottomAlt, initial = 85 }: Props) {
  const [value, setValue] = useState(initial);

  return (
    <div className="reveal-wrapper">
      <div className="reveal-image">
        <Image src={bottomSrc} alt={bottomAlt} fill className="reveal-img" sizes="(max-width: 900px) 100vw, 520px" />
      </div>
      <div className="reveal-image reveal-image--top" style={{ width: `${value}%` }}>
        <Image src={topSrc} alt={topAlt} fill className="reveal-img" sizes="(max-width: 900px) 100vw, 520px" />
      </div>
      <div className="reveal-handle" style={{ left: `${value}%` }}>
        <span />
      </div>
      <input
        aria-label="Vergleich Slider"
        className="reveal-range"
        type="range"
        min={0}
        max={100}
        value={value}
        onChange={(event) => setValue(Number(event.target.value))}
      />
    </div>
  );
}
