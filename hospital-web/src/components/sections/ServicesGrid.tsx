import { services } from '../../data/services'
import ServiceCard from '../ui/ServiceCard'
import SectionHeading from '../ui/SectionHeading'
import Button from '../ui/Button'

export default function ServicesGrid() {
  return (
    <section className="py-20 bg-surface">
      <div className="container mx-auto px-4">
        <SectionHeading
          eyebrow="What We Offer"
          title="Comprehensive Healthcare Services"
          subtitle="From pediatrics to women's health, we provide expert care across all specialties — right here in Tirupati."
          center
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>
        <div className="mt-10 text-center">
          <Button href="/services" variant="secondary" size="md">
            View All Services
          </Button>
        </div>
      </div>
    </section>
  )
}
