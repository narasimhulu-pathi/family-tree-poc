import { Helmet } from 'react-helmet-async'
import HeroBanner from '../components/sections/HeroBanner'
import ServicesGrid from '../components/sections/ServicesGrid'
import DoctorTeam from '../components/sections/DoctorTeam'
import Testimonials from '../components/sections/Testimonials'
import ContactCTA from '../components/sections/ContactCTA'
import StatCounter from '../components/ui/StatCounter'
import { stats } from '../data/stats'
import { hospital } from '../data/hospital'

export default function Home() {
  return (
    <>
      <Helmet>
        <title>{hospital.name} — Quality Healthcare in Tirupati</title>
        <meta
          name="description"
          content="The Family Tree Hospital in Tirupati offers expert pediatric, general medicine, obstetrics, and fertility care. Book your appointment today."
        />
      </Helmet>

      <HeroBanner />

      {/* Stats strip */}
      <section className="py-12 bg-white border-y border-gray-100">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <StatCounter key={stat.label} stat={stat} />
            ))}
          </div>
        </div>
      </section>

      <ServicesGrid />
      <DoctorTeam />
      <Testimonials />
      <ContactCTA />
    </>
  )
}
