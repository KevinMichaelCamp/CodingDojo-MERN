import React from 'react';
import { Router } from '@reach/router';
import SearchForm from './components/SearchForm';
import People from './views/People';
import Planets from './views/Planets';
import Spaceships from './views/Spaceships';
import Error from './components/Error';
import './App.css';

function App() {
  return (
    <div className="App">
      <SearchForm />
      <Router>
        <People path="/people/:id" />
        <Planets path="/planets/:id" />
        <Spaceships path="/starships/:id" />
        <Error path="/error" />
      </Router>
    </div>
  );
}

export default App;
