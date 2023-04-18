import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'

const Navigation = () => {
  return (
    <div>      
        <Navbar variant='dark' expand="lg" fixed='top'>
          <Container>
            <Navbar.Brand href="/">BIOSKOP69</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto">
                <Nav.Link href="#trending">TRENDING</Nav.Link>
                <Nav.Link href="#hero">HERO</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
    </div>
  )
}

export default Navigation
