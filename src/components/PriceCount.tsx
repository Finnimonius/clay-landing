'use client';

import { useEffect, useRef } from 'react';
import { spaced } from '@/lib/format';
import { stagger } from '@/lib/motion';

const RUN = 900;

export interface PriceCountProps {
  value: number;
  index?: number;
}

export default function PriceCount({ value, index = 0 }: PriceCountProps) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    if (el.getBoundingClientRect().top < window.innerHeight) return;

    el.textContent = spaced(0);

    let frame = 0;
    let timer = 0;

    const run = () => {
      const start = performance.now();

      const tick = (now: number) => {
        const t = Math.min(Math.max((now - start) / RUN, 0), 1);
        const eased = 1 - (1 - t) ** 3;

        el.textContent = spaced(Math.round(value * eased));
        frame = t < 1 ? requestAnimationFrame(tick) : 0;
      };

      frame = requestAnimationFrame(tick);
    };

    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        io.disconnect();
        timer = window.setTimeout(run, stagger(index) * 1000);
      },
      { threshold: 0.25 },
    );

    io.observe(el.closest('.settle') ?? el);

    return () => {
      io.disconnect();
      if (frame) cancelAnimationFrame(frame);
      if (timer) clearTimeout(timer);
      el.textContent = spaced(value);
    };
  }, [value, index]);

  return <span ref={ref}>{spaced(value)}</span>;
}
