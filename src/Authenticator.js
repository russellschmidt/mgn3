// src.Authenticator.js
import React from 'react';
import { withRouter } from 'react-router-dom';

import SignIn from './SignIn';
import SignUp from './SignUp';
import { Button } from './App';

import styled from  'styled-components';

class Authenticator extends React.Component {
  state = {
    showSignIn: true
  }

  switchState = (showSignIn) => {
    this.setState({
      showSignIn
    })
  }

  render() {
    const { showSignIn } = this.state;
    return (
      <Container>
        {
          showSignIn ? (
            <SignIn />
          ) : (
            <SignUp />
          )
        }
        <div>
          <Button
            onClick = {() => this.switchState(true)}
          > Sign in
          </Button>
          <Button
            onClick = {() => this.switchState(false)}
          > Sign up
          </Button>
        </div>
      </Container>
    )
  }

}

export default withRouter(Authenticator);

const Container = styled.div`
  display: flex;
  justifyContent: center;
`;
