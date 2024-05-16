import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.png';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import CartWidget from '../CartWidget';


function NavBar() {
    return (
        <Navbar bg="rosa" expand="lg" variant="light">
            <div className="container-fluid">
                <Navbar.Brand as={Link} to="/" className="text-white">
                    <img
                        src={logo}
                        alt="Logo"
                    />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="mynavbar" />
                <Navbar.Collapse id="mynavbar" className="justify-content-center">
                    <Nav>
                        <Nav.Item>
                            <Nav.Link as={Link} to="/"><b>Dsorpresas360</b></Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link as={Link} to="/productos">🎈PRODUCTOS</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link as={Link} to="/productos/madres">🤱DIA MADRES</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link as={Link} to="/productos/cumpleaños">🎉CUMPLEAÑOS</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link as={Link} to="/productos/especial">🤩ESPECIALES</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link as={Link} to="/productos/especial">😊OFERTAS</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <CartWidget />
                        </Nav.Item>
                    </Nav>
                </Navbar.Collapse>
            </div>
        </Navbar>
    );
}

export default NavBar;
