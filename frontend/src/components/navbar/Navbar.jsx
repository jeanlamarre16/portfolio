/* import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navBar">
      <img className="logo" src="src/assets/logo.png" alt="logo" />
      <div className="link">
        <NavLink className="navlink" to="/">
          Accueil
        </NavLink>
        <NavLink className="navlink" to="/contact">
          Contact
        </NavLink>
        <NavLink className="navlink" to="/project-list">
          Mes Projets
        </NavLink>
        <NavLink className="navlink" to="/project-details">
          Détails du projet
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
*/

import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FiAlignRight, FiXCircle } from "react-icons/fi";
import "./Navbar.css";

function Navbar() {
  const [isMenu, setisMenu] = useState(false);
  const [isResponsiveclose, setResponsiveclose] = useState(false);
  const boxClass = ["main-menu menu-right menuq1"];

  const toggleClass = () => {
    setisMenu(isMenu === false);
    setResponsiveclose(isResponsiveclose === false);
  };

  const getActiveLinkStyle = ({ isActive }) => {
    if (isActive)
      return { color: "#07a8ff", borderBottom: "1.5px solid #07a8ff" };
    return null;
  };

  if (isMenu) {
    boxClass.push("menuq2");
  } else {
    boxClass.push("");
  }

  return (
    <header className="header__middle">
      <div className="container">
        <div className="row">
          <div className="header__middle__logo">
            <NavLink activeClassName="is-active" to="/">
              <img className="logo" src="src/assets/logo.png" alt="logo" />
            </NavLink>
          </div>

          <div className="header__middle__menus ">
            <nav className="main-nav ">
              {/* Responsive Menu Button */}
              {isResponsiveclose === true ? (
                <button
                  className="menubar__button"
                  style={{ display: "none" }}
                  onClick={toggleClass}
                  type="button"
                >
                  <FiXCircle />
                </button>
              ) : (
                <button
                  className="menubar__button"
                  style={{ display: "none" }}
                  onClick={toggleClass}
                  type="button"
                >
                  <FiAlignRight />{" "}
                </button>
              )}

              <ul className={boxClass.join(" ")}>
                <li className="menu-item">
                  <NavLink
                    exact
                    activeClassName="is-active"
                    onClick={toggleClass}
                    to="/"
                    style={getActiveLinkStyle}
                  >
                    Accueil
                  </NavLink>
                </li>

                <li className="menu-item ">
                  <NavLink
                    onClick={toggleClass}
                    activeClassName="is-active"
                    to="/Contact"
                    style={getActiveLinkStyle}
                  >
                    Contact
                  </NavLink>
                </li>

                <li className="menu-item ">
                  <NavLink
                    className="navlink"
                    to="/project-list"
                    onClick={toggleClass}
                    activeClassName="is-active"
                    style={getActiveLinkStyle}
                  >
                    Mes réalisations
                  </NavLink>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
