import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import logo from '../logo.png'
import CartWidget from './CartWidget'
const logocomponent= logo
const AppNavbar = () => {
  return (
    <Navbar bg="success" expand="lg">
      <Navbar.Brand href="#home">
        <img
          src={logocomponent}
          width="35"
          height="40"
          className="d-inline-block align-top"
          alt="Logo"
        />
      </Navbar.Brand>
      <medium>Welcome to The end</medium>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#shop">Shop</Nav.Link>
          <NavDropdown title="Categories" id="collasible-nav-dropdown">
            <NavDropdown.Item href="#action">Action</NavDropdown.Item>
            <NavDropdown.Item href="#adventure">Adventure</NavDropdown.Item>
            <NavDropdown.Item href="#racing">Racing</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#browseAll">Browse All</NavDropdown.Item>
            </NavDropdown>
          <Nav.Link href="#comunity">Comunity</Nav.Link>
          <Nav.Link href="#support">Support</Nav.Link>
          <Nav.Link href="#shopcart"><CartWidget /></Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default AppNavbar;