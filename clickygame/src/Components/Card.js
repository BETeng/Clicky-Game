import React from 'react';
import PropTypes from 'prop-types';

const Card = props => {
  return (
    <div
    id={props.id}
    className="card"
    />
  )
}

Card.propTypes = {
  id: PropTypes.number,
  image: PropTypes.string
}

export default Card;