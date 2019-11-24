import React from 'react';
import './App.css';
import Person from './Person/Person';

function App() {
  return (
    <div className="App">
      <Person name="Sumit" age="25"></Person>
      <Person name="Aditya " age="26"> </Person>
      <Person name="Adarsh" age="25"> I am currently living in HYDERABAD</Person>
      
    </div>
  );
}

export default App;
