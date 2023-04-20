import React from 'react'
import { Link } from 'react-router-dom'

export const NotFound: React.FC = () => {
  return (
    <main>
      <h1>404 Not found</h1>
      <p data-testid="lost-text">
        You must be lost, <Link to="/">click here</Link> to go home.
      </p>
    </main>
  )
}
