import React from "react";
import "../styles/playerSlots.css";

const style = {
  display: "grid",
  gridTemplate: "repeat(6,1fr) / repeat(7,1fr)",
};
const GameBoard = ({ slots, onClick }) => (
  <div style={style}>
    {slots.map((slot, i) => {
      return (
        <Slot disabled={slot} key={i} value={slot} onClick={() => onClick(i)} />
      );
    })}
  </div>
);

const Slot = ({ value, onClick, disabled }) => 
{
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={"slot  player" + value}
    ></button>
  );
};


export default GameBoard;
