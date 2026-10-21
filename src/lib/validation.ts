export type FieldErrors<T> = Partial<Record<keyof T, string>>

export type Rule = (value: string) => string | undefined

export const required = (label: string): Rule => (v) => (v.trim() ? undefined : `Please enter ${label}.`)

export const requiredChoice = (label: string): Rule => (v) => (v ? undefined : `Please choose ${label}.`)

export const email: Rule = (v) =>
  !v.trim() || /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.trim()) ? undefined : 'Please enter a valid email address, like name@example.com.'

/** Kenyan numbers in local (07…/01…) or international (+254…) form. Optional unless combined with required(). */
export const phone: Rule = (v) => {
  const digits = v.replace(/[\s()-]/g, '')
  if (!digits) return undefined
  return /^(\+?254|0)(7|1)\d{8}$/.test(digits) ? undefined : 'Please enter a Kenyan phone number, like 0712 345 678 or +254 712 345 678.'
}

export const minLength = (n: number, label: string): Rule => (v) =>
  !v.trim() || v.trim().length >= n ? undefined : `${label} should be at least ${n} characters.`

export const maxLength = (n: number, label: string): Rule => (v) =>
  v.length <= n ? undefined : `${label} should be ${n} characters or fewer.`

export function validate<T extends Record<string, string | boolean>>(
  values: T,
  rules: Partial<Record<keyof T, Rule[]>>,
): FieldErrors<T> {
  const errors: FieldErrors<T> = {}
  for (const key in rules) {
    const raw = values[key] as string | boolean | undefined
    const value = typeof raw === 'boolean' ? (raw ? 'yes' : '') : (raw ?? '')
    for (const rule of rules[key] ?? []) {
      const msg = rule(value)
      if (msg) {
        errors[key] = msg
        break
      }
    }
  }
  return errors
}
