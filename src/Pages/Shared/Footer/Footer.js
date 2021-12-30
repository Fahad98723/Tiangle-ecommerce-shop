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
                        <h3>Traingle E-Commerce</h3>
                        <h6><i className="fas fa-envelope"></i> : kazimohammadfahad@gmail.com</h6>
                        <h6><i className="fas fa-phone"></i> : +8801865233836</h6>
                        <h6><i className="fas fa-phone"></i> : +8801400563540</h6>
                        <h6><i className="fas fa-map-marked-alt"></i> : Muradpor , Chittagong, Bangladesh.</h6>
                    </Col>
                    <Col lg='2'>
                        <h3>Quick Link</h3>
                        <h6>T_Shirt</h6>
                        <h6>Shirt</h6>
                        <h6>Pant</h6>
                        <h6>Jacket</h6>
                        <h6>FAQ's</h6>
                    </Col>
                    <Col lg='3'>
                        <h3>Important Links</h3>
                        <h6>Privacy Policy</h6>
                        <h6>Get In Touch</h6>
                        <h6>Who We Are</h6>
                        <h6>Contact Us</h6>
                        <h6>Products</h6>
                    </Col>
                    <Col lg='3'>
                    <div className=''>
                        <h3>Social Links</h3>
                            <a target='blank' href='https://github.com/Fahad98723' className="social"><i className=" me-2 fs-1 fab fa-github-square"></i></a>
                            <a target='blank' href='https://www.linkedin.com/in/kazi-fahad-221a91211/' className="social"><i className=" me-2 fs-1 fab fa-linkedin"></i></a>
                            <a target='blank' href='https://twitter.com/Mdravi88' className="social"><i className=" me-2 fs-1 fab fa-twitter-square"></i></a>
                            <a target='blank' href='https://www.facebook.com/profile.php?id=100007037043156' className="social"><i className=" me-2 fs-1 fab fa-facebook-square"></i></a>
                            </div> 
                    </Col>
                </Row>
            </Container>
        </div>
        <div className="footer text-center py-3">
        <p>Copyright ©2021 Traingle E-Commerce. Designed Developed By Fahad Kibria</p>
    </div>
    </>
    );
};

export default Footer;