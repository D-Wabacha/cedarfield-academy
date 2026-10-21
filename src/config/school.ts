/**
 * School profile — the single place to rebrand this site for a real school.
 *
 * Everything here is FICTIONAL demonstration data. Phone numbers, email
 * addresses and the street address are placeholders and must be replaced
 * before the site is used for a real institution.
 *
 * Keep this file free of runtime imports: scripts/generate-admissions-pdf.ts
 * reads it directly with Node.
 */

export const school = {
  name: 'Cedarfield Academy',
  shortName: 'Cedarfield',
  tagline: 'Rooted in care. Growing curious, capable learners.',
  description:
    'Cedarfield Academy is a fictional day school in Nairobi for children from pre-primary to junior school, combining strong foundations in learning with character, creativity, technology and play.',
  ageRange: 'Ages 4 to 14',
  levelsSummary: 'Pre-Primary · Primary · Junior School',
  location: {
    line1: 'Cedar Lane, off Limuru Road',
    line2: 'Nairobi, Kenya',
    // Leave null to show a placeholder card. For a real school, paste a
    // Google Maps "Embed a map" src URL here.
    mapEmbedUrl: null as string | null,
    // Link opened by the "Get directions" button.
    directionsUrl: 'https://www.google.com/maps/search/?api=1&query=Nairobi%2C+Kenya',
  },
  contact: {
    // Placeholder numbers in international format without "+" or spaces.
    phone: '254700000000',
    phoneDisplay: '+254 700 000 000',
    whatsapp: '254700000000',
    whatsappMessage: 'Hello Cedarfield Academy, I would like to ask about admissions.',
    email: 'admissions@cedarfield.example',
    generalEmail: 'hello@cedarfield.example',
  },
  hours: [
    { days: 'Monday – Friday', time: '7:30 am – 4:30 pm' },
    { days: 'Saturday', time: 'Visits by appointment' },
    { days: 'Sunday & public holidays', time: 'Closed' },
  ],
  social: [
    // Add real profile URLs here; entries with an empty href are hidden.
    { label: 'Facebook', href: '' },
    { label: 'Instagram', href: '' },
    { label: 'YouTube', href: '' },
  ],
  siteUrl: 'https://cedarfield-academy.example',
  /** Shows the demonstration banner and notices across the site. */
  isDemo: true,
  agency: {
    name: 'Sonath Solutions',
    url: '',
  },
} as const

export type School = typeof school
