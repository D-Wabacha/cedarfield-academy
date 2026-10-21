import { Link } from 'react-router-dom'
import type { ReactNode } from 'react'

type Variant = 'primary' | 'gold' | 'outline' | 'ghost-light' | 'link'

const base =
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-center font-semibold transition-colors duration-200 disabled:cursor-not-allowed disabled:opacity-60 min-h-11'

const variants: Record<Variant, string> = {
  primary: 'bg-forest-800 px-6 py-3 text-cream hover:bg-forest-700',
  gold: 'bg-gold-500 px-6 py-3 text-forest-950 hover:bg-gold-300',
  outline: 'border border-forest-800/25 px-6 py-3 text-forest-900 hover:border-forest-800 hover:bg-forest-50',
  'ghost-light': 'border border-cream/40 px-6 py-3 text-cream hover:border-cream hover:bg-cream/10',
  link: 'px-0 py-1 text-forest-800 underline-offset-4 hover:underline min-h-0',
}

type Props = {
  to?: string
  href?: string
  variant?: Variant
  children: ReactNode
  className?: string
  external?: boolean
  download?: boolean | string
  'aria-label'?: string
}

/** One button style for router links, external links and downloads. */
export function ButtonLink({ to, href, variant = 'primary', children, className = '', external, download, ...rest }: Props) {
  const cls = `${base} ${variants[variant]} ${className}`
  if (to) return <Link to={to} className={cls} {...rest}>{children}</Link>
  return (
    <a
      href={href}
      className={cls}
      download={download}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      {...rest}
    >
      {children}
      {external && <span className="sr-only"> (opens in a new tab)</span>}
    </a>
  )
}

export function buttonClass(variant: Variant = 'primary', extra = '') {
  return `${base} ${variants[variant]} ${extra}`
}
