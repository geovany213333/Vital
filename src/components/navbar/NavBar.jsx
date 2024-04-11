import React, { useState } from "react";
import "./NavBar.css";
import vital from "../../assets/vital.jpg"

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
              <a className="nav-link" data-bs-toggle="pill" href="#home">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" data-bs-toggle="pill" href="#menu1">
                Profile
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" data-bs-toggle="pill" href="#menu2">
                Search
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
