import { Container } from 'react-bootstrap'
import { timelineItems } from '../data/experience'

// Vertical timeline with education and work entries.
function Timeline() {
  return (
    <section id="experience" className="section-padding section-alt">
      <Container>
        <h2 className="section-title">Education &amp; Experience</h2>
        <div className="timeline">
          {timelineItems.map((item) => (
            <div className="timeline-item" key={item.id}>
              <div className="timeline-icon" aria-hidden="true">
                <i
                  className={`bi ${
                    item.type === 'work'
                      ? 'bi-briefcase-fill'
                      : 'bi-mortarboard-fill'
                  }`}
                />
              </div>
              <div className="timeline-content">
                <div className="d-flex flex-wrap align-items-center gap-2 mb-1">
                  <h3 className="h5 mb-0">{item.title}</h3>
                  <span className="badge skill-badge">{item.period}</span>
                </div>
                <p className="timeline-place mb-1">{item.place}</p>
                <p className="mb-0">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}

export default Timeline
