import { useState, type FormEvent } from 'react'
import { track } from '@vercel/analytics'
import { site } from '../data/site'
import { openContactMailto, submitContactForm } from '../lib/contactForm'
import styles from './ContactForm.module.css'

type Topic = (typeof site.contact.topics)[number]

type FormStatus = 'idle' | 'sending' | 'success' | 'mailto_fallback'

type ContactFormProps = {
  variant?: 'light' | 'dark'
}

export function ContactForm({ variant = 'light' }: ContactFormProps) {
  const [name, setName] = useState('')
  const [message, setMessage] = useState('')
  const [topic, setTopic] = useState<Topic>(site.contact.topics[0])
  const [status, setStatus] = useState<FormStatus>('idle')
  const isReady =
    status !== 'sending' &&
    name.trim().length > 0 &&
    message.trim().length > 0

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!isReady) return

    setStatus('sending')

    track('Contact Form Click', { topic })

    const payload = {
      name: name.trim(),
      topic,
      message: message.trim(),
    }

    const result = await submitContactForm(payload)

    if (result.ok) {
      track('Contact Form Sent', { topic })
      setStatus('success')
      setName('')
      setMessage('')
      setTopic(site.contact.topics[0])
      return
    }

    track('Contact Form Mailto Fallback', { topic, reason: result.reason })
    openContactMailto(payload)
    setStatus('mailto_fallback')
  }

  return (
    <form
      className={
        variant === 'dark' ? `${styles.form} ${styles.formDark}` : styles.form
      }
      onSubmit={handleSubmit}
    >
      <label className={styles.field}>
        <span className={styles.label}>Your name*</span>
        <input
          type="text"
          name="name"
          required
          autoComplete="name"
          value={name}
          onChange={(e) => {
            setName(e.target.value)
            if (status === 'success' || status === 'mailto_fallback') setStatus('idle')
          }}
          className={styles.input}
          disabled={status === 'sending'}
        />
      </label>

      <fieldset className={styles.topicField} disabled={status === 'sending'}>
        <legend className={styles.label}>What&apos;s this about?</legend>
        <div className={styles.topics} role="group" aria-label="Topic">
          {site.contact.topics.map((item) => (
            <button
              key={item}
              type="button"
              className={
                topic === item ? `${styles.topic} ${styles.topicActive}` : styles.topic
              }
              aria-pressed={topic === item}
              onClick={() => {
                setTopic(item)
                if (status === 'success' || status === 'mailto_fallback') setStatus('idle')
              }}
            >
              {item}
            </button>
          ))}
        </div>
      </fieldset>

      <label className={`${styles.field} ${styles.fieldMessage}`}>
        <span className={styles.label}>Your message*</span>
        <textarea
          name="message"
          required
          rows={2}
          value={message}
          onChange={(e) => {
            setMessage(e.target.value)
            if (status === 'success' || status === 'mailto_fallback') setStatus('idle')
          }}
          className={styles.textarea}
          disabled={status === 'sending'}
        />
      </label>

      {status === 'success' && (
        <p className={styles.feedback} role="status">
          Message sent. I&apos;ll get back to you soon.
        </p>
      )}

      {status === 'mailto_fallback' && (
        <p className={styles.feedback} role="status">
          Couldn&apos;t send from the site. Your email app should open with your message
          ready — hit send there to finish.{' '}
          <button
            type="button"
            className={styles.feedbackLink}
            onClick={() =>
              openContactMailto({
                name: name.trim(),
                topic,
                message: message.trim(),
              })
            }
          >
            Open email again
          </button>
        </p>
      )}

      <button
        type="submit"
        className={
          isReady ? `${styles.submit} ${styles.submitReady}` : styles.submit
        }
        disabled={!isReady}
      >
        {status === 'sending' ? 'Sending…' : 'Send message'}
      </button>
    </form>
  )
}
