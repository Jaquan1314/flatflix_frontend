import React, { Component } from "react";
import { connect } from "react-redux";
import { NavLink as Link, withRouter } from "react-router-dom";
import { FooterContainer } from "../Container/Footer";
import { editUser } from "../redux/actions";
import Navbar from "../Components/navbar/account/Navbar";
import "../Components/navbar/account/styles/account.css";

class Update extends Component {
  state = {
    userId: this.props.userReducer.user.id,
    email: this.props.userReducer.user.email,
    username: this.props.userReducer.user.username,
  };

  onUserEditSubmit = (e) => {
    e.preventDefault();
    // localStorage.setItem("token", this.state.userId);
    this.props.history.replace("/account");
    this.props.editUser(this.state);
  };

  onUserEdit = (e) => {
    console.log(e.target.value);
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <>
        <Navbar />
        <div className="updateBackground">
          <div className="updateForm">
            <form onSubmit={this.onUserEditSubmit}>
              <h1>Update Account</h1>
              <hr />
              <img
                className="profileIcon"
                src="../../images/profile/blue.png"
                alt="profile-img"
              />
              <hr />
              <h3 className="email-class"> - Email - </h3>
              <input
                className="emailInput"
                name="email"
                type="text"
                placeholder={this.props.userReducer.user.email}
                value={this.state.email}
                onChange={this.onUserEdit}
              />
              <br />
              <h3> - Username - </h3>
              <input
                className="usernameInput"
                name="username"
                type="text"
                placeholder={this.props.userReducer.user.username}
                value={this.state.username}
                onChange={this.onUserEdit}
              />
              <button id="saveBtn">Save</button>
            </form>
            <Link to="/account">
              <button id="cancelBtn">Cancel</button>
            </Link>
          </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Update));
