import type { Metadata } from 'next';
import { Comfortaa, Nunito } from 'next/font/google';
import './globals.css';

const comfortaa = Comfortaa({
  subsets: ['latin', 'cyrillic'],
  weight: ['500', '700'],
  variable: '--font-display',
});

const nunito = Nunito({
  subsets: ['latin', 'cyrillic'],
  weight: ['400', '600', '700', '800'],
  variable: '--font-text',
});

const FAVICON =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Crect width='32' height='32' rx='11' fill='%23F7C8A8'/%3E%3Crect x='7' y='7' width='18' height='18' rx='7' fill='%23F58B65'/%3E%3Ccircle cx='16' cy='16' r='4' fill='%23FBEAD8'/%3E%3C/svg%3E";

export const metadata: Metadata = {
  title: 'Клуб IQ 200 — спокойное место для учёбы. Самара, 12–16 лет',
  description:
    'Клуб IQ 200 в Самаре: математика, история, физика, литература для школьников 12–16 лет. Преподаватели вместе с психологами.',
  icons: {
    icon: FAVICON,
  },
};

export default function RootLayout({ children }: LayoutProps<'/'>) {
  return (
    <html lang="ru" className={`${comfortaa.variable} ${nunito.variable}`}>
      <body>{children}</body>
    </html>
  );
}
