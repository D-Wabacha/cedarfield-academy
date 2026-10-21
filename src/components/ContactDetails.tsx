import { school } from '../config/school'
import { mailHref, telHref, whatsappHref } from '../lib/links'
import { Icon } from './Icon'

/** Call / WhatsApp / email tiles. */
export function ContactMethods({ light = false }: { light?: boolean }) {
  const tile = `flex items-center gap-4 rounded-xl border p-4 transition-colors ${light ? 'border-cream/15 bg-cream/5 text-cream hover:bg-cream/10' : 'border-sand bg-white hover:border-forest-700/40'}`
  const iconWrap = `flex size-11 shrink-0 items-center justify-center rounded-full ${light ? 'bg-gold-500 text-forest-950' : 'bg-forest-50 text-forest-800'}`
  const sub = light ? 'text-cream/70' : 'text-muted'
  return (
    <ul className="grid gap-3">
      <li>
        <a href={telHref()} className={tile}>
          <span className={iconWrap}><Icon name="phone" /></span>
          <span><span className="block font-semibold">Call the school office</span><span className={`text-sm ${sub}`}>{school.contact.phoneDisplay}</span></span>
        </a>
      </li>
      <li>
        <a href={whatsappHref()} target="_blank" rel="noopener noreferrer" className={tile}>
          <span className={iconWrap}><Icon name="whatsapp" /></span>
          <span><span className="block font-semibold">Message us on WhatsApp<span className="sr-only"> (opens in a new tab)</span></span><span className={`text-sm ${sub}`}>Quick questions, Monday to Friday</span></span>
        </a>
      </li>
      <li>
        <a href={mailHref()} className={tile}>
          <span className={iconWrap}><Icon name="mail" /></span>
          <span className="min-w-0"><span className="block font-semibold">Email admissions</span><span className={`block truncate text-sm ${sub}`}>{school.contact.email}</span></span>
        </a>
      </li>
    </ul>
  )
}

export function LocationCard() {
  const { mapEmbedUrl, directionsUrl, line1, line2 } = school.location
  return (
    <div className="overflow-hidden rounded-2xl border border-sand bg-white">
      {mapEmbedUrl ? (
        <iframe title={`Map showing ${school.name}`} src={mapEmbedUrl} loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="aspect-[16/10] w-full border-0" />
      ) : (
        <div className="relative flex aspect-[16/10] items-center justify-center overflow-hidden bg-forest-50" role="img" aria-label="Map placeholder">
          <svg aria-hidden className="absolute inset-0 size-full text-forest-100" preserveAspectRatio="none" viewBox="0 0 400 250">
            <path d="M0 180 C80 160 120 200 200 170 S320 120 400 140" stroke="currentColor" strokeWidth="14" fill="none" />
            <path d="M120 0 C130 80 100 150 140 250" stroke="currentColor" strokeWidth="10" fill="none" />
            <path d="M300 0 L280 250" stroke="currentColor" strokeWidth="6" fill="none" />
          </svg>
          <div className="relative text-center">
            <span className="mx-auto flex size-12 items-center justify-center rounded-full bg-forest-800 text-gold-300 shadow-lg"><Icon name="pin" className="size-6" /></span>
            <p className="mt-3 text-sm font-medium text-forest-900">Map embed placeholder</p>
            <p className="text-xs text-muted">Add a map URL in the school profile</p>
          </div>
        </div>
      )}
      <div className="flex flex-wrap items-end justify-between gap-4 p-6">
        <address className="not-italic">
          <span className="block font-semibold text-forest-900">{school.name}</span>
          <span className="block text-sm text-muted">{line1}</span>
          <span className="block text-sm text-muted">{line2}</span>
        </address>
        <a href={directionsUrl} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center gap-2 whitespace-nowrap rounded-full border border-forest-800/25 px-5 py-2.5 text-sm font-semibold text-forest-900 hover:bg-forest-50">
          <Icon name="pin" className="size-4" /> Get directions<span className="sr-only"> (opens in a new tab)</span>
        </a>
      </div>
    </div>
  )
}

export function OfficeHours() {
  return (
    <dl className="divide-y divide-sand rounded-2xl border border-sand bg-white">
      {school.hours.map((h) => (
        <div key={h.days} className="flex items-center justify-between gap-4 px-5 py-4 text-sm">
          <dt className="font-semibold text-forest-900">{h.days}</dt>
          <dd className="text-right text-muted">{h.time}</dd>
        </div>
      ))}
    </dl>
  )
}
