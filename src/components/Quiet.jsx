import { QUIET } from '../data/content.js';
import './Quiet.css';

export default function Quiet() {
  return (
    <section className="quiet" id="quiet">
      <header className="quiet__head">
        <p className="label">{QUIET.label}</p>
        <h2 className="h">{QUIET.title}</h2>
        <p className="p">{QUIET.lead}</p>
      </header>

      <div className="quiet__pair">
        {QUIET.columns.map((c) => (
          <article key={c.head} className={`col col--${c.tone} tile`}>
            <h3 className="h h--sm col__head">{c.head}</h3>
            <ul className="col__list">
              {c.items.map((it) => (
                <li key={it} className="col__item">{it}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
