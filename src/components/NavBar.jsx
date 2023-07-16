import React from "react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import "../navbar.css";
import CartWidget from "./CartWidget";

function NavBar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <div className="navbar-content">
          <Navbar.Brand href="#home" className="nav-brand">
            HardwareHaven
          </Navbar.Brand>
          <Nav className="botons">
            <a href="#home" className="nav-boton">
              Home
            </a>
            <a href="#link" className="nav-boton">
              Notebooks
            </a>
            <NavDropdown
              title="Store"
              id="basic-nav-dropdown"
              className="nav-boton"
            >
              <NavDropdown.Item href="#action/3.1">Keyboards</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Mouse</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Mousepads</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Audio</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </div>
        <CartWidget />
      </Container>
    </Navbar>
  );
}

export default NavBar;
