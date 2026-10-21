/**
 * Demo form submission.
 *
 * Nothing is transmitted or stored: the payload is discarded and a delay is
 * simulated so the loading, success and error states can be shown.
 *
 * To go live, replace the body of this function with a request to the
 * school's own endpoint (for example a serverless function or form service),
 * and review data-protection obligations under Kenya's Data Protection Act.
 */
export async function submitDemoForm(_form: 'admissions' | 'contact', _payload: unknown, opts: { simulateError?: boolean } = {}) {
  await new Promise((r) => setTimeout(r, 900))
  if (opts.simulateError) {
    throw new Error('We could not send your message just now. Please check your connection and try again.')
  }
  return { ok: true as const, reference: 'DEMO-' + Math.random().toString(36).slice(2, 8).toUpperCase() }
}
