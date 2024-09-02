import React from 'react'
import { Badge, Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
      <div>
        <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
          <Container>
            <Navbar.Brand><img src="https://i.pinimg.com/originals/a0/7e/64/a07e64a679218ec421cc5c0c3b5894e5.jpg" style={{width:"40px"}} alt="" /><Link to={'/'} style={{ color: 'black', fontWeight: 'bold', textDecoration: 'none' }}>E-CART</Link></Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link as={Link} to="/"><Link to={'/'} style={{ color: 'black', fontWeight: 'bold', textDecoration: 'none' }}>Products</Link></Nav.Link>
                <Nav.Link as={Link} to="/products"><Link to={'/'} style={{ color: 'black', fontWeight: 'bold', textDecoration: 'none' }}>Home</Link></Nav.Link>
              </Nav>
              <Nav>
                <Nav.Link as={Link} to="/wishlist"> <Button variant="primary">
                  <i className="fa-solid text-danger fa-heart mx-1"></i>Wishlist <Badge bg="secondary">9</Badge>
                  <span className="visually-hidden">unread messages</span>
                </Button></Nav.Link>
                <Nav.Link as={Link} to="/cart"> <Button variant="primary">
                <i class="fa-solid fa-cart-plus text-warning mx-1"></i> Cart <Badge bg="secondary">9</Badge>
                  <span className="visually-hidden">unread messages</span>
                </Button></Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    )
  }
  
  export default Header
