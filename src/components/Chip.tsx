'use client';

import { useEffect, useId, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { GLIDE } from '@/lib/motion';
import ClayIcon from './ClayIcon';
import styles from './Chip.module.css';

export interface ChipProps {
  label: string;
  hint: string;
}

export default function Chip({ label, hint }: ChipProps) {
  const [open, setOpen] = useState(false);
  const id = useId();

  /* На тачскрине tap синтезирует mouseenter, но не mouseleave — без этого
     подсказка осталась бы открытой до следующего клика где угодно на
     странице, а не только на этом чипе */
  useEffect(() => {
    if (!open) return;

    const close = () => setOpen(false);
    document.addEventListener('touchstart', close, { passive: true });

    return () => document.removeEventListener('touchstart', close);
  }, [open]);

  return (
    <>
      <button
        type="button"
        className={styles.btn}
        aria-describedby={id}
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
        onFocus={() => setOpen(true)}
        onBlur={() => setOpen(false)}
      >
        {label}
      </button>

      <span className={styles.anchor}>
        <AnimatePresence>
          {open && (
            <motion.span
              role="tooltip"
              id={id}
              className={styles.cloud}
              initial={{ opacity: 0, y: 8, scale: .9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 8, scale: .9 }}
              transition={GLIDE}
            >
              <ClayIcon name="bulb" size={16} className={styles.cloud__ico} />
              <span>{hint}</span>
            </motion.span>
          )}
        </AnimatePresence>
      </span>
    </>
  );
}
