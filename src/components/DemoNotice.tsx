import { Icon } from './Icon'
import { school } from '../config/school'
import type { ReactNode } from 'react'

/** Small inline reminder that content is illustrative. Hidden when isDemo is false. */
export function DemoNotice({ children, className = '' }: { children: ReactNode; className?: string }) {
  if (!school.isDemo) return null
  return (
    <p className={`flex items-start gap-2 rounded-lg border border-gold-300/60 bg-gold-100/60 px-4 py-3 text-sm text-forest-900 ${className}`}>
      <Icon name="info" className="mt-0.5 size-4 shrink-0 text-gold-600" />
      <span>{children}</span>
    </p>
  )
}
