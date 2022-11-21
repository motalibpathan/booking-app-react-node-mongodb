import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import "./navbar.css";

function Navbar() {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);

  return (
    <div className="navbar">
      <div className="navContainer">
        <span className="logo">
          <Link to="/">SimpleBooking</Link>
        </span>
        {user ? (
          user.username
        ) : (
          <div className="navItems">
            <button className="navButton">Register</button>
            <button onClick={() => navigate("/login")} className="navButton">
              Login
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
