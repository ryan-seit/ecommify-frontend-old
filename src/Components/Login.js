import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default class Login extends React.Component {

  state = {
    fullname: '',
    email: '',
    password: '',
    errors: ''
  }

  // if user is authenticated, redirect to '/'
  componentWillMount() {
    return this.props.loggedInStatus ? this.redirect() : null
  }

  handleChange = (e) => {
    const { name, value } = e.target
    this.setState({
      [name]: value
    })
  };

  // create a user object based on the components state
  handleSubmit = (e) => {
    e.preventDefault()
    const { fullname, email, password } = this.state

    let user = {
      fulname: fullname,
      email: email,
      password: password
    }

    // POST data to Rails server for authentication
    axios.post('http://localhost:3001/login', {user}, {withCredentials: true})
      .then(response => {
        // if server response is valid, call handleLogin() from App.js
        if (response.data.logged_in) {
          this.props.handleLogin(response.data)
          this.redirect()
        } else {
          // if response is not valid, attach errors to state
          this.setState({
            errors: response.data.errors
          })
        }
      })
      .catch(error => console.log('api errors:', error))
  };

  // redirect user after valid authentication using history props from App.js
  redirect = () => {
    this.props.history.push('/')
  }

  handleErrors = () => {
    return (
      <div>
        <ul>
          {this.state.errors.map(error => {
            return <li key={error}>{error}</li>
          })}
        </ul>
      </div>
    )
  }

  render () {
    const { fullname, email, password } = this.state

    return (
      <div>
        <h1>Log In</h1>

        <form onSubmit={this.handleSubmit}>
          <input placeholder="fullname"
            type="text"
            name="fullname"
            value={fullname}
            onChange={this.handleChange}
          />
          <input placeholder="email"
            type="text"
            name="email"
            value={email}
            onChange={this.handleChange}
          />
          <input placeholder="password"
            type="password"
            name="password"
            value={password}
            onChange={this.handleChange}
          />

          <button placeholder="submit" type="submit">
            Log In
          </button>

          <div>
            or <Link to='/signup'>sign up</Link>
          </div>

        </form>
        <div>
          {this.state.errors ? this.handleErrors() : null}
        </div>
      </div>
    )
  }
};