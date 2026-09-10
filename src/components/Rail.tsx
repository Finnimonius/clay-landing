'use client';

import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { CLUB, RAIL } from '@/data/content';
import { GLIDE } from '@/lib/motion';
import ClayIcon from './ClayIcon';
import Settle from './motion/Settle';
import ThemeToggle from './ThemeToggle';
import styles from './Rail.module.css';

/**
 * Левая колонка-рейка. Активный пункт помечен не подсветкой, а одним куском
 * пластилина: бегунок существует в единственном экземпляре и переезжает.
 *
 * Ниже breakpoint та же панель складывается в выпадающее меню под верхней
 * панелью (styles.bar) — рейка не дублируется отдельным мобильным
 * компонентом, а просто становится другой раскладкой той же разметки.
 */
export default function Rail() {
  const [active, setActive] = useState(RAIL[0].id);
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);

  /**
   * Текущий раздел — последний, чей верх поднялся выше линии чтения.
   *
   * По доле видимости считать нельзя: высокий раздел (в «Как прийти» стоит
   * карта) не набирает долю 1.0 никогда, и его всегда обыгрывает более
   * низкий раздел выше по странице.
   */
  useEffect(() => {
    const sections = RAIL
      .map((r) => ({ id: r.id, el: document.getElementById(r.id) }))
      .filter((s): s is { id: string; el: HTMLElement } => s.el !== null);

    if (sections.length === 0) return;

    let frame = 0;

    const pick = () => {
      frame = 0;
      const doc = document.documentElement;

      // У низа страницы прокручивать больше некуда, и последний раздел не
      // смог бы стать текущим ни по какому признаку — отмечаем его прямо
      if (window.scrollY + window.innerHeight >= doc.scrollHeight - 2) {
        setActive(sections[sections.length - 1].id);
        return;
      }

      const line = window.innerHeight * 0.35;
      let current = sections[0].id;

      for (const s of sections) {
        if (s.el.getBoundingClientRect().top <= line) current = s.id;
      }

      setActive(current);
    };

    const onScroll = () => {
      if (frame) return;
      frame = requestAnimationFrame(pick);
    };

    pick();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);

    return () => {
      if (frame) cancelAnimationFrame(frame);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  /* Открытое меню запирает прокрутку страницы и закрывается по Escape —
     тот же приём, что у окна просмотра сканов в Credentials */
  useEffect(() => {
    if (!menuOpen) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        setMenuOpen(false);
        toggleRef.current?.focus();
      }
    };

    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', onKey);

    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = prev;
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      {/* Верхняя панель существует только ниже breakpoint — на широком
          экране она скрыта в CSS и в разметку заглядывать незачем */}
      <header className={styles.bar}>
        <a className={styles.bar__brand} href="#start" onClick={closeMenu}>
          <span className={styles.rail__mark}>IQ</span>
        </a>

        <div className={styles.bar__acts}>
          <ThemeToggle />

          <a
            className={styles.bar__tel}
            href={CLUB.phoneHref}
            data-action="call"
            aria-label={`Позвонить: ${CLUB.phone}`}
          >
            <ClayIcon name="phone" size={19} />
          </a>

          <button
            ref={toggleRef}
            type="button"
            className={styles.bar__toggle}
            aria-expanded={menuOpen}
            aria-controls="rail-menu"
            aria-label={menuOpen ? 'Закрыть меню' : 'Открыть меню'}
            onClick={() => setMenuOpen((v) => !v)}
          >
            <ClayIcon name={menuOpen ? 'plus' : 'menu'} size={20} className={menuOpen ? styles.bar__toggleIco : undefined} />
          </button>
        </div>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className={styles.backdrop}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.18 }}
            onClick={closeMenu}
            aria-hidden="true"
          />
        )}
      </AnimatePresence>

      <aside
        id="rail-menu"
        className={`${styles.rail}${menuOpen ? ` ${styles['is-open']}` : ''}`}
      >
        <Settle now className={styles.rail__in}>
          <div className={styles.rail__head}>
            <a className={styles.rail__brand} href="#start" onClick={closeMenu}>
              <span className={styles.rail__mark}>IQ</span>
              <span className={styles.rail__name}>Клуб<br />IQ&nbsp;200</span>
            </a>

            <ThemeToggle />
          </div>

          <nav className={styles.rail__nav} aria-label="Разделы">
            {RAIL.map((r) => {
              const on = r.id === active;

              return (
                <a
                  key={r.id}
                  className={`${styles.rail__link}${on ? ` ${styles['is-on']}` : ''}`}
                  href={`#${r.id}`}
                  aria-current={on ? 'true' : undefined}
                  onClick={closeMenu}
                >
                  {on && (
                    <motion.span
                      layoutId="rail-knob"
                      className={styles.rail__knob}
                      transition={GLIDE}
                    />
                  )}

                  <span className={styles.rail__ico}>
                    <ClayIcon name={r.icon} size={22} />
                  </span>
                  <span className={styles.rail__label}>{r.label}</span>
                </a>
              );
            })}
          </nav>

          <div className={styles.rail__foot}>
            <p className={styles.rail__where}>{CLUB.address}</p>
            <a className={styles.rail__tel} href={CLUB.phoneHref} data-action="call">{CLUB.phone}</a>
          </div>
        </Settle>
      </aside>
    </>
  );
}
