import { ContactForm } from '../components/ContactForm'
import { PageMeta } from '../components/PageMeta'
import { site } from '../data/site'
import styles from './Contact.module.css'

export function Contact() {
  return (
    <>
      <PageMeta
        title="Contact"
        description="Open to any chat — work, music, projects, or just saying hi."
      />
      <div className={styles.page}>
        <div className={styles.backdrop} aria-hidden="true">
          <img
            className={styles.backdropImage}
            src={site.contact.backgroundImage}
            alt=""
          />
          <div className={styles.backdropOverlay} />
          <div className={styles.backdropGold} />
        </div>

        <div className={styles.inner}>
          <p className={styles.eyebrow}>{site.contact.eyebrow}</p>
          <h1 id="contact-heading" className={styles.title}>
            {site.contact.title}
          </h1>
          <ContactForm variant="dark" />
        </div>
      </div>
    </>
  )
}
