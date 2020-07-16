import React from "react";

import { NavLink } from "react-router-dom";

import "../App.css";
const Header = () => {
  return (
    <div className="navbar-fixed">
      <nav>
        <div className="nav-wrapper  indigo">
          <a href="/" className="brand-logo right">
            Romanov Nikita
          </a>
          <div className="links">
            <ul id="nav-mobile" className="left hide-on-med-and-down">
              <li>
                <NavLink to="/" className="link">
                  Images
                </NavLink>
              </li>
              <li>
                <NavLink to="/favourites" className="link">
                  Favourites
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
