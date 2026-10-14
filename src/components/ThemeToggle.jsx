import { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap'

// Switches between light and dark mode and remembers the choice.
function ThemeToggle() {
  // read the saved theme, otherwise start with light mode
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem('theme')
    return saved === 'dark' ? 'dark' : 'light'
  })

  // apply the theme to the page and save it for the next visit
  useEffect(() => {
    document.documentElement.setAttribute('data-bs-theme', theme)
    localStorage.setItem('theme', theme)
  }, [theme])

  const isDark = theme === 'dark'

  return (
    <Button
      variant="outline-secondary"
      className="theme-toggle"
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
    >
      <i className={`bi ${isDark ? 'bi-sun-fill' : 'bi-moon-stars-fill'}`} />
    </Button>
  )
}

export default ThemeToggle
