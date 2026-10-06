import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import ServiceCard from './ServiceCard'
import type { Service } from '../../data/services'

const service: Service = {
  slug: 'pediatrics-neonatology',
  title: 'Pediatrics & Neonatology',
  icon: 'Baby',
  shortDescription: 'Comprehensive healthcare for newborns and children.',
  fullDescription: 'Full description here.',
  bullets: ['Routine check-ups'],
}

describe('ServiceCard', () => {
  it('renders the service title', () => {
    render(
      <MemoryRouter>
        <ServiceCard service={service} />
      </MemoryRouter>
    )
    expect(screen.getByText('Pediatrics & Neonatology')).toBeInTheDocument()
  })

  it('renders the short description', () => {
    render(
      <MemoryRouter>
        <ServiceCard service={service} />
      </MemoryRouter>
    )
    expect(screen.getByText('Comprehensive healthcare for newborns and children.')).toBeInTheDocument()
  })

  it('links to the correct service slug', () => {
    render(
      <MemoryRouter>
        <ServiceCard service={service} />
      </MemoryRouter>
    )
    expect(screen.getByRole('link')).toHaveAttribute('href', '/services/pediatrics-neonatology')
  })
})
