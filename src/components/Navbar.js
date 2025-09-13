import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import star from "../assets/star.svg";
import MenuIcon from "../assets/Menu.svg";
import CloseIcon from "../assets/Close.svg"; 

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

      {/* Mobile Navbar */}
      <nav className="mobile-navbar">
        <div
          className="logo"
          style={{ visibility: isProjectsPage ? "hidden" : "visible" }}
        >
          <img src={star} alt="star" />
          <p>Aradhya Yadav</p>
        </div>

        {/* Toggle Button */}
        <div className="menu-icon" onClick={() => setOpen(!open)}>
          {open ? (
            <img src={CloseIcon} alt="close" />
          ) : (
            <img src={MenuIcon} alt="menu" />
          )}
        </div>

        {/* Nav Links */}
        <ul
          className={open ? "mobile-nav-links" : "mobile-nav-links hidden"}
          onClick={() => setOpen(false)} // closes when clicking a link
        >
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
