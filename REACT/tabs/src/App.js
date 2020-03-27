import React from 'react';
import Tabs from './components/Tabs';
import './App.css';

const tabContents = [
  ['Tab 1', 'Content for tab 1'],
  ['Tab 2', 'Content for tab 2'],
  ['Tab 3', 'Content for tab 3'],
]
function App() {
  return (
    <div className="App">
      <Tabs tabs={tabContents} />
    </div>
  );
}

export default App;
