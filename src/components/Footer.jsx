import './Footer.css'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="footer">
      <div className="footer-line" />
      <div className="container footer-inner">
        <div className="footer-left">
          <span className="footer-logo">
            <span className="logo-bracket">&lt;</span>SS<span className="logo-bracket">/&gt;</span>
          </span>
          <span className="footer-copy">© {year} Shristi Singh. Built with React + Vite.</span>
        </div>
        <div className="footer-right">
          <a href="mailto:shristisingh0714@gmail.com" className="footer-link">Email</a>
          <a href="https://www.linkedin.com/in/shristi-singh" target="_blank" rel="noreferrer" className="footer-link">LinkedIn</a>
          <a href="https://github.com/vyraadev" target="_blank" rel="noreferrer" className="footer-link">GitHub</a>
        </div>
      </div>
    </footer>
  )
}
