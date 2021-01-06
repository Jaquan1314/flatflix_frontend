import React, { useState, useEffect } from "react";
import logo from "../../logo.png";
import "../navbar/styles/navbar.css";
import { NavLink as Link } from "react-router-dom";

export default function Navbar() {
  const [show, handleShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 0) {
        handleShow(true);
      } else handleShow(false);
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);

  return (
    <div className={`navbar ${show && "nav-blk"}`}>
      <Link to="/browse">
        <img className="nav-logo" src={logo} alt="Flatflix" />
      </Link>
      <Link className="my-list" to="#">
        My List
      </Link>
      <img
        className="nav-profile"
        src="../images/profile/blue.png"
        alt="Flatflix"
      />
    </div>
  );
}
