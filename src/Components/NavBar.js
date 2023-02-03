import React from "react"
import { Navbar, Nav, Container } from 'react-bootstrap'
import img from '../res/ADHYAAY WHITERED.png'
import Button from 'react-bootstrap/Button'

import '../Pages/styleAyush/navbar.css'

const NavBar = () => {
    return (
        <Navbar collapseOnSelect style={{ 'width': "100vw", 'color': "rgb(255,255,255)", 'zIndex': '1',}} variant="dark" expand="lg">
            <Container>
                <Navbar.Brand style={{ 'font-size': "20px", 'letterSpacing': "2px" }} align-items-center href="/">
                    <img
                        alt="img"
                        src={img}
                        width="30"
                        height="25"
                        className="d-inline-block align-top"
                    />{' '}
                    ADHYAAY'21</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav style={{ 'font-size': "10px",}} className="navLinks ms-auto">
                        <Nav.Link style={{color: 'white'}} className='navLinks1' href="/">Home</Nav.Link>&nbsp;
                        <Nav.Link style={{color: 'white'}} className='navLinks1' href="/events0">Events</Nav.Link>&nbsp;
                        <Nav.Link style={{color: 'white'}} className='navLinks1' href="/sponsers">Sponsors</Nav.Link>&nbsp;
                        <Nav.Link style={{color: 'white'}} className='navLinks1' href="/merch">Merch and Passes</Nav.Link>&nbsp;
                        <Nav.Link style={{color: 'white'}} className='navLinks1' href="/gallery">Gallery</Nav.Link>&nbsp;
                        <Nav.Link style={{color: 'white'}} className='navLinks1' href="/subCouncils">Sub-councils</Nav.Link>&nbsp;&nbsp;
                        <Button variant="danger" size="sm">
                            <a style={{ textDecoration: 'none', fontSize: '12px', fontWeight: '100', color: 'white' }} href='https://docs.google.com/forms/d/e/1FAIpQLSfgCZTeX1Ss5tUbY108CoSbXZh6VvUkuFnRhGt-2SXqJYnDNA/viewform?usp=sf_link' target='_blank' rel="noopener noreferrer">Be Our Campus Ambassador!</a>
                        </Button>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar