import React from 'react';
import { Container, Navbar,Nav } from 'react-bootstrap';

const NavBar = () => {
    return (
        <Navbar expand="sm" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand href="#home">My Connections</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#link">Favorites</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar> 
    );
};

export default NavBar;