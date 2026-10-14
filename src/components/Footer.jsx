import { Container } from 'react-bootstrap'
import { profile } from '../data/profile'

// Simple footer with social links and the copyright line.
function Footer() {
  return (
    <footer className="site-footer border-top">
      <Container className="py-4 d-flex flex-column flex-md-row justify-content-between align-items-center gap-3">
        <p className="mb-0">
          &copy; {new Date().getFullYear()} {profile.name}. Built with React
          and Bootstrap.
        </p>
        <div className="footer-socials">
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub profile"
          >
            <i className="bi bi-github" aria-hidden="true" />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn profile"
          >
            <i className="bi bi-linkedin" aria-hidden="true" />
          </a>
          <a href={`mailto:${profile.email}`} aria-label="Send me an email">
            <i className="bi bi-envelope-fill" aria-hidden="true" />
          </a>
        </div>
      </Container>
    </footer>
  )
}

export default Footer
