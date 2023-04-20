import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link, NavLink } from 'react-router-dom'
import logo from '../images/logo.png'
import bg from '../images/bg.png'

const Navigation = () => {
  return (
    <Navbar
      bg="light"
      expand="lg"
      className="mb-4"
      style={{ background: `url(${bg})` }}
      data-testid="navbar"
    >
      <Container>
        <Link to="/" className="navbar-brand me-5" style={{ width: '150px' }}>
          <img src={logo} alt="news corp logo" />
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
      </Container>
    </Navbar>
  )
}

export default Navigation
