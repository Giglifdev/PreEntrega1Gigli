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
              <Navbar.Brand href="#home" className="nav-brand">
                HardwareHaven
              </Navbar.Brand>
            </Link>
          </div>
          <Nav className="botons">
            <a href="#home" className="nav-boton">
              Home
            </a>
            <Link to="/notebooks" className="nav-boton">
              Notebooks
            </Link>

            <Dropdown className="menudrop">
              <Dropdown.Toggle id="dropdown-basic">Store</Dropdown.Toggle>

              <Dropdown.Menu className="dropdown-menu">
                <Dropdown.Item>
                  <Link to={`/audio/`}>Audio</Link>
                </Dropdown.Item>
                <Dropdown.Item className="dropdown-item">
                  <Link to={`/keyboards/`}>Keyboards</Link>
                </Dropdown.Item>
                <Dropdown.Item className="dropdown-item">
                  <Link to={`/mouse/`}>Mouse</Link>
                </Dropdown.Item>
                <Dropdown.Item className="dropdown-item" href="#/action-4">
                  <Link to={`/mousepads/`}>Mousepads</Link>
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <a href="#link" className="nav-boton">
              Contact
            </a>

            <CartWidget />
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavBar;
