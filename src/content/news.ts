import type { ImageKey } from './images'

/* News & announcements. All items are fictional demonstration content. */

export type NewsCategory = 'Admissions' | 'Events' | 'Academics' | 'Community'

export type NewsItem = {
  slug: string
  title: string
  date: string // ISO yyyy-mm-dd
  category: NewsCategory
  excerpt: string
  image: ImageKey
  body: string[]
}

export const news: NewsItem[] = [
  {
    slug: 'admissions-enquiries-open',
    title: 'Admissions enquiries are open for the next academic year',
    date: '2026-10-12',
    category: 'Admissions',
    excerpt: 'Families can now enquire about places from Pre-Primary 1 to Grade 9. Here is what to expect.',
    image: 'backpacks',
    body: [
      'We are now welcoming enquiries for the next academic year across all levels, from Pre-Primary 1 to Grade 9 in Junior School.',
      'The first step is a simple enquiry. You can use the form on our Admissions page, call the school office, or send us a message on WhatsApp. A member of the admissions team will get back to you within two working days to arrange a conversation and, if you would like, a guided tour.',
      'During the tour you will see lessons in progress, visit our library, laboratory and innovation lab, and have time to ask questions about the curriculum, transport and meals.',
      'You can also download our admissions guide for a summary of the process and the documents we ask for at application stage.',
    ],
  },
  {
    slug: 'open-morning',
    title: 'Join us for an open morning',
    date: '2026-10-05',
    category: 'Events',
    excerpt: 'Tour the campus, meet teachers and see a typical morning at Cedarfield. Booking recommended.',
    image: 'classroom',
    body: [
      'Our next open morning is a chance for families to experience a normal school day. Visitors will be welcomed at reception and guided in small groups.',
      'Tours include early years classrooms, the library, the science laboratory and the sports field. Our heads of section will give a short talk on our approach to learning and wellbeing, followed by time for questions.',
      'To help us plan, please book a place through the enquiry form and mention “open morning” in your message.',
    ],
  },
  {
    slug: 'science-and-innovation-week',
    title: 'Science and innovation week brings learning to life',
    date: '2026-09-22',
    category: 'Academics',
    excerpt: 'From water filters to simple circuits, learners spent a week investigating questions of their own.',
    image: 'science',
    body: [
      'Science and innovation week gave every class time to investigate a question they chose themselves.',
      'Pre-primary children explored floating and sinking, lower primary tested which materials keep water cool, and upper primary built simple circuits and torches. Junior school learners designed and tested low-cost water filters.',
      'The week ended with a showcase where learners explained their methods and what they would change next time. Thank you to the families who visited.',
    ],
  },
  {
    slug: 'reading-challenge',
    title: 'Our term-long reading challenge begins',
    date: '2026-09-08',
    category: 'Academics',
    excerpt: 'Every learner is invited to read widely this term, with a new reading passport and family reading evenings.',
    image: 'reading',
    body: [
      'This term every learner will receive a reading passport to record the books they read at school and at home.',
      'Our librarians have prepared recommended lists for each level, including stories in English and Kiswahili. Families are warmly invited to our reading evenings, where children share favourite books.',
      'The aim is simple: to help children enjoy reading and to read a little more every day.',
    ],
  },
  {
    slug: 'parent-workshop-digital-wellbeing',
    title: 'Parent workshop: raising balanced digital learners',
    date: '2026-08-28',
    category: 'Community',
    excerpt: 'A practical evening session on screen time, online safety and healthy routines at home.',
    image: 'ict',
    body: [
      'Technology is part of learning at Cedarfield, and we want to support families with the questions that come with it.',
      'This evening workshop covers age-appropriate screen time, setting up devices safely, and how to talk to children about what they see online. There will be time for questions and practical tips.',
      'The session is open to all current and prospective families.',
    ],
  },
  {
    slug: 'inter-house-sports-day',
    title: 'Inter-house sports day: a celebration of effort',
    date: '2026-08-14',
    category: 'Events',
    excerpt: 'Races, relays and team games, with every learner taking part and cheering on their house.',
    image: 'athletics',
    body: [
      'Sports day brought the whole school together on the field for races, relays, tug of war and team games.',
      'Every learner took part, and points were awarded for effort and sportsmanship as well as for finishing positions. Thank you to the parents and guardians who came to cheer.',
    ],
  },
]

export const sortedNews = [...news].sort((a, b) => b.date.localeCompare(a.date))

export function formatDate(iso: string) {
  return new Date(iso + 'T00:00:00').toLocaleDateString('en-KE', { day: 'numeric', month: 'long', year: 'numeric' })
}
