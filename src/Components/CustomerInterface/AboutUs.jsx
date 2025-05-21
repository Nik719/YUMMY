import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import './AboutUs.css';
import Footer from './Footer';
import NikhilImage from '../../assets/NIKHIL-x.png';

function AboutUs() {
  return (
    <div className="about-us-page">
      <Container className="py-5">
        <Row className="mb-5">
          <Col>
            <h1 className="text-center mb-4">About YUMMY</h1>
            <div className="about-intro">
              <p>
                Welcome to YUMMY, where culinary excellence meets warm hospitality. 
                Established in 2023, we've been dedicated to providing our customers 
                with exceptional food and memorable dining experiences.
              </p>
            </div>
          </Col>
        </Row>

        <Row className="mb-5">
          <Col md={6}>
            <Card className="about-card mb-4">
              <Card.Body>
                <h2>Our Story</h2>
                <p>
                  YUMMY began with a simple passion for food and community. Our founders 
                  envisioned a place where people could enjoy quality meals in a welcoming 
                  atmosphere. What started as a small family business has grown into a 
                  beloved establishment in the community.
                </p>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6}>
            <Card className="about-card mb-4">
              <Card.Body>
                <h2>Our Mission</h2>
                <p>
                  At YUMMY, our mission is to serve delicious, high-quality food using the 
                  freshest ingredients while providing exceptional customer service. We 
                  strive to create a dining experience that keeps our customers coming back.
                </p>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row>
          <Col md={12}>
            <Card className="about-card team-section">
              <Card.Body>
                <h2 className="text-center mb-4">Our Team</h2>
                <Row>
                  <Col md={4} className="team-member text-center mb-4">
                    <img 
                      src={NikhilImage} 
                      alt="Nikhil - Executive Chef" 
                      className="team-img" 
                    />
                    <h4>Nikhil</h4>
                    <p>Executive Chef</p>
                  </Col>
                  <Col md={4} className="team-member text-center mb-4">
                  <img 
                      src={NikhilImage} 
                      alt="Nikhil - Executive Chef" 
                      className="team-img" 
                    />
                    {/* <div className="team-img-placeholder"></div> */}
                    <h4>Jane Smith</h4>
                    <p>Restaurant Manager</p>
                  </Col>
                  <Col md={4} className="team-member text-center mb-4">
                    <img 
                      src={NikhilImage} 
                      alt="Nikhil - Executive Chef" 
                      className="team-img" 
                    />
                    {/* <div className="team-img-placeholder"></div> */}
                    <h4>Mike Johnson</h4>
                    <p>Customer Experience</p>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
}
export default AboutUs;