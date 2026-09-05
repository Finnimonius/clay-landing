'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { AnimatePresence, motion } from 'motion/react';
import type { Credential, TileTone } from '@/data/content';
import { SETTLE } from '@/lib/motion';
import ClayIcon from './ClayIcon';
import Settle from './motion/Settle';
import styles from './Credentials.module.css';

/** Документ на полке знает своего владельца: полка общая и хронологическая. */
export interface ShelfDoc extends Credential {
  owner: string;
  initials: string;
  tone: TileTone;
}

export interface CredentialsProps {
  items: ShelfDoc[];
}

const FOCUSABLE = 'button, [href], input, [tabindex]:not([tabindex="-1"])';

export default function Credentials({ items }: CredentialsProps) {
  const [open, setOpen] = useState<number | null>(null);
  const triggers = useRef<(HTMLButtonElement | null)[]>([]);
  const dialog = useRef<HTMLDivElement>(null);
  const closeBtn = useRef<HTMLButtonElement>(null);

  const close = useCallback(() => {
    setOpen((i) => {
      if (i !== null) triggers.current[i]?.focus();
      return null;
    });
  }, []);

  useEffect(() => {
    if (open === null) return;

    closeBtn.current?.focus();

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        close();
        return;
      }

      // Фокус не должен уходить на страницу под окном
      if (e.key === 'Tab' && dialog.current) {
        const nodes = dialog.current.querySelectorAll<HTMLElement>(FOCUSABLE);
        if (nodes.length === 0) return;
        const first = nodes[0];
        const last = nodes[nodes.length - 1];

        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };

    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', onKey);

    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = prev;
    };
  }, [open, close]);

  const shown = open === null ? null : items[open];

  return (
    <>
      <ul className={styles.shelf}>
        {items.map((c, i) => (
          <Settle as="li" key={c.file} index={i} lift className={styles.slot}>
            {/* Имя кнопки собрано вручную: иначе скринридер прочёл бы её как
                «1990 диплом АБ Историк…» — сначала обложку, потом суть */}
            <button
              type="button"
              className={styles.doc}
              aria-label={`${c.kind} ${c.year} года. ${c.what}. ${c.place}. ${c.owner}. Смотреть скан`}
              ref={(el) => { triggers.current[i] = el; }}
              onClick={() => setOpen(i)}
            >
              <span className={styles.thumb}>
                <span className={styles.thumb__frame}>
                  {/*
                    Повёрнут не сам снимок, а обёртка: у next/image с `fill`
                    размеры прибиты к рамке, а лежащему боком скану нужны
                    переставленные стороны — иначе после поворота он вылезет
                    за рамку и обрежется по углам.
                  */}
                  <span
                    className={`${styles.thumb__box}${c.rotate ? ` ${styles['thumb__box--rot']}` : ''}`}
                    style={c.rotate ? { transform: `translate(-50%, -50%) rotate(${c.rotate}deg)` } : undefined}
                  >
                    {/*
                      Кадрируя вертикальный документ в горизонтальную рамку,
                      держимся его шапки: при повороте на +90° верх документа
                      приходит с левого края файла, при −90° — с правого.
                    */}
                    {/* Снимок под размытием: разрешение ему нужно вдвое
                        меньше видимой рамки, глазу разницы не будет */}
                    <Image
                      src={`/images/certificates/${c.file}`}
                      alt=""
                      fill
                      sizes="180px"
                      className={styles.thumb__img}
                      style={c.rotate ? { objectPosition: c.rotate === 90 ? 'left center' : 'right center' } : undefined}
                    />
                  </span>

                  <span className={styles.thumb__over} aria-hidden="true">
                    <span className={styles.thumb__year}>{c.year}</span>
                    <span className={styles.thumb__kind}>{c.kind}</span>
                  </span>
                </span>

                <span className={`${styles.thumb__who} ${styles[`thumb__who--${c.tone}`]}`}>
                  {c.initials}
                </span>
              </span>

              <span className={styles.doc__foot}>
                <span className={styles.doc__what}>{c.what}</span>
                <span className={styles.doc__place}>{c.place}</span>
              </span>
            </button>
          </Settle>
        ))}
      </ul>

      <AnimatePresence>
        {shown && (
          <motion.div
            className={styles.lb}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.18 }}
            onClick={close}
          >
            <motion.div
              ref={dialog}
              className={styles.lb__box}
              role="dialog"
              aria-modal="true"
              aria-label={`${shown.what} — ${shown.owner}`}
              initial={{ opacity: 0, scale: 0.97, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.98, y: 6 }}
              transition={SETTLE}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                ref={closeBtn}
                className={styles.lb__close}
                onClick={close}
                aria-label="Закрыть"
              >
                <ClayIcon name="plus" size={20} />
              </button>

              {/*
                Обычный img, а не next/image: сканы весят 30–110 КБ, интринсик-размеры
                у них разные, а повёрнутым нужны переставленные ограничения сторон —
                оптимизатор здесь только мешал бы.
              */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                className={`${styles.lb__shot}${shown.rotate ? ` ${styles['lb__shot--rot']}` : ''}`}
                src={`/images/certificates/${shown.file}`}
                alt={`${shown.what}. ${shown.place}, ${shown.year}. ${shown.owner}`}
                style={shown.rotate ? { transform: `rotate(${shown.rotate}deg)` } : undefined}
              />

              <p className={styles.lb__cap}>
                <span className={styles.lb__what}>{shown.what}</span>
                <span className={styles.lb__place}>{shown.place} · {shown.year}</span>
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
