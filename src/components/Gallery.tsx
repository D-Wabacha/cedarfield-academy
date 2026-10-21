import { useCallback, useEffect, useRef, useState } from 'react'
import type { ImageKey } from '../content/images'
import { images } from '../content/images'
import { SmartImage } from './SmartImage'
import { Icon } from './Icon'

type Item = { image: ImageKey; caption: string }

/** Photo grid with an accessible lightbox built on the native <dialog>. */
export function Gallery({ items }: { items: Item[] }) {
  const dialogRef = useRef<HTMLDialogElement>(null)
  const [index, setIndex] = useState<number | null>(null)

  const open = (i: number) => { setIndex(i); dialogRef.current?.showModal() }
  const close = () => dialogRef.current?.close()
  const step = useCallback((d: number) => setIndex((i) => (i === null ? i : (i + d + items.length) % items.length)), [items.length])

  useEffect(() => {
    const dlg = dialogRef.current
    if (!dlg) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') step(1)
      if (e.key === 'ArrowLeft') step(-1)
    }
    const onClose = () => setIndex(null)
    dlg.addEventListener('keydown', onKey)
    dlg.addEventListener('close', onClose)
    return () => { dlg.removeEventListener('keydown', onKey); dlg.removeEventListener('close', onClose) }
  }, [step])

  const current = index !== null ? items[index] : null

  return (
    <>
      <ul className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-4">
        {items.map((it, i) => (
          <li key={it.image} className={i === 0 ? 'col-span-2 row-span-2' : ''}>
            <button
              type="button"
              onClick={() => open(i)}
              className="group relative block h-full w-full overflow-hidden rounded-xl"
              aria-label={`View larger: ${it.caption}`}
            >
              <SmartImage image={it.image} ratio={1} sizes={i === 0 ? '(min-width: 768px) 50vw, 100vw' : '(min-width: 768px) 25vw, 50vw'} className="aspect-square h-full w-full transition-transform duration-500 group-hover:scale-[1.03]" />
              <span className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-forest-950/80 to-transparent p-3 pt-10 text-left text-sm font-medium text-cream opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100">
                {it.caption}
              </span>
            </button>
          </li>
        ))}
      </ul>

      <dialog
        ref={dialogRef}
        aria-label="Photo viewer"
        className="m-auto max-h-[92vh] w-[min(64rem,94vw)] overflow-visible bg-transparent p-0 backdrop:bg-forest-950/90"
        onClick={(e) => { if (e.target === dialogRef.current) close() }}
      >
        {current && (
          <figure className="relative">
            <SmartImage key={current.image} image={current.image} ratio={3 / 2} sizes="94vw" priority className="max-h-[78vh] w-full rounded-xl object-contain" />
            <figcaption className="mt-3 flex items-center justify-between gap-4 text-cream">
              <span>{current.caption}<span className="sr-only">. {images[current.image].alt}</span></span>
              <span className="text-sm text-cream/60">{(index ?? 0) + 1} / {items.length}</span>
            </figcaption>
            <div className="absolute -top-14 right-0 flex gap-2 sm:top-3 sm:right-3">
              <button type="button" onClick={() => step(-1)} className="flex size-11 items-center justify-center rounded-full bg-forest-950/70 text-cream hover:bg-forest-950" aria-label="Previous photo"><Icon name="chevron-left" /></button>
              <button type="button" onClick={() => step(1)} className="flex size-11 items-center justify-center rounded-full bg-forest-950/70 text-cream hover:bg-forest-950" aria-label="Next photo"><Icon name="chevron-right" /></button>
              <button type="button" onClick={close} className="flex size-11 items-center justify-center rounded-full bg-cream text-forest-950 hover:bg-white" aria-label="Close photo viewer" autoFocus><Icon name="close" /></button>
            </div>
          </figure>
        )}
      </dialog>
    </>
  )
}
