import React from 'react';
import styles from './styles.module.css';

const email = 'powertheasset@gmail.com';

export default function ContactSection() {
  return (
    <section className={styles.contactSection}>
      <div className="container">
        <h2 className={styles.title}>Get in Touch</h2>
        <p className={styles.subtitle}>
          Questions, feedback, a bug to report or an idea for Power? Send us an email and we'll get back to you.
        </p>

        <a className={`button button--primary button--lg ${styles.mailButton}`} href={`mailto:${email}`}>
          <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.9"
               strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <rect x="3" y="5" width="18" height="14" rx="2.5" />
            <path d="M3.5 6.5l8.5 6.5 8.5-6.5" />
          </svg>
          Send us an email
        </a>

        <p className={styles.address}>
          or write to <a href={`mailto:${email}`}>{email}</a>
        </p>
      </div>
    </section>
  );
}
