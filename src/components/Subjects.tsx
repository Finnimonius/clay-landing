import { SUBJECTS } from '@/data/content';
import ClayIcon from './ClayIcon';
import styles from './Subjects.module.css';

export default function Subjects() {
  return (
    <section className="subj" id="subjects">
      <header className={styles.subj__head}>
        <p className="label">{SUBJECTS.label}</p>
        <h2 className="h">{SUBJECTS.title}</h2>
        <p className="p">{SUBJECTS.lead}</p>
      </header>

      <ul className={styles.subj__grid}>
        {SUBJECTS.items.map((s) => (
          <li key={s.id} className={`${styles.card} tile tile--${s.tone}`}>
            <span className={styles.card__ico}><ClayIcon name={s.icon} size={26} /></span>
            <h3 className="h h--sm card__name">{s.name}</h3>
            <p className={styles.card__hint}>{s.hint}</p>
            <p className={styles.card__text}>{s.text}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
