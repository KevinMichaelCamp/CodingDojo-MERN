import React from 'react';
import { Router, Link } from '@reach/router';
import Home from './components/Home';
import Param from './components/Param';
import Params from './components/Params';
import './App.css';

function App() {
  return (
    <div className="App">
      <Link to="/home">Home</Link>
      <Router>
        <Home path="/home" />
        <Param path="/:param" />
        <Params path="/:word/:textColor/:bgColor" />
      </Router>
    </div>
  );
}

export default App;
