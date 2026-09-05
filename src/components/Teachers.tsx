import Image from 'next/image';
import { TEACHERS } from '@/data/content';
import Credentials, { type ShelfDoc } from './Credentials';
import Settle from './motion/Settle';
import styles from './Teachers.module.css';

/**
 * Преподаватели: две визитки и общая полка документов под ними.
 *
 * Полка общая и хронологическая намеренно. Пока дипломы висели внутри
 * колонок, шесть документов одного делали из единственного документа
 * другого довесок; на общей полке владельца называет монограмма в углу,
 * а вес секции распределён по годам, а не по людям.
 *
 * Портретов пока нет, рамка честно помечена заглушкой. Появится файл в
 * `photo` — заглушка заменится сама, вёрстку трогать не придётся.
 */

const DOCS: ShelfDoc[] = TEACHERS.people
  .flatMap((t) =>
    t.credentials.map((c) => ({
      ...c,
      owner: t.short,
      initials: t.initials,
      tone: t.tone,
    })),
  )
  .sort((a, b) => a.year.localeCompare(b.year));

/* Склонение отдано Intl: своя арифметика по модулю здесь лишняя,
   а результат одинаков на сервере и в браузере */
const PLURAL = new Intl.PluralRules('ru-RU');
const FORMS: Record<Intl.LDMLPluralRule, string> = {
  zero: 'документов',
  one: 'документ',
  two: 'документа',
  few: 'документа',
  many: 'документов',
  other: 'документов',
};

export default function Teachers() {
  return (
    <section className="teach" id="teachers">
      <header className={styles.teach__head}>
        <p className="label">{TEACHERS.label}</p>
        <h2 className="h">{TEACHERS.title}</h2>
        <p className="p">{TEACHERS.lead}</p>
      </header>

      <div className={styles.teach__pair}>
        {TEACHERS.people.map((t, i) => {
          const n = t.credentials.length;

          return (
            <Settle
              as="article"
              key={t.id}
              index={i}
              className={`${styles.who} tile tile--${t.tone}`}
            >
              <figure className={styles.who__slot}>
                {t.photo ? (
                  <Image
                    src={t.photo}
                    alt={t.name}
                    fill
                    sizes="144px"
                    className={styles.who__img}
                  />
                ) : (
                  <>
                    <span className={styles.who__mark} aria-hidden="true">{t.initials}</span>
                    <figcaption className="unfilled unfilled--sm">заглушка · фото</figcaption>
                  </>
                )}
              </figure>

              <div className={styles.who__id}>
                <h3 className={styles.who__name}>{t.name}</h3>
                <p className={styles.who__role}>{t.role}</p>
              </div>

              <p className={styles.who__about}>{t.about}</p>

              <p className={styles.who__count}>
                <span className={styles.who__dot} aria-hidden="true" />
                {n} {FORMS[PLURAL.select(n)]} на полке ниже
              </p>
            </Settle>
          );
        })}
      </div>

      <div className={styles.teach__docs}>
        <p className={styles.teach__docsHead}>
          <span className={styles.teach__docsTitle}>{TEACHERS.docsTitle}</span>
          <span className={styles.teach__docsCount}>{DOCS.length}</span>
          <span className={styles.teach__hint}>{TEACHERS.docsHint}</span>
        </p>

        <Credentials items={DOCS} />
      </div>
    </section>
  );
}
