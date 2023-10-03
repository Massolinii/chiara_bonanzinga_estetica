import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import { Navbar, Nav, Container } from "react-bootstrap";

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
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav>
            <Link
              to="tp-tipiciglia"
              smooth={true}
              duration={200}
              className="full-width-link "
            >
              Trattamenti
            </Link>
            {/* NavBar logo desktop */}
            <Navbar.Brand href="/" className="navbar-logo-desktop">
              <img
                src="/logo_chiara.webp"
                alt="logo Chiara Lashmaker"
                className="navbar-logo"
              />
            </Navbar.Brand>

            <Link to="/galleria" className="full-width-link">
              Galleria
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
