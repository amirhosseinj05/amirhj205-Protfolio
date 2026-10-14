import { Modal, Button, Badge } from 'react-bootstrap'

// Extra information about a project, opens when a project card is clicked.
function ProjectModal({ project, onClose }) {
  return (
    <Modal show={project !== null} onHide={onClose} centered size="lg">
      {project && (
        <>
          <Modal.Header closeButton>
            <Modal.Title>{project.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <img
              src={project.image}
              alt={project.imageAlt}
              className="img-fluid rounded w-100 mb-3"
            />
            <p>{project.details}</p>
            <h6 className="mb-2">Tech stack</h6>
            <div className="d-flex flex-wrap gap-2">
              {project.tech.map((item) => (
                <Badge key={item} className="skill-badge">
                  {item}
                </Badge>
              ))}
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="outline-secondary" href={project.github} target="_blank" rel="noreferrer">
              <i className="bi bi-github me-1" aria-hidden="true" /> Source code
            </Button>
            <Button variant="primary" href={project.demo} target="_blank" rel="noreferrer">
              <i className="bi bi-box-arrow-up-right me-1" aria-hidden="true" /> Live demo
            </Button>
          </Modal.Footer>
        </>
      )}
    </Modal>
  )
}

export default ProjectModal
