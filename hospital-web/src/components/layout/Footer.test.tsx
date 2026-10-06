import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import Footer from './Footer'

function renderFooter() {
  return render(
    <MemoryRouter>
      <Footer />
    </MemoryRouter>
  )
}

describe('Footer', () => {
  it('renders the hospital name', () => {
    renderFooter()
    expect(screen.getByAltText('The Family Tree Hospital')).toBeInTheDocument()
  })

  it('renders the phone number link', () => {
    renderFooter()
    const phoneLinks = screen.getAllByText('8186883388')
    expect(phoneLinks.length).toBeGreaterThan(0)
  })

  it('renders quick navigation links', () => {
    renderFooter()
    expect(screen.getByText('Quick Links')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Services' })).toBeInTheDocument()
  })

  it('renders social media links', () => {
    renderFooter()
    expect(screen.getByLabelText('Facebook')).toBeInTheDocument()
    expect(screen.getByLabelText('Instagram')).toBeInTheDocument()
  })
})
