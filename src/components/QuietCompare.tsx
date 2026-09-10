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

  return (
    <div className={styles.quiet__pair} ref={wrapRef}>
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
                <span className={styles.col__dot} />
                {it}
              </li>
            ))}
          </ul>
        </Settle>
      ))}
    </div>
  );
}
