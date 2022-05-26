import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

function NavBar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  
  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <NavLink to = "/" className="nav-logo">
         CAR WORLD
            <i className="fas fa-code"></i>
          </NavLink>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink
                
                to="/Home"
            
                className="nav-links"
                onClick={handleClick}
              >
                Home
              </NavLink>
            </li>
            
            <li className="nav-item">
              <NavLink
               
                to="/Login"
                
                className="nav-links"
                onClick={handleClick}
              >
               Login
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                
                to="/Register"
               
                className="nav-links"
                onClick={handleClick}
              >
              Register
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                
                to="/contact"
              
                className="nav-links"
                onClick={handleClick}
              >
                Contact Us
              </NavLink>
              
            </li>
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;