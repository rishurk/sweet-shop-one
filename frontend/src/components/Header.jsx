import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light glass-nav fixed-top py-3">
            <div className="container">
                <Link className="navbar-brand fw-bold fs-3" to="/">
                    <span className="text-gradient">Divine Sweets</span> 🍬
                </Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0 fw-medium">
                        <li className="nav-item px-2">
                            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item px-2">
                            <a className="nav-link" href="#menu">Menu</a>
                        </li>
                        <li className="nav-item px-2">
                            <a className="nav-link" href="#about">Our Story</a>
                        </li>
                        <li className="nav-item px-2">
                            <a className="nav-link" href="#contact">Contact</a>
                        </li>
                    </ul>
                    <div className="d-flex ms-lg-4">
                        <Link to="/login" className="btn btn-outline-danger rounded-pill me-2 px-4 border-2 fw-bold">Login</Link>
                        <button className="btn btn-primary-custom" type="button">Order Now</button>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Header;
