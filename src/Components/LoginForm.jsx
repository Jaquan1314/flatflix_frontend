import React, { Component } from 'react';
class LoginForm extends Component {
  state = {
    username: "",
    password: ""
  }

  handleOnChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault()

    let user = {
      username: this.state.username,
      password: this.state.password
    }

    fetch('http://localhost:3000/api/v1/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(user)
    })
    .then(resp => resp.json())
    .then(data => console.log(data))
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>Username:</label>
        <input type='text' name='username' value={this.state.username} onChange={this.handleOnChange} />
        <label>Password:</label>
        <input type='password' name='password' value={this.state.password} onChange={this.handleOnChange} />
        <input type='submit' value='Login' />
      </form>
    )
  }
}

export default LoginForm;
