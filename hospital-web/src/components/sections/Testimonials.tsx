import { testimonials } from '../../data/testimonials'
import SectionHeading from '../ui/SectionHeading'

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <span key={i} className={i < rating ? 'text-accent' : 'text-gray-200'}>
          ★
        </span>
      ))}
    </div>
  )
}

export default function Testimonials() {
  return (
    <section className="py-20 bg-primary-light">
      <div className="container mx-auto px-4">
        <SectionHeading
          eyebrow="Patient Reviews"
          title="What Our Patients Say"
          subtitle="Real experiences from families who trust The Family Tree Hospital."
          center
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-6 shadow-sm flex flex-col gap-3"
            >
              <StarRating rating={t.rating} />
              <p className="text-text-muted text-sm leading-relaxed flex-1">"{t.text}"</p>
              <p className="font-semibold text-text-base text-sm">— {t.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
