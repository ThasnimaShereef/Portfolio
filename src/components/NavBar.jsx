import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { HashLink } from 'react-router-hash-link';
import { BrowserRouter as Router } from "react-router-dom";
import linkedin from "../assets/img/linkedin.png";
import github from "../assets/img/rounded.png";
import gmail from "../assets/img/gmail.png";

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  return (
    <Router>
      <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
        <Container fluid="md">
          <Navbar.Brand className="d-flex align-items-center">
             <a
                href="https://drive.google.com/file/d/1-dqTuasw_ixJP54IPxSU44YuiW-7HNUe/view?usp=sharing" 
                target="_blank"
                rel="noopener noreferrer"
                className="navbar-text"
                style={{ textDecoration: 'none' }}
              >
              <button className="vvd">
              <span>View Resume</span>
              </button>
            </a>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" >
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
            <Nav className="ms-auto">
              <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
              <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
              <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
            </Nav>
            <span className="navbar-text">
              <div className="social-icon" style={{ display: "flex", gap: "10px" }}>
                <a href="https://www.linkedin.com/in/thasnima-shereef/" target="_blank" rel="noreferrer"><img src={linkedin} alt="Icon" /></a>
                <a href="mailto:thasnimashereef@gmail.com"><img src={gmail} alt="Icon" /></a>
                <a href="https://github.com/ThasnimaShereef" target="_blank" rel="noreferrer"><img src={github} alt="Icon" /></a>
              </div>
              <HashLink to="#connect">
                <button className="vvd"><span>Let’s Connect</span></button>
              </HashLink>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Router>
  );
};
