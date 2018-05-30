import React from 'react';
import './Jumbo.css';

const Jumbo = props => (

  <div className="jumbotron jumbotron-fluid">
    <div class="container">
      <h1 className="display-4">Choose an Album Cover, but be sure not to pick the same one again!</h1>
      <p className='lead' id="rw">{props.rightWrong}</p>
      <p className='lead' id="current">{props.currentScore}</p>
      <p className='lead' id='top'>{props.topScore} </p>
    </div>
  </div>

)

export default Jumbo;