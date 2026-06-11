type ContactPayload = {
  name: string
  topic: string
  message: string
}

type ContactSubmitResult =
  | { ok: true }
  | { ok: false; reason: 'missing_key' | 'request_failed'; message: string }

export async function submitContactForm({
  name,
  topic,
  message,
}: ContactPayload): Promise<ContactSubmitResult> {
  const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY

  if (!accessKey) {
    return {
      ok: false,
      reason: 'missing_key',
      message: 'Contact form is not configured yet.',
    }
  }

  const response = await fetch('https://api.web3forms.com/submit', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({
      access_key: accessKey,
      subject: `Portfolio — ${topic}`,
      name,
      from_name: name,
      message: `Topic: ${topic}\nFrom: ${name}\n\n${message}`,
      botcheck: false,
    }),
  })

  const data = (await response.json()) as { success?: boolean; message?: string }

  if (!response.ok || !data.success) {
    return {
      ok: false,
      reason: 'request_failed',
      message: data.message ?? 'Could not send your message. Please try again.',
    }
  }

  return { ok: true }
}
