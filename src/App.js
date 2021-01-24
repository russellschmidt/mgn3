import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

import { Auth, Hub } from 'aws-amplify';

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
        <button onClick={() => Auth.federatedSignIn()}>Sign In</button>
        <button onClick={checkUser}>Check User</button>
        <button onClick={signOut}>Sign Out</button>
      </header>
    </div>
  )
}

export default App

