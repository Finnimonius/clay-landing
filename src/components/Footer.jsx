import { CLUB, RAIL } from '../data/content.js';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="end">
      <p className="end__name">Клуб IQ&nbsp;200</p>
      <p className="end__addr">{CLUB.address}</p>
      <a className="end__tel" href={CLUB.phoneHref} data-action="call">{CLUB.phone}</a>

      <nav className="end__nav" aria-label="Разделы в подвале">
        {RAIL.map((r) => (
          <a key={r.id} className="end__link" href={`#${r.id}`}>{r.label}</a>
        ))}
      </nav>
    </footer>
  );
}
