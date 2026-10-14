import { useState } from 'react'
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap'
import { profile } from '../data/profile'

// Contact form with simple client-side validation.
function Contact() {
  // the three input values
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  })

  // shows the green / red field messages after a submit attempt
  const [showValidation, setShowValidation] = useState(false)
  // shows the success alert after a valid submit
  const [sent, setSent] = useState(false)

  // keep the state in sync with what the user types
  const handleChange = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value })
  }

  // TODO: connect this form to Formspree or EmailJS so the message really gets sent.
  // There is no backend yet. Example:
  //   await fetch('https://formspree.io/f/YOUR_FORM_ID', {
  //     method: 'POST',
  //     headers: { 'Content-Type': 'application/json' },
  //     body: JSON.stringify(form),
  //   })
  const handleSubmit = (event) => {
    event.preventDefault()
    const formElement = event.currentTarget

    if (formElement.checkValidity()) {
      setSent(true)
      setForm({ name: '', email: '', message: '' })
      formElement.reset()
    }

    setShowValidation(true)
  }

  return (
    <section id="contact" className="section-padding">
      <Container>
        <h2 className="section-title">Contact me</h2>
        <Row className="justify-content-center">
          <Col lg={8}>
            <p className="text-center mb-4">
              Have a question or a project in mind? Drop me a message and I
              will get back to you. You can also write to{' '}
              <a href={`mailto:${profile.email}`}>{profile.email}</a>.
            </p>

            {sent && (
              <Alert
                variant="success"
                onClose={() => setSent(false)}
                dismissible
              >
                Thanks for your message! I will reply as soon as I can.
              </Alert>
            )}

            <Form noValidate wasValidated={showValidation} onSubmit={handleSubmit}>
              <Row>
                <Col md={6}>
                  <Form.Group className="mb-3" controlId="contact-name">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                      type="text"
                      name="name"
                      placeholder="Your name"
                      value={form.name}
                      onChange={handleChange}
                      required
                    />
                    <Form.Control.Feedback type="invalid">
                      Please enter your name.
                    </Form.Control.Feedback>
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group className="mb-3" controlId="contact-email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      type="email"
                      name="email"
                      placeholder="you@example.com"
                      value={form.email}
                      onChange={handleChange}
                      required
                    />
                    <Form.Control.Feedback type="invalid">
                      Please enter a valid email address.
                    </Form.Control.Feedback>
                  </Form.Group>
                </Col>
              </Row>
              <Form.Group className="mb-3" controlId="contact-message">
                <Form.Label>Message</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={5}
                  name="message"
                  placeholder="Write your message here..."
                  value={form.message}
                  onChange={handleChange}
                  required
                  minLength={10}
                />
                <Form.Control.Feedback type="invalid">
                  Please write a message (at least 10 characters).
                </Form.Control.Feedback>
              </Form.Group>
              <div className="d-grid">
                <Button type="submit" variant="primary" size="lg">
                  Send message
                </Button>
              </div>
            </Form>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Contact
