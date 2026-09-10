import type { ReactNode } from 'react';

export type SubjectArtName = 'parabola' | 'temple' | 'atom' | 'book' | 'people';

const ART: Record<SubjectArtName, ReactNode> = {
  parabola: (
    <>
      <g opacity=".4">
        <path d="M18 6V50" />
        <path d="M12 46H110" />
        <path d="M12 30H15M12 14H15M34 46v3M84 46v3" />
        <path d="M60 41v5" strokeDasharray="0.5 5" />
      </g>
      <path d="M26 14Q60 64 94 14" />
      <circle cx="60" cy="41" r="3.2" fill="currentColor" stroke="none" />
      <circle cx="26" cy="14" r="2.6" fill="currentColor" stroke="none" />
      <circle cx="94" cy="14" r="2.6" fill="currentColor" stroke="none" />
    </>
  ),
  temple: (
    <>
      <path d="M22 21 60 8l38 13" />
      <path d="M25 27h70" />
      <path d="M34 27v19M50 27v19M70 27v19M86 27v19" opacity=".55" />
      <path d="M27 46h66" />
      <g opacity=".4">
        <path d="M21 52h78" />
        <path d="M15 58h90" />
      </g>
    </>
  ),
  atom: (
    <>
      <ellipse cx="60" cy="32" rx="33" ry="12" />
      <g opacity=".45">
        <ellipse cx="60" cy="32" rx="33" ry="12" transform="rotate(60 60 32)" />
        <ellipse cx="60" cy="32" rx="33" ry="12" transform="rotate(-60 60 32)" />
      </g>
      <circle cx="60" cy="32" r="4.5" fill="currentColor" stroke="none" />
      <circle cx="93" cy="32" r="3" fill="currentColor" stroke="none" />
      <circle cx="43.5" cy="60.6" r="2.4" fill="currentColor" stroke="none" opacity=".55" />
    </>
  ),
  book: (
    <>
      <path d="M60 18C50 12 36 10 24 12v34c12-2 26 0 36 6" />
      <path d="M60 18c10-6 24-8 36-6v34c-12-2-26 0-36 6" />
      <path d="M60 18v34" opacity=".55" />
      <g opacity=".4">
        <path d="M32 23h18M32 31h20M70 23h18M70 31h16" />
      </g>
    </>
  ),
  people: (
    <>
      <circle cx="28" cy="23" r="7" />
      <path d="M14 47a14 14 0 0 1 28 0" />
      <circle cx="60" cy="18" r="7.5" />
      <path d="M44 43a16 16 0 0 1 32 0" />
      <circle cx="92" cy="23" r="7" />
      <path d="M78 47a14 14 0 0 1 28 0" />
      <g opacity=".4">
        <path d="M12 53h96" />
      </g>
    </>
  ),
};

export interface SubjectArtProps {
  name: SubjectArtName;
  className?: string;
}

export default function SubjectArt({ name, className }: SubjectArtProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 120 64"
      preserveAspectRatio="xMidYMid meet"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {ART[name]}
    </svg>
  );
}
