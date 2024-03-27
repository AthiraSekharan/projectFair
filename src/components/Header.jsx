import React from 'react'
import { Container, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'


function Header() {
  return (
    <>
    <Navbar style={{zIndex:'1'}}  className="card shadow top-0 position-fixed w-100">
        <Container>
          <Navbar.Brand  className='fw-bolder' href="#home">
       <Link style={{textDecoration:'none'}} to={'/'}>
            <i className="fa-solid fa-tarp-droplet fa-bounce"></i> 
              Project Fair
       </Link>
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  )
}

export default Header