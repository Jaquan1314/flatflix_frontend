import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Home, Browse, Signin, Signup } from "./pages";
import { connect } from "react-redux";
import { checkLogin } from "./redux/actions";
import * as ROUTES from "./Constants/routes";
import "./styles/main.css";

class App extends Component {
  componentDidMount() {
    this.props.checkLogin();
  }

  render() {
    return (
      <div className="main">
        <Router>
          <Route exact path={ROUTES.BROWSE}>
            <Browse />
          </Route>
          <Route exact path={ROUTES.SIGN_IN}>
            <Signin />
          </Route>
          <Route exact path={ROUTES.SIGN_UP}>
            <Signup />
          </Route>
          <Route exact path={ROUTES.HOME}>
            <Home />
          </Route>
        </Router>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    userReducer: state.userReducer,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    checkLogin: () => dispatch(checkLogin()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
