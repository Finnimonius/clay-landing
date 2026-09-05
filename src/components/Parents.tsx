'use client';

import { useState } from 'react';
import type { ParentNote } from '@/data/content';
import { PARENTS } from '@/data/content';
import ClayIcon from './ClayIcon';
import Settle from './motion/Settle';
import styles from './Parents.module.css';

export default function Parents() {
  return (
    <section className="par" id="parents">
      <header className={styles.par__head}>
        <p className="label">{PARENTS.label}</p>
        <h2 className="h">{PARENTS.title}</h2>
        <p className="p">{PARENTS.lead}</p>
      </header>

      {/*
        Карточки-уведомления: форма подсказки из дашборда, содержание своё.
        Под текстом разворачивается мокап телефонного пуша с частным случаем
        обещания — не тем же текстом, а конкретным примером под конкретного
        (вымышленного) ребёнка. Так пример не читается вторым дублем строки
        выше, а показывает, как обещание выглядит в деле.

        Разворот — на высоте строки грида (0fr → 1fr), а не display/visibility,
        поэтому пример остаётся в DOM и читается вслух независимо от состояния.
      */}
      <ul className={styles.par__list}>
        {PARENTS.notes.map((n, i) => (
          <Note key={n.head} note={n} index={i} />
        ))}
      </ul>
    </section>
  );
}

/**
 * Разворот раньше срабатывал только на :hover, а у наведения нет мышиного
 * эквивалента на сенсорном экране — на телефоне пример был недостижим.
 * Кнопка-накладка (as in Flip) даёт то же самое по тапу и по клавиатуре,
 * оставляя мышиное наведение как более быстрый путь на десктопе.
 */
function Note({ note: n, index }: { note: ParentNote; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <Settle
      as="li"
      index={index}
      from="side"
      lift
      className={`${styles.note}${open ? ` ${styles['is-open']}` : ''} tile tile--${n.tone}`}
    >
      <span className={styles.note__ico}><ClayIcon name={n.icon} size={24} /></span>
      <div className={styles.note__body}>
        <h3 className={styles.note__head}>{n.head}</h3>
        <p className={styles.note__text}>{n.text}</p>
      </div>

      <div className={styles.note__preview}>
        <p className={`label ${styles.note__previewLabel}`}>Например</p>
        <div className={styles.bubble}>
          <div className={styles.bubble__top}>
            <span className={styles.bubble__mark} aria-hidden="true">IQ</span>
            <span className={styles.bubble__brand}>Клуб IQ 200</span>
            <span className={styles.bubble__time}>сейчас</span>
          </div>
          <p className={styles.bubble__text}>{n.preview}</p>
        </div>
      </div>

      <button
        type="button"
        className={styles.note__knob}
        aria-expanded={open}
        aria-label={`Пример уведомления: ${n.head}`}
        onClick={() => setOpen((v) => !v)}
      />
    </Settle>
  );
}
