import CartWidget from "../CartWidget/CartWidget"
import logoRF from "./assets/logoRF.png"
import Container from 'react-bootstrap/Container'
import Nav from "react-bootstrap/Nav"
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link, NavLink } from "react-router-dom";


const NavBar = () => {
   
    
    return (
      <Navbar bg="black" expand="lg" variant="dark">
      <Container>
        <Link to="/">
          <Navbar.Brand>
              <img
                src={logoRF}
                width="70"
                height="70"
                className="d-inline-block align-top"
                alt="React Bootstrap logo" style={{borderRadius:5}}
              />
            </Navbar.Brand>
        </Link>
        <ul className="flex items-center gap-4 text-white	uppercase mr-12">
                <NavLink to="/category/men's%20clothing" className="hover:text-red-600">
                  Hombre
                </NavLink>
                <NavLink className="hover:text-red-600" to="/category/women's%20clothing" >
                  Mujer
                </NavLink>
                <NavLink to="/category/electronics" className="hover:text-red-600"> 
                  Equipamiento
                </NavLink>
              </ul>
        <Navbar.Brand href="#home">
          <CartWidget/>
        </Navbar.Brand>
      </Container>
    </Navbar>
    )
}

export default NavBar