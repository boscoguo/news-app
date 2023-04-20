import React from 'react'
import { render, getByAltText, screen } from '@testing-library/react'
import Navigation from './navigation'
import { BrowserRouter } from 'react-router-dom'
import bg from '../images/bg.png'

describe('Navigation component', () => {
  it('renders logo image and background banner', () => {
    render(
      <BrowserRouter>
        <Navigation />
      </BrowserRouter>,
    )
    const logo = screen.getByAltText(/news corp logo/i)
    expect(logo).toBeInTheDocument()
  })
  it('should have the expected background picture', () => {
    const { getByTestId } = render(
      <BrowserRouter>
        <Navigation />
      </BrowserRouter>,
    )
    const navbar = getByTestId('navbar')
    const style = navbar.style
    expect(style).toHaveProperty('background', `url(${bg})`)
  })
})
