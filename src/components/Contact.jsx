import { useState } from 'react'
import './Contact.css'

const socials = [
  { label: 'Email', value: 'shristisingh0714@gmail.com', href: 'mailto:shristisingh0714@gmail.com', icon: '✉' },
  { label: 'LinkedIn', value: 'linkedin.com/in/shristi-singh', href: 'https://www.linkedin.com/in/shristi-singh', icon: '⬡' },
  { label: 'Phone', value: '+91 8677002211', href: 'tel:+918677002211', icon: '◎' },
  { label: 'Location', value: 'Lucknow, India', href: null, icon: '◈' },
]

export default function Contact() {
  const [copied, setCopied] = useState(false)

  const copyEmail = () => {
    navigator.clipboard.writeText('shristisingh0714@gmail.com')
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section id="contact" className="contact-section">
      <div className="orb" style={{ width: 500, height: 500, background: 'rgba(0,245,212,0.04)', top: '-100px', left: '-100px' }} />
      <div className="orb" style={{ width: 300, height: 300, background: 'rgba(255,45,120,0.04)', bottom: 0, right: '-50px' }} />
      <div className="container">
        <div className="section-tag">contact</div>
        <h2 className="section-title">Let's <span>connect</span></h2>
        <div className="contact-grid">
          <div className="contact-left">
            <p className="contact-intro">
              Open to internships, freelance projects, and full-time roles in content,
              social media, and digital branding. I respond fast and bring full energy to every collaboration.
            </p>
            <div className="contact-links">
              {socials.map((s, i) => (
                <div key={i} className="contact-card">
                  <span className="contact-icon">{s.icon}</span>
                  <div className="contact-info">
                    <div className="contact-label">{s.label}</div>
                    {s.href ? (
                      <a href={s.href} className="contact-value" target={s.href.startsWith('http') ? '_blank' : '_self'} rel="noreferrer">{s.value}</a>
                    ) : (
                      <span className="contact-value">{s.value}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="contact-right">
            <div className="contact-cta-box">
              <div className="cta-label mono-tag" style={{ marginBottom: 16 }}>// ready to work together?</div>
              <h3 className="cta-heading">Drop me a line —<br /><span>I don't bite.</span></h3>
              <p className="cta-sub">Whether it's a quick hello or a detailed brief, my inbox is always open.</p>
              <div className="cta-actions">
                <a href="mailto:shristisingh0714@gmail.com" className="btn-primary">Send an email ↗</a>
                <button className="btn-copy" onClick={copyEmail}>{copied ? '✓ Copied!' : 'Copy email'}</button>
              </div>
              <div className="availability">
                <span className="avail-dot" />
                Available for new opportunities
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
