import type { IconName } from '@/components/ClayIcon';

/**
 * Тексты «пластилиновой» версии.
 *
 * Ориентир — музыкальный дашборд: страница собрана как спокойный кабинет из
 * мягких плиток. Важное отличие от ориентира: там цвет кодировал метрику,
 * здесь цвет кодирует предмет — настоящих метрик у нас нет, а выдумывать
 * цифры нельзя. Панель прогресса поэтому помечена как заглушка.
 */

/** Оттенки плиток из global.css (.tile--surface/sage/peach/butter/coral). */
export type TileTone = 'surface' | 'sage' | 'peach' | 'butter' | 'coral';

export interface ClubInfo {
  address: string;
  phone: string;
  phoneHref: string;
}

export const CLUB: ClubInfo = {
  address: 'г. Самара, ул. Ново-Садовая, 224Б',
  phone: '8-917-816-67-18',
  phoneHref: 'tel:+79178166718',
};

export interface RailItem {
  id: string;
  label: string;
  icon: IconName;
}

export const RAIL: RailItem[] = [
  { id: 'start', label: 'Начало', icon: 'home' },
  { id: 'subjects', label: 'Предметы', icon: 'grid' },
  { id: 'quiet', label: 'Атмосфера', icon: 'heart' },
  { id: 'parents', label: 'Родителям', icon: 'bell' },
  { id: 'progress', label: 'Прогресс', icon: 'chart' },
  { id: 'signup', label: 'Записаться', icon: 'plus' },
];

export interface GreetingContent {
  hello: string;
  title: string;
  lead: string;
  primary: string;
  secondary: string;
  slotLabel: string;
  slotNote: string;
  chips: string[];
}

export const GREETING: GreetingContent = {
  hello: 'Привет!',
  title: 'Здесь учиться спокойно',
  lead:
    'Клуб IQ 200 в Самаре: математика, история, физика и литература для ' +
    'школьников 12–16 лет. Занятие ведут преподаватель и психолог вместе — ' +
    'чтобы предмет перестал быть поводом для тревоги.',
  primary: 'Записаться на пробное',
  secondary: 'Позвонить',
  slotLabel: 'иллюстрация',
  slotNote: 'Заглушка · рисунок',
  chips: ['12–16 лет', 'малые группы', 'психолог рядом'],
};

/* Цвет кодирует предмет, а не показатель */
export interface SubjectItem {
  id: string;
  name: string;
  hint: string;
  text: string;
  tone: TileTone;
  icon: IconName;
}

export interface SubjectsContent {
  label: string;
  title: string;
  lead: string;
  items: SubjectItem[];
}

export const SUBJECTS: SubjectsContent = {
  label: 'Предметы',
  title: 'Четыре плитки',
  lead: 'Можно взять одну, можно собрать свой набор — расписанием они не связаны.',
  items: [
    {
      id: 'math',
      name: 'Математика',
      hint: 'условие целиком',
      text: 'Учимся видеть, где данные, где вопрос, где ловушка. Счёт приходит следом.',
      tone: 'peach',
      icon: 'grid',
    },
    {
      id: 'history',
      name: 'История',
      hint: 'причина, не дата',
      text: 'Спорим о причинах и проверяем источник вместо пересказа параграфа.',
      tone: 'sage',
      icon: 'book',
    },
    {
      id: 'physics',
      name: 'Физика',
      hint: 'сначала явление',
      text: 'Смотрим на то, что происходит вокруг, и только потом ищем формулу.',
      tone: 'butter',
      icon: 'spark',
    },
    {
      id: 'literature',
      name: 'Литература',
      hint: 'свой голос',
      text: 'Читаем так, чтобы было о чём сказать своими словами, а не чужими.',
      tone: 'coral',
      icon: 'quote',
    },
  ],
};

/* Сравнение двух режимов — приём, которого нет в других версиях */
export type QuietTone = 'muted' | 'accent';

export interface QuietColumn {
  head: string;
  tone: QuietTone;
  items: string[];
}

export interface QuietContent {
  label: string;
  title: string;
  lead: string;
  columns: QuietColumn[];
}

export const QUIET: QuietContent = {
  label: 'Атмосфера',
  title: 'Тише, чем в школе',
  lead:
    'Мы не ругаем школу — просто в клубе другой режим. Он и делает разницу ' +
    'между «отсидеть» и «разобраться».',
  columns: [
    {
      head: 'Как часто бывает',
      tone: 'muted',
      items: [
        'вопрос вслух — риск выглядеть глупо',
        'ошибка сразу превращается в оценку',
        'темп один на весь класс',
        'молчать безопаснее, чем спросить',
      ],
    },
    {
      head: 'Как у нас',
      tone: 'accent',
      items: [
        'непонятно — говори сразу, это правило',
        'ошибку разбирают, а не оценивают',
        'группа небольшая, темп общий',
        'спросить — самый короткий путь',
      ],
    },
  ],
};

/* Карточки-уведомления: что родитель узнаёт и когда */
export interface ParentNote {
  icon: IconName;
  head: string;
  text: string;
  tone: TileTone;
}

export interface ParentsContent {
  label: string;
  title: string;
  lead: string;
  notes: ParentNote[];
}

export const PARENTS: ParentsContent = {
  label: 'Родителям',
  title: 'Что вы будете знать',
  lead: 'Без личного кабинета и приложений — просто понятная обратная связь.',
  notes: [
    {
      icon: 'bell',
      head: 'После пробного',
      text: 'Расскажем, как ребёнок держался в группе и какая группа ему подойдёт.',
      tone: 'peach',
    },
    {
      icon: 'heart',
      head: 'Если что-то идёт не так',
      text: 'Психолог сам свяжется с вами, а не будет ждать родительского собрания.',
      tone: 'sage',
    },
    {
      icon: 'chart',
      head: 'По ходу занятий',
      text: 'Скажем прямо, где ребёнку тяжело и что с этим делаем — без обтекаемых формулировок.',
      tone: 'surface',
    },
  ],
};

/* Панель прогресса: настоящих данных нет */
export interface ProgressContent {
  label: string;
  title: string;
  note: string;
  legend: string[];
  days: string[];
}

export const PROGRESS: ProgressContent = {
  label: 'Раздел не наполнен',
  title: 'Панель прогресса',
  note:
    'Здесь встанет прогресс ученика: посещения, темы, отметки психолога. ' +
    'Столбики ниже — скелет, нарисованный кодом. Он ничего не измеряет и ни ' +
    'о чём не отчитывается: настоящих данных у нас пока нет.',
  legend: ['посещения', 'темы', 'заметки'],
  days: ['пн', 'вт', 'ср', 'чт', 'пт', 'сб'],
};

export interface SignupField {
  name: string;
  label: string;
  type: string;
  placeholder: string;
}

export interface SignupSubject {
  label: string;
  options: string[];
}

export interface SignupContent {
  label: string;
  title: string;
  lead: string;
  fields: SignupField[];
  subject: SignupSubject;
  submit: string;
  devNote: string;
}

export const SIGNUP: SignupContent = {
  label: 'Записаться',
  title: 'Первое занятие — пробное',
  lead: 'Оставьте контакты, перезвоним и подберём группу по возрасту и предмету.',
  fields: [
    { name: 'name', label: 'Имя ребёнка', type: 'text', placeholder: 'Как зовут' },
    { name: 'phone', label: 'Телефон', type: 'tel', placeholder: '+7' },
  ],
  subject: {
    label: 'Предмет',
    options: ['Математика', 'История', 'Физика', 'Литература', 'Ещё не выбрали'],
  },
  submit: 'Отправить заявку',
  devNote: 'Форма не подключена: точка подключения — data-action="submit-lead"',
};
