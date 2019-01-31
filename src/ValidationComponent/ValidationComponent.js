import React from 'react';

const validationComponent = props => {
  return <p>{props.length < 5 ? 'Text too short' : 'Good!'}</p>;
};
export default validationComponent;
