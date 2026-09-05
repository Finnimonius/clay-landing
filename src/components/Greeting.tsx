import { CLUB, GREETING } from "@/data/content";
import ClayIcon from "./ClayIcon";
import styles from "./Greeting.module.css";
import Image from "next/image";

export default function Greeting() {
  return (
    <section className={`${styles.greet} tile tile--peach`} id="start">
      <div className="greet__text">
        <p className={styles.greet__hello}>{GREETING.hello}</p>
        <h1 className={`h ${styles.greet__title}`}>{GREETING.title}</h1>
        <p className={`p ${styles.greet__lead}`}>{GREETING.lead}</p>

        <ul className={styles.greet__chips}>
          {GREETING.chips.map((c) => (
            <li key={c} className={styles.greet__chip}>
              {c}
            </li>
          ))}
        </ul>

        <div className={styles.greet__acts}>
          <a className="knob" href="#signup" data-action="scroll-to-form">
            <ClayIcon name="plus" size={18} />
            {GREETING.primary}
          </a>
          <a className="knob knob--soft" href={CLUB.phoneHref} data-action="call">
            {GREETING.secondary} · {CLUB.phone}
          </a>
        </div>
      </div>

      <figure className={styles.greet__slot}>
        <div className={styles.greet__frame}>
          <Image
            src="/images/hero.jpeg"
            alt="Описание картинки"
            fill
            sizes="(max-width: 900px) 100vw, 40vw"
            className={styles.greet__img}
          />
        </div>
      </figure>
    </section>
  );
}
