import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import logo from "./styles/images/logo.jpg";
import "./styles/Navbar.css";

const CustomNavbar = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <div className="logo-container">
        <img src={logo} alt="Fitness Tracker Logo" />
      </div>
      <Navbar.Brand as={Link} to="/">
        Fitness Tracker
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="navbar-nav" />
      <Navbar.Collapse id="navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link as={Link} to="/">
            Home
          </Nav.Link>
          <Nav.Link as={Link} to="/dashboard">
            Dashboard
          </Nav.Link>
          <Nav.Link as={Link} to="/pre-designed-plans">
            Pre-Designed Plans
          </Nav.Link>
          <Nav.Link as={Link} to="/nutrition-tracking">
            Nutrition Tracking
          </Nav.Link>
          <Nav.Link as={Link} to="/challenges">
            Challenges
          </Nav.Link>
          <Nav.Link as={Link} to="/contact-us">
            Contact Us
          </Nav.Link>
        </Nav>
        <Nav className="ml-auto">
  <Nav.Link as={Link} to="/login">Login</Nav.Link>
  <Nav.Link as={Link} to="/signup">Sign Up</Nav.Link>
</Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default CustomNavbar;
