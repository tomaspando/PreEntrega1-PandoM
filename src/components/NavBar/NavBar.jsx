import CartWidget from "../CartWidget/CartWidget"
import logoRF from "./assets/logoRF.png"
import Container from 'react-bootstrap/Container'

import Nav from "react-bootstrap/Nav"
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


const NavBar = () => {
   
    
    return (
        <Navbar bg="dark" expand="lg" variant="dark">
        <Container>
        <Navbar.Brand href="#home" >
            <img
              src={logoRF}
              width="70"
              height="70"
              className="d-inline-block align-top"
              alt="React Bootstrap logo" style={{borderRadius:5}}
            />
          </Navbar.Brand>
          <Navbar.Brand href="#home">Tienda RF</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <NavDropdown title="Indumentaria" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Masculina</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Femenina
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Unisex</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#home">Equipamiento</Nav.Link>
              <Nav.Link href="#link">Accesorios</Nav.Link>
            </Nav>
          </Navbar.Collapse>
          <Navbar.Brand href="#home">
            <CartWidget/>
          </Navbar.Brand>
        </Container>
      </Navbar>
    )
}

export default NavBar