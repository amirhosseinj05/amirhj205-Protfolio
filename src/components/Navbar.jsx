import { useState } from 'react'
import { Container, Nav, Navbar as BootstrapNavbar } from 'react-bootstrap'
import ThemeToggle from './ThemeToggle'
import { profile } from '../data/profile'

// Every link points to a section of the same page.
const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
]

// Top navigation bar. The links scroll smoothly to each section.
function Navbar() {
  // needed so we can close the mobile menu after a link is clicked
  const [expanded, setExpanded] = useState(false)

  return (
    <BootstrapNavbar
      expand="lg"
      fixed="top"
      expanded={expanded}
      onToggle={setExpanded}
      bg="body-tertiary"
      className="site-navbar border-bottom"
    >
      <Container>
        <BootstrapNavbar.Brand href="#home" className="fw-bold">
          {profile.name}
        </BootstrapNavbar.Brand>
        <BootstrapNavbar.Toggle aria-label="Toggle navigation" />
        <BootstrapNavbar.Collapse id="site-nav">
          <Nav className="me-auto">
            {navLinks.map((link) => (
              <Nav.Link
                key={link.href}
                href={link.href}
                onClick={() => setExpanded(false)}
              >
                {link.label}
              </Nav.Link>
            ))}
          </Nav>
          <ThemeToggle />
        </BootstrapNavbar.Collapse>
      </Container>
    </BootstrapNavbar>
  )
}

export default Navbar
