import React from 'react';
import { NavLink } from "react-router-dom";

const Navbar = () => (
    <nav className={ "navbar navbar-dark navbar-expand-lg bg-dark" }>
        <div className="navbar-brand">Notes List</div>
        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            <li className="nav-item">
                <NavLink className="nav-link" to="/" exact>Home</NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link" to="/about">About</NavLink>
            </li>
        </ul>
    </nav>
);

export default Navbar;