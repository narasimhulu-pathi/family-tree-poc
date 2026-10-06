import { hospital } from '../../data/hospital'
import Button from '../ui/Button'

export default function HeroBanner() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="/images/hero.jpeg"
          alt="Family Tree Hospital"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary/60 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4 py-24">
        <div className="max-w-xl">
          <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-3">
            Est. {hospital.established}
          </p>
          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4">
            Quality Care for<br />Your Entire Family
          </h1>
          <p className="text-white/80 text-lg leading-relaxed mb-8">
            {hospital.tagline} Expert pediatricians, physicians, and gynaecologists — all under one roof in Tirupati.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button href={hospital.bookingUrl} variant="primary" size="lg">
              Book Appointment
            </Button>
            <Button href="/services" variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary">
              Our Services
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
