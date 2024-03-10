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
              <NavDropdown.Item href="#action2">Cocinas y Hornos</NavDropdown.Item>
              <NavBar/>

<Contenedor producto={"Anafe"}/>
<Contenedor producto={"Hornos"}/>
<Contenedor producto={"Cocina"}/>

              <NavDropdown.Item href="#action3">
                Heladeras

                <NavBar/>

<Contenedor producto={"Heladeras"}/>
<Contenedor producto={"Frezeer"}/>

                </NavDropdown.Item>
                </NavDropdown>

                <NavDropdown title="Climatizacion" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action2">Aires Acondicionados</NavDropdown.Item>
              <NavBar/>

<Contenedor producto={"Frio/Calor"}/>

              <NavDropdown.Item href="#action3">
                Calefactores
                <Contenedor producto={"Estufas"}/>
                <Contenedor producto={"Paneles"}/>
                <Contenedor producto={"Calefactores"}/>
                </NavDropdown.Item>
                </NavDropdown>

                <Nav.Link href="#action1">Oportunidades</Nav.Link>

                
              </Nav>
          <Form className="d-flex">
          <Button variant="outline-success"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="orange" class="bi bi-search-heart-fill"  viewBox="0 0 16 16">
              <path d="M6.5 13a6.47 6.47 0 0 0 3.845-1.258h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1A6.47 6.47 0 0 0 13 6.5 6.5 6.5 0 0 0 6.5 0a6.5 6.5 0 1 0 0 13m0-8.518c1.664-1.673 5.825 1.254 0 5.018-5.825-3.764-1.664-6.69 0-5.018"/>
            </svg></Button> 
            <Form.Control
              type="search"
              placeholder="Encontra lo que buscas"
              className="me-2"
              aria-label="Search"
             
            />
           
   
<Button><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="white"  class="bi bi-cart3" viewBox="0 0 16 16" >
  <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l.84 4.479 9.144-.459L13.89 4zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2"/>
</svg></Button>
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