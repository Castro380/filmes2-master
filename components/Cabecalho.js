import React from 'react'
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'

const Cabecalho = () => {
  return (
    <>
      <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">Movies</Navbar.Brand>
            <NavDropdown className='me-2' title="Movies" id="basic-nav-dropdown">
              <NavDropdown.Item href="../filmes/populares">Populares</NavDropdown.Item>
              <NavDropdown.Item href="../filmes/cartaz">
                Cartaz
              </NavDropdown.Item>
              <NavDropdown.Item href="../filmes/classificacao">Classificação</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="../filmes/lan">
                lançamento
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Series" id="basic-nav-dropdown" >
              <NavDropdown.Item href="../series/clasi">Classificação</NavDropdown.Item>
              <NavDropdown.Item href="../series/popu">
                populares
              </NavDropdown.Item>
              <NavDropdown.Item href="../series/ar">No Ar</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="../series/es">
                estreiantes
              </NavDropdown.Item>
              
            </NavDropdown>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  )
}

export default Cabecalho