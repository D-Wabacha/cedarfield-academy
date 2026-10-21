import { email, maxLength, minLength, required, requiredChoice } from '../lib/validation'
import { useDemoForm } from '../hooks/useDemoForm'
import { Field, ErrorSummary, SubmitError, SuccessPanel, DemoControls, describedBy, FieldError } from './FormParts'
import { Icon } from './Icon'
import { buttonClass } from './Button'

const initial = { name: '', email: '', topic: '', message: '', acknowledge: false }

const labels: Record<keyof typeof initial, string> = {
  name: 'Your name',
  email: 'Email address',
  topic: 'Topic',
  message: 'Message',
  acknowledge: 'Demo acknowledgement',
}

const topics = ['General question', 'Admissions', 'School visit', 'Transport', 'Meals & wellbeing', 'Something else']

export function ContactForm() {
  const f = useDemoForm('contact', initial, {
    name: [required('your name'), maxLength(80, 'Name')],
    email: [required('your email address'), email],
    topic: [requiredChoice('a topic')],
    message: [required('a message'), minLength(10, 'Your message'), maxLength(1000, 'Your message')],
    acknowledge: [(v) => (v ? undefined : 'Please confirm you understand this is a demonstration form.')],
  })
  const { values: v, errors: e } = f

  if (f.status === 'success') {
    return (
      <SuccessPanel title="Message ready to send" reference={f.reference} onReset={f.reset} resetLabel="Write another message">
        <p>Thanks, {v.name.split(' ')[0]}. On a live site, the school office would reply to {v.email} within two working days.</p>
      </SuccessPanel>
    )
  }

  const props = (k: keyof typeof initial, hint = false) => ({
    id: k,
    name: k,
    'aria-invalid': e[k] ? true : undefined,
    'aria-describedby': describedBy(k, hint, e[k]),
    onBlur: () => f.blur(k),
  })

  return (
    <form noValidate onSubmit={f.onSubmit} aria-label="Contact the school" className="space-y-6">
      <ErrorSummary errors={e} labels={labels} summaryRef={f.summaryRef} />
      <div className="grid gap-6 sm:grid-cols-2">
        <Field id="name" label="Your name" error={e.name}>
          <input {...props('name')} className="input" autoComplete="name" value={v.name} onChange={(ev) => f.set('name', ev.target.value)} />
        </Field>
        <Field id="email" label="Email address" error={e.email}>
          <input {...props('email')} type="email" inputMode="email" autoComplete="email" className="input" value={v.email} onChange={(ev) => f.set('email', ev.target.value)} />
        </Field>
      </div>
      <Field id="topic" label="Topic" error={e.topic}>
        <select {...props('topic')} className="input" value={v.topic} onChange={(ev) => f.set('topic', ev.target.value)}>
          <option value="">Choose a topic</option>
          {topics.map((t) => <option key={t}>{t}</option>)}
        </select>
      </Field>
      <Field id="message" label="Message" hint="Please avoid sharing children’s personal details or sensitive family information." error={e.message}>
        <textarea {...props('message', true)} rows={5} className="input resize-y" value={v.message} onChange={(ev) => f.set('message', ev.target.value)} />
      </Field>
      <div>
        <label className="flex items-start gap-3 text-sm text-forest-900">
          <input
            type="checkbox"
            id="acknowledge"
            className="mt-0.5 size-5 shrink-0 accent-forest-800"
            aria-invalid={e.acknowledge ? true : undefined}
            aria-describedby={e.acknowledge ? 'acknowledge-error' : undefined}
            checked={v.acknowledge}
            onChange={(ev) => f.set('acknowledge', ev.target.checked)}
          />
          <span>I understand this is a <strong>demonstration form</strong>. Nothing I enter is sent or stored.</span>
        </label>
        {e.acknowledge && <FieldError id="acknowledge-error">{e.acknowledge}</FieldError>}
      </div>

      <DemoControls checked={f.simulateError} onChange={f.setSimulateError} />

      {f.status === 'error' && <SubmitError message={f.serverError} onRetry={f.retry} />}

      <button type="submit" disabled={f.status === 'submitting'} className={buttonClass('primary', 'w-full sm:w-auto')}>
        {f.status === 'submitting' ? (<><span className="size-4 animate-spin rounded-full border-2 border-cream/40 border-t-cream" aria-hidden />Sending…</>) : (<>Send message <Icon name="arrow-right" className="size-4" /></>)}
      </button>
      <p aria-live="polite" className="sr-only">{f.status === 'submitting' ? 'Sending your message' : ''}</p>
    </form>
  )
}
