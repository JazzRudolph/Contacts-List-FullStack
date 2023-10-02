import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';

const NavBar = () => {

    const menuData = [
        {
            path: '#home',
            name: "Home"
        },
        {
            path: './#contactform',
            name: "Add Connection"
        },
        {
            path: './#contactlist',
            name: "Connections List"
        }
    ]


    return (
        <Navbar expand="sm" className="navbar">
            <Container>
                <Navbar.Brand href="#home" className="brand">My Connections</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        {
                            menuData.map((item) => (
                                <a className="list_item" href={item.path} key={item.name}>
                                    {item.name}
                                </a>
                            ))
                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar> 
    );
};

export default NavBar;