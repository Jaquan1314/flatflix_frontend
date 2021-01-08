import React, { Component } from "react";
import { HeaderContainer } from "../Container/Header";
import { FooterContainer } from "../Container/Footer";
import { NavLink as Link, Redirect, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { fetchUser } from "../redux/actions";
import "../Components/form/styles/form.css";

class Signin extends Component {
  state = {
    username: "",
    password: "",
  };

  handleOnChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const token = localStorage.getItem("token");
    this.props.fetchUser(this.state);
    console.log(this.props.history);
    // if (token) {
    this.props.history.push("/browse");
    // } else {
    //   // alert("Invalid! Try again");
    //   localStorage.clear();
    //   this.props.history.push("/");
    // }
  };

  render() {
    return (
      <>
        <HeaderContainer>
          <div className="Container">
            <form className="Base" onSubmit={this.handleSubmit}>
              <h1 className="Title">Sign In</h1>
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
              <button className="SignIn">
                <span>Sign In</span>
              </button>
              <p className="Text">
                New to Flatflix?{" "}
                <Link className="SignUpLink" to="/signup">
                  Sign up now.
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
    fetchUser: (userInfo) => dispatch(fetchUser(userInfo)),
  };
};

export default connect(null, mapDispatchToProps)(withRouter(Signin));

// let user = {
//   username: this.state.username,
//   password: this.state.password,
//   email: this.state.email,
// };

// fetch("http://localhost:3000/api/v1/login", {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json",
//     Accept: "application/json",
//     Authorization: `Bearer ${token}`,
//   },
//   body: JSON.stringify(user),
// })
//   .then((resp) => resp.json())
//   .then((data) => {
//     console.log(data);
//     localStorage.setItem("token", data.jwt);
//   });

// let token = localStorage.getItem("token");
