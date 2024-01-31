import React from "react";
import Square from "./Square";

const Board = ({ squares, onClick, selectedStoneMove }) => {
  return (
    <div className="board">
      {squares.map((row, rowIndex) => (
        <div
          key={rowIndex}
          className={`board-row ${rowIndex % 2 === 0 ? "even-row" : "odd-row"}`}
        >
          {row.map((cell, colIndex) => (
            <Square
              key={colIndex}
              cell={cell}
              value={cell.value}
              status={cell.status}
              onClick={() => onClick(rowIndex, colIndex, cell)}
              isHovered={isCellHovered(selectedStoneMove, rowIndex, colIndex)}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

const isCellHovered = (selectedStoneMove, row, col) => {
  if (selectedStoneMove) {
    return selectedStoneMove.some(
      (move) => move.row === row && move.col === col
    );
  }
  return false;
};

export default Board;
