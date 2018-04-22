import React from 'react';

import Square from './Square';

function Board(props) {
  const { 
    showBall, 
    ballPosition, 
    makePrediction 
  } = props;  
  
  const squares = 
    [0, 1, 2].map((c) => 
      c === ballPosition ? 
        <Square 
          key={c} 
          id={c}
          hasBall
          showBall={showBall}
          makePrediction={makePrediction}
        /> 
        : 
        <Square key={c} id={c} makePrediction={makePrediction}/>
    );

  return (
    <div>
      { squares }
    </div>
  )
}

export default Board;