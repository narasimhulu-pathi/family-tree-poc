import { Helmet } from 'react-helmet-async'
import { hospital } from '../data/hospital'
import { assetUrl } from '../utils/asset'

export default function DirectorsDesk() {
  return (
    <>
      <Helmet>
        <title>Director's Desk — {hospital.name}</title>
        <meta name="description" content="A message from the Director of The Family Tree Hospital on our vision for family healthcare in Tirupati." />
      </Helmet>

      {/* Hero */}
      <section className="bg-primary text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-3">Leadership</p>
          <h1 className="font-heading text-4xl md:text-5xl font-bold">Director's Desk</h1>
        </div>
      </section>

      {/* Message */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="flex flex-col sm:flex-row gap-8 items-start mb-10">
              <div className="shrink-0">
                <div className="w-32 h-32 rounded-2xl overflow-hidden bg-surface">
                  <img
                    src={assetUrl('/images/doctors/dr-shravan.jpeg')}
                    alt="Dr. Shravan Krishna Reddy P"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              </div>
              <div>
                <h2 className="font-heading text-2xl font-bold text-text-base">Dr. Shravan Krishna Reddy P</h2>
                <p className="text-secondary font-semibold mt-1">Founding Director & Senior Pediatrician</p>
                <p className="text-text-muted text-sm mt-1">MBBS, MD (Pediatrics), Fellowship in Perinatal Medicine</p>
              </div>
            </div>

            <div className="prose prose-lg max-w-none text-text-muted space-y-5 leading-relaxed">
              <p>
                Dear Families,
              </p>
              <p>
                When we founded The Family Tree Hospital in December 2021, we had a clear vision: to create a healthcare home where every patient — from a newborn to a grandparent — receives the same level of expert, compassionate care that we would want for our own families.
              </p>
              <p>
                Over the past few years, we have had the privilege of serving thousands of families across Tirupati. We've welcomed newborns into the world, guided children through their early years, helped adults manage complex conditions, and supported women through some of the most significant chapters of their lives. Each of these moments reminds us why we chose this calling.
              </p>
              <p>
                Our name — The Family Tree Hospital — reflects our belief that health is deeply interconnected within families. When one member thrives, the whole family benefits. We strive to be the trusted healthcare partner who sees that bigger picture, not just treating individual symptoms, but supporting the long-term health and well-being of your entire family.
              </p>
              <p>
                We have assembled a remarkable team of specialists — Dr. Harshita Reddy and Dr. Rachana Reddy — who share this vision. Together, we continue to invest in the latest medical knowledge, equipment, and facilities so that you never have to travel far for quality care.
              </p>
              <p>
                Thank you for trusting us with your health. We consider it a privilege and a responsibility that we take to heart every single day.
              </p>
              <p className="font-semibold text-text-base">
                With care,<br />
                Dr. Shravan Krishna Reddy P<br />
                <span className="text-text-muted font-normal text-base">Founding Director, The Family Tree Hospital</span>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
