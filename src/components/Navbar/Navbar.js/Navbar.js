import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <nav role="navigation" id="nav">
        <input className="trigger" type="checkbox" id="mainNavButton" />

        <label for="mainNavButton">Sikhar Ji</label>
        <ul>
          <li>
            <Link to="/sikharji">Sikharji</Link>
          </li>
          <li>
            <Link to="/jainism">Jainism</Link>
          </li>

          <li>
            <Link to="/tirthankar">Tirthankar</Link>
          </li>

          <li>
            <Link to="/temple">Temple</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
