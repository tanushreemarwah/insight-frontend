import React, { Component } from 'react'
import UserForm from '../components/UserForm'

export class Login extends Component {
  state = {
    // user info
    loggedIn: false, // logged out by default
    firstName: '',
    lastName: '',
    email: '',
    countryCode: '',
    phoneNumber: ''
  }
  handleChange = input => e => {
    this.setState({[input]: e.target.value});
  }
  render() {
    // based on loggedIn, we want to decide what will be displayed here -> login or logout form.
    const { loggedIn } = this.state;
    const { firstName, lastName, email, countryCode, phoneNumber } = this.state;
    const values = { firstName, lastName, email, countryCode, phoneNumber };

    if(loggedIn) {
      return (
        <UserForm
          handleChange={this.handleChange}
          values={values}
        />
      );
    } else {
      return (
        <div className='login'>
          <h2>Login or Sign Up Using Email or Phone No.!</h2>
          <div className='username'>Username: </div>
          <div className='password'>Password: </div>
        </div>
      )
    }
  }
}

export default Login
