import { Link } from 'react-router-dom'
import type { Programme } from '../content/school-life'
import { formatDate, type NewsItem } from '../content/news'
import { SmartImage } from './SmartImage'
import { Icon } from './Icon'

export function ProgrammeCard({ p }: { p: Programme }) {
  return (
    <article className="group relative flex flex-col overflow-hidden rounded-2xl border border-sand/70 bg-white shadow-sm transition-shadow hover:shadow-lg">
      <SmartImage image={p.image} ratio={4 / 3} sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw" className="aspect-[4/3] w-full" />
      <div className="flex flex-1 flex-col p-6">
        <p className="text-xs font-semibold tracking-wide text-gold-600 uppercase">{p.grades} · {p.ages}</p>
        <h3 className="mt-2 text-xl font-medium">
          <Link to={`/academics#${p.slug}`} className="after:absolute after:inset-0">{p.name}</Link>
        </h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{p.summary}</p>
        <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-forest-800" aria-hidden>
          Explore programme <Icon name="arrow-right" className="size-4 transition-transform group-hover:translate-x-1" />
        </span>
      </div>
    </article>
  )
}

export function NewsCard({ item, featured = false }: { item: NewsItem; featured?: boolean }) {
  return (
    <article className={`group relative flex flex-col overflow-hidden rounded-2xl border border-sand/70 bg-white shadow-sm transition-shadow hover:shadow-lg ${featured ? 'md:flex-row' : ''}`}>
      <SmartImage
        image={item.image}
        ratio={featured ? 4 / 3 : 16 / 10}
        sizes={featured ? '(min-width: 768px) 50vw, 100vw' : '(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw'}
        className={featured ? 'aspect-[16/10] w-full md:aspect-auto md:w-1/2' : 'aspect-[16/10] w-full'}
      />
      <div className={`flex flex-1 flex-col p-6 ${featured ? 'md:justify-center md:p-10' : ''}`}>
        <p className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs font-semibold text-muted">
          <span className="rounded-full bg-gold-100 px-2.5 py-1 text-gold-600">{item.category}</span>
          <time dateTime={item.date}>{formatDate(item.date)}</time>
        </p>
        <h3 className={`mt-3 font-medium ${featured ? 'text-2xl sm:text-3xl' : 'text-xl'}`}>
          <Link to={`/news/${item.slug}`} className="after:absolute after:inset-0 group-hover:underline group-hover:decoration-gold-500 group-hover:underline-offset-4">{item.title}</Link>
        </h3>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">{item.excerpt}</p>
        <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-forest-800" aria-hidden>
          Read more <Icon name="arrow-right" className="size-4 transition-transform group-hover:translate-x-1" />
        </span>
      </div>
    </article>
  )
}
