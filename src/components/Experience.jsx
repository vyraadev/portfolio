import { useState } from 'react'
import './Experience.css'

const experiences = [
  {
    role: 'Freelance Content Writer & SMM', company: 'UK-Based Client',
    period: 'Dec 2025 – Apr 2026', type: 'Freelance · Remote', color: 'cyan',
    bullets: [
      'Delivered SEO-optimised content tailored for international audiences across multiple formats',
      'Adapted brand tone and messaging for a global market, maintaining quality across time zones',
      'Sole content point of contact — managed brief-to-publish workflow independently',
    ]
  },
  {
    role: 'Social Media Manager', company: 'Get Zenny',
    period: 'Aug 2025 – Jan 2026', type: 'Remote · India', color: 'pink',
    bullets: [
      'Led end-to-end Instagram content strategy — ideation, scripting, and publishing',
      'Produced high-performing reels aligned with trending audience behaviour and brand goals',
      'Maintained consistent brand voice while measurably improving engagement metrics',
    ]
  },
  {
    role: 'Social Media Manager', company: 'Kavoo Team',
    period: 'Sep 2025 – Dec 2025', type: 'Remote · India', color: 'purple',
    bullets: [
      'Built and managed monthly content calendars across social platforms',
      'Developed creative campaigns that increased organic reach and follower interaction',
      'Iterated content strategy in real time based on performance analytics',
    ]
  },
  {
    role: 'Content & Campaign Intern', company: 'Project Welfare',
    period: 'Jul 2023 – Apr 2025', type: 'Hybrid', color: 'cyan',
    bullets: [
      'Wrote social media content and copy for donation drives and awareness campaigns',
      'Crafted fundraising messaging that emotionally connected with diverse audiences',
      'Assisted in communication planning for large-scale outreach initiatives',
    ]
  },
  {
    role: 'Content & Campaign Intern', company: "Project You're Loved",
    period: 'May 2022 – Mar 2023', type: 'Hybrid', color: 'pink',
    bullets: [
      'Created storytelling-led content for NGO outreach and awareness campaigns',
      'Collaborated cross-functionally to keep content aligned with campaign goals',
    ]
  },
  {
    role: 'Content Contributor & Editor', company: 'Hallyuism India',
    period: 'Apr 2021 – Jul 2023', type: 'Remote', color: 'purple',
    bullets: [
      'Wrote and edited articles on Korean culture for an engaged niche readership',
      'Maintained editorial accuracy through thorough research and peer review',
      'Managed content pipeline from ideation to publication',
    ]
  },
]

export default function Experience() {
  const [active, setActive] = useState(0)
  const exp = experiences[active]

  return (
    <section id="experience" className="experience-section">
      <div className="grid-bg" style={{ opacity: 0.3 }} />
      <div className="container">
        <div className="section-tag">experience</div>
        <h2 className="section-title">Where I've <span>worked</span></h2>
        <div className="exp-layout">
          <div className="exp-sidebar">
            {experiences.map((e, i) => (
              <button key={i} className={`exp-tab ${active === i ? 'active' : ''} exp-tab--${e.color}`} onClick={() => setActive(i)}>
                <span className="exp-tab-company">{e.company}</span>
                <span className="exp-tab-period">{e.period}</span>
              </button>
            ))}
          </div>
          <div className="exp-panel" key={active}>
            <div className="exp-panel-header">
              <div>
                <h3 className="exp-role">{exp.role}</h3>
                <div className={`exp-company exp-company--${exp.color}`}>@ {exp.company}</div>
              </div>
              <div className="exp-meta">
                <span className="exp-type">{exp.type}</span>
                <span className="exp-period-badge">{exp.period}</span>
              </div>
            </div>
            <ul className="exp-bullets">
              {exp.bullets.map((b, i) => (
                <li key={i} className="exp-bullet">
                  <span className="bullet-arrow">▸</span>{b}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="tech-projects">
          <div className="mono-tag" style={{ marginBottom: 24 }}>// tech projects</div>
          <div className="tech-grid">
            <div className="tech-card">
              <div className="tech-card-icon">{'</>'}</div>
              <h4 className="tech-card-title">GitHub Projects</h4>
              <p className="tech-card-desc">Java-based scripts and HTML projects demonstrating logic, problem-solving, and structured coding practices with version control.</p>
              <div className="tech-tags"><span>Java</span><span>HTML</span><span>GitHub</span></div>
            </div>
            <div className="tech-card">
              <div className="tech-card-icon">{'{ }'}</div>
              <h4 className="tech-card-title">LeetCode Practice</h4>
              <p className="tech-card-desc">Actively solving DSA problems to build algorithmic thinking. Focus on arrays, strings, and logic-based challenges.</p>
              <div className="tech-tags"><span>DSA</span><span>Python</span><span>Problem Solving</span></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
