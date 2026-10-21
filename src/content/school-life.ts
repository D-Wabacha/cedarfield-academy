import type { ImageKey } from './images'

/* Values, approach, programmes, facilities and activities.
   All demonstration content — edit freely for a real school. */

export type Value = { title: string; text: string; icon: IconName }
export type IconName =
  | 'heart' | 'compass' | 'spark' | 'leaf' | 'users' | 'book' | 'flask' | 'cpu'
  | 'palette' | 'music' | 'ball' | 'bus' | 'utensils' | 'shield' | 'sun' | 'globe'

export const values: Value[] = [
  { title: 'Care', icon: 'heart', text: 'Every child is known by name. Children learn best when they feel safe, seen and supported.' },
  { title: 'Curiosity', icon: 'compass', text: 'We encourage questions, investigation and the confidence to try again when something is hard.' },
  { title: 'Character', icon: 'shield', text: 'Honesty, kindness and responsibility are practised daily, in class, on the field and at home.' },
  { title: 'Community', icon: 'users', text: 'Families and teachers work as partners, with open communication and regular conversations.' },
]

export const approach = [
  { title: 'Competency-based learning', text: 'Lessons follow the structure of Kenya’s Competency-Based Curriculum, building skills such as communication, critical thinking and creativity alongside knowledge.' },
  { title: 'Small, attentive classes', text: 'Teachers plan for the child in front of them, using regular feedback so learners know their next step.' },
  { title: 'Learning beyond the classroom', text: 'Projects, outdoor learning, clubs and community service give ideas a real-world purpose.' },
  { title: 'Thoughtful use of technology', text: 'Digital tools support learning with clear routines for safe, balanced and purposeful screen use.' },
]

export type Programme = {
  slug: string
  name: string
  grades: string
  ages: string
  summary: string
  image: ImageKey
  focus: string[]
  learningAreas: string[]
  day: { time: string; activity: string }[]
}

export const programmes: Programme[] = [
  {
    slug: 'pre-primary',
    name: 'Pre-Primary',
    grades: 'PP1 – PP2',
    ages: 'Ages 4 – 5',
    summary: 'A warm, play-rich start where children build language, number sense, independence and friendships.',
    image: 'earlyYears',
    focus: ['Learning through guided play', 'Early literacy and numeracy', 'Social and emotional development', 'Fine and gross motor skills'],
    learningAreas: ['Language activities', 'Mathematical activities', 'Environmental activities', 'Psychomotor and creative activities', 'Religious education activities'],
    day: [
      { time: '8:00', activity: 'Welcome circle and morning song' },
      { time: '9:00', activity: 'Learning centres: letters, numbers, sand and water' },
      { time: '10:30', activity: 'Snack and outdoor play' },
      { time: '11:30', activity: 'Story time and creative activities' },
      { time: '12:30', activity: 'Lunch and quiet rest' },
    ],
  },
  {
    slug: 'lower-primary',
    name: 'Lower Primary',
    grades: 'Grades 1 – 3',
    ages: 'Ages 6 – 8',
    summary: 'Confident readers, writers and problem-solvers, with plenty of hands-on exploration.',
    image: 'primaryCircle',
    focus: ['Fluent reading and clear writing', 'Number fluency and reasoning', 'Hands-on environmental exploration', 'Growing independence and teamwork'],
    learningAreas: ['English and Kiswahili', 'Mathematics', 'Environmental activities', 'Creative activities', 'Religious education'],
    day: [
      { time: '7:45', activity: 'Arrival, reading corner and register' },
      { time: '8:15', activity: 'Literacy block' },
      { time: '10:00', activity: 'Break and free play' },
      { time: '10:30', activity: 'Mathematics and investigations' },
      { time: '2:00', activity: 'Creative activities, music or PE' },
    ],
  },
  {
    slug: 'upper-primary',
    name: 'Upper Primary',
    grades: 'Grades 4 – 6',
    ages: 'Ages 9 – 11',
    summary: 'Broader subjects, deeper projects and the study habits that prepare learners for junior school.',
    image: 'primary',
    focus: ['Project-based science and social studies', 'Extended reading and writing', 'Introduction to coding and digital literacy', 'Leadership through class roles'],
    learningAreas: ['English and Kiswahili', 'Mathematics', 'Science and Technology', 'Social Studies', 'Agriculture and Nutrition', 'Creative Arts', 'Religious education'],
    day: [
      { time: '7:45', activity: 'Registration and mentor time' },
      { time: '8:00', activity: 'Mathematics and English' },
      { time: '10:30', activity: 'Science and technology project work' },
      { time: '1:30', activity: 'Creative arts or physical education' },
      { time: '3:30', activity: 'Clubs and activities' },
    ],
  },
  {
    slug: 'junior-school',
    name: 'Junior School',
    grades: 'Grades 7 – 9',
    ages: 'Ages 12 – 14',
    summary: 'Specialist teaching, guided study and mentoring that help learners discover their strengths and pathways.',
    image: 'junior',
    focus: ['Specialist subject teaching', 'Study skills and independent research', 'Career and pathway guidance', 'Community service projects'],
    learningAreas: ['English and Kiswahili', 'Mathematics', 'Integrated Science', 'Social Studies', 'Pre-Technical Studies', 'Agriculture and Nutrition', 'Creative Arts and Sports', 'Religious education'],
    day: [
      { time: '7:30', activity: 'Mentor groups' },
      { time: '7:45', activity: 'Lessons with subject specialists' },
      { time: '12:45', activity: 'Lunch and clubs' },
      { time: '2:00', activity: 'Practical and pre-technical sessions' },
      { time: '3:45', activity: 'Supervised study or sport' },
    ],
  },
]

export type Facility = { title: string; text: string; image?: ImageKey; icon: IconName }

export const facilities: Facility[] = [
  { title: 'Library & reading rooms', icon: 'book', image: 'library', text: 'A calm, well-stocked library with story corners for younger readers and quiet study spaces for older learners.' },
  { title: 'Science laboratory', icon: 'flask', image: 'science', text: 'A purpose-built space for safe, practical investigation, supervised by trained staff.' },
  { title: 'Innovation & ICT lab', icon: 'cpu', image: 'ict', text: 'Laptops, robotics kits and coding tools used with clear safety and wellbeing routines.' },
  { title: 'Art studio', icon: 'palette', image: 'art', text: 'Room to paint, model, print and display work, with materials for every age group.' },
  { title: 'Music room', icon: 'music', image: 'music', text: 'Instruments, a practice space and room for choir and ensemble rehearsals.' },
  { title: 'Sports field', icon: 'ball', image: 'football', text: 'A grass field for football, athletics and outdoor games, plus courts for netball and basketball.' },
  { title: 'Early years play area', icon: 'sun', image: 'outdoorPlay', text: 'A shaded, enclosed outdoor space designed for pre-primary children to explore and play.' },
  { title: 'Dining hall', icon: 'utensils', text: 'Freshly prepared, balanced meals with menus shared with families each term.' },
  { title: 'School transport', icon: 'bus', text: 'Optional route-based morning and afternoon bus service with trained escorts.' },
  { title: 'Health & wellbeing', icon: 'heart', text: 'A sick bay for minor first aid and a pastoral team families can talk to.' },
]

export type ActivityCategory = 'Sport' | 'Creative' | 'STEM' | 'Service & Leadership'

export const activityCategories: ActivityCategory[] = ['Sport', 'Creative', 'STEM', 'Service & Leadership']

export const activities: { name: string; category: ActivityCategory; text: string }[] = [
  { name: 'Football', category: 'Sport', text: 'Skills, teamwork and friendly fixtures.' },
  { name: 'Athletics', category: 'Sport', text: 'Track and field for every ability.' },
  { name: 'Taekwondo', category: 'Sport', text: 'Discipline, focus and fitness.' },
  { name: 'Netball & basketball', category: 'Sport', text: 'Court games with house competitions.' },
  { name: 'Chess club', category: 'STEM', text: 'Strategy, patience and problem solving.' },
  { name: 'Coding & robotics', category: 'STEM', text: 'Build, program and test simple robots.' },
  { name: 'Young scientists', category: 'STEM', text: 'Experiments that answer learners’ own questions.' },
  { name: 'Choir & music', category: 'Creative', text: 'Singing, recorder, keyboard and guitar.' },
  { name: 'Drama & public speaking', category: 'Creative', text: 'Confidence on stage and in conversation.' },
  { name: 'Art & craft', category: 'Creative', text: 'Painting, beadwork and mixed media.' },
  { name: 'Environmental club', category: 'Service & Leadership', text: 'Tree planting, recycling and school gardens.' },
  { name: 'Student council', category: 'Service & Leadership', text: 'Learner voice in school decisions.' },
  { name: 'Community service', category: 'Service & Leadership', text: 'Projects with local organisations.' },
]

export const gallery: { image: ImageKey; caption: string }[] = [
  { image: 'smiles', caption: 'Friendships that grow every day' },
  { image: 'reading', caption: 'Reading together' },
  { image: 'library', caption: 'The library' },
  { image: 'football', caption: 'Games afternoon' },
  { image: 'art', caption: 'In the art studio' },
  { image: 'ict', caption: 'Innovation lab' },
  { image: 'backpacks', caption: 'Off on a learning walk' },
  { image: 'music', caption: 'Music room' },
  { image: 'blocks', caption: 'Building and making' },
]
