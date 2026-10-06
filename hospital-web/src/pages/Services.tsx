import { Helmet } from 'react-helmet-async'
import SectionHeading from '../components/ui/SectionHeading'
import ServiceCard from '../components/ui/ServiceCard'
import { services } from '../data/services'
import { hospital } from '../data/hospital'
import Button from '../components/ui/Button'

export default function Services() {
  return (
    <>
      <Helmet>
        <title>Our Services — {hospital.name}</title>
        <meta name="description" content="Explore the comprehensive healthcare services at The Family Tree Hospital — pediatrics, general medicine, obstetrics, fertility, pharmacy, lab, and more." />
      </Helmet>

      {/* Hero */}
      <section className="bg-primary text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-3">What We Offer</p>
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">Our Healthcare Services</h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Comprehensive care across multiple specialties — all under one roof so your family never has to travel far.
          </p>
        </div>
      </section>

      {/* Grid */}
      <section className="py-20 bg-surface">
        <div className="container mx-auto px-4">
          <SectionHeading
            eyebrow="All Services"
            title="Everything Your Family Needs"
            subtitle="From routine check-ups to specialized treatments, we cover the full spectrum of family healthcare."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading text-2xl font-bold text-text-base mb-3">Ready to Book a Consultation?</h2>
          <p className="text-text-muted mb-6">Our specialists are available 6 days a week. Book your slot online in minutes.</p>
          <Button href={hospital.bookingUrl} variant="primary" size="lg">Book Appointment</Button>
        </div>
      </section>
    </>
  )
}
