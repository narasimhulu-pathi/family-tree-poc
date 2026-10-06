import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import Button from './Button'

describe('Button', () => {
  it('renders children text', () => {
    render(
      <MemoryRouter>
        <Button>Book Appointment</Button>
      </MemoryRouter>
    )
    expect(screen.getByText('Book Appointment')).toBeInTheDocument()
  })

  it('renders as anchor tag when href is external', () => {
    render(
      <MemoryRouter>
        <Button href="https://example.com">External</Button>
      </MemoryRouter>
    )
    expect(screen.getByRole('link')).toHaveAttribute('href', 'https://example.com')
  })

  it('applies accent class for primary variant', () => {
    render(
      <MemoryRouter>
        <Button variant="primary">CTA</Button>
      </MemoryRouter>
    )
    expect(screen.getByRole('button')).toHaveClass('bg-accent')
  })
})
