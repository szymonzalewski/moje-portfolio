import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <h1 className="logo">Szymon Zalewski</h1>
      <ul className="nav-links">
        <li>
          <Link to="/">Strona główna</Link>
        </li>
        <li>
          <Link to="/about">O mnie</Link>
        </li>
        <li>
          <Link to="/contact">Kontakt</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
