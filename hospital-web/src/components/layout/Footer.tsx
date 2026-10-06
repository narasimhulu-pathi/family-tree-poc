import { Link } from 'react-router-dom'
import { Phone, Mail, MapPin } from 'lucide-react'
import { assetUrl } from '../../utils/asset'
import { hospital } from '../../data/hospital'

const quickLinks = [
  { label: 'Home', to: '/' },
  { label: 'About Us', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Our Doctors', to: '/doctors' },
  { label: 'Gallery', to: '/gallery' },
  { label: 'Blog', to: '/blog' },
  { label: 'Contact', to: '/contact' },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-primary text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Column 1: Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src={assetUrl('/images/logo.png')} alt="The Family Tree Hospital" className="h-12 w-auto" />
              <span className="font-heading font-bold text-lg leading-tight">
                The Family Tree<br />Hospital
              </span>
            </div>
            <p className="text-white/70 text-sm leading-relaxed mb-5">
              {hospital.tagline}
            </p>
            <div className="flex items-center gap-2">
              {[
                { label: 'Facebook', href: hospital.social.facebook },
                { label: 'Instagram', href: hospital.social.instagram },
                { label: 'X', href: hospital.social.twitter },
              ].map(({ label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="px-3 py-1.5 rounded-full bg-white/10 text-xs font-semibold hover:bg-white/20 transition-colors"
                >
                  {label}
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="font-heading font-bold text-base mb-4">Quick Links</h3>
            <ul className="flex flex-col gap-2">
              {quickLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-white/70 text-sm hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div>
            <h3 className="font-heading font-bold text-base mb-4">Contact Us</h3>
            <ul className="flex flex-col gap-3">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0 text-accent" />
                <span className="text-white/70 text-sm leading-relaxed">{hospital.address}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 shrink-0 text-accent" />
                <a
                  href={`tel:${hospital.phone}`}
                  className="text-white/70 text-sm hover:text-white transition-colors"
                >
                  {hospital.phone}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 shrink-0 text-accent" />
                <a
                  href={`mailto:${hospital.email}`}
                  className="text-white/70 text-sm hover:text-white transition-colors break-all"
                >
                  {hospital.email}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 py-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-white/50">
          <span>© {year} The Family Tree Hospital. All rights reserved.</span>
          <span>Est. {hospital.established} · Tirupati, Andhra Pradesh</span>
        </div>
      </div>
    </footer>
  )
}
