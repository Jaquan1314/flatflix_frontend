import React, { Component } from "react";
import { HeaderContainer } from "../Container/Header";
import { FooterContainer } from "../Container/Footer";
import { connect } from "react-redux";
import { signUserUp } from "../redux/actions";
import { NavLink as Link, withRouter } from "react-router-dom";
import "../Components/form/styles/form.css";

class Signup extends Component {
  state = {
    username: "",
    password: "",
    email: "",
  };

  handleOnChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    event.preventDefault();
    this.props.signUserUp(this.state);
    console.log(this.props.history);
    this.props.history.replace("/browse");
  };

  render() {
    return (
      <>
        <HeaderContainer>
          <div className="Container">
            <form className="Base" onSubmit={this.handleSubmit}>
              <h1 className="Title">Sign Up</h1>
              <input
                className="formInput"
                type="text"
                name="email"
                value={this.state.email}
                onChange={this.handleOnChange}
                placeholder="Email"
              />
              <input
                className="formInput"
                type="text"
                name="username"
                value={this.state.username}
                onChange={this.handleOnChange}
                placeholder="Username"
              />
              <input
                className="formInput"
                type="password"
                name="password"
                value={this.state.password}
                onChange={this.handleOnChange}
                placeholder="Password"
              />
              <button className="SignIn">Sign Up</button>
              <p className="Text">
                Already have an account?{" "}
                <Link className="SignUpLink" to="/signin">
                  Sign in now.
                </Link>
              </p>
              <p className="SmallText">
                This page is protected by Google reCAPTCHA to ensure you're not
                a bot. Learn more.
              </p>
            </form>
          </div>
        </HeaderContainer>
        <FooterContainer />
      </>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    signUserUp: (userInfo) => dispatch(signUserUp(userInfo)),
  };
};

export default connect(null, mapDispatchToProps)(withRouter(Signup));
