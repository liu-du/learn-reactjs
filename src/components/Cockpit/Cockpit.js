import React from 'react';
import classes from './Cockpit.css';

const cockpit = props => {
  const assignedClasses =
    props.persons.length <= 1
      ? classes.red + ' ' + classes.bold
      : props.persons.length <= 2
      ? classes.bold
      : null;

  return (
    <div className={classes.Cockpit}>
      <h1>Hi, I'm a React App</h1>
      <p className={assignedClasses}>This is working!</p>
      <button
        className={props.showPersons ? classes.Red : null}
        onClick={props.clicked}
      >
        Toggle Persons
      </button>
    </div>
  );
};

export default cockpit;
