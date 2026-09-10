import { CLUB, GREETING } from '@/data/content';
import ClayIcon from './ClayIcon';
import Chip from './Chip';
import Tilt from './Tilt';
import Settle from './motion/Settle';
import Rise from './motion/Rise';
import styles from './Greeting.module.css';
import Image from 'next/image';

/**
 * Единственное место с партитурой: плитка, строки, рисунок. Дальше по
 * странице только материал — иначе приём превратился бы в фон.
 */
export default function Greeting() {
  return (
    <Settle as="section" now className={`${styles.greet} tile tile--peach`} id="start">
      <div className={styles.greet__text}>
        <Rise as="p" at={0.18} className={styles.greet__hello}>
          {GREETING.hello}
        </Rise>

        <Rise as="h1" at={0.26} className={`h ${styles.greet__title}`}>
          {GREETING.title}
        </Rise>

        <Rise as="p" at={0.36} className={`p ${styles.greet__lead}`}>
          {GREETING.lead}
        </Rise>

        <ul className={styles.greet__chips}>
          {GREETING.chips.map((c, i) => (
            <Rise as="li" key={c.label} at={0.44 + i * 0.05} className={styles.greet__chip}>
              <Chip label={c.label} hint={c.hint} />
            </Rise>
          ))}
        </ul>

        <Rise at={0.62} className={styles.greet__acts}>
          <a className="knob" href={CLUB.phoneHref} data-action="call">
            <ClayIcon name="phone" size={18} />
            <span className={styles.greet__callText}>
              <span>{GREETING.primary}</span>
              <span className={styles.greet__callSep} aria-hidden="true">·</span>
              <span className={styles.greet__callNum}>{CLUB.phone}</span>
            </span>
          </a>
          <a className="knob knob--soft" href="#visit">
            <ClayIcon name="pin" size={18} />
            {GREETING.secondary}
          </a>
        </Rise>
      </div>

      <Settle as="figure" now delay={0.14} className={styles.greet__slot}>
        <Tilt className={styles.greet__tilt}>
          <div className={styles.greet__frame}>
            <Image
              src="/images/hero.jpeg"
              alt="Занятие в клубе IQ 200"
              fill
              sizes="(max-width: 900px) 100vw, 40vw"
              className={styles.greet__img}
              priority
            />
          </div>

          {/* Адрес обязан читаться на первом экране, до любой прокрутки. Он же
              и ссылка: увидев адрес, человек первым делом хочет понять, как
              доехать. Плашка вынесена вперёд по оси Z — при наклоне она
              всплывает над рамкой сильнее, чем сама рамка */}
          <a
            className={styles.greet__where}
            href="#visit"
            aria-label={`${GREETING.secondary} — ${CLUB.address}`}
          >
            <span className={styles.greet__whereIco}>
              <ClayIcon name="pin" size={20} />
            </span>
            <span className={styles.greet__whereText}>
              <span className={styles.greet__city}>{CLUB.city}</span>
              <span className={styles.greet__street}>{CLUB.street}</span>
            </span>
            <span className={styles.greet__go} aria-hidden="true">→</span>
          </a>
        </Tilt>
      </Settle>
    </Settle>
  );
}
