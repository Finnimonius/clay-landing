import { CLUB, RAIL } from '@/data/content';
import ClayIcon from './ClayIcon';
import styles from './Rail.module.css';

/**
 * Левая колонка-рейка. В остальных версиях лендинга навигация сверху —
 * здесь она сбоку, как в дашборде-ориентире.
 */
export default function Rail() {
  return (
    <aside className={styles.rail}>
      <div className={styles.rail__in}>
        <a className={styles.rail__brand} href="#start">
          <span className={styles.rail__mark}>IQ</span>
          <span className={styles.rail__name}>Клуб<br />IQ&nbsp;200</span>
        </a>

        <nav className={styles.rail__nav} aria-label="Разделы">
          {RAIL.map((r, i) => (
            <a
              key={r.id}
              className={`${styles.rail__link}${i === 0 ? ` ${styles['is-on']}` : ''}`}
              href={`#${r.id}`}
            >
              <span className={styles.rail__ico}><ClayIcon name={r.icon} size={22} /></span>
              {r.label}
            </a>
          ))}
        </nav>

        <div className={styles.rail__foot}>
          <p className={styles.rail__where}>{CLUB.address}</p>
          <a className={styles.rail__tel} href={CLUB.phoneHref} data-action="call">{CLUB.phone}</a>
        </div>
      </div>
    </aside>
  );
}
