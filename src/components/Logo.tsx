import { school } from '../config/school'

export function LogoMark({ className = 'size-10' }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" className={className} aria-hidden focusable="false">
      <rect width="40" height="40" rx="10" fill="#123327" />
      <path d="M20 7 11 20h4.5L10 28h20l-5.5-8H29Z" fill="#dcc28a" />
      <rect x="18.6" y="28" width="2.8" height="5.5" rx="1" fill="#dcc28a" />
    </svg>
  )
}

export function Logo({ light = false }: { light?: boolean }) {
  return (
    <span className="flex items-center gap-3">
      <LogoMark />
      <span className="flex flex-col leading-none">
        <span className={`font-display text-xl font-medium ${light ? 'text-cream' : 'text-forest-900'}`}>{school.shortName}</span>
        <span className={`mt-1 text-[0.65rem] font-semibold tracking-[0.22em] uppercase ${light ? 'text-gold-300' : 'text-gold-600'}`}>Academy</span>
      </span>
    </span>
  )
}
