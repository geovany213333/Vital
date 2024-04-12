import React from "react";
import "./NavBar.css";
import vital from "../../assets/vital.jpg"
import { NavLink } from "react-router-dom";

export function NavBar() {

  return (
    <>
      <nav className="navbar m-0 navbar-expand-sm bg-dark bg-gradient">
        <div className="container-fluid pe-3 ps-3">
          <div className="ico d-flex ">
            <img
              id="logo"
              src={vital}
              className="rounded-circle"
            />
          </div>
          <ul className="nav nav-pills">
            <li className="nav-item">
              <NavLink to="/home" className={"nav-link"} data-bs-toggle={"pill"}><i className="fa-solid fa-house"></i></NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/profile" className={"nav-link"} data-bs-toggle={"pill"}><i className="fa-solid fa-user"></i></NavLink>
            </li>
            <li className="nav-item">
              <a className="nav-link" data-bs-toggle="pill" href="#menu2">
              <i className="fa-solid fa-magnifying-glass"></i>
              </a>
            </li>
          </ul>
          <div>
          </div>
        </div>
      </nav>
    </>
  );
}
