import React from 'react';
import LogoPage from '../Common/LogoPage';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { NavLink } from 'react-router-dom';

const Header = () => {

    return (
        <header id="contenido-header">
            <Container>
                <Row>
                    <Col md={2} className="columna-header"><NavLink to="/"><LogoPage /></NavLink></Col>
                    <Col md={10} className="columna-header" id="contenedor-titulo"><h1 className='title__site'>CINES NKMAX</h1></Col>
                </Row>
            </Container>
        </header>
    );
};
export default Header;
