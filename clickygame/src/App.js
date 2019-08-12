import React from "react";
import MemoryTile from "./components/MemoryTile";
import Wrapper from "./components/Wrapper";
import Score from "./components/Score";
import tiles from "./tiles.json";
import "./App.css";

function shuffleCards(cards) {
  let newCards = cards;
  for (let i = 0; i < cards.length * 2; i++) {
    let index1 = Math.floor(Math.random() * cards.length);
    let index2 = Math.floor(Math.random() * cards.length);
    let swap = cards[index1];
    cards[index1] = cards[index2];
    cards[index2] = swap;
  }
  return newCards;
}


class App extends React.Component {
  state = {
    tiles,
    score: 0,
    message: "Click any tile to start!"
  };

  

  clickHandler = pokemonid => {
    let clickedTile = this.state.tiles.find(pokemon => pokemon.id === pokemonid);
    if (clickedTile.clicked) {
      this.setState({ score: 0 });
      this.setState({ message: "You need to train harder to catch em all!" });
      tiles.forEach(pokemon => (pokemon.clicked = false));
    } else {
      clickedTile.clicked = true;
      let newScore = this.state.score + 1;
      this.setState({ score: newScore });
      this.setState({ message: "You caught the pokemon" });
    }
    let shuffled = shuffleCards(this.state.tiles);
    this.setState({ tiles: shuffled });
  };

  render() {
    return (
      <>
        <div className="top">
          <h1 className="title">Pokemon Memory Game</h1>
          <Score score={this.state.score} message={this.state.message} />
        </div>
        <Wrapper>
          {this.state.tiles.map(pokemon => {
            return (
              <MemoryTile
                image={pokemon.image}
                key={pokemon.id}
                id={pokemon.id}
                clickHandler={this.clickHandler}
              />
            );
          })}
        </Wrapper>
      </>
    );
  }
}

export default App;