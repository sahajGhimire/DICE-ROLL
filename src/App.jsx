import { useState } from 'react';
import './App.css';
import dice1 from './assets/dice1.png';
import dice2 from './assets/dice2.png';
import dice3 from './assets/dice3.png';
import dice4 from './assets/dice4.png';
import dice5 from './assets/dice5.png';
import dice6 from './assets/dice6.png';

const diceImages = [dice1, dice2, dice3, dice4, dice5, dice6];

function App() {
  const [diceValue, setDiceValue] = useState(1);
  const [animate, setAnimate] = useState(false);

  const rollDice = () => {
    const newValue = Math.floor(Math.random() * 6) + 1;
    setDiceValue(newValue);
    setAnimate(true);

    setTimeout(() => setAnimate(false), 400); // Match CSS animation duration
  };

  return (
    <div className="app">
      <h1>DICE ROLLER</h1>
      <img
        src={diceImages[diceValue - 1]}
        alt={`Dice face ${diceValue}`}
        className={`dice-image ${animate ? 'dice-animate' : ''}`}
      />
      <p>You rolled: {diceValue}</p>
      <button onClick={rollDice}>Roll Dice</button>
    </div>
  );
}

export default App;
