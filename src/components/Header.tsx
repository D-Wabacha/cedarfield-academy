import { useEffect, useRef, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { navigation } from '../config/navigation'
import { school } from '../config/school'
import { telHref } from '../lib/links'
import { Icon } from './Icon'
import { Logo } from './Logo'
import { buttonClass } from './Button'

export function Header() {
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()
  const toggleRef = useRef<HTMLButtonElement>(null)
  const panelRef = useRef<HTMLDivElement>(null)
  const headerRef = useRef<HTMLElement>(null)
  const [panelTop, setPanelTop] = useState(0)

  // Close the menu whenever the route changes.
  useEffect(() => setOpen(false), [pathname])

  // Lock scroll, close on Escape, keep focus inside the open panel.
  useEffect(() => {
    if (!open) return
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    setPanelTop(headerRef.current?.getBoundingClientRect().bottom ?? 0)
    panelRef.current?.querySelector<HTMLElement>('a')?.focus()

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setOpen(false)
        toggleRef.current?.focus()
      }
      if (e.key === 'Tab' && panelRef.current) {
        const items = [toggleRef.current, ...panelRef.current.querySelectorAll<HTMLElement>('a, button')].filter(Boolean) as HTMLElement[]
        const first = items[0]
        const last = items[items.length - 1]
        if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus() }
        else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus() }
      }
    }
    const onResize = () => window.innerWidth >= 1024 && setOpen(false)
    document.addEventListener('keydown', onKey)
    window.addEventListener('resize', onResize)
    return () => {
      document.body.style.overflow = prev
      document.removeEventListener('keydown', onKey)
      window.removeEventListener('resize', onResize)
    }
  }, [open])

  const linkCls = ({ isActive }: { isActive: boolean }) =>
    `relative rounded-md px-3 py-2 text-[0.95rem] font-medium transition-colors ${isActive ? 'text-forest-900 after:absolute after:inset-x-3 after:-bottom-0.5 after:h-0.5 after:rounded-full after:bg-gold-500' : 'text-muted hover:text-forest-900'}`

  return (
    <header ref={headerRef} className="sticky top-0 z-40 border-b border-sand/70 bg-cream">
      <div className="container-site flex h-18 items-center justify-between gap-4 py-3">
        <Link to="/" className="shrink-0 rounded-lg" aria-label={`${school.name} home`}>
          <Logo />
        </Link>

        <nav aria-label="Main" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {navigation.map((item) => (
              <li key={item.to}>
                <NavLink to={item.to} end={item.to === '/'} className={linkCls}>{item.label}</NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <a href={telHref()} className="hidden items-center gap-2 rounded-full px-3 py-2 text-sm font-semibold text-forest-800 hover:bg-forest-50 xl:inline-flex">
            <Icon name="phone" className="size-4" /> {school.contact.phoneDisplay}
          </a>
          <Link to="/admissions#enquire" className={buttonClass('primary', 'text-sm max-sm:hidden')}>
            Enquire now
          </Link>
          <button
            ref={toggleRef}
            type="button"
            className="inline-flex size-11 items-center justify-center rounded-full text-forest-900 hover:bg-forest-50 lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((o) => !o)}
          >
            <Icon name={open ? 'close' : 'menu'} className="size-6" />
            <span className="sr-only">{open ? 'Close menu' : 'Open menu'}</span>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        ref={panelRef}
        hidden={!open}
        style={{ top: panelTop }}
        className="fixed inset-x-0 bottom-0 overflow-y-auto border-t border-sand bg-cream lg:hidden"
      >
        <nav aria-label="Mobile" className="container-site py-6">
          <ul className="divide-y divide-sand/80">
            {navigation.map((item) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  end={item.to === '/'}
                  className={({ isActive }) => `flex items-center justify-between py-4 font-display text-2xl ${isActive ? 'text-forest-900' : 'text-forest-900/75'}`}
                >
                  {({ isActive }) => (
                    <>
                      {item.label}
                      {isActive ? <span className="size-2 rounded-full bg-gold-500" aria-hidden /> : <Icon name="chevron-right" className="size-5 text-muted" />}
                    </>
                  )}
                </NavLink>
              </li>
            ))}
          </ul>
          <div className="mt-8 grid gap-3">
            <Link to="/admissions#enquire" className={buttonClass('primary', 'w-full')}>Make an admissions enquiry</Link>
            <a href={telHref()} className={buttonClass('outline', 'w-full')}>
              <Icon name="phone" className="size-4" /> Call {school.contact.phoneDisplay}
            </a>
          </div>
        </nav>
      </div>
    </header>
  )
}
