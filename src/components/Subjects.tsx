import Image from 'next/image';
import { SUBJECTS } from '@/data/content';
import ClayIcon from './ClayIcon';
import Flip from './Flip';
import Settle from './motion/Settle';
import styles from './Subjects.module.css';

export default function Subjects() {
  return (
    <section className="subj" id="subjects">
      <Settle as="header" from="inset" className={styles.subj__head}>
        <p className="label">{SUBJECTS.label}</p>
        <h2 className="h">{SUBJECTS.title}</h2>
        <p className="p">{SUBJECTS.lead}</p>
        <p className={styles.subj__hint}>{SUBJECTS.flipHint}</p>
      </Settle>

      <ul className={styles.subj__grid}>
        {SUBJECTS.items.map((s, i) => (
          /* Переворот не может жить на самой плитке: Settle с lift пишет туда
             свой transform инлайном и затёр бы поворот. Поэтому плитка снаружи
             поднимается, а грани крутятся внутри неё */
          <Settle as="li" key={s.id} index={i} lift className={styles.card}>
            <Flip
              label={`${SUBJECTS.factAction}: ${s.name}`}
              frontClass={`${styles.face} tile tile--${s.tone}`}
              backClass={`${styles.face} ${styles.back} tile tile--surface`}
              front={
                <>
                  <div className={styles.card__slot}>
                    <div className={styles.card__frame}>
                      {/* alt пустой намеренно: название предмета стоит строкой ниже,
                          и озвучивать его дважды скринридеру незачем */}
                      <Image
                        src={s.image}
                        alt=""
                        fill
                        sizes="(max-width: 900px) 100vw, 320px"
                        className={styles.card__img}
                        style={s.focus ? { objectPosition: s.focus } : undefined}
                      />
                    </div>

                    <span className={styles.card__ico}><ClayIcon name={s.icon} size={22} /></span>
                  </div>

                  <h3 className={`h h--sm ${styles.card__name}`}>{s.name}</h3>
                  <p className={styles.card__hint}>{s.hint}</p>
                  <p className={styles.card__text}>{s.text}</p>
                </>
              }
              back={
                <>
                  <span className={`${styles.back__ico} ${styles[`back__ico--${s.tone}`]}`}>
                    <ClayIcon name={s.icon} size={22} />
                  </span>

                  <p className="label">{SUBJECTS.factLabel}</p>
                  <p className={styles.back__text}>{s.fact}</p>
                  <p className={styles.back__name}>{s.name}</p>
                </>
              }
            />
          </Settle>
        ))}
      </ul>
    </section>
  );
}
