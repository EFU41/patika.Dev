import React, { useState, useEffect } from "react";
import Card from "./Card";

const GameBoard = () => {
  const [score, setScore] = useState(0);
  const [selectedCard, setSelectedCard] = useState(null);
  const [doubleLetters, setDoubleLetters] = useState([]);
  const [resetGameSignal, setResetGameSignal] = useState(false);
  const [clickDisabled, setClickDisabled] = useState(false);

  useEffect(() => {
    const letters = [
      "A",
      "B",
      "C",
      "D",
      "E",
      "F",
      "G",
      "J",
      "K",
      "L",
      "M",
      "N",
      "O",
      "P",
      "T",
    ];
    const shuffledLetters = [...letters, ...letters].sort(
      () => Math.random() - 0.5
    );
    setDoubleLetters(shuffledLetters);
  }, [resetGameSignal]); // resetGameSignal değiştiğinde kartları güncelle

  const handleCardClick = ({
    id,
    letter,
    setIsCardRevealed,
    clickDisabled,
  }) => {
    if (!selectedCard) {
      setSelectedCard({ id, letter, setIsCardRevealed });
    } else {
      const firstCard = selectedCard;

      if (firstCard.letter === letter) {
        setScore((prevScore) => prevScore + 50);
      } else {
        setClickDisabled(true);
        console.log("kapandı");
        setTimeout(() => {
          console.log("açıldı");
          setClickDisabled(false);
          setScore((prevScore) => Math.max(prevScore - 10, 0));
          firstCard.setIsCardRevealed(false);
          setIsCardRevealed(false);
        }, 1200);
      }

      setSelectedCard(null);
    }
  };

  const resetGame = () => {
    setScore(0);
    setResetGameSignal((prev) => !prev); // resetGameSignal'i tersine çevirerek Card bileşenlerine sinyal gönder
  };

  return (
    <div className="playgrand">
      <div className="score">Score: {score}</div>
      <div className="game-board">
        {doubleLetters.map((letter, index) => (
          <Card
            key={index}
            id={index}
            letter={letter}
            onCardClick={(cardInfo) => handleCardClick(cardInfo)}
            resetGameSignal={resetGameSignal}
            clickDisabled={clickDisabled}
          />
        ))}
      </div>
      <button onClick={resetGame}>Yeniden Oyna</button>
    </div>
  );
};

export default GameBoard;
