// src.Authenticator.js
import React from 'react';
import { withRouter } from 'react-router-dom';

import SignIn from './SignIn';
import SignUp from './SignUp';

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
          <button
            onClick = {() => this.switchState(false)}
          >
          </button>
        </div>
      </Container>
    )
  }

}

export default withRouter(Authenticator);

const Container = styled.div`
  display: 'flex',
  justifyContent: 'center'
`;