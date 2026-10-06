import type { Doctor } from '../../data/doctors'

interface DoctorCardProps {
  doctor: Doctor
}

export default function DoctorCard({ doctor }: DoctorCardProps) {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-200">
      <div className="aspect-[3/4] overflow-hidden bg-primary-light">
        <img
          src={doctor.photo}
          alt={doctor.name}
          className="w-full h-full object-cover object-top"
          loading="lazy"
        />
      </div>
      <div className="p-5">
        <h3 className="font-heading text-lg font-bold text-text-base">{doctor.name}</h3>
        <p className="text-secondary font-semibold text-sm mt-1">{doctor.specialty}</p>
        <p className="text-text-muted text-xs mt-1">{doctor.qualifications}</p>
        <p className="text-text-muted text-sm mt-3 leading-relaxed">{doctor.bio}</p>
      </div>
    </div>
  )
}
