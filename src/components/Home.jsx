import { useState, useEffect } from 'react'
import './Home.css'

const roles = ['Content Writer','Social Media Manager','SEO Storyteller','Brand Builder','Tech Explorer']

export default function Home() {
  const [roleIdx, setRoleIdx] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const target = roles[roleIdx]
    let timeout
    if (!deleting && displayed.length < target.length) {
      timeout = setTimeout(() => setDisplayed(target.slice(0, displayed.length + 1)), 80)
    } else if (!deleting && displayed.length === target.length) {
      timeout = setTimeout(() => setDeleting(true), 2000)
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40)
    } else if (deleting && displayed.length === 0) {
      setDeleting(false)
      setRoleIdx((i) => (i + 1) % roles.length)
    }
    return () => clearTimeout(timeout)
  }, [displayed, deleting, roleIdx])

  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section id="home" className="home">
      <div className="grid-bg" />
      <div className="orb orb-1" />
      <div className="orb orb-2" />
      <div className="orb orb-3" />
      <div className="container home-inner">
        <div className="home-text fade-up">
          <div className="home-greeting">
            <span className="mono-tag">hello, world —</span>
          </div>
          <h1 className="home-name">
            Shristi<br />
            <span className="name-outline">Singh</span>
          </h1>
          <div className="home-role">
            <span className="role-text">{displayed}</span>
            <span className="cursor-blink">|</span>
          </div>
          <p className="home-bio">
            I craft words that convert, stories that stick, and content that builds communities —
            while teaching myself to build with code.
          </p>
          <div className="home-cta">
            <button className="btn-primary" onClick={() => scrollTo('contact')}>Let's connect</button>
            <button className="btn-ghost" onClick={() => scrollTo('experience')}>My work ↓</button>
          </div>
          <div className="home-stats">
            <div className="stat">
              <span className="stat-num">3+</span>
              <span className="stat-label">Years experience</span>
            </div>
            <div className="stat-div" />
            <div className="stat">
              <span className="stat-num">4K+</span>
              <span className="stat-label">IG followers grown</span>
            </div>
            <div className="stat-div" />
            <div className="stat">
              <span className="stat-num">5+</span>
              <span className="stat-label">Brands managed</span>
            </div>
          </div>
        </div>
        <div className="home-visual fade-up">
          <div className="avatar-wrap">
            <div className="avatar-ring ring-1" />
            <div className="avatar-ring ring-2" />
            <div className="avatar-placeholder">
              <span className="avatar-initials">SS</span>
              <div className="avatar-scan" />
            </div>
            <div className="avatar-badge badge-top">
              <span className="badge-dot" />
              Open to opportunities
            </div>
            <div className="avatar-badge badge-bottom">
              <span>✦</span> Lucknow, India
            </div>
          </div>
        </div>
      </div>
      <div className="scroll-hint">
        <div className="scroll-line" />
        <span className="mono-tag">scroll</span>
      </div>
    </section>
  )
}
