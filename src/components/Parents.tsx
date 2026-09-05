import { PARENTS } from '@/data/content';
import ClayIcon from './ClayIcon';
import styles from './Parents.module.css';

export default function Parents() {
  return (
    <section className="par" id="parents">
      <header className={styles.par__head}>
        <p className="label">{PARENTS.label}</p>
        <h2 className="h">{PARENTS.title}</h2>
        <p className="p">{PARENTS.lead}</p>
      </header>

      {/* Карточки-уведомления: форма подсказки из дашборда, содержание своё */}
      <ul className={styles.par__list}>
        {PARENTS.notes.map((n) => (
          <li key={n.head} className={`${styles.note} tile tile--${n.tone}`}>
            <span className={styles.note__ico}><ClayIcon name={n.icon} size={24} /></span>
            <div className={styles.note__body}>
              <h3 className={styles.note__head}>{n.head}</h3>
              <p className={styles.note__text}>{n.text}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
