import { Container, Row, Col, Card, Badge } from 'react-bootstrap'
import { skillGroups } from '../data/skills'

// Skills grouped by category, every skill is a Badge.
function Skills() {
  return (
    <section id="skills" className="section-padding section-alt">
      <Container>
        <h2 className="section-title">Skills</h2>
        <Row xs={1} sm={2} lg={4} className="g-4">
          {skillGroups.map((group) => (
            <Col key={group.category}>
              <Card className="h-100 skills-card">
                <Card.Header as="h3" className="h5">
                  {group.category}
                </Card.Header>
                <Card.Body className="d-flex flex-wrap gap-2 align-content-start">
                  {group.skills.map((skill) => (
                    <Badge key={skill} className="skill-badge">
                      {skill}
                    </Badge>
                  ))}
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  )
}

export default Skills
