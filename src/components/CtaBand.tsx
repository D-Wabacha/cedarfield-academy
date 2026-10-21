import { ButtonLink } from './Button'
import { Icon } from './Icon'
import { whatsappHref } from '../lib/links'

export function CtaBand({ title = 'Come and see Cedarfield for yourself', text = 'Book a guided tour, ask a question or start your admissions enquiry. We would love to meet your family.' }: { title?: string; text?: string }) {
  return (
    <section aria-labelledby="cta-title" className="bg-cream py-16 sm:py-20">
      <div className="container-site">
        <div className="relative overflow-hidden rounded-3xl bg-forest-900 px-6 py-12 text-center sm:px-12 sm:py-16">
          <div aria-hidden className="absolute -top-24 -right-24 size-72 rounded-full border border-gold-300/20" />
          <div aria-hidden className="absolute -bottom-32 -left-16 size-80 rounded-full border border-gold-300/10" />
          <h2 id="cta-title" className="relative mx-auto max-w-2xl text-3xl font-medium text-cream sm:text-4xl">{title}</h2>
          <p className="relative mx-auto mt-4 max-w-xl text-lg text-cream/80">{text}</p>
          <div className="relative mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <ButtonLink to="/admissions#enquire" variant="gold">Start an enquiry <Icon name="arrow-right" className="size-4" /></ButtonLink>
            <ButtonLink href={whatsappHref('Hello Cedarfield Academy, I would like to book a school tour.')} external variant="ghost-light"><Icon name="whatsapp" className="size-4" /> Book a tour on WhatsApp</ButtonLink>
          </div>
        </div>
      </div>
    </section>
  )
}
