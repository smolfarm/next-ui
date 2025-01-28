import React from 'react'
import { render } from '@testing-library/react'
import Container from '../Container'
import '@testing-library/jest-dom'

describe('Container Component', () => {
  it('renders children correctly', () => {
    const { getByText } = render(
      <Container>
        <div>Test Content</div>
      </Container>
    )

    expect(getByText('Test Content')).toBeInTheDocument()
  })

  it('renders as a div by default', () => {
    const { container } = render(
      <Container>
        <div>Default Container</div>
      </Container>
    )

    const containerElement = container.firstChild
    expect(containerElement?.nodeName).toBe('DIV')
  })

  it('renders as a main tag when main prop is true', () => {
    const { container } = render(
      <Container main>
        <div>Main Container</div>
      </Container>
    )

    const containerElement = container.firstChild
    expect(containerElement?.nodeName).toBe('MAIN')
  })

  it('applies default classes', () => {
    const { container } = render(
      <Container>
        <div>Classed Container</div>
      </Container>
    )

    const containerElement = container.firstChild
    expect(containerElement).toHaveClass('mx-auto')
    expect(containerElement).toHaveClass('w-[95%]')
    expect(containerElement).toHaveClass('lg:w-[75%]')
  })

  it('appends additional className prop', () => {
    const { container } = render(
      <Container className="custom-class">
        <div>Custom Classed Container</div>
      </Container>
    )

    const containerElement = container.firstChild
    expect(containerElement).toHaveClass('mx-auto')
    expect(containerElement).toHaveClass('w-[95%]')
    expect(containerElement).toHaveClass('lg:w-[75%]')
    expect(containerElement).toHaveClass('custom-class')
  })
})
