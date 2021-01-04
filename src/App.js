import React, { Component } from "react";
import LoginForm from "./Components/LoginForm";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Jumbotron from "./Components/jumbotron";
import jumboData from "./fixtures/jumbo.json";
class App extends Component {
  state = {
    CurrentUser: null,
  };

  render() {
    return (
      <Router>
        <LoginForm />
        <Jumbotron.Container>
          {jumboData.map((item) => (
            <Jumbotron key={item.id} direction={item.direction}>
              <Jumbotron.Pane>
                <Jumbotron.Title>{item.title}</Jumbotron.Title>
                <Jumbotron.SubTitle>{item.subTitle}</Jumbotron.SubTitle>
              </Jumbotron.Pane>
              <Jumbotron.Pane>
                <Jumbotron.Image src={item.image} alt={item.alt} />
              </Jumbotron.Pane>
            </Jumbotron>
          ))}
        </Jumbotron.Container>
      </Router>
    );
  }
}

export default App;
