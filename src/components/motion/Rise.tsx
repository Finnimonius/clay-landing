'use client';

import { motion } from 'motion/react';
import type { ReactNode } from 'react';
import { LIFT_VARIANTS, SETTLE } from '@/lib/motion';

/** Строка приветствия. Живёт только в герое — это единственный
 *  отрепетированный вход; заголовки остальных секций либо неподвижны,
 *  либо используют обычный Settle, а не отдельную партитуру. */

const TAGS = {
  div: motion.div,
  p: motion.p,
  h1: motion.h1,
  ul: motion.ul,
  li: motion.li,
} as const;

export type RiseTag = keyof typeof TAGS;

export interface RiseProps {
  as?: RiseTag;
  /** Место в партитуре героя, в секундах. */
  at?: number;
  className?: string;
  children?: ReactNode;
}

export default function Rise({ as = 'div', at = 0, className, children }: RiseProps) {
  const Tag = TAGS[as] as typeof motion.div;
  const cls = className ? `rise ${className}` : 'rise';

  return (
    <Tag
      className={cls}
      variants={LIFT_VARIANTS}
      initial="rest"
      animate="laid"
      transition={{ ...SETTLE, delay: at }}
    >
      {children}
    </Tag>
  );
}
