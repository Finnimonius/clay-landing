import { CLUB, VISIT } from '@/data/content';
import ClayIcon from './ClayIcon';
import Settle from './motion/Settle';
import styles from './Visit.module.css';

const MAP_SRC =
  `https://yandex.ru/map-widget/v1/?text=${encodeURIComponent(CLUB.mapQuery)}&z=17`;

const MAP_LINK =
  `https://yandex.ru/maps/?text=${encodeURIComponent(CLUB.mapQuery)}`;

/**
 * Как прийти. Формы нет — единственное целевое действие на странице это
 * звонок, поэтому телефон набран крупно и стоит выше карты.
 */
export default function Visit() {
  return (
    <section className="visit" id="visit">
      <Settle className={`${styles.visit__box} tile tile--sage`}>
        <div className={styles.visit__side}>
          <p className={`label ${styles.visit__label}`}>{VISIT.label}</p>
          <h2 className={`h ${styles.visit__title}`}>{VISIT.title}</h2>
          <p className={styles.visit__lead}>{VISIT.lead}</p>

          <a className={styles.visit__tel} href={CLUB.phoneHref} data-action="call">
            <span className={styles.visit__telIco}><ClayIcon name="phone" size={22} /></span>
            <span>
              <span className={styles.visit__telK}>{VISIT.callAction}</span>
              <span className={styles.visit__telN}>{CLUB.phone}</span>
            </span>
          </a>

          <div className={styles.visit__where}>
            <span className={styles.visit__whereIco}><ClayIcon name="pin" size={20} /></span>
            <div>
              <p className={styles.visit__addr}>{CLUB.address}</p>
              <a
                className={styles.visit__link}
                href={MAP_LINK}
                target="_blank"
                rel="noreferrer"
              >
                Открыть в Яндекс.Картах
              </a>
            </div>
          </div>
        </div>

        <div className={styles.visit__map}>
          <iframe
            className={styles.visit__frame}
            src={MAP_SRC}
            title={VISIT.mapTitle}
            loading="lazy"
            allowFullScreen
          />
        </div>
      </Settle>
    </section>
  );
}
