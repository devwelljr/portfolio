import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="App-header">
      <div id="divPortfolio">
        <h1>Portfolio</h1>
      </div>
      <nav className="navbar navbar-expand-lg navbar-light" id="navLinks">
        <ul className="navbar-nav" id="navUl">
          <li className="nav-item">
            <Link className="nav-link active text-white" to="/portfolio/">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link active text-white" to="/About">
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link active text-white" to="/Projects">
              Projects
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link active text-white" to="/Contact">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
