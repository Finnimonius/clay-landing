import { CLUB, GREETING } from '../data/content.js';
import ClayIcon from './ClayIcon.jsx';
import './Greeting.css';

export default function Greeting() {
  return (
    <section className="greet tile tile--peach" id="start">
      <div className="greet__text">
        <p className="greet__hello">{GREETING.hello}</p>
        <h1 className="h greet__title">{GREETING.title}</h1>
        <p className="p greet__lead">{GREETING.lead}</p>

        <ul className="greet__chips">
          {GREETING.chips.map((c) => (
            <li key={c} className="greet__chip">{c}</li>
          ))}
        </ul>

        <div className="greet__acts">
          <a className="knob" href="#signup" data-action="scroll-to-form">
            <ClayIcon name="plus" size={18} />
            {GREETING.primary}
          </a>
          <a className="knob knob--soft" href={CLUB.phoneHref} data-action="call">
            {GREETING.secondary} · {CLUB.phone}
          </a>
        </div>
      </div>

      {/* Рисунка нет — слот подписан, принять за готовую картинку нельзя */}
      <figure className="greet__slot">
        <span className="unfilled greet__stub">{GREETING.slotNote}</span>
        <div className="greet__frame">
          <span className="greet__frame-label">{GREETING.slotLabel}</span>
        </div>
      </figure>
    </section>
  );
}
