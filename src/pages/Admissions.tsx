import { school } from '../config/school'
import { admissionsGuidePath, admissionsIntro, admissionsSteps, faqs, feesNote, keyDates, requirements } from '../content/admissions'
import { whatsappHref } from '../lib/links'
import { Seo } from '../components/Seo'
import { PageHero } from '../components/PageHero'
import { Section, SectionHeading } from '../components/Section'
import { Icon } from '../components/Icon'
import { ButtonLink } from '../components/Button'
import { EnquiryForm } from '../components/EnquiryForm'
import { ContactMethods } from '../components/ContactDetails'
import { DemoNotice } from '../components/DemoNotice'

export default function Admissions() {
  return (
    <>
      <Seo title="Admissions" description={`How to apply to ${school.name}: steps, key dates, requirements, FAQs and an admissions enquiry form.`} />
      <PageHero eyebrow="Admissions" title="Joining Cedarfield, step by step" intro={admissionsIntro} image="backpacks">
        <ButtonLink href="#enquire" variant="gold">Make an enquiry <Icon name="arrow-right" className="size-4" /></ButtonLink>
        <ButtonLink href={admissionsGuidePath} download variant="ghost-light"><Icon name="download" className="size-4" /> Admissions guide (PDF)</ButtonLink>
      </PageHero>

      <Section labelledBy="steps-title">
        <SectionHeading id="steps-title" eyebrow="The process" title="Five simple steps" intro="Most families complete the process within a few weeks. We are happy to go at your pace." />
        <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {admissionsSteps.map((s, i) => (
            <li key={s.title} className="relative rounded-2xl border border-sand bg-white p-6">
              <span className="font-display text-4xl text-gold-500">{String(i + 1).padStart(2, '0')}</span>
              <h3 className="mt-3 font-sans text-base font-semibold text-forest-900">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{s.text}</p>
            </li>
          ))}
        </ol>
      </Section>

      <Section tone="white" labelledBy="info-title">
        <h2 id="info-title" className="sr-only">Admissions information</h2>
        <div className="grid gap-6 lg:grid-cols-3">
          <div className="rounded-2xl bg-forest-900 p-8 text-cream">
            <h3 className="flex items-center gap-2 text-2xl font-medium text-cream"><Icon name="calendar" className="size-6 text-gold-300" /> Key dates</h3>
            <dl className="mt-6 space-y-4">
              {keyDates.map((d) => (
                <div key={d.label} className="border-b border-cream/10 pb-4 last:border-0 last:pb-0">
                  <dt className="text-sm text-cream/65">{d.label}</dt>
                  <dd className="mt-1 font-semibold">{d.value}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="rounded-2xl border border-sand p-8">
            <h3 className="text-2xl font-medium">What you’ll need</h3>
            <p className="mt-2 text-sm text-muted">Requested at application stage, not at enquiry.</p>
            <ul className="mt-5 space-y-3">
              {requirements.map((r) => <li key={r} className="flex gap-3 text-sm"><Icon name="check" className="size-5 shrink-0 text-gold-600" />{r}</li>)}
            </ul>
          </div>
          <div className="flex flex-col rounded-2xl border border-sand bg-cream p-8">
            <h3 className="text-2xl font-medium">Fees & guide</h3>
            <p className="mt-3 flex-1 leading-relaxed text-muted">{feesNote}</p>
            <a href={admissionsGuidePath} download className="mt-6 flex items-center gap-4 rounded-xl border border-sand bg-white p-4 hover:border-forest-700/40">
              <span className="flex size-12 shrink-0 items-center justify-center rounded-lg bg-forest-800 text-cream"><Icon name="download" /></span>
              <span><span className="block font-semibold text-forest-900">Download admissions guide</span><span className="text-sm text-muted">PDF · 2 pages · sample document</span></span>
            </a>
          </div>
        </div>
      </Section>

      <Section tone="sand" labelledBy="faq-title">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <SectionHeading id="faq-title" eyebrow="FAQs" title="Questions families often ask" />
            <p className="-mt-6 text-muted">Can’t find your answer? <a href={whatsappHref()} target="_blank" rel="noopener noreferrer" className="font-semibold text-forest-800 underline underline-offset-2">Ask us on WhatsApp<span className="sr-only"> (opens in a new tab)</span></a>.</p>
          </div>
          <div className="divide-y divide-sand rounded-2xl border border-sand bg-white lg:col-span-8">
            {faqs.map((f) => (
              <details key={f.q} className="group">
                <summary className="flex min-h-14 cursor-pointer list-none items-center justify-between gap-4 px-6 py-5 text-left font-semibold text-forest-900 [&::-webkit-details-marker]:hidden">
                  {f.q}
                  <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-forest-50 transition-transform group-open:rotate-180"><Icon name="chevron-down" className="size-4" /></span>
                </summary>
                <p className="px-6 pb-6 leading-relaxed text-muted">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </Section>

      <Section id="enquire" labelledBy="enquire-title">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <SectionHeading id="enquire-title" eyebrow="Enquire" title="Admissions enquiry" intro="Send us a few details and we’ll get back to you within two working days." />
            <ContactMethods />
          </div>
          <div className="rounded-3xl border border-sand bg-white p-6 shadow-sm sm:p-10 lg:col-span-8">
            <DemoNotice className="mb-8">This is a demonstration form. Your entries are checked in the browser only and are never sent or saved.</DemoNotice>
            <EnquiryForm />
          </div>
        </div>
      </Section>
    </>
  )
}
