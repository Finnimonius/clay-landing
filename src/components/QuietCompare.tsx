'use client';

import { useLayoutEffect, useRef, useState } from 'react';
import Image from 'next/image';
import type { QuietColumn } from '@/data/content';
import Settle from './motion/Settle';
import styles from './Quiet.module.css';

export interface QuietCompareProps {
  columns: QuietColumn[];
}

const STEP_MS = 180;

export default function QuietCompare({ columns }: QuietCompareProps) {
  const [left, right] = columns;
  const n = left.items.length;

  const wrapRef = useRef<HTMLDivElement>(null);
  const dotsLeft = useRef<(HTMLSpanElement | null)[]>([]);
  const dotsRight = useRef<(HTMLSpanElement | null)[]>([]);

  const [active, setActive] = useState(0);

  useLayoutEffect(() => {
    let scheduled = false;
    let activeNow = 0;
    let lastStepAt = 0;

    const computeTarget = () => {
      const wrap = wrapRef.current;
      if (!wrap) return activeNow;

      const line = window.innerHeight * 0.5;
      const r = wrap.getBoundingClientRect();
      const progress = (line - r.top) / (r.height || 1);

      return Math.min(n - 1, Math.max(0, Math.floor(progress * n)));
    };

    const schedule = () => {
      if (scheduled) return;
      scheduled = true;
      requestAnimationFrame(tick);
    };

    const tick = (t: number) => {
      scheduled = false;
      const target = computeTarget();
      if (target === activeNow) return;

      if (t - lastStepAt < STEP_MS) {
        schedule();
        return;
      }

      activeNow += target > activeNow ? 1 : -1;
      lastStepAt = t;
      setActive(activeNow);

      if (activeNow !== target) schedule();
    };

    schedule();
    window.addEventListener('scroll', schedule, { passive: true });
    window.addEventListener('resize', schedule);
    return () => {
      window.removeEventListener('scroll', schedule);
      window.removeEventListener('resize', schedule);
    };
  }, [n]);

  const [d, setD] = useState('');

  useLayoutEffect(() => {
    const wrap = wrapRef.current;
    const a = dotsLeft.current[active];
    const b = dotsRight.current[active];
    if (!wrap || !a || !b) return;

    const update = () => {
      const box = wrap.getBoundingClientRect();
      const gap = parseFloat(getComputedStyle(wrap).columnGap || '0');
      const colWidth = (box.width - gap) / 2;
      const x1 = colWidth;
      const x2 = colWidth + gap;

      const y = (el: HTMLElement) => {
        const r = el.getBoundingClientRect();
        return r.top + r.height / 2 - box.top;
      };

      const y1 = y(a);
      const y2 = y(b);
      const midX = (x1 + x2) / 2;

      setD(`M ${x1} ${y1} C ${midX} ${y1}, ${midX} ${y2}, ${x2} ${y2}`);
    };

    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, [active]);

  return (
    <div className={styles.quiet__pair} ref={wrapRef}>
      <svg className={styles.bridge} aria-hidden="true">
        <path className={styles.bridge__path} d={d} />
      </svg>

      {[left, right].map((c, ci) => (
        <Settle
          as="article"
          key={c.head}
          index={ci}
          from={c.tone === 'muted' ? 'inset' : 'press'}
          className={`${styles.col} ${styles[`col--${c.tone}`]} tile`}
        >
          <div className={styles.col__frame}>
            <Image
              src={c.image}
              alt={c.alt}
              fill
              sizes="(max-width: 900px) 100vw, 520px"
              className={styles.col__img}
            />
          </div>

          <h3 className={`h h--sm ${styles.col__head}`}>{c.head}</h3>

          <ul className={styles.col__list}>
            {c.items.map((it, i) => (
              <li key={it} className={`${styles.col__item} ${styles[active === i ? 'is-on' : 'is-off']}`}>
                <span
                  className={styles.col__dot}
                  ref={(el) => { (ci === 0 ? dotsLeft : dotsRight).current[i] = el; }}
                />
                {it}
              </li>
            ))}
          </ul>
        </Settle>
      ))}
    </div>
  );
}
