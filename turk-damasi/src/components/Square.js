import React from "react";
import "../index.css";

const Square = ({ cell, onClick, isHovered }) => {
  const cellValue = cell[0].value;
  const cellStatus = cell[0].status ? "hidden" : "active";
  const cellColor = cell[0].cell ? "black" : "white";

  return (
    <div
      className={`square ${cellColor} ${isHovered ? "selected-move" : ""}`}
      onClick={onClick}
    >
      <div className={`Cell ${cellValue} ${cellStatus}`}>
        <span></span>
      </div>
    </div>
  );
};

export default Square;
