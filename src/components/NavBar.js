import React from "react";
import daiict from "../image/daiict.png";
import "../App.css";
// import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <div>
            <nav className="navbar">
                <div className="nav-container">
                    <div>
                        <a href="/" className="logo">
                            <img src={daiict} alt="" />
                        </a>
                    </div>
                    <div className="collapse">
                        <ul className="navbar-nav">
                            <li className="nav-item dropdown-submenu">
                                <a href="#">Why MnC at DAIICT?</a>
                                <ul className="dropdown-menu">
                                    <li className="dropdown-content"><a href="#">MnC Info</a></li>
                                    <li className="dropdown-content"><a href="#">Course Curriculum</a></li>
                                </ul>
                            </li>
                            <li className="nav-item"><a href="#">AMC</a></li>
                            <li className="nav-item dropdown-submenu">
                                <a href="#">Students</a>
                                <ul className="dropdown-menu">
                                    <li className="dropdown-content"><a href="#">Current Student</a></li>
                                    <li className="dropdown-content"><a href="#">Alumni</a></li>
                                </ul>
                            </li>
                            <li className="nav-item"><a href="#">Admin</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default NavBar;
