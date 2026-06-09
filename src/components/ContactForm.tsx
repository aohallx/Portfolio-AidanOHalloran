import { useState, type FormEvent } from 'react'
import { site } from '../data/site'
import styles from './ContactForm.module.css'

type Topic = (typeof site.contact.topics)[number]

export function ContactForm() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [topic, setTopic] = useState<Topic>(site.contact.topics[0])

  const isReady =
    name.trim().length > 0 &&
    email.trim().length > 0 &&
    message.trim().length > 0

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const subject = encodeURIComponent(`Portfolio — ${topic}`)
    const body = encodeURIComponent(
      `Topic: ${topic}\nFrom: ${name} <${email}>\n\n${message}`,
    )
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <label className={styles.field}>
        <span className={styles.label}>Your name*</span>
        <input
          type="text"
          name="name"
          required
          autoComplete="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className={styles.input}
        />
      </label>

      <label className={styles.field}>
        <span className={styles.label}>Your email*</span>
        <input
          type="email"
          name="email"
          required
          autoComplete="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={styles.input}
        />
      </label>

      <fieldset className={styles.topicField}>
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
              onClick={() => setTopic(item)}
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
          onChange={(e) => setMessage(e.target.value)}
          className={styles.textarea}
        />
      </label>

      <button
        type="submit"
        className={
          isReady ? `${styles.submit} ${styles.submitReady}` : styles.submit
        }
        disabled={!isReady}
      >
        Send message
      </button>
    </form>
  )
}
