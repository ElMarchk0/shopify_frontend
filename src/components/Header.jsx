import React from 'react'
import {Navbar, Container} from 'react-bootstrap';

function Header() {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src="../public/NASA.eps"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
          Nasa Photo of The Day!
          </Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header
