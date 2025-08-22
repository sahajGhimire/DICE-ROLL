import { useState } from 'react'

import './App.css'
import Dice from './Dice.jsx';


function App() {
  const [roll, setRoll] = useState(1);

  const rollDice = () => {
    const newRoll = Math.floor(Math.random() * 6) + 1;
    setRoll(newRoll);
  };

  return(
    <div className='app'>
      <h1>DICE ROLLER </h1>
      <Dice value={roll} />

      <p> You rolled {roll}</p>
      <button onClick={rollDice}>Roll Dice</button>



    </div>
  )


}

export default App;

