import type { IconName } from '@/components/ClayIcon';

/**
 * Тексты «пластилиновой» версии.
 *
 * Цвет кодирует предмет, а не показатель: настоящих метрик у клуба нет,
 * а выдумывать цифры нельзя.
 */

/** Оттенки плиток из globals.css (.tile--surface/sage/peach/butter/coral). */
export type TileTone = 'surface' | 'sage' | 'peach' | 'butter' | 'coral';

export interface ClubInfo {
  city: string;
  street: string;
  address: string;
  phone: string;
  phoneHref: string;
  /** Строка поиска для виджета Яндекс.Карт. */
  mapQuery: string;
}

export const CLUB: ClubInfo = {
  city: 'Самара',
  street: 'ул. Ново-Садовая, 224Б',
  address: 'г. Самара, ул. Ново-Садовая, 224Б',
  phone: '8-917-816-67-18',
  phoneHref: 'tel:+79178166718',
  mapQuery: 'Самара, улица Ново-Садовая, 224Б',
};

export interface RailItem {
  id: string;
  label: string;
  icon: IconName;
}

export const RAIL: RailItem[] = [
  { id: 'start', label: 'Начало', icon: 'home' },
  { id: 'subjects', label: 'Предметы', icon: 'grid' },
  { id: 'lesson', label: 'Занятие', icon: 'book' },
  { id: 'parents', label: 'Родителям', icon: 'bell' },
  { id: 'teachers', label: 'Преподаватели', icon: 'spark' },
  { id: 'quiet', label: 'Атмосфера', icon: 'heart' },
  { id: 'visit', label: 'Как прийти', icon: 'pin' },
];

export interface GreetingChip {
  label: string;
  hint: string;
}

export interface GreetingContent {
  hello: string;
  title: string;
  lead: string;
  primary: string;
  secondary: string;
  chips: GreetingChip[];
}

export const GREETING: GreetingContent = {
  hello: 'Привет!',
  title: 'Здесь учиться интересно',
  lead:
    'Клуб IQ 200 в Самаре: математика, история, физика и литература для ' +
    'школьников 12–16 лет. Здесь можно сказать «я не понял» и получить в ответ ' +
    'объяснение, а не отметку. Группы такие, что услышат каждого.',
  primary: 'Позвонить',
  secondary: 'Как доехать',
  chips: [
    {
      label: '12–16 лет',
      hint: 'Берём этот возраст осознанно: и программа, и разговор с группой рассчитаны именно на него.',
    },
    {
      label: 'малые группы',
      hint: 'Небольшой состав — это когда промолчать сложнее, чем спросить.',
    },
    {
      label: 'психолог рядом',
      hint: 'Психолог — часть обычного занятия, а не человек, к которому зовут в кризис.',
    },
    {
      label: 'индивидуальные занятия',
      hint: 'Если тема горит перед контрольной или темп группы не подходит — можно один на один.',
    },
  ],
};

export interface SubjectItem {
  id: string;
  name: string;
  hint: string;
  text: string;
  /** Что на обороте карточки. */
  fact: string;
  tone: TileTone;
  icon: IconName;
  image: string;
  /** object-position, когда главное в кадре не по центру. */
  focus?: string;
}

export interface SubjectsContent {
  label: string;
  title: string;
  lead: string;
  /** Иначе про переворот никто не догадается. */
  flipHint: string;
  factLabel: string;
  /** Уходит в доступное имя кнопки переворота. */
  factAction: string;
  items: SubjectItem[];
}

export const SUBJECTS: SubjectsContent = {
  label: 'Предметы',
  title: 'Четыре направления',
  lead: 'Можно взять одно, можно собрать свой набор — расписанием они не связаны.',
  flipHint: 'Нажмите на карточку или наведите на неё — на обороте факт',
  factLabel: 'Факт',
  factAction: 'Показать факт',
  items: [
    {
      id: 'math',
      name: 'Математика',
      hint: 'условие целиком',
      text: 'Учимся видеть, где данные, где вопрос, где ловушка. Счёт приходит следом.',
      fact:
        'Знак равенства придумал в 1557 году Роберт Рекорд: он устал писать ' +
        '«равно» словами и взял две параллельные черты — ничто не бывает ' +
        'равнее их.',
      tone: 'peach',
      icon: 'grid',
      image: '/images/subjects/math.webp',
    },
    {
      id: 'history',
      name: 'История',
      hint: 'причина, не дата',
      text: 'Спорим о причинах и проверяем источник вместо пересказа параграфа.',
      fact:
        'Клеопатра жила ближе к появлению первого айфона, чем к постройке ' +
        'пирамиды Хеопса. Между ней и пирамидой — две с половиной тысячи лет.',
      tone: 'sage',
      icon: 'book',
      image: '/images/subjects/history.webp',
      focus: 'center 38%',   /* всадник выше середины кадра */
    },
    {
      id: 'physics',
      name: 'Физика',
      hint: 'сначала явление',
      text: 'Смотрим на то, что происходит вокруг, и только потом ищем формулу.',
      fact:
        'Свет идёт от Солнца до Земли восемь минут. Всё, что мы видим на небе, — ' +
        'это прошлое, просто разной давности.',
      tone: 'butter',
      icon: 'spark',
      image: '/images/subjects/physics.webp',
      focus: 'center 66%',   /* вертикальный кадр: держим в нём язык, а не только лоб */
    },
    {
      id: 'literature',
      name: 'Литература',
      hint: 'свой голос',
      text: 'Читаем так, чтобы было о чём сказать своими словами, а не чужими.',
      fact:
        'Слово «робот» родилось не в лаборатории, а в чешской пьесе 1920 года. ' +
        'Придумали его братья Чапеки, и в пьесе роботы устраивают восстание.',
      tone: 'coral',
      icon: 'quote',
      image: '/images/subjects/literature.webp',
    },
  ],
};

export type QuietTone = 'muted' | 'accent';

export interface QuietColumn {
  head: string;
  tone: QuietTone;
  image: string;
  alt: string;
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
      image: '/images/asoftenhappens.webp',
      alt:
        'Пластилиновая сцена: ровные ряды одинаковых парт, фигурки смотрят ' +
        'в одну сторону, одна рука поднята наполовину',
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
      image: '/images/likewehavehere.webp',
      alt:
        'Пластилиновая сцена: пятеро сидят вокруг круглого стола, склонившись ' +
        'над одной тетрадью, один объясняет жестом',
      items: [
        'непонятно — говори сразу, это правило',
        'ошибку разбирают, а не оценивают',
        'группа небольшая, темп общий',
        'спросить — самый короткий путь',
      ],
    },
  ],
};

/**
 * Преподаватели и дипломы.
 *
 * Фотографий людей нет — вместо них монограммы. Сканы сняты телефоном, три
 * из них боком и в разные стороны: `rotate` у каждого свой, проверен глазами.
 */
export interface Credential {
  /** Файл в public/images/certificates. */
  file: string;
  place: string;
  what: string;
  year: string;
  /** Что это за бумага — слово с самого документа: диплом, удостоверение, сертификат. */
  kind: string;
  /** Поворот скана в градусах, если снят боком. */
  rotate?: -90 | 90 | 180;
}

export interface Teacher {
  id: string;
  name: string;
  short: string;
  /** Стоят в рамке вместо портрета, пока фотографии нет. */
  initials: string;
  /** Путь к портрету в public. Появится файл — рамка сама заменит заглушку. */
  photo?: string;
  role: string;
  tone: TileTone;
  about: string;
  credentials: Credential[];
}

export interface TeachersContent {
  label: string;
  title: string;
  lead: string;
  people: Teacher[];
  docsTitle: string;
  docsHint: string;
}

export const TEACHERS: TeachersContent = {
  label: 'Преподаватели',
  title: 'Учителя, к которым можно прийти',
  lead:
    'Оба закончили университет по своему предмету и преподают больше тридцати лет.',
  docsTitle: 'Дипломы и сертификаты',
  docsHint: 'Нажмите, чтобы рассмотреть',
  people: [
    {
      id: 'oksana',
      name: 'Евец Оксана Станиславовна',
      short: 'Оксана Станиславовна',
      initials: 'ОС',
      role: 'Математика, физика, психология',
      tone: 'peach',
      about:
        'Математик по первому диплому и психолог по второму. Поэтому на её ' +
        'занятиях предмет и тревога разбираются одним человеком, а не по очереди.',
      credentials: [
        {
          file: '5251484220113234268.webp',
          place: 'Самарский государственный университет',
          what: 'Математик. Преподаватель',
          year: '1993',
          kind: 'Диплом',
        },
        {
          file: '5251484220113234273.webp',
          place: 'Самарский университет им. Королёва',
          what: 'Психолог по специальности «Психология»',
          year: '1998',
          kind: 'Диплом',
        },
        {
          file: '5251484220113234272.webp',
          place: 'Ассоциация тренинга и психотерапии, Санкт-Петербург',
          what: 'Нейролингвистическое программирование в консультировании, 30 ч.',
          year: '1999',
          kind: 'Удостоверение',
          rotate: -90,
        },
        {
          file: '5251484220113234269.webp',
          place: 'Ассоциация тренинга и психотерапии, Санкт-Петербург',
          what: 'Второй семинар по психологическому консультированию, 30 ч.',
          year: '2000',
          kind: 'Удостоверение',
        },
        {
          file: '5251484220113234267.webp',
          place: 'IV Запорожский психотерапевтический семинар, о. Хортица',
          what: '«Самооценка и самоосознавание»',
          year: '2001',
          kind: 'Сертификат',
          rotate: 90,
        },
        {
          file: '5251484220113234270.webp',
          place: 'Одесский психотерапевтический семинар',
          what: 'Участие в семинаре',
          year: '2004',
          kind: 'Сертификат',
          rotate: -90,
        },
      ],
    },
    {
      id: 'alexander',
      name: 'Евец Александр Борисович',
      short: 'Александр Борисович',
      initials: 'АБ',
      role: 'История, литература',
      tone: 'sage',
      about:
        'Историк, который ведёт ещё и литературу. Поэтому текст у него всегда ' +
        'стоит в своём времени, а не висит в пустоте.',
      credentials: [
        {
          file: '5251484220113234271.webp',
          place: 'Куйбышевский государственный университет',
          what: 'Историк. Преподаватель истории и обществоведения',
          year: '1990',
          kind: 'Диплом',
        },
      ],
    },
  ],
};

export interface ParentNote {
  icon: IconName;
  head: string;
  text: string;
  /** Пример сообщения в мокапе пуша — не повтор text, а его частный случай. */
  preview: string;
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
      preview:
        'Матвей быстро включился и сам предлагал варианты решения. Подойдёт ' +
        'группа с похожим темпом — обсудим при звонке.',
      tone: 'peach',
    },
    {
      icon: 'heart',
      head: 'Если что-то идёт не так',
      text: 'Психолог сам свяжется с вами, а не будет ждать родительского собрания.',
      preview:
        'Полина сегодня заметно тревожилась перед разбором задач. Предлагаем ' +
        'созвониться в ближайшие дни — расскажем, как ей помочь.',
      tone: 'sage',
    },
    {
      icon: 'chart',
      head: 'По ходу занятий',
      text: 'Скажем прямо, где ребёнку тяжело и что с этим делаем — без обтекаемых формулировок.',
      preview:
        'Соня уверенно считает в уме, но теряется в длинных условиях. ' +
        'Разбираем формулировки отдельно — прогресс уже заметен.',
      tone: 'surface',
    },
  ],
};

/* Порядок шагов и есть содержание раздела, поэтому нумерация здесь заслужена */
export interface LessonStep {
  head: string;
  text: string;
  tone: TileTone;
}

export interface LessonContent {
  label: string;
  title: string;
  lead: string;
  steps: LessonStep[];
}

export const LESSON: LessonContent = {
  label: 'Занятие',
  title: 'Как проходит занятие',
  lead: 'Полтора часа, четыре части. Порядок не меняется — к нему быстро привыкают.',
  steps: [
    {
      head: 'Разговор на входе',
      text: 'С чем пришёл сегодня: что не получилось в школе, что тревожит перед контрольной.',
      tone: 'surface',
    },
    {
      head: 'Разбор темы',
      text: 'Не пересказ параграфа, а вопросы к нему. Разбираем, пока не станет понятно всем.',
      tone: 'peach',
    },
    {
      head: 'Своя рука',
      text: 'Решает сам. Подсказка приходит, когда о ней попросили, а не вместо попытки.',
      tone: 'butter',
    },
    {
      head: 'Что дальше',
      text: 'Проговариваем, что вышло сегодня и что добираем в следующий раз.',
      tone: 'sage',
    },
  ],
};

export interface VisitContent {
  label: string;
  title: string;
  lead: string;
  callAction: string;
  mapTitle: string;
}

export const VISIT: VisitContent = {
  label: 'Как прийти',
  title: 'Первое занятие — пробное',
  lead:
    'Формы записи на сайте нет: позвоните, и мы подберём группу по возрасту и ' +
    'предмету. Разговор ни к чему не обязывает.',
  callAction: 'Позвонить',
  mapTitle: 'Карта: как доехать до клуба IQ 200',
};
