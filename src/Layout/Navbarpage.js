import React, { useState } from 'react';
import { NavDropdown, Navbar, Nav, Container, Offcanvas, Button } from 'react-bootstrap';
import { AiOutlineMenu } from 'react-icons/ai';

function Navbarpage() {
  const [showOffcanvas, setShowOffcanvas] = useState(false);

  const handleNavToggle = () => {
    setShowOffcanvas(!showOffcanvas);
  };

  return (
    <div>
      <Navbar bg="primary" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="#home">React Bootstrap</Navbar.Brand>
          <Button
            variant="outline-light"
            onClick={handleNavToggle}
            className="d-lg-none" // Hide on larger screens
          >
            <AiOutlineMenu />
          </Button>
          <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
            <Nav >
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#about">About</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action4">Separated link</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Offcanvas show={showOffcanvas} onHide={handleNavToggle} placement="end" style={{width:"60%"}}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Menu</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav className="flex-column">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action2">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#action3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action4">Separated link</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
}

export default Navbarpage;
