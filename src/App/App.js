import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import Auth from '../components/Auth/Auth';
import Home from '../components/Home/Home';

import './App.scss';

function App() {
  return (
    <div className="App">
      <h1>FISH STORE 06.24.2019</h1>
      <Auth />
      <Home />
    </div>
  );
}

export default App;
