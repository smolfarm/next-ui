import React from 'react'
import { render } from '@testing-library/react'
import Button from '../Button'
import '@testing-library/jest-dom'

describe('Button', () => {
    it('renders with the correct text', () => {
        const { getByText } = render(<Button>Click me!</Button>)

        expect(getByText('Click me!')).toBeInTheDocument()
    })
})
