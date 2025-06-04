import { Container, Row, Col } from "react-bootstrap";
import linkedin from "../assets/img/linkedin.png";
import github from "../assets/img/rounded.png";
import gmail from "../assets/img/gmail.png";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} sm={6} className="text-center text-sm-start mb-3 mb-sm-0">
             <a
                href="https://drive.google.com/file/d/136oHiK60ES0XLHT9kOaB7sLi1kIeWdrG/view?usp=drive_link" // Change this to your actual resume file path or external URL
                target="_blank"
                rel="noopener noreferrer"
                className="navbar-text"
                style={{ textDecoration: 'none' }}
              >
              <button className="vvd">
              <span>View Resume</span>
              </button>
            </a>
          </Col>
          <Col xs={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon d-flex justify-content-center justify-content-sm-end gap-3">
              <a href="https://www.linkedin.com/in/thasnima-shereef/" target="_blank" rel="noreferrer"><img src={linkedin} alt="Icon" /></a>
              <a href="mailto:thasnimashereef@gmail.com"><img src={gmail} alt="Icon" /></a>
              <a href="https://github.com/ThasnimaShereef" target="_blank" rel="noreferrer"><img src={github} alt="Icon" /></a>
            </div>
            {/* <p>Copyright 2025. All Rights Reserved</p> */}
          </Col>
        </Row>
      </Container>
    </footer>
  )
}