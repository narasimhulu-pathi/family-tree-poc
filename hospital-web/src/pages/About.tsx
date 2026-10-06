import { Helmet } from 'react-helmet-async'
import { CheckCircle2 } from 'lucide-react'
import SectionHeading from '../components/ui/SectionHeading'
import Button from '../components/ui/Button'
import { hospital } from '../data/hospital'

const values = [
  { title: 'Patient-First Care', description: 'Every decision we make centers on the well-being of our patients and their families.' },
  { title: 'Clinical Excellence', description: 'Our doctors are trained at leading institutions and stay current with the latest evidence-based practices.' },
  { title: 'Compassionate Environment', description: 'We believe healthcare should feel warm, respectful, and supportive — not intimidating.' },
  { title: 'Family-Centered Approach', description: 'We treat the whole family, from newborns to grandparents, understanding the interconnected nature of family health.' },
]

const milestones = [
  { year: '2021', event: 'Founded in December, opening our doors to families in Tirupati.' },
  { year: '2022', event: 'Expanded to include a 24/7 Pharmacy and in-house Laboratory services.' },
  { year: '2023', event: 'Added Fertility & Infertility Services and enhanced Inpatient Care facilities.' },
  { year: '2024', event: 'Served over 15,000 families and expanded our medical team.' },
]

export default function About() {
  return (
    <>
      <Helmet>
        <title>About Us — {hospital.name}</title>
        <meta name="description" content="Learn about The Family Tree Hospital — our story, values, and commitment to quality healthcare for every family in Tirupati." />
      </Helmet>

      {/* Hero */}
      <section className="bg-primary text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-3">Our Story</p>
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">About The Family Tree Hospital</h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            A family healthcare destination built on trust, compassion, and clinical excellence — right in the heart of Tirupati.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeading eyebrow="Our Mission" title="Healthcare That Feels Like Family" />
              <p className="text-text-muted leading-relaxed mb-6">
                The Family Tree Hospital was founded in December 2021 with a singular vision: to provide comprehensive, high-quality healthcare that treats every patient like a member of our own family. Located at Bairagipatteda Junction in Tirupati, we bring together expert specialists across pediatrics, general medicine, obstetrics, and fertility under one roof.
              </p>
              <p className="text-text-muted leading-relaxed mb-8">
                We believe that great healthcare is built on trust, transparency, and compassion. From your first consultation to your complete recovery, our dedicated team is with you every step of the way.
              </p>
              <Button href={hospital.bookingUrl} variant="primary">Book an Appointment</Button>
            </div>
            <div className="bg-surface rounded-2xl overflow-hidden aspect-video lg:aspect-square">
              <img
                src="/images/hero.jpeg"
                alt="Family Tree Hospital facility"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-surface">
        <div className="container mx-auto px-4">
          <SectionHeading eyebrow="Our Values" title="What We Stand For" center />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {values.map((v) => (
              <div key={v.title} className="bg-white rounded-2xl p-6 flex gap-4 shadow-sm">
                <CheckCircle2 className="w-6 h-6 text-secondary shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-heading font-bold text-text-base mb-1">{v.title}</h3>
                  <p className="text-text-muted text-sm leading-relaxed">{v.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-2xl">
          <SectionHeading eyebrow="Our Journey" title="Milestones" center />
          <ol className="relative border-l border-primary/20 ml-4">
            {milestones.map((m) => (
              <li key={m.year} className="mb-8 ml-6 last:mb-0">
                <span className="absolute -left-3 w-6 h-6 rounded-full bg-primary flex items-center justify-center">
                  <span className="w-2 h-2 rounded-full bg-white" />
                </span>
                <p className="text-primary font-bold font-heading text-sm mb-1">{m.year}</p>
                <p className="text-text-muted text-sm leading-relaxed">{m.event}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </>
  )
}
