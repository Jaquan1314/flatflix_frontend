import React, { Component } from "react";
import { HeaderContainer } from "../Container/Header";
import { FooterContainer } from "../Container/Footer";
import { NavLink as Link, Redirect } from "react-router-dom";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import { connect } from "react-redux";
import { login } from "../actions/auth";

import "../Components/form/styles/form.css";

const required = (value) => {
  if (!value) {
    return <div>This field is required!</div>;
  }
};
export default class Signin extends Component {
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

    fetch("http://localhost:3000/api/v1/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(user),
    })
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data);
        localStorage.setItem("token", data.jwt);
      });

    let token = localStorage.getItem("token");
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
              <button className="SignIn">Sign In</button>
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
