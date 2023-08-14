import React from "react";
import { Navbar, Container, Nav, Dropdown } from "react-bootstrap";
import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div>
      <Navbar expand="lg" className="navbar-container  ">
        <Container>
          <div className="navbar-content">
            <Link to={`/`}>
              <Navbar.Brand className="nav-brand">HardwareHaven</Navbar.Brand>
            </Link>
          </div>
          <Nav className="botons">
            <Link to="/" className="nav-boton">
              Home
            </Link>

            <Dropdown className="menudrop">
              <Dropdown.Toggle id="dropdown-basic">Store</Dropdown.Toggle>

              <Dropdown.Menu className="dropdown-menu">
                <Dropdown.Item>
                  <Link to={`/store/audio/`}>Audio</Link>
                </Dropdown.Item>
                <Dropdown.Item className="dropdown-item">
                  <Link to={`/store/keyboards/`}>Keyboards</Link>
                </Dropdown.Item>
                <Dropdown.Item className="dropdown-item">
                  <Link to={`/store/mouse/`}>Mouse</Link>
                </Dropdown.Item>
                <Dropdown.Item className="dropdown-item">
                  <Link to={`/store/mousepads/`}>Mousepads</Link>
                </Dropdown.Item>
                <Dropdown.Item className="dropdown-item">
                  <Link to={`/store/notebooks/`}>Notebooks</Link>
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <a href="/contact" className="nav-boton">
              Contact
            </a>

            <Link to={`/cart`} className="nav-boton">
              <CartWidget />
            </Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavBar;
