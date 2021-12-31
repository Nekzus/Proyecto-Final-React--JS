import React from 'react';
import NavBar from '../NavBar/NavBar';
import LogoPage from '../Common/LogoPage';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { NavLink } from 'react-router-dom';
import { memo } from 'react';

const Header = () => {
    console.log('Render header');
    return (
        <header id="contenido-header">
            <Container>
                <Row>
                    <Col md={2} className="columna-header"><NavLink to="/"><LogoPage /></NavLink></Col>
                    <Col md={10} className="columna-header" id="contenedor-titulo"><h1>CINES NKMAX</h1></Col>
                </Row>
                <NavBar />
            </Container>
        </header>
    );
};

export default memo(Header);
