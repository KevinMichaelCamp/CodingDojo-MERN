import React from 'react';
import './App.css';
import { Router } from '@reach/router';
import Main from './views/Main';
import Update from './views/Update';
import Detail from './views/Detail';
import Add from './views/Add';

function App() {
  return (
    <div className="App">
      <Router>
        <Main path="players" />
        <Add path="players/add" />
        <Detail path="players/:id" />
        <Update path="players/:id/edit" />
      </Router>
    </div>
  );
}

export default App;
