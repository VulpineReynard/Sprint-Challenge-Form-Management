import React from 'react';
import logo from './logo.svg';
import './App.css';
import FormikForm from './Components/NewUserForm';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <FormikForm />
    </div>
  );
}

export default App;
