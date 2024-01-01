import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import './Nab.css';
import ham from '../../assets/img/ham.png';

const Nab = () => {

    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);
  
    useEffect(() => {
      const onScroll = () => {
        if (window.scrollY > 50) {
          setScrolled(true);
        } else {
          setScrolled(false);
        }
      }
  
      window.addEventListener("scroll", onScroll);
  
      return () => window.removeEventListener("scroll", onScroll);
    }, [])
  
    const onUpdateActiveLink = (value) => {
      setActiveLink(value);
    }


  return (
    <>
      {[false].map((expand) => (
        <Navbar key={expand} expand={expand} className= {`fixed-top mb-3 ${scrolled ? 'scrolled' : ''}`}>

          <Container fluid>
          <Navbar.Brand></Navbar.Brand>
              <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} style={{border: 'none'}}><img src={ham} alt="" height={'15px'}  /></Navbar.Toggle>
              <Navbar.Offcanvas
                id={`offcanvasNavbar-expand-${expand}`}
                aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                placement="end"
                className='blurry'
            >
              

              <Offcanvas.Body className='offcanvas_class'>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link href="#statusquo">Status Quo</Nav.Link>
                  <Nav.Link href="#company">Work</Nav.Link>
                  <Nav.Link href="#skills">Skills</Nav.Link>
                  <Nav.Link href="#project">Projects</Nav.Link>
                  <Nav.Link href="#about">About</Nav.Link>
                  <Nav.Link href="#resume">Resume</Nav.Link>
                  
                </Nav>
                
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  )
}

export default Nab