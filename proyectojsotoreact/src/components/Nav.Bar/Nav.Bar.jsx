import React from "react";
import Contenedor from "../Contenedor/Contenedor";
/*import CartWidget from "../CartWidget/CartWidget";*/
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


const NavBar = () => {
return(
   <>
      <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#">LOGO</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">Inicio</Nav.Link>
            
            <NavDropdown title="Electrodomesticos" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3 ">Cocinas y Hornos</NavDropdown.Item>
              <Contenedor producto={"Anafe"}/>
<Contenedor producto={"Hornos"}/>
<Contenedor producto={"Cocina"}/>

              <NavDropdown.Divider />
              <NavDropdown.Item href="#action4">Heladeras y Frezzer</NavDropdown.Item>
              <Contenedor producto={"Heladeras"}/>
<Contenedor producto={"Frezeer"}/>

              <NavDropdown.Divider />
               </NavDropdown>
        
               <NavDropdown title="Climatizacion" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action5 ">Aires Acondicionados</NavDropdown.Item>
              <Contenedor producto={"Frio/Calor"}/>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action6">Calefactores</NavDropdown.Item>
              <Contenedor producto={"Estufas"}/>
                <Contenedor producto={"Paneles"}/>

              <NavDropdown.Divider />
               </NavDropdown>

               <Nav.Link href="#action7">Oportunidades</Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>

 { /* <div>logo</div>
    <ul>
        
        <li><a>inicio</a></li>
        <li><a>Televisores</a></li>
        <li><a>Celulares</a></li>
        <li><a>Aires</a></li>
        <li><a>Superoofertas</a></li>
       
    </ul>
    
<CartWidget/>*/}

    </>
)
}


export default NavBar;