import React from "react";
import { NavLink } from "react-router-dom";
import star from "../assets/star.svg";
import { useLocation } from "react-router-dom";
// import { RxHamburgerMenu } from "react-icons/rx";


function Navbar() {
  const location = useLocation();
  const isProjectsPage = location.pathname === "/projects";
  return (
    <nav className="navbar">
      <div
        className="logo"
        style={{ visibility: isProjectsPage ? "hidden" : "visible" }}
      >
        <img src={star} alt="star" />
        <p>Aradhya Yadav</p>
      </div>
      <ul className="nav-links">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "active-link" : "")}
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/projects"
            className={({ isActive }) => (isActive ? "active-link" : "")}
          >
            Projects
          </NavLink>
        </li>
      </ul>
      {/* <RxHamburgerMenu className="hamburger" /> */}
    </nav>
  );
}

export default Navbar;
