import React, { useState } from 'react';
import RegisterForm from "./components/RegisterForm";
import Results from "./components/Results";
import './App.css';

function App() {
  const [state, setState] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirm: ""
  });
  return (
    <div className="App">
      <RegisterForm inputs={state} setInputs={setState} />
      <Results data={state} />
    </div>
  );
}

export default App;
