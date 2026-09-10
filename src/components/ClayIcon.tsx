import type { ReactNode } from 'react';

/**
 * Мягкие иконки: круглые концы линий, никаких острых углов — того же
 * характера, что и плитки. Пути авторские, случайности нет.
 */

export type IconName =
  | 'home'
  | 'grid'
  | 'heart'
  | 'bell'
  | 'chart'
  | 'plus'
  | 'book'
  | 'spark'
  | 'quote'
  | 'pin'
  | 'phone'
  | 'bulb'
  | 'menu'
  | 'sun'
  | 'moon'
  | 'tag';

const PATHS: Record<IconName, ReactNode> = {
  home: <path d="M4 13 14 5l10 8v9a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z" />,
  grid: (
    <>
      <rect x="4" y="4" width="8.5" height="8.5" rx="3" />
      <rect x="15.5" y="4" width="8.5" height="8.5" rx="3" />
      <rect x="4" y="15.5" width="8.5" height="8.5" rx="3" />
      <rect x="15.5" y="15.5" width="8.5" height="8.5" rx="3" />
    </>
  ),
  heart: <path d="M14 23s-9-5.4-9-11a5 5 0 0 1 9-2.8A5 5 0 0 1 23 12c0 5.6-9 11-9 11z" />,
  bell: (
    <>
      <path d="M7 12a7 7 0 0 1 14 0c0 5 2 6 2 6H5s2-1 2-6z" />
      <path d="M11.5 22a2.6 2.6 0 0 0 5 0" />
    </>
  ),
  chart: (
    <>
      <path d="M5 22V14" />
      <path d="M11.7 22V7" />
      <path d="M18.3 22v-6" />
      <path d="M24 22V10" />
    </>
  ),
  plus: (
    <>
      <path d="M14 6v16" />
      <path d="M6 14h16" />
    </>
  ),
  book: (
    <>
      <path d="M5 6a3 3 0 0 1 3-3h5v20H8a3 3 0 0 0-3 3z" />
      <path d="M23 6a3 3 0 0 0-3-3h-5v20h5a3 3 0 0 1 3 3z" />
    </>
  ),
  spark: (
    <>
      <circle cx="14" cy="14" r="3.6" />
      <path d="M14 3v3.4M14 21.6V25M3 14h3.4M21.6 14H25M6.2 6.2l2.4 2.4M19.4 19.4l2.4 2.4M21.8 6.2l-2.4 2.4M8.6 19.4l-2.4 2.4" />
    </>
  ),
  quote: (
    <>
      <path d="M6 17c-2 0-3-1.4-3-3.4C3 9.6 5.6 6.4 9.4 5" />
      <path d="M6 17h4.6c0 3.4-1.4 5.4-4.6 6" />
      <path d="M18 17c-2 0-3-1.4-3-3.4 0-4 2.6-7.2 6.4-8.6" />
      <path d="M18 17h4.6c0 3.4-1.4 5.4-4.6 6" />
    </>
  ),
  pin: (
    <>
      <path d="M14 25s-8-7.4-8-13.2A8 8 0 0 1 22 11.8C22 17.6 14 25 14 25z" />
      <circle cx="14" cy="11.6" r="3.2" />
    </>
  ),
  phone: (
    <path d="M24 19.6v3.1a2.1 2.1 0 0 1-2.3 2.1 20.6 20.6 0 0 1-9-3.2 20.3 20.3 0 0 1-6.2-6.2 20.6 20.6 0 0 1-3.2-9A2.1 2.1 0 0 1 5.4 4.2h3.1a2.1 2.1 0 0 1 2.1 1.8c.1 1 .4 2 .7 2.9a2.1 2.1 0 0 1-.5 2.2L9.5 12.4a16.6 16.6 0 0 0 6.2 6.2l1.3-1.3a2.1 2.1 0 0 1 2.2-.5c.9.3 1.9.6 2.9.7a2.1 2.1 0 0 1 1.9 2.1z" />
  ),
  bulb: (
    <>
      <path d="M14 4.2a7.4 7.4 0 0 1 4.3 13.4c-.8.6-1.3 1.5-1.3 2.5v.3h-6v-.3c0-1-.5-1.9-1.3-2.5A7.4 7.4 0 0 1 14 4.2z" />
      <path d="M11.4 23.4h5.2" />
      <path d="M11.9 20.4h4.2" />
    </>
  ),
  menu: (
    <>
      <path d="M5 8h18" />
      <path d="M5 14h18" />
      <path d="M5 20h18" />
    </>
  ),
  sun: (
    <>
      <circle cx="14" cy="14" r="5.4" />
      <path d="M14 3v3.4M14 21.6V25M3 14h3.4M21.6 14H25M6.2 6.2l2.4 2.4M19.4 19.4l2.4 2.4M21.8 6.2l-2.4 2.4M8.6 19.4l-2.4 2.4" />
    </>
  ),
  moon: <path d="M22.8 17.4A10 10 0 0 1 10.6 5.2a10 10 0 1 0 12.2 12.2z" />,
  tag: (
    <>
      <path d="M24 15.6 15.6 24a2.3 2.3 0 0 1-3.3 0L3.4 15a2.3 2.3 0 0 1-.7-1.6V4.8a2.1 2.1 0 0 1 2.1-2.1h8.6a2.3 2.3 0 0 1 1.6.7l8.4 8.4a2.3 2.3 0 0 1 0 3.8z" />
      <circle cx="8.6" cy="8.6" r="1.6" />
    </>
  ),
};

export interface ClayIconProps {
  name?: IconName;
  size?: number;
  className?: string;
}

export default function ClayIcon({ name = 'grid', size = 26, className }: ClayIconProps) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 28 28"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.3"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {PATHS[name] ?? PATHS.grid}
    </svg>
  );
}
