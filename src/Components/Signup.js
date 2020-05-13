import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default class Signup extends React.Component {

  state = {
    fullname: '',
    email: '',
    password: '',
    password_confirmation: '',
    errors: ''
  };

  handleChange = (e) => {
    const { name, value } = e.target
    this.setState({
      [name]: value
    })
  };

  // create a user object based on the components state
  handleSubmit = (e) => {
    e.preventDefault();
    const { fullname, email, password, password_confirmation } = this.state;
    let user = {
      fullname: fullname,
      email: email,
      password: password,
      password_confirmation: password_confirmation
    };

    // POST data to Rails server for authentication
    axios.post('http://localhost:3001/users', {user}, {withCredentials: true})
      .then(response => {
        if (response.data.status === 'created') {
          this.props.handleLogin(response.data)
          this.redirect()
        } else {
          this.setState({
            errors: response.data.errors
          })
        }
      })
      .catch(error => console.log('api errors:', error))
  };

  redirect = () => {
    this.props.history.push('/')
  };
  
  handleErrors = () => {
    return (
      <div>
        <ul>{this.state.errors.map((error) => {
          return <li key={error}>{error}</li>
        })}
        </ul>
      </div>
    )
  }

  render () {
    const { fullname, email, password, password_confirmation } = this.state

    return (
      <div>
        <h1>Sign Up</h1>

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
          {/* Confirm passwords match */}
          <input placeholder="password confirmation"
            type="password"
            name="password_confirmation"
            value={password_confirmation}
            onChange={this.handleChange}
          />

          <button placeholder="submit" type="submit">
            Sign Up
          </button>

          <div>
            or <Link to='/login'>log in</Link>
          </div>

        </form>
      </div>
    )
  }
};