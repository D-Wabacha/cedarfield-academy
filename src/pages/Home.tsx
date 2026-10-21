import { Link } from 'react-router-dom'
import { school } from '../config/school'
import { approach, facilities, gallery, programmes, values } from '../content/school-life'
import { sortedNews } from '../content/news'
import { whatsappHref } from '../lib/links'
import { Seo } from '../components/Seo'
import { SmartImage } from '../components/SmartImage'
import { ButtonLink } from '../components/Button'
import { Section, SectionHeading } from '../components/Section'
import { Icon } from '../components/Icon'
import { NewsCard, ProgrammeCard } from '../components/Cards'
import { Gallery } from '../components/Gallery'
import { EnquiryForm } from '../components/EnquiryForm'
import { ContactMethods, LocationCard } from '../components/ContactDetails'
import { DemoNotice } from '../components/DemoNotice'

export default function Home() {
  const [featured, ...rest] = sortedNews
  return (
    <>
      <Seo description={school.description} />

      {/* Hero */}
      <section aria-labelledby="hero-title" className="relative overflow-hidden bg-forest-900 text-cream">
        <div className="container-site grid items-center gap-10 py-12 sm:py-16 lg:grid-cols-12 lg:gap-14 lg:py-24">
          <div className="lg:col-span-6">
            <p className="eyebrow mb-5 inline-flex items-center gap-2 rounded-full border border-gold-300/30 px-3 py-1.5 text-gold-300">
              <span className="size-1.5 rounded-full bg-gold-300" aria-hidden /> Admissions enquiries open
            </p>
            <h1 id="hero-title" tabIndex={-1} data-page-heading className="text-[2.6rem] leading-[1.05] font-medium text-cream outline-none sm:text-6xl lg:text-[3.6rem] xl:text-[4.2rem]">
              A place to grow <em className="font-normal text-gold-300 not-italic sm:italic">curious, kind</em> and capable.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-cream/80">
              {school.name} is a day school in Nairobi for children aged 4 to 14, from Pre-Primary to Junior School. We pair strong foundations in learning with character, creativity, technology and play.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <ButtonLink to="/admissions#enquire" variant="gold">Make an admissions enquiry <Icon name="arrow-right" className="size-4" /></ButtonLink>
              <ButtonLink href={whatsappHref('Hello Cedarfield Academy, I would like to book a school tour.')} external variant="ghost-light">
                <Icon name="whatsapp" className="size-4" /> Book a tour
              </ButtonLink>
            </div>
            <dl className="mt-10 grid max-w-lg grid-cols-3 gap-4 border-t border-cream/15 pt-6 text-sm">
              <div><dt className="text-cream/60">Ages</dt><dd className="mt-1 font-semibold text-cream">4 – 14</dd></div>
              <div><dt className="text-cream/60">Levels</dt><dd className="mt-1 font-semibold text-cream">PP1 – Grade 9</dd></div>
              <div><dt className="text-cream/60">Curriculum</dt><dd className="mt-1 font-semibold text-cream">CBC-based</dd></div>
            </dl>
          </div>
          <div className="relative lg:col-span-6">
            <SmartImage image="hero" ratio={5 / 4} priority sizes="(min-width: 1024px) 50vw, 100vw" className="aspect-[5/4] w-full rounded-3xl" />
            <div className="absolute -bottom-6 left-4 hidden max-w-xs rounded-2xl bg-cream p-5 text-ink shadow-xl sm:block lg:-left-10">
              <p className="flex items-center gap-2 text-sm font-semibold text-forest-900"><Icon name="calendar" className="size-4 text-gold-600" /> Visit us</p>
              <p className="mt-1 text-sm text-muted">Guided tours on Tuesdays and Thursdays, by appointment.</p>
            </div>
          </div>
        </div>
        <div aria-hidden className="h-1.5 bg-gradient-to-r from-gold-500 via-gold-300 to-gold-500 opacity-80" />
      </section>

      {/* Quick pathways for parents */}
      <nav aria-label="Popular for parents" className="border-b border-sand bg-white">
        <ul className="container-site grid grid-cols-2 gap-px py-2 text-sm font-semibold md:grid-cols-4">
          {[
            { to: '/academics', label: 'Programmes by age', icon: 'book' as const },
            { to: '/admissions', label: 'How to apply', icon: 'check' as const },
            { to: '/school-life', label: 'Facilities & clubs', icon: 'ball' as const },
            { to: '/contact', label: 'Visit or contact us', icon: 'pin' as const },
          ].map((l) => (
            <li key={l.to}>
              <Link to={l.to} className="flex min-h-14 items-center gap-3 rounded-lg px-3 py-3 text-forest-900 hover:bg-forest-50">
                <Icon name={l.icon} className="size-5 shrink-0 text-gold-600" /> {l.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Values & approach */}
      <Section labelledBy="values-title">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHeading id="values-title" eyebrow="Our values" title="Rooted in care, reaching for more" intro="Our values shape how we teach, how we treat one another and how we work with families." />
            <div className="space-y-5">
              {approach.map((a) => (
                <div key={a.title} className="border-l-2 border-gold-500 pl-5">
                  <h3 className="font-sans text-base font-semibold text-forest-900">{a.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted">{a.text}</p>
                </div>
              ))}
            </div>
          </div>
          <ul className="grid gap-4 self-start sm:grid-cols-2 lg:col-span-7">
            {values.map((v) => (
              <li key={v.title} className="rounded-2xl border border-sand/80 bg-white p-7">
                <span className="flex size-12 items-center justify-center rounded-xl bg-forest-50 text-forest-800"><Icon name={v.icon} className="size-6" /></span>
                <h3 className="mt-5 text-2xl font-medium">{v.title}</h3>
                <p className="mt-2 leading-relaxed text-muted">{v.text}</p>
              </li>
            ))}
            <li className="sm:col-span-2">
              <SmartImage image="classroom" ratio={21 / 9} sizes="(min-width: 1024px) 58vw, 100vw" className="aspect-[21/9] w-full rounded-2xl" />
            </li>
          </ul>
        </div>
      </Section>

      {/* Programmes */}
      <Section tone="sand" labelledBy="programmes-title">
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading id="programmes-title" eyebrow="Academic programmes" title="A clear pathway from age 4 to 14" intro="Four connected stages, each designed around how children of that age learn best." />
          <ButtonLink to="/academics" variant="outline" className="mb-10 shrink-0 sm:mb-14">View curriculum</ButtonLink>
        </div>
        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {programmes.map((p) => <li key={p.slug} className="flex"><ProgrammeCard p={p} /></li>)}
        </ul>
      </Section>

      {/* Facilities & activities */}
      <Section tone="forest" labelledBy="facilities-title">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-5">
            <SectionHeading light id="facilities-title" eyebrow="Facilities & activities" title="Space to learn, make, move and play" intro="Purpose-built spaces and more than a dozen clubs give every child somewhere to shine, inside and outside the classroom." />
            <ul className="grid grid-cols-2 gap-3 text-sm">
              {facilities.slice(0, 8).map((fac) => (
                <li key={fac.title} className="flex items-center gap-2.5 text-cream/90"><Icon name={fac.icon} className="size-4 shrink-0 text-gold-300" />{fac.title}</li>
              ))}
            </ul>
            <ButtonLink to="/school-life" variant="gold" className="mt-10">Explore school life <Icon name="arrow-right" className="size-4" /></ButtonLink>
          </div>
          <div className="grid grid-cols-2 gap-4 lg:col-span-7">
            <SmartImage image="science" ratio={3 / 4} sizes="(min-width: 1024px) 28vw, 50vw" className="aspect-[3/4] w-full rounded-2xl" />
            <div className="grid gap-4">
              <SmartImage image="football" ratio={4 / 3} sizes="(min-width: 1024px) 28vw, 50vw" className="aspect-[4/3] w-full rounded-2xl" />
              <SmartImage image="art" ratio={4 / 3} sizes="(min-width: 1024px) 28vw, 50vw" className="aspect-[4/3] w-full rounded-2xl" />
            </div>
          </div>
        </div>
      </Section>

      {/* Gallery */}
      <Section labelledBy="gallery-title">
        <SectionHeading id="gallery-title" eyebrow="Gallery" title="A glimpse of everyday life" intro="Select a photo to view it larger." />
        <Gallery items={gallery} />
        <DemoNotice className="mt-6">Gallery photos are licensed stock images used for illustration. They do not show a real campus, students or staff.</DemoNotice>
      </Section>

      {/* News */}
      <Section tone="white" labelledBy="news-title">
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading id="news-title" eyebrow="News & announcements" title="What’s happening at Cedarfield" />
          <ButtonLink to="/news" variant="outline" className="mb-10 shrink-0 sm:mb-14">All news</ButtonLink>
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          <div className="lg:col-span-3"><NewsCard item={featured} featured /></div>
          {rest.slice(0, 3).map((n) => <NewsCard key={n.slug} item={n} />)}
        </div>
      </Section>

      {/* Enquiry & contact */}
      <Section id="enquire" tone="sand" labelledBy="enquire-title">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHeading id="enquire-title" eyebrow="Get in touch" title="Start a conversation with us" intro="Tell us a little about what you’re looking for and our admissions team will be in touch. Or reach us directly." />
            <ContactMethods />
            <div className="mt-6"><LocationCard /></div>
          </div>
          <div className="rounded-3xl border border-sand bg-white p-6 shadow-sm sm:p-10 lg:col-span-7">
            <h3 className="text-2xl font-medium">Quick admissions enquiry</h3>
            <p className="mt-2 mb-8 text-muted">Takes about a minute. For more detail, use the <Link to="/admissions#enquire" className="font-semibold text-forest-800 underline underline-offset-2">full enquiry form</Link>.</p>
            <EnquiryForm compact />
          </div>
        </div>
      </Section>
    </>
  )
}
