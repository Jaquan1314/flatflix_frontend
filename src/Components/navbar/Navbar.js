import React, { useState, useEffect } from "react";
import logo from "../../logo.png";
import "../navbar/styles/navbar.css";
import { NavLink as Link, withRouter } from "react-router-dom";
import { logUserOut } from "../../redux/actions";
import { connect } from "react-redux";
import Search from "../../Components/search/Search";

function Navbar(props) {
  const [show, handleShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 0) {
        handleShow(true);
      } else handleShow(false);
    });
    // return () => {
    //   window.removeEventListener("scroll");
    // };
  }, []);

  const handleSignOut = () => {
    console.log(props);
    localStorage.clear();
    props.history.push("/");
    props.userReducer.loggedIn = false;
    props.userReducer.user = {};
    props.logUserOut();
  };

  return (
    <div className={`navbar ${show && "nav-blk"}`}>
      <Link to="/browse">
        <img className="nav-logo" src={logo} alt="Flatflix" />
      </Link>
      <Link className="my-list" to="#">
        My List
      </Link>
      <Search />
      <div className="dropdown">
        <img
          className="nav-profile"
          src="../images/profile/blue.png"
          alt="Flatflix"
        />
        <i className="fa fa-caret-down"></i>
        <i className="fa fa-caret-up"></i>
        <div className="dropdown-content">
          <Link to="/account">Account</Link>
          <div onClick={handleSignOut}>
            <Link to="#">Sign out of Flatflix</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    // state,
    userReducer: state.userReducer,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    logUserOut: () => dispatch(logUserOut()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Navbar));
