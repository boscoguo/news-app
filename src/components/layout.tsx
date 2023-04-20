import React from 'react'
import { Container } from 'react-bootstrap'
import { Outlet } from 'react-router-dom'

import Navigation from './navigation'

 const Layout:React.FC = () =>  {
  return (
    <>
      <Navigation />
      <Container>
        <Outlet />
      </Container>
    </>
  )
}

export default Layout