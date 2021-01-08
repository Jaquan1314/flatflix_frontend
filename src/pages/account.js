import React, { Component, useEffect, useState } from "react";
import Navbar from "../Components/navbar/account/Navbar";
import { FooterContainer } from "../Container/Footer";
import { connect } from "react-redux";
import { withRouter, Link } from "react-router-dom";
import { editUser } from "../redux/actions";

class Account extends Component {
  render() {
    return (
      <>
        <Navbar />
        <div className="accountBackground">
          <div className="account">
            <h1>Account</h1>
            <div className="accountContent">
              <hr />
              <div className="membership">
                <header>MEMBERSHIP & BILLING</header>
                <br />
                <button>$FREE.99</button>
              </div>
              <hr />
              <h2 className="account-details">Update Account</h2>
              <h3 className="email">
                email: {this.props.userReducer.user.email}
              </h3>
              <br />
              <h3 className="username">
                username: {this.props.userReducer.user.username}
              </h3>
              <Link to="/account/update">
                <button className="updateBtn">Edit Account</button>
              </Link>
              <hr />
              <div className="membership">
                <header>PLAN DETAILS</header>
              </div>
              <b>Flatiron </b>
              <b>$FREE99</b>
              <hr className="free99hr" />
            </div>
          </div>
          <br />
          <hr />
          <FooterContainer />
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    // state,
    userReducer: state.userReducer,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    editUser: (updatedInfo) => dispatch(editUser(updatedInfo)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Account));
