import type { ReactNode } from 'react'
import type { ImageKey } from '../content/images'
import { SmartImage } from './SmartImage'

/** Inner-page header: title, intro and an optional photograph. */
export function PageHero({ eyebrow, title, intro, image, children }: { eyebrow: string; title: string; intro: string; image?: ImageKey; children?: ReactNode }) {
  return (
    <header className="relative overflow-hidden bg-forest-900 text-cream">
      <div className="container-site grid items-center gap-10 py-14 sm:py-20 lg:grid-cols-12 lg:py-24">
        <div className={image ? 'lg:col-span-6' : 'lg:col-span-8'}>
          <p className="eyebrow mb-4 text-gold-300">{eyebrow}</p>
          <h1 tabIndex={-1} data-page-heading className="text-4xl leading-[1.1] font-medium text-cream outline-none sm:text-5xl">{title}</h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-cream/80">{intro}</p>
          {children && <div className="mt-8 flex flex-wrap gap-3">{children}</div>}
        </div>
        {image && (
          <div className="lg:col-span-6">
            <SmartImage image={image} ratio={4 / 3} priority sizes="(min-width: 1024px) 50vw, 100vw" className="aspect-[4/3] w-full rounded-2xl" />
          </div>
        )}
      </div>
      <div aria-hidden className="h-1.5 bg-gradient-to-r from-gold-500 via-gold-300 to-gold-500 opacity-80" />
    </header>
  )
}
