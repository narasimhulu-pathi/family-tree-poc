import { render, screen, fireEvent } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import Header from './Header'

function renderHeader() {
  return render(
    <MemoryRouter>
      <Header />
    </MemoryRouter>
  )
}

describe('Header', () => {
  it('renders the hospital logo', () => {
    renderHeader()
    expect(screen.getByAltText('The Family Tree Hospital')).toBeInTheDocument()
  })

  it('renders the Book Appointment CTA', () => {
    renderHeader()
    const links = screen.getAllByText('Book Appointment')
    expect(links.length).toBeGreaterThan(0)
  })

  it('toggles mobile menu on hamburger click', () => {
    renderHeader()
    const hamburger = screen.getByLabelText('Open menu')
    fireEvent.click(hamburger)
    expect(screen.getByLabelText('Close menu')).toBeInTheDocument()
  })

  it('shows navigation links', () => {
    renderHeader()
    expect(screen.getAllByText('Home').length).toBeGreaterThan(0)
    expect(screen.getAllByText('Services').length).toBeGreaterThan(0)
    expect(screen.getAllByText('Contact').length).toBeGreaterThan(0)
  })
})
