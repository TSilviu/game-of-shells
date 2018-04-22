import React, { Component } from 'react';
import './App.css';

class Square extends Component {
  render() {
    return (
      <div className="square" />
    )
  }
}

class Board extends Component {
  constructor(props) {
    super(props);

    this.state = {
      containers: [0, 1, 2]
    }
  }

  render() {
    const { containers } = this.state;
    const containersToComponents = 
      containers.map((c) => <Square key={c} />);

    return (
      <div>
        { containersToComponents }
      </div>
    )
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <Board />
      </div>
    );
  }
}

export default App;
