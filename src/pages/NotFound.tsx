import { Seo } from '../components/Seo'
import { ButtonLink } from '../components/Button'

export default function NotFound() {
  return (
    <>
      <Seo title="Page not found" />
      <meta name="robots" content="noindex" />
      <section className="container-site flex min-h-[60vh] flex-col items-center justify-center py-20 text-center">
        <p className="eyebrow">Error 404</p>
        <h1 tabIndex={-1} data-page-heading className="mt-3 text-4xl font-medium outline-none sm:text-5xl">We couldn’t find that page</h1>
        <p className="mt-4 max-w-md text-muted">The page may have moved. Try the homepage or get in touch and we’ll point you in the right direction.</p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <ButtonLink to="/">Go to homepage</ButtonLink>
          <ButtonLink to="/contact" variant="outline">Contact us</ButtonLink>
        </div>
      </section>
    </>
  )
}
