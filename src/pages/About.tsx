import { school } from '../config/school'
import { approach, values } from '../content/school-life'
import { Seo } from '../components/Seo'
import { PageHero } from '../components/PageHero'
import { Section, SectionHeading } from '../components/Section'
import { SmartImage } from '../components/SmartImage'
import { Icon } from '../components/Icon'
import { CtaBand } from '../components/CtaBand'
import { DemoNotice } from '../components/DemoNotice'
import { ButtonLink } from '../components/Button'

const leadership = [
  { role: 'Head of School', name: 'Name to be added', note: 'Leads teaching, learning and the school’s long-term direction.' },
  { role: 'Head of Pre-Primary', name: 'Name to be added', note: 'Oversees early years learning, wellbeing and transition to Grade 1.' },
  { role: 'Head of Primary', name: 'Name to be added', note: 'Leads Grades 1 to 6, curriculum planning and learner support.' },
  { role: 'Head of Junior School', name: 'Name to be added', note: 'Guides Grades 7 to 9, mentoring and pathway guidance.' },
]

const pastoral = [
  { icon: 'users' as const, title: 'Mentor groups', text: 'Every learner has a named adult who checks in regularly and is the first point of contact for families.' },
  { icon: 'heart' as const, title: 'Wellbeing first', text: 'Clear routines, calm classrooms and conversations about feelings help children feel settled and ready to learn.' },
  { icon: 'shield' as const, title: 'Safeguarding', text: 'Visitor procedures, supervised arrival and pick-up, and trained staff help keep children safe.' },
  { icon: 'globe' as const, title: 'Partnership with families', text: 'Termly consultations, regular updates and an open-door culture keep families informed and involved.' },
]

export default function About() {
  return (
    <>
      <Seo title="About the school" description={`Learn about ${school.name}: our story, values, approach to learning and how we care for every child.`} />
      <PageHero eyebrow="About us" title="A modern school with a nurturing heart" intro={`${school.name} brings together strong academics, personal development, technology and play, in a community where every child is known.`} image="campus" />

      <Section labelledBy="story-title">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <SectionHeading id="story-title" eyebrow="Our story" title="Why Cedarfield?" />
            <div className="prose-site">
              <p>We believe school should be a place where children feel safe enough to be curious and challenged enough to grow. That belief shapes every decision, from how we design classrooms to how we talk with families.</p>
              <p>The cedar in our name is a reminder of what we hope for every learner: deep roots in good values and steady growth over time. Our teachers focus on strong foundations in reading, writing and mathematics, while giving children room to create, investigate, move and lead.</p>
              <p>We are a day school for children from Pre-Primary to Junior School, which means many children grow up with us across ten years. That continuity lets us know each child well and plan their next steps with care.</p>
            </div>
            <DemoNotice className="mt-4">This school, its history and its people are fictional. A real school would describe its own founding, mission and community here.</DemoNotice>
          </div>
          <aside className="lg:col-span-5">
            <div className="rounded-2xl bg-forest-900 p-8 text-cream">
              <p className="eyebrow text-gold-300">Our mission</p>
              <p className="mt-4 font-display text-2xl leading-snug">“To nurture curious, kind and capable young people who are ready for the world and ready to improve it.”</p>
            </div>
            <dl className="mt-6 grid grid-cols-2 gap-4">
              {[
                ['Ages', school.ageRange.replace('Ages ', '')],
                ['Levels', 'PP1 – Grade 9'],
                ['School type', 'Mixed day school'],
                ['Location', 'Nairobi'],
              ].map(([k, v]) => (
                <div key={k} className="rounded-xl border border-sand bg-white p-5"><dt className="text-sm text-muted">{k}</dt><dd className="mt-1 font-semibold text-forest-900">{v}</dd></div>
              ))}
            </dl>
          </aside>
        </div>
      </Section>

      <Section tone="sand" labelledBy="values-title">
        <SectionHeading id="values-title" eyebrow="Our values" title="What we stand for" align="center" />
        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((v) => (
            <li key={v.title} className="rounded-2xl bg-white p-7 text-center">
              <span className="mx-auto flex size-14 items-center justify-center rounded-full bg-forest-50 text-forest-800"><Icon name={v.icon} className="size-6" /></span>
              <h3 className="mt-5 text-xl font-medium">{v.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{v.text}</p>
            </li>
          ))}
        </ul>
      </Section>

      <Section labelledBy="approach-title">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <SmartImage image="chalkboard" ratio={4 / 3} sizes="(min-width: 1024px) 50vw, 100vw" className="aspect-[4/3] w-full rounded-2xl" />
          <div>
            <SectionHeading id="approach-title" eyebrow="Educational approach" title="How children learn at Cedarfield" />
            <ol className="space-y-6">
              {approach.map((a, i) => (
                <li key={a.title} className="flex gap-5">
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-full border border-gold-500 font-display text-gold-600">{i + 1}</span>
                  <div><h3 className="font-sans text-lg font-semibold text-forest-900">{a.title}</h3><p className="mt-1 leading-relaxed text-muted">{a.text}</p></div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </Section>

      <Section tone="white" labelledBy="pastoral-title">
        <SectionHeading id="pastoral-title" eyebrow="Care & wellbeing" title="Every child known, every child supported" />
        <ul className="grid gap-6 md:grid-cols-2">
          {pastoral.map((p) => (
            <li key={p.title} className="flex gap-5 rounded-2xl border border-sand p-7">
              <span className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-gold-100 text-gold-600"><Icon name={p.icon} className="size-6" /></span>
              <div><h3 className="text-xl font-medium">{p.title}</h3><p className="mt-2 leading-relaxed text-muted">{p.text}</p></div>
            </li>
          ))}
        </ul>
      </Section>

      <Section tone="sand" labelledBy="leadership-title">
        <SectionHeading id="leadership-title" eyebrow="Leadership" title="The team behind the school" intro="In a live site, this section introduces the leadership team with photos and short profiles." />
        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {leadership.map((l) => (
            <li key={l.role} className="rounded-2xl bg-white p-6">
              <span className="flex size-16 items-center justify-center rounded-full bg-forest-100 text-forest-700" aria-hidden><Icon name="users" className="size-7" /></span>
              <h3 className="mt-5 font-sans text-base font-semibold text-forest-900">{l.role}</h3>
              <p className="text-sm text-gold-600 italic">{l.name}</p>
              <p className="mt-3 text-sm leading-relaxed text-muted">{l.note}</p>
            </li>
          ))}
        </ul>
        <div className="mt-10"><ButtonLink to="/academics" variant="outline">See our academic programmes</ButtonLink></div>
      </Section>

      <CtaBand />
    </>
  )
}
