import React, { Component } from 'react';
import Radium, { StyleRoot } from 'radium';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { id: 1, name: 'Jimmy', age: 23 },
      { id: 2, name: 'Ludi', age: 22 },
      { id: 3, name: 'LD', age: 21 }
    ],
    showPersons: false
  };

  deletePersonHandler = index => {
    const persons = [...this.state.persons];
    persons.splice(index, 1);
    this.setState({ persons: persons });
  };

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(
      person => person.id === id
    );
    const person = { ...this.state.persons[personIndex] };
    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons: persons });
  };

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({
      showPersons: !doesShow
    });
  };

  render() {
    const style = {
      backgroundColor: this.state.showPersons ? 'red' : 'green',
      font: 'inherit',
      border: '1px solid blue',
      boxShadow: '0 2px 3px #ccc',
      padding: '8px',
      cursor: 'pointer',
      ':hover': {
        backgroundColor: this.state.showPersons ? 'salmon' : 'lightgreen',
        color: 'black'
      }
    };

    const persons = this.state.showPersons ? (
      <div>
        {this.state.persons.map((person, index) => {
          return (
            <Person
              key={person.id}
              name={person.name}
              age={person.age}
              changed={event => this.nameChangedHandler(event, person.id)}
              click={() => this.deletePersonHandler(index)}
            />
          );
        })}
      </div>
    ) : null;

    return (
      <StyleRoot>
        <div className="App">
          <h1>Hi, I'm a React App</h1>
          <p
            className={
              this.state.persons.length <= 1
                ? 'red bold'
                : this.state.persons.length <= 2
                ? 'red'
                : null
            }
          >
            This is working!
          </p>
          <button style={style} onClick={this.togglePersonsHandler}>
            Toggle Persons
          </button>
          {persons}
        </div>
      </StyleRoot>
    );
  }
}

export default Radium(App);
