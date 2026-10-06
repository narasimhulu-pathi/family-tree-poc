import { render, screen } from '@testing-library/react'
import StatCounter from './StatCounter'

const stat = { label: 'Years of Experience', value: 15, suffix: '+' }

describe('StatCounter', () => {
  it('renders the label', () => {
    render(<StatCounter stat={stat} />)
    expect(screen.getByText('Years of Experience')).toBeInTheDocument()
  })

  it('renders the suffix', () => {
    render(<StatCounter stat={stat} />)
    expect(screen.getByText('+')).toBeInTheDocument()
  })
})
