import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.scss';

import { Auth, Hub } from 'aws-amplify';
import styled from  'styled-components';

function checkUser() {
  Auth.currentAuthenticatedUser()
    .then(user => console.log({ user }))
    .catch(err => console.log(err))
}

function signOut() {
  Auth.signOut()
    .then(data => console.log(data))
    .catch(err => console.log(err))
}

function App(props) {
  useEffect(() => {
    Hub.listen('auth', (data) => {
      const { payload } = data
      console.log('A new auth event has occurred', data)
      if (payload.event === 'signIn') {
        console.log('a user has signed in!')
      }
      if (payload.event === 'signOut') {
        console.log('a user has signed out!')
      }
    })
  }, [])
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Circle Up</h1>
        <Button onClick={() => Auth.federatedSignIn()}>Sign In</Button>
        <Button onClick={checkUser}>Check User</Button>
        <Button onClick={signOut}>Sign Out</Button>
      </header>
    </div>
  )
}

export default App

const Button = styled.button`
  border: 1px solid rgba(71, 126, 232, 0.2);
  border-radius: 3%;
  color: #202125;
  cursor: pointer;
  font-family: Helvetica
  letter-spacing: 0.4em;
  font-weight: 600;
  font-size: 1rem;
  margin-bottom: 2px;
  text-align: center;
  &:hover {
    color: rgba(71, 126, 232, 0.7);
    outline-color: rgba(71, 126, 232, 0);
    outline-offset: 300px;
  }
`;