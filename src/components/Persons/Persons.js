import React, { PureComponent } from 'react';
import Person from './Person/Person';

class Persons extends PureComponent {
  constructor(props) {
    super(props);
    console.log('Persons.js inside constructor');
  }

  componentWillMount() {
    console.log('Persons.js inside componentWillMount');
  }

  componentDidMount() {
    console.log('Persons.js inside componentDidMount');
  }

  componentWillReceiveProps(nextProps) {
    console.log('Persons.js inside componentWillReceivePorps', nextProps);
  }

  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log('Persons.js inside shoudComponentUpdate', nextProps, nextState);
  //   return (
  //     nextProps.persons !== this.props.persons ||
  //     nextProps.click !== this.props.click ||
  //     nextProps.changed !== this.props.changed
  //   );
  // }

  componentWillUpdate(nextProps, nextState) {
    console.log('Persons.js inside componentWillUpdate', nextProps, nextState);
  }

  componentDidUpdate() {
    console.log('Persons.js inside componentDidUpdate');
  }

  render() {
    console.log('Persons.js inside render');
    return this.props.persons.map((person, index) => {
      return (
        <Person
          key={person.id}
          name={person.name}
          age={person.age}
          changed={event => this.props.changed(event, person.id)}
          click={() => this.props.clicked(index)}
        />
      );
    });
  }
}

export default Persons;
