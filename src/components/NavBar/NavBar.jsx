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
      <Container >
        <Link to="/">
          <Navbar.Brand >
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
                <NavLink to="/category/remeras" className="font-bold hover:text-red-600">
                  Remeras
                </NavLink>
                <NavLink className="font-bold hover:text-red-600" to="/category/gorras" >
                  Gorras
                </NavLink>
                <NavLink to="/category/equipamiento" className="font-bold hover:text-red-600"> 
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