import { Container, Row, Col } from 'react-bootstrap'
import { profile } from '../data/profile'

// Small facts shown under the bio.
const quickFacts = [
  { icon: 'bi-geo-alt-fill', label: 'Location', value: profile.location },
  { icon: 'bi-mortarboard-fill', label: 'Education', value: profile.education },
  { icon: 'bi-heart-fill', label: 'Interests', value: profile.interests },
]

// Short bio, photo and a few quick facts.
function About() {
  return (
    <section id="about" className="section-padding">
      <Container>
        <h2 className="section-title">About me</h2>
        <Row className="align-items-center g-4">
          <Col md={4} className="text-center">
            <img
              src={profile.photo}
              alt={`Profile photo of ${profile.name}`}
              className="about-photo img-fluid rounded-circle"
            />
          </Col>
          <Col md={8}>
            <p className="lead">{profile.bio}</p>
            <Row xs={1} sm={3} className="g-3 mt-1">
              {quickFacts.map((fact) => (
                <Col key={fact.label}>
                  <div className="fact-box h-100">
                    <i className={`bi ${fact.icon}`} aria-hidden="true" />
                    <span className="fact-label">{fact.label}</span>
                    <span className="fact-value">{fact.value}</span>
                  </div>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default About
