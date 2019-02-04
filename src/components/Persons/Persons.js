import React, { PureComponent } from 'react';
import Person from './Person/Person';

class Persons extends PureComponent {
  constructor(props) {
    super(props);
    this.lastPersonRef = React.createRef();
    console.log('Persons.js inside constructor');
  }

  componentWillMount() {
    console.log('Persons.js inside componentWillMount');
  }

  componentDidMount() {
    console.log('Persons.js inside componentDidMount');
    this.lastPersonRef.current.focus();
  }

  componentWillReceiveProps(nextProps) {
    console.log('Persons.js inside componentWillReceivePorps', nextProps);
  }

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
          position={index}
          name={person.name}
          age={person.age}
          ref={index === 0 ? this.lastPersonRef : null}
          changed={event => this.props.changed(event, person.id)}
          click={() => this.props.clicked(index)}
        />
      );
    });
  }
}

export default Persons;
