import { PROGRESS } from '@/data/content';
import { skeletonBars } from '@/lib/clay';
import styles from './Progress.module.css';

/**
 * Панель прогресса без данных.
 *
 * Столбики — скелет от фиксированного сида. Ни одной подписи со значением:
 * оси и цифры появятся вместе с настоящими данными. Компонент рендерится на
 * сервере один раз, поэтому мемоизация хуком здесь не нужна — просто
 * вычисляем значения в теле функции.
 */
export default function Progress() {
  const bars = skeletonBars({ seed: 512, count: PROGRESS.days.length });

  return (
    <section className="prog" id="progress">
      <div className={`${styles.prog__box} tile`}>
        <span className={`unfilled ${styles.prog__badge}`}>Заглушка · {PROGRESS.label}</span>

        <header className={styles.prog__head}>
          <h2 className={`h h--sm ${styles.prog__title}`}>{PROGRESS.title}</h2>
          <p className={styles.prog__note}>{PROGRESS.note}</p>
        </header>

        <div className={styles.prog__body}>
          <div className={styles.chart} aria-hidden="true">
            {bars.map((h, i) => (
              <div key={i} className={styles.chart__col}>
                {/* высота в пикселях: процент внутри грид-колонки не разрешается */}
                <span className={styles.chart__bar} style={{ height: `${Math.round(h * 1.3)}px` }} />
                <span className={styles.chart__day}>{PROGRESS.days[i]}</span>
              </div>
            ))}
          </div>

          <ul className={styles.prog__legend}>
            {PROGRESS.legend.map((l) => (
              <li key={l} className={styles.prog__key}>
                <span className={styles.prog__dot} aria-hidden="true" />
                {l}
                <span className={styles.prog__empty}>пусто</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
