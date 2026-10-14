import { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap'

// Floating button that appears after scrolling down.
function BackToTop() {
  const [visible, setVisible] = useState(false)

  // show the button once the user scrolled further than 300px
  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  if (!visible) {
    return null
  }

  return (
    <Button
      className="back-to-top"
      variant="primary"
      aria-label="Back to top"
      title="Back to top"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
    >
      <i className="bi bi-arrow-up" aria-hidden="true" />
    </Button>
  )
}

export default BackToTop
