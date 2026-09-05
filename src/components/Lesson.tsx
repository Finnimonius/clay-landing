import { LESSON } from '@/data/content';
import LessonTrack from './LessonTrack';
import Settle from './motion/Settle';
import styles from './Lesson.module.css';

/**
 * Как проходит занятие. Занимает место бывшей «панели прогресса», поэтому
 * панель осталась вдавленной — а вместо выдуманных цифр в ней теперь
 * последовательность, и нумерация здесь несёт смысл, а не украшает.
 *
 * Нитка между шагами закрашивается по прокрутке — механика в LessonTrack,
 * потому что она держит собственный ref и scroll-хуки, а этому компоненту
 * незачем становиться клиентским целиком.
 */
export default function Lesson() {
  return (
    <section className="lesson" id="lesson">
      <header className={styles.lesson__head}>
        <p className="label">{LESSON.label}</p>
        <h2 className="h">{LESSON.title}</h2>
        <p className="p">{LESSON.lead}</p>
      </header>

      <Settle from="inset" className={styles.lesson__box}>
        <LessonTrack steps={LESSON.steps} />
      </Settle>
    </section>
  );
}
