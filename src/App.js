import React from 'react';
import logo from './logo.svg';
import './App.css';
import TodosList from './components/TodosList';
import UserInputComponent from './components/UserInputComponent';

function App() {
  return (
    <div className="App">
      <UserInputComponent/>
      <hr/>
      <TodosList/>
    </div>
  );
}

export default App;
