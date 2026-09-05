import type { Transition, Variants } from 'motion/react';

/** Пружины задемпфированы почти до критического: пластилин неупругий, отскока нет. */

export const SETTLE: Transition = {
  type: 'spring',
  stiffness: 120,
  damping: 20,
  mass: 0.9,
};

export const GLIDE: Transition = {
  type: 'spring',
  stiffness: 260,
  damping: 30,
  mass: 0.7,
};

export const LIFT: Transition = {
  type: 'spring',
  stiffness: 320,
  damping: 28,
  mass: 0.6,
};

export const GROW: Transition = {
  type: 'spring',
  stiffness: 90,
  damping: 18,
  mass: 1,
};

const STEP = 0.07;
const CAP = 0.35;

export function stagger(index = 0, step: number = STEP): number {
  return Math.min(index * step, CAP);
}

/** Направление посадки повторяет форму плитки: выпуклая, вдавленная, уведомление. */
export type SettleFrom = 'press' | 'inset' | 'side';

export const SETTLE_VARIANTS: Record<SettleFrom, Variants> = {
  press: {
    rest: { opacity: 0, y: 18, scale: 1.035, '--settle': 0 },
    laid: { opacity: 1, y: 0, scale: 1, '--settle': 1 },
  },
  inset: {
    rest: { opacity: 0, y: 6, scale: 0.975, '--settle': 0 },
    laid: { opacity: 1, y: 0, scale: 1, '--settle': 1 },
  },
  side: {
    rest: { opacity: 0, x: 26, scale: 1.02, '--settle': 0 },
    laid: { opacity: 1, x: 0, scale: 1, '--settle': 1 },
  },
};

export const LIFT_VARIANTS: Variants = {
  rest: { opacity: 0, y: 14 },
  laid: { opacity: 1, y: 0 },
};

export const IN_VIEW = { once: true, amount: 0.25 } as const;
