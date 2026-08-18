import { CLUB, RAIL } from '../data/content.js';
import ClayIcon from './ClayIcon.jsx';
import './Rail.css';

/**
 * Левая колонка-рейка. В остальных версиях лендинга навигация сверху —
 * здесь она сбоку, как в дашборде-ориентире.
 */
export default function Rail() {
  return (
    <aside className="rail">
      <div className="rail__in">
        <a className="rail__brand" href="#start">
          <span className="rail__mark">IQ</span>
          <span className="rail__name">Клуб<br />IQ&nbsp;200</span>
        </a>

        <nav className="rail__nav" aria-label="Разделы">
          {RAIL.map((r, i) => (
            <a key={r.id} className={`rail__link${i === 0 ? ' is-on' : ''}`} href={`#${r.id}`}>
              <span className="rail__ico"><ClayIcon name={r.icon} size={22} /></span>
              {r.label}
            </a>
          ))}
        </nav>

        <div className="rail__foot">
          <p className="rail__where">{CLUB.address}</p>
          <a className="rail__tel" href={CLUB.phoneHref} data-action="call">{CLUB.phone}</a>
        </div>
      </div>
    </aside>
  );
}
