import React from 'react';
import LoginForm from './Components/LoginForm';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Router>
      <LoginForm />
    </Router>
  );
}

export default App;
