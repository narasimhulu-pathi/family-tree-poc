import { render, screen } from '@testing-library/react'
import DoctorCard from './DoctorCard'
import type { Doctor } from '../../data/doctors'

const doctor: Doctor = {
  name: 'Dr. Shravan Krishna Reddy P',
  photo: '/images/doctors/dr-shravan.jpeg',
  specialty: 'Pediatrician & Neonatologist',
  qualifications: 'MBBS, MD (Pediatrics)',
  bio: 'Expert pediatrician with 9 years of experience.',
  featured: true,
}

describe('DoctorCard', () => {
  it('renders the doctor name', () => {
    render(<DoctorCard doctor={doctor} />)
    expect(screen.getByText('Dr. Shravan Krishna Reddy P')).toBeInTheDocument()
  })

  it('renders the specialty in the secondary color class', () => {
    render(<DoctorCard doctor={doctor} />)
    const specialty = screen.getByText('Pediatrician & Neonatologist')
    expect(specialty).toHaveClass('text-secondary')
  })

  it('renders the qualifications', () => {
    render(<DoctorCard doctor={doctor} />)
    expect(screen.getByText('MBBS, MD (Pediatrics)')).toBeInTheDocument()
  })
})
