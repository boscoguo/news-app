import React from 'react'
import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import App from './app'

describe('App', () => {
  it('renders news page when route is /news', () => {
    render(
      <MemoryRouter initialEntries={['/news']}>
        <App />
      </MemoryRouter>,
    )
    const newsPage = screen.getByRole('heading', { name: /News/i })
    expect(newsPage).toBeInTheDocument()
  })

  it('redirects to /news when root path is accessed', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>,
    )
    const newsPage = screen.getByRole('heading', { name: /News/i })
    expect(newsPage).toBeInTheDocument()
  })

  test('renders not found page when route is unknown', () => {
    render(
      <MemoryRouter initialEntries={['/unknown']}>
        <App />
      </MemoryRouter>,
    )
    const notFoundPage = screen.getByRole('heading', { name: /not found/i })
    expect(notFoundPage).toBeInTheDocument()
  })
})
