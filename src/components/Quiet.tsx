import { QUIET } from '@/data/content';
import QuietCompare from './QuietCompare';
import styles from './Quiet.module.css';

export default function Quiet() {
  return (
    <section className="quiet" id="quiet">
      <header className={styles.quiet__head}>
        <p className="label">{QUIET.label}</p>
        <h2 className="h">{QUIET.title}</h2>
        <p className="p">{QUIET.lead}</p>
      </header>

      {/* Пары и дуга между колонками — в QuietCompare: ей нужны прокрутка и
          измерение DOM для дуги, этому компоненту — нет */}
      <QuietCompare columns={QUIET.columns} />
    </section>
  );
}
