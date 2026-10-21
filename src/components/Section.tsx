import type { ReactNode } from 'react'

type Tone = 'cream' | 'white' | 'forest' | 'sand'

const tones: Record<Tone, string> = {
  cream: 'bg-cream',
  white: 'bg-white',
  forest: 'bg-forest-900 text-cream',
  sand: 'bg-cream-200',
}

export function Section({ id, tone = 'cream', className = '', children, labelledBy }: { id?: string; tone?: Tone; className?: string; children: ReactNode; labelledBy?: string }) {
  return (
    <section id={id} aria-labelledby={labelledBy} className={`py-16 sm:py-24 ${tones[tone]} ${className}`}>
      <div className="container-site">{children}</div>
    </section>
  )
}

export function SectionHeading({ id, eyebrow, title, intro, align = 'left', light = false, children }: {
  id?: string; eyebrow?: string; title: string; intro?: string; align?: 'left' | 'center'; light?: boolean; children?: ReactNode
}) {
  return (
    <div className={`mb-10 max-w-2xl sm:mb-14 ${align === 'center' ? 'mx-auto text-center' : ''}`}>
      {eyebrow && <p className={`eyebrow mb-3 ${light ? 'text-gold-300' : ''}`}>{eyebrow}</p>}
      <h2 id={id} className={`text-3xl leading-tight font-medium sm:text-4xl ${light ? 'text-cream' : ''}`}>{title}</h2>
      {intro && <p className={`mt-4 text-lg leading-relaxed ${light ? 'text-cream/80' : 'text-muted'}`}>{intro}</p>}
      {children}
    </div>
  )
}
