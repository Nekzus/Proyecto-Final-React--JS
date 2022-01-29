import React, { useContext } from 'react';
import CartWidget from '../Cart/CartWidget';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { cartContext } from '../../Context/CartContext';
import { Button, Offcanvas } from 'react-bootstrap';
import MenuCategories from '../Menues/MenuCategories';
import SearchItems from '../Common/SearchItems';
import { FiPower, FiUser, FiUserCheck, FiUserPlus } from "react-icons/fi";
import { userContext } from '../../Context/UserContext';
import { useUser } from '../../hooks/useUser';
import { HiArrowLeft } from 'react-icons/hi';
import { BsCartCheckFill } from 'react-icons/bs';
import { AiFillHome } from "react-icons/ai";

const NavBar = () => {
    const cartResult = useContext(cartContext);
    const { cart } = cartResult;
    const userResult = useContext(userContext);
    const { logOut } = userResult;
    const { isLogged, users } = useUser("");
    const navigate = useNavigate();
    const location = useLocation();
    const { pathname } = location

    const handleLogOut = async () => {
        try {
            await logOut();
        } catch (error) {
            console.log(error.message);
        }
    };

    return (
        <Navbar className='fixed-top-nav navbar__offcanvas fixed-top container mb-3' expand={false} bg="dark" variant="dark" sticky='top'>
            <Container fluid>
                <Navbar.Toggle aria-controls="offcanvasNavbar" />
                {(pathname !== '/') && <Button className="btn btn-history btn-dark p-3" onClick={() => { navigate(-1) }}><HiArrowLeft /></Button>}
                <NavLink className='navbar-brand' to="/">CinesNKMAX</NavLink>
                {!isLogged && <NavLink className='navbar-brand' to="/auth/register"><span className='auth__navbar'><FiUserPlus /> Creá tu cuenta</span></NavLink>}
                {isLogged && users && <Nav className='navbar-brand'><span className='auth__navbar'><FiUserCheck /> Usuari@ {users.name}</span></Nav>}
                {isLogged
                    ? <NavLink className='navbar-brand' to='#' onClick={handleLogOut}><span className='auth__navbar'><FiPower /> Salir</span></NavLink>
                    : <NavLink className='navbar-brand' to="/auth/login"><span className='auth__navbar'><FiUser /> Ingresá</span></NavLink>}
                <NavLink className='navbar-brand' to='/dash/orders'><span className='auth__navbar'>Mis compras</span></NavLink>
                {cart.length !== 0 &&
                    <NavLink className='navbar-brand' to="/dash/cart"><CartWidget /></NavLink>}
                <Navbar.Offcanvas
                    id="offcanvasNavbar"
                    aria-labelledby="offcanvasNavbarLabel"
                    placement="start"
                >
                    <Offcanvas.Header closeButton>
                        {isLogged && users && <Offcanvas.Title id="offcanvasNavbarLabel"><span className='offcanvas__title'>Bienvenid@ {users.name}</span></Offcanvas.Title>}
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        <Nav className="justify-content-end flex-grow-1 pe-3">
                            {isLogged
                                ? <Nav.Link href='#' onClick={handleLogOut}><span className='btn__canvas'><FiPower /> Salir</span></Nav.Link>
                                : <Nav.Link href="/auth/login"><span className='btn__canvas'><FiUser /> Ingresá</span></Nav.Link>}
                            {!isLogged && <Nav.Link href="/auth/register"><span className='btn__canvas'><FiUserPlus /> Creá tu cuenta</span></Nav.Link>}
                            <Nav.Link href="/"><span className='btn__canvas'><AiFillHome /> Inicio</span></Nav.Link>
                            <Nav.Link href="/dash/orders"><span className='btn__canvas'><BsCartCheckFill /> Mis compras</span></Nav.Link>
                        </Nav>
                        <Nav className="d-flex mt-3 mb-3">
                            <SearchItems />
                        </Nav>
                        <span className='btn__canvas p-1'>Filtrar por categoria</span>
                        <Nav className="d-flex mt-1">
                            <MenuCategories />
                        </Nav>
                    </Offcanvas.Body>
                </Navbar.Offcanvas>
            </Container>
        </Navbar>
    )
};
export default NavBar;
