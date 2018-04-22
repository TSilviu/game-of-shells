import React from 'react';

function Square(props) {
  const { hasBall, showBall, id, makePrediction } = props;

  return (
    <div id={id} className="square" onClick={makePrediction}>
      {hasBall && showBall && <div>Ball is here</div>}
    </div>
  );
}

export default Square
