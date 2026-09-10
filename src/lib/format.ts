export function spaced(value: string | number): string {
  return String(value).replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
}
