import React, { Component } from 'react';
import './App.css';
import Person from './persons/persons';

class App extends Component {

  state = {
    persons: [
      { name: "Aditya", age: 25 },
      { name: "Adarsh", age: 24 },
      { name: "Gaurav", age: 23 }
    ]
  }

  changenameHandler = () => {
    //console.log("Button Clicked");
    //don't use this.state.persons[0].name = "Sumit"

    this.setState({
      persons: [
        { name: "Sumit Vishwakarma", age: 25 },
        { name: "Adarsh", age: 24 },
        { name: "Gaurav", age: 23 }
      ]
    });
  }

  render() {
    return (
      <div className="App">
        <h1> This is React App</h1>
        <Person name="sumit" age="25" />
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age} />
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
        <button onClick={this.changenameHandler}> Change Name </button>

      </div>
    );
  }
}

export default App;
