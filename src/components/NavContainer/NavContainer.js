import React from 'react'
import { Button, Form, FormControl, Nav } from 'react-bootstrap';
import MenuCategories from '../Menues/MenuCategories';

const NavContainer = () => {
    return (
        <div>
            <Nav className="navigation-bar justify-content-around bg-dark" variant="pills" defaultActiveKey="/home">
                <Nav.Item className="nav-container">
                    <MenuCategories />
                    <Nav.Item>

                    </Nav.Item>
                </Nav.Item>
                <Nav.Item>
                    <Form className="d-flex">
                        <FormControl
                            type="search"
                            placeholder="Buscar"
                            className="me-2"
                            aria-label="Search"
                        />
                        <Button variant="outline-secondary">Buscar</Button>
                    </Form>
                </Nav.Item>
            </Nav>
        </div>
    )
};

export default NavContainer;
