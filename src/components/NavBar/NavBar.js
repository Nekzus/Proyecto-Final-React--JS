import React from 'react';
import CartWidget from '../Cart/CartWidget';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';


const NavBar = () => {
    
    return (
        <Navbar className='fixed-top-nav fixed-top' collapseOnSelect expand="" bg="dark" variant="dark">
            <Container>
                <NavLink className='navbar-brand' to="/">CinesNKMAX</NavLink>
                <NavLink className='navbar-brand' to="/cart"><CartWidget /></NavLink>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
};

export default NavBar;
