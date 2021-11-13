import React, { useState } from "react";
import GameBoard from "./GameBoard";
import { checkWin } from "../gameFormat";

//This helps selects the button styles
const connectFour = 
{
  buttonRestart: 
  {
    marginTop: 20,
    padding: 10,
  },
  gameContainer: 
  {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  gameHeader: 
  {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
    fontFamily: "sans-serif",
  },
  gameTitle: 
  {
    fontFamily: "sans-serif",
  },
};

//Everytime a button has been pressed, the counter will change based off the button state
const Game = () => 
{
  const [gameBoard, setBoard] = useState(Array(42).fill(null));
  const [player, setplayer] = useState(1);
  const counter = checkWin(gameBoard);
  function resetBoard() 
  {
    setBoard(Array(42).fill(null));
    setplayer(1);
  }

  //Manages buttons so that if you click one, it gets disabled and when you win, all the buttons are disabled
  //This also alternates between players
  const manageButtonClick = (i) => 
  {
    const boardState = [...gameBoard];
    if (counter) 
    {
      return;
    }

    boardState[i] = player;
    setBoard(boardState);
    if (player === 1) 
    {
      setplayer(2);
    } 
    else 
    {
      setplayer(1);
    }
  };

  //This returns the states of the buttons and players and returns the results
  //This also makes it so that buttons that are clicked are disabled right after to prevent you from clicking the same button twice
  return (
    <div style={connectFour.gameContainer}>
      <h1 style={connectFour.gameTitle}>cchen842_lab2</h1>
      <div style={connectFour.gameHeader}>
        <h1>
          {counter && counter !== -1
            ? "Result: Player " + counter + " wins!"
            : counter
            ? "Result: Tie"
            : "Player " + player}
        </h1>
      </div>
      <div style={connectFour.gameBoard}>
        <GameBoard slots={gameBoard} onClick={manageButtonClick} />
      </div>
      <div>
        {counter ? (
          <button style={connectFour.buttonRestart} onClick={resetBoard}>
            Reset
          </button>
        ) : null}
      </div>
    </div>
  );
};

export default Game;
