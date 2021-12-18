import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
// import './Footer.css'
const Footer = () => {
    return (
        <>
        <div className= 'py-5 footer-section'>
            <Container>
                <Row>
                    <Col lg= '4'>
                        <h3>Triangle Travel</h3>
                        <h6><i className="fas fa-envelope"></i> : md.ravi63@gmail.com</h6>
                        <h6><i className="fas fa-phone"></i> : +9355 3652 832</h6>
                        <h6><i className="fas fa-phone"></i> : +5642 4352 257</h6>
                        <h6><i className="fas fa-map-marked-alt"></i> : 3 Edgar Buildings, England,
                        BA1 2FJ.</h6>
                    </Col>
                    <Col lg='2'>
                        <h3>Quick Link</h3>
                        <h6>Popular Tour</h6>
                        <h6>Blog</h6>
                        <h6>Shop</h6>
                        <h6>FAQ's</h6>
                        <h6>Privacy Policy</h6>
                    </Col>
                    <Col lg='3'>
                        <h3>Important Links</h3>
                        <h6>Destination</h6>
                        <h6>Get In Touch</h6>
                        <h6>Who We Are</h6>
                        <h6>Contact Us</h6>
                        <h6>Hotels</h6>
                    </Col>
                    <Col lg='3'>
                    <Row  className='g-0'>
                        <Col  md='4'>
                            <img  className = 'img-fluid w-100' src={'img1'} alt="" />
                            <img  className = 'img-fluid w-100' src={'img2'} alt="" />
                        </Col>
                        <Col md='4'>
                        <img  className = 'img-fluid w-100' src={'img3'} alt="" />
                        <img  className = 'img-fluid w-100' src={'img5'} alt="" />
                        </Col>
                        <Col md='4'>
                        <img  className = 'img-fluid w-100' src={'img4'} alt="" />                      
                        <img   className = 'img-fluid w-100' src={'img6'} alt="" />
                        </Col>
                    </Row>
                    </Col>
                </Row>
            </Container>
        </div>
        <div className="footer text-center py-3">
        <p>Copyright ©2021 Traingle Travel. Designed Developed By Fahad Kibria</p>
    </div>
    </>
    );
};

export default Footer;