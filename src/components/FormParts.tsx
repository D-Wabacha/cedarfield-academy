import { useEffect, useRef, type ReactNode, type RefObject } from 'react'
import { Icon } from './Icon'

export function Field({ id, label, hint, error, optional, children }: { id: string; label: string; hint?: string; error?: string; optional?: boolean; children: ReactNode }) {
  return (
    <div>
      <label htmlFor={id} className="mb-2 block text-sm font-semibold text-forest-900">
        {label} {optional && <span className="font-normal text-muted">(optional)</span>}
      </label>
      {hint && <p id={`${id}-hint`} className="-mt-1 mb-2 text-sm text-muted">{hint}</p>}
      {children}
      {error && <FieldError id={`${id}-error`}>{error}</FieldError>}
    </div>
  )
}

export function FieldError({ id, children }: { id: string; children: ReactNode }) {
  return (
    <p id={id} className="mt-2 flex items-start gap-1.5 text-sm font-medium text-red-800">
      <Icon name="alert" className="mt-0.5 size-4 shrink-0" />{children}
    </p>
  )
}

/** aria-describedby helper combining hint and error ids. */
export const describedBy = (id: string, hint?: boolean, error?: string) =>
  [hint && `${id}-hint`, error && `${id}-error`].filter(Boolean).join(' ') || undefined

export function ErrorSummary({ errors, labels, summaryRef, idFor = (k) => k }: { errors: Record<string, string | undefined>; labels: Record<string, string>; summaryRef: RefObject<HTMLDivElement | null>; idFor?: (key: string) => string }) {
  const entries = Object.entries(errors).filter(([, v]) => v)
  if (!entries.length) return null
  return (
    <div ref={summaryRef} tabIndex={-1} role="alert" aria-labelledby="error-summary-title" className="rounded-xl border-2 border-red-800/70 bg-red-50 p-5 outline-none">
      <h3 id="error-summary-title" className="flex items-center gap-2 font-sans text-base font-semibold text-red-900">
        <Icon name="alert" className="size-5" /> Please check {entries.length === 1 ? 'one field' : `${entries.length} fields`}
      </h3>
      <ul className="mt-3 list-disc space-y-1 pl-6 text-sm text-red-900">
        {entries.map(([k, v]) => (
          <li key={k}><a href={`#${idFor(k)}`} className="underline underline-offset-2" onClick={(e) => { e.preventDefault(); const el = document.getElementById(idFor(k)); el?.scrollIntoView({ block: 'center' }); el?.focus({ preventScroll: true }) }}>{labels[k] ?? k}: {v}</a></li>
        ))}
      </ul>
    </div>
  )
}

export function SubmitError({ message, onRetry }: { message: string; onRetry: () => void }) {
  return (
    <div role="alert" className="flex flex-col gap-3 rounded-xl border border-red-800/40 bg-red-50 p-5 text-red-900 sm:flex-row sm:items-center sm:justify-between">
      <p className="flex items-start gap-2 text-sm"><Icon name="alert" className="mt-0.5 size-5 shrink-0" /><span><strong>Not sent.</strong> {message} Your answers are still here.</span></p>
      <button type="button" onClick={onRetry} className="shrink-0 rounded-full border border-red-900/30 px-4 py-2 text-sm font-semibold hover:bg-red-100">Try again</button>
    </div>
  )
}

export function SuccessPanel({ title, children, reference, onReset, resetLabel }: { title: string; children: ReactNode; reference: string; onReset: () => void; resetLabel: string }) {
  const ref = useRef<HTMLDivElement>(null)
  // The form is replaced by this panel, so bring it into view and move focus to it.
  useEffect(() => {
    ref.current?.scrollIntoView({ block: 'center' })
    ref.current?.focus({ preventScroll: true })
  }, [])
  return (
    <div ref={ref} tabIndex={-1} role="status" className="rounded-2xl border border-forest-600/30 bg-forest-50 p-8 text-center outline-none">
      <span className="mx-auto mb-4 flex size-14 items-center justify-center rounded-full bg-forest-800 text-cream"><Icon name="check" className="size-7" /></span>
      <h3 className="text-2xl font-medium">{title}</h3>
      <div className="mx-auto mt-3 max-w-md text-muted">{children}</div>
      <p className="mt-4 text-xs text-muted">Demo reference: <span className="font-mono">{reference}</span> · No data was sent or stored.</p>
      <button type="button" onClick={onReset} className="mt-6 rounded-full border border-forest-800/25 px-5 py-2.5 text-sm font-semibold text-forest-900 hover:bg-white">{resetLabel}</button>
    </div>
  )
}

export function DemoControls({ checked, onChange }: { checked: boolean; onChange: (v: boolean) => void }) {
  return (
    <fieldset className="rounded-lg border border-dashed border-sand px-4 py-3">
      <legend className="px-1 text-xs font-semibold tracking-wide text-muted uppercase">Demo control</legend>
      <label className="flex items-center gap-2 text-sm text-muted">
        <input type="checkbox" className="size-4 accent-forest-800" checked={checked} onChange={(e) => onChange(e.target.checked)} />
        Simulate a sending failure to preview the error state
      </label>
    </fieldset>
  )
}
