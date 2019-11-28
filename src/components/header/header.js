import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
    <div className="nav-wrapper">
		<div className="grad-bar"></div>
		<nav className="navbar">
			<img src="assets/images/image1.png" alt="Company Logo"/>
			<div className="menu-toggle" id="mobile-menu">
				<span className="bar"></span>
				<span className="bar"></span>
				<span className="bar"></span>
      </div>
			<ul className="nav no-search">
				<li className="nav-item"><Link to="/home" className="navbar-brand">Home</Link></li>
				<li className="nav-item"><Link to="/about" className="navbar-brand">About</Link></li>
				<li className="nav-item"><Link to="/work" className="navbar-brand">Work</Link></li>
				<li className="nav-item"><Link to="/careers" className="navbar-brand">Careers</Link></li>
				<li className="nav-item"><Link to="/contact" className="navbar-brand">Contact Us</Link></li>
				<i className="fas fa-search" id="search-icon"></i>
				<input className="search-input" type="text" placeholder="Search.."/>
      </ul>
    </nav>
	</div>
    );
  }
}
export default Header;
