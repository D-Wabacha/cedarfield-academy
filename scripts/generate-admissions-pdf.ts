/**
 * Generates /public/downloads/cedarfield-admissions-guide.pdf from the same
 * content the website uses (src/config/school.ts, src/content/admissions.ts).
 * Run with: npm run gen:pdf   (Node 22.18+ runs TypeScript directly)
 */
import { writeFileSync, mkdirSync } from 'node:fs'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { PDFDocument, StandardFonts, rgb, type PDFFont, type PDFPage } from 'pdf-lib'
import { school } from '../src/config/school.ts'
import { admissionsGuidePath, admissionsIntro, admissionsSteps, faqs, feesNote, keyDates, requirements } from '../src/content/admissions.ts'

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const out = resolve(root, 'public' + admissionsGuidePath)

const GREEN = rgb(0.071, 0.2, 0.153)
const GOLD = rgb(0.706, 0.549, 0.235)
const INK = rgb(0.106, 0.141, 0.125)
const MUTED = rgb(0.333, 0.38, 0.357)
const W = 595.28, H = 841.89, M = 56

// Standard PDF fonts only cover WinAnsi; normalise typographic characters.
const clean = (s: string) => s.replace(/[’‘]/g, "'").replace(/[“”]/g, '"').replace(/[–—]/g, '-').replace(/·/g, '|')

function wrap(text: string, font: PDFFont, size: number, width: number) {
  const words = clean(text).split(/\s+/)
  const lines: string[] = []
  let line = ''
  for (const w of words) {
    const test = line ? `${line} ${w}` : w
    if (font.widthOfTextAtSize(test, size) > width && line) { lines.push(line); line = w } else line = test
  }
  if (line) lines.push(line)
  return lines
}

const doc = await PDFDocument.create()
doc.setTitle(`${school.name} - Admissions guide (sample)`)
doc.setAuthor(school.agency.name)
doc.setSubject('Sample admissions information for a fictional school')
doc.setCreator(`${school.agency.name} demo`)

const regular = await doc.embedFont(StandardFonts.Helvetica)
const bold = await doc.embedFont(StandardFonts.HelveticaBold)
const serif = await doc.embedFont(StandardFonts.TimesRoman)

let page: PDFPage
let y = 0

function footer(p: PDFPage, n: number) {
  p.drawLine({ start: { x: M, y: 48 }, end: { x: W - M, y: 48 }, thickness: 0.5, color: GOLD })
  p.drawText(clean(`SAMPLE DOCUMENT - ${school.name} is a fictional school created by ${school.agency.name} for demonstration.`), { x: M, y: 34, size: 7.5, font: regular, color: MUTED })
  p.drawText(String(n), { x: W - M - 6, y: 34, size: 8, font: bold, color: GREEN })
}

function newPage() {
  page = doc.addPage([W, H])
  footer(page, doc.getPageCount())
  y = H - M
}

function ensure(space: number) { if (y - space < 70) newPage() }

function para(text: string, opts: { size?: number; font?: PDFFont; color?: ReturnType<typeof rgb>; indent?: number; gap?: number } = {}) {
  const { size = 10.5, font = regular, color = INK, indent = 0, gap = 8 } = opts
  for (const l of wrap(text, font, size, W - 2 * M - indent)) {
    ensure(size + 4)
    page.drawText(l, { x: M + indent, y, size, font, color })
    y -= size * 1.45
  }
  y -= gap
}

function heading(text: string) {
  ensure(40)
  y -= 6
  page.drawText(clean(text), { x: M, y, size: 15, font: bold, color: GREEN })
  y -= 8
  page.drawLine({ start: { x: M, y }, end: { x: M + 40, y }, thickness: 2, color: GOLD })
  y -= 18
}

// Cover band
newPage()
page!.drawRectangle({ x: 0, y: H - 190, width: W, height: 190, color: GREEN })
page!.drawRectangle({ x: 0, y: H - 194, width: W, height: 4, color: GOLD })
page!.drawText('ADMISSIONS GUIDE', { x: M, y: H - 70, size: 10, font: bold, color: GOLD })
page!.drawText(clean(school.name), { x: M, y: H - 112, size: 34, font: serif, color: rgb(0.98, 0.97, 0.94) })
page!.drawText(clean(school.tagline), { x: M, y: H - 140, size: 12, font: regular, color: rgb(0.86, 0.9, 0.87) })
page!.drawText(clean(`${school.ageRange} | ${school.levelsSummary} | ${school.location.line2}`), { x: M, y: H - 165, size: 9.5, font: regular, color: rgb(0.86, 0.76, 0.54) })
y = H - 230

para('This is a sample document. All details are illustrative and must be replaced before use by a real school.', { size: 9, font: bold, color: GOLD })
heading('Welcome')
para(admissionsIntro)

heading('How to apply')
admissionsSteps.forEach((s, i) => {
  ensure(40)
  page.drawCircle({ x: M + 9, y: y + 3.5, size: 9, color: GREEN })
  page.drawText(String(i + 1), { x: M + 6.2, y, size: 9.5, font: bold, color: rgb(1, 1, 1) })
  page.drawText(clean(s.title), { x: M + 28, y, size: 11, font: bold, color: INK })
  y -= 15
  para(s.text, { indent: 28, color: MUTED, size: 10, gap: 6 })
})

heading('Key dates')
for (const d of keyDates) {
  ensure(18)
  page.drawText(clean(d.label), { x: M, y, size: 10, font: regular, color: MUTED })
  page.drawText(clean(d.value), { x: M + 250, y, size: 10, font: bold, color: INK })
  y -= 18
}
y -= 6

heading('Documents requested at application stage')
for (const r of requirements) {
  ensure(16)
  page.drawText('-', { x: M + 2, y, size: 10.5, font: bold, color: GOLD })
  para(r, { indent: 14, gap: 2 })
}
y -= 6

heading('Fees')
para(feesNote)

heading('Frequently asked questions')
for (const f of faqs) {
  para(f.q, { font: bold, gap: 2 })
  para(f.a, { color: MUTED, size: 10 })
}

heading('Contact the admissions team')
para(`Phone / WhatsApp: ${school.contact.phoneDisplay}`, { gap: 2 })
para(`Email: ${school.contact.email}`, { gap: 2 })
para(`Address: ${school.location.line1}, ${school.location.line2}`, { gap: 2 })
para(`Office hours: ${school.hours.map((h) => `${h.days}: ${h.time}`).join('; ')}`)

mkdirSync(dirname(out), { recursive: true })
writeFileSync(out, await doc.save())
console.log(`Admissions guide written to ${out} (${doc.getPageCount()} pages)`)
