'use client';

import { useRef, type PointerEvent, type ReactNode } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';
import { GLIDE } from '@/lib/motion';

/**
 * Поворачивает содержимое вслед за курсором.
 *
 * Пружина намеренно вязкая: плитка должна вести себя как тяжёлый материал,
 * а не как стрелка мыши. Потомок с `translateZ` всплывает над поверхностью
 * сильнее неё — из этого и получается глубина.
 */
export interface TiltProps {
  children: ReactNode;
  className?: string;
  /** Предел наклона в градусах. */
  max?: number;
}

export default function Tilt({ children, className, max = 6 }: TiltProps) {
  const box = useRef<DOMRect | null>(null);
  const px = useMotionValue(0);
  const py = useMotionValue(0);

  const sx = useSpring(px, GLIDE);
  const sy = useSpring(py, GLIDE);

  const rotateY = useTransform(sx, [-0.5, 0.5], [-max, max]);
  const rotateX = useTransform(sy, [-0.5, 0.5], [max, -max]);

  /* Коробку меряем один раз на входе: считать её на каждое движение —
     это layout thrashing на самом частом событии в странице */
  const track = (e: PointerEvent<HTMLDivElement>) => {
    // Только мышь: на сенсорном экране наклон наложился бы на прокрутку
    if (e.pointerType !== 'mouse') return;

    const r = box.current ?? e.currentTarget.getBoundingClientRect();
    px.set((e.clientX - r.left) / r.width - 0.5);
    py.set((e.clientY - r.top) / r.height - 0.5);
  };

  return (
    <motion.div
      className={className}
      style={{ rotateX, rotateY }}
      onPointerEnter={(e) => { box.current = e.currentTarget.getBoundingClientRect(); }}
      onPointerMove={track}
      onPointerLeave={() => { box.current = null; px.set(0); py.set(0); }}
    >
      {children}
    </motion.div>
  );
}
