import { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X, Phone, ChevronDown } from 'lucide-react'
import { hospital } from '../../data/hospital'
import { assetUrl } from '../../utils/asset'
import Button from '../ui/Button'

const navLinks = [
  { label: 'Home', to: '/' },
  {
    label: 'About',
    children: [
      { label: 'About Us', to: '/about' },
      { label: "Director's Desk", to: '/directors-desk' },
    ],
  },
  { label: 'Services', to: '/services' },
  { label: 'Doctors', to: '/doctors' },
  { label: 'Gallery', to: '/gallery' },
  { label: 'Blog', to: '/blog' },
  { label: 'Contact', to: '/contact' },
]

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [aboutOpen, setAboutOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const closeMobile = () => {
    setMobileOpen(false)
    setAboutOpen(false)
  }

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-shadow duration-300 bg-white ${
        scrolled ? 'shadow-md' : 'shadow-sm'
      }`}
    >
      {/* Top bar */}
      <div className="hidden md:block bg-primary text-white text-sm py-1.5">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <span>Quality healthcare for your entire family</span>
          <a
            href={`tel:${hospital.phone}`}
            className="flex items-center gap-1.5 hover:text-accent transition-colors"
          >
            <Phone className="w-3.5 h-3.5" />
            {hospital.phone}
          </a>
        </div>
      </div>

      {/* Main nav */}
      <nav className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" onClick={closeMobile} className="flex items-center gap-2 shrink-0">
          <img src={assetUrl('/images/logo.png')} alt="The Family Tree Hospital" className="h-10 w-auto" />
          <span className="font-heading font-bold text-primary text-sm leading-tight hidden sm:block">
            The Family Tree<br />Hospital
          </span>
        </Link>

        {/* Desktop links */}
        <ul className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) =>
            link.children ? (
              <li key={link.label} className="relative group">
                <button
                  className="flex items-center gap-1 px-3 py-2 rounded-lg text-text-base font-medium text-sm hover:text-primary hover:bg-surface transition-colors"
                  aria-haspopup="true"
                >
                  {link.label}
                  <ChevronDown className="w-3.5 h-3.5 group-hover:rotate-180 transition-transform duration-200" />
                </button>
                <ul className="absolute top-full left-0 mt-1 w-48 bg-white rounded-xl shadow-lg border border-gray-100 py-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  {link.children.map((child) => (
                    <li key={child.to}>
                      <NavLink
                        to={child.to}
                        className={({ isActive }) =>
                          `block px-4 py-2.5 text-sm hover:bg-surface hover:text-primary transition-colors ${
                            isActive ? 'text-primary font-semibold' : 'text-text-base'
                          }`
                        }
                      >
                        {child.label}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </li>
            ) : (
              <li key={link.label}>
                <NavLink
                  to={link.to!}
                  className={({ isActive }) =>
                    `px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                      isActive
                        ? 'text-primary bg-primary-light font-semibold'
                        : 'text-text-base hover:text-primary hover:bg-surface'
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              </li>
            )
          )}
        </ul>

        {/* Desktop CTA */}
        <div className="hidden lg:block">
          <Button href={hospital.bookingUrl} variant="primary" size="sm">
            Book Appointment
          </Button>
        </div>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden p-2 rounded-lg text-text-base hover:bg-surface transition-colors"
          onClick={() => setMobileOpen((o) => !o)}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 shadow-lg">
          <ul className="container mx-auto px-4 py-4 flex flex-col gap-1">
            {navLinks.map((link) =>
              link.children ? (
                <li key={link.label}>
                  <button
                    className="w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-text-base font-medium hover:bg-surface transition-colors"
                    onClick={() => setAboutOpen((o) => !o)}
                  >
                    {link.label}
                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-200 ${aboutOpen ? 'rotate-180' : ''}`}
                    />
                  </button>
                  {aboutOpen && (
                    <ul className="ml-4 mt-1 flex flex-col gap-0.5">
                      {link.children.map((child) => (
                        <li key={child.to}>
                          <NavLink
                            to={child.to}
                            onClick={closeMobile}
                            className={({ isActive }) =>
                              `block px-3 py-2 rounded-lg text-sm transition-colors ${
                                isActive ? 'text-primary font-semibold bg-primary-light' : 'text-text-muted hover:text-primary hover:bg-surface'
                              }`
                            }
                          >
                            {child.label}
                          </NavLink>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ) : (
                <li key={link.label}>
                  <NavLink
                    to={link.to!}
                    onClick={closeMobile}
                    className={({ isActive }) =>
                      `block px-3 py-2.5 rounded-lg font-medium transition-colors ${
                        isActive
                          ? 'text-primary bg-primary-light font-semibold'
                          : 'text-text-base hover:text-primary hover:bg-surface'
                      }`
                    }
                  >
                    {link.label}
                  </NavLink>
                </li>
              )
            )}
            <li className="pt-2">
              <Button href={hospital.bookingUrl} variant="primary" size="md" className="w-full justify-center">
                Book Appointment
              </Button>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
