import { useParams, Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { CheckCircle2, ArrowLeft } from 'lucide-react'
import { services } from '../data/services'
import { hospital } from '../data/hospital'
import Button from '../components/ui/Button'
import NotFound from './NotFound'

export default function ServiceDetail() {
  const { slug } = useParams<{ slug: string }>()
  const service = services.find((s) => s.slug === slug)

  if (!service) return <NotFound />

  return (
    <>
      <Helmet>
        <title>{service.title} — {hospital.name}</title>
        <meta name="description" content={service.shortDescription} />
      </Helmet>

      {/* Hero */}
      <section className="bg-primary text-white py-20">
        <div className="container mx-auto px-4">
          <Link to="/services" className="inline-flex items-center gap-2 text-white/60 hover:text-white text-sm mb-6 transition-colors">
            <ArrowLeft className="w-4 h-4" />
            All Services
          </Link>
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-3">{service.title}</h1>
          <p className="text-white/70 text-lg max-w-2xl">{service.shortDescription}</p>
        </div>
      </section>

      {/* Detail */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="font-heading text-2xl font-bold text-text-base mb-4">About This Service</h2>
              <p className="text-text-muted leading-relaxed text-lg mb-8">{service.fullDescription}</p>

              <h3 className="font-heading text-xl font-bold text-text-base mb-4">What's Included</h3>
              <ul className="flex flex-col gap-3">
                {service.bullets.map((bullet) => (
                  <li key={bullet} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                    <span className="text-text-muted">{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Sidebar CTA */}
            <aside className="lg:col-span-1">
              <div className="sticky top-24 bg-surface rounded-2xl p-6 border border-gray-100">
                <h3 className="font-heading font-bold text-text-base text-lg mb-3">Book a Consultation</h3>
                <p className="text-text-muted text-sm mb-5">
                  Ready to discuss {service.title.toLowerCase()}? Book online or call us directly.
                </p>
                <Button href={hospital.bookingUrl} variant="primary" size="md" className="w-full justify-center">
                  Book Appointment
                </Button>
                <a
                  href={`tel:${hospital.phone}`}
                  className="mt-3 flex items-center justify-center gap-2 text-primary font-semibold text-sm hover:underline"
                >
                  {hospital.phone}
                </a>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Related services */}
      <section className="py-12 bg-surface border-t border-gray-100">
        <div className="container mx-auto px-4 text-center">
          <p className="text-text-muted mb-4">Explore our other services</p>
          <Link to="/services" className="text-primary font-semibold hover:underline">
            View All Services →
          </Link>
        </div>
      </section>
    </>
  )
}
