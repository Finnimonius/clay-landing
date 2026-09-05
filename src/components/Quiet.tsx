import { QUIET } from '@/data/content';
import styles from './Quiet.module.css';

export default function Quiet() {
  return (
    <section className="quiet" id="quiet">
      <header className={styles.quiet__head}>
        <p className="label">{QUIET.label}</p>
        <h2 className="h">{QUIET.title}</h2>
        <p className="p">{QUIET.lead}</p>
      </header>

      <div className={styles.quiet__pair}>
        {QUIET.columns.map((c) => (
          <article key={c.head} className={`${styles.col} ${styles[`col--${c.tone}`]} tile`}>
            <h3 className={`h h--sm ${styles.col__head}`}>{c.head}</h3>
            <ul className={styles.col__list}>
              {c.items.map((it) => (
                <li key={it} className={styles.col__item}>{it}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
