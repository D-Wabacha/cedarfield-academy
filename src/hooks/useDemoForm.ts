import { useRef, useState, type FormEvent } from 'react'
import { validate, type FieldErrors, type Rule } from '../lib/validation'
import { submitDemoForm } from '../lib/submit'

type Values = Record<string, string | boolean>
export type Status = 'idle' | 'submitting' | 'success' | 'error'

/** Shared state for demo forms: values, validation, error summary focus and submit status. */
export function useDemoForm<T extends Values>(form: 'admissions' | 'contact', initial: T, rules: Partial<Record<keyof T, Rule[]>>) {
  const [values, setValues] = useState<T>(initial)
  const [errors, setErrors] = useState<FieldErrors<T>>({})
  const [touched, setTouched] = useState<Partial<Record<keyof T, boolean>>>({})
  const [status, setStatus] = useState<Status>('idle')
  const [serverError, setServerError] = useState('')
  const [reference, setReference] = useState('')
  const [simulateError, setSimulateError] = useState(false)
  const summaryRef = useRef<HTMLDivElement>(null)

  const set = <K extends keyof T>(key: K, value: T[K]) => {
    const next = { ...values, [key]: value }
    setValues(next)
    // Re-validate a field live once the user has left it, so errors clear as they fix them.
    if (touched[key]) setErrors((e) => ({ ...e, [key]: validate(next, { [key]: rules[key] } as typeof rules)[key] }))
  }

  const blur = (key: keyof T) => {
    setTouched((t) => ({ ...t, [key]: true }))
    setErrors((e) => ({ ...e, [key]: validate(values, { [key]: rules[key] } as typeof rules)[key] }))
  }

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault()
    const found = validate(values, rules)
    setErrors(found)
    setTouched(Object.fromEntries(Object.keys(rules).map((k) => [k, true])) as typeof touched)
    if (Object.keys(found).length) {
      setStatus('idle')
      setTimeout(() => {
        summaryRef.current?.scrollIntoView({ block: 'center' })
        summaryRef.current?.focus({ preventScroll: true })
      }, 0)
      return
    }
    await send(simulateError)
  }

  const send = async (failOnPurpose: boolean) => {
    setStatus('submitting')
    setServerError('')
    try {
      const res = await submitDemoForm(form, values, { simulateError: failOnPurpose })
      setReference(res.reference)
      setStatus('success')
    } catch (err) {
      setServerError(err instanceof Error ? err.message : 'Something went wrong. Please try again.')
      setStatus('error')
    }
  }

  /** Retry after a (simulated) failure; the demo toggle is switched off so the retry succeeds. */
  const retry = () => {
    setSimulateError(false)
    void send(false)
  }

  const reset = () => {
    setValues(initial); setErrors({}); setTouched({}); setStatus('idle'); setServerError(''); setReference('')
  }

  return { values, errors, status, serverError, reference, simulateError, setSimulateError, summaryRef, set, blur, onSubmit, retry, reset }
}
