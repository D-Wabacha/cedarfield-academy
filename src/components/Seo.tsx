import { useLocation } from 'react-router-dom'
import { school } from '../config/school'

type Props = { title?: string; description?: string; image?: string; type?: 'website' | 'article' }

/**
 * Per-page metadata. React 19 hoists <title>, <meta> and <link> into <head>.
 * Static defaults (used by social crawlers that do not run JavaScript) live in index.html.
 */
export function Seo({ title, description = school.description, image = '/og-image.png', type = 'website' }: Props) {
  const { pathname } = useLocation()
  const fullTitle = title ? `${title} · ${school.name}` : `${school.name} · ${school.tagline}`
  const url = school.siteUrl + pathname
  const img = image.startsWith('http') ? image : school.siteUrl + image
  return (
    <>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content={type} />
      <meta property="og:image" content={img} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
    </>
  )
}
