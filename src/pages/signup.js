import React, { Component } from "react";
import { HeaderContainer } from "../Container/Header";
import { FooterContainer } from "../Container/Footer";
import { NavLink as Link } from "react-router-dom";
import "../Components/form/styles/form.css";

export default class Signup extends Component {
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

    let user = {
      username: this.state.username,
      password: this.state.password,
      email: this.state.email,
    };

    // let token = localStorage.getItem("token");

    fetch("http://localhost:3000/api/v1/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        // Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(user),
    })
      .then((r) => r.json())
      .then(console.log);
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
