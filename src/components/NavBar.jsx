import React, { useState } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";

import "../css/NavBar.css";

export default function NavBar() {
  const [expanded, setExpanded] = useState(false);

  return (
    <Navbar expand="lg" fixed="top" className="pb-0" expanded={expanded}>
      <Container className="mobile-container-padding">
        <Navbar.Brand href="#home">
          <img
            src="/logo_chiara.png"
            alt="logo Chiara Lashmaker"
            id="navbar-logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle
          className="me-2"
          aria-controls="basic-navbar-nav"
          onClick={() => setExpanded(expanded ? false : "expanded")}
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav>
            <Nav.Link
              href="#home"
              className="full-width-link navbar-link-home mobile-border-top mobile-border-bottom"
              onClick={() => setExpanded(false)}
            >
              Home
            </Nav.Link>

            <Nav.Link
              href="#servizi"
              className="full-width-link navbar-link-others mobile-border-bottom"
              onClick={() => setExpanded(false)}
            >
              Servizi e Prezzi
            </Nav.Link>
            <Nav.Link
              href="#contatti"
              className="full-width-link navbar-link-others mobile-border-bottom"
              onClick={() => setExpanded(false)}
            >
              Contatti
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
