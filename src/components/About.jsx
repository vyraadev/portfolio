import './About.css'

const facts = [
  { icon: '✦', label: 'Based in', value: 'Lucknow, India' },
  { icon: '✦', label: 'Languages', value: 'English · Hindi · Korean · Chinese' },
  { icon: '✦', label: 'Available for', value: 'Internships · Freelance · Remote' },
  { icon: '✦', label: 'Currently', value: 'Learning Python & DSA on LeetCode' },
]

export default function About() {
  return (
    <section id="about">
      <div className="grid-bg" style={{ opacity: 0.4 }} />
      <div className="container">
        <div className="section-tag">about me</div>
        <div className="about-grid">
          <div className="about-left">
            <h2 className="section-title" style={{ marginBottom: 28 }}>
              Words meet <span>code</span>
            </h2>
            <p className="about-para">
              I'm a content writer and social media manager who builds communities through
              strategic storytelling. Over 3+ years, I've worked with Indian startups,
              NGOs, and a UK-based client — creating content that actually moves people.
            </p>
            <p className="about-para">
              What makes me different? I don't just write — I understand brand voice,
              audience psychology, and what makes content perform. I've grown a personal
              Instagram account to 4K+ followers from scratch, which means I practice what I preach.
            </p>
            <p className="about-para">
              Right now I'm bridging my creative side with tech — building GitHub projects
              in Java and HTML, solving DSA problems on LeetCode, and learning Python.
              I believe the best content creators of tomorrow understand how products are actually built.
            </p>
            <div className="about-links">
              <a href="mailto:shristisingh0714@gmail.com" className="about-link">
                shristisingh0714@gmail.com ↗
              </a>
            </div>
          </div>
          <div className="about-right">
            <div className="facts-card">
              <div className="facts-header">
                <span className="mono-tag">// quick facts</span>
              </div>
              {facts.map((f, i) => (
                <div key={i} className="fact-row">
                  <span className="fact-icon">{f.icon}</span>
                  <div>
                    <div className="fact-label">{f.label}</div>
                    <div className="fact-value">{f.value}</div>
                  </div>
                </div>
              ))}
            </div>
            <div className="about-terminal">
              <div className="terminal-bar">
                <span className="t-dot" style={{ background: '#ff5f57' }} />
                <span className="t-dot" style={{ background: '#febc2e' }} />
                <span className="t-dot" style={{ background: '#28c840' }} />
                <span className="t-title">shristi.json</span>
              </div>
              <div className="terminal-body">
                <span className="t-key">"role"</span><span className="t-colon">: </span><span className="t-str">"Content Writer + Tech Explorer"</span><br />
                <span className="t-key">"mode"</span><span className="t-colon">: </span><span className="t-str">"learning && building"</span><br />
                <span className="t-key">"status"</span><span className="t-colon">: </span><span className="t-bool">open_to_work</span><br />
                <span className="t-key">"superpower"</span><span className="t-colon">: </span><span className="t-str">"making people care"</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
