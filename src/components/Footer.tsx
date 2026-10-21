import { Link } from 'react-router-dom'
import { navigation } from '../config/navigation'
import { school } from '../config/school'
import { mailHref, telHref, whatsappHref } from '../lib/links'
import { Icon } from './Icon'
import { Logo } from './Logo'

export function Footer() {
  const socials = school.social.filter((s) => s.href)
  return (
    <footer className="bg-forest-950 text-cream/80">
      <div className="container-site grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-[1.1fr_1fr_1.3fr_1fr]">
        <div className="lg:col-span-1">
          <Logo light />
          <p className="mt-5 max-w-xs text-sm leading-relaxed">{school.tagline}</p>
          <p className="mt-3 text-sm text-cream/60">{school.ageRange} · {school.levelsSummary}</p>
        </div>

        <nav aria-label="Footer">
          <h2 className="mb-4 font-sans text-sm font-semibold tracking-wide text-cream">Explore</h2>
          <ul className="grid grid-cols-2 gap-x-6 gap-y-2 text-sm">
            {navigation.map((n) => (
              <li key={n.to}><Link to={n.to} className="hover:text-gold-300">{n.label}</Link></li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="mb-4 font-sans text-sm font-semibold tracking-wide text-cream">Contact</h2>
          <ul className="space-y-3 text-sm">
            <li className="flex gap-3"><Icon name="pin" className="size-4 shrink-0 translate-y-0.5 text-gold-300" />{school.location.line1}, {school.location.line2}</li>
            <li><a href={telHref()} className="flex gap-3 hover:text-gold-300"><Icon name="phone" className="size-4 shrink-0 translate-y-0.5 text-gold-300" />{school.contact.phoneDisplay}</a></li>
            <li><a href={whatsappHref()} target="_blank" rel="noopener noreferrer" className="flex gap-3 hover:text-gold-300"><Icon name="whatsapp" className="size-4 shrink-0 translate-y-0.5 text-gold-300" />WhatsApp us<span className="sr-only"> (opens in a new tab)</span></a></li>
            <li><a href={mailHref()} className="flex gap-3 [overflow-wrap:anywhere] hover:text-gold-300"><Icon name="mail" className="size-4 shrink-0 translate-y-0.5 text-gold-300" />{school.contact.email}</a></li>
          </ul>
        </div>

        <div>
          <h2 className="mb-4 font-sans text-sm font-semibold tracking-wide text-cream">Office hours</h2>
          <dl className="space-y-2 text-sm">
            {school.hours.map((h) => (
              <div key={h.days}><dt className="text-cream">{h.days}</dt><dd>{h.time}</dd></div>
            ))}
          </dl>
          {socials.length > 0 && (
            <ul className="mt-6 flex gap-4 text-sm">
              {socials.map((s) => <li key={s.label}><a href={s.href} className="hover:text-gold-300">{s.label}</a></li>)}
            </ul>
          )}
        </div>
      </div>

      <div className="border-t border-cream/10">
        <div className="container-site flex flex-col gap-3 py-6 text-xs text-cream/60 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {school.name}. {school.isDemo && 'Fictional institution for demonstration purposes only.'}</p>
          <p>
            Website design & development by{' '}
            {school.agency.url ? <a className="text-gold-300 hover:underline" href={school.agency.url}>{school.agency.name}</a> : <span className="text-gold-300">{school.agency.name}</span>}
            {school.isDemo && ' · Photos: Unsplash (illustrative)'}
          </p>
        </div>
      </div>
    </footer>
  )
}
