'use client';

import { useRef, useState } from 'react';
import { motion, useMotionValueEvent, useScroll, useTransform, type MotionValue } from 'motion/react';
import type { LessonStep } from '@/data/content';
import styles from './Lesson.module.css';

export interface LessonTrackProps {
  steps: LessonStep[];
}

/**
 * Нитка между шагами не нарисована один раз, а закрашивается по мере
 * прокрутки — прогресс-бар в форме таймлайна вместо статичной картинки.
 *
 * Прогресс завязан на собственную высоту списка (offset считает от того,
 * когда список входит в нижнюю часть экрана до того, когда почти покидает
 * верхнюю), а не на всю секцию: так закраска идёт всё время, пока шаги
 * читаются, а не заканчивается на первом же кадре.
 */
export default function LessonTrack({ steps }: LessonTrackProps) {
  const ref = useRef<HTMLOListElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 0.8', 'end 0.35'] });

  const segments = steps.length - 1;

  // Сколько связей уже пройдены целиком — на этом держится подсветка цифр.
  // Состояние, а не вычисление на каждый кадр: меняется только на целых
  // шагах, лишних перерисовок не бывает.
  const [done, setDone] = useState(0);

  useMotionValueEvent(scrollYProgress, 'change', (p) => {
    const next = Math.min(segments, Math.max(0, Math.floor(p * segments + 1e-6)));
    setDone((prev) => (prev === next ? prev : next));
  });

  return (
    <ol className={styles.track} ref={ref}>
      {steps.map((s, i) => (
        <li key={s.head} className={styles.step}>
          {i < segments && (
            <span className={styles.step__thread}>
              <ThreadFill progress={scrollYProgress} from={i / segments} to={(i + 1) / segments} />
            </span>
          )}

          <span
            className={`${styles.step__n} ${i <= done ? styles[`step__n--${s.tone}`] : styles['step__n--idle']}`}
          >
            {i + 1}
          </span>
          <h3 className={styles.step__head}>{s.head}</h3>
          <p className={styles.step__text}>{s.text}</p>
        </li>
      ))}
    </ol>
  );
}

/** Один сегмент нитки. useTransform — хук, поэтому сегмент обязан быть
 *  отдельным компонентом: вызывать его прямо внутри .map было бы нарушением
 *  правил хуков. */
function ThreadFill({ progress, from, to }: { progress: MotionValue<number>; from: number; to: number }) {
  const scaleX = useTransform(progress, [from, to], [0, 1], { clamp: true });
  return <motion.span className={styles.step__threadFill} style={{ scaleX }} />;
}
