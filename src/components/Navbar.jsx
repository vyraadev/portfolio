import { useState, useEffect } from 'react'
import './Navbar.css'

const links = ['home', 'about', 'skills', 'experience', 'contact']

export default function Navbar() {
  const [active, setActive] = useState('home')
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40)
      const sections = links.map(id => document.getElementById(id))
      const current = sections.find(s => {
        if (!s) return false
        const rect = s.getBoundingClientRect()
        return rect.top <= 100 && rect.bottom >= 100
      })
      if (current) setActive(current.id)
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setMenuOpen(false)
  }

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-inner">
        <button className="nav-logo" onClick={() => scrollTo('home')}>
          <span className="logo-bracket">&lt;</span>SS<span className="logo-bracket">/&gt;</span>
        </button>
        <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
          {links.map(id => (
            <li key={id}>
              <button className={active === id ? 'active' : ''} onClick={() => scrollTo(id)}>
                {id}
              </button>
            </li>
          ))}
        </ul>
        <button className={`hamburger ${menuOpen ? 'open' : ''}`} onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
          <span /><span /><span />
        </button>
      </div>
    </nav>
  )
}
