import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <div>
      <div className="navbar">
        <div className="nav-container">
          <NavLink exact to="/" className="nav-logo">
            Justin Stokes
          </NavLink>

          <ul>
            <li>
              <NavLink exact to="/" className="nav-links">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink exact to="/about" className="nav-links">
                About
              </NavLink>
            </li>
            <li>
              <NavLink exact to="/contact" className="nav-links">
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
