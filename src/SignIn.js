import React from 'react';
import { Auth } from 'aws-amplify';
import { withRouter } from 'react-router-dom';

import styled from  'styled-components';

class SignIn extends React.Component {
  state = {
    username: '',
    password: '',
    authCode: ''
  }
  onChange = (key, value) => {
    this.setState({
      [key]: value
    })
  }
  signIn = () => {
    Auth.signIn(this.state.username, this.state.password)
      .then(user => {
        this.props.history.push('/')
      })
      .catch(err => console.log('error siging in...: ', err));
  }
  render() {
    return (
      <div>
        <div>
          <input
            onChange={evt => this.onChange('username', evt.target.value)}
            placeholder='username'
          />
          <input 
            type='password'
            onChange={evt => this.onChange('password', evt.target.value)}
            placeholder='password'
          />
          <div>
            <button
              onClick={this.signIn}
            >
              Sign In
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default withRouter(SignIn);