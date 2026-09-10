import { PRICES } from '@/data/content';
import { spaced } from '@/lib/format';
import PriceCount from './PriceCount';
import Settle from './motion/Settle';
import styles from './Prices.module.css';

export default function Prices() {
  return (
    <section className="prices" id="prices">
      <header className={styles.prices__head}>
        <p className="label">{PRICES.label}</p>
        <h2 className="h">{PRICES.title}</h2>
        <p className="p">{PRICES.lead}</p>
      </header>

      <ul className={styles.plans}>
        {PRICES.plans.map((p, i) => (
          <Settle
            as="li"
            key={p.id}
            index={i}
            className={`${styles.plan} tile tile--${p.tone}`}
          >
            <div className={styles.plan__body}>
              <h3 className={`h h--sm ${styles.plan__name}`}>{p.name}</h3>
              <p className={styles.plan__note}>{p.note}</p>
            </div>

            <p className={styles.plan__sum}>
              <span className={styles.plan__price}>
                <PriceCount value={p.price} index={i} />
                <span className={styles.plan__cur}>{PRICES.currency}</span>
              </span>
              <span className={`label ${styles.plan__per}`}>{PRICES.per}</span>
            </p>
          </Settle>
        ))}
      </ul>

      <Settle from="inset" className={styles.extras}>
        <p className={`label ${styles.extras__title}`}>{PRICES.linesTitle}</p>

        <ul className={styles.lines}>
          {PRICES.lines.map((l) => (
            <li
              key={l.name}
              className={`${styles.line}${l.accent ? ` ${styles['is-free']}` : ''}`}
            >
              <span className={styles.line__name}>{l.name}</span>
              <span className={styles.line__dots} aria-hidden="true" />
              <span className={styles.line__price}>{spaced(l.price)}</span>
              <span className={styles.line__note}>{l.note}</span>
            </li>
          ))}
        </ul>
      </Settle>
    </section>
  );
}
