import React from "react";
import "./header.css";
import { Link } from "react-router-dom";
import logo from "../img/logo 2.png"


function Header() {
  return (
    <div className="header">
      <div className="header-container">
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="pic"></img>
          </Link>
        </div>
        <ul className="header-title">
          <li>
            <Link to="/about">About As</Link>
          </li>
          <li>
            <Link to="/projects">Projects</Link>
          </li>
          <li>
            <Link to="/photo">Photo </Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
export { Header };
