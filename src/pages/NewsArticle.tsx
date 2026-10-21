import { Link, useParams } from 'react-router-dom'
import { school } from '../config/school'
import { formatDate, sortedNews } from '../content/news'
import { Seo } from '../components/Seo'
import { SmartImage } from '../components/SmartImage'
import { Icon } from '../components/Icon'
import { NewsCard } from '../components/Cards'
import { CtaBand } from '../components/CtaBand'
import { DemoNotice } from '../components/DemoNotice'
import NotFound from './NotFound'

export default function NewsArticle() {
  const { slug } = useParams()
  const item = sortedNews.find((n) => n.slug === slug)
  if (!item) return <NotFound />
  const related = sortedNews.filter((n) => n.slug !== item.slug).slice(0, 3)

  return (
    <>
      <Seo title={item.title} description={item.excerpt} type="article" />
      <article>
        <header className="bg-forest-900 text-cream">
          <div className="container-site max-w-4xl py-12 sm:py-16">
            <nav aria-label="Breadcrumb" className="mb-8 text-sm">
              <ol className="flex flex-wrap items-center gap-2 text-cream/70">
                <li><Link to="/" className="hover:text-cream">Home</Link></li>
                <li aria-hidden>/</li>
                <li><Link to="/news" className="hover:text-cream">News</Link></li>
                <li aria-hidden>/</li>
                <li aria-current="page" className="text-cream">{item.category}</li>
              </ol>
            </nav>
            <p className="flex flex-wrap items-center gap-3 text-sm">
              <span className="rounded-full bg-gold-500 px-3 py-1 font-semibold text-forest-950">{item.category}</span>
              <time dateTime={item.date} className="text-cream/75">{formatDate(item.date)}</time>
            </p>
            <h1 tabIndex={-1} data-page-heading className="mt-5 text-4xl leading-tight font-medium text-cream outline-none sm:text-5xl">{item.title}</h1>
            <p className="mt-5 text-lg text-cream/80">{item.excerpt}</p>
          </div>
        </header>
        <div className="container-site max-w-4xl">
          <SmartImage image={item.image} ratio={16 / 9} priority sizes="(min-width: 896px) 896px, 100vw" className="-mt-px aspect-video w-full rounded-b-2xl sm:rounded-2xl sm:mt-10" />
          <div className="prose-site mx-auto max-w-2xl py-12">
            {item.body.map((p, i) => <p key={i}>{p}</p>)}
            <DemoNotice className="mt-8">This article is fictional demonstration content for {school.name}.</DemoNotice>
            <Link to="/news" className="mt-10 inline-flex items-center gap-2 font-semibold text-forest-800 hover:underline"><Icon name="arrow-left" className="size-4" /> Back to all news</Link>
          </div>
        </div>
      </article>

      <section aria-labelledby="more-news" className="border-t border-sand bg-white py-16">
        <div className="container-site">
          <h2 id="more-news" className="mb-8 text-3xl font-medium">More news</h2>
          <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((n) => <li key={n.slug} className="flex [&>article]:flex-1"><NewsCard item={n} /></li>)}
          </ul>
        </div>
      </section>
      <CtaBand />
    </>
  )
}
