import React from 'react';

import './App.scss';

import Header from './Header'
import Router from './Router'
import styled from  'styled-components';

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Router />
      </div>
    )
  }
}

export default App

const Button = styled.button`
  border: 1px solid rgba(71, 126, 232, 0.2);
  border-radius: 8%;
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

export { Button };