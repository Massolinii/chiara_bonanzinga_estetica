import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import { Navbar, Nav, Container, Col, Row } from "react-bootstrap";

import "../css/NavBar.css";

export default function NavBar() {
  const [expanded, setExpanded] = useState(false);

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 300;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Navbar expanded={expanded} className={scrolled ? "scrolled" : ""}>
      <Container fluid className="container-navbar">
        <Row className="w-100 justify-content-center">
          <Col xs={4} md={1} className="d-flex justify-content-center">
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav>
                <Link
                  to="tp-tipiciglia"
                  smooth={true}
                  duration={200}
                  className="full-width-link"
                >
                  Trattamenti
                </Link>
              </Nav>
            </Navbar.Collapse>
          </Col>
          <Col xs={4} md={1} className="d-flex justify-content-center">
            <Navbar.Brand className="navbar-logo-desktop">
              <Link to="tp-home" smooth={true} duration={200}>
                <img
                  src="/logo_chiara.webp"
                  alt="logo Chiara Lashmaker"
                  className="navbar-logo"
                />
              </Link>
            </Navbar.Brand>
          </Col>
          <Col xs={4} md={1} className="d-flex justify-content-center">
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav>
                <Link
                  to="tp-galleria"
                  smooth={true}
                  duration={200}
                  className="full-width-link"
                >
                  Galleria
                </Link>
              </Nav>
            </Navbar.Collapse>
          </Col>
        </Row>
      </Container>
    </Navbar>
  );
}
