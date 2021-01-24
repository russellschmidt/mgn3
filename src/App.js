import logo from './logo.svg';
import './App.css';

import { Auth } from 'aws-amplify';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>TAYNE</h1>
        <button onClick={() => Auth.federatedSignIn()}>Sign in</button>
      </header>
    </div>
  );
}

export default App;
