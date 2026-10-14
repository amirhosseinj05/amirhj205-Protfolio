import { useState } from 'react'
import { Container, Row, Col, Card, Button, Badge } from 'react-bootstrap'
import { projects } from '../data/projects'
import ProjectModal from './ProjectModal'

// Grid with all projects. Clicking a card opens the details modal.
function Projects() {
  // which project is currently open in the modal (null = none)
  const [selectedProject, setSelectedProject] = useState(null)

  // open the modal with the clicked project
  const openProject = (project) => {
    setSelectedProject(project)
  }

  // support keyboard users: Enter or Space opens the card
  const handleKeyDown = (event, project) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault()
      openProject(project)
    }
  }

  return (
    <section id="projects" className="section-padding">
      <Container>
        <h2 className="section-title">Projects</h2>
        <Row xs={1} md={2} className="g-4">
          {projects.map((project) => (
            <Col key={project.id}>
              <Card
                className="project-card h-100"
                role="button"
                tabIndex={0}
                onClick={() => openProject(project)}
                onKeyDown={(event) => handleKeyDown(event, project)}
              >
                <Card.Img
                  variant="top"
                  src={project.image}
                  alt={project.imageAlt}
                />
                <Card.Body>
                  <Card.Title>{project.title}</Card.Title>
                  <Card.Text>{project.description}</Card.Text>
                  <div className="d-flex flex-wrap gap-2 mb-3">
                    {project.tech.map((item) => (
                      <Badge key={item} className="skill-badge">
                        {item}
                      </Badge>
                    ))}
                  </div>
                  <div className="d-flex gap-2">
                    <Button
                      size="sm"
                      variant="outline-primary"
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      onClick={(event) => event.stopPropagation()}
                    >
                      <i className="bi bi-github me-1" aria-hidden="true" /> Code
                    </Button>
                    <Button
                      size="sm"
                      variant="primary"
                      href={project.demo}
                      target="_blank"
                      rel="noreferrer"
                      onClick={(event) => event.stopPropagation()}
                    >
                      <i className="bi bi-box-arrow-up-right me-1" aria-hidden="true" />{' '}
                      Demo
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  )
}

export default Projects
