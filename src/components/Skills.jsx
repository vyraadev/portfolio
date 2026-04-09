import './Skills.css'

const skillGroups = [
  {
    category: 'Content & Writing', color: 'cyan',
    skills: [
      { name: 'Content Writing', level: 95 },
      { name: 'SEO Writing', level: 85 },
      { name: 'Creative Storytelling', level: 92 },
      { name: 'Copywriting', level: 88 },
      { name: 'Proofreading & Editing', level: 90 },
    ]
  },
  {
    category: 'Social Media', color: 'pink',
    skills: [
      { name: 'Instagram Strategy', level: 90 },
      { name: 'Content Planning', level: 88 },
      { name: 'Audience Growth', level: 85 },
      { name: 'Brand Voice', level: 92 },
      { name: 'Campaign Management', level: 80 },
    ]
  },
  {
    category: 'Tech & Development', color: 'purple',
    skills: [
      { name: 'Java', level: 60 },
      { name: 'HTML', level: 65 },
      { name: 'Python', level: 35 },
      { name: 'GitHub', level: 55 },
      { name: 'DSA (LeetCode)', level: 40 },
    ]
  },
]

const tags = [
  'Content Writing','SEO','Copywriting','Storytelling',
  'Social Media Strategy','Instagram Growth','Brand Voice',
  'Campaign Planning','Proofreading','Research',
  'Java','HTML','Python (beginner)','GitHub',
  'DSA Basics','English','Hindi','Korean','Chinese',
]

export default function Skills() {
  return (
    <section id="skills" className="skills-section">
      <div className="orb" style={{ width: 400, height: 400, background: 'rgba(180,79,255,0.05)', top: '20%', right: '-100px' }} />
      <div className="container">
        <div className="section-tag">skills & tools</div>
        <h2 className="section-title">What I <span>bring</span></h2>
        <div className="skill-groups">
          {skillGroups.map((group, gi) => (
            <div key={gi} className={`skill-group skill-group--${group.color}`}>
              <div className="skill-group-header">
                <span className="skill-group-name">{group.category}</span>
              </div>
              <div className="skill-bars">
                {group.skills.map((s, si) => (
                  <div key={si} className="skill-bar-row">
                    <div className="skill-bar-meta">
                      <span className="skill-name">{s.name}</span>
                      <span className="skill-pct">{s.level}%</span>
                    </div>
                    <div className="skill-track">
                      <div className="skill-fill" style={{ '--w': `${s.level}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="skills-tags-section">
          <div className="mono-tag" style={{ marginBottom: 20 }}>// all skills</div>
          <div className="skills-tags">
            {tags.map((t, i) => <span key={i} className="skill-tag">{t}</span>)}
          </div>
        </div>
      </div>
    </section>
  )
}
