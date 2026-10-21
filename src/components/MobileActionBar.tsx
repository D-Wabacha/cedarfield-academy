import { Link } from 'react-router-dom'
import { telHref, whatsappHref } from '../lib/links'
import { Icon } from './Icon'

/** Sticky quick actions for phones: call, WhatsApp, enquire. */
export function MobileActionBar() {
  const item = 'flex flex-1 flex-col items-center justify-center gap-1 py-2.5 text-xs font-semibold'
  return (
    <nav aria-label="Quick actions" className="fixed inset-x-0 bottom-0 z-30 border-t border-sand bg-white/95 pb-[env(safe-area-inset-bottom)] shadow-[0_-4px_20px_rgba(18,51,39,0.08)] md:hidden">
      <ul className="flex">
        <li className="flex flex-1"><a href={telHref()} className={`${item} text-forest-800`}><Icon name="phone" />Call</a></li>
        <li className="flex flex-1">
          <a href={whatsappHref()} target="_blank" rel="noopener noreferrer" className={`${item} text-forest-800`}>
            <Icon name="whatsapp" />WhatsApp<span className="sr-only"> (opens in a new tab)</span>
          </a>
        </li>
        <li className="flex flex-1"><Link to="/admissions#enquire" className={`${item} m-1.5 rounded-xl bg-forest-800 text-cream`}><Icon name="mail" />Enquire</Link></li>
      </ul>
    </nav>
  )
}
