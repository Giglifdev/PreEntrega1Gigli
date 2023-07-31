import React from "react";
import { Navbar, Container, Nav, Dropdown } from "react-bootstrap";
import CartWidget from "./CartWidget";

function NavBar() {
  return (
    <div>
      <Navbar expand="lg" className="navbar-container ">
        <Container>
          <div className="navbar-content">
            <Navbar.Brand href="#home" className="nav-brand">
              HardwareHaven
            </Navbar.Brand>
          </div>
          <Nav className="botons">
            <a href="#home" className="nav-boton">
              Home
            </a>
            <a href="#link" className="nav-boton">
              Notebooks
            </a>

            <Dropdown className="menudrop">
              <Dropdown.Toggle id="dropdown-basic">Store</Dropdown.Toggle>

              <Dropdown.Menu className="dropdown-menu">
                <Dropdown.Item className="dropdown-item" href="#/action-1">
                  Audio
                </Dropdown.Item>
                <Dropdown.Item className="dropdown-item" href="#/action-2">
                  Keyboards
                </Dropdown.Item>
                <Dropdown.Item className="dropdown-item" href="#/action-3">
                  Mouse
                </Dropdown.Item>
                <Dropdown.Item className="dropdown-item" href="#/action-4">
                  Mousepads
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <CartWidget />
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavBar;
