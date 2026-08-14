import { useState, useEffect } from 'react'

const links = [
  { href: '#about', label: 'About' },
  { href: '#projects', label: 'Projects' },
  { href: '#experience', label: 'Experience' },
  { href: '#contact', label: 'Contact' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className="fixed top-0 left-0 w-full z-50 border-b border-neutral-200 bg-white/80 backdrop-blur">
      <div className="max-w-5xl mx-auto flex items-center justify-between px-6 py-4">
        <a href="#hero" className="font-semibold tracking-tight">
          Michael B.
        </a>

        {scrolled ? (
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex flex-col gap-1.5 w-6"
            aria-label="Toggle menu"
          >
            <span className="h-0.5 w-full bg-neutral-900" />
            <span className="h-0.5 w-full bg-neutral-900" />
            <span className="h-0.5 w-full bg-neutral-900" />
          </button>
        ) : (
          <ul className="flex gap-6 text-sm">
            {links.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="hover:opacity-60 transition-opacity">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>

      {scrolled && menuOpen && (
        <ul className="flex flex-col items-end gap-4 px-6 py-6 text-sm bg-white border-t border-neutral-200">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="hover:opacity-60 transition-opacity"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  )
}