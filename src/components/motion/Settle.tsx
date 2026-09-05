'use client';

import { motion } from 'motion/react';
import type { ReactNode } from 'react';
import { IN_VIEW, LIFT, SETTLE, SETTLE_VARIANTS, stagger, type SettleFrom } from '@/lib/motion';

/** Плитка, которая ложится в лист. Подменяет собой сам элемент: тень должна
 *  нарастать под настоящей плиткой, а лишний div сломал бы грид. */

const TAGS = {
  div: motion.div,
  section: motion.section,
  article: motion.article,
  aside: motion.aside,
  figure: motion.figure,
  footer: motion.footer,
  header: motion.header,
  ul: motion.ul,
  li: motion.li,
} as const;

export type SettleTag = keyof typeof TAGS;

export interface SettleProps {
  as?: SettleTag;
  from?: SettleFrom;
  index?: number;
  delay?: number;
  /** Класть при монтировании, а не по въезду в кадр. */
  now?: boolean;
  /** Наведение поднимает плитку: --settle больше единицы — тень уходит дальше. */
  lift?: boolean;
  className?: string;
  id?: string;
  children?: ReactNode;
}

export default function Settle({
  as = 'div',
  from = 'press',
  index = 0,
  delay = 0,
  now = false,
  lift = false,
  className,
  id,
  children,
}: SettleProps) {
  const Tag = TAGS[as] as typeof motion.div;
  const cls = className ? `settle ${className}` : 'settle';

  // Ветвиться по prefers-reduced-motion нельзя: на сервере запрет не виден и
  // разметка разъедется с клиентской. Запрет отдан правилу в globals.css.
  return (
    <Tag
      className={cls}
      id={id}
      variants={SETTLE_VARIANTS[from]}
      initial="rest"
      {...(now
        ? { animate: 'laid' }
        : { whileInView: 'laid', viewport: IN_VIEW })}
      {...(lift
        ? { whileHover: { y: -5, scale: 1.015, '--settle': 1.35, transition: LIFT } }
        : {})}
      transition={{ ...SETTLE, delay: delay + stagger(index) }}
    >
      {children}
    </Tag>
  );
}
