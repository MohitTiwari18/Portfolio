import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);
  const location = useLocation();

  useEffect(() => {
    setIsNavCollapsed(true);
  }, [location]);

  const handleToggle = () => {
    setIsNavCollapsed(!isNavCollapsed);
  };

  return (
    <div className="navBar container-fluid">
      <div className="row">
        <nav className="navbar navbar-expand-lg">
          <div className="container-fluid">
            <h3 className="navbar-brands">
              <Link className="logo nav-link active" aria-current="page" to="/">
                <img src="/images/logo.png" alt="logo" />
              </Link>
            </h3>

            <button
              className="navbar-toggler"
              type="button"
              onClick={handleToggle}
              aria-controls="navbarSupportedContent"
              aria-expanded={!isNavCollapsed ? "true" : "false"}
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div
              className={`collapse navbar-collapse ${
                !isNavCollapsed ? "show" : ""
              }`}
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0 mx-auto">
                <li className="nav-item">
                  <Link
                    className="nav-link active"
                    aria-current="page"
                    to="/"
                    onClick={() => setIsNavCollapsed(true)}
                  >
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link active"
                    aria-current="page"
                    to="/about"
                    onClick={() => setIsNavCollapsed(true)}
                  >
                    About
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link active"
                    aria-current="page"
                    to="/Project"
                    onClick={() => setIsNavCollapsed(true)}
                  >
                    Project
                  </Link>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="/Mohit_Tiwari_Resume.pdf"
                    rel="noopener noreferrer"
                    target="_blank"
                    onClick={() => setIsNavCollapsed(true)}
                  >
                    Resume
                  </a>
                </li>
              </ul>

              <button className="contact-btn">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/Contact"
                  onClick={() => setIsNavCollapsed(true)}
                >
                  Contact Me
                </Link>
              </button>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
