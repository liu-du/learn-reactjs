import React, { Component } from 'react';
import classes from './Person.css';
import withClass from '../../../hoc/withClass';
import PropTypes from 'prop-types';

import { AuthContext } from '../../../containers/App';

class Person extends Component {
  constructor(props) {
    super(props);
    this.inputElement = React.createRef();
    console.log('Person.js inside constructor');
  }

  componentWillMount() {
    console.log('Person.js inside componentWillMount');
  }

  componentDidMount() {
    console.log('Person.js inside componentDidMount');
    // this.focus();
  }

  focus() {
    this.inputElement.current.focus();
  }

  render() {
    console.log('Person.js inside render');
    return (
      <>
        <AuthContext.Consumer>
          {auth => (auth ? <p>I'm authenticated!</p> : null)}
        </AuthContext.Consumer>
        <p onClick={this.props.click}>
          I'm {this.props.name} and I am {this.props.age} years old!
        </p>
        <p>{this.props.children}</p>
        <input
          ref={this.inputElement}
          type="text"
          onChange={this.props.changed}
          value={this.props.name}
        />
      </>
    );
  }
}

Person.propTypes = {
  click: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
  change: PropTypes.func
};

export default withClass(Person, classes.Person);
