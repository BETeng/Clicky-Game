import React, { Component } from 'react';
import Scoreboard from './Components/Scoreboard';
import Board from './Components/Board';

class App extends Component {

  constructor() {
    super();
    this.state = {
      currentScore: 0,
      record: 0
    }
  }


  render() {
    return (
      <div>
        <header>
          <h1>Memory Click Game</h1>
          <Scoreboard
            score={this.state.currentScore}
            record={this.state.record}
          />
          <h2>Click each image only once, if a duplicate is clicked, you lose!!</h2>

        </header>

      </div>
    );
  }



}
export default App; 