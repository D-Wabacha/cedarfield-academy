import { useState } from 'react'
import { images, imageUrl, type ImageKey } from '../content/images'
import { Icon } from './Icon'

type Props = {
  image: ImageKey
  /** width / height, used for the crop and to reserve space (prevents layout shift). */
  ratio?: number
  /** CSS sizes attribute for responsive selection. */
  sizes?: string
  className?: string
  priority?: boolean
  /** Decorative images get an empty alt. */
  decorative?: boolean
}

const WIDTHS = [480, 768, 1080, 1440, 1920]

/**
 * Responsive, lazy-loaded image with a branded fallback if the file fails to
 * load (e.g. offline or a removed photo). The wrapper always holds its size.
 */
export function SmartImage({ image, ratio = 3 / 2, sizes = '100vw', className = '', priority = false, decorative = false }: Props) {
  const { src, alt } = images[image]
  const [failed, setFailed] = useState(false)

  const srcSet = WIDTHS.map((w) => `${imageUrl(src, w, Math.round(w / ratio))} ${w}w`).join(', ')

  if (failed) {
    return (
      <div
        role={decorative ? undefined : 'img'}
        aria-label={decorative ? undefined : alt}
        className={`flex items-center justify-center bg-gradient-to-br from-forest-800 to-forest-950 text-gold-300/70 ${className}`}
      >
        <Icon name="image" className="size-10" />
      </div>
    )
  }

  return (
    <img
      src={imageUrl(src, 1080, Math.round(1080 / ratio))}
      srcSet={srcSet}
      sizes={sizes}
      alt={decorative ? '' : alt}
      width={1080}
      height={Math.round(1080 / ratio)}
      loading={priority ? 'eager' : 'lazy'}
      decoding={priority ? 'sync' : 'async'}
      fetchPriority={priority ? 'high' : 'auto'}
      onError={() => setFailed(true)}
      className={`bg-forest-100 object-cover ${className}`}
    />
  )
}
