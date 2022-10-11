import React from "react";
import daiict from "../image/daiict.png";
import "../App.css";
import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <>
            <nav className="navbar fixed-top navbar-expand-lg navbar-dark">
                <div className="container-fluid">
                    <a href="https://www.daiict.ac.in/" className="logo" target="_blank" >
                        <img src={daiict} alt="" />
                    </a>
                    <button className="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link to="/" className="nav-link fs-5 text-white" aria-current="page">Home</Link>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link fs-5 text-white" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Why MnC at DAIICT?
                                </a>
                                <ul className="dropdown-menu dropdown-menu-end">
                                    <li><Link to="/info" className="dropdown-item text-white" href="#">MnC Info</Link></li>
                                    <li><Link to="/course" className="dropdown-item text-white" href="#">Course Curriculum</Link></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <Link to="/amc" className="nav-link fs-5 text-white" href="#">AMC</Link>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link fs-5 text-white" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Students
                                </a>
                                <ul className="dropdown-menu dropdown-menu-end">
                                    <li><Link to="/students" className="dropdown-item text-white" href="#">Current Student</Link></li>
                                    <li><Link to="/alumni" className="dropdown-item text-white" href="#">Alumni</Link></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            <div style={{padding:50}}></div>
            {/* <nav className="navbar">
                <div className="nav-container">
                    <div>
                        <a href="daiict.ac.in" className="logo">
                            <img src={daiict} alt="" />
                        </a>
                    </div>
                    <div className="collapse">
                        <div className="navbar-nav">
                            <div className="nav-item">
                                <Link to="/">Home</Link>
                            </div>
                            <div className="nav-item dropdown-submenu">
                                <a>
                                    Why MnC at DAIICT?
                                </a>
                                <div className="dropdown-menu">
                                    <div className="dropdown-content">
                                        <Link to="/info">MnC Info</Link>
                                    </div>
                                    <div className="dropdown-content">
                                        <Link to="/course">Course Curriculum</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="nav-item">
                                <Link to="/amc">AMC</Link>
                            </div>
                            <div className="nav-item dropdown-submenu">
                                <a>
                                    Students
                                </a>
                                <div className="dropdown-menu">
                                    <div className="dropdown-content">
                                        <Link to="/students">Current Student</Link>
                                    </div>
                                    <div className="dropdown-content">
                                        <Link to="/alumni">Alumni</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
            <div style={{ padding: 60 }}></div> */}
        </>
    );
};

export default NavBar;
