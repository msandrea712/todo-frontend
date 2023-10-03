import React from 'react'
import {Link} from 'react-router-dom'
import "../styles/navbar.css"
function Navbar() {
  return (
    <nav className="navbar">
      <ul className="nav-list">
        <li className="nav-item">
          <Link to="/" className="nav-link">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/about" className="nav-link">
            About
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/newtodo" className="nav-link">
            New Todo
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar