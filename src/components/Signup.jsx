import { CLUB, SIGNUP } from '../data/content.js';
import ClayIcon from './ClayIcon.jsx';
import './Signup.css';

export default function Signup() {
  return (
    <section className="sign" id="signup">
      <div className="sign__box tile tile--sage">
        <header className="sign__head">
          <p className="label sign__label">{SIGNUP.label}</p>
          <h2 className="h sign__title">{SIGNUP.title}</h2>
          <p className="sign__lead">{SIGNUP.lead}</p>

          <div className="sign__where">
            <span className="sign__ico"><ClayIcon name="home" size={22} /></span>
            <div>
              <p className="sign__addr">{CLUB.address}</p>
              <a className="sign__tel" href={CLUB.phoneHref} data-action="call">{CLUB.phone}</a>
            </div>
          </div>
        </header>

        <form className="sign__form" onSubmit={(e) => e.preventDefault()}>
          {SIGNUP.fields.map((f) => (
            <label key={f.name} className="fld">
              <span className="fld__k">{f.label}</span>
              <input
                className="fld__in"
                type={f.type}
                name={f.name}
                placeholder={f.placeholder}
                autoComplete={f.type === 'tel' ? 'tel' : 'off'}
              />
            </label>
          ))}

          <label className="fld fld--wide">
            <span className="fld__k">{SIGNUP.subject.label}</span>
            <select className="fld__in" name="subject" defaultValue={SIGNUP.subject.options[0]}>
              {SIGNUP.subject.options.map((o) => <option key={o} value={o}>{o}</option>)}
            </select>
          </label>

          <button className="knob sign__submit" type="button" data-action="submit-lead">
            {SIGNUP.submit}
          </button>

          <p className="sign__dev">{SIGNUP.devNote}</p>
        </form>
      </div>
    </section>
  );
}
