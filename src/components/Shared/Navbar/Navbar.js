import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
const Navbar = () => {
    return (
        <nav className="navbar   navbar-expand-lg navbar-light bg-dark navbar ">
            <div className="container-fluid title">
                                 {/* Title */}
                <h6 class="navbar-brand " href="#">Ripe Mango Shop</h6>
                        {/* Menu Button for responsive */}
                <button className="navbar-toggler bg-light text-left" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                                 {/* All Menus */}
                <div className="collapse navbar-collapse " id="navbarNav">
                    <ul class="navbar-nav ms-auto text-white">
                            
                        <li class="nav-item menu">
                            <Link class="nav-link text-white " to="/home">Home</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link text-white" to='/about'>About</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link text-white" to='/blog'>Blog</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link text-white" to='/contact'>Contact</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};
export default Navbar;

