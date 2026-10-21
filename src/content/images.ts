/**
 * Photography used across the demo.
 *
 * Images are stock photographs served from Unsplash under the Unsplash
 * License (free to use, no permission needed). They are illustrative only and
 * do not show a real Cedarfield Academy campus, students or staff.
 *
 * A real school should replace these with its own photography, ideally stored
 * in /public/images and referenced by path, e.g. { src: '/images/library.jpg' }.
 */

export type SiteImage = {
  /** Unsplash photo id (photo-xxxx) or an absolute/relative URL. */
  src: string
  alt: string
}

const u = (id: string) => `unsplash:${id}`

export const images = {
  hero: { src: u('1529390079861-591de354faf5'), alt: 'Two pupils concentrating as they write in their exercise books at a classroom table' },
  classroom: { src: u('1497375638960-ca368c7231e4'), alt: 'Pupils sitting together at wooden desks in a classroom' },
  campus: { src: u('1562774053-701939374585'), alt: 'A brick school building with a wide lawn in front' },
  earlyYears: { src: u('1516627145497-ae6968895b74'), alt: 'A young child playing with a colourful toy camera in a bright play room' },
  outdoorPlay: { src: u('1503919545889-aef636e10ad4'), alt: 'A small child in a yellow raincoat and backpack exploring outdoors' },
  blocks: { src: u('1587654780291-39c9404d746b'), alt: 'A pile of colourful construction bricks' },
  primary: { src: u('1588072432836-e10032774350'), alt: 'Primary pupils working on worksheets around a shared table' },
  primaryCircle: { src: u('1588075592446-265fd1e6e76f'), alt: 'Young pupils sitting on a classroom carpet raising their hands' },
  reading: { src: u('1544776193-352d25ca82cd'), alt: 'Two children reading and writing together at a yellow table' },
  junior: { src: u('1571260899304-425eee4c7efc'), alt: 'Older students at desks with notebooks during a lesson' },
  library: { src: u('1507842217343-583bb7270b66'), alt: 'Tall wooden shelves filled with books in a library' },
  science: { src: u('1532094349884-543bc11b234d'), alt: 'Clean glass beakers and flasks on a laboratory bench' },
  ict: { src: u('1610484826917-0f101a7bf7f4'), alt: 'A student wearing headphones working on a laptop' },
  coding: { src: u('1517694712202-14dd9538aa97'), alt: 'A laptop showing code on a desk beside a plant' },
  football: { src: u('1574629810360-7efbbe195018'), alt: 'A football on green grass at the moment it is kicked' },
  athletics: { src: u('1461896836934-ffe607ba8211'), alt: 'An athlete in the starting position on a running track' },
  music: { src: u('1511379938547-c1f69419868d'), alt: 'Guitars and a keyboard set up in a music room' },
  art: { src: u('1513364776144-60967b0f800f'), alt: 'A paintbrush loaded with orange paint beside pots of colour' },
  books: { src: u('1503676260728-1c00da094a0b'), alt: 'A red apple on a stack of books next to alphabet blocks and crayons' },
  smiles: { src: u('1488521787991-ed7bbaae773c'), alt: 'A group of smiling children crowding together toward the camera' },
  backpacks: { src: u('1594608661623-aa0bd3a69d98'), alt: 'Young children with backpacks and sun hats walking together' },
  chalkboard: { src: u('1509869175650-a1d97972541a'), alt: 'A teacher writing equations on a chalkboard' },
  emptyClass: { src: u('1580582932707-520aed937b7b'), alt: 'A bright, empty classroom with rows of desks facing a green board' },
  studyGroup: { src: u('1427504494785-3a9ca7044f45'), alt: 'A student walking between tall library shelves' },
} satisfies Record<string, SiteImage>

export type ImageKey = keyof typeof images

/** Build a sized URL. Unsplash ids get on-the-fly resizing; other URLs pass through. */
export function imageUrl(src: string, width: number, height?: number): string {
  if (!src.startsWith('unsplash:')) return src
  const id = src.slice('unsplash:'.length)
  const params = new URLSearchParams({ auto: 'format', fit: 'crop', w: String(width), q: '70' })
  if (height) params.set('h', String(height))
  return `https://images.unsplash.com/photo-${id}?${params}`
}
