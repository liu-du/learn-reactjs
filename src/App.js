import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [{ name: 'Jimmy', age: 23 }, { name: 'Ludi', age: 22 }]
  };

  swithNameHandler = name => {
    this.setState({
      persons: [{ name: name, age: 23 }, this.state.persons[0]]
    });
  };

  nameChangedHandler = event => {
    this.setState({
      persons: [
        { name: event.target.value, age: 23 },
        { name: event.target.value, age: 25 }
      ]
    });
  };

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      boxShadow: '0 2px 3px #ccc',
      padding: '8px',
      cursor: 'pointer'
    };

    return (
      <div class="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is working!</p>
        <button style={style} onClick={() => this.swithNameHandler('yes')}>
          Switch Name
        </button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
          click={this.swithNameHandler.bind(this, 'HAHAHA!')}
          changed={this.nameChangedHandler}
        >
          My Hobbie: Coding
        </Person>
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          changed={this.nameChangedHandler}
        />
      </div>
    );
  }
}

export default App;
