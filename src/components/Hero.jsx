import { Container, Row, Col, Button } from 'react-bootstrap'
import { profile } from '../data/profile'

// The first screen of the site: name, title, buttons and social links.
function Hero() {
  return (
    <section id="home" className="hero-section">
      <Container>
        <Row>
          <Col lg={9} className="fade-in">
            <p className="hero-greeting">Hi, my name is</p>
            <h1 className="hero-name">{profile.name}</h1>
            <h2 className="hero-title">{profile.title}</h2>
            <p className="hero-tagline">{profile.tagline}</p>

            <div className="d-flex flex-wrap gap-3 mb-4">
              <Button href="#projects" variant="primary" size="lg">
                View Projects
              </Button>
              <Button href="#contact" variant="outline-primary" size="lg">
                Contact me
              </Button>
            </div>

            <div className="hero-socials">
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
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Hero
