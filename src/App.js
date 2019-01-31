import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import ValidationComponent from './ValidationComponent/ValidationComponent';
import CharComponent from './CharComponent/CharComponent';

class App extends Component {
  state = {
    persons: [
      { id: 1, name: 'Jimmy', age: 23 },
      { id: 2, name: 'Ludi', age: 22 }
    ],
    showPersons: false,
    text: ''
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

  textInputHandler = event => {
    this.setState({
      text: event.target.value
    });
  };

  charClickHandler = i => {
    const text = this.state.text.split('');
    text.splice(i, 1);
    this.setState({
      text: text.join('')
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
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is working!</p>
        <input
          type="text"
          onChange={this.textInputHandler}
          value={this.state.text}
        />
        <p>Length of the text entered: {this.state.text.length}</p>
        <ValidationComponent length={this.state.text.length} />
        <div>
          {this.state.text.split('').map((c, i) => {
            return (
              <CharComponent
                char={c}
                key={i}
                click={() => this.charClickHandler(i)}
              />
            );
          })}
        </div>
        <button style={style} onClick={this.togglePersonsHandler}>
          Toggle Persons
        </button>
        {persons}
      </div>
    );
  }
}

export default App;
