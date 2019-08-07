import React from 'react';
import PropTypes from 'prop-types';

const Scoreboard = props => {
  return (
    <div id="scoreboard">
      <h3>Current Score: {props.score}</h3>
      <h3>Record: {props.record}</h3>
  
    </div>
  )
}

Scoreboard.propTypes = {
  score: PropTypes.string,
  record: PropTypes.string
}
export default Scoreboard;