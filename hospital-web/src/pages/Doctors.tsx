import { Helmet } from 'react-helmet-async'
import DoctorCard from '../components/ui/DoctorCard'
import Button from '../components/ui/Button'
import SectionHeading from '../components/ui/SectionHeading'
import { doctors } from '../data/doctors'
import { hospital } from '../data/hospital'

export default function Doctors() {
  return (
    <>
      <Helmet>
        <title>Our Doctors — {hospital.name}</title>
        <meta name="description" content="Meet the expert medical team at The Family Tree Hospital — experienced specialists in pediatrics, general medicine, obstetrics, and fertility." />
      </Helmet>

      {/* Hero */}
      <section className="bg-primary text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-3">Our Team</p>
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">Meet Our Doctors</h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Experienced, compassionate specialists dedicated to delivering the best possible care for every member of your family.
          </p>
        </div>
      </section>

      {/* Grid */}
      <section className="py-20 bg-surface">
        <div className="container mx-auto px-4">
          <SectionHeading
            eyebrow="Medical Team"
            title="Specialists Who Care"
            subtitle="Each of our doctors brings deep expertise, a patient-first approach, and years of clinical excellence."
            center
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {doctors.map((doctor) => (
              <DoctorCard key={doctor.name} doctor={doctor} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading text-2xl font-bold text-text-base mb-3">Ready to Consult with Our Specialists?</h2>
          <p className="text-text-muted mb-6">Book an appointment online or call us to schedule a consultation.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button href={hospital.bookingUrl} variant="primary" size="lg">Book Appointment</Button>
            <a
              href={`tel:${hospital.phone}`}
              className="inline-flex items-center justify-center px-8 py-4 text-lg rounded-full border-2 border-primary text-primary font-semibold hover:bg-primary hover:text-white transition-colors"
            >
              Call {hospital.phone}
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
