import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import FormikForm from './Components/NewUserForm';
import NewUserGrid from './Components/NewUserGrid';

function App() {
  const [users, setUsers] = useState([]);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <FormikForm key={1}/>
      <NewUserGrid setUsers={setUsers} users={users}/>
    </div>
  );
}

export default App;
