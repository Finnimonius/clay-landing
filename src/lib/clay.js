/**
 * Вспомогательная геометрия «пластилиновой» версии.
 *
 * Значения считаются от фиксированного сида: скелет графика обязан выглядеть
 * одинаково при каждом рендере, иначе его нельзя проверить снимком.
 * Math.random запрещён.
 */

export function mulberry32(seed) {
  let a = seed >>> 0;
  return function next() {
    a = (a + 0x6D2B79F5) >>> 0;
    let t = a;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

/**
 * Высоты столбиков для СКЕЛЕТА графика.
 *
 * Это не данные о занятиях и ничего не измеряет — панель помечена как
 * заглушка. Форма нужна только чтобы было видно, какое место займёт
 * настоящий график.
 */
export function skeletonBars({ seed, count, min = 26, max = 92 }) {
  const rnd = mulberry32(seed);
  return Array.from({ length: count }, () => Math.round(min + rnd() * (max - min)));
}
