import React, { useState } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";

import "../css/NavBar.css";
import { Link } from "react-router-dom";

export default function NavBar() {
  const [expanded, setExpanded] = useState(false);

  return (
    <Navbar expand="lg" className="pb-0" expanded={expanded}>
      <Container className="mobile-container-padding">
        <Navbar.Brand href="/">
          <img
            src="/logo_chiara.webp"
            alt="logo Chiara Lashmaker"
            className="navbar-logo navbar-logo-mobile"
            onClick={() => setExpanded(false)}
          />
        </Navbar.Brand>
        <Navbar.Toggle
          className="me-2"
          aria-controls="basic-navbar-nav"
          onClick={() => setExpanded(expanded ? false : "expanded")}
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav>
            <Link
              to="/"
              className="full-width-link navbar-link-home mobile-border-top mobile-border-bottom"
              onClick={() => setExpanded(false)}
            >
              Home
            </Link>

            <Link
              to="/trattamenti"
              className="full-width-link navbar-link-others mobile-border-bottom"
              onClick={() => setExpanded(false)}
            >
              Trattamenti
            </Link>
            <Navbar.Brand href="/" className="navbar-logo-desktop">
              <img
                src="/logo_chiara.webp"
                alt="logo Chiara Lashmaker"
                className="navbar-logo"
                onClick={() => setExpanded(false)}
              />
            </Navbar.Brand>

            <Link
              to="/galleria"
              className="full-width-link navbar-link-others mobile-border-bottom"
              onClick={() => setExpanded(false)}
            >
              Galleria
            </Link>

            <Link
              to="/#contatti"
              className="full-width-link navbar-link-others mobile-border-bottom"
              onClick={() => setExpanded(false)}
            >
              Contatti
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
