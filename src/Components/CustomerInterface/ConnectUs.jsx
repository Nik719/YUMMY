import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa';
import './ConnectUs.css';

function ConnectUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  
  const [validated, setValidated] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    
    if (form.checkValidity() === false) {
      e.stopPropagation();
      setValidated(true);
      return;
    }
    
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    
    // Show success message
    setSubmitted(true);
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
    setValidated(false);
    
    // Hide success message after 5 seconds
    setTimeout(() => {
      setSubmitted(false);
    }, 5000);
  };
  
  return (
    <div className="connect-us-page">
      <div className="connect-header">
        <Container>
          <h1>Connect With Us</h1>
          <p>We'd love to hear from you! Send us a message and we'll respond as soon as possible.</p>
        </Container>
      </div>
      
      <Container className="connect-content">
        <Row>
          <Col lg={4} md={5}>
            <div className="contact-info">
              <h3>Contact Information</h3>
              <p>Feel free to contact us through any of these channels:</p>
              
              <div className="info-item">
                <div className="icon-container">
                  <FaPhone />
                </div>
                <div className="info-content">
                  <h4>Phone</h4>
                  <p>+1 (555) 123-4567</p>
                </div>
              </div>
              
              <div className="info-item">
                <div className="icon-container">
                  <FaEnvelope />
                </div>
                <div className="info-content">
                  <h4>Email</h4>
                  <p>info@yummy.com</p>
                </div>
              </div>
              
              <div className="info-item">
                <div className="icon-container">
                  <FaMapMarkerAlt />
                </div>
                <div className="info-content">
                  <h4>Address</h4>
                  <p>123 Food Street, Cuisine City, FC 12345</p>
                </div>
              </div>
              
              <Card className="business-hours">
                <Card.Header>Business Hours</Card.Header>
                <Card.Body>
                  <div className="hours-row">
                    <span className="day">Monday - Friday:</span>
                    <span className="time">8:00 AM - 10:00 PM</span>
                  </div>
                  <div className="hours-row">
                    <span className="day">Saturday - Sunday:</span>
                    <span className="time">10:00 AM - 11:00 PM</span>
                  </div>
                </Card.Body>
              </Card>
            </div>
          </Col>
          
          <Col lg={8} md={7}>
            <div className="contact-form-container">
              <h3>Send Us a Message</h3>
              
              {submitted && (
                <div className="success-message">
                  <p>Thank you for your message! We'll get back to you soon.</p>
                </div>
              )}
              
              <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <Row>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>Your Name</Form.Label>
                      <Form.Control
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="Enter your name"
                      />
                      <Form.Control.Feedback type="invalid">
                        Please provide your name.
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Col>
                  
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>Email Address</Form.Label>
                      <Form.Control
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="Enter your email"
                      />
                      <Form.Control.Feedback type="invalid">
                        Please provide a valid email.
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Col>
                </Row>
                
                <Row>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>Phone Number</Form.Label>
                      <Form.Control
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Enter your phone number"
                      />
                    </Form.Group>
                  </Col>
                  
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>Subject</Form.Label>
                      <Form.Control
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        placeholder="What is this regarding?"
                      />
                      <Form.Control.Feedback type="invalid">
                        Please provide a subject.
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Col>
                </Row>
                
                <Form.Group className="mb-3">
                  <Form.Label>Your Message</Form.Label>
                  <Form.Control
                    as="textarea"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Type your message here..."
                    rows={5}
                  />
                  <Form.Control.Feedback type="invalid">
                    Please provide your message.
                  </Form.Control.Feedback>
                </Form.Group>
                
                <Button type="submit" className="submit-btn">
                  <FaPaperPlane /> Send Message
                </Button>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default ConnectUs;