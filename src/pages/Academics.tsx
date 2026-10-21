import { school } from '../config/school'
import { programmes } from '../content/school-life'
import { Seo } from '../components/Seo'
import { PageHero } from '../components/PageHero'
import { Section, SectionHeading } from '../components/Section'
import { SmartImage } from '../components/SmartImage'
import { Icon } from '../components/Icon'
import { CtaBand } from '../components/CtaBand'
import { ButtonLink } from '../components/Button'
import { DemoNotice } from '../components/DemoNotice'

const pillars = [
  { icon: 'check' as const, title: 'Assessment for learning', text: 'Ongoing observation, projects and short tasks show what each child knows and what comes next. Families receive clear termly reports.' },
  { icon: 'users' as const, title: 'Learning support', text: 'Teachers adapt lessons for different needs, with small-group support for children who need more time or more challenge.' },
  { icon: 'cpu' as const, title: 'Digital literacy', text: 'From Grade 4, learners build skills in research, coding and safe online behaviour, with clear limits on screen time.' },
  { icon: 'globe' as const, title: 'Languages', text: 'English and Kiswahili are taught at every level, with reading in both languages encouraged at home and at school.' },
]

export default function Academics() {
  return (
    <>
      <Seo title="Academics & curriculum" description={`Programmes at ${school.name} from Pre-Primary to Junior School, organised around Kenya’s Competency-Based Curriculum.`} />
      <PageHero
        eyebrow="Academics & curriculum"
        title="Strong foundations, real-world skills"
        intro="Our programmes follow the structure of Kenya’s Competency-Based Curriculum (CBC), enriched with projects, technology, the arts and sport."
        image="reading"
      />

      {/* In-page navigation */}
      <nav aria-label="Programmes on this page" className="sticky top-[4.5rem] z-20 border-b border-sand bg-white/95">
        <ul className="container-site flex gap-2 overflow-x-auto py-3 text-sm font-semibold [scrollbar-width:none]">
          {programmes.map((p) => (
            <li key={p.slug} className="shrink-0">
              <a href={`#${p.slug}`} className="inline-flex min-h-10 items-center rounded-full border border-sand px-4 py-2 text-forest-900 hover:border-forest-700 hover:bg-forest-50">
                {p.name} <span className="ml-1.5 font-normal text-muted">{p.grades}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {programmes.map((p, i) => (
        <Section key={p.slug} id={p.slug} tone={i % 2 ? 'white' : 'cream'} labelledBy={`${p.slug}-title`}>
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
            <div className={`lg:col-span-5 ${i % 2 ? 'lg:order-2' : ''}`}>
              <SmartImage image={p.image} ratio={4 / 5} sizes="(min-width: 1024px) 40vw, 100vw" className="aspect-[4/3] w-full rounded-2xl lg:aspect-[4/5]" />
            </div>
            <div className="lg:col-span-7">
              <p className="eyebrow">{p.grades} · {p.ages}</p>
              <h2 id={`${p.slug}-title`} className="mt-3 text-3xl font-medium sm:text-4xl">{p.name}</h2>
              <p className="mt-4 text-lg leading-relaxed text-muted">{p.summary}</p>

              <div className="mt-8 grid gap-8 sm:grid-cols-2">
                <div>
                  <h3 className="font-sans text-sm font-semibold tracking-wide text-forest-900 uppercase">Focus areas</h3>
                  <ul className="mt-4 space-y-3">
                    {p.focus.map((x) => <li key={x} className="flex gap-3 text-sm"><Icon name="check" className="size-5 shrink-0 text-gold-600" />{x}</li>)}
                  </ul>
                </div>
                <div>
                  <h3 className="font-sans text-sm font-semibold tracking-wide text-forest-900 uppercase">Learning areas</h3>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {p.learningAreas.map((x) => <li key={x} className="rounded-full bg-forest-50 px-3 py-1.5 text-sm text-forest-900">{x}</li>)}
                  </ul>
                </div>
              </div>

              <details className="group mt-8 rounded-xl border border-sand bg-white">
                <summary className="flex min-h-12 cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 font-semibold text-forest-900 [&::-webkit-details-marker]:hidden">
                  <span className="flex items-center gap-2"><Icon name="clock" className="size-5 text-gold-600" />A typical day in {p.name}</span>
                  <Icon name="chevron-down" className="size-5 transition-transform group-open:rotate-180" />
                </summary>
                <ol className="border-t border-sand px-5 py-4">
                  {p.day.map((d) => (
                    <li key={d.time} className="flex gap-4 py-2 text-sm"><span className="w-12 shrink-0 font-semibold text-forest-800 tabular-nums">{d.time}</span><span className="text-muted">{d.activity}</span></li>
                  ))}
                </ol>
              </details>
            </div>
          </div>
        </Section>
      ))}

      <Section tone="forest" labelledBy="pillars-title">
        <SectionHeading light id="pillars-title" eyebrow="Across every level" title="How we support every learner" />
        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((x) => (
            <li key={x.title} className="rounded-2xl border border-cream/10 bg-cream/5 p-7">
              <span className="flex size-11 items-center justify-center rounded-full bg-gold-500 text-forest-950"><Icon name={x.icon} /></span>
              <h3 className="mt-5 text-xl font-medium text-cream">{x.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-cream/75">{x.text}</p>
            </li>
          ))}
        </ul>
        <DemoNotice className="mt-10 text-forest-900">Programme descriptions illustrate how a school could present CBC-based learning. They are not an official curriculum statement.</DemoNotice>
        <div className="mt-8"><ButtonLink to="/admissions" variant="gold">Admissions information <Icon name="arrow-right" className="size-4" /></ButtonLink></div>
      </Section>

      <CtaBand />
    </>
  )
}
