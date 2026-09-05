'use client';

import { CLUB, SIGNUP } from '@/data/content';
import ClayIcon from './ClayIcon';
import styles from './Signup.module.css';

export default function Signup() {
  return (
    <section className="sign" id="signup">
      <div className={`${styles.sign__box} tile tile--sage`}>
        <header className={styles.sign__head}>
          <p className={`label ${styles.sign__label}`}>{SIGNUP.label}</p>
          <h2 className={`h ${styles.sign__title}`}>{SIGNUP.title}</h2>
          <p className={styles.sign__lead}>{SIGNUP.lead}</p>

          <div className={styles.sign__where}>
            <span className={styles.sign__ico}><ClayIcon name="home" size={22} /></span>
            <div>
              <p className={styles.sign__addr}>{CLUB.address}</p>
              <a className={styles.sign__tel} href={CLUB.phoneHref} data-action="call">{CLUB.phone}</a>
            </div>
          </div>
        </header>

        <form className={styles.sign__form} onSubmit={(e) => e.preventDefault()}>
          {SIGNUP.fields.map((f) => (
            <label key={f.name} className={styles.fld}>
              <span className={styles.fld__k}>{f.label}</span>
              <input
                className={styles.fld__in}
                type={f.type}
                name={f.name}
                placeholder={f.placeholder}
                autoComplete={f.type === 'tel' ? 'tel' : 'off'}
              />
            </label>
          ))}

          <label className={`${styles.fld} ${styles['fld--wide']}`}>
            <span className={styles.fld__k}>{SIGNUP.subject.label}</span>
            <select className={styles.fld__in} name="subject" defaultValue={SIGNUP.subject.options[0]}>
              {SIGNUP.subject.options.map((o) => <option key={o} value={o}>{o}</option>)}
            </select>
          </label>

          <button className={`knob ${styles.sign__submit}`} type="button" data-action="submit-lead">
            {SIGNUP.submit}
          </button>

          <p className={styles.sign__dev}>{SIGNUP.devNote}</p>
        </form>
      </div>
    </section>
  );
}
