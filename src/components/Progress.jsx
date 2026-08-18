import { useMemo } from 'react';
import { PROGRESS } from '../data/content.js';
import { skeletonBars } from '../lib/clay.js';
import './Progress.css';

/**
 * Панель прогресса без данных.
 *
 * Столбики — скелет от фиксированного сида. Ни одной подписи со значением:
 * оси и цифры появятся вместе с настоящими данными.
 */
export default function Progress() {
  const bars = useMemo(() => skeletonBars({ seed: 512, count: PROGRESS.days.length }), []);

  return (
    <section className="prog" id="progress">
      <div className="prog__box tile">
        <span className="unfilled prog__badge">Заглушка · {PROGRESS.label}</span>

        <header className="prog__head">
          <h2 className="h h--sm prog__title">{PROGRESS.title}</h2>
          <p className="prog__note">{PROGRESS.note}</p>
        </header>

        <div className="prog__body">
          <div className="chart" aria-hidden="true">
            {bars.map((h, i) => (
              <div key={i} className="chart__col">
                {/* высота в пикселях: процент внутри грид-колонки не разрешается */}
                <span className="chart__bar" style={{ height: `${Math.round(h * 1.3)}px` }} />
                <span className="chart__day">{PROGRESS.days[i]}</span>
              </div>
            ))}
          </div>

          <ul className="prog__legend">
            {PROGRESS.legend.map((l) => (
              <li key={l} className="prog__key">
                <span className="prog__dot" aria-hidden="true" />
                {l}
                <span className="prog__empty">пусто</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
