import { useState } from 'react'
import { school } from '../config/school'
import { activities, activityCategories, facilities, type ActivityCategory } from '../content/school-life'
import { Seo } from '../components/Seo'
import { PageHero } from '../components/PageHero'
import { Section, SectionHeading } from '../components/Section'
import { SmartImage } from '../components/SmartImage'
import { Icon } from '../components/Icon'
import { CtaBand } from '../components/CtaBand'

const categoryIcon: Record<ActivityCategory, 'ball' | 'palette' | 'cpu' | 'leaf'> = {
  Sport: 'ball', Creative: 'palette', STEM: 'cpu', 'Service & Leadership': 'leaf',
}

export default function SchoolLife() {
  const [filter, setFilter] = useState<ActivityCategory | 'All'>('All')
  const shown = filter === 'All' ? activities : activities.filter((a) => a.category === filter)
  const withPhoto = facilities.filter((f) => f.image)
  const withoutPhoto = facilities.filter((f) => !f.image)

  return (
    <>
      <Seo title="Facilities & activities" description={`Facilities, clubs and extracurricular activities at ${school.name}: library, laboratory, innovation lab, arts, music and sport.`} />
      <PageHero eyebrow="School life" title="Facilities and activities" intro="Inspiring spaces and a full programme of clubs help children discover what they love, build friendships and grow in confidence." image="football" />

      <Section labelledBy="facilities-title">
        <SectionHeading id="facilities-title" eyebrow="Facilities" title="Spaces designed for learning" />
        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {withPhoto.map((f) => (
            <li key={f.title} className="overflow-hidden rounded-2xl border border-sand/70 bg-white">
              {f.image && <SmartImage image={f.image} ratio={3 / 2} sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw" className="aspect-[3/2] w-full" />}
              <div className="p-6">
                <h3 className="flex items-center gap-2 text-xl font-medium"><Icon name={f.icon} className="size-5 text-gold-600" />{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{f.text}</p>
              </div>
            </li>
          ))}
        </ul>
        <ul className="mt-6 grid gap-4 md:grid-cols-3">
          {withoutPhoto.map((f) => (
            <li key={f.title} className="flex gap-4 rounded-2xl bg-forest-50 p-6">
              <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-white text-forest-800"><Icon name={f.icon} /></span>
              <div><h3 className="font-sans text-base font-semibold text-forest-900">{f.title}</h3><p className="mt-1 text-sm leading-relaxed text-muted">{f.text}</p></div>
            </li>
          ))}
        </ul>
      </Section>

      <Section tone="white" labelledBy="activities-title">
        <SectionHeading id="activities-title" eyebrow="Clubs & activities" title="Something for every interest" intro="Clubs run after lessons and at lunchtime. Most are included; a few specialist activities may carry a small termly charge." />
        <div role="group" aria-label="Filter activities" className="mb-8 flex flex-wrap gap-2">
          {(['All', ...activityCategories] as const).map((c) => (
            <button
              key={c}
              type="button"
              aria-pressed={filter === c}
              onClick={() => setFilter(c)}
              className={`min-h-11 rounded-full border px-4 py-2 text-sm font-semibold transition-colors ${filter === c ? 'border-forest-800 bg-forest-800 text-cream' : 'border-sand bg-white text-forest-900 hover:border-forest-700/50'}`}
            >
              {c}
            </button>
          ))}
        </div>
        <p aria-live="polite" className="sr-only">{shown.length} activities shown</p>
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {shown.map((a) => (
            <li key={a.name} className="flex gap-4 rounded-xl border border-sand p-5">
              <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-gold-100 text-gold-600"><Icon name={categoryIcon[a.category]} className="size-5" /></span>
              <div>
                <h3 className="font-sans text-base font-semibold text-forest-900">{a.name}</h3>
                <p className="text-sm text-muted">{a.text}</p>
                <p className="mt-1 text-xs font-semibold text-gold-600">{a.category}</p>
              </div>
            </li>
          ))}
        </ul>
      </Section>

      <Section tone="sand" labelledBy="beyond-title">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading id="beyond-title" eyebrow="Beyond the timetable" title="Houses, trips and traditions" />
            <ul className="space-y-5">
              {[
                ['Houses', 'Every learner belongs to a house, earning points for effort, kindness and teamwork.'],
                ['Learning trips', 'Termly visits to museums, nature reserves and local businesses bring lessons to life.'],
                ['Celebrations', 'Sports day, a culture day, a science showcase and end-of-year performances bring families together.'],
              ].map(([t, d]) => (
                <li key={t} className="border-l-2 border-gold-500 pl-5"><h3 className="font-sans text-lg font-semibold text-forest-900">{t}</h3><p className="mt-1 text-muted">{d}</p></li>
              ))}
            </ul>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <SmartImage image="athletics" ratio={3 / 4} sizes="(min-width: 1024px) 25vw, 50vw" className="aspect-[3/4] w-full rounded-2xl" />
            <SmartImage image="smiles" ratio={3 / 4} sizes="(min-width: 1024px) 25vw, 50vw" className="mt-10 aspect-[3/4] w-full rounded-2xl" />
          </div>
        </div>
      </Section>

      <CtaBand title="See our facilities in person" />
    </>
  )
}
