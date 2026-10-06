import { doctors } from '../../data/doctors'
import DoctorCard from '../ui/DoctorCard'
import SectionHeading from '../ui/SectionHeading'
import Button from '../ui/Button'

export default function DoctorTeam() {
  const featured = doctors.filter((d) => d.featured)

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <SectionHeading
          eyebrow="Our Doctors"
          title="Meet the Team Behind Your Care"
          subtitle="Experienced specialists dedicated to providing compassionate, evidence-based care for every member of your family."
          center
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {featured.map((doctor) => (
            <DoctorCard key={doctor.name} doctor={doctor} />
          ))}
        </div>
        <div className="mt-10 text-center">
          <Button href="/doctors" variant="secondary" size="md">
            Meet All Doctors
          </Button>
        </div>
      </div>
    </section>
  )
}
