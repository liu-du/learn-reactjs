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
    <>
      <h1>Hi, I'm a React App</h1>
      <p className={assignedClasses}>This is working!</p>
      <button
        className={
          props.showPersons
            ? classes.Button + ' ' + classes.Red
            : classes.Button
        }
        onClick={props.clicked}
      >
        Toggle Persons
      </button>
      <button onClick={props.login}>Log in</button>
    </>
  );
};

export default React.memo(cockpit);
