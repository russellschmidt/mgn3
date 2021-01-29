import React from 'react';
import { withRouter } from 'react-router-dom';
import { Auth } from 'aws-amplify';

import styled from  'styled-components';

class SignUp extends React.Component {
  state = {
    username: '',
    password: '',
    email: '',
    phone_number: '',
    authCode: '',
    showConfirmation: false
  }
  onChange = (key, value) => {
    this.setState({
      [key]: value
    })
  }
  signUp = () => {
    const { username, password, email, phone_number } = this.state;
    Auth.signUp({
      username,
      password,
      attributes: {
        email, 
        phone_number
      }
    })
    .then(() => this.setState({ showConfirmation: true }))
    .catch(err => console.log('Error signing up: ', err))
  }
  confirmSignUp = () => {
    Auth.confirmSignUp(this.state.username, this.state.authCode)
    .then(() => this.props.history.push('/'))
    .catch(err => console.log('Error confirming sign up: ', err))
  }
  render() {
    const { showConfirmation } = this.state;
    return (
      <div>
        {
          !showConfirmation && (
            <div>
              <input 
                placeholder="Username"
                onChange={evt => this.onChange('username', evt.target.value)}
              />
              <input 
              placeholder="Password"
              type="password"
              onChange={evt => this.onChange('password', evt.target.value)}
              />
              <input 
              placeholder="Phone Number"
              type="tel"
              onChange={evt => this.onChange('phone_number', evt.target.value)}
              />
              <button
                onClick={this.signUp}
              >
                Sign Up
              </button>
            </div>
          )
        }
        {
          showConfirmation && (
            <div>
              <input 
                onChange={evt => this.onChange('authCode', evt.target.value)}
                placeholder='Confirmation Code'
              />
              <div 
                onClick={this.confirmSignUp}
              >
                <button>
                  Confirm Sign Up
                </button>
              </div>
            </div>
          )
        }
      </div>
    )
  }
}

export default withRouter(SignUp);