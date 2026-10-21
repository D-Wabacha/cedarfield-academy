import { useId } from 'react'
import { programmes } from '../content/school-life'
import { school } from '../config/school'
import { email, maxLength, phone, required, requiredChoice } from '../lib/validation'
import { useDemoForm } from '../hooks/useDemoForm'
import { Field, ErrorSummary, SubmitError, SuccessPanel, DemoControls, describedBy, FieldError } from './FormParts'
import { Icon } from './Icon'
import { buttonClass } from './Button'

const initial = {
  parentName: '',
  email: '',
  phone: '',
  programme: '',
  startTerm: '',
  contactPreference: '',
  tour: false,
  message: '',
  acknowledge: false,
}

const labels: Record<keyof typeof initial, string> = {
  parentName: 'Your name',
  email: 'Email address',
  phone: 'Phone number',
  programme: 'Level of interest',
  startTerm: 'Preferred start',
  contactPreference: 'How should we contact you',
  tour: 'Book a tour',
  message: 'Your question',
  acknowledge: 'Demo acknowledgement',
}

/**
 * Admissions enquiry. Collects only a parent/guardian's contact details and
 * general interest — never a child's name, date of birth or records.
 */
export function EnquiryForm({ compact = false }: { compact?: boolean }) {
  const uid = useId()
  const f = useDemoForm('admissions', initial, {
    parentName: [required('your name'), maxLength(80, 'Name')],
    email: [required('your email address'), email],
    phone: [phone],
    programme: [requiredChoice('a level')],
    contactPreference: [requiredChoice('how we should contact you')],
    message: [maxLength(800, 'Your question')],
    acknowledge: [(v) => (v ? undefined : 'Please confirm you understand this is a demonstration form.')],
  })
  const { values: v, errors: e } = f
  const id = (k: string) => `${k}` + (compact ? `-${uid}` : '')

  if (f.status === 'success') {
    return (
      <SuccessPanel title="Thank you, your enquiry is ready" reference={f.reference} onReset={f.reset} resetLabel="Send another enquiry">
        <p>On a live site, our admissions team would reply by {v.contactPreference === 'WhatsApp' ? 'WhatsApp' : v.contactPreference.toLowerCase()} within two working days{v.tour ? ' to arrange your school tour' : ''}.</p>
      </SuccessPanel>
    )
  }

  const input = (k: keyof typeof initial, hint = false) => ({
    id: id(k),
    name: k,
    'aria-invalid': e[k] ? true : undefined,
    'aria-describedby': describedBy(id(k), hint, e[k]),
    onBlur: () => f.blur(k),
  })

  return (
    <form noValidate onSubmit={f.onSubmit} aria-label="Admissions enquiry" className="space-y-6">
      <ErrorSummary errors={e} labels={labels} summaryRef={f.summaryRef} idFor={id} />

      <p className="flex items-start gap-2 rounded-lg bg-forest-50 px-4 py-3 text-sm text-forest-900">
        <Icon name="shield" className="mt-0.5 size-4 shrink-0 text-forest-700" />
        <span>We only ask for a parent or guardian’s contact details. Please don’t include your child’s name, date of birth or other personal information.</span>
      </p>

      <div className="grid gap-6 sm:grid-cols-2">
        <Field id={id('parentName')} label="Your name" error={e.parentName}>
          <input {...input('parentName')} className="input" autoComplete="name" value={v.parentName} onChange={(ev) => f.set('parentName', ev.target.value)} />
        </Field>
        <Field id={id('email')} label="Email address" error={e.email}>
          <input {...input('email')} type="email" className="input" autoComplete="email" inputMode="email" value={v.email} onChange={(ev) => f.set('email', ev.target.value)} />
        </Field>
        <Field id={id('phone')} label="Phone number" optional hint="Kenyan mobile, e.g. 0712 345 678" error={e.phone}>
          <input {...input('phone', true)} type="tel" className="input" autoComplete="tel" inputMode="tel" value={v.phone} onChange={(ev) => f.set('phone', ev.target.value)} />
        </Field>
        <Field id={id('programme')} label="Level of interest" error={e.programme}>
          <select {...input('programme')} className="input" value={v.programme} onChange={(ev) => f.set('programme', ev.target.value)}>
            <option value="">Choose a level</option>
            {programmes.map((p) => <option key={p.slug} value={p.name}>{p.name} ({p.grades})</option>)}
            <option value="Not sure yet">Not sure yet</option>
          </select>
        </Field>
        {!compact && (
          <Field id={id('startTerm')} label="Preferred start" optional error={e.startTerm}>
            <select {...input('startTerm')} className="input" value={v.startTerm} onChange={(ev) => f.set('startTerm', ev.target.value)}>
              <option value="">No preference</option>
              <option>Term 1, next academic year</option>
              <option>Term 2, next academic year</option>
              <option>Term 3, next academic year</option>
              <option>As soon as possible</option>
            </select>
          </Field>
        )}
      </div>

      <fieldset aria-describedby={e.contactPreference ? `${id('contactPreference')}-error` : undefined}>
        <legend className="mb-3 text-sm font-semibold text-forest-900">How should we contact you?</legend>
        <div className="flex flex-wrap gap-3" id={id('contactPreference')} tabIndex={-1}>
          {['Email', 'Phone', 'WhatsApp'].map((opt) => (
            <label key={opt} className={`flex min-h-11 cursor-pointer items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium transition-colors has-[:focus-visible]:outline-3 has-[:focus-visible]:outline-gold-500 ${v.contactPreference === opt ? 'border-forest-800 bg-forest-800 text-cream' : 'border-sand bg-white text-forest-900 hover:border-forest-700/50'}`}>
              <input type="radio" name={id('contactPreference')} value={opt} className="sr-only" checked={v.contactPreference === opt} onChange={() => f.set('contactPreference', opt)} />
              {opt}
            </label>
          ))}
        </div>
        {e.contactPreference && <FieldError id={`${id('contactPreference')}-error`}>{e.contactPreference}</FieldError>}
      </fieldset>

      {!compact && (
        <Field id={id('message')} label="Your question" optional hint="Anything you would like to know about the school." error={e.message}>
          <textarea {...input('message', true)} rows={4} className="input resize-y" value={v.message} onChange={(ev) => f.set('message', ev.target.value)} />
        </Field>
      )}

      <div className="space-y-3">
        <label className="flex items-start gap-3 text-sm text-forest-900">
          <input type="checkbox" className="mt-0.5 size-5 shrink-0 accent-forest-800" checked={v.tour} onChange={(ev) => f.set('tour', ev.target.checked)} />
          I would like to book a guided school tour
        </label>
        <label className="flex items-start gap-3 text-sm text-forest-900">
          <input
            type="checkbox"
            id={id('acknowledge')}
            className="mt-0.5 size-5 shrink-0 accent-forest-800"
            aria-invalid={e.acknowledge ? true : undefined}
            aria-describedby={e.acknowledge ? `${id('acknowledge')}-error` : undefined}
            checked={v.acknowledge}
            onChange={(ev) => f.set('acknowledge', ev.target.checked)}
          />
          <span>I understand this is a <strong>demonstration form</strong> for a fictional school. Nothing I enter is sent or stored.</span>
        </label>
        {e.acknowledge && <FieldError id={`${id('acknowledge')}-error`}>{e.acknowledge}</FieldError>}
      </div>

      {!compact && <DemoControls checked={f.simulateError} onChange={f.setSimulateError} />}

      {f.status === 'error' && <SubmitError message={f.serverError} onRetry={f.retry} />}

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <button type="submit" disabled={f.status === 'submitting'} className={buttonClass('primary', 'sm:w-auto w-full')}>
          {f.status === 'submitting' ? (<><span className="size-4 animate-spin rounded-full border-2 border-cream/40 border-t-cream" aria-hidden />Sending…</>) : (<>Send enquiry <Icon name="arrow-right" className="size-4" /></>)}
        </button>
        <p className="text-xs text-muted">Prefer to talk? Call {school.contact.phoneDisplay}.</p>
      </div>
      <p aria-live="polite" className="sr-only">{f.status === 'submitting' ? 'Sending your enquiry' : ''}</p>
    </form>
  )
}
