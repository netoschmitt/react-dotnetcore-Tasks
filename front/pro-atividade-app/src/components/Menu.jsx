import { Nav, Navbar, NavDropdown, Container  } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
 
const Menu = () => {
    return (
    <Navbar bg="dark" expand="lg" variant='dark'>
      <Container>
        <Navbar.Brand as={NavLink} to='/'>Ativity</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
              <Nav.Link 
                className={(navData)=> navData.isActive ? 'Active' : ''} 
                as={NavLink} 
                to='cliente/lista'>
                Clientes
              </Nav.Link>
              <Nav.Link 
                className={(navData)=> navData.isActive ? "Active" : ''} 
                as={NavLink} 
                to='atividade/lista'>
                Atividades
              </Nav.Link>
          </Nav>
            <Nav>
                <NavDropdown 
                    title="Neto" 
                    align='end' 
                    id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Perfil</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                    Configurações
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                    Sair
                </NavDropdown.Item>
                </NavDropdown>
            </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    );
}

export default Menu;
