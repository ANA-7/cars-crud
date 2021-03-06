import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {

  render() {
    return (
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <div className="collpase navbar-collapse">
          <ul className="navbar-nav mr-auto">
            <li className="navbar-item">
              <Link to="/" className="nav-link">Cars</Link>
            </li>
            <li className="navbar-item">
              <Link to="/create" className="nav-link">Add a car</Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
