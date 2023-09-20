import React from 'react';
import logo from './logo.svg';
import './App.css';
import Cart from './Cart'
import Currecncy from './Currency'
import User from './User'
import UserMenu from './UserMenu'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
       <UserMenu />
     
      </header>
    </div>
  );
}

export default App;
