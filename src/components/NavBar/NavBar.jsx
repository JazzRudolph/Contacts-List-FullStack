import React from 'react';
import { Container, Navbar, Nav, NavLink } from 'react-bootstrap';

const NavBar = () => {

    const menuData = [
        {
            path: '/',
            name: "Home"
        },
        {
            path: '/add-contacts',
            name: "Add Contacts"
        },
        {
            path: 'contacts-list',
            name: "Contacts List"
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
                                <NavLink to={item.path} key={item.name}>
                                    <div className="list_item">{item.name}</div>
                                </NavLink>
                            ))
                        }
                    </Nav>
                    <Nav className="ms-auto">
                        <button className="btns">Sign Up</button>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar> 
    );
};

export default NavBar;