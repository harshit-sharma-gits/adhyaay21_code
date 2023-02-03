import React from "react";
import { Row, Col, Container } from 'react-bootstrap';
import img from '../res/footerImg.png';
import "../Pages/style/footer.css";
import { FaMapMarkerAlt, FaPhoneAlt, FaInstagram, FaFacebookSquare, FaEnvelope, FaYoutube } from 'react-icons/fa';

const Footer = () => {
    return (
        <section className='footer'>
            <Container>
                <Row>
                    <Col sm>
                        <img
                            alt="img"
                            src={img}
                            width="300"
                            height="auto"
                            className="d-inline-block align-top"
                        />
                    </Col>
                    <Col md className='contact'>
                        <strong>
                            CONTACT US
                        </strong><br /><hr />
                        <h6><FaMapMarkerAlt />&nbsp; &nbsp; HBTU, Kanpur</h6>
                        <FaPhoneAlt /><a className="numMail" style={{ textDecoration: "none", color: 'rgb(255,255,255)' }} href="tel:+91-7880944447">&nbsp; &nbsp; +91-7880944447</a>,
                        <a className="numMail" style={{ textDecoration: "none", color: 'rgb(255,255,255)' }} href="tel:+91 7458946963">&nbsp;+91 7458946963</a>
                        <br />
                        <FaEnvelope /><a className="numMail" style={{ textDecoration: "none", color: 'rgb(255,255,255)' }} href="mailto:culturalsubcouncil@hbtu.ac.in">&nbsp; &nbsp; culturalsubcouncil@hbtu.ac.in</a>
                        <br />
                        <br />
                        <a style={{ textDecoration: "none" }} className='icons' href="https://www.instagram.com/adhyaay21/" target='_blank' rel="noopener noreferrer"><FaInstagram /></a>
                        <a style={{ textDecoration: "none" }} className='icons' href="https://www.facebook.com/adhyaay19" target='_blank' rel="noopener noreferrer"><FaFacebookSquare /></a>
                        <a style={{ textDecoration: "none" }} className='icons' href="https://www.youtube.com/channel/UCUeDRs-7Z4EvqdfhxxZsAWw" target='_blank' rel="noopener noreferrer"><FaYoutube /></a>
                        <br />
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default Footer