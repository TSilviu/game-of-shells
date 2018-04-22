import React from 'react';
import FlipMove from 'react-flip-move';

import Square from './Square';

function renderSquares(props) {
  const { 
    showBall, 
    ballPosition, 
    makePrediction,
    squares 
  } = props;

  return squares.map((s) => 
      s === ballPosition ? 
        <li key={s}>
          <Square 
            id={s}
            hasBall
            showBall={showBall}
            makePrediction={makePrediction}
          />
        </li> 
        : 
        <li key={s}>
          <Square
            id={s} makePrediction={makePrediction}
          />
        </li>
    );
}

function Board(props) { 
  return (
    <div>
      <FlipMove             
       duration={750}     
       easing="ease-out"
        enterAnimation="accordionVertical"
        leaveAnimation="accordionVertical"
        typeName="ul"
      >
        { renderSquares(props) }
      </FlipMove>
    </div>
  )
}

export default Board;