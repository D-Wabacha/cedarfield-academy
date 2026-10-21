import { useEffect, useRef } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { DemoBanner } from './DemoBanner'
import { Header } from './Header'
import { Footer } from './Footer'
import { MobileActionBar } from './MobileActionBar'

/**
 * On navigation: scroll to the hash target (or the top) and move focus to the
 * new page's heading so screen-reader users hear where they are. Inner pages
 * load lazily, so the target is polled for briefly.
 */
function useRouteFocus() {
  const { pathname, hash } = useLocation()
  const first = useRef(true)
  useEffect(() => {
    const isFirst = first.current
    first.current = false
    if (!hash) window.scrollTo({ top: 0, behavior: 'instant' })
    if (!hash && isFirst) return

    let tries = 0
    let timer = 0
    const find = () => {
      const el = hash ? document.getElementById(decodeURIComponent(hash.slice(1))) : document.querySelector<HTMLElement>('[data-page-heading]')
      if (!el) {
        if (tries++ < 60) timer = window.setTimeout(find, 50)
        return
      }
      if (hash) el.scrollIntoView({ behavior: 'instant' })
      const target = el.matches('h1,h2,h3,[tabindex]') ? el : el.querySelector<HTMLElement>('h1,h2,h3')
      if (target) {
        if (!target.hasAttribute('tabindex')) target.setAttribute('tabindex', '-1')
        target.focus({ preventScroll: true })
      }
    }
    timer = window.setTimeout(find, 0)
    return () => clearTimeout(timer)
  }, [pathname, hash])
}

export function Layout() {
  useRouteFocus()
  return (
    <>
      <a href="#main" className="sr-only z-50 rounded-md bg-forest-900 px-4 py-2 text-cream focus:not-sr-only focus:fixed focus:top-3 focus:left-3">
        Skip to main content
      </a>
      <DemoBanner />
      <Header />
      <main id="main" tabIndex={-1} className="outline-none">
        <Outlet />
      </main>
      <Footer />
      <div className="h-16 md:hidden" aria-hidden />
      <MobileActionBar />
    </>
  )
}
