import React, { useState } from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from 'react-router-dom';
import './NavBar.css';

function NavBar() {
  const [expanded, setExpanded] = useState(false);
  
  const scrollToMenu = () => {
    const menuElement = document.getElementById('menuStart');
    if (menuElement) {
      menuElement.scrollIntoView({ behavior: 'smooth' });
    }
    setExpanded(false); // Close mobile menu if open
  };
  
  return (
    <Navbar 
      expand="lg" 
      variant="dark" 
      className="modern-navbar" 
      expanded={expanded}
    >
      <Container>
        <Navbar.Brand as={Link} to="/" className="brand">YUMMY</Navbar.Brand>
        <Navbar.Toggle 
          aria-controls="basic-navbar-nav" 
          onClick={() => setExpanded(expanded ? false : "expanded")}
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link 
              onClick={scrollToMenu}
              className="nav-link"
            >
              Menu
            </Nav.Link>
            <Nav.Link 
              as={Link} 
              to="/AboutUs" 
              className="nav-link"
              onClick={() => setExpanded(false)}
            >
              About Us
            </Nav.Link>
            <Nav.Link 
              as={Link} 
              to="/connect" 
              className="nav-link"
              onClick={() => setExpanded(false)}
            >
              Connect
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
