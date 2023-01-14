import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import "./Main.css"

const Main = () => {
      return (
            <div>
                  <Navbar className='navbar fixed-top'   expand="lg">
                        <Container >
                              <Navbar.Brand href="#"className='fw-bolder fs-2 navbar_head text-success' >SHALINA</Navbar.Brand>
                              <Navbar.Toggle aria-controls="navbarScroll" />
                              <Navbar.Collapse id="navbarScroll">
                                    <Nav
                                          className="ms-auto my-2 my-lg-0 navbar_link"
                                          style={{ maxHeight: '250px' }}
                                          navbarScroll
                                    >
                                          <Link to={"/home"}>HOME</Link>
                                          <Link to={"/about"}>ABOUT</Link>
                                          <Link to={"/education"}>EDUCATION</Link>
                                          <Link to={"/skills"}>skills</Link>
                                          <Link to={"/project"}>PROJECT</Link>
                                          <Link to={"/Contact"}>CONTACT</Link>
                                    </Nav>
                              </Navbar.Collapse>
                        </Container>
                  </Navbar>
            </div>
      );
};

export default Main;