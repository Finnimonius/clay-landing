import { CLUB, RAIL } from '@/data/content';
import Settle from './motion/Settle';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <Settle as="footer" className={styles.end}>
      <div className={styles.end__id}>
        <p className={styles.end__name}>Клуб IQ&nbsp;200</p>
        <p className={styles.end__addr}>{CLUB.address}</p>
        <a className={styles.end__tel} href={CLUB.phoneHref} data-action="call">{CLUB.phone}</a>
      </div>

      <nav className={styles.end__nav} aria-label="Разделы в подвале">
        {RAIL.map((r) => (
          <a key={r.id} className={styles.end__link} href={`#${r.id}`}>{r.label}</a>
        ))}
      </nav>
    </Settle>
  );
}
