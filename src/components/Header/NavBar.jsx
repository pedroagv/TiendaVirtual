import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.png';

function NavBar() {
    return (
        <nav className="navbar navbar-light navbar-expand-sm bg-rosa">
            <div className="container-fluid">
                <Link className="navbar-brand text-white" to="/">
                    <img src={logo} alt="Logo" width="30" height="24" className="navvar-logo  d-inline-block align-text-top" />                    
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="mynavbar">
                    <ul className="navbar-nav me-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to="/productos">Productos</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/productos/cumpleaños">Cumpleaños</Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link" to="/productos/madres">Dia Madres ❤️</Link>
                        </li>
                    </ul>
                    <form className="d-flex">
                        <input className="form-control form-sm me-2" type="text" placeholder="Search" />
                        <button className="btn btn-sm bg-rosa-second" type="button">Search</button>
                    </form>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;
