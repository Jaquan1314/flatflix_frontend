import React, { Component } from "react";
import { Switch, Route, withRouter } from "react-router-dom";
import { Home, Browse, Signin, Signup, Account, Update } from "./pages";
import { connect } from "react-redux";
import { checkLogin } from "./redux/actions";
import * as ROUTES from "./Constants/routes";
import "./styles/main.css";
import ProtectedRoute from "./ProtectedRoute";
// import MovieContainer from "./Container/MovieContainer";

class App extends Component {
  componentDidMount() {
    const token = localStorage.getItem("token");
    if (token) {
      this.props.checkLogin(token);
      this.props.history.push("/browse");
    } else {
      this.props.history.push("/");
    }
  }

  render() {
    return (
      <div className="main">
        <Switch>
          <ProtectedRoute exact path={ROUTES.BROWSE} component={Browse} />
          <ProtectedRoute exact path={ROUTES.ACCOUNT} component={Account} />
          <ProtectedRoute exact path={ROUTES.UPDATE_USER} component={Update} />
          <Route exact path={ROUTES.SIGN_IN}>
            <Signin />
          </Route>
          <Route exact path={ROUTES.SIGN_UP}>
            <Signup />
          </Route>
          <Route exact path={ROUTES.HOME} component={Home} />
          <ProtectedRoute component={Home} />
        </Switch>
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
    checkLogin: (token) => dispatch(checkLogin(token)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(App));
{
  /* <Switch>
<Route exact path={ROUTES.BROWSE}>
  <Browse />
</Route>
<Route exact path={ROUTES.ACCOUNT}>
  <Account />
</Route>
<Route exact path={ROUTES.UPDATE_USER}>
  <Update />
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
</Switch> */
}
