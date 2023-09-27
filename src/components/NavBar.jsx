import React, { useState } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";

import "../css/NavBar.css";

export default function NavBar() {
  const [expanded, setExpanded] = useState(false);

  return (
    <Navbar expanded={expanded}>
      <Container fluid>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav>
            <a
              to="/trattamenti"
              className="full-width-link "
              onClick={() => setExpanded(false)}
            >
              Trattamenti
            </a>
            {/* NavBar logo desktop */}
            <Navbar.Brand href="/" className="navbar-logo-desktop">
              <img
                src="/logo_chiara.webp"
                alt="logo Chiara Lashmaker"
                className="navbar-logo"
                onClick={() => setExpanded(false)}
              />
            </Navbar.Brand>

            <a
              to="/galleria"
              className="full-width-link"
              onClick={() => setExpanded(false)}
            >
              Galleria
            </a>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
