import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import pokemon from '../data/pokemon.json';
import Card from './Card';

class Board extends Component {
  constructor() {
    super();
    this.state = {
      pokemon: pokemon,
      clickedPokemon: []
    };
  };

render(){
  let eachPokemon = this.state.pokemon.map(
    pokemon => 
    <Card
      key ={pokemon.id}
      id={pokemon.id}
      image={pokemon.image}
      />
  )
  return (
    <div id="board" className={this.props.shake}>
        {eachPokemon}
    </div>
);
}


}

// Board.propTypes = {
  
// }

export default Board;