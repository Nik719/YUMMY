import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { 
  FaFacebookF, 
  FaTwitter, 
  FaInstagram, 
  FaYoutube,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaClock
} from 'react-icons/fa';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer-section">
      <Container>
        <Row className="footer-top">
          <Col md={4} sm={6} className="footer-info">
            <h3>YUMMY</h3>
            <p>
              Delicious food delivered to your doorstep. Explore our wide range of cuisines 
              prepared by expert chefs using the finest ingredients.
            </p>
            <div className="social-icons">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <FaFacebookF />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <FaTwitter />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <FaInstagram />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                <FaYoutube />
              </a>
            </div>
          </Col>
          
          <Col md={2} sm={6} className="footer-links">
            <h4>Quick Links</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/menu">Menu</Link></li>
              <li><Link to="/offers">Special Offers</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </Col>
          
          <Col md={3} sm={6} className="footer-contact">
            <h4>Contact Us</h4>
            <ul>
              <li>
                <FaMapMarkerAlt className="contact-icon" />
                <span>123 Food Street, Cuisine City, FC 12345</span>
              </li>
              <li>
                <FaPhoneAlt className="contact-icon" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li>
                <FaEnvelope className="contact-icon" />
                <span>info@yummy.com</span>
              </li>
            </ul>
          </Col>
          
          <Col md={3} sm={6} className="footer-hours">
            <h4>Opening Hours</h4>
            <ul>
              <li>
                <FaClock className="hours-icon" />
                <div>
                  <span className="day">Monday - Friday</span>
                  <span className="time">8:00 AM - 10:00 PM</span>
                </div>
              </li>
              <li>
                <FaClock className="hours-icon" />
                <div>
                  <span className="day">Saturday - Sunday</span>
                  <span className="time">10:00 AM - 11:00 PM</span>
                </div>
              </li>
            </ul>
          </Col>
        </Row>
        
        <hr className="footer-divider" />
        
        <Row className="footer-bottom">
          <Col md={6}>
            <p className="copyright">
              &copy; {new Date().getFullYear()} YUMMY. All Rights Reserved.
            </p>
          </Col>
          <Col md={6}>
            <div className="footer-bottom-links">
              <Link to="/privacy">Privacy Policy</Link>
              <Link to="/terms">Terms of Service</Link>
              <Link to="/faq">FAQ</Link>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;