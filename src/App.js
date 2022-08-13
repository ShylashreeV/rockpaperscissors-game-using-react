import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [userChoice, setUserChoice] = useState('rock');
  const [computerChoice, setComputerChoice] = useState('rock');
  const [userPoints, setUserPoints] = useState(0);
  const [computerPoints, setComputerPoints] = useState(0);
  const [turnResult, setTurnResult] = useState(null);
  const [result, setResult] = useState('Lets see Who wins');
  const [gameOver, setGameOver] = useState(false);

  const choices = ['rock', 'paper', 'scissors']

  const handleOnClick = (choice) => {
    setUserChoice(choice)
    generateComputerChoice()
  }

  const generateComputerChoice = () =>{
    const randomChoice = choices[Math.floor(Math.random() * choices.length)]
    setComputerChoice(randomChoice) 
  }

  const reset = () =>{
    window.location.reload()
  }

  useEffect(() => {
    const comboMoves = userChoice + computerChoice
    if(userPoints <=4 && computerPoints <=4){
      if(comboMoves === 'rockscissors' || comboMoves === 'paperrock' || comboMoves === 'scissorspaper'){
        const updatedUserPoints = userPoints + 1
        setUserPoints(updatedUserPoints)
        setTurnResult('User got the Point')
        if(updatedUserPoints === 5){
          setGameOver(true)
          setResult('User Wins')
        }
      }

      if(comboMoves === 'paperscissors' || comboMoves === 'scissorsrock' || comboMoves === 'rockpaper'){
        const updatedComputerPoints = computerPoints + 1
        setComputerPoints(updatedComputerPoints)
        setTurnResult('Computer got the Point')
        if(updatedComputerPoints === 5){
          setGameOver(true)
          setResult('Computer Wins')
        }  
      }

      if(comboMoves === 'paperpaper' || comboMoves === 'scissorsscissors' || comboMoves === 'rockrock'){
        setTurnResult('No one got the  Point')

      }
    }
  },[userChoice, computerChoice])
  
  return (
    <div className="App">
      <h1 className="heading">Rock Paper Scissors Game</h1>
      <div className="score">
        <div className="userpoint">
          <h1>
            User Points: <span>{userPoints}</span>{" "}
          </h1>
        </div>
        <div className="computerpoint">
          <h1>
            Computer Points: <span>{computerPoints}</span>{" "}
          </h1>
        </div>
      </div>

      <div className="choices">
        <div className="choice-user">
          <img className="user-hand" src={`../images/${userChoice}.svg`} />
        </div>
        <div className="choice-computer">
          <img
            className="computer-hand"
            src={`../images/${computerChoice}.svg`}
          />
        </div>
      </div>

      <div children="button-div">
        {choices.map((choice, index) => (
          <button
            className="button"
            key={index}
            onClick={() => handleOnClick(choice)}
          >
            {choice}
          </button>
        ))}
      </div>

      <div className="result">
        <h1>
          Turn Result: <span>{turnResult}</span>
        </h1>
        <h2>
          Final Result: <span>{result}</span>
        </h2>
      </div>

      <div className="button-set">
        {gameOver && (
          <button className="button" onClick={() => reset()}>
            {" "}
            Restart?{" "}
          </button>
        )}
      </div>
    </div>
  );
}

export default App;
