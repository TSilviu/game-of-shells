import React from 'react';

class Square extends React.Component {
  render() {
  	const { hasBall, showBall, id, makePrediction } = this.props;

	  return (
	    <div id={id} className="square" onClick={makePrediction}>
	      {hasBall && showBall && <div>Ball is here</div>}
	    </div>
	  );
  }
}

export default Square
