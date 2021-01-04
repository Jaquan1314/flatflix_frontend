import React, { Component } from "react";
import LoginForm from "./Components/LoginForm";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import { render } from "@testing-library/react";

class App extends Component {
  state = {
    CurrentUser: null,
  };

  render() {
    return (
      <Router>
        <h1>Flatflix</h1>
        <LoginForm />
      </Router>
    );
  }
}

export default App;
