import { useState } from 'react'
import { school } from '../config/school'
import { sortedNews, type NewsCategory } from '../content/news'
import { Seo } from '../components/Seo'
import { PageHero } from '../components/PageHero'
import { Section } from '../components/Section'
import { NewsCard } from '../components/Cards'
import { DemoNotice } from '../components/DemoNotice'

const categories: (NewsCategory | 'All')[] = ['All', 'Admissions', 'Events', 'Academics', 'Community']

export default function News() {
  const [filter, setFilter] = useState<NewsCategory | 'All'>('All')
  const shown = filter === 'All' ? sortedNews : sortedNews.filter((n) => n.category === filter)
  return (
    <>
      <Seo title="News & announcements" description={`Latest news, events and announcements from ${school.name}.`} />
      <PageHero eyebrow="News & announcements" title="Life at Cedarfield, as it happens" intro="Updates on admissions, events, learning and our community. Families can also expect a termly newsletter by email." />
      <Section labelledBy="news-list-title">
        <h2 id="news-list-title" className="sr-only">All articles</h2>
        <DemoNotice className="mb-8">All news items are fictional examples showing how a school could share updates.</DemoNotice>
        <div role="group" aria-label="Filter news by category" className="mb-8 flex flex-wrap gap-2">
          {categories.map((c) => (
            <button key={c} type="button" aria-pressed={filter === c} onClick={() => setFilter(c)}
              className={`min-h-11 rounded-full border px-4 py-2 text-sm font-semibold transition-colors ${filter === c ? 'border-forest-800 bg-forest-800 text-cream' : 'border-sand bg-white text-forest-900 hover:border-forest-700/50'}`}>
              {c}
            </button>
          ))}
        </div>
        <p aria-live="polite" className="sr-only">{shown.length} articles shown</p>
        {shown.length ? (
          <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {shown.map((n) => <li key={n.slug} className="flex [&>article]:flex-1"><NewsCard item={n} /></li>)}
          </ul>
        ) : (
          <p className="rounded-xl border border-sand bg-white p-8 text-center text-muted">No articles in this category yet.</p>
        )}
      </Section>
    </>
  )
}
