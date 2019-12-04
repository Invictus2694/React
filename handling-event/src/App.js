import React, { useState } from 'react';
import './App.css';
import Person from './persons/persons';

const App = ()=> {

  const [ personsState , setpersonsState ] = useState({
    persons:[
      {name:"Sumit" ,age: 23},
      {name:"Aditya" ,age: 24},
      {name:"Gaurav" ,age: 26},
    ]
  });

  const changenameHandler = () => {
    //console.log("Button Clicked");
    //don't use---- this.state.persons[0].name = "Sumit"
    setpersonsState({
      persons:[
        {name:"Sumit Vishwakarma" ,age: 23},
        {name:"Aditya Kumar" ,age: 24},
        {name:"Gaurav Singh" ,age: 26},
      ]
    });

    
  }

  
    return (
      <div className="App">
        <h1> This is React App</h1>
        <Person name="sumit" age="25" />
        <Person name={personsState.persons[0].name} age={personsState.persons[0].age} />
        <Person name={personsState.persons[1].name} age={personsState.persons[1].age} />
        <Person name={personsState.persons[2].name} age={personsState.persons[2].age} />
        <button onClick={changenameHandler}> Change Name </button>

      </div>
    );
  
}

export default App;
