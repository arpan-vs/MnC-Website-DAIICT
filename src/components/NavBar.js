import React from "react";
import daiict from "../image/daiict.png";
import "../App.css";
// import { divnk } from "react-router-dom";

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
                        <div className="navbar-nav">
                            <div className="nav-item dropdown-submenu">
                                <a href="#">Why MnC at DAIICT?</a>
                                <div className="dropdown-menu">
                                    <div className="dropdown-content"><a href="#">MnC Info</a></div>
                                    <div className="dropdown-content"><a href="#">Course Curricdivum</a></div>
                                </div>
                            </div>
                            <div className="nav-item"><a href="#">AMC</a></div>
                            <div className="nav-item dropdown-submenu">
                                <a href="#">Students</a>
                                <div className="dropdown-menu">
                                    <div className="dropdown-content"><a href="#">Current Student</a></div>
                                    <div className="dropdown-content"><a href="#">Alumni</a></div>
                                </div>
                            </div>
                            <div className="nav-item"><a href="#">Admin</a></div>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default NavBar;
