import React, { Component } from "react";
import LoginForm from "./Components/LoginForm";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { JumbotronContainer } from "./Container/Jumbotron";
import { FooterContainer } from "./Container/Footer";

class App extends Component {
  state = {
    CurrentUser: null,
  };

  render() {
    return (
      <Router>
        <LoginForm />
        <JumbotronContainer />
        <FooterContainer />
      </Router>
    );
  }
}

export default App;
