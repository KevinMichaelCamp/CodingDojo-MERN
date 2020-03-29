import React from 'react';
import Wrapper from './components/Wrapper';
import FormWrapper from './components/FormWrappper';
import NavBar from './components/NavBar';
import './App.css';

function App() {
  return (
    <Wrapper>
      <NavBar />
      <FormWrapper />
    </Wrapper>
  );
}

export default App;
