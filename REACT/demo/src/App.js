import React from 'react';
import './App.css';
import NewComponent from './components/NewComponent';

function App() {
  return (
    <div className="App">
      <NewComponent header="Header Prop">
        <p>This is a child</p>
        <p>This is another child</p>
        <p>This is even another child</p>
      </NewComponent>
    </div>
  );
}

export default App;
