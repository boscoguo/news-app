import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link, NavLink } from 'react-router-dom'
import logo from '../images/logo.png'
import bg from '../images/bg.png'

function getNavLinkClassName({ isActive }: { isActive: boolean }) {
  return `nav-link ${isActive ? 'active' : ''}`
}

export default function Navigation() {
  return (
    <Navbar
      bg="light"
      expand="lg"
      className="mb-4"
      style={{ background: `url(${bg})` }}
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
