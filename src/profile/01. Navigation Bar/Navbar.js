import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Project from '../07. Project/ProjectPage';

function Navbar1() {
    return (
        <main>
            <BrowserRouter>
            <Navbar expand="lg" className="bg-body-tertiary" bg="dark" data-bs-theme="dark" fixed='top'>
                <Container>
                    <Navbar.Brand href="#Home">RP</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                        <Nav>
                            <Nav.Link href="#Home">Home</Nav.Link>
                            <Nav.Link href="#Skill">Skill</Nav.Link>
                            <Nav.Link href="#About">About</Nav.Link>
                            <Nav.Link href="#Certification">Certification</Nav.Link>
                            <Nav.Link href="#Contact">Contact</Nav.Link>
                            <Nav.Link as={Link} to={'/project'}>Contact</Nav.Link>
                            <NavDropdown title="Project " id="basic-nav-dropdown">
                                <NavDropdown.Item href="https://subtle-toffee-c03964.netlify.app/" target='_blank'>E-Commerce Site</NavDropdown.Item>
                                <NavDropdown.Item href="https://weather-finder-369.netlify.app/" target='_blank'>Weather Site</NavDropdown.Item>
                                <NavDropdown.Item href="https://effervescent-squirrel-4ab9f2.netlify.app/" target='_blank'>BMI Calculator</NavDropdown.Item>
                                <NavDropdown.Item href="https://rakeshprofilecard.netlify.app/" target='_blank'>Own LinkTree</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Routes>
                <Route path='/project' element={<Project/>}/>
            </Routes>
            </BrowserRouter>
        </main>
    )
}

export default Navbar1