import React, { PureComponent } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import withClass from '../hoc/withClass';

export const AuthContext = React.createContext(false);

class App extends PureComponent {
  constructor(props) {
    super(props);
    console.log('App.js inside constructor', props);
    this.state = {
      persons: [
        { id: 1, name: 'Jimmy', age: 23 },
        { id: 2, name: 'Ludi', age: 22 },
        { id: 3, name: 'LD', age: 23 }
      ],
      showPersons: false,
      toggleClicked: 0,
      authenticated: false
    };
    console.log('App.js inside constructor', this.state);
  }

  componentWillMount() {
    console.log('App.js inside componentWillMount');
  }

  componentDidMount() {
    console.log('App.js inside componentDidMount');
  }

  componentWillUpdate(nextProps, nextState) {
    console.log('App.js inside componentWillUpdate', nextProps, nextState);
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    console.log('App.js inside getDerivedStateFromProps', nextProps, prevState);
    return prevState;
  }

  getSnapshotBeforeUpdate() {
    console.log('App.js inside getSnapshotBeforeUpdate');
  }

  componentDidUpdate() {
    console.log('App.js inside componentDidUpdate');
  }

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
    this.setState((prevState, props) => {
      return {
        showPersons: !doesShow,
        toggleClicked: prevState.toggleClicked + 1
      };
    });
  };

  loginHandler = () => {
    this.setState({ authenticated: true });
  };

  render() {
    console.log('App.js inside render');
    const persons = this.state.showPersons ? (
      <div>
        <Persons
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.nameChangedHandler}
        />
      </div>
    ) : null;

    return (
      <>
        <p>{this.props.title}</p>
        <button onClick={() => this.setState({ showPersons: true })}>
          Show persons
        </button>
        <Cockpit
          showPersons={this.state.showPersons}
          persons={this.state.persons}
          clicked={this.togglePersonsHandler}
          login={this.loginHandler}
        />
        <AuthContext.Provider value={this.state.authenticated}>
          {persons}
        </AuthContext.Provider>
      </>
    );
  }
}

export default withClass(App, classes.App);
