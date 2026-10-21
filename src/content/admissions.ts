/**
 * Admissions content. Used by the Admissions page AND by
 * scripts/generate-admissions-pdf.ts, so keep this file free of runtime
 * imports (type-only imports are fine).
 */

export const admissionsIntro =
  'We welcome enquiries throughout the year. Our admissions team will walk you through each step, answer your questions and help you decide whether Cedarfield is the right fit for your family.'

export const admissionsSteps = [
  { title: 'Make an enquiry', text: 'Send an enquiry online, call, or message us on WhatsApp. We reply within two working days.' },
  { title: 'Visit the school', text: 'Book a guided tour to see classrooms in action and meet members of our team.' },
  { title: 'Complete an application', text: 'We share the application pack and explain what is required for the level you are interested in.' },
  { title: 'Meet and settle in', text: 'An informal meeting and a short taster session help your child get to know us. There are no entrance exams for pre-primary.' },
  { title: 'Receive an offer', text: 'Once a place is confirmed, we share a joining pack with term dates, uniform and transport details.' },
]

export const keyDates = [
  { label: 'Enquiries for the next academic year', value: 'Open now' },
  { label: 'Guided tours', value: 'Tuesdays and Thursdays, by appointment' },
  { label: 'Open morning', value: 'See News & Announcements' },
  { label: 'Mid-year entry', value: 'Subject to availability' },
]

export const requirements = [
  'Completed application form (provided by the admissions office)',
  'Copy of the child’s birth certificate (shared only at application stage, in person)',
  'Most recent school report, where applicable',
  'Two passport-size photographs',
  'Copy of a parent or guardian’s identification',
]

export const feesNote =
  'Our fee schedule, including optional transport and meals, is shared with families during the admissions conversation. Payment can be made termly.'

export const faqs = [
  { q: 'What ages do you admit?', a: 'We welcome children from Pre-Primary 1 (around age 4) through Grade 9 in Junior School.' },
  { q: 'Which curriculum do you follow?', a: 'Our programmes are organised around Kenya’s Competency-Based Curriculum (CBC), with enrichment in technology, the arts and sport.' },
  { q: 'Is there an entrance assessment?', a: 'There is no exam for pre-primary. For older learners, a short, relaxed assessment helps teachers understand how best to support your child. It is not a pass-or-fail test.' },
  { q: 'Do you offer school transport?', a: 'Yes, an optional bus service runs on set routes. Ask our team which routes serve your area.' },
  { q: 'Can my child join mid-year?', a: 'Mid-year places are sometimes available. Please enquire and we will let you know.' },
  { q: 'How do you support children with additional learning needs?', a: 'We talk with each family about their child’s needs before admission so we can be honest about the support we can provide.' },
]

/** Path of the generated admissions guide inside /public. */
export const admissionsGuidePath = '/downloads/cedarfield-admissions-guide.pdf'
