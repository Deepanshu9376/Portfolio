import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm"
import logo from "../Assests/Images/logo.svg";
import navIcon1 from "../Assests/Images/nav-icon1.svg";
import navIcon2 from "../Assests/Images/nav-icon2.svg";
import navIcon3 from "../Assests/Images/nav-icon3.svg";
import navIcon4 from '../Assests/Images/nav-icon4.svg'


export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <MailchimpForm />
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/deepanshu-thakur-935441200?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer"><img src={navIcon1} alt="Icon" /></a>
              <a href="https://www.facebook.com/profile.php?id=100027633255900" target="_blank" rel="noopener noreferrer"><img src={navIcon2} alt="Icon" /></a>
              <a href="https://www.instagram.com/_deepanshu_9376/" target="_blank" rel="noopener noreferrer"><img src={navIcon3} alt="Icon" /></a>
              <a href="https://github.com/Deepanshu9376" target="_blank" rel="noopener noreferrer"><img src={navIcon4} alt="navicon" /></a>
            </div>
            <p>Copyright 2024. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}