import { school } from '../config/school'

export function DemoBanner() {
  if (!school.isDemo) return null
  return (
    <div className="bg-forest-950 text-cream/90">
      <p className="container-site py-2 text-center text-xs leading-snug sm:text-sm">
        <strong className="font-semibold text-gold-300">Demonstration website.</strong>{' '}
        {school.name} is a fictional school created by {school.agency.name} to show what a modern school website can do.
        <span className="hidden sm:inline"> All names, details and photos are illustrative.</span>
      </p>
    </div>
  )
}
