import './App.css';
import React from 'react';
import Wallet from './components/wallet';
import Transfer from './components/transfer';
import Info from './components/info';



function App() {

  return (
    <div className="App">
      <p>
        Adam's Eth Dapp
      </p>
    
      <div className="container">
        <Wallet/>
        <br/>
        <br/>
        <Transfer/>
      </div>
      
      <div className="info">
        <Info/>
      </div>
    </div>
  );
}

export default App;
