import React, { Component } from 'react';
import '../styles/App.css';

import Board from '../components/Board';
import { getRandomInt } from '../utils/helpers';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gameState: '',
      buttonText: 'Play!',
      instructions: '',
      ballPosition: 0,
      won: false
    }

    this.updateGameState = this.updateGameState.bind(this);
    this.makePrediction = this.makePrediction.bind(this);
  }

  shuffle() {
    this.setState({ballPosition: getRandomInt(0, 2)});
  }

  makePrediction(event) {
    const choice = parseInt(event.target.id, 10);

    if(this.state.gameState === 'guess'){
      this.setState({
        won: this.state.ballPosition === choice
      }, () => this.updateGameState());
    }
  }

  updateGameState() {
    const { gameState, won } = this.state;
    switch(gameState) {
      case '':
        this.setState({
          gameState: 'showBall', 
          buttonText: 'Shuffle!',
          instructions: 'Remember where the ball is'
        });
        break;
      case 'showBall':
        this.shuffle();
        this.setState({
          gameState: 'guess', 
          instructions: 'Try and guess where the ball is'
        });
        break;
      case 'guess':
        this.setState({
          gameState: '', 
          buttonText: 'Play again!',
          instructions: 
            won ? 'Correct, well done!' : 'Incorrect, try again!'
        });
        break;
      default:
        break;
    }
  }

  render() {
    const { 
      gameState, 
      buttonText, 
      instructions,
      ballPosition
    } = this.state;
    
    return (
      <div className="App">
        { gameState === '' && <Board makePrediction={this.makePrediction}/> }
        { 
          gameState === 'showBall' && 
          <Board 
            showBall 
            ballPosition={ballPosition}
            makePrediction={this.makePrediction}
          />
        }
        { gameState === 'guess' 
            && <Board ballPosition={ballPosition} makePrediction={this.makePrediction}/> }

        <p>{ instructions }</p>
        {
          gameState !== 'guess' && 
          <button onClick={this.updateGameState}>
            { buttonText }
          </button>
        }
      </div>
    );
  }
}

export default App;
