import React from 'react';
import logo from './logo.svg';
import Canvas from './components/Canvas';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="row">
        <div className="col-2">
          <img src={logo} className="App-logo" alt="logo" style={{ width: "100px" }} />
        </div>
        <div className="col-10 mt-5">
          <Canvas />
        </div>
      </div>
    </div>
  );
}

export default App;
