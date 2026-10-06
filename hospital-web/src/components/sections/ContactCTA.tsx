import { Phone, MapPin, Clock } from 'lucide-react'
import { hospital } from '../../data/hospital'
import Button from '../ui/Button'

export default function ContactCTA() {
  return (
    <section className="py-20 bg-primary text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-3">
            Get In Touch
          </p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
            Your Family's Health Is Our Priority
          </h2>
          <p className="text-white/70 text-lg">
            Book an appointment today or walk in — we're here when you need us.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
          <div className="flex flex-col items-center gap-3 text-center">
            <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
              <Phone className="w-5 h-5 text-accent" />
            </div>
            <div>
              <p className="font-semibold text-sm uppercase tracking-wide text-white/60 mb-1">Call Us</p>
              <a href={`tel:${hospital.phone}`} className="text-lg font-bold hover:text-accent transition-colors">
                {hospital.phone}
              </a>
            </div>
          </div>

          <div className="flex flex-col items-center gap-3 text-center">
            <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
              <MapPin className="w-5 h-5 text-accent" />
            </div>
            <div>
              <p className="font-semibold text-sm uppercase tracking-wide text-white/60 mb-1">Location</p>
              <p className="text-white/80 text-sm leading-relaxed">Bairagipatteda Junction,<br />Tirupati 517501</p>
            </div>
          </div>

          <div className="flex flex-col items-center gap-3 text-center">
            <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
              <Clock className="w-5 h-5 text-accent" />
            </div>
            <div>
              <p className="font-semibold text-sm uppercase tracking-wide text-white/60 mb-1">Hours</p>
              <p className="text-white/80 text-sm leading-relaxed">Open Daily<br />24/7 Pharmacy & Emergency</p>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          <Button href={hospital.bookingUrl} variant="primary" size="lg">
            Book Appointment
          </Button>
          <Button href="/contact" variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary">
            Contact Us
          </Button>
        </div>
      </div>
    </section>
  )
}
