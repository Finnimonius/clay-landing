'use client';

import { useState, type ReactNode } from 'react';
import styles from './Flip.module.css';

/**
 * Карточка с двумя гранями.
 *
 * Механика здесь, внешний вид граней приходит классами снаружи. `front` и `back`
 * — пропсы-узлы, а не children, но серверными они от этого быть не перестают:
 * разметка приходит уже отрисованной и в клиентский бандл не уезжает.
 */
export interface FlipProps {
  /** Доступное имя кнопки переворота. */
  label: string;
  frontClass?: string;
  backClass?: string;
  front: ReactNode;
  back: ReactNode;
}

export default function Flip({ label, frontClass, backClass, front, back }: FlipProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className={styles.flip} data-open={open || undefined}>
      <div className={styles.inner}>
        <div className={`${styles.face} ${frontClass ?? ''}`}>{front}</div>
        <div className={`${styles.face} ${styles.back} ${backClass ?? ''}`}>{back}</div>
      </div>

      {/*
        Кнопка накладкой, а не обёрткой: <button> не может содержать заголовок,
        а на лице карточки стоит <h3>. Так скринридер читает обычную карточку
        с заголовком, а рядом получает одну кнопку — один таб-стоп на карточку.
      */}
      <button
        type="button"
        className={styles.knob}
        aria-label={label}
        aria-pressed={open}
        onClick={() => setOpen((v) => !v)}
      />
    </div>
  );
}
