import { PARENTS } from '../data/content.js';
import ClayIcon from './ClayIcon.jsx';
import './Parents.css';

export default function Parents() {
  return (
    <section className="par" id="parents">
      <header className="par__head">
        <p className="label">{PARENTS.label}</p>
        <h2 className="h">{PARENTS.title}</h2>
        <p className="p">{PARENTS.lead}</p>
      </header>

      {/* Карточки-уведомления: форма подсказки из дашборда, содержание своё */}
      <ul className="par__list">
        {PARENTS.notes.map((n) => (
          <li key={n.head} className={`note tile tile--${n.tone}`}>
            <span className="note__ico"><ClayIcon name={n.icon} size={24} /></span>
            <div className="note__body">
              <h3 className="note__head">{n.head}</h3>
              <p className="note__text">{n.text}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
