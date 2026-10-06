import type { ComponentType } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Baby, Stethoscope, Heart, Sprout, Syringe, FlaskConical, Pill, BedDouble } from 'lucide-react'
import type { Service } from '../../data/services'

const iconMap: Record<string, ComponentType<{ className?: string }>> = {
  Baby,
  Stethoscope,
  Heart,
  Sprout,
  Syringe,
  FlaskConical,
  Pill,
  BedDouble,
}

interface ServiceCardProps {
  service: Service
}

export default function ServiceCard({ service }: ServiceCardProps) {
  const Icon = iconMap[service.icon] ?? Stethoscope

  return (
    <Link
      to={`/services/${service.slug}`}
      className="group flex flex-col bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md hover:border-primary/20 transition-all duration-200"
    >
      <div className="w-12 h-12 rounded-xl bg-primary-light flex items-center justify-center mb-4 group-hover:bg-primary/10 transition-colors">
        <Icon className="w-6 h-6 text-primary" />
      </div>
      <h3 className="font-heading text-lg font-bold text-text-base mb-2">{service.title}</h3>
      <p className="text-text-muted text-sm leading-relaxed flex-1">{service.shortDescription}</p>
      <div className="mt-4 flex items-center gap-1 text-primary font-semibold text-sm group-hover:gap-2 transition-all">
        Learn more
        <ArrowRight className="w-4 h-4" />
      </div>
    </Link>
  )
}
