import React from "react";
// import MemoryTile from "./components/MemoryTile";
// import Wrapper from "./components/Wrapper";
import Score from "./components/Score";
import tiles from "./tiles.json";
import "./App.css";

class App extends React.Component {
  state = {
    tiles,
    score: 0,
    message: "Click any tile to start!"
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