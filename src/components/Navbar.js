import React from "react";
import { NavLink } from "react-router-dom";
import star from "../assets/star.svg";
import MenuIcon from '../assets/Menu.svg'
import { useState } from "react";
import { useLocation } from "react-router-dom";


function Navbar() {
  const location = useLocation();
  const isProjectsPage = location.pathname === "/projects";
  const [open, setOpen] = useState(false);
  return (
    <>
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
    </nav>
    <nav className="mobile-navbar">
         <div
        className="logo"
        style={{ visibility: isProjectsPage ? "hidden" : "visible" }}
      >
        <img src={star} alt="star" />
        <p>Aradhya Yadav</p>
      </div>
      <div className="menu-icon " onClick={() => setOpen(!open)}>
        <img src={MenuIcon} alt="menuicon" />

      </div>
      <ul onClick={() => setOpen(!open)} className={open ? "mobile-nav-links" : "mobile-nav-links hidden"}>
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


    </nav>
    
    </>
  
  );
}

export default Navbar;
