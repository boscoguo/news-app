import React from 'react'
import { render, screen } from '@testing-library/react'
import { NotFound } from './not-found'
import { MemoryRouter } from 'react-router-dom'

describe('NotFound', () => {
  it('should render the correct content', () => {
    const { getByText, getByRole } = render(
      <MemoryRouter>
        <NotFound />
      </MemoryRouter>,
    )

    // Assert the heading text
    expect(getByText('404 Not found')).toBeInTheDocument()

    // Assert the link text and href
    const link = getByRole('link', { name: /click here/i })
    expect(link).toBeInTheDocument()
    expect(link.getAttribute('href')).toBe('/')

    // Assert the paragraph text
    const pElem = screen.getByText(/You must be lost/i)
    expect(pElem).toBeInTheDocument()
  })
})
