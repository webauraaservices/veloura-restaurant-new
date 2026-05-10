
import { useState } from 'react'
import { NavLink } from 'react-router-dom'

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'Menu', to: '/menu' },
  { label: 'About', to: '/about' },
  { label: 'Gallery', to: '/gallery' },
  { label: 'Contact', to: '/contact' }
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className={`navbar ${open ? 'open' : ''}`}>
      <div className="navbar-inner">
        <div className="logo">Veloura</div>

        <button
          className="mobile-toggle"
          onClick={() => setOpen((prev) => !prev)}
          aria-label="Open navigation menu"
        >
          <span />
          <span />
          <span />
        </button>

        <nav className={open ? 'mobile-menu' : ''}>
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) => (isActive ? 'active' : undefined)}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <NavLink className="nav-btn" to="/contact">
          Reserve Table
        </NavLink>
      </div>
    </header>
  )
}
